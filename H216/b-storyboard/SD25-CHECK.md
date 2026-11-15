# SD25-CHECK · H225 · Cat-candle B: line-art storyboard

Checked Nov 15 2026 against `~/ClaudeCowork/marketer/.claude/skills/sd25-pe/SKILL.md` (v0.1.1, re-read in full for this script). Task type: video generation with reference assets, using the **Storyboard Grids** template. The output is 30 s, 9:16 (set on the job, not in the prompt).

Pass 1 checks `prompt-sd25pe-final.pre-sd25check.txt` (896 words). Pass 2 checks the fixed `prompt-sd25pe-final.txt` (1,378 words).

## Assets inspected (pass 1 set)

| Ref | File | Probe | What is in it |
|---|---|---|---|
| @Image1 | a/storyboard.png | 880x1168 | 12 line-art panels in a 4-column by 3-row grid: shopper P1-P6, owner P7-P10, shopper again P11, orb P12; no text |
| @Image2 | a/shopper.jpg | 720x960 | Shopper on sofa at night, **mouth open**, hands on keyboard, cat behind, small lit candle, lamp |
| @Image3 | a/product-page.jpg | 1600x1000 | Ember & Fig page, no cursor, with the jar photo |
| @Image4 | a/owner.jpg | 720x960 | Owner face, braid, rust sweater; brick and roaster behind |
| @Image5 | a/studio-plate.jpg | 752x1344 | Studio: jar shelves, brick, blurred laptop, **lit three-wick jar**, empty ceramic dish |
| @Image6 | a/owner-sales.jpg | 1600x1000 | Shopify units sold, Fig & Cedar 3, −84% |
| @Image7 | a/scout-logo.png | 1000x1000 | **The full "Scout" wordmark** with the orb as its "o" |
| @Video1 | a/flip-move-5s.mp4 | 600x1066, 5.00 s, no audio | High flip: man in a throne room → overhead flip → poker table |
| @Video2 | a/h158-end.mp4 | 1080x1920, 4.50 s, with audio | Scout end screen; says "Scout interviews your shoppers for you. Get free early access." |
| @Audio1 | a/voice-serene.mp3 | 11.44 s | Soft female voice |
| @Audio2 | a/voice-alexandra-9s.mp3 | 9.20 s | Warm female voice |
| @Audio3 | a/voice-scout.mp3 | 4.50 s | End screen's voice, local only |

index.html media IDs: the owner-sales card read "8c33aad5-**c87b**-4b86…", but the real ID (in H224's job.json) is 8c33aad5-**bc87**-4b86-965e-1a967b2686d3. The product page and studio plate cards showed IDs of the files *before* the local edits (no cursor, blurred screen), so no uploaded copy of the files on disk existed. Audio 3 had no media ID.

## Pass 1 (before fixes)

### a) Final Checklist
1. One primary task: PASS. Generation.
2. Story unchanged: PASS.
3. Every entity covered, none merged: PASS. Shopper, cat, her candle, owner, jar, orb, both screens and both rooms are named.
4. One unique role per used asset: **FAIL**. @Image2 is used for four roles ("The shopper maps to @Image2", "The shopper's living room references @Image2", "The grey tabby cat maps to the cat in @Image2", "The shopper's small one-wick candle maps to … @Image2"). @Image3 is the screen and also the jar's shape; @Image5 is the studio and also the lit jar ("they jointly define one jar").
5. References unchanged: PASS.
6. N/A. 7. PASS, every upload has a role. 8. N/A.
9. Individual mapping: **FAIL**. The four @Image2 lines map four entities to one asset.
10. Single-character image used for two characters: PASS for people.
11. One state change and an end state per range: PASS. Each range holds one beat; the 10-12s and 26-30s ranges have explicit ends.
12. Time ranges kept: PASS. 13 N/A. 14 PASS. 15-17 N/A.
18. Storyboard grid gives reading order, each panel's shot role and what not to adopt: **FAIL** on panel shot roles. Reading order and "do not adopt its line-art style" PASS, but several panels have no shot role in the prompt: "14-16s: [Panel 7] Screen: @Image6." has no subject, size or move; the framings live only on the page's shot list.
19. N/A. 20. PASS.
21. Speaking stages: PASS. Per-line "In English", V.O. or on camera, listeners' lips closed.
22. PASS. 23. PASS.
24. "Please note that this is not video editing." included when the gate fires: **FAIL**. The gate fires (@Video1 5.00 s and @Video2 4.50 s against a 30 s output), but the line had been removed in round 1.
25. N/A. 26. PASS. 27. PASS.

### b) Non-Negotiable Principles
1 PASS · 2 PASS (storyboard template used) · 3 PASS · 4 PASS · 5 PASS · 6 PASS · 7 PASS · 8 PASS · 9 PASS · 10 PASS · **11 FAIL**: @Image2 defines both the shopper and the cat, two subjects on screen together at 5-8s.

### c) Template: Storyboard Grids
- @Image1 reading order and what not to adopt: PASS.
- Subject images, one per subject: **FAIL** (@Image2 ×4, jar split over @Image3 and @Image5).
- "Shot N: <shot size, subject action, and scene state>": **FAIL**. Panels 1, 5 and 7 give no shot size, and Panel 7 has no subject.
- Final visuals and audio line: PASS.
- Gate line under the Goal: **FAIL** (missing; see 24).

### d) Shot table (pass 1)
| Shot | On screen | Defined by | Result |
|---|---|---|---|
| 0-3s P1 | shopper's hand, candle, screen | "her hand" (no @), @Image3 | FAIL: no @asset for the shopper |
| 3-5s P2 | shopper, cursor | none | FAIL |
| 5-8s P3 | cat, shopper, candle | "her eyes", cat → @Image2 | FAIL: @Image2 carries both |
| 8-10s P4 | shopper, screen | "She scrolls", @Image3 | FAIL |
| 10-12s P5 | shopper | none | FAIL |
| 12-14s P6 | hand, lid, flip → studio | @Video1; studio not tagged | FAIL: shopper and studio have no @ |
| 14-16s P7 | owner, screen | @Image6 only | FAIL: no owner |
| 16-19s P8 | owner, jar | none | FAIL |
| 19-21s P9 | owner, mailer | none | FAIL |
| 21-24s P10 | orb, owner, jar | "the orb", "she" | FAIL; the Eyes in punch-in from the page is not written |
| 24-26s P11 | shopper, cat, candle | none | FAIL |
| 26-30s P12 | orb → end screen | @Video2 | PASS |

### e) Asset limits (pass 1)
Images 7 ≤ 30 PASS · Videos 2: 5.00 + 4.50 = 9.50 s (each 4-30 s) PASS · Audio 3: 11.44 + 9.20 + 4.50 = 25.14 s (each 2-30 s) PASS · Total 12 ≤ 50 PASS. (@Audio1 at 11.44 s is past the 5-10 s *recommended* range, which is not a hard limit.)

### Pass 1 FAILs (8)
1. The gate line was missing although the gate fires (checklist 24).
2. @Image2 had four roles: shopper, room, cat and candle (checklist 4, 9; principle 11).
3. The jar was split across @Image3 (a screen) and @Image5 (a room), so each of those images had two jobs (checklist 4).
4. @Image7 was the full wordmark used as the orb, so letters could leak into 21-24s, and the wordmark was also @Video2's job.
5. Panels had no shot roles in the prompt (checklist 18).
6. Shots named no actor @asset ("her hand", "She scrolls", P7 with no owner) (Emile's H224 rule).
7. The camera moves were not written in their shots or named as on the page (High flip, Eyes in).
8. Page media IDs were wrong or missing: an owner-sales ID typo, stale IDs for the edited product page and studio plate, and no ID for Audio 3.

## Fixes made
Backups: `prompt-sd25pe-final.pre-sd25check.txt`, `index.pre-sd25check.html`. Free uploads only, 0 credits.
- Gate line restored, right after the goal sentence.
- @Image2 = room only ("do not use the woman, the cat or the keyboard in it").
- New @Image8 `a/shopper-face.jpg` = shopper only (lips closed, from the H224 cast still), media d54d8df5-566f-400d-823a-fd87b64a0831.
- New @Image9 `a/cat.jpg` = cat only, media 696c034b-34ca-4b95-8f62-382f22de2f6f.
- New @Image10 `a/fig-cedar-jar.jpg` = jar only, media bdbf8b6a-e4e3-4455-ba26-22f84aadd453. @Image3 is screen only; @Image5 says "do not use the lit jar on the table".
- @Image7 now uses the orb-only file `a/scout-orb.png`, media 5aaa2bca-36bc-4152-9d7a-007f9913766b (H224's).
- @Audio3 now uses the same end-screen sound file as H226, which has a media ID: 1040c108-8833-40b5-a3f0-943deab45436. The old local file is kept as a/voice-scout-local-old.mp3.
- Media IDs: owner sales corrected to 8c33aad5-bc87-4b86-965e-1a967b2686d3; product page (no cursor) uploaded as 0d34de38-32c9-4f5d-b6a4-c7fad6a4e72a; studio plate (blurred screen) uploaded as 6ef49b80-0973-487e-a2ee-ed3bec6011ee.
- Every panel line now opens with its transition and framing from the page's shot list and names each actor with its @asset; Panel 6 says "following the High flip move of @Video1"; Panel 10 writes the Eyes in punch-in.
- Added 【Subjects and Relationships】.
- The 11 spoken lines and every <sound> are unchanged (diff clean).

## Pass 2 (fixed prompt)

### Assets (upload order)
@Image1 storyboard (GPT Image 2.6 job 1e98a1bf) · @Image2 room 24babbac · @Image3 product page 0d34de38 · @Image4 owner face 1963a66d · @Image5 studio 6ef49b80 · @Image6 owner screen 8c33aad5-bc87 · @Image7 orb 5aaa2bca · @Image8 shopper face d54d8df5 · @Image9 cat 696c034b · @Image10 jar bdbf8b6a · @Video1 High flip 969c55f0 (5.00 s) · @Video2 end screen cae62718 (4.50 s) · @Audio1 4b121290 (11.44 s) · @Audio2 304653bb (9.20 s) · @Audio3 1040c108 (4.50 s).

### a) Final Checklist
1 PASS · 2 PASS (lines and sounds diff clean) · 3 PASS (Subjects line names one of each) · 4 PASS (15 role lines, one job each) · 5 PASS (@Image1-7, @Video1-2 and @Audio1-3 keep their numbers; @Image8-10 are new uploads) · 6 N/A · 7 PASS · 8 N/A · 9 PASS · 10 PASS · 11 PASS · 12 PASS · 13 N/A · 14 PASS · 15-17 N/A · 18 PASS: "Read it from left to right and from top to bottom … do not adopt its line-art style", and each "· Panel N [size, angle, move]" has a subject and action · 19 N/A · 20 PASS · 21 PASS ("Scout, in English (from the orb, in the voice of @Audio3)") · 22 PASS · 23 PASS · 24 PASS (the gate fires and the line appears once, right after the goal sentence) · 25 N/A · 26 PASS · 27 PASS.

### b) Principles 1-11
All PASS. Principle 11: shopper @Image8 and cat @Image9 are separate images.

### c) Template: Storyboard Grids
Reading order and exclusions PASS · one subject image per subject PASS · Shot N size/action/state PASS · visuals and audio line PASS.

### d) Shot table (pass 2)
| Shot | Who/what → ONE asset each | Camera / transition | Result |
|---|---|---|---|
| 0-3s P1 | shopper @Image8 (hand) · candle in room @Image2 · screen @Image3 | Opening shot, close-up, slow push | PASS |
| 3-5s P2 | shopper @Image8 · cat @Image9 · room @Image2 · screen @Image3 | Hard cut, medium, locked | PASS |
| 5-8s P3 | cat @Image9 · shopper @Image8 | Hard cut, close-up, slight pan | PASS |
| 8-10s P4 | shopper @Image8 · screen @Image3 | Hard cut, OTS, locked | PASS |
| 10-12s P5 | shopper @Image8 | Hard cut, close-up, locked | PASS |
| 12-14s P6 | shopper @Image8 → studio @Image5 | High flip from @Video1 | PASS |
| 14-16s P7 | owner @Image4 · studio @Image5 · screen @Image6 | Lands from the High flip, gentle push | PASS |
| 16-19s P8 | owner @Image4 · jar @Image10 | Hard cut, close-up, locked | PASS |
| 19-21s P9 | owner @Image4 · jar @Image10 · mailer (words) | Hard cut, medium, locked | PASS |
| 21-24s P10 | orb @Image7 · owner @Image4 · jar @Image10; voice @Audio3 | Hard cut, Eyes in punch-in | PASS |
| 24-26s P11 | shopper @Image8 · cat @Image9 · room @Image2; voice @Audio3 | Hard cut back to the night | PASS |
| 26-30s P12 | orb @Image7 → end screen @Video2; voice @Audio3 | Orb becomes the "o" | PASS |

### e) Asset limits (pass 2)
Images 10 ≤ 30 PASS · Videos 2, 9.50 s total (5.00 and 4.50, each 4-30 s) PASS · Audio 3, 25.14 s total (each 2-30 s) PASS · Total 15 ≤ 50 PASS.

**Pass 2: zero FAILs.**

Open risks (not checklist items): the prompt is 1,378 words, past the official 30 s examples (the skill sets no limit). @Audio1 is 11.44 s, past the 5-10 s recommendation. The storyboard (@Image1) has no Higgsfield media ID on the page, only its GPT Image job 1e98a1bf, as before.

## Pass 3 (after independent check 1, Nov 15)
Independent check 1 (fresh context) found one item my pass 2 missed, plus page issues.
- **Item 23 / principle 6 (no builder notes in the prompt):** Panel 10's bracket said "…punch-in on the owner's face, written in words". **Fixed:** the bracket is now "[Hard cut. Medium, eye level, then the Eyes in quick punch-in on the owner's face]", and the page's shot table calls the move "Eyes in (quick punch-in)".
- Applied the two lessons the sister cards' checks found, so they can't fail here: **item 11**, every panel now ends "At the end, …" (12 of 12); **item 21**, every shopper line says "in the voice of @Audio1", every owner line "@Audio2", every Scout line "@Audio3" (11 of 11).
- **Upload order:** renumbered by first appearance (after the storyboard, @Image1): @Image2 shopper face, @Image3 room, @Image4 her screen, @Image5 cat, @Image6 owner, @Image7 studio, @Image8 owner screen, @Image9 jar, @Image10 orb. Mapping (pass 2 → 3): 8→2, 2→3, 3→4, 9→5, 4→6, 5→7, 6→8, 10→9, 7→10. The cards, the box and the prompt all match.
- **Jar note:** Maintain Consistency now says "only in the owner's studio, apart from its photo on the product page (@Image4)".
- **Page:** stale text fixed: "+ 10 images", compile word counts, "Asset limits: 10 images", and the gate reasoning (it fires on the 5.0 s and 4.5 s videos; round 3 had wrongly removed the line). A "Superseded" banner sits over the older fix notes. The box's difference line is now one sentence. All 3 page copies of the prompt match prompt-sd25pe-final.txt exactly.

### Final Checklist (pass 3, 1,540 words)
1 PASS · 2 PASS (11 lines and every <sound> unchanged) · 3 PASS · 4 PASS (15 role lines, one job each) · 5 PASS (renumbered by the author; all references are real uploads) · 6 N/A · 7 PASS · 8 N/A · 9 PASS · 10 PASS · 11 PASS (12 "At the end") · 12 PASS · 13 N/A · 14 PASS · 15-17 N/A · 18 PASS (reading order, what not to adopt, and size/angle/move + subject + action for every panel) · 19 N/A · 20 PASS · 21 PASS · 22 PASS · 23 PASS (no builder notes) · 24 PASS · 25 N/A · 26 PASS · 27 PASS.
Principles 1-11: all PASS. Storyboard template: PASS.

### Shot table (pass 3 numbering)
| Panel | Who/what → ONE asset each | Move | Result |
|---|---|---|---|
| P1 0-3s | shopper @Image2 · room and candle @Image3 · screen @Image4 · @Audio1 | Opening, CU, slow push | PASS |
| P2 3-5s | shopper @Image2 · cat @Image5 · room @Image3 · screen @Image4 · @Audio1 | Hard cut, medium | PASS |
| P3 5-8s | cat @Image5 · shopper @Image2 · @Audio1 | Hard cut, slight pan | PASS |
| P4 8-10s | shopper @Image2 · screen @Image4 · @Audio1 | Hard cut, OTS | PASS |
| P5 10-12s | shopper @Image2 · @Audio1 | Hard cut, CU | PASS |
| P6 12-14s | shopper @Image2 → studio @Image7 · move @Video1 | High flip | PASS |
| P7 14-16s | owner @Image6 · studio @Image7 · screen @Image8 · @Audio2 | Lands from the High flip | PASS |
| P8 16-19s | owner @Image6 · jar @Image9 · @Audio2 | Hard cut, CU | PASS |
| P9 19-21s | owner @Image6 · jar @Image9 · mailer (words) · @Audio2 | Hard cut, medium | PASS |
| P10 21-24s | orb @Image10 · owner @Image6 · jar @Image9 · @Audio3 | Hard cut, Eyes in punch-in | PASS |
| P11 24-26s | shopper @Image2 · room @Image3 · cat @Image5 · @Audio3 | Hard cut back to night | PASS |
| P12 26-30s | orb @Image10 → end screen @Video2 · @Audio3 | Orb becomes the "o" | PASS |

Asset limits unchanged: 10 images, 2 videos 9.50 s, 3 audio 25.14 s, 15 total. PASS. **Pass 3: zero FAILs.**

## Pass 4 (after independent check 2, Nov 15)
Check 2 found one shot-table FAIL: the shopper's candle had no tag in P3 and P6. **Fixed:** P3 "to her small one-wick candle in the living room (@Image3)" and P6 "beside her small one-wick candle in the living room (@Image3)". Also applied: the studio (@Image7) is tagged in P8, P9 and P10, and the @Video2 line now says "do not use its sound, spoken words or pacing", so the wordmark it must show isn't banned.
Not changed, and flagged for Emile: (a) @Image3 is a real photo of the shopper's room with her and the cat in it, used as room only with "do not use the woman, the cat or the keyboard". A clean room plate would cost a paid still. (b) P9's kraft mailer box comes from the approved storyboard panel; a checker noted it could read as packing an order.
Final Checklist re-run on the final file: all items PASS or N/A; the shot table P1-P12 all PASS. **Zero FAILs.**
