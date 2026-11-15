# SD25-CHECK · H226 · Cat-candle C: keyframes

Checked Nov 15 2026 against `~/ClaudeCowork/marketer/.claude/skills/sd25-pe/SKILL.md` (v0.1.1; read in full for H224 and H225 this session, re-read for this script, file unchanged). Task type: video generation with reference assets (omni_reference, 30 s, 9:16 on the job), using the **Keyframe Anchors / Controlling the Order of Multiple Keyframes** template. Reference syntax is "Image N" / "Video N" / "Audio N" and is kept as written.

Pass 1 checks `prompt-sd25pe-final.pre-sd25check.txt` (1,084 words). Pass 2 checks the fixed `prompt-sd25pe-final.txt` (1,389 words).

## Assets inspected

| Ref | File | Probe | What is in it |
|---|---|---|---|
| Image 1 | a/image1-kf1.jpg | 752x1344 | Shopper on sofa at night, laptop on lap, lamp, small candle, cat on the sofa back |
| Image 2 | a/image2-kf2.jpg | 752x1344 | Over her shoulder: Ember & Fig page, cursor on Add to cart, candle |
| Image 3 | a/image3-kf3.jpg | 752x1344 | Her screen-lit face, lips closed, cat blurred behind |
| Image 4 | a/image4-kf4.jpg | 752x1344 | Lid lowered, shrug, cat beside her |
| Image 5 | a/image5-kf5.jpg | 752x1344 | Owner at laptop (units sold, red row), lit three-wick jar, jar shelves |
| Image 6 | a/image6-kf6.jpg | 752x1344 | Owner holding the lit jar, small smile |
| Image 7 | a/image7-kf7.jpg | 752x1344 | Same frame plus the lime orb beside her |
| Image 8 | a/image8-kf8.jpg | 752x**1338** | Product page close up, Add to cart glowing lime |
| Image 9 | a/image9-owner-face.jpg | 720x960 | Owner face, braid, rust sweater; brick and roaster behind |
| Image 10 | a/image10-shopper-face.jpg | 640x853 | Shopper face, bob, **mouth open** |
| Video 1 | a/video1-end.mp4 | 1080x1920, 4.50 s, audio | Scout end screen; voice: "Scout interviews your shoppers for you. Get free early access." |
| Video 2 | a/video2-flip-move.mp4 | 600x1066, 5.00 s, no audio | High flip move (throne room → poker table) |
| Audio 1 | a/audio1-owner-alexandra-9s.mp3 | 9.20 s | Owner voice |
| Audio 2 | a/audio2-shopper-serene-7s.mp3 | 7.30 s | Shopper voice |
| Audio 3 | a/audio3-scout-voice-4s.mp3 | 4.50 s | Video 1's own sound (Scout) |

The index.html cards and media IDs match the 15 files (1040c108, 1963a66d, 1db5a36d, 2049a920, 930ad239, 969c55f0, acb8804a, c2ed3b9e, cae62718, d9c52d05, plus the keyframe job IDs). Image 8 is 6 px shorter than the other keyframes. It is an intermediate keyframe, not a first or last frame, so the first/last ratio rule doesn't apply. Logged as a note.

## Pass 1 (before fixes)

### a) Final Checklist
1. One primary task: PASS. Generation.
2. Story unchanged: PASS.
3. Every entity covered: PASS. Shopper, owner, cat, jar, Scout and both rooms are in the text and keyframes.
4. One unique role per used asset: **FAIL**. "Video 1 is used only for the content of the final shot at 25-30s, with Scout's line in it" (picture + voice), while "Audio 3 is used only for Scout's voice … for his lines at 19-25s". Scout's voice came from two assets.
5. References unchanged: PASS.
6. N/A. 7. PASS, all 15 have roles. 8. N/A.
9. Individual mapping: PASS. Image 9 owner, Image 10 shopper, keyframes one per line.
10. PASS.
11. One state change and an end state per range: PASS ("At the end the laptop is closed and nothing has been bought"; "the last frame of Video 1 holds until 30s").
12. PASS. 13 N/A.
14. Locked ratio/duration: PASS. No first-frame API slot is used; no ratio in the prompt.
15 N/A.
16. First frame statement: **FAIL**. Image 1 is the opening keyframe, but the prompt has no standalone "Use Image 1 as the first frame." with its own description sentence, as the multiple-keyframes template requires.
17. Multiple keyframes in order without a static hold: PASS. "Use Images 1 to 8 in order as keyframes." and "with no static hold".
18-19 N/A. 20 PASS.
21. Speaking stages, no accent added: **FAIL**. "(a warm, dry, slightly husky American woman)" and "(a soft, calm young American woman, close-mic)" add a regional accent the script never asked for.
22. PASS. 23. PASS.
24. Gate line once when the gate fires: PASS on count. Video 1 is 4.50 s and Video 2 is 5.00 s against 30 s, and this is reference generation, not first-frame API generation. Placement is logged under the template.
25 N/A. 26 PASS. 27 PASS.

### b) Non-Negotiable Principles
1 PASS · 2 **FAIL** (the keyframe template's first-frame sentence is missing) · 3 PASS · 4 PASS · 5 PASS · 6 PASS · 7 PASS · 8 PASS · 9 PASS · 10 PASS · 11 PASS.

### c) Template: Controlling the Order of Multiple Keyframes
- Opening "Use Images 1 to 8 in order as keyframes.": PASS.
- "Use Image 1 as the first frame." + description: **FAIL**, missing.
- Image 2…8 "defines the Nth keyframe": PASS.
- Last frame: N/A. The film ends on Video 1, not on a keyframe.
- "passes through the states … in order": PASS.
- Gate line right after the goal sentence: **FAIL**, it sat after the second sentence.

### d) Shot table (pass 1)
| Shot | On screen | Defined by | Result |
|---|---|---|---|
| 0-3s | shopper, cat, room | Image 1; "The shopper" with no face ref in the shot | FAIL: actor not tagged with Image 10 |
| 3-6s | shopper's shoulder, screen | Image 2; "her shoulder" | FAIL |
| 6-9s | shopper's face, cat | Image 3; "her face" | FAIL; the page's Eyes in push is not named |
| 9-11s | shopper, cat, lid | Image 4; "She closes" | FAIL |
| 11-13s | flip | Video 2, "High flip" | FAIL: "rises above her" has no actor tag |
| 13-16s | owner, screen, jar | Image 5; "The owner" with no Image 9 | FAIL |
| 16-19s | owner, jar | Image 6; "she lifts" | FAIL |
| 19-22s | orb, owner | Image 7; "Scout pops up beside her" | FAIL |
| 22-25s | product page | Image 8 | PASS |
| 25-30s | end screen | Video 1 (picture + voice) | FAIL: two roles |

### e) Asset limits
Images 10 ≤ 30 PASS · Videos 2: 4.50 + 5.00 = 9.50 s (each 4-30 s) PASS · Audio 3: 9.20 + 7.30 + 4.50 = 21.00 s (each 2-30 s) PASS · Total 15 ≤ 50 PASS.

### Pass 1 FAILs (6)
1. Video 1 carried Scout's voice and the end picture, and Audio 3 covered only 19-25s (checklist 4).
2. No standalone "Use Image 1 as the first frame." (checklist 16, principle 2).
3. An "American" accent was added in the Audio 1/2 lines (checklist 21).
4. Shots named no actor with their face image ("The shopper on her sofa", "The owner leans…") (Emile's H224 rule).
5. The gate line was not right after the goal sentence (template).
6. The 6-9s camera move was not named as on the page (Eyes in slow push).

## Fixes made
Backups: `prompt-sd25pe-final.pre-sd25check.txt`, `index.pre-sd25check.html`. No new uploads were needed. 0 credits.
- Video 1 is now the picture only ("do not use its sound"); Audio 3 is Scout's voice "for all three Scout lines", and each Scout line says "in the voice of Audio 3".
- Added "Use Image 1 as the first frame." as its own sentence, plus a sentence describing that frame.
- Removed "American" from both voice lines.
- Every keyframe line and every shot names the actor with the face image ("the shopper (Image 10)", "the owner (Image 9)"). Scout is "Scout's lime-green orb (as in Image 7)".
- Every shot bracket names its transition and move as the page does: Opening shot, Hard cut, Eyes in slow push (in words), High flip, Lands from the High flip, orb pops in.
- Gate line moved right after the goal sentence. Added the Subjects line "one shopper (Image 10), one owner (Image 9), one grey tabby cat, one Fig & Cedar jar and one Scout".
- Image 10 line: "do not use its background or its open mouth" (her lines are thoughts).
- The 9 spoken lines and every <sound> are unchanged (diff clean).

## Pass 2 (fixed prompt)

### a) Final Checklist
1 PASS · 2 PASS · 3 PASS · 4 PASS (Video 1 picture only, Audio 3 Scout voice only, each keyframe one keyframe role, Image 9/10 face only) · 5 PASS (no reference renumbered or added) · 6 N/A · 7 PASS · 8 N/A · 9 PASS · 10 PASS · 11 PASS · 12 PASS · 13 N/A · 14 PASS · 15 N/A · 16 PASS: "Use Image 1 as the first frame." stands alone, followed by "This first frame defines…"; no last frame, so the ratio pair is N/A · 17 PASS · 18-19 N/A · 20 PASS · 21 PASS ("V.O., inner voice … in English"; "Scout, from the orb, in the voice of Audio 3 … in English"; no accent added) · 22 PASS · 23 PASS · 24 PASS (once, right after the goal sentence; the gate fires on 4.50 s and 5.00 s videos in a 30 s reference job) · 25 N/A · 26 PASS · 27 PASS.

### b) Principles 1-11
All PASS.

### c) Template
Keyframe order line PASS · first-frame sentence + description PASS · Image 2-8 keyframe lines PASS · "passes through Images 1 to 8 in order … with no static hold" PASS · last frame N/A · gate placement PASS.

### d) Shot table (pass 2)
| Shot | Who/what → ONE asset each | Camera / transition | Result |
|---|---|---|---|
| 0-3s | shopper Image 10 · composition Image 1 · cat (named, in Image 1) | Opening shot, medium-wide, static drift | PASS |
| 3-6s | shopper Image 10 · composition Image 2 | Hard cut, OTS close, slow push | PASS |
| 6-9s | shopper Image 10 · composition Image 3 | Hard cut, Eyes in slow push | PASS |
| 9-11s | shopper Image 10 · composition Image 4 · cat (named) | Hard cut, medium, static | PASS |
| 11-13s | shopper Image 10 → studio | High flip, Video 2 | PASS |
| 13-16s | owner Image 9 · composition Image 5 · jar (named) | Lands from the High flip, small push | PASS |
| 16-19s | owner Image 9 · composition Image 6 · jar (named) | Hard cut, close-up, static | PASS |
| 19-22s | owner Image 9 · Scout's orb (named, in Image 7) · composition Image 7; voice Audio 3 | Hard cut, orb pops in, tiny push | PASS |
| 22-25s | product page, composition Image 8; no person; voice Audio 3 | Hard cut, insert, static | PASS |
| 25-30s | end screen Video 1 (picture); voice Audio 3 | Hard cut, end screen | PASS |

Keyframe images hold one job each (the keyframe composition); faces come only from Image 9 and Image 10; the cat, jar and orb are named in words and drawn in the keyframes.

### e) Asset limits
Images 10, videos 2 (9.50 s), audio 3 (21.00 s), total 15: all PASS.

**Pass 2: zero FAILs.**

Open risks (not checklist items): 1,389 words, past the official 30 s examples (no limit in the skill). Image 6 still shows a small smile before the resigned line (round-1 note; a re-shoot costs credits). Image 8 is 752x1338 against 752x1344.

## Pass 3 (after independent check 1, Nov 15)
Independent check 1 (fresh context) passed the prompt with zero checklist FAILs and gave 5 non-blocking fixes. All are applied, plus the two lessons from the sister cards' checks:
- 6-9s bracket: "slow push in on her face" is now "on the shopper's (Image 10) face"; the builder note ", in words" is removed.
- 22-25s bracket: "Insert over her shoulder" is now "Insert on the shopper's laptop screen", which matches "No person is on screen".
- Keyframe line: "moving naturally from one keyframe to the next" is now "cutting from one keyframe to the next as the Event Script says", which matches the hard cuts.
- Page #pe text: the old "I left out the first-frame sentence" note is replaced with the real reason the gate line stays (omni_reference job, keyframes as ordinary references, 4.5 s and 5 s videos against 30 s); word counts are updated; the Audio 3 row now says all three Scout lines. Annotated A is labelled "kept for comparison only, not sent".
- Item 11: every range now ends "At the end, …" (10 of 10 ranges; 11-13s included).
- Item 21: each shopper line says "in the voice of Audio 2" and each owner line "in the voice of Audio 1"; Scout already said Audio 3 (9 of 9 lines).

### Final Checklist (pass 3, 1,510 words)
1 PASS · 2 PASS (9 lines and every <sound> unchanged) · 3 PASS · 4 PASS · 5 PASS · 6 N/A · 7 PASS · 8 N/A · 9 PASS · 10 PASS · 11 PASS · 12 PASS · 13 N/A · 14 PASS · 15 N/A · 16 PASS · 17 PASS · 18-19 N/A · 20 PASS · 21 PASS · 22 PASS · 23 PASS · 24 PASS · 25 N/A · 26 PASS · 27 PASS. Principles 1-11: all PASS. Keyframe template: PASS. Shot table as in pass 2, with the 6-9s and 22-25s wording fixed. Asset limits unchanged. **Pass 3: zero FAILs.**

## Pass 4 (after independent check 2, Nov 15)
Check 2 verdict: PASS, with zero checklist FAILs. Applied: the cat is tagged "(as in Image 1)" at 0-3s and the jar "(as in Image 5)" at 13-16s; the Subjects line adds "its photo also appears on the shopper's product page (Images 2 and 8)"; the page's shot-list row 22-25s now reads "On her laptop screen, no person"; annotated A's Scout voice chip now points to Audio 3, matching prompt.txt; the public pages copy has been republished. Risks left for Emile: Image 6's smile and Image 4's cheerful shrug (a re-shoot is a paid still), and the opening ka-ching on the shopper's laptop (his Nov 14 rule, kept). Final Checklist re-run on the final file: all PASS or N/A. **Zero FAILs.**
