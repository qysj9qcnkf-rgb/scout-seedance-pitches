# SD25-CHECK · H227 · cat-candle script D (camera-move video refs)

Checked Nov 15 2026 against ByteDance's `sd25-pe` skill (`~/ClaudeCowork/marketer/.claude/skills/sd25-pe/SKILL.md`, v0.1.1, read in full, 995 lines). Self-update ran (`npx --yes skills@latest update sd25-pe -y`, exit 0).
Prompt checked: `prompt-sd25pe-final.txt` (pass 1 = the version now saved as `prompt-sd25pe-final.pre-sd25check.txt`; pass 2 = the fixed `prompt-sd25pe-final.txt`). Page: `index.html` (backup `index.pre-sd25check.html`).
Task type: **video generation with reference assets** (multi-reference, numbered shots with user time ranges, camera-move video refs). Not editing, not extension, no keyframes, no storyboard grid, no blockout.

## Assets inspected (every one opened)

| Ref | File | What it really is (inspected) | Spec |
|---|---|---|---|
| @Image1 | a/image1-shopper.png | Woman, dark-brown bob with bangs, cream knit cardigan, on a sofa at night; floor lamp, grey tabby behind her, small single-wick amber candle, laptop | 1536x2048 |
| @Image2 | a/image2-product-page.png | Ember & Fig product page, Fig & Cedar, $38.00, Add to cart, cursor on the button; no pet info; product photo shows a blank-label jar | 1600x1000 |
| @Image3 | a/image3-jar.png | Wide amber three-wick jar, kraft label "Fig & Cedar", on linen | 1024x1024 |
| @Image4 | a/image4-owner.png | Woman, auburn side braid, rust sweater, hand at her face; brick wall + black roaster drum behind | 1536x2048 |
| @Image5 | a/image5-owner-studio.png | Empty studio: metal shelves of lit blank-label amber jars, brick wall, empty light wood desk, no person, no screen | 752x1344 |
| @Image6 | a/image6-owner-sales.png | Shopify Products page, Fig & Cedar 3-wick row outlined red: 3 units, -84% | 1600x1000 |
| @Image7 | a/image7-scout-logo.png | "Scout" wordmark, lime disc with five dark bars as the "o", black background | 1000x1000 |
| @Video1 | a/video1-eyes-in.mp4 | Push from a street model's face into her eye, iris, pupil | 5.00 s, 600x1066, no audio |
| @Video2 | a/video2-high-flip.mp4 | Man on a throne; camera rises, flips overhead, lands on a man at a card table | 5.00 s, 600x1066, no audio |
| @Video3 | a/video3-dip-owner-pace.mp4 | The Dip: the owner (same actress as image4) talking to camera, rust sweater, shelves of lit jars behind her; quick cuts | 2.33 s, 640x800 (512,000 px), no audio |
| @Video4 | a/video4-earth-zoom.mp4 | Aerial over a city in daylight, dive between towers to street level; daylight from start to end (no dusk) | 5.00 s, 600x1066, no audio |
| @Video5 | a/video5-end-screen.mp4 | Orb flies in, becomes the "o" of Scout; "For Shopify owners", "Get free early access", "We'll set you up", "Launching December 15"; voice (Deepgram): "Scout interviews your shoppers for you. Get free early access." | 4.50 s, 1080x1920, audio |
| @Audio1 | a/audio1-shopper-voice.mp3 | Woman, calm; words (Deepgram) about booking a beach house, unrelated | 9.00 s |
| @Audio2 | a/audio2-owner-voice.mp3 | Alexandra, warm, dry; words about stone-fruit notes and Scout, unrelated | 10.00 s |
| @Audio3 | a/audio3-scout-voice.mp3 | Video5's soundtrack: "Scout interviews your shoppers for you. Get free early access." | 4.50 s |

Media IDs in `job-plan.json` and on the page match in order: image1 24babbac, image2 527991c0, image3 ae311108 (job id), image4 1963a66d, image5 1992f753, image6 8c33aad5, image7 67fba5cb, video1 049306d2, video2 d44455fb, video3 b2b7244b, video4 45b61586, video5 cae62718, audio1 cf1289fd, audio2 54c5f7bf, audio3 cd435499. 15 assets, all in the prompt, all on the page.

---

# PASS 1 (the prompt as it stood: prompt-sd25pe-final.pre-sd25check.txt)

## a) Final Checklist

1. One primary task. **PASS**: generation only; "Generate a realistic story ad in two homes…".
2. Subjects, counts, identities, scene, props, outcome unchanged. **PASS**: two women, one jar, one orb, same 10 lines (diffed), same ending.
3. Every required character, prop, scene covered; no merges. **PASS**: shopper, owner, Scout, cat, her candle, Fig & Cedar jar, clearance box, two rooms, all present.
4. Every asset actually used has one unique and explicit role. **FAIL (F1)**: "@Image7 … do not use the wordmark letters before Shot 12" implies @Image7 supplies the wordmark in Shot 12, which is @Video5's job ("reproduce it exactly, picture, words and audio"). Also "@Image6 is used only for what the owner's laptop screen shows" while Shot 11's laptop shows a different screen (the message), so the role has no shot scope (**F8**).
5. Existing asset references unchanged; none invented. **PASS**: @Image1-7, @Video1-5, @Audio1-3 as in job-plan.json.
6. Missing/inaccessible assets not claimed. **N/A**: all 15 opened.
7. Irrelevant assets not forced; unused listed. **PASS**: all 15 have a role; no 【Unused Assets】 needed.
8. Inaccessible assets not treated as understood. **N/A**.
9. Different characters/props mapped individually. **PASS** in the role block (one line each). But see shot table F2.
10. Single-character image not used for two on-screen characters. **PASS**: @Image1 shopper only, @Image4 owner only.
11. Each stage has one state change and a clear ending state. **FAIL (F6)**: Shots 1, 2, 3, 4, 6, 7 have no end state ("At the end" only in Shots 5, 8, 10, 11, 12).
12. User time ranges kept; none invented. **PASS**: 0-2 … 26-30 s are ours, continuous, integer, no gaps.
13. Editing task completeness. **N/A**.
14. Auto-locked ratio/duration rules followed. **PASS**: generation; no ratio/duration in text.
15. Extension direction / boundary. **N/A**.
16. First/last frame exact statements. **N/A** (no keyframes).
17. Multiple keyframes in order. **N/A**.
18. Storyboard grid reading order. **N/A**.
19. Blockout coarse/fine. **N/A**.
20. Abstract emotion/cinematography made observable. **PASS**: "frowns", "small shrug", "freezes … mouth closed", "steady push into … eye".
21. Every speaking stage: speaker, state, words, audio, language, on/off screen. **PASS**: every line "in English"; shopper "inner voice … her lips closed"; Scout "off screen" in Shot 11; owner "her mouth closed" in Shots 9, 11.
22. Shot/asset numbers stay identifiers. **PASS**.
23. No output parameters, analysis, metadata, keys, reasons. **PASS**: no ratio, "vertical", duration or resolution (grep).
24. Exactly one "Please note that this is not video editing." only when the gate fires. **PASS**: refs are 2.3-5 s vs a 30 s output, gate fires; the sentence appears once, right after the goal.
25. Inaccessible ref-video specs. **N/A**: all ffprobed.
26. No unrequested negative constraint. **PASS**: "No subtitles" and the on-screen-text list are ours, asked for.
27. Placeholders replaced; one prompt body. **PASS**.

## b) Non-Negotiable Principles

1. Intent First. **PASS**: story, lines, outcome unchanged.
2. Template First. **PASS**: 【Generation Goal】【Reference Asset Roles】【Subjects and Relationships】【Event Script】【Sound and Text】【Maintain Consistency】.
3. Account for Every Asset. **FAIL (F4)**: "@Video3 is used only for the owner's pace and acting in Shots 7-8" says what to take but not what to leave; the clip shows The Dip owner's face, rust sweater and shelves of lit jars, which §4 says a generation task must not inherit by default.
4. User Mapping First. **PASS**.
5. Minimal Clarification. **PASS**: nothing ambiguous enough to ask.
6. Submission-Ready Content Only. **PASS**: move labels ("Move 1, eyes in") are names Emile uses, not run markers.
7. Separate Parameters. **PASS**.
8. No Unrequested Constraints. **PASS**.
9. One Best Version. **PASS**.
10. Separate Facts from Observations. **FAIL (F5)**: "@Video4 … its bright-to-dusk light change": the clip is daylight from first to last frame (contact sheet, 2 fps); the prompt claims an asset property that isn't there.
11. Match Subject Cardinality. **PASS**.

## c) Template: Generation with Reference Assets + Organizing Multiple Reference Assets

- Goal states the core subject and event. **PASS**.
- Each image: subject + attribute + what not to use. **FAIL (F1)** @Image7 (see above). Others PASS (@Image1 "use only her face…", @Image4 "do not use the background", @Image3 "do not use the linen background").
- Each video: what to take + "do not use <identity, clothing, scene>". **FAIL (F4)** @Video3 has no exclusion. @Video1/2/4 PASS on exclusions.
- Each audio: voice/sound role; text wins over audio words. **PASS**: "do not use its words" on all three.
- Scene-by-scene activation (assets activated in the shot that uses them). **FAIL (F3)**: @Video3 is named in its role line only; Shots 7-8 never activate it, so the acting ref is invisible where it is used. Moves 1, 2, 4 are named in their shots (PASS).
- Spatial relationships against stable objects. **PASS**: jar on the owner's desk, clearance box on the floor, cat on the back of the sofa.
- 【Maintain Consistency】 present. **PASS**.

## d) Shot table (pass 1)

| Shot | On screen | Defined by | Verdict |
|---|---|---|---|
| 1 | Shopper; her screen; her candle | "The shopper (@Image1)"; @Image2; candle in words | PASS |
| 2 | Shopper; cat | "the shopper (@Image1)"; cat in words | PASS |
| 3 | Shopper's face (move) | @Image1 + @Video1 named | PASS |
| 4 | Laptop, "she scrolls" | screen not tied to @Image2 in the shot; "she" not named with her image | **FAIL (F2)** |
| 5 | "her hand", laptop, cat | shopper not named with @Image1 | **FAIL (F2)** |
| 6 | Move, two rooms | @Video2 named; studio not tied to @Image5 | PASS (studio named in words) |
| 7 | Owner, jar, laptop | "the owner (@Image4)", @Image6; @Video3 not activated | **FAIL (F3)** |
| 8 | "her hands", jar, box | owner and jar not tied to @Image4/@Image3; @Video3 not activated | **FAIL (F2, F3)** |
| 9 | "the lime orb", "she freezes" | orb not tied to @Image7; owner not tied to @Image4 | **FAIL (F2)** |
| 10 | "the orb", city | orb not tied to @Image7; @Video4 named | **FAIL (F2)** |
| 11 | "the owner", laptop message, jar | owner not tied to @Image4; @Image6's role clashes with this screen | **FAIL (F2, F8)** |
| 12 | Orb to wordmark, end screen | @Video5 named; orb not tied to @Image7; @Image7 role overlaps wordmark | **FAIL (F1, F2)** |

## e) Asset limits

- Images: 7 (≤30). **PASS**. All ≤4K.
- Videos: 5 (≤10); each 2.33-5.00 s; total 21.83 s (≤30). **PASS** against the API doc (`create-video-generation-task-api.md` l.255: "Non-video-editing tasks: Each video must be 2–30 seconds long"; the 4–30 s per-clip rule, l.256, is for video editing only). Note: the run brief says 4-30 s each; @Video3 (2.33 s) is under that, but this is a reference-generation task, where 2 s is the official floor. All videos ≥407,696 px (video3 512,000).
- Audio: 3 (≤10); each 4.5-10 s (≥2); total 23.50 s (≤30). **PASS**.
- Total assets 15 (≤50). **PASS**.

## Page (index.html) findings, pass 1
- **F7**: the top "The exact prompt" block (textarea + rendered view) showed the retired hand-written prompt, with "@Image1 is also her night living room … and her grey tabby cat" (two jobs for one image) and "following @Video1" with no move names. The move card read "Move 4 · Earth zoom" while the prompt says "Move 4, city flight". The @Video3 card said "Nothing to fence off" though its clip shows The Dip's shelves; the @Video4 card claimed a bright-to-dusk change.

### Pass 1 FAILs (8)
F1 @Image7 two roles · F2 actors unnamed per shot · F3 @Video3 not activated · F4 @Video3 no exclusion · F5 Video4 dusk not real · F6 missing end states · F7 page shows retired prompt / move names mismatch · F8 @Image6 role unscoped.

## Fixes applied (prompt-sd25pe-final.txt and index.html)
- F1: "@Image7 is Scout: use only the lime disc … as a glowing orb; do not use the wordmark letters or the black background." The wordmark is @Video5's alone.
- F2: every shot names who is in it with her image: Shots 4, 5 "the shopper (@Image1)"; Shots 8, 9, 11 "the owner (@Image4)"; Shots 9, 10, 12 "Scout (@Image7)" / "Scout's orb (@Image7)"; jar "(@Image3)" in Shots 7, 8, 11; studio "(@Image5)" in Shots 6, 7.
- F3: Shot 7 "with the pace and acting of Move 3, The Dip's pace, from @Video3"; Shot 8 "still with the pace of @Video3". Each move is now named "Move N, <name>, from @VideoN" in its shot and on its role line, matching the page.
- F4: "@Video3 … do not use its face, clothes, room or candles."
- F5: "@Video4 is Move 4, city flight: used only for the camera path of Shot 10, high over a city and diving down between towers; do not use its people, places or daylight." Shot 10: "flies over the city at night".
- F6: an "At the end" state on all 12 shots.
- F7: page's top prompt (textarea, rendered view, copy button) now shows the final; old version labelled "retired, history only"; move cards, reel captions and shot list read Move 1 Eyes in, Move 2 High flip, Move 3 The Dip's pace (acting reference), Move 4 City flight; image1, image7, video3, video4 cards match the new one-job roles.
- F8: "@Image2 … in Shots 1 and 4"; "@Image6 … in Shot 7".
- Also: @Image1 "do not use the room, cat, candle or laptop in this image" (her room, cat and candle are in words); @Image5 "do not use it for any jar on the desk", "the shelf jars stay on the shelves"; "one orb only" in 【Maintain Consistency】.
- Spoken lines diffed against the pre-check prompt: 10 of 10 identical. Word count 1,246 → 1,427.

---

# PASS 2 (fixed prompt-sd25pe-final.txt)

## a) Final Checklist
1. One primary task. **PASS**: "Generate a realistic story ad…".
2. Subjects, counts, outcome unchanged. **PASS**: "Exactly two women, never in the same shot"; "Scout (@Image7) is one lime orb"; lines identical.
3. Every required entity covered, none merged. **PASS**: shopper @Image1, owner @Image4, Scout @Image7, jar @Image3, studio @Image5; room, cat, her candle, clearance box in words.
4. Each used asset one unique role. **PASS**: @Image7 orb only ("do not use the wordmark letters or the black background"); @Video5 end screen only; @Image2 "in Shots 1 and 4"; @Image6 "in Shot 7"; @Audio3 Scout timbre Shots 9-11 only.
5. References unchanged, none invented. **PASS**: same 15 numbers.
6. **N/A**. 7. **PASS**: all 15 used, no unused. 8. **N/A**.
9. Individual mapping. **PASS**: one role line per asset; one subject per line.
10. Single-character image for one character. **PASS**.
11. One state change + end state per stage. **PASS**: every shot ends "At the end, …" (Shots 1-12).
12. Time ranges kept, none invented. **PASS**: 0-2 … 26-30 s unchanged.
13. **N/A**. 14. **PASS**. 15. **N/A**. 16. **N/A**. 17. **N/A**. 18. **N/A**. 19. **N/A**.
20. Observable emotion/camera. **PASS**: "steady push into the shopper's (@Image1) face and eye", "the camera rises, flips overhead and lands".
21. Speakers. **PASS**: 10 lines, each "in English" with the speaker; shopper lips closed (5/5); owner "her mouth closed" in 9 and 11; Scout "off screen" in 11, "from the talking 'o'" in 12.
22. Identifiers. **PASS** ("Move 1" etc. are names, not angles).
23. No parameters/meta. **PASS**: grep for "vertical|9:16|480|second video" finds only the user's "26-30 s" range.
24. Gate sentence once. **PASS**.
25. **N/A**. 26. **PASS**: only our own requested constraints. 27. **PASS**.

## b) Principles 1-11
1 PASS · 2 PASS · 3 **PASS** (every video now says what not to use: @Video1/2 "people, places or colours", @Video3 "face, clothes, room or candles", @Video4 "people, places or daylight"; @Video5 fully used) · 4 PASS · 5 PASS · 6 PASS · 7 PASS · 8 PASS · 9 PASS · 10 **PASS** (no dusk claim; night is a story fact in the shot text) · 11 PASS.

## c) Template
Goal **PASS** · image roles with exclusions **PASS** · video roles with exclusions **PASS** · audio roles **PASS** · scene-by-scene activation **PASS** (Move 1 @Video1 Shot 3, Move 2 @Video2 Shot 6, Move 3 @Video3 Shots 7-8, Move 4 @Video4 Shot 10, @Video5 Shot 12, @Image2 Shots 1/4, @Image6 Shot 7) · spatial relations **PASS** · consistency block **PASS**.

## d) Shot table (pass 2)

| Shot | Who / what on screen | ONE @asset each | Verdict |
|---|---|---|---|
| 1 | Shopper; her screen; her candle | shopper @Image1; screen @Image2; candle in words | PASS |
| 2 | Shopper; cat | @Image1; cat in words | PASS |
| 3 | Shopper's face, Move 1 | @Image1; move @Video1 | PASS |
| 4 | Shopper's laptop page | @Image1; page @Image2 | PASS |
| 5 | Shopper, laptop, cat | @Image1; cat in words | PASS |
| 6 | Move 2, into the studio | move @Video2; studio @Image5 | PASS |
| 7 | Owner, studio, jar, sales screen; Move 3 pace | @Image4; @Image5; @Image3; @Image6; @Video3 | PASS |
| 8 | Owner's hands, jar, CLEARANCE box | @Image4; @Image3; @Video3 pace; box in words | PASS |
| 9 | Scout's orb, owner | @Image7; @Image4 | PASS |
| 10 | Scout's orb over the city, Move 4 | @Image7; @Video4; city at night in words | PASS |
| 11 | Owner, message on screen, jar | @Image4; message text in words; @Image3 | PASS |
| 12 | Orb into the wordmark, end screen | @Image7 (orb) → @Video5 (end screen) | PASS |

## e) Asset limits
Unchanged from pass 1: 7 images, 5 videos 21.83 s (each 2.33-5 s, API floor 2 s for generation), 3 audio 23.50 s, 15 assets. **PASS**.

**Pass 2: zero FAILs.**

---

# PASS 3 (after independent check 1, Nov 15) on the current prompt-sd25pe-final.txt

Check 1 (fresh-context marketing-check) found: Shot 6 named no person; the page's @Video4 card still claimed a dusk change; voices not bound to their audio inside the shots; prompt 1,427 words against the API tip "no more than ... 1,000 English words"; Shot 11's typed message read like a chat widget; @Video3 should be called the acting reference; stale page numbers.
Fixed:
- Shot 6: "the camera rises from the shopper (@Image1), flips overhead <whoosh> and ends on the owner (@Image4) at her desk in the bright studio (@Image5)". Subjects line now "never in the same frame" (the flip passes from one to the other).
- Every line binds its voice: "inner voice (@Audio1)", "The owner (@Audio2)", "Scout (@Audio3)"; Shot 8 "the owner (@Image4), face on screen".
- Shot 11: "her laptop shows a Scout interview card with the shopper's answer, 'Wasn't sure it's safe for my cat.'" (a reason from an interview, not a chat message).
- @Video3 is "the acting reference, The Dip's pace" in the prompt and on the page.
- Prompt cut to 997 words (role lines shortened, no restated asset detail); spoken lines diffed: 10 of 10 identical.
- Page: @Video4 card fixed, prompt-length note and "end line is 10 words" corrected, all prompt copies resynced.

Re-run of the Final Checklist on this version: 1 PASS · 2 PASS · 3 PASS · 4 PASS (one role per line, scoped screens "(Shots 1, 4)", "(Shot 7)") · 5 PASS · 6 N/A · 7 PASS · 8 N/A · 9 PASS · 10 PASS · 11 PASS (every shot ends "Ends …"/"ends on …") · 12 PASS · 13 N/A · 14 PASS · 15-19 N/A · 20 PASS · 21 PASS (speaker + audio + "in English" + on/off screen on all 10 lines; lips/mouth closed for listeners) · 22 PASS · 23 PASS · 24 PASS · 25 N/A · 26 PASS · 27 PASS. Principles 1-11 PASS. Template PASS. Shot table: Shot 6 now "@Image1 → @Image4 in @Image5, move @Video2" PASS; all 12 shots PASS. Limits unchanged, PASS.

**Pass 3: zero FAILs.**

# PASS 4 (after independent check 2, Nov 15)

Check 2: the prompt passed every sd25-pe item (zero FAILs); the page still contradicted it in four places, plus three optional prompt tightenings.
Fixed: page Shot 11 row and Risks note now quote the interview card ("Wasn't sure it's safe for my cat."); the Nov 14 "ours vs sd25-pe" section is marked History; the top box says "three real camera-move clips plus one acting-reference clip"; shot-list rows for Shots 1 and 8 match the prompt. Prompt: "@Video3 is the acting reference: only the cutting pace between the owner's face and her hand on the jar in Shots 7-8; not its face, smile, clothes, room or candles"; Shot 8 "her face in frame"; Shot 9 "freezes, jar above the box"; "Never swap the two women." 995 words; 10 lines identical.
Final Checklist re-run: all PASS or N/A. **Pass 4: zero FAILs.**
