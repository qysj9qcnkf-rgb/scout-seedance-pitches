# SD25-CHECK · H217 Team E (two passes) · cards H222 (script) and H229 (render)

Checked Nov 15 2026 against `~/ClaudeCowork/marketer/.claude/skills/sd25-pe/SKILL.md` (v0.1.1, read in full this session; same file as for Team D, unchanged). Self-update could not run (no `timeout`/npx here), so the local copy was used.

Prompts checked:
- **Pass 1** `pass1-sd25pe-skill.txt`: reference generation with a fixed last frame. Rendered Nov 14 (job 3c54f2b9, 14 s); fixes are for a retake.
- **Pass 2** `pass2-sd25pe-skill.txt` = `prompt-sd25pe-final.txt` (same bytes): forward **video extension** of pass 1. Rendered Nov 14 (job e5c868cb, 16 s); fixes are for the next take.

Backups: `pass1-sd25pe-skill.pre-sd25check.txt`, `pass2-sd25pe-skill.pre-sd25check.txt`, `prompt-sd25pe-final.pre-sd25check.txt`, `index.pre-sd25check.html`.

## Assets inspected (index.html upload lists)

| Pass · ref | File | Probe | What is in it |
|---|---|---|---|
| P1 Image 1 | a/owner.jpg | 900x1200 | Owner, long brown hair, white linen shirt, in her studio at the laptop |
| P1 Image 2 | a/studio-orb.jpg | 675x1200 | Studio (racks, window, chair, table, laptop) **with the lime orb floating in it** (media db24f683) |
| P1 Image 3 | a/refund-banner.png | 1080x1920 | "Tuesday, November 17 · 2:17", "Refund issued · [SALT & SUN SWIM] You refunded $68.00 to a customer for 1 item from Online Store." |
| P1 Image 4 | a/discount-screen.png | 1600x1000 | Shopify "Create discount": SUNSET20, 20% off, All swimwear, Discard / Save discount |
| P1 Image 5 | a/seam-frame-v3.jpg | 752x1344 (≈9:16) | Owner at the laptop with the discount page, lips closed, looking at the orb at her shoulder |
| P1 Video 1 | a/h158-end.mp4 | 4.5 s, 1080x1920, audio | Scout end card; voice "Scout interviews your shoppers for you. Get free early access." |
| P1 Audio 1 | a/voice-elena.mp3 | 13.44 s | Owner voice sample (timbre) |
| P1 Audio 2 | a/kaching.mp3 | 2.6 s | Ka-ching |
| P2 Video 1 | pass1-kaching-fixed.mp4 | 14.04 s, 480x854 | Pass 1 as rendered; last frame: owner at the laptop, discount page open, head turned to the orb in front of the rail |
| P2 Video 2 | a/h158-end.mp4 | 4.5 s | End card (as above) |
| P2 Image 1 | a/shopper-portrait.jpg | 680x870 | Shopper: wavy hair, striped tee, earbud, dark shoulder bag strap, straw bag handle |
| P2 Image 2 | a/orb-window.jpg | 503x900 | Glowing lime sphere with a woman on the phone inside, a woman's head in the foreground, studio behind |
| P2 Image 3 | a/discount-screen.png | 1600x1000 | Same Create discount page |
| P2 Image 4 | a/order-banner.png | 1080x1920 | "Friday, November 20 · 4:52", "New order · [SALT & SUN SWIM] You have a new order for 1 item totaling $68.00 from Online Store." |
| P2 Image 5 | a/shopper-bedroom.jpg | 900x300 | White bed, straw bag with blue towel, coral bikini, phone, sunglasses |
| P2 Audio 1 | a/voice-elena-11s.mp3 | 11.0 s | Owner timbre |
| P2 Audio 2 | a/voice-serene.mp3 | 11.44 s | Shopper timbre |
| P2 Audio 3 | a/kaching.mp3 | 2.6 s | Ka-ching |
| P2 Audio 4 | a/scout-voice.mp3 | 4.5 s | Scout's voice (Video 2's sound on its own) |

Media IDs from the page / pass1-job.json: owner 9a8b15e8, studio-orb db24f683, refund 66ff3473, discount 36774282, seam frame 071d4dc2, H158 end cae62718, Elena e05a2ee1, ka-ching 45fb9d1d, Serene 4b121290. Every upload in each pass has a role, so neither prompt needs 【Unused Assets】.

---

## PASS 1 · reference generation + last frame

### Pass 1, first check

**a) Final Checklist**
1. One primary task (generation). **PASS**: "Generate a light, real, slightly playful live-action ad…".
2. Story unchanged. **PASS**.
3. Required entities covered. **PASS**: owner @Image1, studio @Image2, Scout, phone banner @Image3, laptop page @Image4, last frame @Image5.
4. Every used asset one unique role. **FAIL**: "Her studio references @Image2…" and "Scout maps to the lime orb in @Image2…" = two roles on Image 2.
5. References unchanged. **PASS**.
6. **N/A** (all readable). 7. **PASS** (no unused uploads). 8. **N/A**.
9. One line per entity. **PASS**.
10. Single-character image not two characters. **PASS**.
11. One state change per stage, end states. **PASS**: 13-14s "Hold on the last frame defined by @Image5".
12. Time ranges kept. **PASS**.
13. **N/A**. 14. Locked rules. **PASS**: last frame only, no ratio in prompt; Image 5 ≈ 9:16 matches the 9:16 setting.
15. **N/A**.
16. Fixed frame exact statement, others defined without overwriting. **FAIL**: "Use @Image5 as the last frame." is verbatim and standalone (good), but Images 1, 2 and 4 do not say they leave the last-frame composition alone, as the keyframe template requires ("…without changing the last-frame composition in @Image2").
17–19. **N/A**.
20. Observable emotion/camera. **PASS**: "her finger freezes just above the Save discount button…, the camera slowly arcs around her hand".
21. Speakers, language, on/off screen. **PASS**: every line "in natural English"; "The owner stays frozen with her mouth closed"; V.O. at 6-9s.
22. **PASS**. 23. **PASS**.
24. Gate line once. **PASS**: Video 1 is 4.5 s vs a 14 s output, so "Please note that this is not video editing." is right, placed after the goal.
25. **N/A**. 26. **PASS** ("No background music", "no chime" are Emile's H229 rules). 27. **PASS**.

**b) Principles 1–11**: 1 PASS · 2 PASS · 3 **FAIL** (Image 2 two adoptions) · 4 PASS · 5 PASS · 6 PASS · 7 PASS · 8 PASS · 9 PASS · 10 PASS · 11 PASS.

**c) Template (Keyframe Anchors: First Frame, Last Frame and Other References; plus Generation with Reference Assets)**
- Standalone "Use @Image5 as the last frame." **PASS**.
- Separate sentence defining the last frame. **PASS**: "This last frame defines the owner at the laptop…".
- Other references "without changing the last-frame composition". **FAIL** (checklist 16).
- Voice from a reference video: one role, "do not use any of its visuals". **PASS** (consider Audio = a/scout-voice.mp3 on a retake, as pass 2 does).

**d) Shot table**

| Time | On screen | Defined by | Verdict |
|---|---|---|---|
| 0-2s | Phone among bikinis, refund banner | Image 3 · table/room Image 2 · Audio 2 | PASS |
| 2-4s | Owner reads phone | Image 1 · Image 2 · Audio 1 | PASS |
| 4-6s | Owner to camera | Image 1 · Image 2 · Audio 1 | PASS |
| 6-9s | Owner types the discount, coral bikini | Image 1 · Image 4 · Image 2 · bikini named | PASS |
| 9-10s | Bullet time, finger over Save | Image 4 · Image 1 | PASS |
| 10-12s | Scout appears | Image 1 · **Scout: Image 2** · voice Video 1 | **FAIL**: Image 2 is also the room |
| 12-14s | Turn, hold | Image 5 (last frame) · Image 1 · **Scout: Image 2** | **FAIL**: same |

**e) Limits**: images 5 ≤ 30 · videos 1 (4.5 s, total 4.5 s) · audio 2 (13.44 + 2.6 = 16.04 s) · 8 assets. **PASS**.

**Pass 1 first check: 2 FAILs** (Image 2 two roles; last-frame clause missing on the other refs).

### Pass 1 fixes
- `Her studio references @Image2; use only the room…, without changing the last-frame composition in @Image5. Do not use its empty-chair composition or the lime orb floating in it.`
- `Scout maps to @Image6; use only its round glowing lime body with white sound bars, and do not use its plain background.` New **@Image6 = a/scout-orb.png** (720x720), the orb already cut out of this same studio still for Team D (its Image 7); no new generation.
- Image 1 and Image 4 lines end "…without changing the last-frame composition in @Image5."
- Dialogue unchanged (diff of every {…}: identical).

### Pass 1, second check
Checklist 1–27: all PASS or N/A as above; 4 **PASS** (Image 2 = room, Image 6 = Scout); 16 **PASS**. Principles: 3 **PASS**, all PASS. Template: PASS. Shot table 10-12s and 12-14s: Scout = Image 6 **PASS**. Limits: 6 images, 1 video, 2 audio, 9 assets **PASS**. **0 FAILs.**

---

## PASS 2 · forward video extension (prompt-sd25pe-final.txt)

### Pass 2, first check

**a) Final Checklist**
1. One primary task (extension). **PASS**: "@Video1 is the source video to extend forward."
2. Story, counts, outcome unchanged. **FAIL**: 2-5s "a small lime orb hovers beside the phone" adds a second orb while the big sphere is on screen, against "there is only one lime orb". Also Emile's Nov 15 refund rules are not applied: 8-10s "mixed feelings, a half laugh… {I'm training them to wait.}"; 10-11s "{Noted.}"; 10-11s "her finger presses Discard" (a finger, a side angle, no toast).
3. Entities covered. **PASS**.
4. One role per asset. **PASS**: Video 2 end card only; Image 1 shopper only; Image 5 bedroom only; Audio 4 Scout.
5–10. **PASS / N/A** (5 PASS, 6 N/A, 7 PASS, 8 N/A, 9 PASS, 10 PASS).
11. One state change per stage, clear end. **PASS** (as written).
12. Time ranges kept. **PASS**.
13. **N/A**. 14. Extension locks the ratio; no ratio in prompt. **PASS**.
15. Direction and boundary: visuals, audio state, movement trend, subjects. **FAIL**: the boundary names posture, props, background, camera, light and "quiet room sound", but no movement trend (is she still turning? is the orb moving?).
16–19. **N/A**.
20. Observable emotion. **FAIL** under Emile's rule: "mixed feelings, a half laugh" is the reaction he killed for the aha.
21. Speakers, language, on/off screen. **PASS**: "Scout, off-screen…", "The shopper keeps her mouth closed while Scout speaks".
22. **PASS**. 23. **PASS**.
24. No gate line for an extension. **PASS** (none present, correctly).
25. **N/A**. 26. **PASS**. 27. **PASS**.

**b) Principles**: 1 **FAIL** (second orb changes the subject count) · 2 PASS · 3 PASS · 4 PASS · 5 PASS · 6 PASS · 7 PASS · 8 PASS · 9 PASS · 10 PASS · 11 PASS.

**c) Template (Video Extension: Forward)**
- "@Video1 is the source video to extend forward." **PASS**.
- "Extend @Video1 forward. The first frame of the extended segment directly continues from the final frame of @Video1: …" **PASS** for posture, props, background, camera, lighting, audio; **FAIL** for motion trajectory (checklist 15).
- "Then, <new action>". **PASS**.
- Continuity + single-instance line stated in the prompt. **PASS**: "each remain one continuous instance, never duplicated, split or swapped".
- Other assets don't replace the boundary. **PASS**: "The other reference assets must not replace this boundary frame."

**d) Shot table**

| Time | On screen | Defined by | Verdict |
|---|---|---|---|
| 0-2s | Owner, orb swells into the sphere, bedroom inside | Boundary Video 1 · sphere look Image 2 · bedroom Image 5 · Scout voice Audio 4 | PASS |
| 2-5s | Over the shopper's shoulder, phone cart, **small orb** | Shopper Image 1 · cart named · **small orb: no asset, and a second orb** | **FAIL** |
| 5-8s | Shopper laughs over her bag | Image 1 · Image 5 · Audio 2 | PASS |
| 8-10s | Back in the studio, owner, coral bikini | Video 1 boundary world · Audio 1 | **FAIL** (half laugh, old aha line) |
| 10-11s | Finger on Discard, "Noted." | Image 3 | **FAIL** (Nov 15 delete rule) |
| 11-13s | Phone banner, mailer | Image 4 · Audio 3 · mailer named | PASS |
| 13-16s | End card | Video 2 · Audio 4 | PASS |

**e) Limits**: images 5 · videos 2 (14.04 + 4.5 = 18.54 s, each 4–30 s) · audio 4 (11.0 + 11.44 + 2.6 + 4.5 = 29.54 s) · 11 assets. **PASS**.

**Pass 2 first check: 5 FAILs**: (1) second orb in the memory; (2) half-laugh aha; (3) "Noted." instead of the decision line; (4) finger-on-Discard delete; (5) no movement trend at the boundary.

### Pass 2 fixes
- 2-5s: `Her phone shows a shopping cart with a coral bikini named "Sunset". Scout is not in the memory; his voice comes through her earbud. Scout, off-screen, …`
- Boundary: `…her lips closed, her turn toward the orb just finished so she and the orb are both still,…`
- 8-10s: the pull-back lands on her already motionless: "she stops dead, eyes wide, her free hand pressed to her forehead. No smile. … The owner, in natural English, stunned, a genuine shock of realisation, says: {Oh my god... I'm training them to wait.}"
- 10-13s: `Hard cut, seen from behind her at the laptop, over her shoulder: her Shopify admin now shows her list of weekly discounts, all ticked. The owner, in natural English, decided and firm, says: {You know what? Let's delete all these discounts.} Her hand on the trackpad clicks Delete, the list empties, and a dark toast reading "Discount deleted" pops up at the bottom of the screen.`
- Image 3 is now "the laptop screen at the start…, only until the hard cut at 10s"; the summary line now says she "deletes all her weekly discounts".
- **Timing:** the two new lines add 10 spoken words. At the same pace as before (aha 2 s, a 3 s delete shot), pass 2 needs **17 s**: 13-14s order banner + ka-ching + "Glad I asked" (off-screen; the kraft mailer is dropped from this 1 s beat), 14-17s end card. Ka-ching and Video 2 timings moved to 13-14s and 14s. To keep the ad at 30 s, trim 1 s of pass 1's silent 13-14 s hold in the edit (the last frame stays, so the seam is untouched). Extension length is a page setting, so it is not written in the prompt; it costs about 3 more credits (3 cr/s) and needs Emile's go like any render.
- Dialogue diff: only the aha and the decision line changed; {Listen.}, Scout's question, the shopper's line, {Glad I asked.} and the end line are unchanged.
- `pass2-sd25pe-skill.txt` was updated to the same bytes as `prompt-sd25pe-final.txt`; the page's three copies (#fPe, #sdRaw2, the pass-2 part of #raw) match the file.

### Pass 2, second check
**a)** 1 PASS · 2 **PASS** (one orb only; Nov 15 lines and delete applied) · 3 PASS · 4 PASS · 5 PASS · 6 N/A · 7 PASS · 8 N/A · 9 PASS · 10 PASS · 11 PASS (each range one change: "the list empties, and a dark toast… pops up") · 12 PASS (ranges re-timed by the script owner, continuous 0-17s) · 13 N/A · 14 PASS · 15 **PASS** ("she and the orb are both still") · 16–19 N/A · 20 **PASS** ("stops dead, eyes wide, her free hand pressed to her forehead. No smile.") · 21 PASS (new lines "in natural English", on-screen; Glad I asked off-screen) · 22 PASS · 23 PASS · 24 PASS (no gate line on an extension) · 25 N/A · 26 PASS · 27 PASS.
**b)** Principles 1–11 all **PASS**.
**c)** Forward-extension template: all PASS.
**d)** Shot table: 2-5s shopper Image 1, cart named, Scout off-screen voice Audio 4 **PASS**; 8-10s owner (Video 1 world), Audio 1 **PASS**; 10-13s owner from behind, discounts list and "Discount deleted" toast named, Audio 1 **PASS**; 13-14s Image 4 + Audio 3 **PASS**; 14-17s Video 2 + Audio 4 **PASS**.
**e)** Limits unchanged **PASS**.

**Pass 2 second check: 0 FAILs.**

## Also checked: prompt-sd25pe-final.txt
Same bytes as pass2-sd25pe-skill.txt before and after the fix; covered by the pass 2 check above.

## Open for the Marketer / Emile
- Pass 2 at 17 s plus a 1 s trim of pass 1, or keep 16 s and squeeze the end line into 2 s (not advised: 10 words in 2 s).
- The rendered 30 s ad (refund-ad-full-30s-v2.mp4) already patched the delete shot by hand on H229; it still has the old "half laugh" aha and "Noted." Matching it to the Nov 15 lines means a new pass 2 take (paid, needs Emile's go).

---

## Addendum, Nov 15 (Marketer's request): Image 6 for the delete beat

Added **@Image6 = a/delete-toast.jpg** (752x1344, copy of H217 Team C `a/image9-kf9.jpg`, a built frame): seen from behind her at the laptop, her right hand on the trackpad, a dark "Discount deleted" toast on the screen. New prompt lines:
- `The delete shot at 10-13s references @Image6; use only its camera position behind her over her shoulder, her hand on the laptop trackpad and the dark "Discount deleted" toast at the bottom of the screen. Do not use the page text behind the toast.`
- `10-13s (reference: @Image6): Hard cut, seen from behind her at the laptop, over her shoulder: …`

Its page behind the toast shows the single SUNSET20 discount struck through, while the prompt asks for a list of weekly discounts that empties; hence "do not use the page text behind the toast". Re-check of the changed items: checklist 4 PASS (Image 6 has one role: the framing and toast of one beat), 7 PASS (every upload has a role), 9 PASS, 26 PASS; template: the extension boundary still belongs to @Video1 ("The other reference assets must not replace this boundary frame") PASS; shot table 10-13s: owner from behind = Video 1 world, framing and toast = Image 6, discounts list named, Audio 1 PASS; limits: 6 images, 2 videos (18.54 s), 4 audio (29.54 s), 12 assets PASS. **Still 0 FAILs.** Backup of the prompt before this addendum: `prompt-sd25pe-final.post-check1.txt`.

Page: a "Changed Nov 15 (Emile)" box at the top (old aha and "Noted." struck through, the new delete beat, the Image 6 frame); a pass 2 card for Image 6; asset pictures now show whole (object-fit contain), so the landscape "Create discount" screen (Image 3) is no longer cropped. Checked at localhost:4330: all 21 upload cards present in upload order, every image loads, no sideways scroll at phone width.
