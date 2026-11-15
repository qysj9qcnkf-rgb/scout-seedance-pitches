# SD25-CHECK · H240 owner part, option A (stitched 10 s clip) · Nov 15 2026

Prompt checked: `prompt-ownerA.txt` (712 words, 3 spoken lines, sha256 4e9270d2ba90f8396c4ae8d126ad5bf1807995c48b64994655355a3f7062e59c). Asset list: `H240-ownerA-assets.txt`. Skill: sd25-pe SKILL.md (Purpose, Principles 1-11, Core Workflow 1-8, Generation with Reference Assets, Keyframe Anchors / First Frame Plus Other References, Emotion, Sound, Final Checklist) read for this compile.

**Brief (Emile, Nov 15 5:29 PM on H240):** "I really like real-world scenes from option A… you'd want to show that it's Fig and Cedar… Maybe the box is Fig and Cedar… a little bit disappointed and lightly annoyed, nothing too exaggerated… maybe a little bit of sadness… do you stitch it? I'll let you decide." Plan (coordinator brief, 5:32 PM): stitch. Keep take 2's 0-15 s (job 246fd4e8, `H240-take2-raw.mp4`), render only this 10 s owner clip (Seedance 2.5, draft 480p, 9:16, 10 s, audio on; parameters set in the job, not the prompt), then splice it at 15.0 s and lay in the real H158 end screen after (free edit). Option A lines as on the options page; the second line ends in "..." because the plain version transcribed wrong in the TTS sample (same words).

Task: video generation with a first frame plus other references. Gate line: not added. The skill says the routing line is "not added automatically for … first-frame generation", and no reference video is used.

Assets inspected (not guessed from names):
- @Image1 `image1-firstframe-take2-15s.jpg`: take 2 at 15.0 s, 480x854 (9:16). The owner seated at a wooden desk facing camera, open laptop, a lit amber three-wick jar at frame left, dark metal shelves of amber jars on a brick wall behind. This is exactly where take 2's High flip lands, so the clip continues the cut.
- @Image2 `image5-owner.png`: the owner, auburn side braid, rust knit sweater.
- @Image3 `image3-stockroom-figcedar.jpg` (new free GPT Image still): brick wall, dark metal shelves packed with brown boxes, every box carrying a kraft label "Fig & Cedar" with a jar drawing, one open box with three amber jars labelled Fig & Cedar, packing table with a red tape gun, black marker, kraft paper roll and one closed Fig & Cedar box. No people.
- @Image4 `image8-fig-cedar-jar.png`: amber three-wick jar, kraft label "Fig & Cedar", cloth behind.
- @Audio1 `audio2-owner-voice.mp3` (10 s): transcript "Bright with notes of stone fruit. Do my buyers even talk like that?…" (timbre only).
- @Audio2 `audio3-scout-voice.mp3` (4.5 s): transcript "Scout interviews your shoppers for you. Get free early access." (timbre only).

## Final Checklist

| # | Item | Result | Proof line |
|---|------|--------|-----------|
| 1 | One primary task | PASS | Generation with a first frame: "Generate a short live-action story scene." / "Use @Image1 as the first frame." |
| 2 | Subjects, counts, scene, props, outcome unchanged | PASS | One owner, one lit jar, boxes all Fig & Cedar; she counts, tapes one shut, writes DISCONTINUED, blows out the candle; Scout's line ends it. Matches option A and the 5:29 PM note |
| 3 | Every required entity covered; no merge | PASS | Owner @Image2, stockroom and boxes @Image3, jar @Image4, first frame @Image1, owner voice @Audio1, Scout voice @Audio2 |
| 4 | Every used asset has one unique role | PASS | Six role lines, one per asset |
| 5 | User's existing references kept | PASS | Owner voice and Scout voice as in H240; numbering is new for this clip and the asset list maps each |
| 6 | No claims about unread assets | PASS | All six inspected (above) |
| 7 | No forced assets; unused listed | PASS | Every upload has a role; no 【Unused Assets】 block needed |
| 8 | Inaccessible assets not treated as understood | N/A | None inaccessible |
| 9 | Characters/props mapped one by one | PASS | "@Image2 is used for the owner's…", "@Image4 is used for the Fig & Cedar candle…" |
| 10 | No single-person image defines two people | PASS | Only one person; @Image3 has no person ("no person appears in it") |
| 11 | Each stage one change + end state | PASS | Six ranges, each ends "At the end, …" |
| 12 | Time ranges kept | PASS | 0-1 / 1-3.5 / 3.5-5.5 / 5.5-7 / 7-8 / 8-10, continuous; from the stitch plan (15-25 s of the final ad) |
| 13 | Editing rules | N/A | Not editing |
| 14 | Locked ratio/duration rules | PASS | No ratio, duration or resolution in the prompt; @Image1 is 9:16 and locks the ratio |
| 15 | Extension rules | N/A | Not an extension (a new clip spliced in the edit) |
| 16 | First/last frame statements | PASS | Standalone "Use @Image1 as the first frame." plus "This first frame defines the composition at the start of the video: …"; other images "without changing the first-frame composition defined by @Image1"; "The shot begins naturally from the first frame defined by @Image1." No last frame |
| 17 | Multiple keyframes | N/A | One first frame only |
| 18 | Storyboard grid | N/A | None |
| 19 | Blockout | N/A | None |
| 20 | Emotion and camera terms observable | PASS | "her shoulders drop slightly and she exhales through her nose", "her brows slightly drawn", "runs one finger along a row, counting"; moves named on their subject: "slow push in" on the stockroom, "Close-up on her hands", "Macro on the jar's smoking wicks" |
| 21 | Speaker, state, words, audio, language, on/off screen per line | PASS | "The owner (@Image2), in English, in the voice of @Audio1 (inner voice, …, lips closed)" twice; "Scout, in English, in the voice of @Audio2 (off screen, calm)". No accent added |
| 22 | Numbers stay identifiers | PASS | Only time ranges and asset numbers |
| 23 | No parameters, analysis, keys, reasons | PASS | Template sections only |
| 24 | Gate line only when triggered | PASS | Not present: first-frame generation, no reference video |
| 25 | Ref-video spec decision | N/A | No reference video |
| 26 | No unrequested negative constraints | PASS | "no person appears in it" and "do not use the cloth behind it" fence real leaks in the stills; "No subtitles" because lines are spoken; "only one lit jar" keeps the one candle she blows out |
| 27 | Placeholders replaced; body only | PASS | <tape screech>, <marker squeak>, <a soft breath> are sound effects; no placeholders |

## Non-Negotiable Principles 1-11

| # | Principle | Result | Proof line |
|---|-----------|--------|-----------|
| 1 | Intent first | PASS | Option A as Emile picked it; every box reads Fig & Cedar; light annoyance and a little sadness, "nothing exaggerated" |
| 2 | Template first | PASS | 【Generation Goal】【Reference Asset Roles】【Subjects and Relationships】【Event Script】【Sound and Text】【Maintain Consistency】 with the first-frame block |
| 3 | Account for every asset | PASS | 6 uploads, 6 role lines |
| 4 | User mapping first | PASS | Owner voice and Scout voice as named in the brief; first frame from take 2 at 15.0 s as the brief asks |
| 5 | Minimal clarification | PASS | No questions needed |
| 6 | Submission-ready content only | PASS | No notes, versions or reasons in the prompt |
| 7 | Separate parameters | PASS | 10 s, 9:16, 480p, audio on live in the asset list only |
| 8 | No unrequested constraints | PASS | See item 26 |
| 9 | One best version | PASS | One prompt |
| 10 | Facts vs observations | PASS | Small online candle shop, unsold stock and the wrong conclusion come from Emile's story; looks come from the stills |
| 11 | Subject cardinality | PASS | One image per role: owner @Image2, stockroom @Image3, jar @Image4 |

## Which ONE @asset defines each person and object, per shot

| Time | Transition | Owner | Jar | Room | Move | Voice |
|------|-----------|-------|-----|------|------|-------|
| 0-1s | from first frame @Image1 | @Image2 | (in @Image1) | @Image1 | static | — |
| 1-3.5s | Hard cut | @Image2 | — | @Image3 | slow push in | @Audio1, inner |
| 3.5-5.5s | Hard cut | @Image2 (hands) | — | @Image3 (packing table) | close-up | @Audio1, inner |
| 5.5-7s | Hard cut | @Image2 (hand) | — | @Image3 (box lid) | static insert | — |
| 7-8s | Hard cut | @Image2 | @Image4 | @Image3 | static close-up | — |
| 8-10s | Hard cut | — | @Image4 | — | slow push in, macro | @Audio2, off screen |

## Limits

4 images, 0 videos, 2 audio (14.5 s): within 30 images / 30 s audio. Prompt 712 words (≤1,000). Splice plan: take 2 frames 0-15.0 s + this clip 0-10 s, then the real H158 end screen from 25 s (free edit).

**Result: zero FAILs.**
