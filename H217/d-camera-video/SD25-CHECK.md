# SD25-CHECK · H217 Team D (camera video) · card H221

Checked Nov 15 2026 against `~/ClaudeCowork/marketer/.claude/skills/sd25-pe/SKILL.md` (v0.1.1, read in full; self-update could not run here, `timeout`/npx unavailable, so the local copy was used).
Prompt checked: `prompt-sd25pe-final.txt` (round 3, the Nov 15 aha and delete lines). Backups: `prompt-sd25pe-final.pre-sd25check.txt`, `index.pre-sd25check.html`.
Task type: **video generation with reference assets** (16 refs, user time ranges kept), gate triggered (reference videos 4–8 s vs a 30 s output).

## Assets inspected

| Ref | File | Probe | What is in it |
|---|---|---|---|
| Image 1 | a/image1-owner.png | 1536x2048 | Owner, long brown hair, white linen shirt, at the studio desk with laptop and swimwear racks (same studio as Image 3) |
| Image 2 | a/image2-refund-banner.png | 1080x1920 | Phone on a wooden table with a blue-striped card; lock screen "Tuesday, November 17 · 2:17", banner "Refund issued · [SALT & SUN SWIM] A refund of $68.00 was issued for 1 item from Online Store." |
| Image 3 | a/image3-studio-orb.png | 941x1672 | The studio: racks, plant, window, wooden chair and table, laptop, coral fabric; lime orb with sound bars floating centre |
| Image 4 | a/image4-shopper.png | 1536x2048 | Shopper: wavy shoulder-length hair, striped tee, white earbud, straw bag with blue towel, dark shoulder bag; bedroom with tall white windows, white bed, phone, coral bikini, sunglasses |
| Image 5 | a/image5-call-card.png | 1080x1920 | Dark card "THE CALL", green waveform, "SCOUT · What stopped you?" |
| Image 6 | a/image6-sale-banner.png | 1080x1920 | Phone on table, "Thursday, November 26 · 5:41", "New order · [SALT & SUN SWIM] You have a new order for 1 item totaling $84.00 from Online Store." |
| Image 7 | a/image7-scout-orb.png | 720x720 | Lime orb with white sound bars on a pale plain background |
| Video 1 | a/video1-dip-rhythm-8s.mp4 | 8.0 s, 480x854, no audio | The Dip 0–8 s: phone macro, blurred inserts, candle-store woman talking at a laptop with candles |
| Video 2 | a/video2-bullet-time-5s.mp4 | 5.0 s, 480x854, no audio | Diner bullet time: green-haired woman, hanging eggs, coffee, people |
| Video 3 | a/video3-eyes-in-5s.mp4 | 5.0 s, 480x854, no audio | Push from a woman's face into her eye and pupil |
| Video 4 | a/video4-high-flip-4s.mp4 | 4.0 s, 480x854, no audio | Man on a throne, rise and flip, lands on a man at a card table |
| Video 5 | a/video5-h158-end-4_5s.mp4 | 4.5 s, 1080x1920, with audio | Lime orb becomes the "o" of the Scout wordmark, "For Shopify owners", "Get free early access" pill; voice: "Scout interviews your shoppers for you. Get free early access." |
| Audio 1 | a/audio1-owner-elena-9s.mp3 | 8.85 s | English, female: "okay so I finally repainted the kitchen…" (timbre only) |
| Audio 2 | a/audio2-shopper-serene.mp3 | 11.44 s | English, female: "oh my gosh okay so we finally booked the beach house…" (timbre only) |
| Audio 3 | a/audio3-kaching.mp3 | 2.6 s | Order "ka-ching" |
| Audio 4 | a/audio4-scout-voice.mp3 | 4.5 s | English: "Scout interviews your shoppers for you. Get free early access." (Video 5's sound) |

index.html upload list: the same 16 in the same order (image1–7, video1–5, audio1–4). Media IDs on the page: Image 1 job 9a8b15e8, Image 3 media db24f683, Image 4 job 6ccc5f17, Video 5 media cae62718, Audio 2 media 4b121290, Audio 3 media 45fb9d1d; the rest are "upload at render". Not uploads: `a/audio1-owner-elena.mp3` (old 13.4 s cut) and the two camera-map animatics; they are page-only, so no 【Unused Assets】 block is needed.

## Pass 1 (before fixes)

### a) Final Checklist

1. One primary task: generation. **PASS**: "Generate a light, playful live-action ad…"; no edit or extension wording.
2. Subjects, counts, identities, scene, props, outcome unchanged. **PASS**: owner, Scout, shopper; refund → near-discount → interview → delete → full-price order → end screen, same as the approved round 3.
3. Every required character, prop, scene covered; no merges; no asset guesses as facts. **PASS**: owner (Image 1), Scout (Image 7), shopper (Image 4), studio (Image 3), bedroom (Image 4), phone banners (Images 2, 6), call card (Image 5); coral bikini, kraft mailer, laptop named in text.
4. Every used asset has one unique, explicit role. **FAIL**: "Image 4 is the shopper in her sunny bedroom: use her face, hair, striped tee, earbuds, straw beach bag and the bedroom." = a person and a scene on one asset (the page even calls it "one deliberate exception"). Also **FAIL (wording)**: "Image 7 is Scout: use only the lime orb…, shown on a plain background." can be read as an instruction to show Scout on a plain background; it does not say what not to take.
5. User's asset references unchanged. **PASS**: Image 1–7, Video 1–5, Audio 1–4 kept, no renumbering, none invented.
6. Missing assets not claimed as reviewed. **N/A**: all 16 were readable and inspected.
7. No irrelevant asset forced in; unused listed. **PASS**: all 16 uploads have a role; no 【Unused Assets】 needed.
8. Inaccessible assets not treated as understood. **N/A**: none inaccessible.
9. Characters/props mapped one by one, no range statement. **PASS**: one line per asset.
10. Single-character image not defining two on-screen characters. **PASS**: Image 1 = owner only, Image 4 = shopper only, Image 7 = Scout only.
11. Each stage one primary state change with a clear end state. **PASS**: e.g. "the list empties, and a dark toast reading "Discount deleted" pops up"; "carrying us back to the owner's studio".
12. User time ranges kept; no new ranges invented. **PASS**: the 12 ranges 0-2s … 25-30s are the script's own.
13. Editing task fields. **N/A**: not editing.
14. Locked ratio/duration rules followed; one parameter note at most. **PASS**: no ratio, duration or resolution in the prompt; no note needed.
15. Extension direction and boundary. **N/A**: not extension.
16. First/last frame exact statements. **N/A**: no keyframes.
17. Multiple keyframes. **N/A**.
18. Storyboard grid. **N/A**.
19. Blockout. **N/A**: Video 1 is a rhythm reference, not a blockout.
20. Emotion and camera terms have observable results. **PASS**: aha "she stops dead, eyes wide, her free hand pressed to her forehead. No smile."; bullet time "her finger stops above the trackpad and the tossed bikini hangs in mid-air".
21. Each speaking stage: speaker, state, words, audio role, language, on/off screen. **PASS**: every line "says in English"; "(V.O., tempted)… She keeps her lips closed"; "Scout is off-screen; his voice comes through her earbuds"; "The shopper keeps her lips closed".
22. Shot/asset numbers stay identifiers. **PASS**.
23. No parameters, analysis, keys or change reasons in the prompt. **PASS**.
24. Exactly one "Please note that this is not video editing." only when the gate fires. **PASS**: once, right after the goal sentence; gate fires (refs 4–8 s vs 30 s output).
25. Reference-video specs unreadable case. **N/A**: all read (above).
26. No unrequested negative constraint. **PASS**: "No subtitles appear on screen" is Emile's standing rule; the "do not use…" lines are role scopes.
27. Placeholders replaced; one prompt body, no Markdown or fences. **PASS**: 【】 section labels only.

### b) Non-Negotiable Principles

1. Intent First. **PASS**: same characters, story and outcome; the Nov 15 lines kept.
2. Template First. **PASS**: 【Generation Goal】【Reference Asset Roles】【Subjects and Relationships】【Event Script】【Maintain Consistency】.
3. Account for Every Asset. **FAIL**: Image 4 states two adoptions (person + bedroom); Image 7 states no exclusion (see checklist 4).
4. User Mapping First. **PASS**: mapping matches the card's asset list.
5. Minimal Clarification. **PASS**: nothing ambiguous enough to ask.
6. Submission-Ready Content Only. **PASS**.
7. Separate Parameters. **PASS**: no "9:16", "vertical", "30 seconds", resolution.
8. No unrequested constraints. **PASS**.
9. One Best Version. **PASS**.
10. Facts vs observations. **PASS**: store name, roles and story from the script; looks from the images.
11. Subject Cardinality. **PASS**: one image per character.

### c) Template: Generation with Reference Assets (+ Multiple References, Long Videos and Time Segments, Sound/Dialogue)

- 【Generation Goal】 core event in one sentence. **PASS**.
- 【Reference Asset Roles】 one line per asset with what to use and what not to use. **FAIL**: Image 4 (two roles), Image 7 (no "do not use").
- 【Unused Assets】 when the set is non-empty. **N/A**: empty.
- 【Subjects and Relationships】 one subject per line, fixed features, spatial relation. **PASS**: "The owner maps to Image 1 and appears only in the studio from Image 3"; "Scout… first enters at 8-11s, popping in beside her shoulder".
- 【Event Script】 start state, events, end state. **PASS**: continuous whole-second ranges 0–30, no gaps.
- 【Maintain Consistency】. **PASS**.
- Video refs state only the inherited dimensions, no re-description. **PASS**: "used only for the bullet-time camera move of 8-11s; do not use its diner, food or people".
- Voice audio gives timbre only; the prompt's words win. **PASS**: Audio 1/2/4 "used only for … voice timbre" (their own words are about a kitchen and a beach house).
- Symbols: () music, <> sound effects, {} dialogue. **PASS**: "(Light upbeat music…)", "<a soft whoosh>", "<The order sound of Audio 3 rings>".

### d) Shot table

| Time | On screen | Defined by (one asset each) | Verdict |
|---|---|---|---|
| 0-2s | Her phone among folded bikinis, refund banner | Phone screen: Image 2 · room: Image 3 · cut rhythm: Video 1 · sound: Audio 3 | PASS |
| 2-4s | Owner, phone, coral bikini | Owner: Image 1 · room: Image 3 · coral bikini: named · voice: Audio 1 | PASS |
| 4-6s | Owner to lens, coral bikini | Image 1 · Image 3 · named · Audio 1 | PASS |
| 6-8s | Owner at laptop, bikini pile, Shopify admin | Image 1 · Image 3 · admin screen named · Audio 1 | PASS |
| 8-11s | Owner frozen, bikini mid-air, Scout appears | Image 1 · Image 3 · Scout: Image 7 · move: Video 2 · voice: Audio 4 | PASS |
| 11-12s | Owner turns, dive into the glow | Image 1 · Image 7 · move: Video 3 | PASS |
| 12-15s | Shopper packing, call card | Shopper: Image 4 · **bedroom: Image 4** · card: Image 5 · Scout voice: Audio 4 | **FAIL**: Image 4 holds two roles |
| 15-18s | Shopper folds towel; flip | Shopper: Image 4 · **bedroom: Image 4** · voice: Audio 2 · move: Video 4 | **FAIL**: same |
| 18-20s | Owner, the aha | Image 1 · Image 3 · Audio 1 | PASS |
| 20-23s | Behind her at the laptop, Delete, toast | Image 1 · Image 3 · discounts list and "Discount deleted" toast named · Audio 1 | PASS |
| 23-25s | Phone banner, kraft mailer | Image 6 · Image 3 · mailer named · Audio 3 · Audio 1 | PASS |
| 25-30s | End screen | Video 5 (picture, motion and sound) | PASS |

### e) Asset limits

- Images 7 ≤ 30, each under 4K. **PASS**.
- Videos 5 ≤ 10; each 4–30 s (8.0, 5.0, 5.0, 4.0, 4.5); total 26.5 s ≤ 30. **PASS**. (All ≥ 409,920 px, above Seedance's 407,696 px floor.)
- Audio 4 ≤ 10; each 2–30 s (8.85, 11.44, 2.6, 4.5); total 27.39 s ≤ 30. **PASS**.
- 16 assets ≤ 50. **PASS**.

**Pass 1: 2 FAILs** (Image 4 two roles; Image 7 role wording), counted once each across checklist item 4, principle 3, the template and the shot table.

## Fixes (prompt-sd25pe-final.txt and both prompt copies on index.html)

- `Image 4 is the shopper: use only her face, hair, striped tee, earbuds and straw beach bag; do not use the image background.`
- `The shopper maps to Image 4 and appears only in her sunny bedroom: tall white-framed windows, soft daylight and an unmade white bed.` (the bedroom is now written in words, matching the room in Image 4, so no asset carries it)
- `Image 7 is Scout: use only the lime orb with sound bars inside; do not use its plain background.`
- Page: the "Each asset has one role" check no longer claims an exception; word count 1,030 → 1,043.

Emile's Nov 15 refund rules were already in round 3 and are untouched: `{Oh my god... I'm training them to wait.}` with "No smile"; `{You know what? Let's delete all these discounts.}`; hard cut from behind her at the laptop, hand on the trackpad clicks Delete, dark "Discount deleted" toast. No finger on a screen, no form breaking apart. Spoken words unchanged (diff of every {…} line: identical).

## Pass 2 (after fixes)

### a) Final Checklist
1 PASS · 2 PASS · 3 PASS (bedroom now named in 【Subjects and Relationships】) · 4 **PASS**: every asset one role; Image 4 = shopper only, Image 7 = Scout only with "do not use its plain background" · 5 PASS · 6 N/A · 7 PASS · 8 N/A · 9 PASS · 10 PASS · 11 PASS · 12 PASS · 13 N/A · 14 PASS · 15 N/A · 16 N/A · 17 N/A · 18 N/A · 19 N/A · 20 PASS · 21 PASS · 22 PASS · 23 PASS · 24 PASS (one gate line) · 25 N/A · 26 PASS · 27 PASS.

### b) Principles
1 PASS · 2 PASS · 3 **PASS** · 4 PASS · 5 PASS · 6 PASS · 7 PASS · 8 PASS · 9 PASS · 10 PASS · 11 PASS.

### c) Template
All lines PASS; 【Reference Asset Roles】 now one role with a use/do-not-use scope on every line.

### d) Shot table
12-15s and 15-18s: shopper = Image 4, bedroom = named in text ("sunny bedroom: tall white-framed windows, soft daylight and an unmade white bed"), card = Image 5, voices = Audio 4 / Audio 2, flip = Video 4. **PASS**. Every other row unchanged, PASS.

### e) Limits
Unchanged, PASS.

**Pass 2: 0 FAILs.**

Risk to watch on the render: with Image 4's background excluded, the bedroom comes from words only; if it drifts from the look Emile saw, allow the Image 4 background back as a second, stated role.
