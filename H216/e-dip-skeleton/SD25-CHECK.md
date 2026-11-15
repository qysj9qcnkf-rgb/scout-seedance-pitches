# SD25-CHECK · H228 · cat-candle, Emile's new story (Nov 15 2026)

Checked against ByteDance's `sd25-pe` skill (`~/ClaudeCowork/marketer/.claude/skills/sd25-pe/SKILL.md`, v0.1.1), read in full this session (lines 1-996). Self-update ran (`npx --yes skills@latest update sd25-pe -y`, exit 0, "No installed skills found matching", so the local copy is used).
Prompt checked: `prompt-sd25pe-final.txt` (995 words by `wc -w`, after loop 1; pass-1 text in `prompt-sd25pe-final.pre-loop1.txt`). Job plan: `job-plan.json`. Assets: `a2/` (13 files). Previous round's check: `SD25-CHECK.pre-newstory.md`.
Task type: **video generation with reference assets** (no editing, no extension, no keyframes, no storyboard, no blockout). The Dip whole-video skeleton is dropped (Emile, H215: a whole-video reference copied its look, "horrendous").

## Story contract (from Emile's Nov 15 1:00 PM comment, the Marketer's brief)
Shopper: cat lady, candles all over her apartment, cat nearby; scrolls the Fig & Cedar page up and down, visibly searching; annoyed (visual only); inner voice, lips closed, camera moving around her: {Are these safe for cats?}; finds nothing, closes the site; {I guess we'll never know.} → High flip from her down to the owner → owner at her desk on Fig & Cedar sales, wrong hypothesis: {I guess no one's interested in Fig and Cedar. No one wants this. Time to discontinue the product line.}; blows out the candle → Scout end-screen voice {Don't guess why your shoppers don't buy.} → usual H158 end screen {Scout interviews your shoppers for you. Get free early access.} No ka-ching. No Scout call scene.

## Assets inspected (every one opened)

| Ref | File | What it really is | Spec / media |
|---|---|---|---|
| @Image1 | a2/image1-shopper.png | Woman, dark-brown bob with bangs, cream cardigan, at a laptop with a mouse; dim room, lamp, grey tabby, small lit candle behind/beside her | 880x1168 · 561ba2d9 |
| @Image2 | a2/image2-shopper-apartment.png | NEW (free GPT Image via codex exec): empty night living room, beige sofa + throw, wooden coffee table with an open laptop, floor lamp, ~20 lit unlabelled candles on table/shelf/windowsill/side table, cat bed + toy; no people, no animal, no text | 941x1672 · 6c1574e8 (free upload) |
| @Image3 | a2/image3-cat.jpg | Grey tabby only (crop), standing, sofa/blanket behind (prompt says "sitting", not curled) | 696c034b |
| @Image4 | a2/image4-product-page.png | Ember & Fig product page: Fig & Cedar, $38.00, Add to cart, Burn time / Size / Wax rows; nothing about pets. Mouse pointer (was on Add to cart) painted out locally in loop 1 | 1600x1000 · 4e666139 (free upload) |
| @Image5 | a2/image5-owner.png | Woman, auburn side braid, rust sweater; brick + roaster drum behind | 1536x2048 · 1963a66d |
| @Image6 | a2/image6-owner-studio.png | Sunlit studio: shelves of lit jars, brick, table, laptop (black screen), a lit three-wick "Fig & Cedar" jar | 752x1344 · 50199c94 |
| @Image7 | a2/image7-owner-sales.png | Shopify-style "Products · units sold", Fig & Cedar row in red: 3, -84% | 1600x1000 · 8c33aad5 |
| @Image8 | a2/image8-fig-cedar-jar.png | Loop 1: the page's own product photo cropped: short, wide amber jar, three wicks, plain kraft label, fig leaves on linen. Same jar as @Image4 and the @Image7 thumbnail | 660x660 · a6be392e (free upload) |
| @Video1 | a2/video1-high-flip.mp4 | Higgsfield Viral "High flip": camera rises over a man in a throne chair, flips over the chair top (dark frame), comes down onto a second man seated at a card table. No audio | 5.00 s, 600x1066 · d44455fb |
| @Video2 | a2/video2-end-screen.mp4 | H158 Scout end screen; its voice says "Scout interviews your shoppers for you. Get free early access." | 4.50 s, 1080x1920, audio · cae62718 |
| @Audio1 | a2/audio1-shopper-voice.mp3 | Calm woman's voice (Serene) | 9.00 s · 4203dd9a |
| @Audio2 | a2/audio2-owner-voice.mp3 | Alexandra, warm, dry | 10.00 s · 181644ae |
| @Audio3 | a2/audio3-scout-voice.mp3 | Video2's soundtrack, the end-screen line | 4.50 s · 390b5a38 |

Not sent any more: The Dip clay skeleton (old Video1) and the Scout logo image (no orb in this story).

## a) Final Checklist (SKILL.md lines 961-987)
1. One primary task. **PASS**: generation ("Generate a warm, realistic film in two homes…").
2. Subjects, counts, ownership, outcome unchanged. **PASS**: two women, one cat, one Fig & Cedar jar (owner's), no purchase ("She never clicks Add to cart", "nothing bought"), owner blows out the candle, Scout lesson.
3. Required entities covered, none merged. **PASS**: shopper @Image1, apartment @Image2, cat @Image3, product page @Image4, owner @Image5, studio @Image6, sales screen @Image7, jar @Image8, High flip @Video1, end screen @Video2, three voices @Audio1-3.
4. Each used asset one unique role. **PASS**: 13 lines in 【Reference Asset Roles】, one entity each; @Image1 "do not use the room, candle, laptop or cat in it"; @Image6 "do not use the Fig & Cedar jar in it"; @Video1 "only for the camera move at 12-15s".
5. References unchanged / none invented. **PASS**: @Image1-8, @Video1-2, @Audio1-3 = the 13 uploads in job-plan order.
6. Missing assets not claimed. **N/A** (all readable). 7. Irrelevant assets not forced; unused listed. **PASS**: every uploaded asset has a role, so no 【Unused Assets】 needed (skill line 213: only "whenever this set is nonempty").
8. Inaccessible assets not treated as understood. **N/A**.
9. Individual mapping, no range statements. **PASS**.
10. Single-character image for one character. **PASS**: @Image1 shopper only, @Image5 owner only.
11. One primary state change + clear end state per stage. **PASS**: all 10 segments end "At the end, …". 10-12s: primary change = site closed (leaning back is its follow-through); 19-22s: primary change = candle out (the line leads into it).
12. User time ranges kept, continuous. **PASS**: 0-2, 2-5, 5-8, 8-10, 10-12, 12-15, 15-19, 19-22, 22-25, 25-30. The input compiled here is the Marketer's script with its timed shot list (the page's shot list); those times are the script author's own (skill line 531: "only when the user has already provided numerical time segments"), not invented from the 30 s parameter.
13-18. Editing / locked params / extension / keyframes / multi-keyframes / storyboard. **N/A**.
19. Blockout. **N/A** (no blockout this round).
20. Abstract emotion/camera made observable. **PASS**: annoyance = "brows pinch, she exhales sharply through her nose, glances at the cat… back at the screen"; High flip = "rises above…, flips over the top of the sofa back in one continuous overhead turn, and comes down on the other side onto the owner".
21. Speakers. **PASS**: every line names speaker + @Audio + "in English" + on/off screen; shopper "lips closed" on both inner-voice lines; owner "lips closed" while Scout speaks; no accent added.
22. Identifiers not read as camera params. **PASS**.
23. No output parameters / analysis in prompt. **PASS**: no ratio, duration, resolution, "vertical".
24. Gate line. **PASS**: @Video1 5.0 s and @Video2 4.5 s vs a 30 s output → "Please note that this is not video editing." once, right after the goal sentence.
25. **N/A**. 26. No unrequested negatives. **PASS**: "no ka-ching" is Emile's own ask; "No subtitles" + on-screen words list per skill line 875/881.
27. Placeholders replaced, one prompt body. **PASS**.

## b) Principles 1-11
1 Intent First **PASS** (his story, his lines, his order) · 2 Template First **PASS** (Generation with Reference Assets + grouping) · 3 Account for Every Asset **PASS** · 4 User Mapping First **PASS** · 5 Minimal Clarification **PASS** · 6 Submission-ready only **PASS** · 7 Separate Parameters **PASS** · 8 No unrequested constraints **PASS** · 9 One best version **PASS** · 10 Facts vs observations **PASS** (looks from assets, identities from the story) · 11 Subject cardinality **PASS**.

## c) Template: Generation with Reference Assets
Goal **PASS** · asset roles with "do not use" **PASS** · subjects/relationships with homes kept apart **PASS** · event script with end states **PASS** · Maintain Consistency **PASS**. Reference video role (skill line 238): @Video1 inherits only camera movement; "do not use its people, clothes, chairs, rooms, props, colours or light" **PASS**. Audio conflict (line 240): @Audio1/@Audio2 "do not use its words"; @Audio3 words only at 25-30s; @Video2 "do not use its audio" **PASS**.

## d) Shot ledger: every person, object and move, and the ONE @asset that defines it

| Time | Move (in words) | People | Objects | Line | Verdict |
|---|---|---|---|---|---|
| 0-2s | wide slow arc through the room to her | shopper @Image1 | apartment + candles @Image2, cat @Image3 | none | PASS |
| 2-5s | camera circles from her side to behind her shoulder | shopper @Image1 | (room @Image2) | Shopper inner voice @Audio1 {Are these safe for cats?} | PASS |
| 5-8s | over-shoulder close on screen | shopper @Image1 | product page @Image4 | none | PASS |
| 8-10s | close on face | shopper @Image1 | cat @Image3 | none (visual annoyance) | PASS |
| 10-12s | medium | shopper @Image1 | page @Image4 closes, cat @Image3 | Shopper inner voice @Audio1 {I guess we'll never know.} | PASS |
| 12-15s | High flip @Video1: rise, overhead flip over sofa back, down onto owner | shopper @Image1 → owner @Image5 | studio @Image6 | none | PASS |
| 15-19s | over-shoulder onto screen, slow push-in to face | owner @Image5 | sales @Image7, jar @Image8 | Owner @Audio2 {I guess no one's interested in Fig and Cedar. No one wants this.} | PASS |
| 19-22s | medium | owner @Image5 | jar @Image8 (blown out) | Owner @Audio2 {Time to discontinue the product line.} | PASS |
| 22-25s | close on jar, owner soft behind | owner @Image5 | jar @Image8 smoke | Scout @Audio3 off screen {Don't guess why your shoppers don't buy.} | PASS |
| 25-30s | smoke dissolves into end screen | none | end screen @Video2 | Scout @Audio3 {Scout interviews your shoppers for you. Get free early access.} | PASS |

Cause before reaction (skill line 148): the page with no pet info (5-8s) comes before her annoyance (8-10s); the red Fig & Cedar row is on screen before the owner frowns (15-19s). **PASS**.

## e) Dialogue ledger vs Emile's script (exact)
Prompt `{}` lines, in order: "Are these safe for cats?" · "I guess we'll never know." · "I guess no one's interested in Fig and Cedar. No one wants this." · "Time to discontinue the product line." · "Don't guess why your shoppers don't buy." · "Scout interviews your shoppers for you. Get free early access." = the brief's six lines, word for word. **PASS**. No ka-ching cue anywhere (grep "ka-ching" only in the "no ka-ching" sentence). No Scout call scene, no orb. **PASS**.

## f) Asset limits
8 images (≤30, each <4K) · 2 videos, 9.5 s total (≤30 s) · 3 audio, 23.5 s total (≤30 s) · 13 total (≤50). Prompt 995 words (≤1,000). **PASS**.

## Loop 1 (two fresh-context checks, Nov 15) and what changed
Check 1 and check 2 both said Goal fit YES and VERDICT FAIL. Found and fixed:
- @Image4's mouse pointer sat on Add to cart under "keep its layout and words" (purchase risk) → pointer painted out (local ffmpeg patch, free upload 4e666139); the negative "She never clicks Add to cart" removed (it named the action).
- The jar didn't match: page/sales thumbnail = short, wide, blank kraft label; old @Image8 = tall, labelled → @Image8 is now the page's own jar photo (free upload a6be392e); @Image6 line fences "the tall labelled jar" and keeps shelf jars "unlit background stock, never on her desk"; subjects line says "the only jar on her desk".
- The High flip could land in the shopper's room (@Video1's second person sits in the same room) → 12-15s now "comes down out of it into a different place: the owner's sunlit studio (@Image6)".
- Cat pose: @Image3 stands → "sitting beside her", not "curled".
- This file: word count corrected (995), item 11 wording made exact.
Not changed, with reason:
- Time ranges (check 1 item 1): kept; they come from our own timed script (see item 12), the same practice as every earlier H216-H228 prompt.
- Line order (check 1 item 2): kept. Emile's own comment puts the question while she is shopping and scrolling ("She's scrolling through, and she's not buying yet. She's like, 'Is this safe for cats?'… the camera is around") and the annoyance after ("at some point she gets annoyed"). The prompt follows that order.

## Result: zero FAILs (after loop 1).
