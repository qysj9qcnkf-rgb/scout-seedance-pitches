# SD25-CHECK · H217/b-storyboard (card H219, rendered as H232)

Nov 15 2026. Skill: `~/ClaudeCowork/marketer/.claude/skills/sd25-pe/SKILL.md` (v0.1.1, 995 lines), read in full for this script. Script work only: no generation, no spend.
Prompt checked: `prompt-sd25pe-final.txt` as it stood before this check (backed up as `prompt-sd25pe-final.pre-sd25check.txt`, 696 words). Page backed up as `index.pre-sd25check.html`.

## Assets opened (upload order, from index.html section 02)

| Ref | File | Checked | What it shows | Media ID |
|---|---|---|---|---|
| Image 1 | a/storyboard.png | viewed, 880x1168 | 12 line-art panels, 4 across x 3 down. Panel 9: owner smiling, holding a bikini top. Panel 10: from behind at laptop, finger on keys, form pieces flying off the screen. Panel 7: orb in the bedroom beside the shopper. | gpt_image_2_6 job fdc06c34 |
| Image 2 | a/refund-banner.jpg | viewed, 1080x1920 | Phone lock screen "Refund issued, [SALT & SUN SWIM] A refund of $68.00..." on wood with striped towel | upload at render |
| Image 3 | a/owner.jpg | viewed, 768x1024 | Owner, long brown hair, white linen shirt, in her studio | Soul 2 job 9a8b15e8 |
| Image 4 | a/studio-plate.png | viewed, 752x1344 | Empty studio: table, laptop, swimwear rails, window with palms; no orb, no person | gpt_image_2_6 job a17f8839 |
| Image 5 | a/shopper.jpg | viewed, 768x1024 | Shopper, striped tee, earbud, packing a straw bag; coral bikini on the bed | Soul 2 job 6ccc5f17 |
| Image 6 | a/order-banner.jpg | viewed, 1080x1920 | "New order ... totaling $68.00" lock screen | upload at render |
| Video 1 | a/h158-end.mp4 | ffprobe: 4.50 s, 1080x1920 (9:16), has audio; frames sampled at 2 fps | Orb flies in, becomes the "o" of Scout, "For Shopify owners", "Get free early access", "We'll set you up / Launching December 15" | cae62718 |
| Audio 1 | a/kaching-2_0s.mp3 | ffprobe 2.00 s | ka-ching | upload at render |
| Audio 2 | a/voice-elena.mp3 | ffprobe 13.44 s | owner timbre | e05a2ee1 |
| Audio 3 | a/voice-serene.mp3 | ffprobe 11.44 s | shopper timbre | 4b121290 |

Not uploaded (inspiration only, per page): a/preset-bullet-time.mp4 (15.0 s, 600x450), a/preset-high-flip.mp4 (9.0 s). Older sheets storyboard-v1..v3.png are not uploads.

## Pass 1 (prompt before this check)

### a) Final Checklist

1. One primary task. PASS: storyboard/reference generation; Video 1 is the final shot, not an editing master.
2. Subjects, counts, scene, ownership, outcome unchanged. PASS: "One shopper only (Image 5)", owner "appears only in her studio (Image 4)".
3. Every required entity covered, no merges. PASS: owner, shopper, Scout, studio, bedroom, phone banners, laptop/discount, swimwear all named.
4. Every used asset has one unique role. PASS: one line each, Image 1 to Audio 3.
5. Existing refs unchanged. PASS: "Image 1".."Audio 3" syntax kept.
6. No claims about inaccessible assets. PASS: all assets opened (table above).
7. Irrelevant assets not forced; unused listed. PASS: all 10 uploads have a role; the two preset clips are not uploaded.
8. Inaccessible assets not treated as understood. PASS.
9. Individual mapping, no range statements. PASS.
10. Single-character image not used for two characters. PASS: Image 3 owner, Image 5 shopper.
11. Each stage one state change, clear end state. PASS for panels 1-8, 11, 12. **FAIL** panel 9/10 end states contradict the panels: panel 9 is drawn smiling and panel 10 drawn with the form breaking apart, and the prompt does not say not to adopt either (Image 1 is read "for what each person holds" and blocking).
12. Time ranges kept, no invented ones. PASS: whole seconds 0-30, ours.
13. Editing-task items. N/A: not editing.
14. Locked ratio/duration rules. PASS: generation task, nothing locked; no ratio or duration in text.
15. Extension. N/A.
16. First/last frame statements. N/A: no fixed frames.
17. Multiple keyframes. N/A.
18. Storyboard grid: reading order, panel roles, what not to adopt. PASS on order ("left to right, top to bottom") and style; **FAIL** on content not to adopt: panels 9 and 10 carry content Emile has ruled out (half smile; form breaking apart) with no exclusion.
19. Blockout. N/A.
20. Emotion has observable results when control is needed. **FAIL**: the aha "(dawning, wry)" has no observable cue, and Emile's Nov 15 rule needs a shocked realisation, not a half laugh.
21. Speaking stages match the input. **FAIL**: two lines are not Emile's Nov 15 lines: `{I'm training them to wait.}` (must be `{Oh my god... I'm training them to wait.}`) and `{Noted.}` (must be `{You know what? Let's delete all these discounts.}`). Also Scout at 13-17s has no on-/off-screen position ("Scout, in English (curious, friendly)") although panel 7 draws the orb in the bedroom.
22. Shot/asset numbers stay identifiers. PASS: "Panel 5", "Image 4".
23. No parameters, analysis or metadata. PASS: no ratio, duration, resolution, model or notes.
24. Compatibility sentence exactly once only when the gate fires. **FAIL**: the gate fires (Video 1 is 4.50 s, the output 30 s: "differs ... by more than approximately 0.3 seconds"), and the sentence is missing. It was removed in H219 round 3; the skill's own rule and the real sd25-pe runs logged on H219, H221 and H223 add it in this exact case.
25. Unreadable ref specs. N/A: Video 1 read with ffprobe.
26. No unrequested negatives. PASS: only "No subtitles appear on screen" (the skill asks for it) and what-not-to-take lines.
27. Placeholders replaced, one prompt body. PASS.

### b) Non-Negotiable Principles

1. Intent First. PASS: story, cast and outcome as approved.
2. Template First. PASS: Generation Goal / Asset Roles / Subjects / Event Script with storyboard shot lines.
3. Account for Every Asset. PASS: 10 of 10 roles, nothing unused.
4. User Mapping First. PASS.
5. Minimal Clarification. PASS: nothing ambiguous.
6. Submission-Ready Only. PASS.
7. Separate Parameters. PASS: no 9:16, 30 s, 480p in text.
8. No Unrequested Constraints. PASS, but see the gate (checklist 24).
9. One Best Version. PASS.
10. Facts vs Observations. PASS: identities from our text; "sunny bedroom ... coral bikini" is visible in Image 5.
11. Subject Cardinality. PASS.

### c) Template: Storyboard Grids and Storyboards

- "@Image1 provides the shot order ... Read it <order>": PASS, "Read it left to right, top to bottom, one panel per shot below."
- "do not adopt <sketch style, annotations, placeholder characters>": PASS for style and placeholders; **FAIL** for panel 9 smile and panel 10 breaking form (see checklist 18).
- Subject/scene images defined: PASS (Image 3, 4, 5).
- "Shot N: <shot size, action, scene state>": PASS, one line per panel, shot size in 【Camera and Pace】 ("Talking shots are close-ups") and in the panels.
- "Final visuals use <style>. Audio includes <...>": PASS (【Look and Sound】).

### d) Shot table (pass 1 timings)

| Shot | On screen | Defining @asset | Result |
|---|---|---|---|
| P1 0-2 | phone, refund banner | Image 2 | PASS |
| P2 2-4 | owner in studio | Image 3 (face) + Image 4 (room) | PASS: different attributes of one subject + a scene |
| P3 4-6 | owner | Image 3 / Image 4 | PASS |
| P4 6-8 | owner from behind at laptop | Image 3 / Image 4 | PASS |
| P5 8-11 | owner, Scout orb | Image 3 / Image 4; Scout named in words | PASS |
| P6 11-13 | owner, orb, flip | same | PASS |
| P7 13-17 | shopper, bedroom, orb | Image 5; bedroom and orb in words | PASS (orb position missing: checklist 21) |
| P8 17-21 | shopper | Image 5 | PASS |
| P9 21-23 | owner, bikini top | Image 3 / Image 4 | FAIL: panel smile conflicts with the required shock |
| P10 23-24 | owner from behind, laptop, toast | Image 4 laptop; toast named in words | FAIL: panel's breaking form not excluded |
| P11 24-26 | phone, new order, owner | Image 6 / Image 3 | PASS |
| P12 26-30 | end screen | Video 1 | PASS |

No asset has two roles.

### e) Asset limits

Images 6 (≤30) PASS. Videos 1, 4.50 s (4-30 s each, ≤30 s total) PASS. Audio 3: 2.00 + 13.44 + 11.44 = 26.88 s (each 2-30 s, ≤30 s total) PASS. Total 10 (≤50) PASS.

### Pass 1 result: 6 FAILs

1. Aha line wrong (Nov 15 line).
2. Decision line wrong ("Noted.").
3. Aha not observable / not shocked.
4. Storyboard panels 9-10 not excluded (smile, breaking form).
5. Scout off/on-screen unstated (13-17s).
6. Gate sentence missing (4.5 s vs 30 s).

## Fixes made (prompt-sd25pe-final.txt and the copy on index.html)

- Lines: `{Oh my god... I'm training them to wait.}` (stunned, a shocked realisation, a catch of breath on the "...") with observable cues: "She freezes with the bikini top still in her hands: eyes wide, brows up, a sharp breath in; no smile." Decision: `{You know what? Let's delete all these discounts.}` (decided, firm), said before the click, then the trackpad Delete and the dark "Discount deleted" toast, hard cut from behind her at the laptop (already in the prompt).
- Image 1 role now adds: "Do not adopt the smile in panel 9 or the pieces flying off the laptop screen in panel 10; the shot lines below set those two moments."
- Scout lines say "on screen as the orb" (7s) and "on screen as the orb beside her" (11s); 【Subjects】 says where the orb is seen.
- `Please note that this is not video editing.` placed right after the goal sentence.
- Timing re-cut to fit the longer lines inside 30 s with Video 1 unchanged at 26-30: P1 0-1, P2 1-3, P3 3-5, P4 5-7, P5 7-9, P6 9-11 (flip at 10), P7 11-15, P8 15-19, P9 19-21, P10 21-24, P11 24-26, P12 26-30. Camera line and "first seen at 7s" / shopper "9-19s" updated to match.
- Every other {line} is word for word (diffed: only the two Nov 15 lines changed).

## Pass 2 (fixed prompt, 821 words)

### a) Final Checklist

1. One task. PASS.
2. Unchanged story. PASS: same cast, places, outcome; only the two lines Emile changed on Nov 15.
3. Entities covered. PASS: toast, trackpad, laptop now named at 21-24s.
4. One role per asset. PASS: 10 lines, one each.
5. Refs unchanged. PASS.
6. No claims about unread assets. PASS.
7. Unused listed. PASS: none unused.
8. PASS.
9. PASS.
10. PASS.
11. One change per stage, end states. PASS: P9 ends on her shocked face with the top in her hands; P10 ends on the toast; panel 9/10 drawings excluded.
12. Time ranges. PASS: continuous whole seconds 0-30, ours.
13. N/A. 14. PASS. 15. N/A. 16. N/A. 17. N/A.
18. Storyboard grid. PASS: order, style, placeholders, and panels 9-10 content excluded.
19. N/A.
20. Observable emotion. PASS: "eyes wide, brows up, a sharp breath in; no smile".
21. Speaking stages. PASS: 9 written lines + Video 1's own end line; every speaker labelled "in English"; Scout "on screen as the orb"; owner V.O. lips closed; listeners' mouths closed.
22. PASS.
23. PASS: no ratio, duration, model, notes.
24. Gate sentence. PASS: exactly one, after the goal sentence.
25. N/A.
26. PASS.
27. PASS.

### b) Principles 1-11

1 PASS (Emile's Nov 15 lines are his instruction, not a story change). 2 PASS. 3 PASS. 4 PASS. 5 PASS. 6 PASS. 7 PASS. 8 PASS (the gate sentence is the allowed routing line). 9 PASS. 10 PASS. 11 PASS.

### c) Storyboard template

All PASS (see pass 1 list; the panel 9-10 exclusion is now in Image 1's role).

### d) Shot table (pass 2)

| Shot | On screen | Defining @asset | Result |
|---|---|---|---|
| P1 0-1 | phone, refund banner | Image 2 | PASS |
| P2 1-3 | owner reads phone | Image 3 / Image 4 | PASS |
| P3 3-5 | owner | Image 3 / Image 4 | PASS |
| P4 5-7 | owner from behind at laptop | Image 3 / Image 4 | PASS |
| P5 7-9 | owner frozen, Scout orb | Image 3 / Image 4; orb in words | PASS |
| P6 9-11 | owner turns, flip | Image 3 / Image 4 | PASS |
| P7 11-15 | shopper packing, orb beside her | Image 5; bedroom + orb in words | PASS |
| P8 15-19 | shopper | Image 5 | PASS |
| P9 19-21 | owner shocked, bikini top in hands | Image 3 / Image 4 | PASS |
| P10 21-24 | from behind: laptop, trackpad, toast | Image 4 (laptop, room); toast in words | PASS |
| P11 24-26 | phone, new order, owner smiling | Image 6 / Image 3 | PASS |
| P12 26-30 | end screen | Video 1 | PASS |

### e) Asset limits

Unchanged: 6 images, 1 video (4.50 s), 3 audio (26.88 s), 10 total. PASS.

### Pass 2 result: 0 FAILs

Risk to watch (not a skill FAIL): spoken pace is high at 7-9s (7 words in 2 s) and 19-21s (8 words in 2 s), above our 3 words/s rule of thumb; the same 2 s aha is used in script A. If the take rushes it, take 1 s from P11.
