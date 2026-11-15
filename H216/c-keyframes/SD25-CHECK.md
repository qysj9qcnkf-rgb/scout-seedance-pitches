# SD25-CHECK · H226 · C keyframes · cat-candle story (Nov 15, 2026)

Checks `prompt-sd25pe-final.txt` (976 words by `wc -w`, under the 1,000-word cap) against the whole sd25-pe SKILL.md (`/Users/emilechouha/ClaudeCowork/marketer/.claude/skills/sd25-pe/SKILL.md`, loaded with the Skill tool this session; its `npx … update sd25-pe -y` self-update ran and reported "No installed skills found matching", so the local copy was used).
Spec: `../shared-cat-candle/STORY.md` (Emile's H228 comment, Nov 15 18:00 UTC). Our draft before the compile: `prompt.txt`.
Previous round kept as `SD25-CHECK.pre-catstory.md`, `prompt-sd25pe-final.pre-catstory.txt`, `a.pre-catstory/`.

## Task routing and the gate line (decided by the skill text)
- Primary task: **video generation** with reference assets (Primary task list, §6). Keyframes, two reference videos and three audio refs are "composable modules, not additional primary tasks".
- The 8 keyframes go in as **ordinary reference images** ("Keyframe images are still provided as ordinary reference images", Keyframe Anchors). The job (`job-plan.json`) is a multi-reference job with ratio 9:16 and duration 30 s set as parameters, not the API's first-frame mode where "the first image's aspect ratio locks the output ratio". So the first-frame / first-and-last-frame exclusion of the gate does not apply, while the keyframe template's own sentence `Use @Image1 as the first frame.` is still required and present.
- Gate: @Video1 is 4.50 s and @Video2 is 5.00 s against a 30 s output, a duration difference far above 0.3 s ("If the target duration differs from the reference video by more than approximately 0.3 seconds, do not classify the task as video editing … handle other duration changes as regular video generation"). The conflict is confirmed, so the prompt carries exactly one `Please note that this is not video editing.`, placed "immediately after the goal sentence under 【Generation Goal】, without starting a new paragraph". Same ruling as this card's Nov 15 round that Codex passed.

## Asset inventory (every file inspected, every audio transcribed with Deepgram)
| Ref | File | Media id | What it is | Role in the prompt |
|---|---|---|---|---|
| @Image1 | a/image1-kf1-wide.jpg | c697ff6f | wide: candle-filled apartment, shopper on sofa, laptop on lap, cat beside her | first frame (0-3s) |
| @Image2 | a/image2-kf2-ots.jpg | d438ef78 | over her shoulder: Fig & Cedar page, fingers on trackpad, **no cursor** | keyframe 2 (3-5s) |
| @Image3 | a/image3-kf3-face.jpg | fe2a7a8c | close-up, lips closed, screen glow, cat soft behind | keyframe 3 (5-8s) |
| @Image4 | a/image4-kf4-annoyed.jpg | 2b9f194e | medium close-up, rubbing brow, jaw tight | keyframe 4 (8-10s) |
| @Image5 | a/image5-kf5-closed.jpg | aad0bb02 | leaning back, blank browser, cat on the cushion | keyframe 5 (10-13s) |
| @Image6 | a/image6-kf6-owner.jpg | 56cc5bd1 | owner at desk, units sold, Fig & Cedar 3 / −84% in red, lit 3-wick jar | keyframe 6 (15-21s) |
| @Image7 | a/image7-kf7-blow.jpg | bf1210ad | owner blowing out the jar | keyframe 7 (21-23s) |
| @Image8 | a/image8-kf8-smoke.jpg | 5ab451e5 | macro, three smoking wicks, dim studio, no person | keyframe 8 (23-25s) |
| @Image9 | a/image9-owner-face.jpg | 1963a66d | owner face, auburn side braid | owner face only |
| @Image10 | a/image10-shopper-face.jpg | 1db5a36d | shopper face, dark bob, open mouth | shopper face only, "not its open mouth" |
| @Image11 | a/image11-cat.jpg | 5d1a06f3 | grey tabby on a sofa | cat only, "not its background" |
| @Image12 | a/image12-fig-cedar-jar.jpg | b8de2f05 | 3-wick amber jar, blank kraft label, fig leaf | jar only, "not its background or the fig leaf" |
| @Video1 | a/video1-end.mp4 | cae62718 | H158 end screen, 4.50 s, 1080x1920; its voice says "Scout interviews your shoppers for you. Get free early access." | end-screen picture only, "do not use its sound" |
| @Video2 | a/video2-flip-move.mp4 | 969c55f0 | High flip, 5.00 s, 600x1066 (639,600 px, above the 407,696 floor), no audio track; a curly-haired person in cream on a throne, then a different man at a poker table with cards, drinks and bread | camera move only, "not its people, chair, table, cards, food, room, colours or sound" |
| @Audio1 | a/audio1-owner-alexandra-9s.mp3 | c2ed3b9e | 9.2 s, bright, says "Right. With notes of stone fruit. Do my buyers even talk like that? …" (old words) | owner timbre and pace, "do not use its words or its bright mood" |
| @Audio2 | a/audio2-shopper-serene-7s.mp3 | 2049a920 | 7.3 s, excited, says "Oh my gosh. Okay. So we finally booked the beach house for July…" (old words) | shopper inner-voice timbre and pace, "do not use its words or its excited mood" |
| @Audio3 | a/audio3-scout-voice-4s.mp3 | 1040c108 | 4.5 s, says "Scout interviews your shoppers for you. Get free early access." | Scout timbre, "do not use its words" (the prompt's words win) |

Totals: 12 images, 2 videos (9.5 s), 3 audio (21.0 s), 17 refs: inside every hard limit (30 / 10 videos ≤30 s / 10 audio ≤30 s / 50).
Not in the job: `shared-cat-candle/apartment-candles.jpg` (its room is carried by keyframes 1-5, so it would be a second asset for the same slot, Principle 4) and the old keyframes and orb still (old story). Every uploaded ref has a role, so no `【Unused Assets】` block is needed.
All 8 keyframes are 941x1672 (9:16); there is no last-frame image, so the first/last ratio pair is N/A.

## Dialogue ledger and diff against STORY.md
| Time | Speaker | Speaks? | Exact words | Audio | Language | On/off screen |
|---|---|---|---|---|---|---|
| 5-8s | shopper | inner voice, lips closed | {Are these safe for cats?} | @Audio2 | English | thought, off screen |
| 10-13s | shopper | inner voice, lips closed | {I guess we'll never know.} | @Audio2 | English | thought, off screen |
| 15-21s | owner | yes, lips moving | {I guess no one's interested in Fig and Cedar. No one wants this. Time to discontinue the product line.} | @Audio1 | English | on screen |
| 23-25s | Scout | yes | {Don't guess why your shoppers don't buy.} | @Audio3 | English | off screen |
| 25-30s | Scout | yes | {Scout interviews your shoppers for you. Get free early access.} | @Audio3 | English | off screen |

`grep -o '{[^}]*}'` on the prompt vs STORY.md: the 5 lines are byte-identical (`diff` clean). No accent added. Silent shots (0-3, 3-5, 8-10, 13-15, 21-23) carry no line.

## a) Final Checklist
| # | Item | Result | Proof |
|---|---|---|---|
| 1 | One primary task | PASS | Generation only; "Please note that this is not video editing." |
| 2 | Subjects, counts, identities, scene, prop ownership, outcome unchanged | PASS | "One shopper (@Image10) and her cat (@Image11) … One owner (@Image9) … the one Fig & Cedar jar (@Image12) … Nothing is bought." Story beats 1-6 of STORY.md all present |
| 3 | Every required entity covered, none merged | PASS | shopper, cat, owner, jar, apartment (@Image1-5), studio (@Image6-8), end screen (@Video1), Scout voice (@Audio3) |
| 4 | Every used asset has one explicit role | PASS | 17 role lines, one per ref (see inventory); faces "used only for … facial features" |
| 5 | References not renumbered/invented | PASS | @Image1-12, @Video1-2, @Audio1-3 match `job-plan.json` order |
| 6 | Missing assets not claimed | N/A | all refs readable and inspected |
| 7 | Irrelevant assets not forced; unused listed | PASS | room still and old keyframes left out of the job; no unused uploads, so no 【Unused Assets】 |
| 8 | Inaccessible assets not treated as understood | N/A | none inaccessible |
| 9 | Characters/props mapped individually | PASS | four separate lines for @Image9, @Image10, @Image11, @Image12 |
| 10 | No single-character image defines two characters | PASS | @Image9 owner only, @Image10 shopper only |
| 11 | One state change per stage + end state | PASS | every range ends with "At the end, …" (e.g. "At the end, no flame is lit.") |
| 12 | User time ranges kept | PASS | 0-3, 3-5, 5-8, 8-10, 10-13, 13-15, 15-21, 21-23, 23-25, 25-30 = STORY.md shot list, continuous |
| 13 | Editing fields | N/A | not editing |
| 14 | Locked ratio/duration rules | PASS | no ratio or duration in the prompt; set in `job-plan.json` |
| 15 | Extension fields | N/A | not extension |
| 16 | First frame standalone sentence | PASS | "Use @Image1 as the first frame." on its own line, then "This first frame defines the shopper's candle-filled living room at night, wide: …" |
| 17 | Keyframes in order, no static hold | PASS | "Use @Image1 to @Image8 in order as keyframes." · "@Image2 defines the second keyframe: …" through @Image8 · "The film passes through @Image1 to @Image8 in order, with no static hold." |
| 18 | Storyboard grid | N/A | none |
| 19 | Blockout | N/A | @Video2 is a camera-move reference, not a blockout |
| 20 | Emotion/camera as observable results | PASS | "the camera slowly circles around her face"; "her jaw tightens, a sharp exhale through her nose, she rubs her brow, silent"; High flip spelled out ("rises over … looks straight down … back of the sofa sweeps across the frame … comes out level on the owner") |
| 21 | Speaker, state, words, audio, language per line; no accent | PASS | ledger above; each line "… in the voice of @AudioN, …, in English:"; no "American" |
| 22 | Numbers stay identifiers | PASS | no shot number read as an angle |
| 23 | No params, analysis, keys, reasons | PASS | prompt body only |
| 24 | Gate line once, only when triggered | PASS | once, right after the goal sentence; fires on 4.50 s / 5.00 s refs vs 30 s (see routing) |
| 25 | Unreadable ref specs | N/A | specs read with ffprobe |
| 26 | No unrequested negative constraint | PASS | "No ka-ching, no notification, no cart" is Emile's rule (STORY.md Hard rules); "No subtitles appear on screen" is the skill's own instruction. Check 1 fix: the three sound effects our draft added (trackpad click, whoosh, breath) are removed, since the story names none and a click fights "she never clicks". The soft piano bed stays from this card's earlier approved rounds |
| 27 | Placeholders replaced, one body, no fences | PASS | file is the bare prompt |

## b) Non-Negotiable Principles 1-11
| # | Principle | Result | Proof |
|---|---|---|---|
| 1 | Intent First | PASS | no ka-ching/cart, she never buys, lips closed, annoyance shown only, High flip as the one non-cut transition, owner blows out the candle, Scout end voice + end screen |
| 2 | Template First | PASS | Generation-with-references sections + "Controlling the Order of Multiple Keyframes" lines |
| 3 | Account for Every Asset | PASS | 17/17 refs carry a role; none unused |
| 4 | User Mapping First | PASS | STORY.md mapping kept: face crops for faces, cat crop for the cat, flip clip move only, end screen picture; room still not added on top of the keyframes |
| 5 | Minimal Clarification | PASS | no question needed |
| 6 | Submission-Ready Only | PASS | no notes in the prompt |
| 7 | Separate Parameters | PASS | no 9:16 / 30 s / 480p in the text |
| 8 | No Unrequested Constraints | PASS | only Emile's no-ka-ching rule, the voice count and no-subtitles |
| 9 | One Best Version | PASS | one prompt |
| 10 | Facts vs Observations | PASS | identities from STORY.md; looks from the images only ("auburn side braid", "dark bob with bangs") |
| 11 | Subject Cardinality | PASS | one single-person image per woman; the cat and jar have their own images |

## c) Per-shot: which ONE @asset defines each person and object
| Shot | Transition / move (as named on the page) | Shopper | Owner | Cat | Jar | Composition | Voice |
|---|---|---|---|---|---|---|---|
| 0-3s | Opening shot, wide, slow arc toward her | @Image10 | — | @Image11 | — (her candles are plain) | @Image1 | — |
| 3-5s | Hard cut, over her shoulder, static | @Image10 | — | — | jar photo on the page, part of @Image2's screen | @Image2 | — |
| 5-8s | Hard cut, close-up, camera slowly circles her face | @Image10 | — | @Image11 | — | @Image3 | @Audio2 |
| 8-10s | Hard cut, medium close-up, static | @Image10 | — | — | — | @Image4 | — |
| 10-13s | Hard cut, medium, static | @Image10 | — | @Image11 | — | @Image5 | @Audio2 |
| 13-15s | High flip (only non-cut transition) | @Image10 | @Image9 | — | — | move from @Video2 | — |
| 15-21s | Lands from the High flip, medium, small push in | — | @Image9 | — | @Image12 | @Image6 | @Audio1 |
| 21-23s | Hard cut, close-up, static | — | @Image9 | — | @Image12 | @Image7 | — |
| 23-25s | Hard cut, macro, static | — (no person) | — | — | @Image12 | @Image8 | @Audio3 |
| 25-30s | Hard cut, end screen | — | — | — | — | @Video1 picture | @Audio3 |

Every person in every shot is named with exactly one face asset; furniture, room decor and her generic candles are scene elements carried by the keyframes ("Generic background guests, furniture, decor, or environmental elements do not create an asset gap").

## Result
Zero FAILs. Spend: 0 credits (8 keyframes made free with GPT Image through Codex, 10 free uploads confirmed).

Check 2 fix (Principle 1): 10-13s had the cat "on her lap"; @Image5 and STORY.md have it curled beside her. Now "looks down at the cat (@Image11) curled beside her, her hand resting on it", plus "her face flat and tired" so @Image5's soft smile does not carry into a resigned line.

Open risks (not checklist items):
- The shelf jars behind the owner in @Image6-8 are amber kraft-label jars like @Image12, several lit. The prompt calls them other scents; a free redraw of keyframes 6-8 with different shelf stock would remove the doubt.
- The cat moves between shots (beside her in @Image1/@Image5, on the far sofa in @Image2, crossing the floor in @Image4); hard cuts carry it.
- The piano bed and "Generate dialogue strictly as written" are not in STORY.md; both carried over from this card's earlier passed rounds.
- Scout's 23-25s line is 7 words in 2 s (3.5 words/s, above our ≤3/s pace habit); it may spill a little into the end screen. Timing is from STORY.md.
- Keyframe 4 shows the cat walking behind her and keyframe 5 shows it on the cushion; both are the same cat (@Image11).
- The keyframe screens show a store name ("Ember & Fig") and a Shopify-style admin; both invented, no client named.
