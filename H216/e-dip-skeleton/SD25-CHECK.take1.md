# SD25-CHECK · H228 · E: The Dip as the skeleton, Emile's Nov 15 story

Checked against ByteDance's `sd25-pe` skill (`~/ClaudeCowork/marketer/.claude/skills/sd25-pe/SKILL.md`, v0.1.1, read in full this session, lines 1-996; the self-update command ran earlier this session and reported no installed copy to update, so the local copy is used).
Prompt: `prompt-sd25pe-final.txt` (1,000 words by `wc -w`, after the two fresh checks and Emile's 2:11 PM and 2:35 PM additions; earlier texts `prompt-sd25pe-final.pre-diploop.txt`, `.pre-1411.txt`, `.pre-1435.txt`; previous check `SD25-CHECK.pre-1435.md`). Job plan: `job-plan.json`. Assets: `a2/` (13 files). Previous High-flip version: `bak-pre-dip/`.
Task type: **video generation with reference assets + a coarse blockout** (skill "Blockout References and Rendering → Coarse Blockout"). Not editing, not extension, no keyframes, no storyboard.
Why: Emile, 2:02 PM: "You say The Dip skeleton but this one looks exactly like 227. I don't even see the Dip in the files being referenced." E now sends The Dip as @Video1; the High flip clip (D's technique) is not sent.

## Story contract (Emile, Nov 15, 1:00 PM)
Cat lady, candles everywhere, cat nearby; scrolls the Fig & Cedar page up and down; inner voice, lips closed, camera around her: {Are these safe for cats?}; annoyed (visual); closes the site: {I guess we'll never know.} → rotation down to the owner → {I guess no one's interested in Fig and Cedar. No one wants this. Time to discontinue the product line.} → blows out the candle → Scout {Don't guess why your shoppers don't buy.} → end screen {Scout interviews your shoppers for you. Get free early access.} No ka-ching, no call scene.
Updated by Emile on H240, 2:35 PM (every cat-candle ad): owner lines are now {Wow, Fig and Cedar totally failed.} {Looks like no one's interested in Fig and Cedar.}; she deletes Fig & Cedar with X, then blows out the jar as Scout's line lands; sales on her laptop's own screen; clean H158 end screen.

## Assets inspected (every one opened)
| Ref | File | What it really is | Spec / media |
|---|---|---|---|
| @Image1 | a2/image1-shopper.png | Woman, dark-brown bob with bangs, cream cardigan, at a laptop; room, lamp, tabby, small candle behind | 880x1168 · 6863aea3 (free re-upload, sha256 = local) |
| @Image2 | a2/image2-shopper-apartment.png | Empty night living room, sofa, coffee table + laptop, lamp, ~20 lit white/cream pillar candles and tea lights (no jars, no amber glass — Emile 2:11 PM), cat bed; no people/animals/text | 941x1672 · d006adfc (free edit + upload) |
| @Image3 | a2/image3-cat.jpg | Grey tabby only, standing; sofa behind | 436 px wide · 696c034b |
| @Image4 | a2/image4-product-page.png | Ember & Fig product page, Fig & Cedar $38, Burn time/Size/Wax rows, no pet info; mouse pointer painted out | 1600x1000 · 4e666139 |
| @Image5 | a2/image5-owner.png | Woman, auburn side braid, rust sweater | 1536x2048 · c36aaeb4 (free re-upload, sha256 = local) |
| @Image6 | a2/image6-owner-studio.png | Sunlit studio, brick, shelves of lit jars, desk, laptop, a tall labelled jar (fenced) | 752x1344 · f7d402a0 (free re-upload, sha256 = local) |
| @Image7 | a2/image7-owner-sales.png | Products · units sold; Fig & Cedar row red, 3, -84% | 1600x1000 · 8c33aad5 |
| @Image8 | a2/image8-fig-cedar-jar.png | The page's jar photo: short, wide amber, three wicks, kraft label; fig leaves, linen | 660x660 · a6be392e |
| @Video1 | a2/video1-dip-skeleton.mp4 | The Dip (H174), grey + blurred, no audio. Cuts (scene detect + 2 fps sheet): 0-1.4 desk phone + notification cards · 1.4-4.5 woman at desk with laptop + jar (medium) · 4.5-5.8 push into laptop · 5.8-6.8 five flash cuts (product page, jar) · 7-8.6 woman medium, phone · 8.6-11 orb flies out the window over a city, globe · 11-12 man in kitchen (wide) · 12-15.6 frontal medium on the man with a waveform card · 15.6-17.8 over-the-shoulder with cards and "birthday candle" text · 17.8-19.4 over-the-shoulder, chat bubbles, paper · 19.4-21 woman holding jar + phone to camera · 21-22.4 hand, jar, mug insert · 22.4-23.2 product-page insert · 23.2-25 punch-in on woman's face with jar | 25.00 s, 480x854 · 419879cc |
| @Video2 | a2/video2-end-screen.mp4 | Scout end screen; its voice says the end line | 4.50 s, 1080x1920 · b2587db7 (free re-upload, sha256 = local) |
| @Audio1 | a2/audio1-shopper-voice.mp3 | Calm woman's voice | 9.00 s · 4203dd9a |
| @Audio2 | a2/audio2-owner-voice.mp3 | Alexandra, warm | 10.00 s · 181644ae |
| @Audio3 | a2/audio3-scout-voice.mp3 | Video2's line | 4.50 s · 390b5a38 |

## a) Final Checklist (SKILL.md 961-987)
1. One primary task. **PASS**: "Generate a warm, realistic film in two homes…".
2. Subjects/counts/ownership/outcome unchanged. **PASS**: two women, one cat, one jar on the owner's desk; "nothing bought"; candle blown out; Scout's lesson.
3. Required entities covered. **PASS**: shopper @Image1, apartment @Image2, cat @Image3, page @Image4, owner @Image5, studio @Image6, sales @Image7, jar @Image8, skeleton @Video1, end @Video2, voices @Audio1-3.
4. One unique role per asset. **PASS**: 13 role lines, one entity each; @Video1 "only for cut points, shot sizes, camera moves and pacing".
5. References unchanged/not invented. **PASS**: 13 refs = 13 uploads in job-plan order.
6. **N/A**. 7. **PASS**: every uploaded asset has a role; no unused set, so no 【Unused Assets】 (line 213).
8. **N/A**. 9. **PASS**: individual mappings. 10. **PASS**: one image per woman.
11. One primary state change + end state per stage. **PASS**: all 13 segments end "At the end, …"; 7-9s primary change = site closed; 18-19s = row deleted; 21-25s = candle out.
12. Time ranges continuous. **PASS**: 0-2, 2-4, 4-6, 6-7, 7-9, 9-11, 11-12, 12-16, 16-18, 18-19, 19-21, 21-25, 25-30. They are the script's own timed shot list, laid on @Video1's measured cuts (1.4→2, 5.8→6, 8.6→9, 15.6→16, 17.8→18, 19.4→19, 21.0→21, 23.2 inside 21-25); not invented from the 30 s parameter (line 531).
13-18. **N/A**.
19. Blockout identified coarse/fine with mapping and exclusions. **PASS**: "@Video1 is a coarse-blockout reference, 0-25s. Use it only for cut points, shot sizes, camera moves and pacing; do not adopt its grey blurred look, people, rooms, phones, cards, orb, city, globe, mug or text." 【Blockout Mapping】 maps every object by time range (below).
20. Observable emotion/camera. **PASS**: "annoyed, exhales through her nose"; flip = "rises above… flips over the sofa back until it fills the frame, and comes down out of it into… the owner's sunlit studio".
21. Speakers. **PASS**: each line speaker + @Audio + "in English" + on/off screen; shopper "lips closed"; owner "lips closed" during Scout; no accent.
22. **PASS**. 23. **PASS**: no ratio/duration/resolution.
24. Gate line. **PASS**: @Video1 25 s and @Video2 4.5 s ≠ 30 s output → "Please note that this is not video editing." once, after the goal.
25. **N/A**. 26. **PASS**: "No ka-ching" is Emile's ask. 27. **PASS**.

## b) Principles 1-11
1 PASS (his story, six lines exact; the camera circling her at 2-4s and the flip at 9-11s are his asks, stated as the two named exceptions to @Video1's moves) · 2 PASS (coarse-blockout + reference template) · 3 PASS · 4 PASS · 5 PASS · 6 PASS · 7 PASS · 8 PASS · 9 PASS · 10 PASS · 11 PASS.

## c) Coarse-blockout template (skill 784-805)
- Declared coarse, dimensions limited, look excluded. **PASS**.
- Every blockout object mapped (line 788 "Map every geometric object individually"). **PASS**:
| @Video1 time | Blockout object | Maps to |
|---|---|---|
| 0-2s | desk phone | shopper's laptop screen @Image4 |
| 0-2s | notification cards | unused |
| 2-9s | figure | shopper @Image1 |
| 2-6s | laptop / jar | her laptop / one of her small candles (@Image2) |
| 6-7s | flash cuts | @Image4 rows, her candle, the cat @Image3, her eyes @Image1 |
| 7-9s | phone | unused |
| 9-11s | orb, window, city, globe | unused; only the rising camera path kept |
| 11-19s / 19-25s | man / woman | both the owner @Image5 |
| 12-18s | waveform card, "birthday candle" text | her screen @Image7; words unused |
| 18-19s | chat bubbles | her screen @Image7; words unused |
| 18-19s | paper | unused |
| 19-25s | jar | @Image8 |
| 19-22s | phones | unused |
| 21-22s | mug | unused |
| 22-23s | product page | @Image7 |
- Scene-by-scene activation: each segment names its @Video1 move ("@Video1's macro", "medium", "push-in", "five flash cuts", "wide", "medium", "over-the-shoulder", "inserts, then its punch-in"). **PASS**.

## d) Shot ledger: the ONE @asset per person, object and move
| Time | Move | People | Objects | Line | Verdict |
|---|---|---|---|---|---|
| 0-2 | @Video1 macro | shopper @Image1 (finger) | screen @Image4 | — | PASS |
| 2-4 | @Video1 medium; camera circles (named) | @Image1 | room @Image2, cat @Image3 | @Audio1 {Are these safe for cats?} | PASS |
| 4-6 | @Video1 push-in | @Image1 | @Image4 | — | PASS |
| 6-7 | @Video1 flash cuts | @Image1 (eyes) | @Image4, cat @Image3, white candle (@Image2) | — | PASS |
| 7-9 | @Video1 medium | @Image1 | @Image4, @Image3 | @Audio1 {I guess we'll never know.} | PASS |
| 9-11 | "a flip" on @Video1's rising path | @Image1 → studio @Image6 | — | — | PASS |
| 11-12 | @Video1 wide | owner @Image5 | studio @Image6, laptop, jar @Image8 | — | PASS |
| 12-16 | @Video1 medium; camera orbits her, laptop at centre (named) | @Image5 | sales @Image7 on the laptop's own screen | @Audio2 {Wow, Fig and Cedar totally failed.} | PASS |
| 16-18 | @Video1 over-the-shoulder | @Image5 | @Image7 red row | @Audio2 {Looks like no one's interested in Fig and Cedar.} | PASS |
| 18-19 | @Video1 over-the-shoulder, close on screen | (her cursor) | @Image7: X clicked, row disappears | — | PASS |
| 19-21 | @Video1 medium | @Image5 | @Image8 | — | PASS |
| 21-25 | @Video1 inserts + punch-in | @Image5 | @Image8 blown out as the line lands, @Image7 without the row | @Audio3 {Don't guess why your shoppers don't buy.} | PASS |
| 25-30 | hard cut, clean | — | @Video2 exactly | @Audio3 {Scout interviews your shoppers for you. Get free early access.} | PASS |
Cause before reaction: page with no pet info (4-6s) before her annoyance (7-9s); red row on her own screen (12-16s) before "Wow…" and the frown. **PASS**.

## e) Dialogue ledger
Shopper (kept): {Are these safe for cats?} · {I guess we'll never know.} Owner (Emile on H240, 2:35 PM, for every cat-candle ad; no "I guess"): {Wow, Fig and Cedar totally failed.} · {Looks like no one's interested in Fig and Cedar.} Scout: {Don't guess why your shoppers don't buy.} · {Scout interviews your shoppers for you. Get free early access.} All exact. No ka-ching; no call scene; no orb. **PASS**.

## f) Limits
8 images · 2 videos 29.5 s (≤30) · 3 audio 23.5 s (≤30) · 13 total · 1,000 words (≤1,000). **PASS**.

## Two fresh-context checks (Nov 15) and fixes
Check 1 (Goal fit YES, FAIL): mapping times wrong (chat bubbles 17.8-19.4, two figures 11-19 man / 19-25 woman, unmapped paper); 18-21 crossed the 19.4 s cut. Fixed: mapping rewritten as above; 18-19 over-the-shoulder + 19-21 medium; flash-cut cat/eyes mapped; "(soft guitar begins)" cut for words.
Check 2 (Goal fit YES, FAIL): "the High flip" named D's technique with no asset → "a flip"; 12-16 said "slow push-in over the shoulder" but the skeleton is a frontal medium there → "@Video1's medium… laptop screen (@Image7) showing the red row"; risk the 23-25 s skeleton jar is lit → "the jar stays unlit after 21s"; this file's cut times and self-update claim corrected.
Known risk (not a rule FAIL): @Video1 is The Dip greyed and blurred, not simple geometry; faces and some text are half-readable. The role line fences "its grey blurred look, people, rooms, phones, cards, orb, city, globe, mug or text".

## Emile's 2:11 PM additions (all cat-candle ads), folded in
- Plot in 【Generation Goal】: "a shopper is about to buy the Fig & Cedar candle but can't, because the page never says whether it is safe for cats; the owner, seeing only slow sales, surprisingly cuts the line on the wrong insight". Checklist 2/Principle 1 still PASS (same story).
- Her candles look different from Fig & Cedar: @Image2 re-made with white/cream pillars and tea lights, no jars; role line "many lit white and cream pillar candles and tea lights; no jars"; 2-4s "white candles all around"; mapping "the jar one of her white pillar candles"; @Image8 (amber three-wick jar) "Only on her screen and in the studio". @Image1's own small background candle stays fenced ("not the room, candle, laptop or cat"). PASS.

## Emile's 2:35 PM changes (on H240, for every cat-candle ad), folded in
- Owner half: her sales are on her laptop's own screen, never an overlay ("is on the laptop's own screen, never floating"; mapping "her laptop screen (@Image7), never an overlay"). PASS.
- More short owner shots on the Dip cuts (11-12 wide, 12-16 orbit, 16-18 OTS, 18-19 screen close, 19-21 medium, 21-25 inserts + punch-in); 12-16 "the camera slowly orbits the owner with her laptop at the centre" named as its own move. PASS.
- New owner lines, no "I guess": {Wow, Fig and Cedar totally failed.} {Looks like no one's interested in Fig and Cedar.} PASS (ledger e).
- She clicks X to delete Fig & Cedar from her site (18-19s), then blows out the jar as Scout's line lands (21-25s). One primary change per stage: 18-19 = row deleted, 21-25 = candle out. PASS.
- Clean H158 end screen exactly: "hard cut to the end screen, exactly @Video2, clean" (the smoke dissolve removed). PASS.
- Checklist 2/3/11/12/20/21 and Principles 1/3/10 re-run on the changed shots: PASS. Limits unchanged except 1,000 words.

## Pre-spend gate (H247, Nov 15 ~3:00 PM ET)
Asset list `assets-h247.json`: 13 refs in prompt order, each media id's CDN bytes sha256-equal to the local a2/ file; Image1, Image5, Image6 and Video2 (the fixed-voice H158 end screen used in a2/) re-uploaded free so every input is a plain upload. Prompt unchanged since the 2:35 PM fold-in (1,000 words). Page prompt block, shot list and review summary checked line by line against the prompt.

## Result: zero FAILs.
