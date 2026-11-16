# SD25-CHECK · H241 take 4 · OWNER HALF (15-30 s of the ad) · first-frame continuation of the keeper intro

Prompt checked: `prompt-sd25pe-final.txt` (614 words by `wc -w`, sha256 `3896cf99717ab04cb7e4b06dd5f3e990f00a414edec548036190376b9688970e`). Asset list: `H241-assets.txt` (9 uploads; @Audio1/@Audio2 = Emile's voice picks, defaults listed). Previous: take 3 draft (55fb9b42, full 30 s), take 1 rendered (bbbe6887). Backups: `*.pre-take4.*`, `prompt-full30.take4-draft.txt`.
Skill: sd25-pe (SKILL.md read in full this session; local version). Task: one video generation with a fixed first frame plus a storyboard module. Job settings (not in the prompt): seedance_2_5, 15 s, 9:16 (locked by the first frame), audio on.

## What changed (Emile, Nov 15 7:28 PM and 7:34 PM ET)
- 7:34 PM: H240 take 2's shopper intro (0-15 s, ending on the High flip) is the KEEPER opening (`a/KEEP-shopper-intro-0-15s.mp4`, 15.08 s, 480x854). It is never re-rendered. This job is the owner half only, starting from the intro's last frame (`a/first-frame-intro-end.png`, ffmpeg -sseof, upscaled 720x1280), stitched on for free.
- 7:28 PM: her line 1 alone, soft, sad, almost to herself: {Damn... what's going on with Fig and Cedar?}; he leans back, arms crossed: {Yeah, I told you. Customers just aren't into Fig and Cedar.}; her {Damn, you just know things.}; CEO/VISIONARY tags on that moment (shown as stills both ways; never drawn by Seedance, so they are not in the prompt); 3 natural voices per co-founder; 2 owner-side music samples (laid in the edit, so the prompt says "No music").
- Owner face = H240's own owner image (a3488732, byte-identical to `a/owner-h240.png`), the same person the intro ends on.

## What I opened and saw
- **@Image1** first frame: brick wall, metal shelves of lit amber labelled jars, the owner (auburn side braid, rust crew-neck sweater) alone at a light wood desk typing on a silver laptop at frame right; a lit amber three-wick jar labelled "Fig & Cedar" at frame left. No co-founder.
- **@Image2** 5 panels, 3+2: (1) two-shot, she slumps chin in hand, sad; he beside her, calm; (2) him leaning back, arms crossed, cocky; (3) her, hand on chest, amazed, him smirking; (4) over her shoulder, cursor on a red X; (5) she blows out the jar. Sixth cell blank.
- **@Image3** owner face (H240's), **@Image4** co-founder (short fade, beard, charcoal sweater, smile; brick/candle background fenced), **@Image5** admin: Fig & Cedar row red, "212 in stock", "3 ▼ 84%", red X + cursor.
- **@Video1** 1080x1920, 4.50 s, end screen. **@Audio1** default Gia 7.00 s: "Damn. What's going on with Fig and Cedar? Damn. You just know things." **@Audio2** default Mark 4.72 s: "Yeah, I told you. Customers just aren't into fig and cedar." **@Audio3** Scout 4.50 s. All options transcribed with Deepgram (none played on this machine).

## Uploads (9, in this order)
| Ref | File | Media | One role |
|---|---|---|---|
| @Image1 | a/first-frame-intro-end.png | 9a9c30e9-4b75-489b-8549-d4572c608020 | first frame |
| @Image2 | a/storyboard-owner.png | 0b3e28e7-cc8a-4c39-ba76-5f6bf41a9948 | shot order and rough framing |
| @Image3 | a/owner-h240.png | a3488732-1c28-4b37-bb28-0c69475dacd0 | the owner |
| @Image4 | a/cofounder.jpg | 4f56e950-cdeb-4549-9d67-8dfe39b94d1a | the co-founder |
| @Image5 | a/admin-delete-x.jpg | 03e0d622-ebdd-4079-abd0-91ed67a4150e | store admin, laptop screen only |
| @Video1 | a/h158-end.mp4 | 48682b82-6201-4336-a42d-599ec57bd765 | end screen picture only |
| @Audio1 | a/her-voice-1-gia.mp3 (or her pick) | 9193a4cf-2abe-48c2-9a48-b57d7ea7bd8b | owner timbre |
| @Audio2 | a/his-voice-1-mark.mp3 (or his pick) | 7eeeae2b-8dbd-4cb0-add6-fc941fdeae0e | co-founder timbre |
| @Audio3 | a/voice-scout.mp3 | 1040c108-8833-40b5-a3f0-943deab45436 | Scout timbre |
Totals: 5 images, 1 video (4.5 s), 3 audio (16.2-17.6 s by pick); under every limit. CDN bytes = local for all 13 candidate ids. No 【Unused Assets】: every upload has a role.

## Dialogue ledger (5 lines, local time; +15 s in the final ad)
1. {Damn... what's going on with Fig and Cedar?} · owner alone, on camera, quietly, @Audio1 · 0-3s; co-founder "lips closed"
2. {Yeah, I told you. Customers just aren't into Fig and Cedar.} · co-founder, on camera, @Audio2 · 3-6s; owner "lips closed"
3. {Damn, you just know things.} · owner, on camera, @Audio1 · 6-8s; co-founder "smirks, lips closed"
4. {Don't guess why your shoppers don't buy.} · Scout, off screen, @Audio3 · 9-12s
5. {Scout interviews your shoppers for you. Get free early access.} · Scout, off screen, @Audio3 · 12-15s
Pace: 7 words/3 s, 11/3 s (Mark reads it in 4.7 s with pauses; Seedance takes timbre only), 5/2 s, 7/3 s, 9/3 s.

## Non-Negotiable Principles 1-11
| # | Principle | Result | Proof |
|---|---|---|---|
| 1 | Intent First | PASS | Goal keeps the story contract and its outcome: "he confidently, wrongly concludes ... she is impressed, and they delete it from their store." |
| 2 | Template First | PASS | First-frame module (standalone "Use @Image1 as the first frame." + its own "This first frame defines ..." sentence) plus generation-with-references sections and a storyboard module. |
| 3 | Account for Every Asset | PASS | 9 uploads, 9 roles (first frame lines 3-4, roles lines 7-14). |
| 4 | User Mapping First | PASS | Emile's keeper intro end frame is the first frame; owner = the intro's own owner image; the rest kept from take 3. |
| 5 | Minimal Clarification | PASS | Voice and music choices are Emile's picks by his ask; the prompt text does not change with them. |
| 6 | Submission-Ready Content Only | PASS | No ids, notes or reasons in the prompt. |
| 7 | Separate Parameters | PASS | No ratio, duration, resolution or fps words; ratio locked by the first frame. |
| 8 | No Unrequested Constraints | PASS | "No music" serves Emile's chosen bed laid in the edit; "never as an overlay", ka-ching/cart are his standing asks; "No subtitles" is the skill's dialogue rule. |
| 9 | One Best Version | PASS | One prompt. |
| 10 | Facts vs Observations | PASS | Story and lines are Emile's; jar label, laptop, shelves come from the first frame. |
| 11 | Subject Cardinality | PASS | One image per person: @Image3 owner, @Image4 co-founder; @Image1 is the first frame, not a person definition. |

## Final Checklist
| # | Item | Result | Proof |
|---|---|---|---|
| 1 | One primary task | PASS | Generation. |
| 2 | Subjects, counts, ownership, outcome | PASS | One desk, one laptop, one jar (Relationships line); row deleted 8-9s; candle out 9-12s. |
| 3 | Required entities covered | PASS | Owner, co-founder, studio/desk/jar (first frame), admin, end screen, 3 voices. |
| 4 | One role per used asset | PASS | Lines 3-4 and 7-14. |
| 5 | Existing references kept | PASS | Fresh numbering for a new owner-only job, mapped in the asset list. |
| 6 | No claims about unread assets | PASS | All opened or transcribed. |
| 7 | Unused assets listed | PASS | None unused. |
| 8 | Inaccessible assets | PASS | None. |
| 9 | Subjects mapped individually | PASS | One line each. |
| 10 | Single-character image for one character | PASS | See principle 11. |
| 11 | One state change per stage, end state | PASS | Each shot one beat; "the row disappears", "the wicks smoke", "the end screen holds". |
| 12 | Time ranges continuous | PASS | 0-3/3-6/6-8/8-9/9-12/12-15, integer, no overlap. |
| 13 | Editing | N-A | Not editing (the intro is untouched; the stitch is a separate free edit). |
| 14 | Locked parameters | PASS | First frame locks 9:16; 15 s on the job. |
| 15 | Extension | N-A | First-frame generation, not extension. |
| 16 | First/last frame statements | PASS | Standalone "Use @Image1 as the first frame." then "This first frame defines the studio, the owner at her desk, her laptop, the lit amber Fig & Cedar jar, the shelves and the camera direction at the start." No last frame. |
| 17 | Multiple keyframes | N-A | One first frame only. |
| 18 | Storyboard reading order and exclusions | PASS | @Image2 role line; each shot names its Panel; "the end screen has no panel". |
| 19 | Blockout | N-A | None. |
| 20 | Observable emotion/camera | PASS | "camera slowly pulls back into a two-shot, revealing the co-founder"; "slumps, chin in hand, staring sadly"; "leans back, arms crossed, cocky grin"; "hand on her chest, amazed". |
| 21 | Speaker, language, voice, on/off screen per line | PASS | Every line names speaker + asset, "in English", on camera/off screen, "in the voice of @AudioN"; listeners' lips closed. |
| 22 | Shot numbers as identifiers | PASS | "Panel N". |
| 23 | No parameters, analysis, reasons | PASS | See 6, 7. |
| 24 | Gate line only when triggered | PASS | Not added: a first-frame task never takes it (skill; H217 C precedent). `grep -c 'not video editing'` = 0. |
| 25 | Unreadable video specs | N-A | @Video1 probed: 1080x1920, 4.50 s. |
| 26 | No unrelated negatives | PASS | See principle 8. |
| 27 | Placeholders and symbols | PASS | <> sounds only (<click>, <a soft breath>); no () music cue; {} only the 5 lines. |

## Which ONE @asset defines each person and thing, per shot (local time)
| Time · Panel | Owner | Co-founder | Room / desk / jar | Screen | Move / picture | Voice |
|---|---|---|---|---|---|---|
| 0-3s · P1 | @Image3 | @Image4 | @Image1 (first frame) | — | — | @Audio1 |
| 3-6s · P2 | @Image3 | @Image4 | (as @Image1) | — | — | @Audio2 |
| 6-8s · P3 | @Image3 | @Image4 | (as @Image1) | — | — | @Audio1 |
| 8-9s · P4 | @Image3 | — | — | @Image5 | — | — |
| 9-12s · P5 | @Image3 | — | jar (as @Image1) | — | — | @Audio3 |
| 12-15s · — | — | — | — | — | @Video1 | @Audio3 |
At most one asset per column per row.

## Result
Principles 1-11: 11 PASS. Final Checklist: 27 items, 22 PASS, 5 N-A. Zero FAILs.
Spend this round: 8.5 credits (6 Eleven v4 voice clips at 0.69, 2 ElevenLabs Music v2.5 samples at 2.18). Stills (GPT Image via Codex), tag overlay (HTML), panels, uploads: free. No video generated.
