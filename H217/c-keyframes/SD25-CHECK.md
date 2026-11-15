# SD25-CHECK · H217/c-keyframes (card H220, rendered as H235)

Nov 15 2026. Skill: `~/ClaudeCowork/marketer/.claude/skills/sd25-pe/SKILL.md` (v0.1.1, 995 lines), read in full again for this script. Script work only: no generation, no spend.
Prompt checked: `prompt-sd25pe-final.txt` as rendered for H235 (backed up as `prompt-sd25pe-final.pre-sd25check.txt`, 725 words). Page backed up as `index.pre-sd25check.html`.

## Assets opened (upload order, from index.html section "assets")

| Ref | File | Checked | What it shows |
|---|---|---|---|
| @Image1 | a/image1-kf1.jpg | viewed, 752x1344 | Phone on desk, lock screen Tue Nov 17 10:14, "Refund issued ... $68.00", swimwear blurred |
| @Image2 | a/image2-kf2.jpg | viewed, 752x1344 | Owner at desk reading phone, hand on cheek, deflated |
| @Image3 | a/image3-kf3.jpg | viewed, 752x1344 | Over her shoulder, laptop "Create discount" WEEKEND20 |
| @Image4 | a/image4-kf4.jpg | viewed, 752x1344 | Same angle, frozen: orange bikini top mid-air, lime orb at her shoulder, screen defocused |
| @Image5 | a/image5-kf5.jpg | viewed, 752x1344 | Reverse angle, she looks at the orb, curious |
| @Image6 | a/image6-kf6.jpg | viewed, 752x1344 | Owner from behind watching the shopper on the phone inside a big glowing orb |
| @Image7 | a/image7-kf7.jpg | viewed, 752x1344 | Shopper on the phone packing a straw bag, lime glow ring, small lime sound-bar badge by her phone |
| @Image8 | a/image8-kf8.jpg | viewed, 752x1344 | Owner holding up the orange-to-pink Sunset bikini top, **smiling** |
| @Image9 | a/image9-kf9.jpg | viewed, 752x1344 | From behind at the laptop, hand on trackpad, dark "Discount deleted" toast (H235 version) |
| @Image10 | a/image10-kf10.jpg | viewed, 752x1344 | Owner smiling, phone in a stand: Friday 5:38 "New order" |
| @Image11 | a/image11-owner.jpg | viewed, 900x1200 | Owner Soul 2 face, in her studio |
| @Image12 | a/image12-shopper.jpg | viewed, 900x1200 | Shopper Soul 2 face, bedroom, straw bag |
| @Video1 | a/video1-end.mp4 | ffprobe 4.50 s, 1080x1920 (9:16), has audio | H158 end screen: orb to "o", Scout wordmark, CTA |
| @Audio1 | a/audio1-elena.mp3 | ffprobe 8.90 s | owner timbre |
| @Audio2 | a/audio2-serene.mp3 | ffprobe 11.44 s | shopper timbre |
| @Audio3 | a/audio3-kaching.mp3 | ffprobe 2.60 s | ka-ching |
| @Audio4 | a/audio4-scout.mp3 | ffprobe 4.50 s | Video 1's own sound, Scout's timbre |

Not uploads: preset-*.mp4 (inspiration), src-*.jpg, v1-/v2- and kf4-v1-rejected, image9-kf9-v-old.jpg (old versions).
First frame @Image1 is 752x1344 (0.56, about 9:16), the same as the output; no last frame is fixed.

## Pass 1 (prompt as rendered for H235)

### a) Final Checklist

1. One primary task. PASS: generation with keyframes.
2. Story unchanged. PASS.
3. Entities covered. PASS: owner, shopper, Scout, studio, bedroom memory, phone, laptop, toast, bikini.
4. One role per asset. PASS: 12 images keyframes or faces, Video 1 ending, 4 audio.
5. Refs unchanged. PASS (@ syntax).
6. No claims about unread assets. PASS.
7. Unused listed. PASS: all 17 uploads have a role.
8. PASS. 9. PASS: one line each. 10. PASS: Image 11 owner, Image 12 shopper.
11. One change per stage, end state. **FAIL**: 20-22s says "A rueful half-smile" and keyframe @Image8 is a smile; Emile's Nov 15 rule needs a shocked realisation, never a half laugh.
12. Time ranges ours, continuous. PASS.
13. N/A. 14. PASS (first frame ratio matches output). 15. N/A.
16. First frame. **FAIL**: "Use @Image1 as the first frame." is present but the required separate sentence describing what that first frame defines is missing.
17. Multiple keyframes in order. PASS: "Use @Image1 to @Image10 in order as keyframes", one "(reference: @ImageN)" state per range, no static hold promised.
18. N/A. 19. N/A.
20. Observable emotion. **FAIL**: "realising, quietly amused" + "rueful half-smile" is the wrong emotion and not a shock.
21. Speaking stages. **FAIL**: `{I'm training them to wait.}` and `{Noted.}` are not Emile's Nov 15 lines. Scout's 8s and 10s lines give no on/off-screen position.
22. PASS.
23. PASS.
24. Compatibility sentence. **FAIL**: present ("Please note that this is not video editing."), but this is a first-frame generation ("Use @Image1 as the first frame."), and the skill says the sentence "is not added automatically for ... first-frame generation".
25. N/A.
26. PASS: "No subtitles" only.
27. PASS.
Also (sound symbol rule, section "Sound, Dialogue, and Text"): **FAIL** `<@Audio3 rings>` puts an asset label inside the sound-effect brackets; written as `<the order sound from @Audio3 rings>`.

### b) Principles 1-11

1 PASS. 2 PASS (keyframe template). 3 PASS. 4 PASS. 5 PASS. 6 PASS. 7 PASS. **8 FAIL**: the routing sentence was added where the gate does not apply (first-frame task). 9 PASS. 10 PASS. 11 PASS.

### c) Template: Controlling the Order of Multiple Keyframes / First Frame Plus Other References

- "Use @Image1 through @ImageN as keyframes in that order." PASS.
- "Use @Image1 as the first frame." standalone. PASS. Followed by "This first frame defines ...". **FAIL** (missing).
- Each later keyframe defines a visible state. PASS, per range; **FAIL** for @Image8, whose smile contradicts the required state and is not excluded.
- Other references "without changing" the frames: faces and voices only. PASS.
- Continuity line: 【Maintain Consistency】. PASS.

### d) Shot table (pass 1)

| Range | On screen | Defining asset | Result |
|---|---|---|---|
| 0-2 | phone, refund banner | @Image1 | PASS |
| 2-4, 4-6 | owner reads phone | @Image2 (+ @Image11 face) | PASS |
| 6-8 | over shoulder, discount page | @Image3 | PASS |
| 8-10 | freeze, orb | @Image4 | PASS |
| 10-12 | reverse angle, orb | @Image5 | PASS |
| 12-16 | orb window, shopper | @Image6 (+ @Image12 face) | PASS |
| 16-20 | memory, shopper, badge | @Image7 | PASS |
| 20-22 | owner, Sunset bikini | @Image8 | FAIL: keyframe smile vs required shock |
| 22-23 | from behind, trackpad, toast | @Image9 | PASS |
| 23-25 | new order, owner | @Image10 | PASS |
| 25-30 | end screen | @Video1 | PASS |

No asset has two roles (Audio 4 is timbre only; Video 1 is the ending only).

### e) Asset limits

Images 12 (≤30) PASS. Videos 1, 4.50 s PASS. Audio 4: 8.90 + 11.44 + 2.60 + 4.50 = 27.44 s, each ≥2 s PASS. Total 17 (≤50) PASS.

### Pass 1 result: 7 FAILs

1. Aha line wrong. 2. Decision line wrong. 3. Half-smile, not shock. 4. @Image8 smile not excluded. 5. First-frame sentence missing. 6. Gate sentence wrongly added. 7. Asset inside sound brackets (plus Scout on/off-screen, folded into 21).

## Fixes made

- Lines: `{Oh my god... I'm training them to wait.}` (stunned, a shocked realisation) with "she freezes: eyes wide, brows up, mouth falling open, a sharp breath in; no smile"; `{You know what? Let's delete all these discounts.}` (decided, firm), said before the trackpad click and the @Image9 toast.
- New role line: "@Image8 sets the composition and the Sunset bikini held up in her hands; do not take the smile on her face in @Image8".
- Added "This first frame defines a macro of her phone lying on her studio desk, the "Refund issued" banner on its lock screen, swimwear blurred beside it, seen from slightly above."
- Removed "Please note that this is not video editing."
- `<The order sound from @Audio3 rings>` at 0s and 24s.
- Scout's 7s and 9s lines say "on screen as the orb"; shopper "on screen, on the phone".
- Re-timed to fit the longer lines, Video 1 unchanged: 0-1, 1-3, 3-5, 5-7, 7-9, 9-11, 11-15, 15-19, 19-21, 21-24, 24-26, 26-30 (the clip's last 0.5 s, a static end card, is cut). Move times updated (3s, 7s, 15s), orb "first seen at 7s", @Image9 added to the studio list.
- All other {lines} word for word (diffed).

## Pass 2 (fixed prompt, 841 words)

### a) Final Checklist

1 PASS. 2 PASS. 3 PASS. 4 PASS: @Image8 keeps one role (keyframe), now with what not to take. 5 PASS. 6 PASS. 7 PASS. 8 PASS. 9 PASS. 10 PASS.
11. PASS: 19-21s ends on her shocked face with the bikini in her hands; 21-24s ends on the toast.
12. PASS: continuous whole seconds 0-30.
13 N/A. 14 PASS. 15 N/A.
16. PASS: "Use @Image1 as the first frame." standalone, then "This first frame defines ...".
17. PASS. 18 N/A. 19 N/A.
20. PASS: eyes, brows, mouth, breath, "no smile".
21. PASS: 12 lines with speaker, "English", delivery and position; listeners' lips closed; Video 1 carries the end line.
22 PASS. 23 PASS.
24. PASS: no routing sentence in a first-frame task.
25 N/A. 26 PASS. 27 PASS.
Sound brackets: PASS (no asset label used as a bracketed name).

### b) Principles 1-11: all PASS.

### c) Keyframe template: all PASS.

### d) Shot table (pass 2)

| Range | On screen | Defining asset | Result |
|---|---|---|---|
| 0-1 | phone, refund banner | @Image1 (first frame) | PASS |
| 1-3, 3-5 | owner reads phone, punch-in | @Image2 | PASS |
| 5-7 | over shoulder, discount page | @Image3 | PASS |
| 7-9 | freeze, orb | @Image4 | PASS |
| 9-11 | reverse angle | @Image5 | PASS |
| 11-15 | orb window onto the call | @Image6 | PASS |
| 15-19 | inside the memory | @Image7 | PASS |
| 19-21 | owner shocked, bikini in hands | @Image8 (smile excluded) | PASS |
| 21-24 | from behind, trackpad, toast | @Image9 | PASS |
| 24-26 | new order | @Image10 | PASS |
| 26-30 | end screen | @Video1 | PASS |

### e) Asset limits: unchanged, PASS.

### Pass 2 result: 0 FAILs

For the next take (needs spend, not done): @Image8 is still a smiling frame. A text exclusion is the free fix; a re-made keyframe 8 with a shocked face would lock it harder (about 0.25 credits, needs Emile's go). Pace is high at 19-21s (8 words in 2 s).
