# SD25-CHECK · H224 · Cat-candle A: text + reference images

Checked Nov 15 2026 against `~/ClaudeCowork/marketer/.claude/skills/sd25-pe/SKILL.md` (v0.1.1, read in full for this script). Task type: video generation with reference assets (no keyframes, no storyboard, no editing, no extension). Job: seedance_2_5, omni_reference, 30 s, 9:16 set in job.json (not in the prompt).

Pass 1 checks `prompt-sd25pe-final.pre-sd25check.txt` (864 words). Pass 2 checked a 1,222-word fix in the old numbering; it is kept below for the record. **The prompt to send is the final `prompt-sd25pe-final.txt` (1,338 words, renumbered by first appearance), checked in Pass 3 and Pass 4 at the end.** The "Assets inspected" table below uses the pass-1 numbering.

## Assets inspected (pass 1 set)

| Ref | File | Probe | What is in it |
|---|---|---|---|
| @Image1 | a/image1-shopper.jpg | 880x1168 | The shopper on her sofa at night, lips closed, hand on white mouse, small lit amber candle, grey tabby cat on the sofa, lamp, laptop |
| @Image2 | a/image2-product-page.jpg | 1600x1000 | Ember & Fig "Fig & Cedar" page, $38.00, no pet info, cursor on Add to cart |
| @Image3 | a/image3-owner-actress14.jpg | 1024x1365 | Owner face, auburn side braid, rust sweater; brick wall and a black roaster behind |
| @Image4 | a/image4-owner-studio.jpg | 752x1344 | Empty sunlit studio: jar shelves, brick, table, dark laptop, lit three-wick jar, kraft mailers |
| @Image5 | a/image5-owner-sales.jpg | 1600x1000 | Shopify "Products · units sold", Fig & Cedar 3 units, −84%, red outline |
| @Image6 | a/image6-fig-cedar-jar.jpg | 768x768 | Wide amber jar, blank kraft label, three wicks, fig leaves, linen |
| @Image7 | a/image7-scout-orb.png | 600x600 | Lime orb, five dark bars, thin ring, dark background, no letters |
| @Video1 | a/video1-end-screen.mp4 | 1080x1920, 4.50 s, has audio | Scout wordmark with talking "o", "For Shopify owners", "Get free early access", "We'll set you up", "Launching December 15"; voice says "Scout interviews your shoppers for you. Get free early access." (Deepgram) |
| @Audio1 | a/audio1-shopper-voice-9s.mp3 | 9.30 s | Soft female voice, unrelated words ("we finally booked the beach house…") |
| @Audio2 | a/audio2-owner-voice-9s.mp3 | 9.25 s | Warm female voice, unrelated words ("Bright with notes of stone fruit…") |

index.html asset list and media IDs matched job.json for all 10 (7afee04b, 527991c0, 1963a66d, 824d398d, 8c33aad5, bdbf8b6a, 5aaa2bca, cae62718, 81f0f01a, df6c7e5e).

## Pass 1 (before fixes)

### a) Final Checklist
1. One primary task: PASS. Generation; "Generate a live-action story film…".
2. Subjects, counts, scene, ownership, outcome unchanged: PASS. Same story as prompt.txt.
3. Every required character, prop, scene covered; no merge: PASS. Shopper, cat, candle, owner, jar, orb, both screens, both rooms all named.
4. Every used asset has one unique role: **FAIL**. "The shopper in her night living room maps to @Image1, which jointly defines her and her room as one scene" (person + room + cat + candle + mouse). "Scout maps to @Video1, which alone defines Scout as one entity, voice and look together" (voice + end-screen picture), while @Image7 also defines Scout's orb.
5. Existing references unchanged, none invented: PASS.
6. Missing/inaccessible assets not claimed: N/A, all assets readable.
7. Unused assets listed: PASS. All 10 uploads have a role; no 【Unused Assets】 needed.
8. Inaccessible assets not treated as understood: N/A.
9. Characters/props mapped individually, no range statement: **FAIL**. The @Image1 line maps the shopper, her room, candle, mouse and cat in one line.
10. Single-character image not defining two on-screen characters: PASS for people (one woman); the cat case is logged under principle 11.
11. Each stage one state change and an ending state: PASS. One action per range; 25-30s ends "the end screen holds still".
12. User time ranges kept: PASS. 0-3s … 25-30s, continuous.
13. Editing task fields: N/A.
14. Locked ratio/duration rules followed: PASS. No ratio or duration in the prompt.
15. Extension: N/A.
16. First/last frame statements: N/A, no fixed frame.
17. Multiple keyframes: N/A.
18. Storyboard grid: N/A.
19. Blockout: N/A.
20. Emotion has observable results: PASS. "brows tightening", "sad half-smile", "eyebrows up".
21. Every speaking stage: speaker, state, words, audio, language, on/off screen: PASS. "Shopper, in English (V.O., pleased, lips closed)"; "Owner, in English (puzzled, warm)"; "Scout, in English (from the orb…)".
22. Shot/asset numbers stay identifiers: PASS.
23. No parameters, analysis or metadata: PASS.
24. "Please note that this is not video editing." once, only when the gate fires: PASS on count (fires: @Video1 4.50 s vs 30 s output). Placement is logged under the template.
25. Unreadable reference specs: N/A, ffprobe read them.
26. No unrequested negatives: PASS. Only "No subtitles appear on screen." plus per-asset exclusions.
27. Placeholders replaced, one prompt body: PASS.

### b) Non-Negotiable Principles
1. Intent First: PASS. Story, lines and outcome as approved.
2. Template First: **FAIL**. The reference-generation template's 【Subjects and Relationships】 section is missing; positions and identities are spread over Maintain Consistency.
3. Account for Every Asset: PASS.
4. User Mapping First: PASS.
5. Minimal Clarification: PASS.
6. Submission-Ready Content Only: PASS.
7. Separate Parameters: PASS.
8. No Unrequested Constraints: PASS.
9. One Best Version: PASS.
10. Separate Facts from Observations: PASS.
11. Match Subject Cardinality: **FAIL**. @Image1 defines the shopper and the cat, two named subjects that share the frame at 3-5s.

### c) Template: Generation with Reference Assets + Organizing Multiple Reference Assets
- 【Generation Goal】: PASS for content; **FAIL** for the gate line's place. The skill says to put it "immediately after the goal sentence"; it sat after the second sentence.
- 【Reference Asset Roles】, one subject per line: **FAIL** (@Image1, @Video1 as above).
- 【Unused Assets】: N/A.
- 【Subjects and Relationships】: **FAIL**, missing.
- 【Event Script】 start, events, end: PASS.
- 【Maintain Consistency】: PASS.

### d) Shot table (pass 1)
| Shot | On screen | Defined by | Result |
|---|---|---|---|
| 0-3s | shopper's hand, mouse, screen, candle | "The shopper's hand" (no @), @Image2 screen, candle from @Image1 | FAIL: no @asset for the shopper; @Image1 doubles as person and room |
| 3-5s | shopper, cat, room | "Her face", "the grey tabby cat" (no @) | FAIL: "her", no @asset |
| 5-8s | shopper, screen | "Her hand", "she" | FAIL |
| 8-10s | shopper's eyes | "Her lips" | FAIL; the Eyes in framing is not named as on the page |
| 10-12s | hand, screen, candle | "She clicks" | FAIL |
| 12-14s | flip into studio | "rises above her", studio not @-tagged | FAIL: no @asset; the move is not named "High flip" as on the page |
| 14-17s | owner, jar, screen, studio | "The owner", @Image5 | FAIL: owner and jar have no @asset in the shot |
| 17-20s | owner, jar | "She lifts the jar" | FAIL |
| 20-22s | flames, orb, owner | "the glowing lime orb" | FAIL: orb and owner have no @asset |
| 22-25s | orb, owner | "The orb", "she" | FAIL |
| 25-30s | orb, end screen | @Video1 | FAIL: @Video1 is both the picture and Scout's voice |

### e) Asset limits (pass 1)
Images 7 ≤ 30: PASS. Videos 1 (4.50 s; 4-30 s each; total 4.50 ≤ 30): PASS. Audio 2 (9.30 + 9.25 = 18.55 s; 2-30 s each; ≤ 30): PASS. Total 10 ≤ 50: PASS.

### Pass 1 FAILs (6)
1. @Image1 held the shopper, her room and the cat (checklist 4, 9; principle 11).
2. @Video1 held Scout's voice and the end-screen picture, and "alone defines Scout" contradicted @Image7 (checklist 4).
3. No 【Subjects and Relationships】 (principle 2).
4. The gate line was not right after the goal sentence (template).
5. Shots named actors as "her/she" with no @asset (shot table; Emile's H224 comment).
6. The flip and the eye shot were not named as on the page (High flip, Eyes in).

## Fixes made
Backups: `prompt-sd25pe-final.pre-sd25check.txt`, `index.pre-sd25check.html`.
- New @Image8 `a/image8-shopper-face.jpg` (488x680, a free local crop of image1: her face, bob and cardigan only), media d54d8df5-566f-400d-823a-fd87b64a0831. The shopper now maps only to @Image8.
- New @Image9 `a/image9-cat.jpg` (436x630, a crop of the cat from image1), media 696c034b-34ca-4b95-8f62-382f22de2f6f. The cat maps only to @Image9.
- @Image1 is now only the room: "do not use the woman, the cat or the laptop screen in it".
- New @Audio3 `a/audio3-scout-voice-4s.mp3` (4.50 s, the end screen's own sound), media 1040c108-8833-40b5-a3f0-943deab45436, which H226 already uploaded. @Video1 is now only the end-screen picture ("do not use its sound"), @Audio3 is only Scout's voice, @Image7 is only the orb, and the Subjects section says the orb and the "o" are one Scout.
- Added 【Subjects and Relationships】.
- Gate line moved to right after the goal sentence.
- Every shot names its actor with its @asset ("The shopper (@Image8)", "the owner (@Image3)", "Scout's orb (@Image7)", "the cat (@Image9)", rooms @Image1/@Image4, jar @Image6), and each bracket opens with its transition: Opening shot, Hard cut, High flip, Lands from the High flip, Orb becomes the "o", with Eyes in framing at 8-10s.
- The 11 spoken lines and every <sound> are unchanged (checked by diff).
- Upload uses free media uploads only, with no generation. Spend: 0 credits.

## Pass 2 (fixed prompt)

### Assets (pass 2 set, upload order)
@Image1 room 7afee04b · @Image2 product page 527991c0 · @Image3 owner face 1963a66d · @Image4 studio 824d398d · @Image5 owner screen 8c33aad5 · @Image6 jar bdbf8b6a · @Image7 orb 5aaa2bca · @Image8 shopper face d54d8df5 · @Image9 cat 696c034b · @Video1 end screen cae62718 (4.50 s) · @Audio1 shopper 81f0f01a (9.30 s) · @Audio2 owner df6c7e5e (9.25 s) · @Audio3 Scout 1040c108 (4.50 s).

### a) Final Checklist
1. One primary task: PASS. Generation.
2. Story unchanged: PASS. The lines and sounds diff is clean.
3. Every entity covered, none merged: PASS. Subjects line: "one shopper (@Image8), one grey tabby cat (@Image9), one owner (@Image3), one Fig & Cedar jar (@Image6) and one Scout".
4. One unique role per asset: PASS. 13 role lines, one per asset; @Image1 room only, @Video1 picture only, @Audio3 voice only.
5. References unchanged, none invented: PASS. @Image1-7, @Video1, @Audio1-2 keep their numbers; the new refs @Image8, @Image9 and @Audio3 are real uploads with media IDs.
6. N/A. 7. PASS, every upload has a role. 8. N/A.
9. Individual mapping: PASS. "The shopper maps to @Image8", "The grey tabby cat maps to @Image9", one per line.
10. PASS. @Image8 holds one woman; @Image3 holds one woman.
11. One state change and an ending state per range: PASS. End states at 10-12s ("blank tab"), 17-20s ("jar is in both her hands") and 25-30s ("holds still").
12. Time ranges kept: PASS. 13 N/A. 14 PASS, no ratio or duration. 15-19 N/A.
20. Observable emotion: PASS.
21. Speaking stages: PASS. Every line has a speaker, English, V.O. or on camera, and its voice: "Scout, in English (from the orb, in the voice of @Audio3, …)".
22. PASS. 23. PASS.
24. Gate line once, gate fired (4.50 s video, 30 s output): PASS. It sits right after the goal sentence.
25. N/A. 26. PASS. 27. PASS.

### b) Principles 1-11
1 PASS · 2 PASS (template sections Goal, Asset Roles, Subjects and Relationships, Event Script, Maintain Consistency) · 3 PASS · 4 PASS · 5 PASS · 6 PASS · 7 PASS · 8 PASS · 9 PASS · 10 PASS · 11 PASS (one image per subject: shopper @Image8, cat @Image9, owner @Image3).

### c) Template
Goal + gate placement PASS · Asset Roles one per line PASS · Unused N/A (none) · Subjects and Relationships PASS · Event Script PASS · Maintain Consistency PASS.

### d) Shot table (pass 2)
| Shot | Who/what on screen → the ONE asset for each | Camera / transition | Result |
|---|---|---|---|
| 0-3s | shopper @Image8 (hand) · screen @Image2 · room and candle @Image1 | Opening shot, macro, slow push | PASS |
| 3-5s | shopper @Image8 · cat @Image9 · room @Image1 | Hard cut, close-up, static | PASS |
| 5-8s | shopper @Image8 · screen @Image2 | Hard cut, MCU, slow push | PASS |
| 8-10s | shopper @Image8 (eyes) | Hard cut, Eyes in framing | PASS |
| 10-12s | shopper @Image8 (hand) · screen @Image2 · candle (room @Image1) | Hard cut, macro, static | PASS |
| 12-14s | shopper @Image8 → studio @Image4 | High flip | PASS |
| 14-17s | owner @Image3 · studio @Image4 · jar @Image6 · screen @Image5 | Lands from the High flip, slow push | PASS |
| 17-20s | owner @Image3 · jar @Image6 | Hard cut, static | PASS |
| 20-22s | jar @Image6 · orb @Image7 · owner @Image3 | Hard cut, macro, pull back | PASS |
| 22-25s | orb @Image7 · owner @Image3; voice @Audio3 | Hard cut, static | PASS |
| 25-30s | orb @Image7 → end screen @Video1; voice @Audio3 | Orb becomes the "o", push then locked | PASS |

### e) Asset limits (pass 2)
Images 9 ≤ 30: PASS. Videos 1, 4.50 s (4-30 s; total ≤ 30): PASS. Audio 3: 9.30 + 9.25 + 4.50 = 23.05 s (each 2-30 s; total ≤ 30): PASS. Total 13 ≤ 50: PASS.

**Pass 2: zero FAILs.**

Open risk (not a checklist item): the prompt is now 1,222 words, past the 380-740 words of the official 30 s examples. The skill sets no word limit ("Do not impose a fixed word limit"). The added words are @-tags, role lines and the Subjects section.

## Pass 3 (after independent check 1, Nov 15)
Independent check 1 (fresh context) found 2 checklist items my pass 2 wrongly marked PASS, plus page issues.
- **Item 11 (end states):** 7 of 11 ranges had no end state. **Fixed:** every range now ends "At the end, …" (11 of 11).
- **Item 21 (audio bound at each speaking stage):** the shopper and owner lines did not name their voice. **Fixed:** every shopper line says "in the voice of @Audio1", every owner line "in the voice of @Audio2", and Scout's lines "@Audio3" (11 of 11 lines).
- **Emile's "first actor" question and upload order:** the shopper was uploaded 8th. **Fixed:** renumbered in order of first appearance, so @Image1 = the shopper's face. Mapping (pass 2 → pass 3): @Image8→@Image1, @Image2→@Image2, @Image1→@Image3 (room), @Image9→@Image4 (cat), @Image3→@Image5 (owner), @Image4→@Image6 (studio), @Image5→@Image7 (owner screen), @Image6→@Image8 (jar), @Image7→@Image9 (orb). job.json, the page cards, the box and the prompt all use the new order.
- **8-10s bracket:** "Eyes in framing, eye framing only, no dive" read as a builder's note. Now "[Hard cut. Eyes in: extreme close-up on the shopper's (@Image1) eyes, …]".
- **@Video1 line:** now "the Scout wordmark whose "o" is the orb and all the text under it" (covers "We'll set you up" and "Launching December 15").
- **Page:** stale counts fixed (Input pills, Limits, Unused, Verdict, compare header and word counts). The old reference-board section is labelled as earlier rounds. A "Superseded" banner sits above the round-3 comparison notes. Both page copies of the prompt match prompt-sd25pe-final.txt exactly.

### Final Checklist (pass 3, prompt-sd25pe-final.txt, 1,333 words)
1 PASS · 2 PASS (11 lines and every <sound> unchanged, diff clean) · 3 PASS · 4 PASS (13 role lines, one job each) · 5 PASS (renumbered by us, the prompt's author; every reference is a real upload in job.json order) · 6 N/A · 7 PASS · 8 N/A · 9 PASS · 10 PASS · 11 PASS (11 "At the end" lines) · 12 PASS · 13 N/A · 14 PASS · 15-19 N/A · 20 PASS · 21 PASS (each line: speaker + @image, English, its @Audio, V.O. or on camera; listeners' mouths closed) · 22 PASS · 23 PASS (no builder notes) · 24 PASS (once, right after the goal sentence) · 25 N/A · 26 PASS · 27 PASS.
Principles 1-11: all PASS. Template: all sections PASS.

### Shot table (pass 3 numbering)
| Shot | Who/what → ONE asset each | Move | Result |
|---|---|---|---|
| 0-3s | shopper @Image1 · screen @Image2 · room and candle @Image3 · voice @Audio1 | Opening, macro, slow push | PASS |
| 3-5s | shopper @Image1 · room @Image3 · cat @Image4 | Hard cut, CU static | PASS |
| 5-8s | shopper @Image1 · screen @Image2 · @Audio1 | Hard cut, MCU push | PASS |
| 8-10s | shopper @Image1 · @Audio1 | Hard cut, Eyes in | PASS |
| 10-12s | shopper @Image1 · screen @Image2 · @Audio1 | Hard cut, macro | PASS |
| 12-14s | shopper @Image1 → studio @Image6 | High flip | PASS |
| 14-17s | owner @Image5 · studio @Image6 · jar @Image8 · screen @Image7 · @Audio2 | Lands from the High flip | PASS |
| 17-20s | owner @Image5 · jar @Image8 · @Audio2 | Hard cut, static | PASS |
| 20-22s | jar @Image8 · orb @Image9 · owner @Image5 | Hard cut, macro pull back | PASS |
| 22-25s | orb @Image9 · owner @Image5 · @Audio3 | Hard cut, static | PASS |
| 25-30s | orb @Image9 → end screen @Video1 · @Audio3 | Orb becomes the "o" | PASS |

Asset limits unchanged: 9 images, 1 video 4.50 s, 3 audio 23.05 s, 13 total. PASS. **Pass 3: zero FAILs.**

## Pass 4 (after independent check 2, Nov 15)
Check 2 verdict: PASS, with zero checklist FAILs. Its non-blocking fixes are applied:
- Tags added in 10-12s ("the candle flame in her living room (@Image3)") and 12-14s ("on her sofa in the living room (@Image3)").
- The @Audio3 line no longer says "do not use its words": that clip's words are the 25-30s line itself. It is now "used only for Scout's calm female voice timbre".
- Page: the @Image5/@Image6 cards and Risks now quote the real prompt lines; "her lips are closed in @Image1 (her face)"; the compile caption lists 【Subjects and Relationships】; this file's header names the 1,338-word final.
- Not changed: the product page shows "Cart (0)", which is accurate before the click. The prompt is 1,338 words; the skill sets no limit, and the length is all @-tags, voice bindings and end states that Emile's "missing the actors / moves" asked for.
Final Checklist re-run on the final file: all 27 items PASS or N/A as in Pass 3 (items 4, 11, 21 and 23 re-verified). **Zero FAILs.**
