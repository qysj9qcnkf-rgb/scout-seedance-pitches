# SD25-CHECK · H241 · Render gate · B line-art storyboard · cat-candle story

Prompt checked: `prompt-sd25pe-final.txt` (1000 words by `wc -w`, sha256 `c0c4ba3f7473a0ffebd60d2cbc098160b6bdf29a1cae29dafe288e92603a6179`). Asset list: `H241-assets.txt`. Source story: `../shared-cat-candle/STORY.md` (incl. "Emile, Nov 15 2:10-2:11 PM ET").
Skill: sd25-pe, loaded through the Skill tool on Nov 15 2026 and SKILL.md read in full. Its self-update (`npx --yes skills@latest update sd25-pe -y`) exited 127 (npx not installed): this run could not automatically update sd25-pe and continued with the current local version.
Task: one video generation, storyboard-grid module. Job settings (not in the prompt): seedance_2_5, 9:16, 30 s, audio on.

## H241 change (Emile, Nov 15 2:11 PM ET on H225)
> "the narrative of the story is that the shopper is looking at something she's about to buy. She can't buy it because she doesn't have the information. Surprisingly the owner makes a decision to cut off the product line on the wrong insight."
> "make sure that Fig and Cedar, the thing that she's currently trying to buy, look and feel different from the one she has at home ... Make it feel different, that this is another product from the one she has at home."

What changed, nothing else:
1. **Plot in 【Generation Goal】** (story facts, no new dialogue): "At night a cat lady wants the Fig & Cedar candle and is about to buy it, but its product page never says whether it is safe for cats, the one thing she needs before buying, so she can't and leaves without buying. The owner sees only the missing sales, wrongly concludes nobody wants Fig & Cedar, and surprisingly discontinues the line on that wrong premise, blowing out the candle." Plus in 【Subjects and Relationships】: "The shopper's unanswered question is the real reason for the low sales; the owner never learns it."
2. **Candle contrast:** room still swapped to v2 (@Image3 = f11fa295, white pillars and tea lights; v1 8dcc4d3e had amber jars). Room line: "use only its sofa, lamp, plants, its many lit white pillar candles and tea lights, and the warm night light". Relationships: "her own candles are only white pillars and tea lights, clearly unlike the amber three-wick Fig & Cedar jar, which she does not own ... The amber jar is only on the shopper's screen (@Image4) and the owner's desk." Panel 1 shot: "Dozens of lit white pillar candles and tea lights fill the apartment (@Image3)".
3. **Storyboard @Image1** re-uploaded free (media c3d88a05-a5da-4a43-8360-0bc0ce5c5b3a, old 242974f8): panels 1, 4, 5, 6 redrawn free (Codex) so her home candles read as slim single-wick white pillars and tea lights; the two ambiguous short candles in holders at the bottom of P6 and the one beside the table are now tea lights. Panel 3 kept as it was: its two background candles were already slim single-wick pillars, and the Codex redraw came back garbled (rejected). Panels 2 and 7-12 untouched.
4. **Owner @Image6 re-uploaded free** (same file a/owner.jpg, byte-identical on the CDN): old media 1963a66d returned no file on the CDN; new e97f42b3. @Image8 and @Image9 re-uploaded free from the local .jpg files the list names (8b23ef01, c5135236; the old 8c33aad5/bdbf8b6a ids hold .png copies, so `<id>.jpg` returned 403).
5. **Trimmed exact duplicates only** to stay ≤1,000 words: "Hard cuts, except the High flip at 13-15s" (every shot bracket already names its cut); the 【Maintain Consistency】 voice sentence (every line already binds speaker, voice, on/off screen, lips closed) and jar sentence (now in Relationships); "she never clicks Add to cart" on @Image4 (Panel 2 "no click" + Style "no Add-to-cart click"); "Scout closes it." (Panels 11-12); "Scout is only a voice and the end screen (@Video2)." (@Video2 line + Panel 12 + voice lines).

## What I opened and saw
- **Room still v2** (a/apartment-candles-v2.jpg = media f11fa295, sha256 5842f237… identical local vs CDN): warm night living room, L-shaped beige sofa with knit throw, pleated floor lamp, monstera, window with a row of tea lights and short white pillars on the sill, wooden bookshelf with white pillars and tea lights, white coffee table with white pillars and tea lights, a tray of four cream pillars and a tea light on the sofa arm, cat bed and scratching post, closed laptop on a wooden stool. No person, no cat, no amber jar, no three-wick candle anywhere.
- **Product page @Image4**: the Fig & Cedar page, a wide amber glass jar, blank kraft label, three wicks; nothing about pets. Clearly a different object from her white pillars.
- **Jar @Image9**: same amber three-wick jar with blank kraft label.
- **Storyboard @Image1** (a/storyboard.png, 1086x1448, media c3d88a05-a5da-4a43-8360-0bc0ce5c5b3a): 12 numbered line-art panels. Her home candles (P1 table and sill, P3-P5 shelf, P6 table, side and foreground) are all slim one-wick pillars or tea lights; the only wide three-wick jar is in the owner's studio (P7 top view, P8-P11) and as the jar picture on her screen (P2). The contrast reads by shape: tall narrow one-wick vs short wide three-wick. Two tiny white patches at the bottom of P6 where the tea lights were redrawn (line art only, not sent as a style: the prompt says do not adopt its line-art style).

## Uploads (14 files, in this order)
| Ref | File | Higgsfield media | One role |
|---|---|---|---|
| @Image1 | a/storyboard.png | c3d88a05-a5da-4a43-8360-0bc0ce5c5b3a | shot order and rough framing |
| @Image2 | a/shopper-face.jpg | d54d8df5-566f-400d-823a-fd87b64a0831 | the shopper |
| @Image3 | a/apartment-candles-v2.jpg | f11fa295-b91d-4edd-b9bf-d492d8480d83 | the shopper's apartment |
| @Image4 | a/product-page.jpg | 0d34de38-32c9-4f5d-b6a4-c7fad6a4e72a | her laptop screen |
| @Image5 | a/cat.jpg | 696c034b-34ca-4b95-8f62-382f22de2f6f | the cat |
| @Image6 | a/owner.jpg | e97f42b3-72fd-40eb-9870-d62c95007272 | the owner |
| @Image7 | a/studio-plate.jpg | 6ef49b80-0973-487e-a2ee-ed3bec6011ee | the owner's studio |
| @Image8 | a/owner-sales.jpg | 8b23ef01-aee5-4fec-b6d5-a6a291ef6105 | her laptop screen |
| @Image9 | a/fig-cedar-jar.jpg | c5135236-2310-4800-baeb-f427f0bd4be9 | the one Fig & Cedar jar |
| @Video1 | a/flip-move-5s.mp4 (5.0 s, no sound) | 969c55f0-0fa1-4e69-b138-0f171ff227fa | High flip camera move only |
| @Video2 | a/h158-end.mp4 (4.5 s) | cae62718-ec02-41f6-8e36-1de097e8427d | end screen picture only |
| @Audio1 | a/voice-serene.mp3 (11.44 s) | 4b121290-c867-44a1-8dc3-6046fb0efb15 | shopper timbre |
| @Audio2 | a/voice-alexandra-9s.mp3 (9.20 s) | 304653bb-2310-4d21-90d4-c32b92477717 | owner timbre |
| @Audio3 | a/voice-scout.mp3 (4.50 s) | 1040c108-8833-40b5-a3f0-943deab45436 | Scout timbre |

Totals: 9 images, 2 videos (9.5 s), 3 audio (25.14 s), 14 uploads; under the hard limits. Every id returned HTTP 200 on `https://d2ol7oe51mr4n9.cloudfront.net/user_398kORxw9vOlFFTUC4yYsMhV0Fj/<id>.<ext>` on Nov 15 (see H241-assets.txt). Every uploaded asset has a role, so no 【Unused Assets】 line.
Audio transcripts (Deepgram, H225): @Audio1 beach-house chat, @Audio2 stone-fruit tasting line, @Audio3 and @Video2's own track = the end line. Each audio line says "do not use its words or pacing"; @Video2 says "do not use its sound, spoken words or pacing".

## Dialogue diff
`diff <(grep -oE '\{[^}]*\}' prompt-sd25pe-final.pre-h241.txt) <(grep -oE '\{[^}]*\}' prompt-sd25pe-final.txt)`: no output, the 5 lines are byte-identical and in the same order (also identical to STORY.md's 5 lines). No new dialogue.
1. {Are these safe for cats?} · shopper, inner voice, lips closed · 5-8s
2. {I guess we'll never know.} · shopper, inner voice, lips closed · 10-13s
3. {I guess no one's interested in Fig and Cedar. No one wants this. Time to discontinue the product line.} · owner, on camera · 15-21s
4. {Don't guess why your shoppers don't buy.} · Scout, off screen · 23-25s
5. {Scout interviews your shoppers for you. Get free early access.} · Scout, off screen · 25-30s

## Non-Negotiable Principles 1-11
| # | Principle | Result | Proof |
|---|---|---|---|
| 1 | Intent First | PASS | Same 3 people, one cat, one Fig & Cedar jar, same causality, now stated as Emile's plot: "is about to buy it, but its product page never says whether it is safe for cats ... so she can't and leaves without buying. The owner sees only the missing sales, wrongly concludes nobody wants Fig & Cedar, and surprisingly discontinues the line on that wrong premise". Candle contrast is Emile's ask, not an invention. |
| 2 | Template First | PASS | Generation-with-references template plus storyboard module: 【Generation Goal】, 【Reference Asset Roles】, 【Subjects and Relationships】, 【Shots】, 【Style and Sound】, 【Maintain Consistency】. |
| 3 | Account for Every Asset | PASS | 14 uploads, 14 role lines (prompt lines 5-18), each with what to take and what not; none unassigned, so no 【Unused Assets】. |
| 4 | User Mapping First | PASS | Mappings follow STORY.md and Emile's 2:10 rule: "Swap ... apartment-candles-v2.jpg" = @Image3; "Fig & Cedar = the amber three-wick jar, only on the product page and in the owner's studio" = @Image4 + @Image9 only. |
| 5 | Minimal Clarification | PASS | Nothing ambiguous; no questions. |
| 6 | Submission-Ready Content Only | PASS | No notes, media ids, model names, card numbers or reasons in the prompt. |
| 7 | Separate Parameters | PASS | `grep -niE '9:16|vertical|480p|720p|fps|aspect|seconds long|30-second'` returns nothing; only STORY.md's own shot ranges (0-3s ... 25-30s). |
| 8 | No Unrequested Constraints | PASS | Negatives are Emile's (no ka-ching, no cart sound, no Add-to-cart click, lips closed for inner voice), asset fences, and "No subtitles appear on screen" (the skill's own rule). "clearly unlike the amber three-wick Fig & Cedar jar" is Emile's ask ("make sure that Fig and Cedar ... look and feel different"). The gate line is the routing declaration. |
| 9 | One Best Version | PASS | One prompt in prompt-sd25pe-final.txt. |
| 10 | Facts vs Observations | PASS | Plot facts (about to buy, missing cat-safety answer, wrong conclusion, discontinues) come from Emile's text; "white pillar candles and tea lights", "amber three-wick jar", "blank kraft label" are what the images show. |
| 11 | Subject Cardinality | PASS | One image per person: shopper @Image2, owner @Image6; cat @Image5 alone; room @Image3 has no person or cat. |

## Final Checklist
| # | Item | Result | Proof |
|---|---|---|---|
| 1 | One primary task | PASS | Video generation only. |
| 2 | Subjects, counts, scene, ownership, outcome unchanged | PASS | One shopper, one cat, one owner, one jar: "the one Fig & Cedar jar (@Image9) lit beside her laptop"; "The amber jar is only on the shopper's screen (@Image4) and the owner's desk"; @Image7: "do not use any of its jars ... the only jar is @Image9". She leaves without buying; the candle ends blown out. |
| 3 | Every required entity covered, none merged | PASS | Shopper @Image2, cat @Image5, apartment @Image3, her screen @Image4, owner @Image6, studio @Image7, her screen @Image8, jar @Image9, flip @Video1, end screen @Video2, voices @Audio1-3. |
| 4 | Each used asset has one explicit role | PASS | One role line each (lines 5-18). |
| 5 | Existing references kept | PASS | Same numbering as the approved H225 prompt; only the files behind @Image1, @Image3, @Image6 changed. |
| 6 | No claims about unread assets | PASS | All opened: stills viewed (see "What I opened and saw"), videos probed (5.000 s, 4.501 s), audio transcribed. |
| 7 | No forced irrelevant assets; unused listed | PASS | Only the 14 role assets are uploaded. |
| 8 | Inaccessible assets not treated as understood | PASS | None inaccessible; the dead owner id was re-uploaded and verified byte-identical. |
| 9 | Subjects mapped individually | PASS | One line per subject; no range mapping. |
| 10 | Single-character image not defining two characters | PASS | @Image2 only the shopper, @Image6 only the owner. |
| 11 | One state change per stage, end state | PASS | One change per shot; end states where the next cut depends on them (P1 closer on her, P10 wicks smoke, P12 end screen holds). |
| 12 | User time ranges kept | PASS | STORY.md's 10 ranges kept; P6-7 and P8-9 sub-times named. |
| 13 | Editing checklist | N-A | Not an editing task. |
| 14 | Locked parameter rules | PASS | Generation task; ratio and duration on the job only. |
| 15 | Extension | N-A | Not an extension. |
| 16 | First/last frame statements | N-A | No keyframes. |
| 17 | Multiple keyframes | N-A | None. |
| 18 | Storyboard: reading order, panel roles, what not to adopt | PASS | Line 5: "Read it left to right, top to bottom, each panel to the time range named in its shot; do not adopt its line-art style, white background, panel numbers or drawn faces." Every shot names its panel(s). |
| 19 | Blockout | N-A | None. |
| 20 | Emotion and camera terms observable | PASS | Annoyance = "jaw tight, a sharp exhale through her nose ... she rubs her brow"; High flip = "rises over ... looks straight down, the back of the sofa sweeps across the frame as the view flips, and it comes out level on the owner (@Image6) at her desk in the studio (@Image7)". |
| 21 | Speaker, state, words, audio, language, on/off screen per line | PASS | Every line: speaker, "in English", inner voice/on camera/off screen, "in the voice of @AudioN"; shopper lines "lips closed". No accent added. |
| 22 | Shot numbers kept as identifiers | PASS | "Panel N" is a panel number. |
| 23 | No parameters, analysis or reasons | PASS | See principles 6 and 7. |
| 24 | Gate line exactly once, only when triggered | PASS | Triggered: 5.0 s and 4.5 s reference videos in a 30 s job. `grep -c 'Please note that this is not video editing.'` = 1, right after the goal sentence "Generate a photoreal story in the storyboard's order (@Image1)." |
| 25 | Unreadable video specs | N-A | Both probed. |
| 26 | No unrelated negative constraints | PASS | See principle 8. |
| 27 | Placeholders replaced, one prompt body | PASS | No `<placeholder>`; `<>` only sounds (<a short sharp exhale>, <a soft breath>); `()` only music (Soft piano under speech.) apart from @asset tags; `{}` only the 5 lines. |

## Which ONE @asset defines each person and thing, per shot
| Time · Panel | Shopper | Cat | Owner | Room | Screen | Jar | Move / picture | Voice |
|---|---|---|---|---|---|---|---|---|
| 0-3s · P1 | @Image2 | @Image5 | — | @Image3 | — | — | — | — |
| 3-5s · P2 | @Image2 | — | — | — | @Image4 | — (only its photo on @Image4) | — | — |
| 5-8s · P3 | @Image2 | @Image5 | — | @Image3 | — | — | — | @Audio1 |
| 8-10s · P4 | @Image2 | — | — | — | @Image4 | — | — | — |
| 10-13s · P5 | @Image2 | @Image5 | — | — | (empty browser, words) | — | — | @Audio1 |
| 13-15s · P6-7 | @Image2 | — | @Image6 | @Image3 → @Image7 | — | — | @Video1 | — |
| 15-21s · P8-9 | — | — | @Image6 | @Image7 | @Image8 | @Image9 | — | @Audio2 |
| 21-23s · P10 | — | — | @Image6 | — | — | @Image9 | — | — |
| 23-25s · P11 | — | — | — | @Image7 | — | @Image9 | — | @Audio3 |
| 25-30s · P12 | — | — | — | — | — | — | @Video2 | @Audio3 |

At most one asset per column per row (the flip row starts in @Image3 and lands in @Image7, one room at a time). Her home candles come only from @Image3 (white pillars, tea lights); the amber jar only from @Image9 (and its photo inside @Image4).

## Result
Principles 1-11: 11 PASS. Final Checklist: 27 items, 21 PASS, 6 N-A. Zero FAILs.
Spend: 0 credits (board panels redrawn free via Codex/local, uploads free, no generation).
