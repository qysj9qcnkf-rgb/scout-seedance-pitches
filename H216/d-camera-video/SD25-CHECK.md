# SD25-CHECK · H240 Render (from H227 D, camera moves) · cat-candle story · Nov 15 2026

Prompt checked: `prompt-sd25pe-final.txt` (996 words, 6 spoken lines, sha256 b4f4b5ed8457f1fa2d1e4993def75c55613d5785afc87b69a2df85e78c5ccb95). Asset list: `H240-assets.txt`.

**Round 2 (Emile, Nov 15 2:35 PM on H240, after take 1):** "I like the portion of the client. The portion of the owner is not good… there's an overlay of the thing. This is horrendous… that should be on the laptop… The shot is too long… [his first owner line, quoted exactly in the 15-17s prompt line]… 'Looks like no one's interested in Fig and Cedar.'… You see her clicking X, deleting it from the website, and blowing away the candles… a camera spinning around her… with the laptop as a center point." Applied: 0-15s lines byte-identical to take 1 (diffed). 15-25s rebuilt as five shots: 15-17s over her shoulder onto the laptop, the list (@Image7) only on the screen ("never as an overlay" in its role line); 17-20s slow orbit with the laptop as the centre, she sits still; 20-22s macro on her store admin (@Image9, new free GPT Image still, media 66bac8e5) as her cursor clicks the red X on Fig & Cedar; 22-23s she blows out the jar; 23-25s smoking wicks + Scout's line. Owner lines are his exact words, no "I guess". 25-30s keeps @Video1 (the real H158 end screen is laid in after the take, free). Goal now ends "discontinues the line on that wrong premise, deleting it from her website". Kept ≤1,000 words by tightening role lines to "use only …" form and cutting duplicates ("Scout is seen only in the end screen", the relationships duplicate of the goal, the studio dimming, "lifting into the end screen"). Previous cleared prompt: `prompt-sd25pe-final.take1.txt` (df8a11dd).

**H240 changes (Emile, Nov 15, on the cards):** (a) 2:10 PM on H240: "clearly explain to Seedance the idea: the customer is looking at a thing, she's not finding the thing that makes her buy, and the owner has the wrong reason and is discontinuing the line on the wrong premise." (b) 2:11 PM on H225, for every cat-candle ad: the Fig & Cedar candle must look clearly different (shape and colour) from the candles she already owns. Done the sd25-pe way, story facts only: 【Generation Goal】 now reads "A cat lady is about to buy the Fig & Cedar candle, but its product page never says whether it is safe for cats, all she needs to know, so she leaves without buying. The owner sees only the missing sales, wrongly concludes nobody wants Fig & Cedar, and, surprisingly, discontinues the line on that wrong premise, blowing out the candle." 【Subjects and Relationships】 adds "the shopper's own candles are only white pillars and tea lights, never amber jars; the amber Fig & Cedar jar appears only on her screen (@Image4) and in the studio" and "The shopper's unanswered question is the real reason for the low sales; the owner never learns it." The @Image3 role says "its lit white pillar candles and tea lights"; 0-3s says "white candles lit everywhere". @Image3 is now apartment-candles-v2 (free GPT Image edit; media f11fa295, inspected: same room, every candle a white/cream pillar or tea light in clear/white holders, no amber glass, no labels, no person, no cat, closed laptop on the stool, which the role line fences). No new dialogue, event, shot, asset or sound. To stay ≤1,000 words, exact duplicates were cut: the move description inside the @Video2 role line (13-15s still describes it), "the only non-cut transition" ("Hard cuts only, except the High flip" stays), "She sighs.", "The shopper's lips stay closed." and "Three voices only: …" (every spoken line still names its speaker, @Audio, on/off screen and lips closed), "the women are never in the same room" (each is "only in" her own room), "silent", "and smoke rises" (end state keeps it), the goal's "Scout's voice says not to guess" (23-25s keeps the line). Diff vs the approved H227 prompt (`prompt-sd25pe-final.pre-h240.txt`): {…} lines identical 5/5, @asset set identical, sound effects identical, gate line once.

Assets inspected (not guessed from names): 9 stills viewed (new @Image9: a store-admin Products page, dark sidebar, five rows with grey X buttons, the Fig & Cedar · 3-wick row pale red with a red X and a white arrow cursor on it, store name Ember & Fig, no platform logo); @Video2 contact sheet (throne → overhead → chair back sweeps → poker table; no audio track); @Video1 contact sheet (orb → Scout wordmark → "For Shopify owners"); all audio transcribed with Deepgram:
- @Audio1: "Oh my gosh. Okay. So we finally booked the beach house for July…" (timbre only)
- @Audio2: "Bright with notes of stone fruit. Do my buyers even talk like that?…" (timbre only)
- @Audio3: "Scout interviews your shoppers for you. Get free early access." (timbre only in 23-25s)
- @Video1 own audio: "Scout interviews your shoppers for you. Get free early access." (= the 25-30s line, so reproduced)

Task: video generation with references. Gate: @Video1 is 4.5 s and @Video2 is 5 s against a 30 s output, so "Please note that this is not video editing." goes right after the goal sentence (once).

## Final Checklist

| # | Item | Result | Proof line |
|---|------|--------|-----------|
| 1 | One primary task | PASS | Generation only: "Generate a warm live-action story ad." |
| 2 | Subjects, counts, scene, props, outcome unchanged | PASS | One shopper, one cat, one owner, one jar; "so she leaves without buying"; "discontinues the line on that wrong premise, deleting it from her website"; 22-23s she blows out the jar; end screen. Matches STORY.md lines 1-6 and Emile's H240 note. Cause shown before reaction: the page with nothing about pets (3-10s) comes before she leaves, the sales screen (15-21s) before the owner's line |
| 3 | Every required entity covered; no merge | PASS | Shopper @Image1, cat @Image2, apartment @Image3, product page @Image4, owner @Image5, studio @Image6, sales @Image7, jar @Image8, store admin @Image9, Scout @Video1 |
| 4 | Every used asset has one unique role | PASS | 14 role lines, one per asset; @Audio3 = timbre in 23-25s only; @Video1 = end screen in 25-30s only |
| 5 | User's existing references kept | PASS | Brief fixes "High flip (@Video2)"; kept as @Video2 |
| 6 | No claims about unread assets | PASS | All 14 inspected (above) |
| 7 | No forced assets; unused listed | PASS | Every upload has a role, so no 【Unused Assets】 block. Dropped clips (eyes-in, Dip pace, earth zoom) are off the upload list, not merely unused |
| 8 | Inaccessible assets not treated as understood | PASS | None inaccessible |
| 9 | Characters/props mapped one by one, no range | PASS | "The shopper maps to @Image1…", "The owner maps to @Image5…", "The Fig & Cedar jar maps to @Image8…" |
| 10 | No single-person image defines two people | PASS | Shopper face and cat are separate crops; room still @Image3 (v2) has no person or cat |
| 11 | Each stage one change + end state | PASS | Each of 10 ranges ends with "At the end, …" |
| 12 | User time ranges kept | PASS | 0-3 / 3-5 / 5-8 / 8-10 / 10-13 / 13-15 kept from take 1; 15-17 / 17-20 / 20-22 / 22-23 / 23-25 / 25-30 per the round-2 brief; continuous, integer |
| 13 | Editing rules | N/A | Not an editing task |
| 14 | Locked ratio/duration rules | PASS | No ratio, duration or resolution in the prompt (grep for 9:16/vertical/seconds = 0) |
| 15 | Extension rules | N/A | Not an extension |
| 16 | First/last frame statements | N/A | No keyframes |
| 17 | Multiple keyframes | N/A | None |
| 18 | Storyboard grid | N/A | None |
| 19 | Blockout | N/A | @Video2 is a camera-move reference, not a blockout |
| 20 | Emotion and camera terms observable | PASS | Annoyance shown as "jaw tightens, she exhales sharply and rubs her brow"; moves named as visible paths: "slow arc toward the shopper", "the camera slowly circles around the shopper's (@Image1) face", "slow push in on the shopper", "camera rises … looks straight down … sofa back sweeps across the frame … comes out level on the owner" |; round 2 adds "Over the owner's shoulder onto her laptop, slow push in", "slow orbit around the owner with her laptop as the centre" (she "sits still … staring at the laptop"), "Macro on her laptop screen, static" with "her cursor clicks the red X … the row disappears". Cause before reaction: the red Fig & Cedar row is on screen before the owner's first line (15-17s), and the deletion comes after both lines
| 21 | Speaker, state, words, audio, language, on/off screen per line | PASS | 5s-8s and 10-13s "The shopper (@Image1), in English, in the voice of @Audio1 (inner voice, …, lips closed)"; 15-17s "The owner (@Image5), in English, in the voice of @Audio2 (on camera, seen from behind, flat surprise)" and 17-20s "(on camera, lips moving, disappointed)"; 23-25s "Scout, in English, in the voice of @Audio3 (off screen …)"; 25-30s "in @Video1's own voice (off screen)". No accent added |
| 22 | Numbers stay identifiers | PASS | "3 (-84%)" is screen text; "180 degrees" is a flip, not a shot number |
| 23 | No parameters, analysis, keys, reasons | PASS | Prompt holds only the template sections |
| 24 | Gate line exactly once, only when triggered | PASS | Triggered by 4.5 s / 5 s refs vs 30 s; appears once, right after the goal sentence |
| 25 | Ref-video spec decision from real specs | PASS | ffprobe: @Video1 1080x1920 4.5 s with audio; @Video2 600x1066 5.0 s, no audio |
| 26 | No unrequested negative constraints | PASS | Each "no" is Emile's or a fence for a real leak: "No ka-ching, cart sound or chime." (STORY hard rules), "never amber jars" (Emile, Nov 15 2:11 PM: her candles must look unlike the Fig & Cedar jar), "do not use the closed laptop on the stool" (STORY), "No subtitles" (spoken lines must not be captioned) |
| 27 | Placeholders replaced; body only | PASS | No <placeholder> left; <soft whoosh>, <a soft breath>, <faint candle crackle> are sound effects |

## Non-Negotiable Principles 1-11

| # | Principle | Result | Proof line |
|---|-----------|--------|-----------|
| 1 | Intent first | PASS | Emile's 5 lines identical to STORY.md (diff of {…}: no difference); she never buys; Emile's H240 plot (she can't find the one thing that makes her buy; the owner discontinues on a wrong premise) is stated in the goal as story fact, not as dialogue; "Hard cuts only, except the High flip" |
| 2 | Template first | PASS | 【Generation Goal】【Reference Asset Roles】【Subjects and Relationships】【Event Script】【Sound and Text】【Maintain Consistency】 |
| 3 | Account for every asset | PASS | 14 uploads, 14 role lines, each saying what to use only |
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
| 15-17s | Lands from flip | — | — | @Image5 (from behind) | — | @Image6 | @Image7 (on her laptop only) | over the shoulder, slow push in (words) | @Audio2, on camera |
| 17-20s | Hard cut | — | — | @Image5 | @Image8 | @Image6 | (laptop, back) | slow orbit, laptop as centre (words) | @Audio2, on camera |
| 20-22s | Hard cut | — | — | @Image5 (cursor only) | — | — | @Image9 (on her laptop only) | static macro | — |
| 22-23s | Hard cut | — | — | @Image5 | @Image8 | @Image6 | — | static | — |
| 23-25s | Hard cut | — | — | — | @Image8 | @Image6 | — | slow push in (words) | @Audio3, off screen |
| 25-30s | Hard cut | — | — | — | — | — | — | @Video1 end screen | @Video1 own voice |

Notes: the shopper's laptop in 0-3s and 10-13s is described in words ("laptop open on her lap", "closes the site to an empty browser"); sd25-pe: generic environmental elements do not create an asset gap. The shopper's candles are white pillars and tea lights from @Image3 (v2), never amber jars, so the amber Fig & Cedar jar reads as new to her; room decor from @Image3; the only Fig & Cedar jar is @Image8.

## Limits

9 images, 2 videos (9.5 s), 3 audio (23.5 s), 14 uploads: within 30 / 10 & 30 s / 10 & 30 s. @Video2 is 639,600 px (above the 407,696 px minimum). Prompt 996 words (≤1,000).

Check 1 tightenings applied (no FAILs found): "the women are never in the same room" (the flip moves from one to the other in one shot, so "never share a frame" contradicted 13-15s); "Scout is seen only in the end screen" (his voice is heard at 23-25s); "never swap the women" cut (not asked for, P8); shelf jars fenced as "no shelf jar carries a Fig & Cedar label".

Check 2 fixes: @Image4 replaced by a cursor-free copy (pointer painted out locally, free upload 918984eb), so its "do not use the mouse cursor" fence is gone; 21-23s now "blows out the candle in the jar (@Image8)"; job-plan word count corrected.

**Result: zero FAILs.**
