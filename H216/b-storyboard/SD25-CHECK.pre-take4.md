# SD25-CHECK · H241 take 3 DRAFT · B line-art storyboard · co-founders, hype version (not gated: Emile picks the voice first)

Prompt checked: `prompt-sd25pe-final.txt` (1000 words by `wc -w`, sha256 `55fb9b42e6d534e003a759b6a7a23cdeaca573e371c19b19369721b837461386`). Asset list: `H241-assets.txt` (16 uploads; @Audio4 = Emile's pick of A/B/C). Previous: take 2 (`prompt-sd25pe-final.take2.txt`, 974a407d), take 1 rendered (bbbe6887). Backups: `*.pre-take3.*`.
Skill: sd25-pe, loaded through the Skill tool on Nov 15 2026 and read in full; local version (self-update found nothing newer).
Task: one video generation, storyboard-grid module. Job settings (not in the prompt): seedance_2_5, 9:16, 30 s, audio on.

## Take 3 (Emile, Nov 15 5:14 PM ET)
> "The scene from shopper to owner: they should be introduced together ... the tension is mellow, there's some piano, and she's relaxed, checking. On the other side, they're a little bit more hyped ... 'Damn, what's going on with Fig and Cedar?' ... The guy is totally like, 'Yeah I told you, customers just aren't into Fig and Cedar.' He's a little bit gangsterish, confident ... She's like, 'Damn, you just know things,' as if he's a visionary ... I was hoping more for an American voice or some shit, high quality still."

Applied:
- **0-13 s byte-identical** to take 1 (`diff <(sed -n '/^0-3s/,/^10-13s/p' prompt-sd25pe-final.take1.txt) <(sed -n '/^0-3s/,/^10-13s/p' prompt-sd25pe-final.txt)`: no output). 13-15 s keeps the same flip words; only its landing now names both: "comes out level on the owner (@Image6) and the co-founder (@Image10) at their desk in the studio (@Image7)" ("introduced together").
- **Mood switch**: Style and Sound "(Soft piano under the shopper's scenes; at the High flip it switches to a punchy, upbeat beat.)"
- **Lines** exactly as the brief: both {Damn, what's going on with Fig and Cedar?}; he {Yeah, I told you. Customers just aren't into Fig and Cedar.}; she {Damn, you just know things.}. Delete, blow-out, lesson line and end screen kept.
- **Voices**: three ElevenLabs voices via Higgsfield text2speech_v2 (Kevin, Mark, Gideon; 0.3 cr each), each saying his line; Deepgram transcripts match the words (punctuation aside). The take-2 voice is dropped.
- **Products-list still dropped** (no shot shows the screen while scrolling now); the red-X still @Image8 (renumbered from @Image10) still shows the real admin: 212 in stock, 3 sales. Co-founder face renumbered @Image11 -> @Image10.
- **Storyboard**: P7 (both from above), P8-P10 new (free GPT Image via Codex); P11 and P12 are take-2 P10 and P11 with new number circles; P1-P6 pixel-identical. Media 9a3fe3c5 (CDN = local).
- **Gate line**: kept out (Codex's item 24 ruling for this card stands; no new video). `grep -c 'not video editing'` = 0.

## What I opened and saw
- **@Image1** a/storyboard.png: P7 bird's-eye on two heads at one laptop (her braid left, his short hair right), jar from above; P8 both lean in, wide-eyed, mouths open, laptop back, lit three-wick jar; P9 he leans back, arms crossed, cocky grin, she turns to him, mouth closed; P10 she, hand on chest, amazed, mouth open, he smirks at the edge; P11 over her shoulder, cursor on a red X; P12 she blows out the jar.
- **@Image8** admin: five rows, Fig & Cedar row pale red, "212 in stock", "3 ▼ 84%", red X with cursor. **@Image10** co-founder face (take 2).
- **@Audio4 options**: A 3.12 s, B 3.20 s, C 4.32 s, each transcribed as "Yeah, I told you. Customers just aren't into fig and cedar." Their words are fenced off anyway ("not its words or pacing").
- Illustration only, not uploaded: a/duo-still.png (GPT Image, both faces at the desk).

## Uploads (16 files, in this order)
| Ref | File | Higgsfield media | One role |
|---|---|---|---|
| @Image1 | a/storyboard.png | 9a3fe3c5-5c7d-4e21-a0ad-60bd5b95b0b1 | shot order and rough framing |
| @Image2 | a/shopper-face.jpg | d54d8df5-566f-400d-823a-fd87b64a0831 | the shopper |
| @Image3 | a/apartment-candles-v2.jpg | f11fa295-b91d-4edd-b9bf-d492d8480d83 | the shopper's apartment |
| @Image4 | a/product-page.jpg | 0d34de38-32c9-4f5d-b6a4-c7fad6a4e72a | her laptop screen |
| @Image5 | a/cat.jpg | 696c034b-34ca-4b95-8f62-382f22de2f6f | the cat |
| @Image6 | a/owner.jpg | e97f42b3-72fd-40eb-9870-d62c95007272 | the owner |
| @Image7 | a/studio-plate.jpg | 6ef49b80-0973-487e-a2ee-ed3bec6011ee | the studio |
| @Image8 | a/admin-delete-x.jpg | 03e0d622-ebdd-4079-abd0-91ed67a4150e | store admin, only on the laptop screen |
| @Image9 | a/fig-cedar-jar.jpg | c5135236-2310-4800-baeb-f427f0bd4be9 | the one Fig & Cedar jar |
| @Image10 | a/cofounder.jpg | 4f56e950-cdeb-4549-9d67-8dfe39b94d1a | the co-founder |
| @Video1 | a/video1-high-flip.mp4 (5.0 s) | d44455fb-e7cc-46cf-9d86-641fe8304b97 | High flip camera move only |
| @Video2 | a/h158-end.mp4 (4.5 s) | 48682b82-6201-4336-a42d-599ec57bd765 | end screen picture only |
| @Audio1 | a/voice-serene-7s.mp3 (7.60 s) | 6ee138f2-80a3-4b4b-afb4-c218bd195ea5 | shopper timbre |
| @Audio2 | a/voice-alexandra-9s.mp3 (9.20 s) | 304653bb-2310-4d21-90d4-c32b92477717 | owner timbre |
| @Audio3 | a/voice-scout.mp3 (4.50 s) | 1040c108-8833-40b5-a3f0-943deab45436 | Scout timbre |
| @Audio4 | Emile's pick: A 360ec129 / B 6e573b3a / C 69760016 | (see asset list) | co-founder timbre |

Totals: 10 images, 2 videos (9.5 s), 4 audio (24.4-25.6 s by pick), 16 uploads; under every hard limit. CDN bytes = local for every id. No 【Unused Assets】: every upload has a role.

## Dialogue ledger (7 lines)
1. {Are these safe for cats?} · shopper, inner voice, lips closed, @Audio1 · 5-8s
2. {I guess we'll never know.} · shopper, inner voice, lips closed, @Audio1 · 10-13s
3. {Damn, what's going on with Fig and Cedar?} · owner + co-founder together, on camera, @Audio2 and @Audio4 · 15-18s
4. {Yeah, I told you. Customers just aren't into Fig and Cedar.} · co-founder, on camera, lips moving, @Audio4 · 18-21s; owner "lips closed"
5. {Damn, you just know things.} · owner, on camera, lips moving, @Audio2 · 21-23s; co-founder "smirks, lips closed"
6. {Don't guess why your shoppers don't buy.} · Scout, off screen, @Audio3 · 24-27s
7. {Scout interviews your shoppers for you. Get free early access.} · Scout, off screen, @Audio3 · 27-30s
Pace: 7 words / 3 s; 11 / 3 s (the voice samples run 3.1-4.3 s, so 3 s is natural for A and B; C is slower); 5 / 2 s; 7 / 3 s with the breath first; 9 / 3 s.

## Panel map
| Panel | Time | Shot |
|---|---|---|
| 1-5 | 0-13s | shopper half (unchanged) |
| 6-7 | 13-14s, 14-15s | High flip; P7 lands on both from above |
| 8 | 15-18s | both lean in, hyped |
| 9 | 18-21s | him, cocky |
| 10 | 21-23s | her, impressed |
| 11 | 23-24s | cursor clicks the red X |
| 12 | 24-27s | blow-out, Scout's line over the smoke |
| — | 27-30s | end screen from @Video2, no panel |

## Non-Negotiable Principles 1-11
| # | Principle | Result | Proof |
|---|---|---|---|
| 1 | Intent First | PASS | One shopper, cat, owner, co-founder, jar; goal "he confidently, wrongly concludes customers don't want Fig & Cedar, she is impressed, and they delete it from their store." |
| 2 | Template First | PASS | Generation with references + storyboard module sections. |
| 3 | Account for Every Asset | PASS | 16 uploads, 16 role lines. |
| 4 | User Mapping First | PASS | Every take-2 mapping kept; renumbering only closes the gap left by the dropped list. |
| 5 | Minimal Clarification | PASS | The one open choice (the voice) is Emile's pick by his own ask; the prompt does not depend on which. |
| 6 | Submission-Ready Content Only | PASS | No ids, notes or reasons in the prompt. |
| 7 | Separate Parameters | PASS | No ratio, duration, resolution or fps words. |
| 8 | No Unrequested Constraints | PASS | Fences are Emile's (overlay, amber jars, ka-ching/cart) or the skill's (No subtitles). |
| 9 | One Best Version | PASS | One prompt file. |
| 10 | Facts vs Observations | PASS | Lines, mood and attitude are Emile's; "212 in stock, 3 sales", "short fade, beard, charcoal sweater" are what the stills show. |
| 11 | Subject Cardinality | PASS | One image per person: @Image2, @Image6, @Image10. |

## Final Checklist
| # | Item | Result | Proof |
|---|---|---|---|
| 1 | One primary task | PASS | Generation. |
| 2 | Subjects, counts, ownership, outcome | PASS | One laptop, one jar; row deleted 23-24s; candle out 24-27s. |
| 3 | Required entities covered | PASS | Each its own role line. |
| 4 | One role per used asset | PASS | Role lines 5-20. |
| 5 | Existing references kept | PASS | Take-2 numbers kept except the closed gap (list dropped), stated above. |
| 6 | No claims about unread assets | PASS | All opened. |
| 7 | Unused assets listed | PASS | None unused. |
| 8 | Inaccessible assets | PASS | None. |
| 9 | Subjects mapped individually | PASS | One line each. |
| 10 | Single-character image for one character | PASS | See principle 11. |
| 11 | One state change per stage, end state | PASS | Each shot one beat; P11 "the row disappears"; P12 "the wicks smoke"; end screen "holds". |
| 12 | Time ranges continuous | PASS | 15-18/18-21/21-23/23-24/24-27/27-30, integer, no overlap. |
| 13 | Editing | N-A | Not editing. |
| 14 | Locked parameters | PASS | On the job only. |
| 15 | Extension | N-A | Not extension. |
| 16 | First/last frame | N-A | None. |
| 17 | Multiple keyframes | N-A | None. |
| 18 | Storyboard reading order and exclusions | PASS | @Image1 role line; every shot names its Panel. |
| 19 | Blockout | N-A | None. |
| 20 | Observable emotion/camera | PASS | "lean in toward the laptop, wide-eyed"; "leans back, arms crossed, cocky grin"; "hand on her chest, amazed"; "Medium close-up on the co-founder/owner". |
| 21 | Speaker, language, voice, on/off screen per line | PASS | Every line: speaker + asset, "in English", on camera/off screen/inner voice, "in the voice(s) of @AudioN"; listeners' lips closed at 18-21s and 21-23s. |
| 22 | Shot numbers as identifiers | PASS | "Panel N". |
| 23 | No parameters, analysis, reasons | PASS | See 6, 7. |
| 24 | Gate line only when triggered | PASS | Not triggered; 0 hits. |
| 25 | Unreadable video specs | N-A | Both probed. |
| 26 | No unrelated negatives | PASS | See principle 8. |
| 27 | Placeholders and symbols | PASS | <> sounds only, () music only, {} the 7 lines only. |

## Which ONE @asset defines each person and thing, per shot
| Time · Panel | Shopper | Cat | Owner | Co-founder | Room | Screen | Jar | Move / picture | Voice |
|---|---|---|---|---|---|---|---|---|---|
| 0-13s · P1-5 | @Image2 | @Image5 | — | — | @Image3 | @Image4 | — | — | @Audio1 |
| 13-15s · P6-7 | @Image2 | — | @Image6 | @Image10 | @Image3 → @Image7 | — | — | @Video1 | — |
| 15-18s · P8 | — | — | @Image6 | @Image10 | (studio via Relationships) | — | — | — | @Audio2 + @Audio4 |
| 18-21s · P9 | — | — | @Image6 | @Image10 | — | — | — | — | @Audio4 |
| 21-23s · P10 | — | — | @Image6 | @Image10 | — | — | — | — | @Audio2 |
| 23-24s · P11 | — | — | @Image6 | — | — | @Image8 | — | — | — |
| 24-27s · P12 | — | — | @Image6 | — | — | — | @Image9 | — | @Audio3 |
| 27-30s · — | — | — | — | — | — | — | — | @Video2 | @Audio3 |

At most one asset per column per row (15-18s uses one voice per speaker).

## Result
Principles 1-11: 11 PASS. Final Checklist: 27 items, 21 PASS, 6 N-A. Zero FAILs. Draft only: Codex seedance-check runs after Emile picks the voice.
Spend this round: 0.9 credits (three ElevenLabs voice samples via Higgsfield). Still, panels, uploads: free. No video generated.
