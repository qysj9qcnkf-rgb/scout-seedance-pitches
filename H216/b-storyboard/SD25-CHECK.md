# SD25-CHECK · H241 round 2 · Render gate · B line-art storyboard · cat-candle story

Prompt checked: `prompt-sd25pe-final.txt` (1000 words by `wc -w`, sha256 `bbbe6887a5d585239671c7d21678ebc4b8c7fb2f8f4917597e458d1a9196c76a`). Asset list: `H241-assets.txt` (15 uploads). Previous Codex-cleared prompt: `prompt-sd25pe-final.pre-r2.txt` (d394acf7, round 1). Source story: `../shared-cat-candle/STORY.md`; reference build: `../d-camera-video/prompt-sd25pe-final.txt` (H240 round 2, b4f4b5ed).
Skill: sd25-pe, loaded through the Skill tool on Nov 15 2026; SKILL.md read in full. Self-update (`npx --yes skills@latest update sd25-pe -y`) exited 127 (npx not installed): this run could not automatically update sd25-pe and continued with the current local version.
Task: one video generation, storyboard-grid module. Job settings (not in the prompt): seedance_2_5, 9:16, 30 s, audio on.

## Round 2 (Emile, Nov 15 2:35 PM ET on H240, for every cat-candle render)
> "I like the portion of the client. The portion of the owner is not good ... there's an overlay of the thing. This is horrendous. It shouldn't be that way. If anything, that should be on the laptop ... The shot is too long ... 'Wow, Fig and Cedar totally failed.' ... You see her clicking X, deleting it from the website, and blowing away the candles ... Maybe we could say, 'Looks like no one's interested in Fig and Cedar.' ... a camera spinning around her ... with the laptop as a center point, just looking at the laptop straight, not moving, and then the camera rotating around her."

Applied, as on D (H240 round 2):
- **0-15 s byte-identical** to the cleared round-1 prompt: `diff <(sed -n '/^0-3s/,/^13-15s/p' prompt-sd25pe-final.pre-r2.txt) <(sed -n '/^0-3s/,/^13-15s/p' prompt-sd25pe-final.txt)` gives no output (shopper half + High flip, Panels 1-7). Storyboard panels 1-7 are pixel-identical (PIL ImageChops difference bbox = None).
- **15-25 s rebuilt as five shots**, one panel each: P8 15-17s over her shoulder onto the laptop, the list (@Image8) only on the screen; P9 17-20s "slow orbit around the owner with her laptop as the centre", she "sits still ... staring at the laptop"; P10 20-22s macro on her store admin (@Image10), her cursor clicks the red X, the row disappears; P11 22-23s she blows out the jar; P12 23-25s smoking wicks + Scout's line. 25-30s end screen keeps @Video2 with no panel ("the end screen has no panel"); the real H158 end screen is laid in after the take, free.
- **Owner lines are Emile's exact words, no "I guess"**: {Wow, Fig and Cedar totally failed.} and {Looks like no one's interested in Fig and Cedar.} `grep -n "I guess"` hits only the shopper's 10-13s line.
- **"Never as an overlay"**: @Image8 and @Image10 role lines: "use it only on the owner's laptop screen, never as an overlay."
- **New still @Image10** = D's store admin (a/store-admin-x.jpg, media 66bac8e5, byte-identical to the CDN copy, sha256 ab0b74ff…).
- **Goal ends** "discontinues the line on that wrong premise, deleting it from her website."
- **Storyboard** panels 8-10 newly drawn (free GPT Image via `codex exec -m gpt-5.6-terra`), old panels 10 and 11 (blow-out, smoking wicks) moved to slots 11 and 12 and renumbered; the old end-card panel 12 is dropped. Re-uploaded free: media c9c2a241.
- **Gate line**: kept out. Codex's H241 verdict (Nov 15 2:35 PM, item 24 FAIL) ruled the routing sentence untriggered for this card (both refs 9:16, readable, no target-spec conflict), and its PASS cleared d394acf7 without it. The round-2 change adds no video, so that ruling stands. `grep -c 'not video editing'` = 0.
- **Trimmed to 1,000 words** by D's method: role lines tightened to "use only …, not …" form; exact duplicates cut: "; do not use the background" on @Image2/@Image6 (already "use only her face…"), "The shelves hold plain unlit stock; the only jar is @Image9" (Relationships: "the one amber three-wick Fig & Cedar jar"), the Relationships sentence repeating the goal ("The shopper's unanswered question is the real reason…"), "the shopper sees it only on her screen (@Image4)" (@Image4 role line), the "Fig & Cedar at 3, down 84%" repeat (in @Image8 itself), "the studio dims", "At the end, Fig & Cedar is gone from the list" (= "the row disappears"), "appear on screen" after "No subtitles".

## What I opened and saw
- **Storyboard @Image1** (a/storyboard.png, 1086x1448, media c9c2a241, CDN bytes = local sha256 2814f0f1…): 12 numbered line-art panels, 4x3. P1-P5 her apartment (white one-wick pillars and tea lights), P6 straight down on her, P7 straight down on the owner, P8 over the owner's shoulder (braid in the foreground) onto a laptop showing a 5-row list with one row outlined, the lit wide three-wick jar beside it, brick wall and shelves; P9 the owner from a three-quarter angle, still, staring at the laptop in the centre, mouth slightly open, jar beside it; P10 a laptop screen filling the panel, 5 rows each with a round X, one row outlined and a cursor clicking its X; P11 the owner blowing out the wide three-wick jar; P12 three smoking wicks. No end-card panel.
- **@Image10** store admin: "Products" page, dark sidebar, five rows; the "Fig & Cedar · 3-wick" row pale red with a red X and a white arrow cursor on it; store name "Ember & Fig"; no platform logo.
- **@Image8** units-sold list with Fig & Cedar at 3 (-84%) in red; **@Image9** amber three-wick jar, blank kraft label; **@Image3** room v2, white pillars and tea lights only, closed laptop on the stool, no person or cat.
- **@Video1** a/video1-high-flip.mp4 (600x1066, 5.000 s, no audio): rises over a seated person, looks straight down, chair back sweeps the frame, lands level on a second person. **@Video2** a/h158-end.mp4 (1080x1920, 4.501 s).

## Uploads (15 files, in this order)
| Ref | File | Higgsfield media | One role |
|---|---|---|---|
| @Image1 | a/storyboard.png | c9c2a241-85ff-4d06-8eca-06adf5efb45d | shot order and rough framing |
| @Image2 | a/shopper-face.jpg | d54d8df5-566f-400d-823a-fd87b64a0831 | the shopper |
| @Image3 | a/apartment-candles-v2.jpg | f11fa295-b91d-4edd-b9bf-d492d8480d83 | the shopper's apartment |
| @Image4 | a/product-page.jpg | 0d34de38-32c9-4f5d-b6a4-c7fad6a4e72a | her laptop screen |
| @Image5 | a/cat.jpg | 696c034b-34ca-4b95-8f62-382f22de2f6f | the cat |
| @Image6 | a/owner.jpg | e97f42b3-72fd-40eb-9870-d62c95007272 | the owner |
| @Image7 | a/studio-plate.jpg | 6ef49b80-0973-487e-a2ee-ed3bec6011ee | the owner's studio |
| @Image8 | a/owner-sales.jpg | 8b23ef01-aee5-4fec-b6d5-a6a291ef6105 | units-sold list, only on her laptop screen |
| @Image9 | a/fig-cedar-jar.jpg | c5135236-2310-4800-baeb-f427f0bd4be9 | the one Fig & Cedar jar |
| @Image10 | a/store-admin-x.jpg | 66bac8e5-e3c3-4dac-b362-0158528e64b1 | store admin, only on her laptop screen |
| @Video1 | a/video1-high-flip.mp4 (5.0 s) | d44455fb-e7cc-46cf-9d86-641fe8304b97 | High flip camera move only |
| @Video2 | a/h158-end.mp4 (4.5 s) | cae62718-ec02-41f6-8e36-1de097e8427d | end screen picture only |
| @Audio1 | a/voice-serene.mp3 (11.44 s) | 4b121290-c867-44a1-8dc3-6046fb0efb15 | shopper timbre |
| @Audio2 | a/voice-alexandra-9s.mp3 (9.20 s) | 304653bb-2310-4d21-90d4-c32b92477717 | owner timbre |
| @Audio3 | a/voice-scout.mp3 (4.50 s) | 1040c108-8833-40b5-a3f0-943deab45436 | Scout timbre |

Totals: 10 images, 2 videos (9.5 s), 3 audio (25.14 s), 15 uploads; under the hard limits. Every id returned HTTP 200 on `https://d2ol7oe51mr4n9.cloudfront.net/user_398kORxw9vOlFFTUC4yYsMhV0Fj/<id>.<local ext>` on Nov 15 ~2:50 PM ET. Every upload has a role, so no 【Unused Assets】.
Audio transcripts (Deepgram, H225): @Audio1 beach-house chat, @Audio2 stone-fruit line, @Audio3 and @Video2's own track = the end line; each "not its words or pacing" / "not its sound, spoken words or pacing".

## Dialogue ledger (6 lines)
`diff <(grep -oE '\{[^}]*\}' ../d-camera-video/prompt-sd25pe-final.txt) <(grep -oE '\{[^}]*\}' prompt-sd25pe-final.txt)`: no output, same 6 lines as D round 2, same order.
1. {Are these safe for cats?} · shopper, inner voice, lips closed, @Audio1 · 5-8s (unchanged)
2. {I guess we'll never know.} · shopper, inner voice, lips closed, @Audio1 · 10-13s (unchanged)
3. {Wow, Fig and Cedar totally failed.} · owner, on camera, seen from behind, @Audio2 · 15-17s
4. {Looks like no one's interested in Fig and Cedar.} · owner, on camera, lips moving, @Audio2 · 17-20s
5. {Don't guess why your shoppers don't buy.} · Scout, off screen, @Audio3 · 23-25s
6. {Scout interviews your shoppers for you. Get free early access.} · Scout, off screen, @Audio3 · 25-30s

## Panel map
| Panel | Time | Shot |
|---|---|---|
| 1-5 | 0-3, 3-5, 5-8, 8-10, 10-13s | shopper half (unchanged) |
| 6-7 | 13-14s, 14-15s | High flip (unchanged) |
| 8 | 15-17s | over her shoulder onto the laptop, list on the screen |
| 9 | 17-20s | slow orbit, laptop as centre, she sits still |
| 10 | 20-22s | macro on the store admin, cursor clicks the red X |
| 11 | 22-23s | she blows out the jar |
| 12 | 23-25s | smoking wicks, Scout's line |
| — | 25-30s | end screen from @Video2, no panel |

## Non-Negotiable Principles 1-11
| # | Principle | Result | Proof |
|---|---|---|---|
| 1 | Intent First | PASS | Same 3 voices, one shopper, one cat, one owner, one jar; causality per Emile: "is about to buy ... never says whether it is safe for cats ... leaves without buying ... wrongly concludes nobody wants Fig & Cedar, and, surprisingly, discontinues the line on that wrong premise, deleting it from her website." Round 2 adds only Emile's own shots and words. |
| 2 | Template First | PASS | Generation-with-references + storyboard module: 【Generation Goal】【Reference Asset Roles】【Subjects and Relationships】【Shots】【Style and Sound】【Maintain Consistency】. |
| 3 | Account for Every Asset | PASS | 15 uploads, 15 role lines; none unassigned. |
| 4 | User Mapping First | PASS | @Image10 = Emile's "clicking X, deleting it from the website", the role the Marketer assigned ("only on her laptop screen, never as an overlay"); all round-1 mappings kept. |
| 5 | Minimal Clarification | PASS | Nothing ambiguous; no questions. |
| 6 | Submission-Ready Content Only | PASS | No ids, notes, card numbers or reasons in the prompt. |
| 7 | Separate Parameters | PASS | `grep -niE '9:16|vertical|480p|720p|fps|aspect|seconds long|30-second'` = 0 hits; only the shot ranges. |
| 8 | No Unrequested Constraints | PASS | "never as an overlay" is Emile's ("there's an overlay ... This is horrendous"); "never amber jars" is his 2:11 PM ask; "No ka-ching, no cart sound, no Add-to-cart click" STORY rules; "No subtitles" the skill's own rule. No routing sentence (not triggered, per Codex). |
| 9 | One Best Version | PASS | One prompt file. |
| 10 | Facts vs Observations | PASS | Plot, lines and the deletion are Emile's; "red X", "store admin", "units-sold list", "white pillars" are what the stills show. |
| 11 | Subject Cardinality | PASS | One image per person: shopper @Image2, owner @Image6; cat @Image5; the screens @Image4/@Image8/@Image10 and room/studio stills hold no person. |

## Final Checklist
| # | Item | Result | Proof |
|---|---|---|---|
| 1 | One primary task | PASS | Video generation only. |
| 2 | Subjects, counts, scene, ownership, outcome unchanged | PASS | "The owner (@Image6) stays at her studio desk (@Image7) with the one amber three-wick Fig & Cedar jar (@Image9)"; studio "not its jars"; outcome: row deleted (20-22s), candle out (22-23s). |
| 3 | Every required entity covered, none merged | PASS | Shopper, cat, apartment, product page, owner, studio, sales list, jar, store admin, flip, end screen, 3 voices: each its own line. |
| 4 | Each used asset one explicit role | PASS | Role lines 5-19. |
| 5 | Existing references kept | PASS | @Image1-9, @Video1-2, @Audio1-3 keep their round-1 numbers; @Image10 is new and appended. |
| 6 | No claims about unread assets | PASS | All opened (see above). |
| 7 | No forced irrelevant assets; unused listed | PASS | Only the 15 role assets. |
| 8 | Inaccessible assets not treated as understood | PASS | None inaccessible. |
| 9 | Subjects mapped individually | PASS | One line per subject. |
| 10 | Single-character image not defining two characters | PASS | @Image2 shopper only, @Image6 owner only. |
| 11 | One state change per stage, end state | PASS | P8 ends "the red Fig & Cedar row fills the screen"; P9 "the camera faces her across the laptop"; P10 "the row disappears"; P11 "the wicks smoke"; end screen "holds". |
| 12 | User time ranges kept | PASS | 0-15s ranges unchanged; 15-17/17-20/20-22/22-23/23-25/25-30 from the Marketer's brief (Emile's round-2 shots); continuous, no overlap. |
| 13 | Editing checklist | N-A | Not editing. |
| 14 | Locked parameter rules | PASS | Generation; ratio and duration on the job only. |
| 15 | Extension | N-A | Not extension. |
| 16 | First/last frame statements | N-A | No keyframes. |
| 17 | Multiple keyframes | N-A | None. |
| 18 | Storyboard: reading order, panel roles, what not to adopt | PASS | "read it left to right, top to bottom, each panel to its shot's time range; the end screen has no panel; do not adopt its line-art style, white background, panel numbers or drawn faces." Every shot names its panel. |
| 19 | Blockout | N-A | None. |
| 20 | Emotion and camera terms observable | PASS | "Over the owner's shoulder onto her laptop, slow push in"; "slow orbit around the owner with her laptop as the centre" + "sits still ... staring at the laptop"; "Macro on her laptop screen, locked" + "her cursor clicks the red X ... the row disappears". Cause before reaction: the red row is on screen before "Wow, Fig and Cedar totally failed."; the deletion follows both lines. |
| 21 | Speaker, state, words, audio, language, on/off screen per line | PASS | 15-17s "The owner (@Image6), in English, on camera, seen from behind, in the voice of @Audio2, flat surprise"; 17-20s "in English, on camera, lips moving, in the voice of @Audio2, disappointed"; shopper and Scout lines unchanged. No accent. |
| 22 | Shot numbers kept as identifiers | PASS | "Panel N". |
| 23 | No parameters, analysis or reasons | PASS | See 6, 7. |
| 24 | Gate line exactly once, only when triggered | PASS | Not triggered for this card (Codex H241 item 24, 2:35 PM: refs readable and 9:16, no target-spec conflict). `grep -c 'not video editing'` = 0. |
| 25 | Unreadable video specs | N-A | Both probed (600x1066 5.000 s; 1080x1920 4.501 s). |
| 26 | No unrelated negative constraints | PASS | See principle 8. |
| 27 | Placeholders replaced; symbols | PASS | `<>` only sounds (<a short sharp exhale>, <a soft breath>, <click>); `()` only music (Soft piano under speech.) besides @asset tags; `{}` only the 6 lines. |

## Which ONE @asset defines each person and thing, per shot
| Time · Panel | Shopper | Cat | Owner | Room | Screen | Jar | Move / picture | Voice |
|---|---|---|---|---|---|---|---|---|
| 0-3s · P1 | @Image2 | @Image5 | — | @Image3 | — | — | — | — |
| 3-5s · P2 | @Image2 | — | — | — | @Image4 | — | — | — |
| 5-8s · P3 | @Image2 | @Image5 | — | @Image3 | — | — | — | @Audio1 |
| 8-10s · P4 | @Image2 | — | — | — | @Image4 | — | — | — |
| 10-13s · P5 | @Image2 | @Image5 | — | — | (empty browser) | — | — | @Audio1 |
| 13-15s · P6-7 | @Image2 | — | @Image6 | @Image3 → @Image7 | — | — | @Video1 | — |
| 15-17s · P8 | — | — | @Image6 | — | @Image8 | — | — | @Audio2 |
| 17-20s · P9 | — | — | @Image6 | @Image7 | — | @Image9 | — | @Audio2 |
| 20-22s · P10 | — | — | @Image6 (cursor) | — | @Image10 | — | — | — |
| 22-23s · P11 | — | — | @Image6 | — | — | @Image9 | — | — |
| 23-25s · P12 | — | — | — | — | — | @Image9 | — | @Audio3 |
| 25-30s · — | — | — | — | — | — | — | @Video2 | @Audio3 |

At most one asset per column per row; no person or thing is defined by two assets.

## Result
Principles 1-11: 11 PASS. Final Checklist: 27 items, 21 PASS, 6 N-A. Zero FAILs.
Spend: 0 credits (panels drawn free via Codex GPT Image, uploads free, no generation).
