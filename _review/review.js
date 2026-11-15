/* H239 review layer: open assets in place, inline shot thumbnails, a rail of
   what is on screen, a shot/section nav and "back to where I was".
   Shared by every H216/H217 pitch page. No dependencies. */
(function () {
  'use strict';
  if (window.__rvLoaded) return;
  window.__rvLoaded = true;

  var ID_RE = /^(?:(p\d+)-)?(image|video|audio)(\d+)$/i;
  var KIND = { image: 'Image', video: 'Video', audio: 'Audio' };
  var SHORT = { image: 'I', video: 'V', audio: 'A' };
  var MENTION_RE = /@(Image|Video|Audio)\s?(\d{1,2})(?!\d)|<(image|video|audio)(\d{1,2})>|\b(Image|Video|Audio) (\d{1,2})\b/g;
  var SKIP_TAGS = { SCRIPT: 1, STYLE: 1, TEXTAREA: 1, BUTTON: 1, A: 1, INPUT: 1, SELECT: 1, OPTION: 1, TITLE: 1, NOSCRIPT: 1, svg: 1, SVG: 1, LABEL: 1 };
  var MEDIA_FILE = /\.(png|jpe?g|webp|gif|avif|mp4|webm|mov|m4v|mp3|wav|m4a|ogg)(?:[?#].*)?$/i;

  var assets = [];
  var byId = new Map();
  var bySrc = new Map();
  var hasPasses = false;
  var rows = [];
  var rowSet = new Set();
  var sections = [];
  var posters = new Map();
  var ui = {};
  var state = { row: null, section: null, lbIndex: -1, lbItem: null, lbOpener: null, backY: null, decorating: false };

  function txt(el) { return el ? (el.textContent || '').replace(/\s+/g, ' ').trim() : ''; }
  function clip(s, n) { return s.length > n ? s.slice(0, n - 1).replace(/\s+\S*$/, '') + '…' : s; }
  function h(tag, cls, attrs) {
    var el = document.createElement(tag);
    if (cls) el.className = cls;
    if (attrs) for (var k in attrs) { if (k === 'text') el.textContent = attrs[k]; else el.setAttribute(k, attrs[k]); }
    return el;
  }
  function fileOf(u) { try { return decodeURIComponent(new URL(u, location.href).pathname.split('/').pop()); } catch (e) { return ''; } }
  function kindOfFile(u) {
    if (/\.(mp4|webm|mov|m4v)(?:[?#]|$)/i.test(u)) return 'video';
    if (/\.(mp3|wav|m4a|ogg)(?:[?#]|$)/i.test(u)) return 'audio';
    return 'image';
  }


  /* ---------- 0. One-screen overview (Emile, Nov 15: "Why is it so long?") ---------- */
  var overview = null;
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function lca(list) {
    if (!list.length) return null;
    var anc = [];
    for (var e = list[0]; e; e = e.parentElement) anc.push(e);
    for (var i = 0; i < anc.length; i++) {
      var ok = true;
      for (var j = 1; j < list.length; j++) if (!anc[i].contains(list[j])) { ok = false; break; }
      if (ok) return anc[i];
    }
    return document.body;
  }
  function words(el) { var t = txt(el); return t ? t.split(' ').length : 0; }

  function buildOverview() {
    var dataEl = document.getElementById('rv-summary');
    if (!dataEl) return false;
    var data;
    try { data = JSON.parse(dataEl.textContent); } catch (e) { return false; }
    var heads = Array.prototype.filter.call(document.querySelectorAll('h1, h2'), function (x) { return !x.closest('.rv-ui'); });
    var L = lca(heads) || document.body;
    function h2name(h2) {
      var clone = h2.cloneNode(true);
      clone.querySelectorAll('small, cite').forEach(function (x) { x.remove(); });
      return txt(clone).replace(/^[0-9]{1,2}b?(?=[A-Z])/, '').replace(/^·/, '').trim();
    }
    var groups = [], cur = { title: 'Top of the original page: pitch and why this technique', nodes: [] };
    groups.push(cur);
    function walk(container) {
      Array.prototype.slice.call(container.children).forEach(function (c) {
        if (/^(SCRIPT|STYLE|LINK|TEMPLATE)$/.test(c.tagName) || c.classList.contains('rv-ui') || c.id === 'rv-summary') return;
        var h2s = c.tagName === 'H2' ? [c] : Array.prototype.slice.call(c.querySelectorAll('h2'));
        var h2 = h2s[0];
        var startsHere = h2 && (c.tagName === 'H2' || c.firstElementChild === h2 || c.tagName === 'SECTION');
        if (h2s.length >= 2 && c.tagName !== 'H2' && !(c.tagName === 'SECTION' && c.firstElementChild === h2 && h2s.length < 3)) { walk(c); return; }
        if (startsHere) {
          if (cur.nodes.length) { cur = { title: h2name(h2), nodes: [] }; groups.push(cur); }
          else cur.title = h2name(h2);
        }
        cur.nodes.push(c);
      });
    }
    walk(L);
    groups = groups.filter(function (g) { return g.nodes.length; });

    var ov = h('section', 'rv-ov', { 'data-rv-skip': '1', 'aria-label': 'Review this pitch' });
    var kicker = document.querySelector('.kicker');
    var html = '';
    html += '<div class="rv-ov-top"><div class="rv-eyebrow">' + esc(kicker ? txt(kicker) : 'Seedance pitch') + '</div>';
    html += '<h1 class="rv-ov-h1">' + esc(data.title || (document.querySelector('h1') ? txt(document.querySelector('h1')) : document.title)) + '</h1>';
    if (data.technique) html += '<p class="rv-ov-tech"><b>This version:</b> ' + esc(data.technique) + '</p></div>';
    else html += '</div>';
    html += '<div class="rv-ov-grid"><div class="rv-ov-story"><h2 class="rv-ov-h rv-secanchor" data-name="The story">The story</h2><ol>';
    (data.story || []).forEach(function (l) { html += '<li>' + esc(l) + '</li>'; });
    html += '</ol></div>';
    html += '<div class="rv-ov-cast"><h2 class="rv-ov-h rv-secanchor" data-name="Cast and files">What Seedance gets <small>' + assets.length + ' files, tap to open</small></h2><div class="rv-cast"></div></div></div>';
    html += '<h2 class="rv-ov-h rv-secanchor" data-name="Shot by shot">Shot by shot <small>' + (data.shots || []).length + ' shots</small></h2>';
    html += '<div class="rv-shots-wrap"><table class="rv-shots"><thead><tr><th>Time</th><th>Who</th><th>What happens</th><th>Line spoken</th><th>Assets</th></tr></thead><tbody>';
    (data.shots || []).forEach(function (sh) {
      var ids = (sh.assets || []).filter(function (id) { return byId.has(id); });
      var t = String(sh.t || ''), pp = '';
      var pm = t.match(/^\s*(P\d)\s+/i);
      if (pm) { pp = '<span class="pp rv-pp">' + pm[1].toUpperCase() + '</span> '; t = t.slice(pm[0].length); }
      html += '<tr data-rv-assets="' + esc(ids.join(' ')) + '"><td class="rv-t">' + pp + esc(t) + '</td><td class="rv-who">' + esc(sh.who) + '</td><td class="rv-what">' + esc(sh.what) + '</td>' +
        '<td class="rv-line">' + (sh.line ? (sh.speaker ? '<span class="rv-spk">' + esc(sh.speaker) + ':</span> ' : '') + '<q>' + esc(sh.line) + '</q>' : '<span class="rv-none">no words</span>') + '</td>' +
        '<td class="rv-as"></td></tr>';
    });
    html += '</tbody></table></div>';
    html += '<p class="rv-ov-foot">The full prompt, the history, risks and every check are closed below under <b>Details for checkers</b>. Nothing was removed. <button type="button" class="rv-open-prompt">Open the prompt to send</button></p>';
    ov.innerHTML = html;

    var cast = ov.querySelector('.rv-cast');
    var lastPass = null;
    assets.forEach(function (a) {
      if (hasPasses && a.pass !== lastPass) { lastPass = a.pass; cast.appendChild(h('span', 'rv-cast-pass', { text: 'Pass ' + a.pass.slice(1) })); }
      cast.appendChild(thumb(a, { big: true }));
    });
    ov.querySelectorAll('tr[data-rv-assets]').forEach(function (tr) {
      var cell = tr.querySelector('.rv-as');
      tr.getAttribute('data-rv-assets').split(' ').filter(Boolean).forEach(function (id) { cell.appendChild(thumb(byId.get(id))); });
    });

    var first0 = groups.length ? groups[0].nodes[0] : null;
    var host = first0 ? first0.parentNode : L;
    var marker = document.createComment('rv');
    host.insertBefore(marker, first0);
    var box = h('div', 'rv-checkers', { 'data-rv-skip-none': '1' });
    var head = h('div', 'rv-ch-head');
    head.innerHTML = '<h2 class="rv-ov-h rv-secanchor" data-name="Details for checkers">Details for checkers</h2><p>Everything else that was on this page, closed. Open only what you need.</p>';
    box.appendChild(head);
    groups.forEach(function (g) {
      var d = h('details', 'rv-details');
      var sm = h('summary', 'rv-sum rv-secanchor', { 'data-name': clip(g.title, 48), 'data-rv-skip': '1' });
      var w = g.nodes.reduce(function (n, x) { return n + words(x); }, 0);
      sm.innerHTML = '<span>' + esc(g.title) + '</span><small>' + w.toLocaleString('en-US') + ' words</small>';
      d.appendChild(sm);
      var body = h('div', 'rv-dbody');
      d.appendChild(body);
      box.appendChild(d);
      g.nodes.forEach(function (n) { body.appendChild(n); });
    });
    host.insertBefore(ov, marker);
    host.insertBefore(box, marker);
    marker.remove();
    if (ov.getBoundingClientRect().left < 8) { ov.classList.add('rv-gutter'); box.classList.add('rv-gutter'); }
    document.documentElement.classList.add('rv-has-ov');
    ov.querySelector('.rv-open-prompt').addEventListener('click', function () {
      var ds = Array.prototype.slice.call(box.querySelectorAll('details'));
      var pick = null, score = -1;
      if (data.prompt_section) ds.forEach(function (d) { if (!pick && txt(d.querySelector('summary')).indexOf(data.prompt_section) === 0) { pick = d; score = 9; } });
      if (!pick) ds.forEach(function (d) {
        var t = txt(d.querySelector('summary')).toLowerCase(), s0 = 0;
        if (/prompt/.test(t)) s0 += 2;
        if (/send|final|exact|seedance gets/.test(t)) s0 += 3;
        if (/sd25|optimi/.test(t)) s0 += 1;
        if (/history|draft|before|ours vs|compare|next to|check|eval|risk/.test(t)) s0 -= 4;
        if (s0 > score) { score = s0; pick = d; }
      });
      if (pick && score > 0) jumpTo(pick.querySelector('summary'), 'start');
    });
    box.addEventListener('toggle', function () { setTimeout(function () { observeRows(); updateSection(); }, 50); }, true);
    overview = ov;
    return true;
  }

  function reveal(el) {
    for (var e = el; e; e = e.parentElement) if (e.tagName === 'DETAILS' && !e.open) e.open = true;
  }

  /* ---------- 1. Asset registry ---------- */
  function collectAssets() {
    // Pages without asset ids: give captioned figures ("Image 3 · her cat") their id.
    if (!document.querySelector('[id^="image"], [id^="video"], [id^="audio"], [id*="-image"], [id*="-video"], [id*="-audio"]')) {
      document.querySelectorAll('figure').forEach(function (f) {
        if (f.closest('.rv-ui') || f.id) return;
        var m = txt(f.querySelector('figcaption')).match(/^@?(Image|Video|Audio)\s?(\d{1,2})\b/i);
        if (!m || !f.querySelector('img, video, audio')) return;
        var id = m[1].toLowerCase() + m[2];
        if (!document.getElementById(id)) f.id = id;
      });
    }
    document.querySelectorAll('[id]').forEach(function (el) {
      var m = el.id.match(ID_RE);
      if (!m || el.closest('.rv-ui')) return;
      if (byId.has(el.id)) return;
      var kind = m[2].toLowerCase(), n = +m[3], pass = m[1] ? m[1].toLowerCase() : '';
      var media = el.querySelector('video, audio, img');
      var src = '';
      if (media) {
        src = media.getAttribute('src') || '';
        if (!src) { var s = media.querySelector('source'); if (s) src = s.getAttribute('src') || ''; }
      }
      if (!src) { var link = el.querySelector('a[href]'); if (link && MEDIA_FILE.test(link.getAttribute('href'))) src = link.getAttribute('href'); }
      var full = src;
      var wrap = media && media.closest('a[href]');
      if (wrap && media.tagName === 'IMG' && /\.(png|jpe?g|webp|gif)$/i.test(wrap.getAttribute('href'))) full = wrap.getAttribute('href');
      var mtype = media ? media.tagName.toLowerCase() : kindOfFile(src);
      if (mtype === 'img') mtype = 'image';

      var tagRe = /@?(?:image|video|audio)\s?\d+|<(?:image|video|audio)\d+>/gi;
      var title = '';
      var tEl = el.querySelector('h4, h3, .ameta b, figcaption b, .body > b, .meta h4');
      if (tEl) title = txt(tEl);
      if (!title || /^(image|video|audio)\s?\d+$/i.test(title)) {
        var tag = el.querySelector('.tag');
        var t2 = tag ? txt(tag).replace(tagRe, '').replace(/new · .*$/i, '').trim() : '';
        if (t2) title = t2;
      }
      title = title.replace(tagRe, '').replace(/^[\s·:—-]+/, '').trim();

      var role = [];
      el.querySelectorAll('p, .gives, .not, .ameta span, figcaption, .k').forEach(function (p) {
        if (p.closest('.src, code, .mid') || p.matches('.meta, .src, .mid')) return;
        if (p.classList.contains('src') || p.classList.contains('mid')) return;
        if (p.querySelector('p, .gives, .not')) return;
        var clone = p.cloneNode(true);
        clone.querySelectorAll('.mid, code, b:first-child + .mid').forEach(function (x) { x.remove(); });
        var s = txt(clone);
        if (!s || s === title) return;
        if (role.indexOf(s) < 0) role.push(s);
      });
      if (!title) title = role.length ? clip(role[0].replace(tagRe, '').replace(/^[\s·:—-]+/, ''), 70) : KIND[kind] + ' ' + n;
      if (role.length === 1 && role[0] === title) role = [];

      var a = {
        id: el.id, el: el, kind: kind, n: n, pass: pass, mtype: mtype,
        src: src ? new URL(src, location.href).href : '',
        full: full ? new URL(full, location.href).href : '',
        title: title, role: role.slice(0, 3).map(function (r) { return clip(r, 340); }),
        label: (pass ? pass.toUpperCase() + ' · ' : '') + '@' + KIND[kind] + n,
        short: (pass ? pass.slice(1) + '·' : '') + SHORT[kind] + n,
        uses: []
      };
      if (pass) hasPasses = true;
      assets.push(a);
      byId.set(el.id, a);
      if (a.src) bySrc.set(fileOf(a.src), a);
      if (a.full) bySrc.set(fileOf(a.full), a);
    });
  }

  function isAssetEl(node) {
    for (var el = node.nodeType === 1 ? node : node.parentElement; el; el = el.parentElement) {
      if (el.id && byId.has(el.id) && byId.get(el.id).el === el) return true;
    }
    return false;
  }

  /* Which pass (p1/p2) does an element belong to, on two-pass pages. */
  function passOf(node) {
    if (!hasPasses) return '';
    var el = node.nodeType === 1 ? node : node.parentElement;
    for (var e = el; e && e !== document.body; e = e.parentElement) {
      if (e.classList) {
        if (e.classList.contains('p1')) return 'p1';
        if (e.classList.contains('p2')) return 'p2';
      }
      var id = e.id || '';
      var m = id.match(/^(p\d)-|(?:pass|Pass)[-_]?(\d)|Raw(\d)$/);
      if (m) return 'p' + (m[1] ? m[1].slice(1) : (m[2] || m[3]));
    }
    var pp = el && el.closest('tr, li, p') && el.closest('tr, li, p').querySelector('.pp');
    if (pp) { var mm = txt(pp).match(/P(\d)/); if (mm) return 'p' + mm[1]; }
    var scope = (el && (el.closest('section') || el.closest('.part'))) || document.body;
    try {
      var r = document.createRange();
      r.setStart(scope, 0);
      r.setEndBefore(node.nodeType === 1 ? node : node);
      var before = r.toString();
      var re = /\b(?:pass|Pass|PASS)\s*(\d)\b|\bP(\d)\b/g, mt, last = '';
      while ((mt = re.exec(before))) last = mt[1] || mt[2];
      if (last) return 'p' + last;
    } catch (e) { /* ignore */ }
    return '';
  }

  function resolve(kind, n, node) {
    kind = kind.toLowerCase();
    var c = assets.filter(function (a) { return a.kind === kind && a.n === n; });
    if (!c.length) return null;
    if (c.length === 1) return c[0];
    var p = passOf(node);
    for (var i = 0; i < c.length; i++) if (c[i].pass === p) return c[i];
    return c[0];
  }

  /* ---------- 2. Mentions ---------- */
  function wrapMentions(root) {
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: function (node) {
        if (!node.nodeValue || node.nodeValue.length < 6) return NodeFilter.FILTER_REJECT;
        MENTION_RE.lastIndex = 0;
        if (!MENTION_RE.test(node.nodeValue)) return NodeFilter.FILTER_REJECT;
        for (var e = node.parentElement; e; e = e.parentElement) {
          if (SKIP_TAGS[e.tagName] || e.isContentEditable) return NodeFilter.FILTER_REJECT;
          if (e.dataset && e.dataset.rvSkip) return NodeFilter.FILTER_REJECT;
          if (e.classList && (e.classList.contains('rv-ui') || e.classList.contains('rv-m') || e.classList.contains('tag') || e.classList.contains('hidden'))) return NodeFilter.FILTER_REJECT;
        }
        if (isAssetEl(node)) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    var nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(function (node) {
      var s = node.nodeValue, frag = document.createDocumentFragment(), last = 0, m, any = false;
      MENTION_RE.lastIndex = 0;
      var parts = [];
      while ((m = MENTION_RE.exec(s))) {
        var kind = m[1] || m[3] || m[5], n = +(m[2] || m[4] || m[6]);
        parts.push({ start: m.index, end: m.index + m[0].length, kind: kind, n: n, text: m[0] });
      }
      parts.forEach(function (p) {
        var a = resolve(p.kind, p.n, node);
        if (!a) return;
        any = true;
        if (p.start > last) frag.appendChild(document.createTextNode(s.slice(last, p.start)));
        var sp = h('span', 'rv-m rv-k-' + a.kind, { role: 'button', tabindex: '0', 'data-rv': a.id, title: 'Open ' + a.label + ' · ' + a.title });
        sp.textContent = p.text;
        frag.appendChild(sp);
        last = p.end;
      });
      if (!any) return;
      if (last < s.length) frag.appendChild(document.createTextNode(s.slice(last)));
      node.parentNode.replaceChild(frag, node);
    });
  }

  function markAnchors() {
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
      if (a.closest('.rv-ui') || a.dataset.rv) return;
      var id = decodeURIComponent(a.getAttribute('href').slice(1));
      if (byId.has(id)) { a.dataset.rv = id; a.classList.add('rv-a'); }
    });
  }

  /* ---------- 3. Rows (shots and timed lines) ---------- */
  var TIME_RE = /(\d+(?:\.\d+)?)\s*(?:s\s*)?[-–—]\s*(\d+(?:\.\d+)?)\s*s(?:ec)?\b/i;
  var SHOT_RE = /\bShot\s+(\d+)\b/i;

  function rowKey(row) {
    var head;
    if (row.tagName === 'TR') head = txt(row.cells[0]);
    else head = txt(row).slice(0, 70);
    var t = head.match(TIME_RE), sh = head.match(SHOT_RE);
    if (row.tagName === 'TR' && !t) { var t2 = txt(row).slice(0, 40).match(TIME_RE); if (t2) t = t2; }
    var key = { time: t ? t[1] + '-' + t[2] : '', shot: sh ? sh[1] : '' };
    var p = passOf(row);
    key.pass = p;
    return key;
  }

  function sectionOf(el) {
    var best = null;
    for (var i = 0; i < sections.length; i++) {
      var pos = sections[i].el.compareDocumentPosition(el);
      if (sections[i].el === el || (pos & Node.DOCUMENT_POSITION_FOLLOWING) || (pos & Node.DOCUMENT_POSITION_CONTAINED_BY)) best = sections[i];
    }
    return best;
  }

  function collectSections() {
    sections = [];
    var anchors = document.querySelectorAll('.rv-secanchor');
    if (anchors.length) {
      anchors.forEach(function (a) { sections.push({ el: a, name: a.dataset.name || clip(txt(a), 48) }); });
      return;
    }
    document.querySelectorAll('h2').forEach(function (h2) {
      if (h2.closest('.rv-ui') || isAssetEl(h2)) return;
      var clone = h2.cloneNode(true);
      clone.querySelectorAll('small, cite').forEach(function (x) { x.remove(); });
      var name = txt(clone).replace(/^[0-9]{1,2}b?(?=[A-Z])/, '').replace(/^·/, '').trim();
      if (!name) return;
      sections.push({ el: h2, name: clip(name, 48) });
    });
  }

  function buildRows() {
    var found = new Map();
    function add(mentionEl, asset) {
      var row = mentionEl.closest('tr, li, p, dd');
      if (!row || row.closest('.rv-ui') || isAssetEl(row)) return;
      if (row.closest('thead')) return;
      if (txt(row).length > 1600) return;
      var r = found.get(row);
      if (!r) { r = { el: row, own: [], borrowed: [] }; found.set(row, r); }
      if (r.own.indexOf(asset) < 0) r.own.push(asset);
    }
    document.querySelectorAll('tr[data-rv-assets]').forEach(function (tr) {
      var r = { el: tr, own: [], borrowed: [], ownThumbs: true };
      tr.getAttribute('data-rv-assets').split(' ').forEach(function (id) { var a = byId.get(id); if (a && r.own.indexOf(a) < 0) r.own.push(a); });
      found.set(tr, r);
    });
    document.querySelectorAll('.rv-m[data-rv], a.rv-a[data-rv]').forEach(function (m) {
      var a = byId.get(m.dataset.rv);
      if (a) add(m, a);
    });
    // Timed rows with no asset of their own (shot-list tables) borrow from rows with the same time.
    document.querySelectorAll('tbody tr, li, p').forEach(function (row) {
      if (found.has(row) || row.closest('.rv-ui') || isAssetEl(row)) return;
      if (row.tagName !== 'TR' && txt(row).length > 900) return;
      var k = rowKey(row);
      if (!k.time && !(k.shot && row.tagName === 'TR')) return;
      found.set(row, { el: row, own: [], borrowed: [] });
    });
    rows = [];
    found.forEach(function (r) {
      r.key = rowKey(r.el);
      r.section = sectionOf(r.el);
      rows.push(r);
    });
    rows.sort(function (a, b) { return a.el.compareDocumentPosition(b.el) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1; });
    var byTime = new Map(), byShot = new Map();
    rows.forEach(function (r) {
      if (!r.own.length) return;
      if (r.key.time) { var k = r.key.pass + '|' + r.key.time; byTime.set(k, (byTime.get(k) || []).concat(r.own)); }
      if (r.key.shot) { var k2 = r.key.pass + '|' + r.key.shot; byShot.set(k2, (byShot.get(k2) || []).concat(r.own)); }
    });
    rows.forEach(function (r) {
      if (r.own.length) return;
      var pool = (r.key.time && byTime.get(r.key.pass + '|' + r.key.time)) || (r.key.shot && byShot.get(r.key.pass + '|' + r.key.shot)) || [];
      pool.forEach(function (a) { if (r.borrowed.indexOf(a) < 0) r.borrowed.push(a); });
    });
    rows = rows.filter(function (r) { return r.own.length || r.borrowed.length; });
    assets.forEach(function (a) { a.uses = []; });
    rows.forEach(function (r) {
      r.el.classList.add('rv-row');
      r.label = rowLabel(r);
      r.own.forEach(function (a) { if (a.uses.indexOf(r) < 0) a.uses.push(r); });
    });
  }

  function fmtTime(t) { return t.replace('-', '–') + ' s'; }
  function rowLabel(r) {
    var bits = [];
    if (r.key.pass) bits.push(r.key.pass.toUpperCase());
    if (r.key.shot) bits.push('Shot ' + r.key.shot);
    if (r.key.time) bits.push(fmtTime(r.key.time));
    return bits.join(' · ');
  }
  function rowAssets(r) { return r.own.concat(r.borrowed.filter(function (a) { return r.own.indexOf(a) < 0; })); }

  /* ---------- 4. Thumbnails ---------- */
  function poster(a, cb) {
    if (a.mtype !== 'video' || !a.src) return;
    if (posters.has(a.id)) { var p = posters.get(a.id); if (typeof p === 'string') cb(p); else p.push(cb); return; }
    var waiting = [cb];
    posters.set(a.id, waiting);
    posterQueue.push(a);
    pumpPosters();
  }
  var posterQueue = [], posterBusy = false;
  function pumpPosters() {
    if (posterBusy || !posterQueue.length) return;
    posterBusy = true;
    var a = posterQueue.shift();
    var v = document.createElement('video');
    v.muted = true; v.playsInline = true; v.preload = 'auto'; v.crossOrigin = 'anonymous';
    var done = false;
    function finish(url) {
      if (done) return; done = true;
      var cbs = posters.get(a.id);
      posters.set(a.id, url || '');
      if (url && Array.isArray(cbs)) cbs.forEach(function (f) { f(url); });
      v.removeAttribute('src'); try { v.load(); } catch (e) { /* ignore */ }
      posterBusy = false;
      setTimeout(pumpPosters, 30);
    }
    v.addEventListener('loadeddata', function () {
      try { v.currentTime = Math.min(0.6, (v.duration || 1) / 3); } catch (e) { finish(''); }
    });
    v.addEventListener('seeked', function () {
      try {
        var w = 240, hgt = Math.round(w * (v.videoHeight || 9) / (v.videoWidth || 16));
        var c = document.createElement('canvas'); c.width = w; c.height = hgt;
        c.getContext('2d').drawImage(v, 0, 0, w, hgt);
        finish(c.toDataURL('image/jpeg', 0.72));
      } catch (e) { finish(''); }
    });
    v.addEventListener('error', function () { finish(''); });
    setTimeout(function () { finish(''); }, 8000);
    v.src = a.src;
  }

  function thumb(a, opts) {
    opts = opts || {};
    var b = h('button', 'rv-th rv-k-' + a.kind + (opts.borrowed ? ' rv-borrowed' : '') + (opts.big ? ' rv-th-big' : ''), {
      type: 'button', 'data-rv': a.id, 'data-l': a.short,
      title: a.label + ' · ' + a.title + (opts.borrowed ? ' (named for this time in the prompt)' : ''),
      'aria-label': 'Open ' + a.label + ', ' + a.title
    });
    var box = h('span', 'rv-th-box');
    if (a.mtype === 'image' && a.src) {
      var im = h('img', '', { src: a.src, alt: '', loading: 'lazy', decoding: 'async' });
      box.appendChild(im);
    } else if (a.mtype === 'video') {
      box.classList.add('rv-th-vid');
      poster(a, function (url) { var im = h('img', '', { src: url, alt: '' }); box.insertBefore(im, box.firstChild); });
    } else {
      box.classList.add('rv-th-aud');
      box.appendChild(waveSvg());
    }
    b.appendChild(box);
    if (opts.big) {
      var cap = h('span', 'rv-th-cap');
      cap.appendChild(h('b', '', { text: a.label }));
      cap.appendChild(h('span', '', { text: a.title }));
      b.appendChild(cap);
    }
    return b;
  }
  function waveSvg() {
    var ns = 'http://www.w3.org/2000/svg';
    var s = document.createElementNS(ns, 'svg');
    s.setAttribute('viewBox', '0 0 24 16'); s.setAttribute('aria-hidden', 'true');
    [3, 7, 11, 15, 19].forEach(function (x, i) {
      var hh = [6, 12, 15, 9, 5][i];
      var r = document.createElementNS(ns, 'rect');
      r.setAttribute('x', x); r.setAttribute('y', (16 - hh) / 2); r.setAttribute('width', 2); r.setAttribute('height', hh); r.setAttribute('rx', 1);
      r.setAttribute('fill', 'currentColor');
      s.appendChild(r);
    });
    return s;
  }

  function placeRowThumbs() {
    rows.forEach(function (r) {
      if (!r.key.time && !r.key.shot) return;
      if (r.ownThumbs) return;
      var old = r.el.querySelector(':scope > .rv-rt, :scope > td > .rv-rt');
      if (old) old.remove();
      var strip = h('span', 'rv-ui rv-rt');
      r.own.forEach(function (a) { strip.appendChild(thumb(a)); });
      r.borrowed.forEach(function (a) { if (r.own.indexOf(a) < 0) strip.appendChild(thumb(a, { borrowed: true })); });
      if (r.el.tagName === 'TR') { (r.el.cells[0] || r.el).appendChild(strip); strip.classList.add('rv-rt-cell'); }
      else r.el.appendChild(strip);
    });
  }

  /* ---------- 5. Lightbox ---------- */
  function buildLightbox() {
    var lb = h('div', 'rv-ui rv-lb', { role: 'dialog', 'aria-modal': 'true', 'aria-label': 'Asset viewer', hidden: '' });
    lb.innerHTML =
      '<div class="rv-lb-scrim" data-close></div>' +
      '<div class="rv-lb-box">' +
      '<div class="rv-lb-top"><span class="rv-lb-label"></span><span class="rv-lb-count"></span>' +
      '<button type="button" class="rv-lb-x" data-close aria-label="Close (Esc)">Close <kbd>Esc</kbd></button></div>' +
      '<div class="rv-lb-body"><button type="button" class="rv-lb-nav rv-prev" aria-label="Previous asset (←)">‹</button>' +
      '<div class="rv-lb-stage"></div>' +
      '<button type="button" class="rv-lb-nav rv-next" aria-label="Next asset (→)">›</button></div>' +
      '<div class="rv-lb-info"><h3 class="rv-lb-title"></h3><div class="rv-lb-role"></div>' +
      '<div class="rv-lb-uses"></div><div class="rv-lb-actions"><button type="button" class="rv-lb-card">Show its card on the page</button>' +
      '<span class="rv-lb-hint">← → step through assets</span></div></div>' +
      '</div>';
    document.body.appendChild(lb);
    ui.lb = lb;
    lb.addEventListener('click', function (e) {
      if (e.target.closest('[data-close]')) { closeLB(); return; }
      if (e.target.closest('.rv-prev')) { step(-1); return; }
      if (e.target.closest('.rv-next')) { step(1); return; }
      if (e.target.closest('.rv-lb-card')) {
        var a = state.lbItem; closeLB(true);
        if (a && a.el) jumpTo(a.el, 'start');
        return;
      }
      var u = e.target.closest('[data-row]');
      if (u) { var r = rows[+u.dataset.row]; closeLB(true); if (r) jumpTo(r.el, 'center'); }
    });
  }

  function lockScroll(on) {
    var de = document.documentElement;
    if (on) {
      var sw = window.innerWidth - de.clientWidth;
      de.classList.add('rv-locked');
      if (sw > 0) de.style.setProperty('--rv-sbw', sw + 'px');
    } else {
      de.classList.remove('rv-locked');
      de.style.removeProperty('--rv-sbw');
    }
  }

  function openLB(item, opener) {
    var y = window.scrollY;
    if (!ui.lb) buildLightbox();
    state.lbOpener = opener || document.activeElement;
    var idx = assets.indexOf(item);
    state.lbIndex = idx;
    state.lbItem = item;
    renderLB();
    if (ui.lb.hidden) { ui.lb.hidden = false; lockScroll(true); }
    var x = ui.lb.querySelector('.rv-lb-x');
    try { x.focus({ preventScroll: true }); } catch (e) { x.focus(); }
    if (window.scrollY !== y) window.scrollTo(0, y);
  }

  function stopMedia() {
    if (!ui.lb) return;
    ui.lb.querySelectorAll('video, audio').forEach(function (m) { try { m.pause(); } catch (e) { /* ignore */ } });
  }

  function renderLB() {
    var a = state.lbItem, lb = ui.lb;
    stopMedia();
    var stage = lb.querySelector('.rv-lb-stage');
    stage.innerHTML = '';
    var src = a.full || a.src;
    var m;
    if (a.mtype === 'video') { m = h('video', '', { src: src, controls: '', playsinline: '', preload: 'auto' }); m.autoplay = true; m.loop = true; }
    else if (a.mtype === 'audio') { m = h('div', 'rv-lb-aud'); m.appendChild(waveSvg()); var au = h('audio', '', { src: src, controls: '', preload: 'auto' }); m.appendChild(au); }
    else m = h('img', '', { src: src, alt: a.title });
    stage.appendChild(m);
    var lab = lb.querySelector('.rv-lb-label');
    lab.className = 'rv-lb-label rv-k-' + (a.kind || 'image');
    lab.textContent = a.label || 'Picture on this page';
    lb.querySelector('.rv-lb-count').textContent = state.lbIndex >= 0 ? (state.lbIndex + 1) + ' of ' + assets.length + ' assets sent' : 'Not one of the assets sent';
    lb.querySelector('.rv-lb-title').textContent = a.title || '';
    var role = lb.querySelector('.rv-lb-role');
    role.innerHTML = '';
    (a.role || []).forEach(function (r) { role.appendChild(h('p', '', { text: r })); });
    var uses = lb.querySelector('.rv-lb-uses');
    uses.innerHTML = '';
    var keyed = (a.uses || []).filter(function (r) { return r.label; });
    var seen = {};
    keyed = keyed.filter(function (r) { var k = r.key.pass + '|' + (r.key.time || ('s' + r.key.shot)); if (seen[k]) return false; seen[k] = 1; return true; });
    if (keyed.length) {
      uses.appendChild(h('span', 'rv-lb-uses-h', { text: 'Named in' }));
      keyed.slice(0, 14).forEach(function (r) {
        var b = h('button', 'rv-pill', { type: 'button', 'data-row': rows.indexOf(r), title: r.section ? r.section.name : '' });
        b.textContent = r.label;
        uses.appendChild(b);
      });
    }
    var many = state.lbIndex >= 0 && assets.length > 1;
    lb.querySelectorAll('.rv-lb-nav').forEach(function (n) { n.hidden = !many; });
    lb.querySelector('.rv-lb-hint').hidden = !many;
    lb.querySelector('.rv-lb-card').hidden = !a.el;
  }

  function step(d) {
    if (state.lbIndex < 0 || !assets.length) return;
    state.lbIndex = (state.lbIndex + d + assets.length) % assets.length;
    state.lbItem = assets[state.lbIndex];
    renderLB();
  }

  function closeLB(keepFocus) {
    if (!ui.lb || ui.lb.hidden) return;
    var y = window.scrollY;
    stopMedia();
    ui.lb.querySelector('.rv-lb-stage').innerHTML = '';
    ui.lb.hidden = true;
    lockScroll(false);
    if (!keepFocus && state.lbOpener && state.lbOpener.focus) { try { state.lbOpener.focus({ preventScroll: true }); } catch (e) { /* ignore */ } }
    if (window.scrollY !== y) window.scrollTo(0, y);
  }

  function adHoc(src, title, kind) {
    return { kind: kind, mtype: kind, src: src, full: src, title: title, role: [], label: '', uses: [] };
  }

  function openForImg(img, opener) {
    var asset = null;
    for (var e = img; e; e = e.parentElement) { if (e.id && byId.has(e.id)) { asset = byId.get(e.id); break; } }
    if (!asset) asset = bySrc.get(fileOf(img.currentSrc || img.src)) || null;
    if (!asset) {
      var link = img.closest('a[href]');
      var big = link && /\.(png|jpe?g|webp|gif)$/i.test(link.getAttribute('href')) ? new URL(link.getAttribute('href'), location.href).href : (img.currentSrc || img.src);
      var fig = img.closest('figure');
      var cap = fig ? txt(fig.querySelector('figcaption')) : '';
      asset = adHoc(big, cap || img.alt || fileOf(big), 'image');
    }
    openLB(asset, opener || img);
  }

  /* ---------- 6. Jumps and "back to where I was" ---------- */
  function jumpTo(el, block) {
    state.backY = window.scrollY;
    reveal(el);
    var r = el.getBoundingClientRect();
    var target = block === 'center' ? window.scrollY + r.top - window.innerHeight * 0.38 : window.scrollY + r.top - 16;
    window.scrollTo(0, Math.max(0, target));
    el.classList.remove('rv-flash'); void el.offsetWidth; el.classList.add('rv-flash');
    setTimeout(function () { el.classList.remove('rv-flash'); }, 1700);
    showBack();
  }
  function showBack() {
    if (!ui.back) {
      ui.back = h('div', 'rv-ui rv-back', { role: 'status' });
      var b = h('button', 'rv-back-go', { type: 'button' });
      b.textContent = '↩ Back to where I was';
      var x = h('button', 'rv-back-x', { type: 'button', 'aria-label': 'Dismiss' });
      x.textContent = '×';
      ui.back.appendChild(b); ui.back.appendChild(x);
      document.body.appendChild(ui.back);
      b.addEventListener('click', function () { var y = state.backY; hideBack(); if (y != null) window.scrollTo(0, y); });
      x.addEventListener('click', hideBack);
    }
    ui.back.hidden = false;
  }
  function hideBack() { if (ui.back) ui.back.hidden = true; state.backY = null; }

  /* ---------- 7. Rail (desktop) and strip (phone) ---------- */
  function buildRail() {
    var rail = h('aside', 'rv-ui rv-rail', { 'aria-label': 'Review panel' });
    rail.innerHTML =
      '<div class="rv-r-head"><span class="rv-eyebrow">Review</span><button type="button" class="rv-all">All ' + assets.length + ' assets ›</button></div>' +
      '<nav class="rv-r-sec" aria-label="Sections"></nav>' +
      '<div class="rv-r-shots"><div class="rv-eyebrow rv-shots-h">Shots in this section</div><div class="rv-pills"></div></div>' +
      '<div class="rv-r-now"><div class="rv-eyebrow">On screen now</div><div class="rv-now-label"></div><div class="rv-now-text"></div><div class="rv-now-grid"></div></div>';
    document.body.appendChild(rail);
    ui.rail = rail;

    var strip = h('div', 'rv-ui rv-strip', { 'aria-label': 'Assets on screen' });
    strip.innerHTML =
      '<button type="button" class="rv-s-nav" aria-expanded="false">Shots</button>' +
      '<div class="rv-s-main"><div class="rv-s-label"></div><div class="rv-s-thumbs"></div></div>';
    document.body.appendChild(strip);
    ui.strip = strip;

    var sheet = h('div', 'rv-ui rv-sheet', { hidden: '', role: 'dialog', 'aria-label': 'Jump to a section or shot' });
    sheet.innerHTML = '<div class="rv-sheet-box"><div class="rv-r-head"><span class="rv-eyebrow">Jump to</span><button type="button" class="rv-sheet-x">Close</button></div>' +
      '<nav class="rv-r-sec" aria-label="Sections"></nav><div class="rv-eyebrow rv-shots-h">Shots in this section</div><div class="rv-pills"></div>' +
      '<button type="button" class="rv-all rv-all-wide">Browse all ' + assets.length + ' assets</button></div>';
    document.body.appendChild(sheet);
    ui.sheet = sheet;

    renderSections();
    document.documentElement.classList.add('rv-on');

    function onClick(e) {
      var t = e.target;
      if (t.closest('.rv-all')) { closeSheet(); if (assets.length) openLB(assets[0], t); return; }
      var s = t.closest('[data-sec]');
      if (s) { closeSheet(); jumpTo(sections[+s.dataset.sec].el, 'start'); return; }
      var p = t.closest('[data-row]');
      if (p) { closeSheet(); jumpTo(rows[+p.dataset.row].el, 'center'); return; }
    }
    rail.addEventListener('click', onClick);
    sheet.addEventListener('click', function (e) {
      if (e.target === sheet || e.target.closest('.rv-sheet-x')) { closeSheet(); return; }
      onClick(e);
    });
    strip.querySelector('.rv-s-nav').addEventListener('click', function () {
      var open = sheet.hidden;
      sheet.hidden = !open;
      this.setAttribute('aria-expanded', String(open));
    });
  }
  function closeSheet() { if (ui.sheet && !ui.sheet.hidden) { ui.sheet.hidden = true; ui.strip.querySelector('.rv-s-nav').setAttribute('aria-expanded', 'false'); } }

  function renderSections() {
    [ui.rail, ui.sheet].forEach(function (root) {
      var nav = root.querySelector('.rv-r-sec');
      nav.innerHTML = '';
      sections.forEach(function (s, i) {
        var b = h('button', 'rv-sec', { type: 'button', 'data-sec': i, title: s.name });
        b.textContent = s.name;
        nav.appendChild(b);
      });
    });
  }

  function renderShots() {
    var sec = state.section;
    var list = rows.filter(function (r) { return r.section === sec && r.label; });
    var seen = {};
    list = list.filter(function (r) { if (seen[r.label]) return false; seen[r.label] = 1; return true; });
    [ui.rail, ui.sheet].forEach(function (root) {
      var box = root.querySelector('.rv-pills');
      var head = root.querySelector('.rv-shots-h');
      box.innerHTML = '';
      head.hidden = !list.length; box.hidden = !list.length;
      if (root === ui.rail) root.querySelector('.rv-r-shots').hidden = !list.length;
      list.forEach(function (r) {
        var b = h('button', 'rv-pill' + (r === state.row ? ' is-on' : ''), { type: 'button', 'data-row': rows.indexOf(r), title: clip(txt(r.el), 120) });
        b.textContent = r.key.time ? (r.key.pass ? r.key.pass.toUpperCase() + ' ' : '') + fmtTime(r.key.time) : r.label;
        box.appendChild(b);
      });
    });
    [ui.rail, ui.sheet].forEach(function (root) {
      root.querySelectorAll('.rv-sec').forEach(function (b) { b.classList.toggle('is-on', sections[+b.dataset.sec] === sec); });
    });
    var on = ui.rail.querySelector('.rv-sec.is-on');
    if (on) { var nav = ui.rail.querySelector('.rv-r-sec'); var top = on.offsetTop - nav.offsetTop; if (top < nav.scrollTop || top > nav.scrollTop + nav.clientHeight - 24) nav.scrollTop = top - 40; }
  }

  function renderNow() {
    var r = state.row;
    var grid = ui.rail.querySelector('.rv-now-grid');
    var label = ui.rail.querySelector('.rv-now-label');
    var text = ui.rail.querySelector('.rv-now-text');
    var sThumbs = ui.strip.querySelector('.rv-s-thumbs');
    var sLabel = ui.strip.querySelector('.rv-s-label');
    grid.innerHTML = ''; sThumbs.innerHTML = '';
    var secName = state.section ? state.section.name : '';
    if (!r) {
      label.textContent = secName || 'Scroll to a shot';
      text.textContent = 'No asset is named in this part. Scroll to a shot or tap a name like @Image2 to open it here.';
      sLabel.textContent = secName || 'Scroll to a shot';
      ui.strip.classList.add('is-empty');
      return;
    }
    ui.strip.classList.remove('is-empty');
    label.textContent = (r.label ? r.label + ' · ' : '') + (r.section ? r.section.name : '');
    var t = r.el.tagName === 'TR' ? Array.prototype.map.call(r.el.cells, function (c) { return txt(c); }).filter(Boolean).join(' · ') : txt(r.el);
    text.textContent = clip(t, 180);
    rowAssets(r).forEach(function (a) {
      var borrowed = r.own.indexOf(a) < 0;
      grid.appendChild(thumb(a, { big: true, borrowed: borrowed }));
      sThumbs.appendChild(thumb(a, { borrowed: borrowed }));
    });
    sLabel.textContent = (r.label || clip(t, 40)) + (r.section ? ' · ' + r.section.name : '');
  }

  /* Current section: last h2 above the reading line. Current row: IntersectionObserver band. */
  var visible = new Set();
  function readingLine() { return window.innerHeight * 0.4; }
  function updateSection() {
    var line = readingLine(), cur = null;
    for (var i = 0; i < sections.length; i++) {
      if (sections[i].el.getBoundingClientRect().top <= line) cur = sections[i]; else break;
    }
    if (cur !== state.section) {
      state.section = cur;
      if (state.row && state.row.section !== cur) {
        var inSec = rows.filter(function (r) { return r.section === cur; });
        state.row = null;
        pickRowFrom(inSec);
      }
      renderShots(); renderNow();
    }
  }
  function pickRowFrom(list) {
    var line = readingLine(), best = null, bestD = Infinity;
    list.forEach(function (r) {
      var b = r.el.getBoundingClientRect();
      if (b.bottom < 0 || b.top > window.innerHeight) return;
      var d = b.top <= line && b.bottom >= line ? 0 : Math.min(Math.abs(b.top - line), Math.abs(b.bottom - line));
      if (d < bestD) { bestD = d; best = r; }
    });
    if (best) state.row = best;
  }
  function updateRow() {
    var list = visible.size ? Array.from(visible) : rows.filter(function (r) { return r.section === state.section; });
    var prev = state.row;
    pickRowFrom(list);
    if (state.row !== prev) { renderShots(); renderNow(); }
  }
  var io = null;
  function observeRows() {
    if (io) io.disconnect();
    visible.clear();
    if (!('IntersectionObserver' in window)) return;
    io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        var r = en.target.__rvRow;
        if (!r) return;
        if (en.isIntersecting) visible.add(r); else visible.delete(r);
      });
      updateRow();
    }, { rootMargin: '-25% 0px -45% 0px', threshold: 0 });
    rows.forEach(function (r) { r.el.__rvRow = r; io.observe(r.el); });
  }
  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () { ticking = false; updateSection(); if (!visible.size) updateRow(); });
  }

  /* ---------- 8. Global events ---------- */
  function onClickCapture(e) {
    if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    var t = e.target;
    if (!(t instanceof Element)) return;
    var th = t.closest('.rv-th[data-rv]');
    if (th) { e.preventDefault(); e.stopPropagation(); openLB(byId.get(th.dataset.rv), th); return; }
    if (t.closest('.rv-ui')) return;
    var m = t.closest('.rv-m[data-rv]');
    if (m) { e.preventDefault(); e.stopPropagation(); openLB(byId.get(m.dataset.rv), m); return; }
    var a = t.closest('a[href]');
    if (a) {
      var href = a.getAttribute('href') || '';
      if (href.charAt(0) === '#' && href.length > 1) {
        var id = decodeURIComponent(href.slice(1));
        if (byId.has(id)) { e.preventDefault(); e.stopPropagation(); openLB(byId.get(id), a); return; }
        var target = document.getElementById(id);
        if (target) { e.preventDefault(); e.stopPropagation(); jumpTo(target, 'start'); return; }
        return;
      }
      if (MEDIA_FILE.test(href) && !/^(https?:)?\/\//.test(href.replace(location.origin, ''))) {
        var img = a.querySelector('img');
        if (img) { e.preventDefault(); e.stopPropagation(); openForImg(img, a); return; }
        var url = new URL(href, location.href).href;
        var known = bySrc.get(fileOf(url));
        e.preventDefault(); e.stopPropagation();
        openLB(known || adHoc(url, txt(a) || fileOf(url), kindOfFile(url)), a);
        return;
      }
      return;
    }
    if (t.tagName === 'IMG' && !t.closest('button')) { e.preventDefault(); e.stopPropagation(); openForImg(t, t); }
  }

  function onKey(e) {
    if (ui.lb && !ui.lb.hidden) {
      if (e.key === 'Escape') { e.preventDefault(); closeLB(); }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); step(-1); }
      else if (e.key === 'ArrowRight') { e.preventDefault(); step(1); }
      else if (e.key === 'Tab') {
        var f = Array.prototype.filter.call(ui.lb.querySelectorAll('button, [controls], a[href]'), function (x) { return !x.hidden && x.offsetParent !== null; });
        if (!f.length) return;
        var i = f.indexOf(document.activeElement);
        if (e.shiftKey && i <= 0) { e.preventDefault(); f[f.length - 1].focus({ preventScroll: true }); }
        else if (!e.shiftKey && i === f.length - 1) { e.preventDefault(); f[0].focus({ preventScroll: true }); }
      }
      return;
    }
    if (e.key === 'Escape') { closeSheet(); return; }
    if ((e.key === 'Enter' || e.key === ' ') && e.target.classList && e.target.classList.contains('rv-m')) {
      e.preventDefault(); openLB(byId.get(e.target.dataset.rv), e.target);
    }
  }

  /* ---------- 9. Boot ---------- */
  function decorate() {
    state.decorating = true;
    collectAssets();
    if (!assets.length) { state.decorating = false; return false; }
    wrapMentions(document.body);
    markAnchors();
    collectSections();
    buildRows();
    placeRowThumbs();
    state.decorating = false;
    return true;
  }

  function boot() {
    collectAssets();
    try { buildOverview(); } catch (e) { if (window.console) console.warn('rv overview', e); }
    if (!decorate()) return;
    buildRail();
    observeRows();
    updateSection();
    updateRow();
    renderShots(); renderNow();
    var hid = decodeURIComponent((location.hash || '').slice(1));
    if (hid && byId.has(hid)) { window.scrollTo(0, 0); openLB(byId.get(hid), null); }
    else if (hid && document.getElementById(hid)) { var tg = document.getElementById(hid); reveal(tg); tg.scrollIntoView(); }
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    // Pages that re-render their prompt (tabs, toggles) get decorated again.
    var pending = null;
    var mo = new MutationObserver(function (muts) {
      if (state.decorating) return;
      var relevant = muts.some(function (m) {
        if (m.target.closest && m.target.closest('.rv-ui')) return false;
        for (var i = 0; i < m.addedNodes.length; i++) {
          var n = m.addedNodes[i];
          if (n.nodeType === 3 || (n.nodeType === 1 && !n.classList.contains('rv-ui') && !n.classList.contains('rv-m'))) return true;
        }
        return false;
      });
      if (!relevant) return;
      clearTimeout(pending);
      pending = setTimeout(function () {
        mo.disconnect();
        decorate();
        renderSections(); observeRows(); state.section = undefined; updateSection(); updateRow(); renderShots(); renderNow();
        mo.observe(document.body, { childList: true, subtree: true });
      }, 250);
    });
    mo.observe(document.body, { childList: true, subtree: true });
  }

  window.addEventListener('click', onClickCapture, true);
  document.addEventListener('keydown', onKey);
  if (document.readyState !== 'loading') setTimeout(boot, 0);
  else document.addEventListener('DOMContentLoaded', function () { setTimeout(boot, 30); });
})();
