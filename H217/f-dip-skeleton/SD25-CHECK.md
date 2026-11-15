# SD25-CHECK · H217/f-dip-skeleton (card H223, shelved by Emile)

Nov 15 2026. Skill: `~/ClaudeCowork/marketer/.claude/skills/sd25-pe/SKILL.md` (v0.1.1, 995 lines), read in full again for this script. Script work only: no generation, no spend. The card is shelved; this keeps the script clean.
Prompt checked: `prompt-sd25pe-final.txt` (backed up as `prompt-sd25pe-final.pre-sd25check.txt`, 1,116 words). Page backed up as `index.pre-sd25check.html`.

## Assets opened (upload order, from index.html)

| Ref | File | Checked | What it shows |
|---|---|---|---|
| @Video1 | a/video1-dip-skeleton-25s.mp4 | ffprobe 25.00 s, 480x854 (409,920 px, above the 407,696 px floor), silent; frames at 1 fps | The Dip as a flat grey posterised blockout: phone macro, figure at desk, flat screen panels, window/town, counter figure, close-ups, black end |
| @Image1 | a/image1-refund-banner.png | viewed, 1080x1920 | Lock screen Mon Nov 16 9:14, "Refund issued ... $68.00", on wood with striped towel |
| @Image2 | a/image2-owner.png | viewed, 1536x2048 | Owner, white linen shirt, in her studio |
| @Image3 | a/image3-studio.png | viewed, 941x1672 | Empty studio: rails, boxes, window, daylight |
| @Image4 | a/image4-admin-low-week.png | viewed, 1600x1000 | Shopify-style dashboard, Total sales $212, falling line |
| @Image5 | a/image5-discount.png | viewed, 1600x1000 | "Create discount" SALE30, 30% off, Save discount |
| @Image6 | a/image6-scout-orb.png | viewed, 1000x1000 | Scout wordmark with lime orb on black |
| @Image7 | a/image7-shopper.png | viewed, 1536x2048 | Shopper, striped tee, AirPod, straw bag, bedroom |
| @Image8 | a/image8-call-card.png | viewed, 1080x1350 | "THE CALL" card: waveform, "Sunset bikini Added 3 times", "A discount every week" |
| @Image9 | a/image9-order-banner.png | viewed, 1080x1920 | Fri Nov 20 4:52 "New order ... $68.00" |
| @Video2 | a/video2-end-screen.mp4 | ffprobe 4.50 s, 1080x1920, has audio | H158 end screen, Scout's end line |
| @Audio1 | a/audio1-owner-elena.mp3 | ffprobe 13.44 s | owner timbre |
| @Audio2 | a/audio2-shopper-serene.mp3 | ffprobe 11.44 s | shopper timbre |
| @Audio3 | a/audio3-kaching.mp3 | ffprobe 2.60 s | ka-ching |

Not uploads: dip-original-0-25s-silent.mp4 (source), dip-s*.jpg, preview-*.jpg, preset-*, skeleton sheets, thumbs.

## Pass 1

### a) Final Checklist

1. One task. PASS: generation with a coarse blockout.
2. Story unchanged. PASS.
3. Entities covered. PASS: owner, shopper, Scout, studio, bedroom, phone, laptop screens, call card, swimsuit.
4. One unique role per asset. **FAIL**: @Video2 "is used for Scout, picture and voice: Scout's voice in every Scout line, and the final shot from 25 s" (two roles: voice reference for 9-15s and the end shot).
5. Refs unchanged. PASS.
6. PASS. 7. PASS: all 14 uploads have a role. 8. PASS. 9. PASS. 10. PASS (@Image2 owner, @Image7 shopper).
11. One change per stage, end state. **FAIL**: 19-21s "half smiling" contradicts Emile's Nov 15 shocked aha; 21-22s "Her hands delete the discount on @Image5" is not the delete he set (from behind, trackpad, dark "Discount deleted" toast).
12. Time ranges ours, continuous. PASS.
13 N/A. 14 PASS. 15 N/A. 16 N/A (no fixed frame). 17 N/A. 18 N/A.
19. Blockout coarse/fine, mapping, excluded content. PASS: "coarse-blockout reference", each grey figure/panel mapped, "do not adopt its blockout appearance". **FAIL** for 21-23 s: the mapping still sends the delete to the laptop screen insert and the phone insert, which the new delete shot replaces; the departure is not named.
20. Observable emotion. **FAIL**: "(realising, wry)" + "half smiling".
21. Speaking stages. **FAIL**: `{I'm training them to wait.}` and `{Noted.}` are not Emile's Nov 15 lines; Scout's 9-12s and 12-15s lines give no on/off-screen position ("in the voice of @Video2").
22 PASS. 23 PASS.
24. Gate sentence. PASS: @Video1 25 s and @Video2 4.5 s vs a 30 s output; reference-based generation, not first-frame; exactly one sentence after the goal.
25 N/A. 26 PASS. 27 PASS.

### b) Principles 1-11

1 PASS. 2 PASS (coarse blockout template). **3 FAIL** (Video 2 carries two jobs, so what it gives each shot is muddled). 4 PASS. 5 PASS. 6 PASS. 7 PASS. 8 PASS. 9 PASS. 10 PASS. 11 PASS.

### c) Template: Coarse Blockout

- "@Video1 is a coarse-blockout reference. Use it only for ...; do not adopt its blockout appearance": PASS.
- Each blockout subject/prop mapped one line each: PASS up to 21 s; **FAIL** 21-23 s (see 19).
- Subject/prop images defined: PASS.
- "Preserve <...> from @Video1": PASS ("shot for shot in the same order").
- Final visuals + audio: PASS.

### d) Shot table (pass 1)

| Range | On screen | Defining asset | Result |
|---|---|---|---|
| 0-2 | phone, refund banner, owner | @Image1, @Image2 | PASS |
| 2-4 | owner to lens | @Image2 / @Image3 | PASS |
| 4-6 | dashboard | @Image4 | PASS |
| 6-7 | flash cuts, discount page | @Image5 | PASS |
| 7-9 | owner, Scout lifts off | @Image2, @Image6 | PASS |
| 9-12 | Scout flight, shopper | @Image6, @Image7 | PASS |
| 12-15 | shopper, call card | @Image7, @Image8 | PASS |
| 15-18 | shopper OTS, card | @Image7, @Image8 | PASS |
| 18-19 | owner, card by laptop | @Image2, @Image8 | PASS |
| 19-21 | owner, coral swimsuit | @Image2; swimsuit in words | FAIL: half smile |
| 21-22 | delete on @Image5 | @Image5 | FAIL: not the from-behind trackpad + toast delete |
| 22-23 | new order | @Image9 | PASS |
| 23-25 | owner close-up | @Image2 | PASS |
| 25-30 | end screen | @Video2 | FAIL: Video 2 also voices Scout at 9-15 s |

### e) Asset limits

Images 9 PASS. Videos 2: 25.00 + 4.50 = 29.50 s (each 4-30 s, ≤30 s) PASS. Audio 3: 13.44 + 11.44 + 2.60 = 27.48 s PASS. Total 14 PASS.

### Pass 1 result: 6 FAILs

1. Aha line wrong. 2. Decision line wrong. 3. Half smile, not shock. 4. Delete shot wrong. 5. @Video2 two roles. 6. Blockout departure unnamed (plus Scout position, in 21).

## Fixes made

- 19-21s: "She freezes: eyes wide, brows up, mouth falling open, a sharp breath in; no smile." + `{Oh my god... I'm training them to wait.}` (stunned, a shocked realisation).
- 21-23s: "Hard cut, seen from behind her at the laptop ... her hand on the trackpad clicks Delete on the discount with <a soft click>, and a dark toast reading "Discount deleted" pops up" + `{You know what? Let's delete all these discounts.}` (decided, firm).
- 23-25s: the new order (@Image9, phone in the foreground) and the punch-in merged into one shot; she speaks on the bell. `{Full price. Glad I asked.}` unchanged.
- Blockout mapping: the two 21-23 s panel lines replaced by one line naming the departure ("From 21 s, the Event Script departs from @Video1's cuts ..."); pace line says "on the cuts of @Video1 up to 21 s".
- @Video2: "used only for the final shot from 25 s, its picture and its own sound. Scout's earlier lines get a calm, warm voice described in words." Scout's lines now "on screen as the orb" (9-12s) and "heard on the call through her AirPod" (12-15s).
- Gate sentence kept. All other {lines} word for word (diffed).

## Pass 2 (fixed prompt, 1,216 words)

### a) Final Checklist

1 PASS. 2 PASS. 3 PASS. 4 PASS: @Video2 has one role. 5 PASS. 6 PASS. 7 PASS. 8 PASS. 9 PASS. 10 PASS.
11. PASS: aha ends on her shocked face; delete ends on the toast; order shot ends on her smile.
12. PASS: continuous 0-30.
13 N/A. 14 PASS. 15 N/A. 16 N/A. 17 N/A. 18 N/A.
19. PASS: coarse blockout, mapping to 21 s, departure named after.
20. PASS. 21. PASS: every line has speaker, English, position, delivery; listeners' mouths closed; Video 2 carries the end line.
22 PASS. 23 PASS. 24 PASS (gate fires; one sentence). 25 N/A. 26 PASS. 27 PASS.

### b) Principles 1-11: all PASS.

### c) Coarse-blockout template: all PASS.

### d) Shot table (pass 2)

| Range | On screen | Defining asset | Result |
|---|---|---|---|
| 0-19 | as pass 1 | as pass 1 | PASS |
| 19-21 | owner shocked, coral swimsuit | @Image2; swimsuit in words | PASS |
| 21-23 | from behind: laptop, trackpad, toast | @Image5 screen, @Image3 room; toast in words | PASS |
| 23-25 | phone with new order, owner smiling | @Image9, @Image2 | PASS |
| 25-30 | end screen | @Video2 (one role) | PASS |

### e) Asset limits: unchanged, PASS.

### Pass 2 result: 0 FAILs

Risk (not a skill FAIL): 21-23s holds 8 words in 2 s, faster than our 3 words/s rule; the blockout's cuts leave no more room before the 25 s end screen.
