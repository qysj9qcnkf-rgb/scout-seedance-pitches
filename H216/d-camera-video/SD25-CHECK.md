# SD25-CHECK · H240 Render (from H227 D, camera moves) · cat-candle story · Nov 15 2026

Prompt checked: `prompt-sd25pe-final.txt` (999 words, 5 spoken lines, sha256 89ed4dc9d2c870507e4ab237a97b5c46cc6f4732b6e308c85b2b3096b271a26b). Asset list: `H240-assets.txt`.

**H240 change (Emile, Nov 15 ~2:10 PM ET, on the card):** "clearly explain to Seedance the idea: the customer is looking at a thing, she's not finding the thing that makes her buy, and the owner has the wrong reason and is discontinuing the line on the wrong premise." Done the sd25-pe way (story contract → 【Generation Goal】 + 【Subjects and Relationships】, story facts only): the goal now reads "A cat lady wants the Fig & Cedar candle, but its product page never says whether it is safe for cats, the one thing she needs before buying, so she leaves without buying. The owner sees only the missing sales, wrongly concludes nobody wants Fig & Cedar, and discontinues the line on that wrong premise, blowing out the candle." Relationships adds "The shopper's unanswered question is the real reason for the low sales; the owner never learns it." No new dialogue, event, shot, asset or sound. To stay ≤1,000 words, exact duplicates were cut: the move description inside the @Video2 role line (the 13-15s shot still describes the visible move), "the only non-cut transition" (Maintain Consistency still says "Hard cuts only, except the High flip"), "She sighs.", "The shopper's lips stay closed." (each of her two lines still says "lips closed"), "and smoke rises" (the 21-23s end state still says smoke rises), plus four wording trims. Diff of {…} lines vs the approved H227 prompt: identical (5 of 5); @asset set identical; sound effects identical. Previous approved prompt: `prompt-sd25pe-final.pre-h240.txt`. Skill: sd25-pe SKILL.md read in full; self-update ran (exit 0). Story contract: `../shared-cat-candle/STORY.md` (Emile, Nov 15 1:00 PM ET).

Assets inspected (not guessed from names): 8 stills viewed on a contact sheet; @Video2 contact sheet (throne → overhead → chair back sweeps → poker table; no audio track); @Video1 contact sheet (orb → Scout wordmark → "For Shopify owners"); all audio transcribed with Deepgram:
- @Audio1: "Oh my gosh. Okay. So we finally booked the beach house for July…" (timbre only)
- @Audio2: "Bright with notes of stone fruit. Do my buyers even talk like that?…" (timbre only)
- @Audio3: "Scout interviews your shoppers for you. Get free early access." (timbre only in 23-25s)
- @Video1 own audio: "Scout interviews your shoppers for you. Get free early access." (= the 25-30s line, so reproduced)

Task: video generation with references. Gate: @Video1 is 4.5 s and @Video2 is 5 s against a 30 s output, so "Please note that this is not video editing." goes right after the goal sentence (once).

## Final Checklist

| # | Item | Result | Proof line |
|---|------|--------|-----------|
| 1 | One primary task | PASS | Generation only: "Generate a warm live-action story ad." |
| 2 | Subjects, counts, scene, props, outcome unchanged | PASS | One shopper, one cat, one owner, one jar; "so she leaves without buying"; "discontinues the line on that wrong premise, blowing out the candle"; end screen. Matches STORY.md lines 1-6 and Emile's H240 note. Cause shown before reaction: the page with nothing about pets (3-10s) comes before she leaves, the sales screen (15-21s) before the owner's line |
| 3 | Every required entity covered; no merge | PASS | Shopper @Image1, cat @Image2, apartment @Image3, product page @Image4, owner @Image5, studio @Image6, sales @Image7, jar @Image8, Scout @Video1 |
| 4 | Every used asset has one unique role | PASS | 13 role lines, one per asset; @Audio3 = timbre in 23-25s only; @Video1 = end screen in 25-30s only |
| 5 | User's existing references kept | PASS | Brief fixes "High flip (@Video2)"; kept as @Video2 |
| 6 | No claims about unread assets | PASS | All 13 inspected (above) |
| 7 | No forced assets; unused listed | PASS | Every upload has a role, so no 【Unused Assets】 block. Dropped clips (eyes-in, Dip pace, earth zoom) are off the upload list, not merely unused |
| 8 | Inaccessible assets not treated as understood | PASS | None inaccessible |
| 9 | Characters/props mapped one by one, no range | PASS | "The shopper maps to @Image1…", "The owner maps to @Image5…", "The Fig & Cedar jar maps to @Image8…" |
| 10 | No single-person image defines two people | PASS | Shopper face and cat are separate crops; room still @Image3 has no person or cat |
| 11 | Each stage one change + end state | PASS | Each of 10 ranges ends with "At the end, …" |
| 12 | User time ranges kept | PASS | STORY's 0-3 / 3-5 / 5-8 / 8-10 / 10-13 / 13-15 / 15-21 / 21-23 / 23-25 / 25-30 kept; continuous, integer |
| 13 | Editing rules | N/A | Not an editing task |
| 14 | Locked ratio/duration rules | PASS | No ratio, duration or resolution in the prompt (grep for 9:16/vertical/seconds = 0) |
| 15 | Extension rules | N/A | Not an extension |
| 16 | First/last frame statements | N/A | No keyframes |
| 17 | Multiple keyframes | N/A | None |
| 18 | Storyboard grid | N/A | None |
| 19 | Blockout | N/A | @Video2 is a camera-move reference, not a blockout |
| 20 | Emotion and camera terms observable | PASS | Annoyance shown as "jaw tightens, she exhales sharply and rubs her brow"; moves named as visible paths: "slow arc toward the shopper", "the camera slowly circles around the shopper's (@Image1) face", "slow push in on the shopper", "camera rises … looks straight down … sofa back sweeps across the frame … comes out level on the owner" |
| 21 | Speaker, state, words, audio, language, on/off screen per line | PASS | 5s-8s and 10-13s "The shopper (@Image1), in English, in the voice of @Audio1 (inner voice, …, lips closed)"; 15-21s "The owner (@Image5), in English, in the voice of @Audio2 (on camera, lips moving …)"; 23-25s "Scout, in English, in the voice of @Audio3 (off screen …)"; 25-30s "in @Video1's own voice (off screen)". No accent added |
| 22 | Numbers stay identifiers | PASS | "3 (-84%)" is screen text; "180 degrees" is a flip, not a shot number |
| 23 | No parameters, analysis, keys, reasons | PASS | Prompt holds only the template sections |
| 24 | Gate line exactly once, only when triggered | PASS | Triggered by 4.5 s / 5 s refs vs 30 s; appears once, right after the goal sentence |
| 25 | Ref-video spec decision from real specs | PASS | ffprobe: @Video1 1080x1920 4.5 s with audio; @Video2 600x1066 5.0 s, no audio |
| 26 | No unrequested negative constraints | PASS | Each "no" is Emile's or a fence for a real leak: "No ka-ching, cart sound or chime." (STORY hard rules), "do not use the closed laptop on the stool" (STORY), "No subtitles" (spoken lines must not be captioned) |
| 27 | Placeholders replaced; body only | PASS | No <placeholder> left; <soft whoosh>, <a soft breath>, <faint candle crackle> are sound effects |

## Non-Negotiable Principles 1-11

| # | Principle | Result | Proof line |
|---|-----------|--------|-----------|
| 1 | Intent first | PASS | Emile's 5 lines identical to STORY.md (diff of {…}: no difference); she never buys; Emile's H240 plot (she can't find the one thing that makes her buy; the owner discontinues on a wrong premise) is stated in the goal as story fact, not as dialogue; "Hard cuts only, except the High flip" |
| 2 | Template first | PASS | 【Generation Goal】【Reference Asset Roles】【Subjects and Relationships】【Event Script】【Sound and Text】【Maintain Consistency】 |
| 3 | Account for every asset | PASS | 13 uploads, 13 role lines, each with what not to take |
| 4 | User mapping first | PASS | @Video2 = High flip as the brief names it; room = apartment-candles still per STORY |
| 5 | Minimal clarification | PASS | No questions needed |
| 6 | Submission-ready content only | PASS | No notes, versions or reasons in the prompt |
| 7 | Separate parameters | PASS | 9:16, 30 s, 480p live in job-plan.json only |
| 8 | No unrequested constraints | PASS | See checklist 26 |
| 9 | One best version | PASS | One prompt to send; prompt.txt is ours, kept for comparison only |
| 10 | Facts vs observations | PASS | "cat lady", her not buying, the unanswered cat-safety question as the real reason and the owner's wrong premise all come from Emile's text (Nov 15 1:00 PM story + H240 note); looks come from stills |
| 11 | Subject cardinality | PASS | One image per person (@Image1 shopper, @Image5 owner), one for the cat (@Image2) |

## Which ONE @asset defines each person and object, per shot

| Time | Transition | Shopper | Cat | Owner | Jar | Room | Screen | Move | Voice |
|------|-----------|---------|-----|-------|-----|------|--------|------|-------|
| 0-3s | Opening shot | @Image1 | @Image2 | — | — | @Image3 | (glow only) | slow arc toward her (words) | — |
| 3-5s | Hard cut | @Image1 (fingers) | — | — | — | @Image3 | @Image4 | static, over her shoulder | — |
| 5-8s | Hard cut | @Image1 | @Image2 | — | — | @Image3 | — | circles her face (words) | @Audio1, inner |
| 8-10s | Hard cut | @Image1 | — | — | — | @Image3 | @Image4 | slow push in (words) | — |
| 10-13s | Hard cut | @Image1 | @Image2 | — | — | @Image3 | (empty browser) | static | @Audio1, inner |
| 13-15s | High flip (@Video2) | @Image1 | — | @Image5 | — | @Image3 → @Image6 | — | @Video2 | — |
| 15-21s | Lands from flip | — | — | @Image5 | @Image8 | @Image6 | @Image7 | slow push in (words) | @Audio2, on camera |
| 21-23s | Hard cut | — | — | @Image5 | @Image8 | @Image6 | — | static | — |
| 23-25s | Hard cut | — | — | — | @Image8 | @Image6 | — | slow push in (words) | @Audio3, off screen |
| 25-30s | Hard cut | — | — | — | — | — | — | @Video1 end screen | @Video1 own voice |

Notes: the shopper's laptop in 0-3s and 10-13s is described in words ("laptop open on her lap", "closes the site to an empty browser"); sd25-pe: generic environmental elements do not create an asset gap. The shopper's candles are generic room decor from @Image3; the only Fig & Cedar jar is @Image8.

## Limits

8 images, 2 videos (9.5 s), 3 audio (23.5 s): within 30 / 10 & 30 s / 10 & 30 s. @Video2 is 639,600 px (above the 407,696 px minimum). Prompt 999 words (≤1,000).

Check 1 tightenings applied (no FAILs found): "the women are never in the same room" (the flip moves from one to the other in one shot, so "never share a frame" contradicted 13-15s); "Scout is seen only in the end screen" (his voice is heard at 23-25s); "never swap the women" cut (not asked for, P8); shelf jars fenced as "no shelf jar carries a Fig & Cedar label".

Check 2 fixes: @Image4 replaced by a cursor-free copy (pointer painted out locally, free upload 918984eb), so its "do not use the mouse cursor" fence is gone; 21-23s now "blows out the candle in the jar (@Image8)"; job-plan word count corrected.

**Result: zero FAILs.**
