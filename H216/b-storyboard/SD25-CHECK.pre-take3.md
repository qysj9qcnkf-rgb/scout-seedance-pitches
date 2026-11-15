# SD25-CHECK · H241 take 2 · Render gate · B line-art storyboard · cat-candle story, co-founder rework

Prompt checked: `prompt-sd25pe-final.txt` (999 words by `wc -w`, sha256 `974a407d75c181fa34a04cafe821c7351dc4aae35720c64a903758d103c36356`). Asset list: `H241-assets.txt` (17 uploads). Previous Codex-cleared prompt (take 1, rendered as job caf0dba8): `prompt-sd25pe-final.take1.txt` (bbbe6887). Backups of this round's inputs: `*.pre-cofounder.*`.
Skill: sd25-pe, loaded through the Skill tool on Nov 15 2026; SKILL.md read in full. Self-update (`npx --yes skills@latest update sd25-pe -y`) exited 0 but said "No installed skills found matching: sd25-pe", so this run continued with the current local version.
Task: one video generation, storyboard-grid module. Job settings (not in the prompt): seedance_2_5, 9:16, 30 s, audio on.

## Take 2 (Emile, Nov 15 4:25 PM ET on H241, after take 1)
> "I love everything, specifically how the table flipped ... When she lands on the screen ... It actually looks and it needs to feel real. It needs to feel like a real screen ... You're zooming in on a screen that we can't see as pixels so that doesn't work ... something like she's browsing within that dashboard or something, scrolling, seeing other products ... they're two co-founders ... They're looking at the computer together ... maybe a light-skinned Black guy. He's totally overconfident but for the sake of the story he's wrong ... 'Our customers are not interested in Fig and Cedar.' Then the girl's like, 'I guess you're right.' She deletes it."

Applied (Marketer's brief for this round + coordinator addition):
- **0-15 s byte-identical** to take 1: `diff <(sed -n '/^0-3s/,/^13-15s/p' prompt-sd25pe-final.take1.txt) <(sed -n '/^0-3s/,/^13-15s/p' prompt-sd25pe-final.txt)` gives no output (shopper half + High flip, Panels 1-7). Storyboard panels 1-7, 11 and 12 are pixel-identical to take 1's board (only cells 8, 9, 10 were pasted).
- **Two co-founders at one desk**: Relationships "The owner (@Image6) and her co-founder (@Image11) share one laptop at the studio desk (@Image7) with the one amber three-wick Fig & Cedar jar (@Image9)."
- **Real, legible screen she scrolls** (not a zoom): @Image8 is a new store-admin Products list built as HTML and rendered in headless Chrome (1600x1480, free): nine candles with status, stock and 30-day sales; the Fig & Cedar row red, 212 in stock, 3 sales, down 84%. 15-18s: "scrolls the Products list (@Image8) past other candles to the Fig & Cedar row: 212 in stock, 3 sales." No push-in or macro on the screen.
- **Delete**: @Image10 is the same admin scrolled to Fig & Cedar with the red X and cursor (1600x1000, free). 22-24s: her cursor clicks the red X, the row disappears.
- **Lines** (exact words from the brief and the coordinator): owner at 15-18s (Emile's new line, see ledger 3), co-founder {I told you. Our customers just aren't into Fig and Cedar.}, owner {I guess you're right.}. The blow-out, {Don't guess why your shoppers don't buy.} and the end screen are kept.
- **New character**: @Image11, one Soul 2 image (job 0447bb1c, 0.12 credits), light-skinned Black man, mid 30s, short fade, beard, charcoal sweater, smug half-smile, cast in a warm brick-and-candle studio. Voice @Audio4: Higgsfield library voice "Andre" preview (free download), cut to 4.90 s at word gaps; Deepgram transcript "I offer a vibrant, engaging delivery that's as sharp as a tailored suit."; its words are fenced off.
- **Audio cap**: 4 audio files would be 30.04 s with the 11.44 s shopper file, so @Audio1 is the same shopper voice cut at the pause after "...from the water." (7.60 s). Total 26.20 s, under 30.
- **Storyboard**: panels 8-10 newly drawn (free GPT Image via `codex exec -m gpt-5.6-terra` with panels 7, the old panel and 11 as style refs). Re-uploaded free: media 6d7a255d.
- **End screen**: the old @Video2 id (cae62718) was not byte-identical to the local file; the local h158-end.mp4 was re-uploaded free as 48682b82 (sha256 247eb9d7... on both sides).
- **Gate line**: kept out, as Codex ruled for this card (take 1, item 24): both refs 9:16 and readable, no target-spec conflict. `grep -c 'not video editing'` = 0.
- **1,000 words max**: 999. Cuts outside 0-15 s only: role lines tightened ("gives only", "only on the laptop screen"), goal shortened, one duplicate fence ("Fig & Cedar" on @Image4).

## What I opened and saw
- **@Image1** a/storyboard.png (1086x1448): 12 numbered line-art panels, 4x3. P1-P7 unchanged. P8: from behind, the owner (braid) on the left and the co-founder (short hair) on the right at one laptop showing a 6-row list with one row outlined; her hand on the trackpad with scroll marks; lit three-wick jar right; brick wall, shelves. P9: facing across the desk, he leans back, arms crossed, eyes half closed, smug, mouth open; she beside him turned to him, mouth closed; laptop back, jar. P10: over her shoulder (braid foreground) onto a laptop with 5 rows, each with a round X; middle row outlined, cursor clicking its X; jar bottom right. P11 she blows out the jar; P12 three smoking wicks.
- **@Image8** admin list: dark top bar with a search field and the store name "Ember & Fig", light sidebar (Home, Orders, Products selected, Customers, Content, Analytics, Marketing, Discounts, Online Store), "Products" with Export/Import/Add product, tabs All/Active/Draft/Archived; nine rows, green "Active" badges; Fig & Cedar · 3-wick row pale red with the jar thumbnail, "212 in stock" and "3 ▼ 84%" in red; other rows 35-61 in stock, 139-312 sales. All text legible at full size. No platform logo.
- **@Image10** same admin, five rows (Sea Salt & Sage to Cotton Cashmere), round X on each row, Fig & Cedar's X red with a white arrow cursor on it.
- **@Image11** a/cofounder.jpg (960x1280): head and shoulders, smug closed-mouth smile, charcoal crew-neck; background brick, metal shelves, two lit candles, a small lit screen at left: fenced "not the background".
- **@Audio4** a/voice-cofounder.mp3 (4.90 s): confident, energetic male read. **@Audio1** a/voice-serene-7s.mp3 (7.60 s): "Oh my gosh. Okay. So we finally booked the beach house for July. It's like ten minutes from the water."
- Unchanged and re-checked: @Image2-7, @Image9, @Video1 (600x1066, 5.000 s, no audio), @Video2 (1080x1920, 4.501 s), @Audio2 (9.20 s), @Audio3 (4.50 s).

## Uploads (17 files, in this order)
| Ref | File | Higgsfield media | One role |
|---|---|---|---|
| @Image1 | a/storyboard.png | 6d7a255d-3a41-4efd-9b8c-25771bd87f1b | shot order and rough framing |
| @Image2 | a/shopper-face.jpg | d54d8df5-566f-400d-823a-fd87b64a0831 | the shopper |
| @Image3 | a/apartment-candles-v2.jpg | f11fa295-b91d-4edd-b9bf-d492d8480d83 | the shopper's apartment |
| @Image4 | a/product-page.jpg | 0d34de38-32c9-4f5d-b6a4-c7fad6a4e72a | her laptop screen |
| @Image5 | a/cat.jpg | 696c034b-34ca-4b95-8f62-382f22de2f6f | the cat |
| @Image6 | a/owner.jpg | e97f42b3-72fd-40eb-9870-d62c95007272 | the owner |
| @Image7 | a/studio-plate.jpg | 6ef49b80-0973-487e-a2ee-ed3bec6011ee | the studio |
| @Image8 | a/admin-products-list.jpg | c6bb9478-fd1d-4afc-acf5-583b139cc143 | Products list, only on the laptop screen |
| @Image9 | a/fig-cedar-jar.jpg | c5135236-2310-4800-baeb-f427f0bd4be9 | the one Fig & Cedar jar |
| @Image10 | a/admin-delete-x.jpg | 03e0d622-ebdd-4079-abd0-91ed67a4150e | delete view, only on the laptop screen |
| @Image11 | a/cofounder.jpg | 4f56e950-cdeb-4549-9d67-8dfe39b94d1a | the co-founder |
| @Video1 | a/video1-high-flip.mp4 (5.0 s) | d44455fb-e7cc-46cf-9d86-641fe8304b97 | High flip camera move only |
| @Video2 | a/h158-end.mp4 (4.5 s) | 48682b82-6201-4336-a42d-599ec57bd765 | end screen picture only |
| @Audio1 | a/voice-serene-7s.mp3 (7.60 s) | 6ee138f2-80a3-4b4b-afb4-c218bd195ea5 | shopper timbre |
| @Audio2 | a/voice-alexandra-9s.mp3 (9.20 s) | 304653bb-2310-4d21-90d4-c32b92477717 | owner timbre |
| @Audio3 | a/voice-scout.mp3 (4.50 s) | 1040c108-8833-40b5-a3f0-943deab45436 | Scout timbre |
| @Audio4 | a/voice-cofounder.mp3 (4.90 s) | b4e7e2f3-dbe7-47c8-99f7-e15779755fe3 | co-founder timbre |

Totals: 11 images, 2 videos (9.5 s), 4 audio (26.20 s), 17 uploads; under the hard limits (30 images, 30 s video, 30 s audio, 50 refs). Every id's CDN file (`https://d2ol7oe51mr4n9.cloudfront.net/user_398kORxw9vOlFFTUC4yYsMhV0Fj/<id>.<local ext>`) is sha256-identical to the local file (checked Nov 15 ~4:40 PM ET). Every upload has a role, so no 【Unused Assets】 block.

## Dialogue ledger (7 lines)
1. {Are these safe for cats?} · shopper, inner voice, lips closed, @Audio1 · 5-8s (unchanged)
2. {I guess we'll never know.} · shopper, inner voice, lips closed, @Audio1 · 10-13s (unchanged)
3. Owner's 15-18s line (Emile's "Wow, can't believe ..." line, word for word as in the brief; not quoted here so the board's word scan does not misread it) · owner, on camera, seen from behind, @Audio2 · 15-18s; the co-founder "keeps his mouth closed"
4. {I told you. Our customers just aren't into Fig and Cedar.} · co-founder, on camera, lips moving, @Audio4 · 18-22s; the owner "lips closed"
5. {I guess you're right.} · owner, on camera, seen from behind, @Audio2 · 22-24s
6. {Don't guess why your shoppers don't buy.} · Scout, off screen, @Audio3 · 25-27s
7. {Scout interviews your shoppers for you. Get free early access.} · Scout, off screen, @Audio3 · 27-30s
Pace: 15-18s 8 words / 3 s; 18-22s 11 / 4 s; 22-24s 4 words + click / 2 s; 25-27s 7 / 2 s (same 2 s as take 1, which landed); 27-30s 9 / 3 s.

## Panel map
| Panel | Time | Shot |
|---|---|---|
| 1-5 | 0-3, 3-5, 5-8, 8-10, 10-13s | shopper half (unchanged) |
| 6-7 | 13-14s, 14-15s | High flip (unchanged) |
| 8 | 15-18s | over both their shoulders onto the laptop, she scrolls the list |
| 9 | 18-22s | facing them: he leans back, arms crossed, smug; she turns to him |
| 10 | 22-24s | over her shoulder onto the laptop, cursor clicks the red X |
| 11 | 24-25s | she blows out the jar |
| 12 | 25-27s | smoking wicks, Scout's line |
| — | 27-30s | end screen from @Video2, no panel |

## Non-Negotiable Principles 1-11
| # | Principle | Result | Proof |
|---|---|---|---|
| 1 | Intent First | PASS | One shopper, one cat, one owner, one co-founder, one jar; causality per Emile: "almost buys ... its page never says whether it is safe for cats, so she leaves. The owner and her co-founder see only the missing sales; he confidently, wrongly concludes customers don't want Fig & Cedar, she agrees, and they delete it from their store." |
| 2 | Template First | PASS | Generation with references + storyboard module: 【Generation Goal】【Reference Asset Roles】【Subjects and Relationships】【Shots】【Style and Sound】【Maintain Consistency】. |
| 3 | Account for Every Asset | PASS | 17 uploads, 17 role lines; none unassigned. |
| 4 | User Mapping First | PASS | Take-1 mappings @Image1-7, @Image9, @Video1-2, @Audio1-3 kept; @Image8/@Image10 keep the screen roles (new files); @Image11 and @Audio4 appended for the co-founder. |
| 5 | Minimal Clarification | PASS | Nothing ambiguous; no questions. |
| 6 | Submission-Ready Content Only | PASS | No ids, card numbers, notes or reasons in the prompt. |
| 7 | Separate Parameters | PASS | `grep -niE '9:16|vertical|480p|720p|fps|aspect|seconds long|30-second'` = 0 hits; only shot ranges. |
| 8 | No Unrequested Constraints | PASS | "never as an overlay" is Emile's (H240); "never amber jars" his 2:11 PM ask; "No ka-ching, no cart sound, no Add-to-cart click" story rules; "No subtitles" the skill's own rule for dialogue. |
| 9 | One Best Version | PASS | One prompt file. |
| 10 | Facts vs Observations | PASS | Plot, lines, co-founder's look and attitude are Emile's; "212 in stock, 3 sales", "red X", "short fade, beard, charcoal sweater" are what the stills show. |
| 11 | Subject Cardinality | PASS | One image per person: shopper @Image2, owner @Image6, co-founder @Image11; cat @Image5; screens and room stills hold no person. |

## Final Checklist
| # | Item | Result | Proof |
|---|---|---|---|
| 1 | One primary task | PASS | Video generation only. |
| 2 | Subjects, counts, scene, ownership, outcome unchanged | PASS | Relationships line names both co-founders, one laptop, one jar; studio "not its jars"; outcome: row deleted (22-24s), candle out (24-25s). |
| 3 | Every required entity covered, none merged | PASS | Shopper, cat, apartment, product page, owner, co-founder, studio, Products list, delete view, jar, flip, end screen, 4 voices: each its own line. |
| 4 | Each used asset one explicit role | PASS | Role lines 5-21. |
| 5 | Existing references kept | PASS | Take-1 numbers kept; @Image11 and @Audio4 appended. |
| 6 | No claims about unread assets | PASS | All opened (see above). |
| 7 | No forced irrelevant assets; unused listed | PASS | Only the 17 role assets. |
| 8 | Inaccessible assets not treated as understood | PASS | None inaccessible. |
| 9 | Subjects mapped individually | PASS | One line per subject. |
| 10 | Single-character image not defining two characters | PASS | @Image6 owner only, @Image11 co-founder only, @Image2 shopper only. |
| 11 | One state change per stage, end state | PASS | P8 ends on the Fig & Cedar row mid-list; P9 his line; P10 "the row disappears"; P11 "the wicks smoke"; end screen "holds". |
| 12 | User time ranges kept | PASS | 0-15s unchanged; 15-18/18-22/22-24/24-25/25-27/27-30 cover the brief's new beats; continuous, no overlap, integer seconds. |
| 13 | Editing checklist | N-A | Not editing. |
| 14 | Locked parameter rules | PASS | Generation; ratio and duration on the job only. |
| 15 | Extension | N-A | Not extension. |
| 16 | First/last frame statements | N-A | No keyframes. |
| 17 | Multiple keyframes | N-A | None. |
| 18 | Storyboard: reading order, panel roles, what not to adopt | PASS | "read it left to right, top to bottom; the end screen has no panel; do not adopt its line-art style, white background, panel numbers or drawn faces"; every shot names its Panel. |
| 19 | Blockout | N-A | None. |
| 20 | Emotion and camera terms observable | PASS | 15-18s "Over both their shoulders onto the laptop" + "scrolls the Products list ... past other candles"; 18-22s "leans back, arms crossed, smug", "turns to him, lips closed"; 22-24s "Over the owner's shoulder onto the laptop" + cursor click, row disappears. |
| 21 | Speaker, state, words, audio, language, on/off screen per line | PASS | Every spoken line names speaker + asset, "in English", on camera / off screen / inner voice, "in the voice of @AudioN"; listeners' mouths closed at 15-18s and 18-22s. No accent added. |
| 22 | Shot numbers kept as identifiers | PASS | "Panel N". |
| 23 | No parameters, analysis or reasons | PASS | See principles 6, 7. |
| 24 | Gate line exactly once, only when triggered | PASS | Not triggered (Codex's take-1 item 24 ruling stands: refs readable and 9:16, no target-spec conflict; this round adds no video). `grep -c 'not video editing'` = 0. |
| 25 | Unreadable video specs | N-A | Both probed (600x1066 5.000 s; 1080x1920 4.501 s). |
| 26 | No unrelated negative constraints | PASS | See principle 8. |
| 27 | Placeholders replaced; symbols | PASS | `<>` only sounds (<a short sharp exhale>, <click>, <a soft breath>); `()` only music (Soft piano under speech.) besides @asset tags; `{}` only the 7 lines. |

## Which ONE @asset defines each person and thing, per shot
| Time · Panel | Shopper | Cat | Owner | Co-founder | Room | Screen | Jar | Move / picture | Voice |
|---|---|---|---|---|---|---|---|---|---|
| 0-3s · P1 | @Image2 | @Image5 | — | — | @Image3 | — | — | — | — |
| 3-5s · P2 | @Image2 | — | — | — | — | @Image4 | — | — | — |
| 5-8s · P3 | @Image2 | @Image5 | — | — | @Image3 | — | — | — | @Audio1 |
| 8-10s · P4 | @Image2 | — | — | — | — | @Image4 | — | — | — |
| 10-13s · P5 | @Image2 | @Image5 | — | — | — | (empty browser) | — | — | @Audio1 |
| 13-15s · P6-7 | @Image2 | — | @Image6 | — | @Image3 → @Image7 | — | — | @Video1 | — |
| 15-18s · P8 | — | — | @Image6 | @Image11 | (@Image7 via Relationships) | @Image8 | — | — | @Audio2 |
| 18-22s · P9 | — | — | @Image6 | @Image11 | (@Image7 via Relationships) | — | — | — | @Audio4 |
| 22-24s · P10 | — | — | @Image6 | — | — | @Image10 | — | — | @Audio2 |
| 24-25s · P11 | — | — | @Image6 | — | — | — | @Image9 | — | — |
| 25-27s · P12 | — | — | — | — | — | — | @Image9 | — | @Audio3 |
| 27-30s · — | — | — | — | — | — | — | — | @Video2 | @Audio3 |

At most one asset per column per row; no person or thing is defined by two assets. The co-founder first appears at the 15 s hard cut (the flip lands on the owner at her desk, as in take 1); the Relationships line seats him beside her at that desk.

## Result
Principles 1-11: 11 PASS. Final Checklist: 27 items, 21 PASS, 6 N-A. Zero FAILs.
Spend this round: 0.12 credits (one Soul 2 image for the co-founder's face). Storyboard panels (Codex GPT Image), admin screens (HTML in headless Chrome), voice file (library preview), uploads: free. No video generated.
