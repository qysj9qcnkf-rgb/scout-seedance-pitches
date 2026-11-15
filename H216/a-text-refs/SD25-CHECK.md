# SD25-CHECK · H224 · Cat-candle A: text + reference images · Emile's Nov 15 story

Checked Nov 15 2026 against `~/ClaudeCowork/marketer/.claude/skills/sd25-pe/SKILL.md` (read in full; Skill tool `sd25-pe` loaded, self-update ran). Prompt checked: `prompt-sd25pe-final.txt` (994 words). Story source: `../shared-cat-candle/STORY.md` (Emile's H228 comment, Nov 15 1:00 PM ET). Task: video generation with reference assets (no keyframes, no storyboard, no editing, no extension). Job settings in job.json, not in the prompt: seedance_2_5, omni_reference, 30 s, 9:16, draft 480p. Earlier rounds' checks: `SD25-CHECK.pre-catstory.md`.

## Assets inspected (upload order = first appearance)

| Ref | File | Probe | What is in it | Role in the prompt |
|---|---|---|---|---|
| @Image1 | a/image8-shopper-face.jpg | 488x680 | Woman, dark bob with bangs, cream knit cardigan; dim sofa behind | Shopper's face, hair, cardigan; "do not use the background" |
| @Image2 | a/image9-cat.jpg | 436x630 | Grey tabby cat on a beige sofa, a sleeve at the right edge | The cat only; "do not use the sofa or the sleeve" |
| @Image3 | a/image3-apartment-candles.jpg (media 8dcc4d3e) | 941x1672 | Night living room, no person, no cat: sofa with cream throw, pleated lamp, monstera, bookshelf, ~30 lit candles, cat bed + scratching post, CLOSED laptop on a stool | Shopper's apartment, room only; "do not use the closed laptop on the stool" |
| @Image4 | a/image2-product-page.jpg | 1600x1000 | Ember & Fig store, "Fig & Cedar" $38.00, no pet info, mouse cursor resting on Add to cart | Her laptop screen only; "do not use the mouse cursor" |
| @Image5 | a/image3-owner-actress14.jpg | 1024x1365 | Owner face, auburn side braid, rust sweater, hand on cheek; brick and a roaster behind | Owner's face, braid, sweater; "do not use her pose or background" |
| @Image6 | a/image4-owner-studio.jpg | 752x1344 | Empty studio: shelves of amber stock jars, brick, wooden desk, dark laptop, one lit three-wick jar, kraft mailers | Owner's studio; "do not use its dark laptop screen or the lit jar on the desk" |
| @Image7 | a/image5-owner-sales.jpg | 1600x1000 | Shopify "Products · units sold": Fig & Cedar 3, -84%, red outline | Her laptop screen only |
| @Image8 | a/image6-fig-cedar-jar.jpg | 768x768 | Wide amber jar, blank kraft label, three wicks, fig leaves, linen | The one Fig & Cedar jar; "do not use the leaves or cloth" |
| @Video1 | a/video1-end-screen.mp4 | 1080x1920, 4.50 s, audio | H158 end screen; its voice (Deepgram): "Scout interviews your shoppers for you. Get free early access." | Picture only, only in 25-30s; "do not use its sound" |
| @Audio1 | a/audio1-shopper-voice-9s.mp3 | 9.30 s | Female voice, upbeat; words (Deepgram): "Oh my gosh. Okay. So we finally booked the beach house for July…" | Shopper timbre only; "do not use its words or its upbeat energy" |
| @Audio2 | a/audio2-owner-voice-9s.mp3 | 9.25 s | Warm female voice; words: "Right. With notes of stone fruit. Do my buyers even talk like that?…" | Owner timbre only; "do not use its words" |
| @Audio3 | a/audio3-scout-voice-4s.mp3 | 4.50 s | Scout's voice; words: "Scout interviews your shoppers for you. Get free early access." | Scout timbre only; "the words come only from the lines below" |

Totals: 8 images, 1 video (4.5 s), 3 audio (23.05 s), 12 assets: inside every hard limit (30 images, 10 videos / 30 s, 10 audio / 30 s, 50 total). Dropped from the upload list: the Scout orb image (old @Image9, media 5aaa2bca) and the old living-room still (media 7afee04b). Nothing uploaded is left without a role, so no 【Unused Assets】 block is needed (skill: list only assets "available but has no assigned role"). Spend: 0 credits; every media ID was already uploaded and confirmed.

## Spoken lines diffed against STORY.md

`diff <(grep -o '{[^}]*}' prompt-sd25pe-final.txt) <(grep -o '{[A-Z][^}]*}' ../shared-cat-candle/STORY.md | head -5)` → no difference. The five lines, in order: {Are these safe for cats?} · {I guess we'll never know.} · {I guess no one's interested in Fig and Cedar. No one wants this. Time to discontinue the product line.} · {Don't guess why your shoppers don't buy.} · {Scout interviews your shoppers for you. Get free early access.}

## a) Final Checklist

| # | Item | Verdict | Proof line |
|---|---|---|---|
| 1 | One primary task | PASS | "Generate a warm live-action story film in close framing." Generation only. |
| 2 | Subjects, counts, scene, ownership, outcome unchanged | PASS | Shopper does not buy ("The shopper never clicks Add to cart."), owner discontinues and blows out the candle, Scout ends it: STORY.md lines 1-6. |
| 3 | Every required entity covered, no merge | PASS | Shopper @Image1, cat @Image2, apartment @Image3, product page @Image4, owner @Image5, studio @Image6, sales screen @Image7, jar @Image8, end screen @Video1, three voices @Audio1-3. |
| 4 | Every used asset has one unique role | PASS | One line per asset in 【Reference Asset Roles】; face and cat are separate crops; @Video1 picture only, Scout's voice from @Audio3 only. |
| 5 | Existing references unchanged, none invented | PASS | prompt.txt and the compile use the same @Image1-8, @Video1, @Audio1-3. |
| 6 | Missing assets not claimed | N/A | All 12 assets read (table above). |
| 7 | Unused assets listed | PASS | All 12 uploads have a role; the orb image was removed from the upload list (job.json "dropped"). |
| 8 | Inaccessible assets not treated as understood | N/A | None inaccessible. |
| 9 | Individual mapping, no range statement | PASS | "The shopper maps to @Image1…", "The grey tabby cat maps to @Image2…", one subject per line. |
| 10 | Single-character image not defining two characters | PASS | @Image1 = shopper only, @Image5 = owner only; the cat has its own @Image2. |
| 11 | Each stage one state change + end state | PASS | All 10 ranges end with "At the end, …" (e.g. 13-15s "At the end, the camera is level on the owner."). |
| 12 | User time ranges kept | PASS | 0-3, 3-5, 5-8, 8-10, 10-13, 13-15, 15-21, 21-23, 23-25, 25-30: STORY.md shot list, continuous, whole seconds. |
| 13 | Editing fields | N/A | Not an edit. |
| 14 | Locked ratio/duration rules | PASS | No ratio, duration, resolution in the prompt (grep "9:16", "30 s", "480p", "vertical": none). |
| 15 | Extension | N/A | Not an extension. |
| 16 | First/last frame statements | N/A | No fixed frame. |
| 17 | Multiple keyframes | N/A | None. |
| 18 | Storyboard grid | N/A | None. |
| 19 | Blockout | N/A | None. |
| 20 | Abstract emotion/camera made observable | PASS | Annoyed shown as "her jaw tightens, she exhales sharply through her nose and rubs her brow, silent"; circle move "the camera slowly circles the shopper's (@Image1) face … At the end, the camera has circled to her other side"; High flip "rises over the shopper (@Image1) until it looks straight down, the back of the sofa sweeps across the frame as the view flips 180 degrees, and it comes out level on the owner (@Image5)". |
| 21 | Every speaking stage: speaker, state, words, audio, language, on/off screen | PASS | "The shopper (@Image1), in English, in the voice of @Audio1 (inner voice, close-mic, wondering, lips closed)"; "The owner (@Image5), in English, in the voice of @Audio2 (on camera, lips moving, disappointed)"; "Scout, in English, in the voice of @Audio3 (off screen, calm, warm)". No accent added. |
| 22 | Numbers stay identifiers | PASS | "180 degrees" is the flip's rotation, written by the story, not a misread shot number. |
| 23 | No parameters, analysis, metadata | PASS | Prompt body has none; card, round, credits only in job.json. |
| 24 | "Please note that this is not video editing." once, only if the gate fires | PASS | Fires: @Video1 is 4.50 s, output 30 s (> 0.3 s apart). Once, right after the goal sentence in 【Generation Goal】, same paragraph. |
| 25 | Unreadable video specs | N/A | ffprobe read 1080x1920, 4.50 s. |
| 26 | No unrequested negatives | PASS | Only Emile's own rules ("No cart notification and no purchase sound", one jar, never clicks Add to cart), per-asset exclusions and "No subtitles appear on screen." (skill's own advice). |
| 27 | Placeholders replaced, one prompt body | PASS | One body; no <placeholder> left; `<whoosh>` and `<a soft puff of breath>` are sound effects, no names in angle brackets. |

## b) Non-Negotiable Principles

| # | Principle | Verdict | Proof line |
|---|---|---|---|
| 1 | Intent First | PASS | Same people, one jar, same causality (no answer → leaves → wrong guess → candle out → Scout), Emile's words untouched (diff above). |
| 2 | Template First | PASS | Generation-with-references template: 【Generation Goal】, 【Reference Asset Roles】, 【Subjects and Relationships】, 【Event Script】, 【Maintain Consistency】. |
| 3 | Account for Every Asset | PASS | 12 role lines for 12 uploads; nothing unassigned. |
| 4 | User Mapping First | PASS | Mapping follows the brief: new room = apartment-candles, face and cat as their own crops. |
| 5 | Minimal Clarification | PASS | No open question; everything resolved from STORY.md. |
| 6 | Submission-Ready Content Only | PASS | No notes, versions, IDs or reasons in the prompt. |
| 7 | Separate Parameters | PASS | Ratio/duration/resolution only in job.json. |
| 8 | No Unrequested Constraints | PASS | No quality packs or watermark lines; the gate line is the routing declaration the skill allows. |
| 9 | One Best Version | PASS | One prompt body. |
| 10 | Facts vs Observations | PASS | "cat lady", her not buying, the owner's wrong guess come from Emile's text; hair, sweaters, room contents from the images. |
| 11 | Subject Cardinality | PASS | One image per person: shopper @Image1, owner @Image5; cat @Image2 separate; no image defines two on-screen subjects. |

## c) Per shot: which ONE @asset defines each person (and thing on screen)

| Shot | Time | Transition (as written) | Shopper | Cat | Owner | Room | Screen / prop | Voice |
|---|---|---|---|---|---|---|---|---|
| 1 | 0-3s | Opening shot | @Image1 | @Image2 | — | @Image3 | her laptop (words; "do not use the closed laptop") | — |
| 2 | 3-5s | Hard cut | @Image1 (fingers) | — | — | — | @Image4 | — |
| 3 | 5-8s | Hard cut | @Image1 | @Image2 | — | (her apartment, continues) | — | @Audio1 |
| 4 | 8-10s | Hard cut | @Image1 | — | — | — | @Image4 | — (silent) |
| 5 | 10-13s | Hard cut | @Image1 | @Image2 | — | — | empty browser (words) | @Audio1 |
| 6 | 13-15s | High flip | @Image1 | — | @Image5 | @Image6 (lands) | — | — (<whoosh>) |
| 7 | 15-21s | Lands from the High flip | — | — | @Image5 | (studio, continues) | @Image7 + jar @Image8 | @Audio2 |
| 8 | 21-23s | Hard cut | — | — | @Image5 | — | jar @Image8 | — |
| 9 | 23-25s | Hard cut | — | — | — (no person in frame) | @Image6 | jar @Image8 | @Audio3 |
| 10 | 25-30s | Hard cut | — | — | — | — | end screen @Video1 | @Audio3 |

Every person on screen is named with exactly one @Image in her shot; no @asset is used for two people. Generic room furniture and candles are carried by the room image and words (skill: "Generic background guests, furniture, decor, or environmental elements do not create an asset gap").

## d) Hard rules from STORY.md

| Rule | Verdict | Where |
|---|---|---|
| No ka-ching, cart notification, Add-to-cart click, Scout call or orb | PASS | grep "ka-ching", "orb", "notification" in the prompt: only "No cart notification and no purchase sound"; "she never clicks Add to cart". |
| Exactly 3 voices; shopper inner voice lips closed; owner on camera; Scout off screen 9-10 | PASS | 【Maintain Consistency】 "Exactly three voices: …" and each speaking line. |
| High flip the only non-cut transition, worded as in STORY.md | PASS | 13-15s text matches STORY.md A wording (+ "180 degrees", from the shot list). |
| One Fig & Cedar jar; apartment candles generic | PASS | "her candles are generic, none is the Fig & Cedar jar"; studio's own lit jar fenced. |
| Old audio = timbre only | PASS | "do not use its words" on @Audio1/@Audio2; @Audio3 "the words come only from the lines below". |
| Product page cursor fenced | PASS | "do not use the mouse cursor". |
| Closed laptop in the room still fenced | PASS | "do not use the closed laptop on the stool"; "laptop open on her lap". |

**Result: zero FAILs.**

## After check 1 (Nov 15)
Check 1 verdict PASS (Goal fit YES), no FAILs. Applied its non-blocking notes: the candle line is split so the jar is named with its one asset ("The Fig & Cedar jar (@Image8) is the only lit candle in the owner's studio (@Image6)."); @Audio1 now takes timbre only, "not its upbeat energy" (the clip is upbeat, the inner voice is not); "cat bed" dropped from the room line to stay under 1,000 words (997). Spoken lines re-diffed: identical. Old a/image1-shopper.jpg and a/image7-scout-orb.png stay in a/ only because the previous page links them; neither is in job.json or the upload box.

## After check 2 (Nov 15)
Check 2 verdict PASS (Goal fit YES; Emile 9, Seedance 8, story 8), no FAILs. Applied: "the cat (@Image2) beside her" (the photo shows the cat standing, not curled); dropped "stabilized camera" (a constraint nobody asked for). Prompt 994 words; spoken lines unchanged. Kept as is: the studio's shelf jars stay, since the room line already says "unlit stock jars" and the jar line says the Fig & Cedar jar is the only lit candle there.
