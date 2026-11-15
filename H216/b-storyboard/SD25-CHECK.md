# SD25-CHECK · H225 · B line-art storyboard · cat-candle story (Emile, Nov 15 1:00 PM ET)

Prompt checked: `prompt-sd25pe-final.txt` (999 words by `wc -w`, after the check 1 and check 2 fixes). Source story: `../shared-cat-candle/STORY.md`.
Skill: sd25-pe, loaded through the Skill tool on Nov 15 2026 (its self-update ran with exit 0 and found nothing to update; the local copy is the same as `seedance-docs/sd25-pe-SKILL.md`).
Task: one video generation, storyboard-grid module. Job settings (not in the prompt): seedance_2_5, 9:16, 30 s, audio on.

## Uploads (14 files, in this order)
| Ref | File | Higgsfield media | One role |
|---|---|---|---|
| @Image1 | a/storyboard.png (new, free Codex GPT Image, 12 numbered panels) | 242974f8-6ee1-43b6-8bb3-9123b728d486 | shot order and rough framing |
| @Image2 | a/shopper-face.jpg | d54d8df5-566f-400d-823a-fd87b64a0831 | the shopper |
| @Image3 | a/apartment-candles.jpg (shared new room, no person, no cat) | 8dcc4d3e-6957-49cd-a342-fbc14d6a5e1f | the shopper's apartment |
| @Image4 | a/product-page.jpg (no-cursor version) | 0d34de38-32c9-4f5d-b6a4-c7fad6a4e72a | her laptop screen |
| @Image5 | a/cat.jpg | 696c034b-34ca-4b95-8f62-382f22de2f6f | the cat |
| @Image6 | a/owner.jpg | 1963a66d-94e4-4fdc-95e5-b34fde48ea4f | the owner |
| @Image7 | a/studio-plate.jpg | 6ef49b80-0973-487e-a2ee-ed3bec6011ee | the owner's studio |
| @Image8 | a/owner-sales.jpg | 8c33aad5-bc87-4b86-965e-1a967b2686d3 | her laptop screen |
| @Image9 | a/fig-cedar-jar.jpg | bdbf8b6a-e4e3-4455-ba26-22f84aadd453 | the one Fig & Cedar jar |
| @Video1 | a/flip-move-5s.mp4 (5.0 s, 600x1066, no sound) | 969c55f0-0fa1-4e69-b138-0f171ff227fa | High flip camera move only |
| @Video2 | a/h158-end.mp4 (4.5 s) | cae62718-ec02-41f6-8e36-1de097e8427d | end screen picture only |
| @Audio1 | a/voice-serene.mp3 (11.44 s) | 4b121290-c867-44a1-8dc3-6046fb0efb15 | shopper timbre |
| @Audio2 | a/voice-alexandra-9s.mp3 (9.20 s) | 304653bb-2310-4d21-90d4-c32b92477717 | owner timbre |
| @Audio3 | a/voice-scout.mp3 (4.50 s) | 1040c108-8833-40b5-a3f0-943deab45436 | Scout timbre |

Totals: 9 images, 2 videos (9.5 s), 3 audio (25.14 s). All under the hard limits (30 images, 30 s video, 30 s audio, 50 assets).
Dropped from the upload list (old story): the Scout orb still (5aaa2bca), the old shopper room photo (24babbac), the old storyboard (1e98a1bf). Not uploaded, so no 【Unused Assets】 line is needed.

### Audio transcripts (Deepgram nova-3, Nov 15) — timbre only, never their words
- @Audio1: "Oh my gosh. Okay. So we finally booked the beach house for July. It's like ten minutes from the water. I've already started packing, which is ridiculous, I know."
- @Audio2: "Bright with notes of stone fruit. Do my buyers even talk like that? So I had Scout ask them. Most just said, it's good."
- @Audio3: "Scout interviews your shoppers for you. Get free early access."
- @Video2's own sound track: "Scout interviews your shoppers for you. Get free early access." (the prompt says "do not use its sound, spoken words").
Each audio line in the prompt says "do not use its words or pacing".

## Dialogue diff against STORY.md
`grep -oE '\{[^}]*\}'` on both files, then `diff`: identical, 5 lines, same order.
1. {Are these safe for cats?} · shopper, inner voice, lips closed · 5-8s
2. {I guess we'll never know.} · shopper, inner voice, lips closed · 10-13s
3. {I guess no one's interested in Fig and Cedar. No one wants this. Time to discontinue the product line.} · owner, on camera · 15-21s
4. {Don't guess why your shoppers don't buy.} · Scout, off screen · 23-25s
5. {Scout interviews your shoppers for you. Get free early access.} · Scout, off screen · 25-30s

## Panel map (storyboard panel → time → shot list row)
| Panel | Time | STORY.md shot | What is drawn |
|---|---|---|---|
| 1 | 0-3s | 1 | wide candle apartment, she on the sofa with laptop, cat curled beside her |
| 2 | 3-5s | 2 | over the shoulder, fingers on the trackpad, product page on screen |
| 3 | 5-8s | 3 | face close-up, lips closed, cat behind |
| 4 | 8-10s | 4 | annoyed, rubbing her brow |
| 5 | 10-13s | 5 | leaning back, empty browser, looking at the cat |
| 6 | 13-14s | 6 (first half) | straight-down view on her, the cat and the laptop |
| 7 | 14-15s | 6 (second half) | straight-down view on the owner at her desk |
| 8 | 15-18s | 7 (first half) | owner at her desk, list on screen, lit three-wick jar |
| 9 | 18-21s | 7 (second half) | owner sighs, chin on hand, looking at the jar |
| 10 | 21-23s | 8 | she blows out the jar |
| 11 | 23-25s | 9 | macro, three smoking wicks |
| 12 | 25-30s | 10 | end card (orb with bars, blank button) |

## Non-Negotiable Principles 1-11
| # | Principle | Result | Proof |
|---|---|---|---|
| 1 | Intent First | PASS | Same 3 people (shopper, owner, Scout voice), one cat, one Fig & Cedar jar, same causality (no pet info → she leaves → owner guesses wrong → blows out candle → Scout line → end screen). No ka-ching, no cart click, no Scout orb scene, matching STORY.md hard rules. |
| 2 | Template First | PASS | Uses the generation-with-references template plus the storyboard module: 【Generation Goal】, 【Reference Asset Roles】, 【Subjects and Relationships】, 【Shots】, 【Style and Sound】, 【Maintain Consistency】. |
| 3 | Account for Every Asset | PASS | 14 uploads, 14 role lines, each with what to take and what not to take; no uploaded asset is without a role, so no 【Unused Assets】. |
| 4 | User Mapping First | PASS | Mappings follow STORY.md: apartment-candles = room, face and cat from their own crops, flip clip = camera move only, H158 end screen = last shot, old audio = timbre only. |
| 5 | Minimal Clarification | PASS | Nothing ambiguous enough to ask; no questions in or around the prompt. |
| 6 | Submission-Ready Content Only | PASS | The prompt has no notes, media IDs, model names, card numbers or reasons. |
| 7 | Separate Parameters | PASS | `grep -niE '9:16|vertical|480p|720p|fps|aspect|seconds long|30-second'` on the prompt returns nothing. The only numbers ending in s are STORY.md's own shot time ranges (0-3s ... 25-30s). |
| 8 | No Unrequested Constraints | PASS | The only negatives are Emile's (no ka-ching, no cart sound, no Add-to-cart click; lips closed for the inner voice), the asset "do not use" fences and "No subtitles appear on screen" (the skill's own rule when subtitles are not wanted). The gate line is the routing declaration, allowed when triggered. |
| 9 | One Best Version | PASS | One prompt in prompt-sd25pe-final.txt. prompt.txt is our draft, not sent. |
| 10 | Facts vs Observations | PASS | Story facts (cat lady, owner, wrong guess) come from Emile's text; looks (bob with bangs, side braid, amber jar, kraft label) are what the images show. |
| 11 | Subject Cardinality | PASS | One image per person: shopper @Image2, owner @Image6; cat @Image5 alone; room @Image3 has no person or cat in it. |

## Final Checklist
| # | Item | Result | Proof |
|---|---|---|---|
| 1 | One primary task | PASS | Video generation only. |
| 2 | Subjects, counts, scene, ownership, outcome unchanged | PASS | One shopper, one cat, one owner, one jar on the owner's desk; she ends without buying; the candle ends blown out. The studio still's shelves hold ~24 lit amber jars that look like the product, so the @Image7 line says "do not use any of its jars ... The shelves hold plain unlit stock; the only jar is @Image9" (check 1 found it; check 2 showed the first fence was wrong, fixed after check 2). Maintain Consistency: "only on the owner's desk; the shopper's screen (@Image4) shows its photo". |
| 3 | Every required entity covered, none merged | PASS | Shopper @Image2, cat @Image5, apartment @Image3, her screen @Image4, owner @Image6, studio @Image7, her screen @Image8, jar @Image9, flip @Video1, end screen @Video2, three voices @Audio1-3. |
| 4 | Each used asset has one explicit role | PASS | See the upload table; one role line each. |
| 5 | Existing references kept | PASS | Numbering is new for this story and consistent across prompt, page and this file. |
| 6 | No claims about unread assets | PASS | Every asset was opened: stills viewed, videos probed, audio transcribed. |
| 7 | No forced irrelevant assets; unused listed | PASS | Old-story assets dropped from the upload list instead of being sent unused. |
| 8 | Inaccessible assets not treated as understood | PASS | None inaccessible. |
| 9 | Subjects mapped individually | PASS | One line per subject; no range mapping. |
| 10 | Single-character image not defining two characters | PASS | @Image2 only the shopper, @Image6 only the owner. |
| 11 | Each stage has one state change and an end state | PASS | Each shot carries one change; end states written where the next cut depends on them (P1 closer on her, P10 wicks smoke, P12 end screen holds); the others end on their action. |
| 12 | User time ranges kept | PASS | STORY.md's 10 time ranges kept; the two long shots map to two panels each with their sub-times (13-14/14-15, 15-18/18-21). |
| 13 | Editing checklist | PASS (n/a) | Not an editing task. |
| 14 | Locked parameter rules | PASS | Generation task; ratio and duration set on the job only. |
| 15 | Extension direction | PASS (n/a) | Not an extension. |
| 16 | First/last frame statements | PASS (n/a) | No keyframes used. |
| 17 | Multiple keyframes | PASS (n/a) | None. |
| 18 | Storyboard: reading order, panel roles, what not to adopt | PASS | "Read it left to right, top to bottom, each panel to the time range named in its shot; do not adopt its line-art style, white background, panel numbers or drawn faces." Every shot names its panel(s). |
| 19 | Blockout | PASS (n/a) | None. |
| 20 | Emotion and camera terms observable | PASS | Annoyance is jaw tight, sharp nose exhale, rubbing her brow; High flip written as STORY.md's words A (rise, straight down, sofa back sweeps, comes out level on the owner). |
| 21 | Speaker, state, words, audio, language, on/off screen per line | PASS | Every line: speaker named, "in English", on/off screen, "in the voice of @AudioN"; the shopper's two lines also "inner voice ... lips closed". |
| 22 | Shot numbers kept as identifiers | PASS | "Panel N" is a panel number, not an angle. |
| 23 | No parameters, analysis or reasons in the prompt | PASS | See principle 6 and 7. |
| 24 | Gate line exactly once, only when triggered | PASS | Triggered: 5.0 s and 4.5 s reference videos in a 30 s generation job. `grep -c 'Please note that this is not video editing.'` = 1, right after the goal sentence. |
| 25 | Unreadable video specs | PASS (n/a) | Both videos probed (5.0 s, 4.5 s). |
| 26 | No unrelated negative constraints | PASS | See principle 8. |
| 27 | Placeholders replaced, one prompt body only | PASS | No `<placeholder>`; `<>` holds only sounds (<a short sharp exhale>, <a soft breath>); `()` holds only music (Soft piano under speech.) apart from the @asset tags in parentheses; `{}` only dialogue. The sales figure is written "at 3, down 84%", not in brackets. |

## Which ONE @asset defines each person and thing, per shot
| Time · Panel | Shopper | Cat | Owner | Room | Screen | Jar | Move / picture | Voice |
|---|---|---|---|---|---|---|---|---|
| 0-3s · P1 | @Image2 | @Image5 | — | @Image3 | — | — | — | — |
| 3-5s · P2 | @Image2 | — | — | — | @Image4 | — | — | — |
| 5-8s · P3 | @Image2 | @Image5 | — | @Image3 | — | — | — | @Audio1 |
| 8-10s · P4 | @Image2 | — | — | — | @Image4 | — | — | — |
| 10-13s · P5 | @Image2 | @Image5 | — | — | (empty browser, words) | — | — | @Audio1 |
| 13-15s · P6-7 | @Image2 | — | @Image6 | @Image3 → @Image7 | — | — | @Video1 | — |
| 15-21s · P8-9 | — | — | @Image6 | @Image7 | @Image8 | @Image9 | — | @Audio2 |
| 21-23s · P10 | — | — | @Image6 | — | — | @Image9 | — | — |
| 23-25s · P11 | — | — | — | @Image7 | — | @Image9 | — | @Audio3 |
| 25-30s · P12 | — | — | — | — | — | — | @Video2 | @Audio3 |

Every row has at most one asset per column (the flip row starts in her apartment @Image3 and lands in the studio @Image7, one room at a time): no person or object is defined by two assets.

## Result
Principles 1-11: 11 PASS. Final Checklist: 27 PASS (8 of them n/a). Zero FAILs.
Spend: 0 credits. The storyboard is a free Codex GPT Image draw; the upload is free; no video generated.
