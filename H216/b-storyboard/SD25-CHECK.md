# SD25-CHECK · H241 take 5 · OWNER HALF (15-30 s of the ad) · two endings, first-frame continuation of the keeper intro

Prompts checked: `prompt-ending-A.txt` (gated; = `prompt-sd25pe-final.txt`; 767 words; sha256 `bab1b27b5b3f4eabf4787d3ee0559d5b4b4f4385064b197a9c55f286d84e8479`) and `prompt-ending-B.txt` (both rendered after A; 764 words; sha256 `9e2c14b4c05c86d3e9b73fd0dbfef62ee3dd8a539492cf630b033230085ac8b6`). They differ only in line 24 (Panel 2). Asset lists: `H241-assets-ending-A.txt` (= `H241-assets.txt`) and `H241-assets-ending-B.txt`, 12 uploads each, identical except @Image2 (storyboard A f085ba75 / B 6bafbb07).
Skill: sd25-pe (SKILL.md read in full this session; local version). Task: one video generation with a fixed first frame plus a storyboard module. Job settings (not in the prompt): seedance_2_5, 15 s, 9:16 (locked by the first frame), audio on. Backups: `*.pre-take5.*`.

## What changed (Emile, Nov 15 8:06 PM ET)
- Voices: hers = her own existing voice (Alexandra, the actress 14 voice: `refs/voice-alexandra.mp3`, cut losslessly to 9.42 s at 128 kbps); his = Mark (Emile: "For the voice I pick Mark"), cut losslessly from the raw Eleven v4 clip (128 kbps). The other five candidates are not used.
- Faces: both are Soul. Owner = Soul 2 (text2image_soul_v2) job 1963a66d, byte-identical to `a/owner-h240.png` (CDN raw sha256 bbc1176a… = local). Co-founder = Soul 2 job 0447bb1c. Both saved as Higgsfield Elements: candle-owner-ceo (68c42a75), candle-cofounder-visionary (d35d643a). No rebuild needed.
- Shots: five different framings: wide high angle (P1), low angle (P2), close-up (P3), overhead (P4), table-height close with a dog passing (P5).
- Acting: subtle, never overplayed: "softly disappointed", "casually sure of himself", "small, quietly impressed smile"; goal line "The acting stays subtle and natural, never exaggerated."
- Tags: real pin-on name badges on their sweaters (@Image5 CEO, @Image6 VISIONARY), worn throughout. No graphics, no plaques.
- Endings: A (line 24) he stands up, hands in pockets; B he stays seated, leaning back, arms crossed. Same words.
- Music: still Emile's choice, laid in the edit; the prompt keeps "No music." Two new options on the page (C deadpan, D lo-fi), ElevenLabs Music v2.5, 15 s each, kept at the source 128 kbps; Deepgram finds no words in either.

## What I opened and saw
- @Image1 first frame: brick wall, shelves of lit amber labelled jars, the owner (auburn side braid, rust sweater) alone at a light wood desk with a silver laptop; lit amber three-wick jar labelled "Fig & Cedar".
- @Image2 A: 3+2 panels: 1 wide high angle on both at the desk (badges drawn), 2 him standing, hands in pockets, low angle, her looking up, 3 close-up of her with a small smile, CEO badge at the bottom, 4 overhead laptop with cursor on an X, 5 she blows out the jar, him beside her, small dog trotting behind. B is identical except panel 2: him seated, leaning back, arms crossed.
- @Image3 owner face (Soul), @Image4 co-founder (Soul; brick/candle background fenced), @Image5 white badge "CEO", @Image6 white badge "VISIONARY" (both on grey, fenced), @Image7 small fluffy cream-and-tan dog trotting (room fenced), @Image8 admin with Fig & Cedar 212 in stock / 3 ▼ 84% and red X + cursor.
- @Video1 1080x1920, 4.50 s end screen. @Audio1 9.42 s: "Bright with notes of stone fruit ... Most just said, it's good." (words fenced). @Audio2 4.73 s: "Yeah, I told you. Customers just aren't into fig and cedar." @Audio3 4.50 s Scout. All audio checked by Deepgram only; nothing played on this machine.

## Uploads (12, in this order; ending A)
| Ref | File | Media | One role |
|---|---|---|---|
| @Image1 | a/first-frame-intro-end.png | 9a9c30e9-4b75-489b-8549-d4572c608020 | first frame |
| @Image2 | a/storyboard-ending-A.png (B: storyboard-ending-B.png) | f085ba75-22c2-45c0-9b8c-3d46e139b7d3 (B: 6bafbb07-8d63-4639-8aa0-72ab68b16bd2) | shot order, angles, framing |
| @Image3 | a/owner-h240.png | a3488732-1c28-4b37-bb28-0c69475dacd0 | the owner |
| @Image4 | a/cofounder.jpg | 4f56e950-cdeb-4549-9d67-8dfe39b94d1a | the co-founder |
| @Image5 | a/badge-ceo.png | df9dcae1-9902-4c1c-ad7f-9a4382b96eef | her name badge |
| @Image6 | a/badge-visionary.png | 0552c26e-6b80-46af-9256-6d4d84218ffe | his name badge |
| @Image7 | a/dog.jpg | f7a39e14-e215-479b-ac69-a8895facc9a8 | the dog |
| @Image8 | a/admin-delete-x.jpg | 03e0d622-ebdd-4079-abd0-91ed67a4150e | store admin, laptop screen only |
| @Video1 | a/h158-end.mp4 | 48682b82-6201-4336-a42d-599ec57bd765 | end screen picture only |
| @Audio1 | a/voice-owner-alexandra.mp3 | 3b148da6-65fb-46bf-b453-15188af63fbd | owner timbre |
| @Audio2 | a/voice-cofounder-mark.mp3 | 1ff661d8-7b3b-45e2-a5ec-edb175ab9e56 | co-founder timbre |
| @Audio3 | a/voice-scout.mp3 | 1040c108-8833-40b5-a3f0-943deab45436 | Scout timbre |
Totals: 8 images, 1 video (4.5 s), 3 audio (18.65 s); under every limit. CDN bytes = local for all 13 ids (both storyboards). No 【Unused Assets】: every upload has a role; the dropped voice candidates are not uploaded.

## GO (Emile, Nov 15 11:37 PM ET): render both endings, one take each
- Added to line 2 of both prompts, nothing else changed: "The two have natural, easy chemistry, warm and unrobotic, with her slightly naive and him slightly cocky on top, never overplayed." (Emile: "they have good chemistry ... very natural and they're not robotic ... not too intense".)
- Principle 8 still holds: this is Emile's own performance direction, not a generic quality pack. Principle 10: chemistry is a requested performance, written as an observable direction alongside the per-shot actions.

## Fresh-check fixes (Nov 15 ~8:45 PM ET, 2 independent checks, both PASS)
- Line 7 now also fences the storyboard's drawn room and props: "the room, desk and jar come from @Image1" (P1 draws a window and counter the studio does not have).
- Line 14: "not its sound, spoken words or pacing" (so the end card's on-screen text is not suppressed).
- Line 27: "the co-founder (@Image4) sits beside her again, lips closed" (P5 draws him seated; ending A last showed him standing).
- Known risk kept: his 11-word line in a 3 s panel (Mark's reference reads it in 4.7 s; Seedance takes timbre only) and a 1 s delete beat.

## Dialogue ledger (5 lines, local time; +15 s in the ad)
1. {Damn... what's going on with Fig and Cedar?} · owner, on camera, quietly, @Audio1 · 0-3s; co-founder "lips closed"
2. {Yeah, I told you. Customers just aren't into Fig and Cedar.} · co-founder, on camera, @Audio2 · 3-6s; owner "lips closed"
3. {Damn, you just know things.} · owner, on camera, @Audio1 · 6-8s
4. {Don't guess why your shoppers don't buy.} · Scout, off screen, @Audio3 · 9-12s
5. {Scout interviews your shoppers for you. Get free early access.} · Scout, off screen, @Audio3 · 12-15s
Pace: 7 words/3 s, 11/3 s (Mark reads it in 4.7 s; timbre only), 5/2 s, 7/3 s, 9/3 s.

## Non-Negotiable Principles 1-11
| # | Principle | Result | Proof |
|---|---|---|---|
| 1 | Intent First | PASS | Line 2 keeps the story and outcome: "he confidently, wrongly concludes ... she is quietly impressed, and they delete it from their store." |
| 2 | Template First | PASS | First-frame module (lines 3-4) + reference roles + storyboard module + shots + style + consistency. |
| 3 | Account for Every Asset | PASS | 12 uploads, 12 roles (lines 3-4, 7-17). |
| 4 | User Mapping First | PASS | Her own voice and Mark per Emile; Soul faces; badges, dog and endings as he asked. |
| 5 | Minimal Clarification | PASS | Nothing open in the prompt; music is an edit choice. |
| 6 | Submission-Ready Content Only | PASS | No ids, notes or reasons. |
| 7 | Separate Parameters | PASS | No ratio, duration, resolution or fps. |
| 8 | No Unrequested Constraints | PASS | "No music" serves the edit bed; "never as an overlay", ka-ching/cart are standing asks; "No subtitles" the skill's dialogue rule; "subtle" is Emile's 8:06 PM ask. |
| 9 | One Best Version | PASS | One gated prompt (A); B is Emile's requested alternative, kept separate on the page. |
| 10 | Facts vs Observations | PASS | Story, lines, attitudes from Emile; badges, dog, jar label from the images. |
| 11 | Subject Cardinality | PASS | One image per person (@Image3, @Image4); one image per badge (@Image5, @Image6); one dog (@Image7). |

## Final Checklist
| # | Item | Result | Proof |
|---|---|---|---|
| 1 | One primary task | PASS | Generation. |
| 2 | Subjects, counts, ownership, outcome | PASS | Line 20: one desk, laptop, jar; dog "only passes through once"; row deleted (26), candle out (27). |
| 3 | Required entities covered | PASS | Owner, co-founder, both badges, dog, admin, end screen, three voices: one line each. |
| 4 | One role per used asset | PASS | Lines 3-4, 7-17. |
| 5 | Existing references kept | PASS | Same numbering style as take 4; new refs appended in role order. |
| 6 | No claims about unread assets | PASS | All opened or transcribed. |
| 7 | Unused assets listed | PASS | None unused among uploads. |
| 8 | Inaccessible assets | PASS | None. |
| 9 | Subjects mapped individually | PASS | One line each. |
| 10 | Single-character image for one character | PASS | See principle 11. |
| 11 | One state change per stage, end state | PASS | Reveal; his claim; her reaction; "the row disappears"; "the wicks smoke"; "the end screen holds". |
| 12 | Time ranges continuous | PASS | 0-3/3-6/6-8/8-9/9-12/12-15. |
| 13 | Editing | N-A | Not editing. |
| 14 | Locked parameters | PASS | First frame locks 9:16; 15 s on the job. |
| 15 | Extension | N-A | Not extension. |
| 16 | First/last frame statements | PASS | Line 3 standalone "Use @Image1 as the first frame."; line 4 defines it. |
| 17 | Multiple keyframes | N-A | One first frame. |
| 18 | Storyboard reading order and exclusions | PASS | Line 7 (reading order; not its style, numbers, faces, drawn room or props; room/desk/jar from @Image1); panels named in lines 23-27. |
| 19 | Blockout | N-A | None. |
| 20 | Observable emotion/camera | PASS | "rises and pulls back to a wide, high angle"; "Low angle from desk height"; "Close-up ... three-quarter view"; "Overhead, straight down"; "stands up ... hands in his pockets" (A) / "leans back ... arms crossed" (B); "small, quietly impressed smile". |
| 21 | Speaker, language, voice, on/off screen per line | PASS | Every line names speaker + asset, "in English", on camera/off screen, "in the voice of @AudioN"; listeners' lips closed. |
| 22 | Shot numbers as identifiers | PASS | "Panel N". |
| 23 | No parameters, analysis, reasons | PASS | See 6, 7. |
| 24 | Gate line only when triggered | PASS | Not added: first-frame task. `grep -c 'not video editing'` = 0 in both. |
| 25 | Unreadable video specs | N-A | @Video1 probed 1080x1920, 4.50 s. |
| 26 | No unrelated negatives | PASS | See principle 8. |
| 27 | Placeholders and symbols | PASS | <> sounds only (<click>, <a soft breath>); no () music cue; {} only the 5 lines. |

## Which ONE @asset defines each person and thing, per shot (local time)
| Time · Panel | Owner | Co-founder | Badges | Dog | Room / desk / jar | Screen | Picture | Voice |
|---|---|---|---|---|---|---|---|---|
| 0-3s · P1 | @Image3 | @Image4 | @Image5 / @Image6 | — | @Image1 | — | — | @Audio1 |
| 3-6s · P2 | @Image3 | @Image4 | @Image5 / @Image6 | — | (as @Image1) | — | — | @Audio2 |
| 6-8s · P3 | @Image3 | — | @Image5 | — | (as @Image1) | — | — | @Audio1 |
| 8-9s · P4 | @Image3 | — | — | — | — | @Image8 | — | — |
| 9-12s · P5 | @Image3 | — | @Image5 | @Image7 | jar (as @Image1) | — | — | @Audio3 |
| 12-15s · — | — | — | — | — | — | — | @Video1 | @Audio3 |
At most one asset per person or thing per row (each badge belongs to one person).

## Result
Principles 1-11: 11 PASS. Final Checklist: 27 items, 22 PASS, 5 N-A. Zero FAILs. Holds for both endings (B differs only in line 24's pose).
Spend this round: 4.36 credits (two ElevenLabs Music v2.5 samples at 2.18). Stills, badges, dog, storyboard panels (GPT Image via Codex), lossless voice cuts, Elements, uploads: free. No video generated.
