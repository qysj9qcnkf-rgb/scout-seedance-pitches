# SD25-CHECK · H228 · cat-candle script E (The Dip as a grey motion skeleton)

Checked Nov 15 2026 against ByteDance's `sd25-pe` skill (`~/ClaudeCowork/marketer/.claude/skills/sd25-pe/SKILL.md`, v0.1.1, read in full; checklist, principles and the blockout + reference templates re-read for this script). Self-update had already run this session (exit 0).
Prompt checked: pass 1 = `prompt-sd25pe-final.pre-sd25check.txt` (the prompt as it stood); pass 2 = the fixed `prompt-sd25pe-final.txt`. Page: `index.html` (backup `index.pre-sd25check.html`; job plan backup `job-plan.pre-sd25check.json`).
Task type: **video generation with reference assets + a coarse-blockout reference** (@Video1 = The Dip, grey and blurred, as the motion skeleton). Not editing, not extension, no keyframes, no storyboard grid.

## Assets inspected (every one opened)

| Ref | File | What it really is | Spec |
|---|---|---|---|
| @Image1 | a/image1-shopper-v2.png | Woman, dark-brown bob with bangs, cream cardigan, lips closed, hand on a white mouse; sofa, floor lamp, grey tabby, small lit amber candle, laptop | 880x1168 |
| @Image2 | a/image2-product-page.png | Ember & Fig product page, Fig & Cedar $38.00, Add to cart, Burn time/Size/Wax rows; no pet info | 1600x1000 |
| @Image3 | a/image3-owner-actress14.png | Woman, auburn side braid, rust sweater; brick wall + roaster drum behind | 1536x2048 |
| @Image4 | a/image4-owner-studio-day.png | Sunlit studio: shelves of lit blank-label jars, brick, packing table, kraft boxes, laptop (black screen), and a tall lit three-wick "Fig & Cedar" jar | 752x1344 |
| @Image5 | a/image5-owner-sales.png | Products page, Fig & Cedar row in red, 3 units, -84% | 1600x1000 |
| @Image6 | a/image6-scout-logo.png | "Scout" wordmark, lime disc with five bars as the "o", black background | 1000x1000 |
| @Image8 (new, Codex fix 1) | a/image8-cat.jpg | Grey tabby cat only, crop of the same shopper still (sofa/blanket behind); the free crop already uploaded for H224 | media 696c034b-34ca-4b95-8f62-382f22de2f6f |
| @Image7 (new) | a/image7-fig-cedar-jar.jpg | Crop of @Image4's jar only: tall amber three-wick jar, kraft label "Fig & Cedar" (laptop edge and table behind) | 846x1320, media 2a029297 |
| @Video1 | a/video1-dip-skeleton-25s-clay.mp4 | The Dip 0-25 s, grey, blurred: phone macro, woman at a desk with laptop + jar, screens, man in a kitchen, chat bubbles, "birthday candle" text, woman with jar to camera | 25.00 s, 480x854 (409,920 px), no audio |
| @Video2 | a/video2-h158-end.mp4 | Scout end screen (same file as H227's video5); voice: "Scout interviews your shoppers for you. Get free early access." | 4.50 s, 1080x1920, audio |
| @Audio1 | a/audio1-shopper-serene-9s.mp3 | Calm woman's voice | 9.00 s |
| @Audio2 | a/audio2-owner-alexandra-10s.mp3 | Alexandra, warm, dry | 10.00 s |
| @Audio3 | a/audio3-scout-voice-from-video2-4.5s.mp3 | Video2's soundtrack, the end-screen line | 4.50 s |

job-plan.json order matches the prompt numbering; image7 added after image6 (images are numbered separately from videos and audio, so nothing else renumbers).

---

# PASS 1 (prompt-sd25pe-final.pre-sd25check.txt)

## a) Final Checklist
1. One primary task. **PASS**: generation; "Generate a realistic, warm short film…".
2. Subjects, counts, prop ownership, outcome unchanged. **FAIL (E9)**: 6-7s "the cat … stepping past the lit jar": in the shopper's home that reads as a Fig & Cedar jar she already owns (the story's one jar is the owner's).
3. Required entities covered, none merged. **PASS**.
4. Each used asset one unique role. **FAIL (E1, E2, E3)**: "@Image1 is used for the shopper…" + "The shopper's living room also comes from @Image1: the dim room…, her laptop and white mouse, the lit candle and the grey tabby cat" (five entities from one image); "@Image4 is used for the owner's sunlit candle studio: the packing table, her laptop and the one lit three-wick Fig & Cedar jar" (scene + key prop on one line); "@Image6 … do not use its lettering before the end screen" (implies @Image6 supplies the end-screen lettering, which is @Video2's job).
5. References unchanged / none invented. **PASS**.
6. **N/A**. 7. **PASS**: all 11 used. 8. **N/A**.
9. Individual mapping, no range statements. **FAIL (E1, E2)**: as in 4; §4 "each line must define only one subject, group, prop, or scene".
10. Single-character image for one character. **PASS**.
11. One state change + clear end state per stage. **FAIL (E7)**: only the final line has "At the end"; 0-2s through 23-25s have none.
12. User time ranges kept. **PASS**: 0-2 … 25-30s, continuous.
13. **N/A**. 14. **PASS**. 15-18. **N/A**.
19. Blockout identified coarse/fine with mapping and exclusions. **PASS**: "@Video1 is a coarse-blockout reference…"; "The blurred main figure in @Video1 corresponds to the shopper from 0 to 9 seconds and to the owner from 11 to 21…"; "do not use its grey blurred look, people, faces, rooms, phones, screens, cards or text".
20. Observable emotion/camera. **PASS**.
21. Speakers. **PASS**: every line "In American English" + speaker + on/off screen; shopper "lips stay closed"; owner lips closed while Scout speaks.
22. **PASS**. 23. **PASS** (no ratio/duration/"vertical"). 24. **PASS**: 25 s skeleton vs 30 s output fires the gate; sentence once after the goal. 25. **N/A**. 26. **PASS**. 27. **PASS**.

## b) Principles 1-11
1 PASS · 2 PASS · 3 **FAIL (E6)**: "@Audio3 is used for Scout's voice in every Scout line: voice quality, pace and emotion only" has no "do not use its words", though its words are the end line and Scout says different words at 18-23 s · 4 PASS · 5 PASS · 6 PASS · 7 PASS · 8 PASS · 9 PASS · 10 PASS · 11 PASS.

## c) Template: Coarse Blockout + Generation with Reference Assets
- Coarse blockout declared, used only for motion dimensions, appearance excluded. **PASS**.
- Each blockout figure mapped to a final subject. **PASS** (by time range).
- Scene-by-scene activation: each shot says which move it takes from @Video1. **FAIL (E5)**: shots say "Pull back", "Push into her screen", "Whip pan" with no link to @Video1 and none of the page's move names (The Dip macro, pull-back, push into laptop, flash montage, orb flight, push-in, whip pan, punch-in); the two exceptions (15-19 s) are explained only in 【Motion Skeleton】.
- Image roles with what not to use. **FAIL (E1-E3)**.
- 【Maintain Consistency】 present. **PASS**.

## d) Shot table (pass 1)

| Time | On screen | Defined by | Verdict |
|---|---|---|---|
| 0-2 | "the shopper's hand", her screen | hand not tied to @Image1; @Image2 | **FAIL (E4)** |
| 2-4 | "the shopper", sofa, cat | no @Image1 in the shot; room/cat from @Image1's second role | **FAIL (E1, E4)** |
| 4-6 | "her screen" | no @Image1/@Image2 in the shot | **FAIL (E4)** |
| 6-7 | flash cuts, "the lit jar" | jar ownership unclear | **FAIL (E4, E9)** |
| 7-9 | "her face" | no @Image1 | **FAIL (E4)** |
| 9-11 | flight | @Video1 not named in the shot | **FAIL (E5)** |
| 11-12 | "the owner", studio, jar | no @Image3; studio and jar both from @Image4 | **FAIL (E2, E4)** |
| 12-15 | "her", laptop | no @Image3; @Image5 | **FAIL (E4)** |
| 15-18 | "her hands", jar | no @Image3; jar from @Image4's second role | **FAIL (E2, E4)** |
| 18-19 | jar, "a small glowing lime orb" | orb not tied to @Image6 | **FAIL (E4)** |
| 19-21 | "her face", orb | no @Image3 / @Image6 | **FAIL (E4)** |
| 21-22 | "the orb", her room | no @Image6 | **FAIL (E4)** |
| 22-23 | phone | in words | PASS |
| 23-25 | "the owner", jar | no @Image3 | **FAIL (E4)** |
| 25-30 | orb → end screen | @Video2; orb not tied to @Image6; @Image6 lettering overlap | **FAIL (E3, E4)** |

## e) Asset limits
Images 6 (≤30) · videos 2: 25.00 s + 4.50 s = 29.50 s (≤30; each within the 2-30 s non-editing range, API doc l.255) · audio 3: 9 + 10 + 4.5 = 23.50 s (≤30, each ≥2 s) · 11 assets (≤50) · @Video1 409,920 px ≥ 407,696 px minimum. **PASS** (pass 2: 7 images, 12 assets, still PASS).

## Page findings, pass 1
- **E8**: the page's top prompt (rendered blocks + "Copy our prompt") was the retired hand-written version: "@Image1 is the shopper, her cat and her dim living room…", "@Image4 is the owner's sunlit candle studio with the lit three-wick Fig & Cedar jar". No "What Seedance gets" box; concept frames, Dip frames and v1 refs sat unlabelled next to real refs.

### Pass 1 FAILs (9)
E1 Image1 five jobs · E2 Image4 room+jar · E3 Image6 lettering overlap · E4 actors unnamed per shot · E5 moves not named in shots · E6 Audio3 words unfenced · E7 missing end states · E8 page shows retired prompt · E9 shopper's jar ambiguous.

## Fixes applied
- E1: "@Image1 is the shopper: use only her face, dark-brown bob with bangs and cream knit cardigan; do not use the room, laptop, mouse, candle or cat in this image." Her room, laptop, white mouse, candle and cat are in words in 【Subjects and Relationships】.
- E2: new **@Image7** = the Fig & Cedar jar, cropped locally from @Image4 (same jar, so no look change) and uploaded free (Higgsfield media 2a029297; no credits). "@Image4 is used only for the owner's sunlit candle studio…; do not use the Fig & Cedar jar in this image." Jar shots say "the Fig & Cedar jar (@Image7)".
- E3: "@Image6 is Scout: use only the glowing lime disc… as a small orb; do not use its lettering or black background."
- E4: every shot names its people with their images: the shopper (@Image1) 0-9 s, the owner (@Image3) 11-25 s, Scout (@Image6) 18-30 s, the jar (@Image7); the blockout mapping also names (@Image1)/(@Image3).
- E5: each shot opens with its move, named like the page: "Dip move, macro / pull-back / push into the laptop / flash montage / orb flight / push-in / whip pan / punch-in (from @Video1)", "Hard cut" at 7-9, 11-12, 21-22, 22-23, and "Named exception to @Video1" at 15-18 and 18-19.
- E6: "@Audio3 … do not use its words except in the end-screen line."
- E7: an "At the end" state on every shot.
- E8: page top prompt, both copy buttons and the side-by-side "send" column now show the fixed final; old prompt labelled "retired, history only"; "What Seedance gets" box at the very top (12 uploads in order, the grey skeleton video playing); every concept frame, Dip frame, v1 ref and preview clip labelled "Illustration, not sent to Seedance"; image1/image4/image6 cards rewritten to one job; new image7 card.
- E9: 6-7s "stepping past her lit candle"; 【Maintain Consistency】 "the single Fig & Cedar jar (@Image7)… the shelf jars stay on the shelves. One orb only."
- Spoken lines diffed: 11 of 11 identical. Words 1,264 → 1,620.

---

# PASS 2 (fixed prompt-sd25pe-final.txt)

## a) Final Checklist
1 **PASS** · 2 **PASS** ("her lit candle"; "The one Fig & Cedar jar (@Image7) stands on the owner's table") · 3 **PASS** · 4 **PASS** (one role per line: @Image1 shopper, @Image2 her screen, @Image3 owner, @Image4 studio, @Image5 owner's screen, @Image6 orb, @Image7 jar, @Video1 skeleton, @Video2 end screen, @Audio1-3 voices) · 5 **PASS** (only @Image7 added, by us, with its upload) · 6 N/A · 7 **PASS** (all 12 used) · 8 N/A · 9 **PASS** · 10 **PASS** · 11 **PASS** (every shot "At the end, …") · 12 **PASS** · 13 N/A · 14 **PASS** · 15-18 N/A · 19 **PASS** (coarse blockout, mapping "the shopper (@Image1) from 0 to 9 seconds… the owner (@Image3) from 11 to 21…", exclusions) · 20 **PASS** · 21 **PASS** (11 lines, each with speaker, "In American English", on/off screen; listener lips closed) · 22 **PASS** · 23 **PASS** (grep "vertical|9:16|480p|second video": none) · 24 **PASS** (gate sentence once) · 25 N/A · 26 **PASS** · 27 **PASS**.

## b) Principles 1-11
All **PASS**. 3: every asset now says what it gives and what not to take, including @Audio3.

## c) Template (coarse blockout + reference assets)
Blockout declaration **PASS** · per-figure mapping **PASS** · per-shot activation **PASS** (every shot names its Dip move from @Video1, a hard cut or a named exception) · image/video/audio roles with exclusions **PASS** · consistency block **PASS**.

## d) Shot table (pass 2)

| Time | Who / what | ONE @asset each | Verdict |
|---|---|---|---|
| 0-2 | shopper's hand; her screen | @Image1; @Image2; move: Dip macro @Video1 | PASS |
| 2-4 | shopper on sofa; cat | @Image1; cat in words; Dip pull-back | PASS |
| 4-6 | shopper's screen | @Image1; @Image2; Dip push into the laptop | PASS |
| 6-7 | page rows, her finger, eyes, cat, her candle | @Image2; @Image1; cat/candle in words; Dip flash montage | PASS |
| 7-9 | shopper's face, lid | @Image1; hard cut | PASS |
| 9-11 | flight over the city | Dip orb flight @Video1; city in words | PASS |
| 11-12 | owner, studio, jar | @Image3; @Image4; @Image7; hard cut | PASS |
| 12-15 | owner, sales screen | @Image3; @Image5; Dip push-in | PASS |
| 15-18 | owner's hands, jar | @Image3; @Image7; named exception | PASS |
| 18-19 | jar, owner, Scout's orb | @Image7; @Image3; @Image6; named exception | PASS |
| 19-21 | owner, jar, orb | @Image3; @Image7; @Image6; Dip whip pan | PASS |
| 21-22 | orb in her room, candle, cat | @Image6; room/candle/cat in words; no person | PASS |
| 22-23 | her phone | in words; no person | PASS |
| 23-25 | owner relights the jar | @Image3; @Image7; Dip punch-in | PASS |
| 25-30 | orb → end screen | @Image6 → @Video2; voice @Audio3 | PASS |

## e) Asset limits
7 images · 2 videos 29.50 s · 3 audio 23.50 s · 12 assets. **PASS**.

**Pass 2: zero FAILs.**

---

# PASS 3 (tightened before independent checks, Nov 15) on the current prompt-sd25pe-final.txt

Applied the lessons from H227's first independent check to this script too:
- Length: the API doc's tip says "no more than 500 Chinese characters or 1,000 English words" (`create-video-generation-task-api.md`, prompt Tip). Pass 2 was 1,620 words; now 983. Asset role lines carry the role and the exclusion only (no restated look), and the room/props are described once in 【Subjects and Relationships】.
- Every spoken line binds its audio inside the shot: "The shopper's inner voice (@Audio1)", "The owner (@Audio2)", "Scout (@Audio3)", with on/off screen and lips state.
- Every shot opens with its move: "Dip macro / pull-back / push into the laptop / flash montage / orb flight / push-in / whip pan / punch-in (@Video1)", "hard cut", or "named exception".
- Spoken lines diffed: 11 of 11 identical; sound cues <> diffed: identical.

Re-run of the Final Checklist: 1 PASS · 2 PASS · 3 PASS · 4 PASS · 5 PASS · 6 N/A · 7 PASS (12 of 12 used) · 8 N/A · 9 PASS · 10 PASS · 11 PASS (every shot "Ends …") · 12 PASS · 13 N/A · 14 PASS · 15-18 N/A · 19 PASS (coarse blockout; "The blurred main figure in @Video1 is the shopper (@Image1) at 0-9s and the owner (@Image3) at 11-21s and 23-25s"; the 21-23s inserts say "no person") · 20 PASS · 21 PASS · 22 PASS · 23 PASS · 24 PASS · 25 N/A · 26 PASS · 27 PASS. Principles 1-11 PASS. Template PASS. Shot table unchanged from pass 2, all PASS. Limits PASS.

**Pass 3: zero FAILs.**

---

# PASS 4 (after independent check 1, Nov 15)

Check 1 (fresh-context marketing-check) found 5 checklist FAILs: the moves were labels, not observable moves (items 19, 20); the 9-11s flight implied an orb with no asset (item 3); the skeleton's other objects (desk jar, jar in hands, phone, round icon) were not mapped (item 19); 7-9s close-up contradicted the skeleton's medium shot; 15-18s "then up to her face… Ends on the jar" and the jar burning → smoke → relight with no blow-out (item 11); "the three flames" had no referent (item 27); the phone was not set up in her room; the page's round-4 notes contradicted the prompt.
Fixed:
- Every shot now gives the move as something visible: "pull back to the shopper (@Image1) on her sofa", "push over the shopper's (@Image1) shoulder into @Image2", "push in to a medium close-up of the owner (@Image3)", "Dip whip pan to the owner's (@Image3) face", "close on hands, tilting up to her face", "tilt up from the smoking jar (@Image7) with Scout (@Image6) rising".
- 9-11s: "the camera alone, no orb, flies out of her window and over the city".
- Blockout mapping line: "the desk jar at 2-8s is the shopper's small candle; the jar in hands at 15-21s is the Fig & Cedar jar (@Image7); the phone at 20-23s is the shopper's phone; the round icon at 9-11s is not used."
- 7-9s is a medium shot (matches the skeleton).
- 15-18s: she "blows out its flames"; ends on her face; 18s smoke and 23s relight now have a cause.
- 25-30s: "the jar's (@Image7) flames".
- The phone is in her room list; @Image2's product is tied to the jar ("the one jar (@Image7), which is the candle on @Image2's page").
- Page: the Nov 14 compile section is marked History; header says the Nov 15 check; shot-list rows 7-9, 9-11, 15-18 match the prompt.
- 995 words; 11 lines and all sound cues identical to the pre-check prompt.

Final Checklist re-run: 1-27 PASS or N/A (3 PASS, 11 PASS, 19 PASS, 20 PASS, 27 PASS now). Principles PASS. Coarse-blockout template PASS. Shot table all PASS. **Pass 4: zero FAILs.**

# PASS 5 (after independent check 2, Nov 15)

Check 2 found: the 19-21s phone in @Video1 is in the owner figure's hand but was mapped to the shopper (prop ownership); skeleton objects still unmapped (0-2s desk phone, 21-22s hand/jar/mug, the man at 11-15s); The Dip's 15.63 s cut rounds to 16, not 15; transitions not named in the 12, 16, 18 and 25 s shots; 18-19 "Hold" on the page vs "tilt up" in the prompt; "named exception" and "Dip …" are labels Seedance can't see; @Image2's jar differs from @Image7 while the prompt called them the same; @Video2's own audio not fenced; owner's lips at 23-25s; page "6 images", Round 2 "Mine (send this one)", 7-9 map "Close".
Fixed: blockout line now maps "the desk phone at 0-2s is her laptop screen (@Image2) … the phone at 22-23s is the shopper's phone; the hand-held phone (19-21s), hand, jar and mug (21-22s) and round icon (9-11s) are unused" (the owner figure at 11-21s covers the man); shots re-timed 12-16s and 16-18s and the exception range is 16-19s; every shot names its move or transition as "@Video1's macro / pull-back / push / five flash cuts / flight / push-in / whip pan / punch-in", "hard cut", "tilt up" or "match dissolve"; "named exception" removed; "which is the candle on @Image2's page" removed and consistency says "the jar (@Image7)"; "@Video2 … on-screen words; not its audio"; 23-25s "lips closed"; Scout "on screen" at 19-22s; page: 7 images, Round 2 marked history, 7-9 map "Medium", 18-19 row "Tilt up". 998 words; 11 lines and all sound cues identical.
Final Checklist re-run: all PASS or N/A (item 2 prop ownership PASS, 12 PASS, 19 PASS, 23 PASS). **Pass 5: zero FAILs.**

# PASS 6 (Codex fix 1, Nov 15): one @asset per person, and the cat

Codex asked for one @asset per on-screen person and object. The rule we hold (marketing-check §3, updated Nov 15) is one @asset per PERSON; objects follow sd25-pe itself, which says (SKILL.md, line 191): **"Generic background guests, furniture, decor, or environmental elements do not create an asset gap; cover them through the designated scene asset and the text description."** The same line adds that a source is needed when "a core character, prop, scene, action, or sound explicitly required by the user still lacks a source".
- The **cat** is story-critical (the whole ad is "is it safe for my cat"), so it now has its own asset: **@Image8**, "only the shopper's cat; not the sofa", the free crop already uploaded for H224 (media 696c034b, no credits). One role. Named in 2-4s, 6-7s and 21-22s, in 【Subjects and Relationships】 and in 【Maintain Consistency】. @Image1 already says "not the room, candle or cat", so the cat has exactly one source.
- The **sofa, room, small candle and phone** stay as words (furniture, decor and room props), covered by the text description per the line quoted above.
- Prompt: 998 words (wc -w; was 998; under the API tip of 1,000). The 10 spoken lines {…} (earlier passes miscounted them as 11) and every <sound> cue diff identical to the pre-fix prompt (`prompt-sd25pe-final.pre-codexfix1.txt`). Assets: 13 = 8 images + 2 videos + 3 audio, under Seedance 2.5's caps (seedance-2-5.md: 30 images + 10 videos + 10 audios; also under the stricter 9 images of the 2.0 column). Video 29.5 s and audio 23.5 s are unchanged, both under 30 s. job-plan.json and the page's "What Seedance gets" box now list 13 files, with Image 8 after Image 7.

## Shot ledger (current prompt): every person and object, and what defines it

| Shot | Person -> its ONE @asset | Object -> its @asset, or words |
|---|---|---|
| 0-2s | shopper's hand -> @Image1 | laptop screen -> @Image2; mouse -> words (furniture/decor, sd25-pe line 191) |
| 2-4s | shopper -> @Image1 | cat -> **@Image8**; sofa -> words (furniture, sd25-pe line 191) |
| 4-6s | shopper -> @Image1 | laptop screen -> @Image2 |
| 6-7s | shopper (finger, eyes) -> @Image1 | Wax/Burn rows -> @Image2; cat -> **@Image8**; small candle -> words (decor, sd25-pe line 191) |
| 7-9s | shopper -> @Image1 | laptop -> words (furniture/decor) |
| 9-11s | none ("the camera alone, no orb") | window, city -> words (environment, sd25-pe line 191) |
| 11-12s | owner -> @Image3 | studio -> @Image4; jar -> @Image7 |
| 12-16s | owner -> @Image3 | laptop screen -> @Image5 |
| 16-18s | owner -> @Image3 | jar -> @Image7 |
| 18-19s | Scout -> @Image6 (owner's lips only) | jar -> @Image7 |
| 19-21s | owner -> @Image3; Scout -> @Image6 | jar -> @Image7 |
| 21-22s | no person; Scout -> @Image6 | cat -> **@Image8**; shopper's room and small candle -> words (room/decor, sd25-pe line 191) |
| 22-23s | no person | shopper's phone -> words (decor prop, sd25-pe line 191) |
| 23-25s | owner -> @Image3 | jar -> @Image7 |
| 25-30s | Scout -> @Image6 | jar -> @Image7; end screen -> @Video2 |

Every person has exactly one @asset; every asset has one role. Final Checklist items 3, 4, 7 (13 of 13 used), 9 and 10 re-run: **PASS**. Nothing else changed.
