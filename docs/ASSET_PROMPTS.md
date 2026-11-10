# Asset Prompts — Inner Pages Redesign

**Total so far: 128 images** (14 per service × 9, plus 2 page heroes). Paste the shared style block at the end of every prompt.

Generate each image in Gemini, save it with the **exact file name** to the **exact path** below, and it appears on the site automatically. Until a file exists, the page shows the listed fallback image, so nothing breaks.

## How to use

1. Copy the prompt into Gemini (image generation).
2. Export or convert to **.webp** at the listed size. Quality 82–85 is plenty.
3. Save to the path shown, e.g. `public/assets/pages/hat/hat-hero.webp`.
4. Refresh the page (dev) or rebuild (production). The page picks the new file over the fallback automatically.

> **Transparent images:** Gemini often paints a fake grey/white checkerboard instead of real transparency. None of the images below need transparency (they all sit on dark backgrounds). If one ever does, tell me and I'll cut the checkerboard out with `sharp`.

## Shared style block (paste at the end of every prompt)

```
Style: premium cinematic product photography, moody studio lighting, deep charcoal background (#111515), accents in signal red (#f31e39) and dark wine (#541a24), ivory/cream thread highlights (#f0ede4). Shallow depth of field, crisp macro detail of real embroidery thread texture, subtle red rim light. No text, no watermarks, no logos of real brands, no people's faces.
```

---

## Hat / Cap Digitizing — `/hat-embroidery-digitizing-services`

Folder: `public/assets/pages/hat/`

| # | File | Size | Used in | Fallback now |
|---|---|---|---|---|
| 1 | `hat-hero.webp` | 1600×1200 (4:3) | Hero image | `3d/service-cap-crown.jpg` |
| 2 | `hat-before-flat-file.webp` | 1400×1400 (1:1) | Before/After: left "Flat file" | `tiger-bad.webp` |
| 3 | `hat-after-cap-file.webp` | 1400×1400 (1:1) | Before/After: right "Cap file" | `tiger-digitized.webp` |
| 4 | `hat-eng-sequencing.webp` | 1200×1500 (4:5) | Engineering card 01 | `3d/service-cap-crown.jpg` |
| 5 | `hat-eng-underlay.webp` | 1200×1500 (4:5) | Engineering card 02 | `showcase/portfolio-detail.webp` |
| 6 | `hat-eng-pull-comp.webp` | 1200×1500 (4:5) | Engineering card 03 | `showcase/portfolio-logo.webp` |
| 7 | `hat-eng-sizing.webp` | 1200×1500 (4:5) | Engineering card 04 | `showcase/portfolio-cap.webp` |
| 8 | `hat-eng-puff.webp` | 1200×1500 (4:5) | Engineering card 05 | `3d/service-puff-macro.jpg` |
| 9 | `hat-app-structured.webp` | 1000×1250 (4:5) | Applications reel 01 | `showcase/portfolio-cap.webp` |
| 10 | `hat-app-dad-hat.webp` | 1000×1250 (4:5) | Applications reel 02 | `cap.jpg` |
| 11 | `hat-app-trucker.webp` | 1000×1250 (4:5) | Applications reel 03 | `3d/service-cap-crown.jpg` |
| 12 | `hat-app-snapback.webp` | 1000×1250 (4:5) | Applications reel 04 | `showcase/portfolio-puff.webp` |
| 13 | `hat-app-beanie.webp` | 1000×1250 (4:5) | Applications reel 05 | `showcase/portfolio-detail.webp` |
| 14 | `hat-app-visor.webp` | 1000×1250 (4:5) | Applications reel 06 | `showcase/portfolio-logo.webp` |

### 1 · `hat-hero.webp`
```
A black structured six-panel baseball cap floating at a three-quarter angle, front panel facing the camera, with a bold abstract geometric emblem embroidered on the front in red and ivory satin stitches. Thin glowing red wireframe lines trace the cap's curved crown like a digital stitch-path overlay. Plenty of dark empty space on the left. 4:3 landscape.
```

### 2 + 3 · Before/After pair (must line up pixel-for-pixel)
Generate **#3 first**, then ask Gemini to edit **that exact image** to make #2. Both images need identical framing so the drag-wipe lines up.

**#3 `hat-after-cap-file.webp`**
```
Straight-on close-up of the front panel of a black structured cap with an embroidered red-and-ivory circular team-crest logo with bold lettering. Perfect embroidery: crisp satin borders that meet the fills exactly, smooth flat tatami fill, sharp legible letters, stitches lying flat across the center seam. Camera perfectly frontal and centered, square 1:1 crop.
```
**#2 `hat-before-flat-file.webp`** (edit of #3)
```
Edit this exact image, keeping identical framing, camera angle and logo position. Make the embroidery look badly digitized: visible gaps between outlines and fills, puckered rippling fabric around the design, thread bunching and a broken stitch where the design crosses the center seam, small letters blurred into thread mush, jagged uneven edges. Slightly flatter, duller lighting.
```

### 4 · `hat-eng-sequencing.webp`
```
Front view of a black cap panel with an embroidered emblem, overlaid with a technical diagram: thin glowing red arrows radiating from the center of the design outward to the sides and upward from the brim, plus small numbered dots showing stitch order. Engineering-blueprint feel, dark and cinematic. Vertical 4:5.
```

### 5 · `hat-eng-underlay.webp`
```
Extreme macro of embroidery on a black cap crossing the raised center seam: visible zig-zag underlay stitches beneath partially-sewn red satin columns, showing the foundation layer. Shallow depth of field, thread fibers in sharp focus. Vertical 4:5.
```

### 6 · `hat-eng-pull-comp.webp`
```
Extreme macro of crisp red satin-stitch columns meeting an ivory tatami fill on curved black cap fabric, edges perfectly aligned with no gaps, glossy thread sheen catching a red rim light. Vertical 4:5.
```

### 7 · `hat-eng-sizing.webp`
```
Black structured cap front shown straight-on with an embroidered logo inside a thin glowing red dashed rectangle marking the embroidery field, with small minimal measurement tick marks on the top and side edges (no readable numbers). Technical, clean, cinematic. Vertical 4:5.
```

### 8 · `hat-eng-puff.webp`
```
Macro side angle of bold 3D puff embroidery lettering on a black cap front: raised, rounded red satin letters over foam, clean capped ends, dramatic side light showing the height and dimension. Vertical 4:5.
```

### 9–14 · Applications reel (vertical 4:5, product hero shots)
**9 `hat-app-structured.webp`**
```
Black structured high-profile baseball cap with a detailed red-and-ivory embroidered emblem on the front, studio product shot on a charcoal backdrop. Vertical 4:5.
```
**10 `hat-app-dad-hat.webp`**
```
Washed black unstructured low-profile "dad hat" with a soft slouchy crown and a small clean ivory embroidered monogram, lying casually on dark fabric. Vertical 4:5.
```
**11 `hat-app-trucker.webp`**
```
Black trucker cap with a foam front and dark mesh back, red embroidered badge-style logo on the front, three-quarter view. Vertical 4:5.
```
**12 `hat-app-snapback.webp`**
```
Black flat-bill snapback cap with bold red 3D puff embroidered lettering across the front, low angle, dramatic lighting. Vertical 4:5.
```
**13 `hat-app-beanie.webp`**
```
Charcoal ribbed knit beanie with a folded cuff, featuring a small red-and-ivory embroidered emblem on the cuff, knit texture in sharp focus. Vertical 4:5.
```
**14 `hat-app-visor.webp`**
```
Black bucket hat with a red embroidered emblem on the side panel, beside a black sports visor with an ivory embroidered wordmark shape (abstract, unreadable). Vertical 4:5.
```

---

## 3D Puff Embroidery Digitizing Services USA — `/3D-puff-embroidery-digitizing-services`

Folder: `public/assets/pages/puff/`

| # | File | Size | Used in | Fallback now |
|---|---|---|---|---|
| 1 | `puff-hero.webp` | 1600×1200 (4:3) | Hero image | `3d/service-puff-macro.jpg` |
| 2 | `puff-after-puff-file.webp` | 1400×1400 (1:1) | Before/After: right "Puff file" | `tiger-digitized.webp` |
| 3 | `puff-before-flat-file.webp` | 1400×1400 (1:1) | Before/After: left "Flat file" | `tiger-bad.webp` |
| 4 | `puff-eng-density.webp` | 1200×1500 (4:5) | Engineering card 01 (Density) | `3d/service-puff-macro.jpg` |
| 5 | `puff-eng-caps.webp` | 1200×1500 (4:5) | Engineering card 02 (Column ends) | `showcase/portfolio-puff.webp` |
| 6 | `puff-eng-widths.webp` | 1200×1500 (4:5) | Engineering card 03 (Widths) | `showcase/portfolio-cap.webp` |
| 7 | `puff-eng-underlay.webp` | 1200×1500 (4:5) | Engineering card 04 (Underlay) | `showcase/portfolio-detail.webp` |
| 8 | `puff-eng-sequence.webp` | 1200×1500 (4:5) | Engineering card 05 (Sequence) | `3d/service-cap-crown.jpg` |
| 9 | `puff-app-cap.webp` | 1000×1250 (4:5) | Applications reel 01 (Caps & snapbacks) | `showcase/portfolio-puff.webp` |
| 10 | `puff-app-varsity.webp` | 1000×1250 (4:5) | Applications reel 02 (Varsity jackets) | `showcase/portfolio-jacket.webp` |
| 11 | `puff-app-hoodie.webp` | 1000×1250 (4:5) | Applications reel 03 (Hoodies & sweats) | `showcase/portfolio-polo.webp` |
| 12 | `puff-app-team.webp` | 1000×1250 (4:5) | Applications reel 04 (Team uniforms) | `showcase/portfolio-crest.webp` |
| 13 | `puff-app-beanie.webp` | 1000×1250 (4:5) | Applications reel 05 (Beanies) | `showcase/portfolio-detail.webp` |
| 14 | `puff-app-bag.webp` | 1000×1250 (4:5) | Applications reel 06 (Bags & totes) | `showcase/portfolio-logo.webp` |

> Before/After: generate **#2 first**, then ask Gemini to edit that exact image into **#3** so the drag-wipe lines up.

### 1 · `puff-hero.webp`
```
Raised 3D puff embroidery lettering on a black cap front. Hero product shot at a dramatic three-quarter angle, thin glowing red stitch-path lines tracing the design like a digital overlay. Plenty of dark empty space on the left. 4:3 landscape.
```

### 2 · `puff-after-puff-file.webp`
```
Clean, raised 3D puff lettering with sealed ends. Camera perfectly frontal and centered, macro detail of perfect embroidery, crisp edges, flat even stitches. Square 1:1 crop. GENERATE THIS ONE FIRST.
```

### 3 · `puff-before-flat-file.webp`
```
Edit this exact image (the "Puff file" image), keeping identical framing, camera angle and design position. Foam showing through thin stitches on badly digitized puff. Make the embroidery look badly digitized: gaps, puckering, uneven stitches. Slightly flatter, duller lighting.
```

### 4 · `puff-eng-density.webp`
```
Macro of dense satin stitches over 3D puff foam. Extreme macro, thread fibers in sharp focus, technical and cinematic, optional thin glowing red diagram lines. Vertical 4:5.
```

### 5 · `puff-eng-caps.webp`
```
Close-up of capped column ends on puff lettering. Extreme macro, thread fibers in sharp focus, technical and cinematic, optional thin glowing red diagram lines. Vertical 4:5.
```

### 6 · `puff-eng-widths.webp`
```
Puff lettering with even satin column widths. Extreme macro, thread fibers in sharp focus, technical and cinematic, optional thin glowing red diagram lines. Vertical 4:5.
```

### 7 · `puff-eng-underlay.webp`
```
Diagram of light underlay beneath raised puff stitches. Extreme macro, thread fibers in sharp focus, technical and cinematic, optional thin glowing red diagram lines. Vertical 4:5.
```

### 8 · `puff-eng-sequence.webp`
```
Cap in a hoop with foam placed for the puff layer. Extreme macro, thread fibers in sharp focus, technical and cinematic, optional thin glowing red diagram lines. Vertical 4:5.
```

### 9 · `puff-app-cap.webp`
```
Snapback cap with 3D puff lettering, embroidery in red and ivory thread. Studio product shot on a charcoal backdrop, dramatic side light. Vertical 4:5.
```

### 10 · `puff-app-varsity.webp`
```
Varsity jacket with raised embroidered initials, embroidery in red and ivory thread. Studio product shot on a charcoal backdrop, dramatic side light. Vertical 4:5.
```

### 11 · `puff-app-hoodie.webp`
```
Hoodie with 3D puff chest logo, embroidery in red and ivory thread. Studio product shot on a charcoal backdrop, dramatic side light. Vertical 4:5.
```

### 12 · `puff-app-team.webp`
```
Team uniform with raised embroidered crest, embroidery in red and ivory thread. Studio product shot on a charcoal backdrop, dramatic side light. Vertical 4:5.
```

### 13 · `puff-app-beanie.webp`
```
Knit beanie with 3D puff cuff logo, embroidery in red and ivory thread. Studio product shot on a charcoal backdrop, dramatic side light. Vertical 4:5.
```

### 14 · `puff-app-bag.webp`
```
Canvas tote with 3D puff embroidered logo, embroidery in red and ivory thread. Studio product shot on a charcoal backdrop, dramatic side light. Vertical 4:5.
```


---

## Professional Embroidery Digitizing Services USA — `/logo-embroidery-digitizing-services`

Folder: `public/assets/pages/logo/`

| # | File | Size | Used in | Fallback now |
|---|---|---|---|---|
| 1 | `logo-hero.webp` | 1600×1200 (4:3) | Hero image | `3d/service-logo-lion.jpg` |
| 2 | `logo-after-hand.webp` | 1400×1400 (1:1) | Before/After: right "Hand-digitized" | `tiger-digitized.webp` |
| 3 | `logo-before-auto.webp` | 1400×1400 (1:1) | Before/After: left "Auto-traced" | `tiger-bad.webp` |
| 4 | `logo-eng-stitch-types.webp` | 1200×1500 (4:5) | Engineering card 01 (Stitch types) | `showcase/portfolio-logo.webp` |
| 5 | `logo-eng-lettering.webp` | 1200×1500 (4:5) | Engineering card 02 (Lettering) | `showcase/portfolio-detail.webp` |
| 6 | `logo-eng-fabric.webp` | 1200×1500 (4:5) | Engineering card 03 (Fabric) | `showcase/portfolio-polo.webp` |
| 7 | `logo-eng-color.webp` | 1200×1500 (4:5) | Engineering card 04 (Color) | `showcase/portfolio-crest.webp` |
| 8 | `logo-eng-sizing.webp` | 1200×1500 (4:5) | Engineering card 05 (Sizing) | `showcase/portfolio-jacket.webp` |
| 9 | `logo-app-polo.webp` | 1000×1250 (4:5) | Applications reel 01 (Polos & left chest) | `showcase/portfolio-polo.webp` |
| 10 | `logo-app-cap.webp` | 1000×1250 (4:5) | Applications reel 02 (Caps & headwear) | `showcase/portfolio-cap.webp` |
| 11 | `logo-app-jacket.webp` | 1000×1250 (4:5) | Applications reel 03 (Jackets & outerwear) | `showcase/portfolio-jacket.webp` |
| 12 | `logo-app-uniform.webp` | 1000×1250 (4:5) | Applications reel 04 (Uniforms & workwear) | `showcase/portfolio-crest.webp` |
| 13 | `logo-app-bag.webp` | 1000×1250 (4:5) | Applications reel 05 (Bags & accessories) | `showcase/portfolio-logo.webp` |
| 14 | `logo-app-patch.webp` | 1000×1250 (4:5) | Applications reel 06 (Patches & badges) | `showcase/portfolio-patch.webp` |

> Before/After: generate **#2 first**, then ask Gemini to edit that exact image into **#3** so the drag-wipe lines up.

### 1 · `logo-hero.webp`
```
Detailed embroidered logo with layered satin and fill stitches. Hero product shot at a dramatic three-quarter angle, thin glowing red stitch-path lines tracing the design like a digital overlay. Plenty of dark empty space on the left. 4:3 landscape.
```

### 2 · `logo-after-hand.webp`
```
Hand-digitized logo with crisp edges and smooth fills. Camera perfectly frontal and centered, macro detail of perfect embroidery, crisp edges, flat even stitches. Square 1:1 crop. GENERATE THIS ONE FIRST.
```

### 3 · `logo-before-auto.webp`
```
Edit this exact image (the "Hand-digitized" image), keeping identical framing, camera angle and design position. Auto-digitized logo with jagged edges and uneven fill. Make the embroidery look badly digitized: gaps, puckering, uneven stitches. Slightly flatter, duller lighting.
```

### 4 · `logo-eng-stitch-types.webp`
```
Macro of satin, fill and run stitches side by side. Extreme macro, thread fibers in sharp focus, technical and cinematic, optional thin glowing red diagram lines. Vertical 4:5.
```

### 5 · `logo-eng-lettering.webp`
```
Macro of crisp small embroidered lettering. Extreme macro, thread fibers in sharp focus, technical and cinematic, optional thin glowing red diagram lines. Vertical 4:5.
```

### 6 · `logo-eng-fabric.webp`
```
Left-chest logo embroidered on a piqué polo. Extreme macro, thread fibers in sharp focus, technical and cinematic, optional thin glowing red diagram lines. Vertical 4:5.
```

### 7 · `logo-eng-color.webp`
```
Embroidered crest with a clean multi-color thread plan. Extreme macro, thread fibers in sharp focus, technical and cinematic, optional thin glowing red diagram lines. Vertical 4:5.
```

### 8 · `logo-eng-sizing.webp`
```
Same logo embroidered at chest and jacket-back sizes. Extreme macro, thread fibers in sharp focus, technical and cinematic, optional thin glowing red diagram lines. Vertical 4:5.
```

### 9 · `logo-app-polo.webp`
```
Polo shirt with left-chest embroidered logo, embroidery in red and ivory thread. Studio product shot on a charcoal backdrop, dramatic side light. Vertical 4:5.
```

### 10 · `logo-app-cap.webp`
```
Cap with embroidered company logo, embroidery in red and ivory thread. Studio product shot on a charcoal backdrop, dramatic side light. Vertical 4:5.
```

### 11 · `logo-app-jacket.webp`
```
Jacket back with large embroidered logo, embroidery in red and ivory thread. Studio product shot on a charcoal backdrop, dramatic side light. Vertical 4:5.
```

### 12 · `logo-app-uniform.webp`
```
Work uniform with embroidered company crest, embroidery in red and ivory thread. Studio product shot on a charcoal backdrop, dramatic side light. Vertical 4:5.
```

### 13 · `logo-app-bag.webp`
```
Canvas bag with embroidered logo, embroidery in red and ivory thread. Studio product shot on a charcoal backdrop, dramatic side light. Vertical 4:5.
```

### 14 · `logo-app-patch.webp`
```
Embroidered logo patch with merrowed border, embroidery in red and ivory thread. Studio product shot on a charcoal backdrop, dramatic side light. Vertical 4:5.
```


---

## Embroidery Patch Digitizing USA — `/embroidered-patch-digitizing-services`

Folder: `public/assets/pages/patch/`

| # | File | Size | Used in | Fallback now |
|---|---|---|---|---|
| 1 | `patch-hero.webp` | 1600×1200 (4:3) | Hero image | `3d/service-patch-wings.jpg` |
| 2 | `patch-after-patch-file.webp` | 1400×1400 (1:1) | Before/After: right "Patch file" | `tiger-digitized.webp` |
| 3 | `patch-before-garment-file.webp` | 1400×1400 (1:1) | Before/After: left "Garment file" | `tiger-bad.webp` |
| 4 | `patch-eng-coverage.webp` | 1200×1500 (4:5) | Engineering card 01 (Coverage) | `showcase/portfolio-patch.webp` |
| 5 | `patch-eng-border.webp` | 1200×1500 (4:5) | Engineering card 02 (Border) | `3d/service-patch-wings.jpg` |
| 6 | `patch-eng-sequence.webp` | 1200×1500 (4:5) | Engineering card 03 (Sequence) | `showcase/portfolio-crest.webp` |
| 7 | `patch-eng-flat.webp` | 1200×1500 (4:5) | Engineering card 04 (Flatness) | `showcase/portfolio-detail.webp` |
| 8 | `patch-eng-cutting.webp` | 1200×1500 (4:5) | Engineering card 05 (Cutting) | `3d/hero-phoenix-hoop.jpg` |
| 9 | `patch-app-uniform.webp` | 1000×1250 (4:5) | Applications reel 01 (Uniform & work patches) | `showcase/portfolio-crest.webp` |
| 10 | `patch-app-club.webp` | 1000×1250 (4:5) | Applications reel 02 (Club & motorcycle) | `showcase/portfolio-jacket.webp` |
| 11 | `patch-app-velcro.webp` | 1000×1250 (4:5) | Applications reel 03 (Hook & loop / morale) | `showcase/portfolio-patch.webp` |
| 12 | `patch-app-brand.webp` | 1000×1250 (4:5) | Applications reel 04 (Brand & merch) | `showcase/portfolio-cap.webp` |
| 13 | `patch-app-scouts.webp` | 1000×1250 (4:5) | Applications reel 05 (Scouts & schools) | `3d/service-patch-wings.jpg` |
| 14 | `patch-app-iron-on.webp` | 1000×1250 (4:5) | Applications reel 06 (Iron-on & peel-and-stick) | `showcase/portfolio-logo.webp` |

> Before/After: generate **#2 first**, then ask Gemini to edit that exact image into **#3** so the drag-wipe lines up.

### 1 · `patch-hero.webp`
```
Embroidered patch with satin border and full-coverage fill. Hero product shot at a dramatic three-quarter angle, thin glowing red stitch-path lines tracing the design like a digital overlay. Plenty of dark empty space on the left. 4:3 landscape.
```

### 2 · `patch-after-patch-file.webp`
```
Clean embroidered patch with full coverage and tight border. Camera perfectly frontal and centered, macro detail of perfect embroidery, crisp edges, flat even stitches. Square 1:1 crop. GENERATE THIS ONE FIRST.
```

### 3 · `patch-before-garment-file.webp`
```
Edit this exact image (the "Patch file" image), keeping identical framing, camera angle and design position. Patch with twill showing through and a frayed edge. Make the embroidery look badly digitized: gaps, puckering, uneven stitches. Slightly flatter, duller lighting.
```

### 4 · `patch-eng-coverage.webp`
```
Macro of dense full-coverage patch fill. Extreme macro, thread fibers in sharp focus, technical and cinematic, optional thin glowing red diagram lines. Vertical 4:5.
```

### 5 · `patch-eng-border.webp`
```
Close-up of a raised satin patch border. Extreme macro, thread fibers in sharp focus, technical and cinematic, optional thin glowing red diagram lines. Vertical 4:5.
```

### 6 · `patch-eng-sequence.webp`
```
Patch shown in stages from placement line to border. Extreme macro, thread fibers in sharp focus, technical and cinematic, optional thin glowing red diagram lines. Vertical 4:5.
```

### 7 · `patch-eng-flat.webp`
```
Flat embroidered patch on a dark table. Extreme macro, thread fibers in sharp focus, technical and cinematic, optional thin glowing red diagram lines. Vertical 4:5.
```

### 8 · `patch-eng-cutting.webp`
```
Sheet of embroidered patches being laser cut. Extreme macro, thread fibers in sharp focus, technical and cinematic, optional thin glowing red diagram lines. Vertical 4:5.
```

### 9 · `patch-app-uniform.webp`
```
Work uniform with embroidered patch, embroidery in red and ivory thread. Studio product shot on a charcoal backdrop, dramatic side light. Vertical 4:5.
```

### 10 · `patch-app-club.webp`
```
Leather vest with embroidered club patches, embroidery in red and ivory thread. Studio product shot on a charcoal backdrop, dramatic side light. Vertical 4:5.
```

### 11 · `patch-app-velcro.webp`
```
Hook-and-loop backed embroidered patch, embroidery in red and ivory thread. Studio product shot on a charcoal backdrop, dramatic side light. Vertical 4:5.
```

### 12 · `patch-app-brand.webp`
```
Cap with sewn-on embroidered brand patch, embroidery in red and ivory thread. Studio product shot on a charcoal backdrop, dramatic side light. Vertical 4:5.
```

### 13 · `patch-app-scouts.webp`
```
Collection of embroidered badge patches, embroidery in red and ivory thread. Studio product shot on a charcoal backdrop, dramatic side light. Vertical 4:5.
```

### 14 · `patch-app-iron-on.webp`
```
Iron-on embroidered patch on denim, embroidery in red and ivory thread. Studio product shot on a charcoal backdrop, dramatic side light. Vertical 4:5.
```


---

## Applique Digitizing Services USA — `/applique-embroidery-digitizing-services`

Folder: `public/assets/pages/applique/`

| # | File | Size | Used in | Fallback now |
|---|---|---|---|---|
| 1 | `applique-hero.webp` | 1600×1200 (4:3) | Hero image | `showcase/portfolio-jacket.webp` |
| 2 | `applique-after-good.webp` | 1400×1400 (1:1) | Before/After: right "Our file" | `tiger-digitized.webp` |
| 3 | `applique-before-bad.webp` | 1400×1400 (1:1) | Before/After: left "Weak file" | `tiger-bad.webp` |
| 4 | `applique-eng-placement.webp` | 1200×1500 (4:5) | Engineering card 01 (Placement) | `tf-pathing.jpg` |
| 5 | `applique-eng-tackdown.webp` | 1200×1500 (4:5) | Engineering card 02 (Tack-down) | `showcase/portfolio-detail.webp` |
| 6 | `applique-eng-cover.webp` | 1200×1500 (4:5) | Engineering card 03 (Cover) | `showcase/portfolio-crest.webp` |
| 7 | `applique-eng-layers.webp` | 1200×1500 (4:5) | Engineering card 04 (Layers) | `showcase/portfolio-jacket.webp` |
| 8 | `applique-eng-cutting.webp` | 1200×1500 (4:5) | Engineering card 05 (Cutting) | `3d/hero-phoenix-hoop.jpg` |
| 9 | `applique-app-varsity.webp` | 1000×1250 (4:5) | Applications reel 01 (Varsity letters) | `showcase/portfolio-jacket.webp` |
| 10 | `applique-app-greek.webp` | 1000×1250 (4:5) | Applications reel 02 (Greek & sorority) | `showcase/portfolio-crest.webp` |
| 11 | `applique-app-numbers.webp` | 1000×1250 (4:5) | Applications reel 03 (Team numbers) | `showcase/portfolio-polo.webp` |
| 12 | `applique-app-kids.webp` | 1000×1250 (4:5) | Applications reel 04 (Kids & baby wear) | `showcase/portfolio-detail.webp` |
| 13 | `applique-app-jacket.webp` | 1000×1250 (4:5) | Applications reel 05 (Jacket backs) | `3d/service-patch-wings.jpg` |
| 14 | `applique-app-home.webp` | 1000×1250 (4:5) | Applications reel 06 (Home & quilts) | `showcase/portfolio-patch.webp` |

> Before/After: generate **#2 first**, then ask Gemini to edit that exact image into **#3** so the drag-wipe lines up.

### 1 · `applique-hero.webp`
```
Layered appliqué lettering on a jacket with satin cover stitch. Hero product shot at a dramatic three-quarter angle, thin glowing red stitch-path lines tracing the design like a digital overlay. Plenty of dark empty space on the left. 4:3 landscape.
```

### 2 · `applique-after-good.webp`
```
Clean appliqué with fabric sealed under a satin border. Camera perfectly frontal and centered, macro detail of perfect embroidery, crisp edges, flat even stitches. Square 1:1 crop. GENERATE THIS ONE FIRST.
```

### 3 · `applique-before-bad.webp`
```
Edit this exact image (the "Our file" image), keeping identical framing, camera angle and design position. Appliqué with shifted fabric and frayed raw edges. Make the embroidery look badly digitized: gaps, puckering, uneven stitches. Slightly flatter, duller lighting.
```

### 4 · `applique-eng-placement.webp`
```
Placement run line stitched on a garment before fabric is laid. Extreme macro, thread fibers in sharp focus, technical and cinematic, optional thin glowing red diagram lines. Vertical 4:5.
```

### 5 · `applique-eng-tackdown.webp`
```
Macro of zig-zag tack-down stitch holding appliqué fabric. Extreme macro, thread fibers in sharp focus, technical and cinematic, optional thin glowing red diagram lines. Vertical 4:5.
```

### 6 · `applique-eng-cover.webp`
```
Satin cover stitch wrapping the edge of an appliqué letter. Extreme macro, thread fibers in sharp focus, technical and cinematic, optional thin glowing red diagram lines. Vertical 4:5.
```

### 7 · `applique-eng-layers.webp`
```
Layered twill appliqué letters with multiple outlines. Extreme macro, thread fibers in sharp focus, technical and cinematic, optional thin glowing red diagram lines. Vertical 4:5.
```

### 8 · `applique-eng-cutting.webp`
```
Laser-cut appliqué fabric pieces ready for stitching. Extreme macro, thread fibers in sharp focus, technical and cinematic, optional thin glowing red diagram lines. Vertical 4:5.
```

### 9 · `applique-app-varsity.webp`
```
Varsity jacket with layered appliqué letter, embroidery in red and ivory thread. Studio product shot on a charcoal backdrop, dramatic side light. Vertical 4:5.
```

### 10 · `applique-app-greek.webp`
```
Sweatshirt with Greek appliqué letters, embroidery in red and ivory thread. Studio product shot on a charcoal backdrop, dramatic side light. Vertical 4:5.
```

### 11 · `applique-app-numbers.webp`
```
Sports jersey with appliqué numbers, embroidery in red and ivory thread. Studio product shot on a charcoal backdrop, dramatic side light. Vertical 4:5.
```

### 12 · `applique-app-kids.webp`
```
Kids' clothing with soft appliqué shapes, embroidery in red and ivory thread. Studio product shot on a charcoal backdrop, dramatic side light. Vertical 4:5.
```

### 13 · `applique-app-jacket.webp`
```
Jacket back with large layered appliqué design, embroidery in red and ivory thread. Studio product shot on a charcoal backdrop, dramatic side light. Vertical 4:5.
```

### 14 · `applique-app-home.webp`
```
Quilt block with stitched appliqué motif, embroidery in red and ivory thread. Studio product shot on a charcoal backdrop, dramatic side light. Vertical 4:5.
```


---

## Towel Digitizing Services — `/towel-embroidery-digitizing-services`

Folder: `public/assets/pages/towel/`

| # | File | Size | Used in | Fallback now |
|---|---|---|---|---|
| 1 | `towel-hero.webp` | 1600×1200 (4:3) | Hero image | `showcase/portfolio-detail.webp` |
| 2 | `towel-after-knockdown.webp` | 1400×1400 (1:1) | Before/After: right "Towel file" | `tiger-digitized.webp` |
| 3 | `towel-before-sunk.webp` | 1400×1400 (1:1) | Before/After: left "Regular file" | `tiger-bad.webp` |
| 4 | `towel-eng-knockdown.webp` | 1200×1500 (4:5) | Engineering card 01 (Knockdown) | `showcase/portfolio-detail.webp` |
| 5 | `towel-eng-underlay.webp` | 1200×1500 (4:5) | Engineering card 02 (Underlay) | `showcase/portfolio-crest.webp` |
| 6 | `towel-eng-satin.webp` | 1200×1500 (4:5) | Engineering card 03 (Satins) | `showcase/portfolio-logo.webp` |
| 7 | `towel-eng-topping.webp` | 1200×1500 (4:5) | Engineering card 04 (Topping) | `tf-finished.jpg` |
| 8 | `towel-eng-placement.webp` | 1200×1500 (4:5) | Engineering card 05 (Placement) | `showcase/portfolio-patch.webp` |
| 9 | `towel-app-bath.webp` | 1000×1250 (4:5) | Applications reel 01 (Bath & hand towels) | `showcase/portfolio-detail.webp` |
| 10 | `towel-app-hotel.webp` | 1000×1250 (4:5) | Applications reel 02 (Hotel & spa) | `showcase/portfolio-crest.webp` |
| 11 | `towel-app-golf.webp` | 1000×1250 (4:5) | Applications reel 03 (Golf towels) | `showcase/portfolio-logo.webp` |
| 12 | `towel-app-beach.webp` | 1000×1250 (4:5) | Applications reel 04 (Beach towels) | `3d/service-patch-wings.jpg` |
| 13 | `towel-app-baby.webp` | 1000×1250 (4:5) | Applications reel 05 (Baby & hooded) | `showcase/portfolio-puff.webp` |
| 14 | `towel-app-robe.webp` | 1000×1250 (4:5) | Applications reel 06 (Robes) | `showcase/portfolio-polo.webp` |

> Before/After: generate **#2 first**, then ask Gemini to edit that exact image into **#3** so the drag-wipe lines up.

### 1 · `towel-hero.webp`
```
Embroidered monogram sitting crisply on top of plush terry towel. Hero product shot at a dramatic three-quarter angle, thin glowing red stitch-path lines tracing the design like a digital overlay. Plenty of dark empty space on the left. 4:3 landscape.
```

### 2 · `towel-after-knockdown.webp`
```
Crisp embroidery on a towel with flattened pile beneath. Camera perfectly frontal and centered, macro detail of perfect embroidery, crisp edges, flat even stitches. Square 1:1 crop. GENERATE THIS ONE FIRST.
```

### 3 · `towel-before-sunk.webp`
```
Edit this exact image (the "Towel file" image), keeping identical framing, camera angle and design position. Embroidery sinking into towel pile with loops poking through. Make the embroidery look badly digitized: gaps, puckering, uneven stitches. Slightly flatter, duller lighting.
```

### 4 · `towel-eng-knockdown.webp`
```
Macro of a knockdown stitch flattening terry loops. Extreme macro, thread fibers in sharp focus, technical and cinematic, optional thin glowing red diagram lines. Vertical 4:5.
```

### 5 · `towel-eng-underlay.webp`
```
Diagram of heavy underlay under towel embroidery. Extreme macro, thread fibers in sharp focus, technical and cinematic, optional thin glowing red diagram lines. Vertical 4:5.
```

### 6 · `towel-eng-satin.webp`
```
Wide satin monogram on a plush towel. Extreme macro, thread fibers in sharp focus, technical and cinematic, optional thin glowing red diagram lines. Vertical 4:5.
```

### 7 · `towel-eng-topping.webp`
```
Towel embroidery with water-soluble topping being removed. Extreme macro, thread fibers in sharp focus, technical and cinematic, optional thin glowing red diagram lines. Vertical 4:5.
```

### 8 · `towel-eng-placement.webp`
```
Monogram placed above the dobby band of a bath towel. Extreme macro, thread fibers in sharp focus, technical and cinematic, optional thin glowing red diagram lines. Vertical 4:5.
```

### 9 · `towel-app-bath.webp`
```
Stack of monogrammed bath towels, embroidery in red and ivory thread. Studio product shot on a charcoal backdrop, dramatic side light. Vertical 4:5.
```

### 10 · `towel-app-hotel.webp`
```
Hotel towels with embroidered logo, embroidery in red and ivory thread. Studio product shot on a charcoal backdrop, dramatic side light. Vertical 4:5.
```

### 11 · `towel-app-golf.webp`
```
Golf towel with embroidered club crest, embroidery in red and ivory thread. Studio product shot on a charcoal backdrop, dramatic side light. Vertical 4:5.
```

### 12 · `towel-app-beach.webp`
```
Beach towel with large embroidered name, embroidery in red and ivory thread. Studio product shot on a charcoal backdrop, dramatic side light. Vertical 4:5.
```

### 13 · `towel-app-baby.webp`
```
Hooded baby towel with embroidered name, embroidery in red and ivory thread. Studio product shot on a charcoal backdrop, dramatic side light. Vertical 4:5.
```

### 14 · `towel-app-robe.webp`
```
Terry bathrobe with chest monogram, embroidery in red and ivory thread. Studio product shot on a charcoal backdrop, dramatic side light. Vertical 4:5.
```


---

## Glove Embroidery Digitizing Services USA — `/glove-embroidery-digitizing-services`

Folder: `public/assets/pages/glove/`

| # | File | Size | Used in | Fallback now |
|---|---|---|---|---|
| 1 | `glove-hero.webp` | 1600×1200 (4:3) | Hero image | `showcase/portfolio-logo.webp` |
| 2 | `glove-after-tailored.webp` | 1400×1400 (1:1) | Before/After: right "Glove file" | `tiger-digitized.webp` |
| 3 | `glove-before-perforated.webp` | 1400×1400 (1:1) | Before/After: left "Garment file" | `tiger-bad.webp` |
| 4 | `glove-eng-material.webp` | 1200×1500 (4:5) | Engineering card 01 (Material) | `showcase/portfolio-logo.webp` |
| 5 | `glove-eng-density.webp` | 1200×1500 (4:5) | Engineering card 02 (Density) | `showcase/portfolio-detail.webp` |
| 6 | `glove-eng-simplify.webp` | 1200×1500 (4:5) | Engineering card 03 (Simplify) | `showcase/portfolio-crest.webp` |
| 7 | `glove-eng-placement.webp` | 1200×1500 (4:5) | Engineering card 04 (Placement) | `showcase/portfolio-polo.webp` |
| 8 | `glove-eng-hooping.webp` | 1200×1500 (4:5) | Engineering card 05 (Hooping) | `3d/hero-phoenix-hoop.jpg` |
| 9 | `glove-app-baseball.webp` | 1000×1250 (4:5) | Applications reel 01 (Baseball & softball) | `showcase/portfolio-logo.webp` |
| 10 | `glove-app-golf.webp` | 1000×1250 (4:5) | Applications reel 02 (Batting & golf) | `showcase/portfolio-detail.webp` |
| 11 | `glove-app-work.webp` | 1000×1250 (4:5) | Applications reel 03 (Work & safety) | `showcase/portfolio-crest.webp` |
| 12 | `glove-app-knit.webp` | 1000×1250 (4:5) | Applications reel 04 (Winter & knit) | `showcase/portfolio-puff.webp` |
| 13 | `glove-app-fashion.webp` | 1000×1250 (4:5) | Applications reel 05 (Fashion & leather) | `showcase/portfolio-polo.webp` |
| 14 | `glove-app-promo.webp` | 1000×1250 (4:5) | Applications reel 06 (Promotional) | `3d/service-patch-wings.jpg` |

> Before/After: generate **#2 first**, then ask Gemini to edit that exact image into **#3** so the drag-wipe lines up.

### 1 · `glove-hero.webp`
```
Leather glove with a small embroidered logo on the back of the hand. Hero product shot at a dramatic three-quarter angle, thin glowing red stitch-path lines tracing the design like a digital overlay. Plenty of dark empty space on the left. 4:3 landscape.
```

### 2 · `glove-after-tailored.webp`
```
Clean small logo embroidered on a leather glove. Camera perfectly frontal and centered, macro detail of perfect embroidery, crisp edges, flat even stitches. Square 1:1 crop. GENERATE THIS ONE FIRST.
```

### 3 · `glove-before-perforated.webp`
```
Edit this exact image (the "Glove file" image), keeping identical framing, camera angle and design position. Leather glove torn along dense embroidery stitches. Make the embroidery look badly digitized: gaps, puckering, uneven stitches. Slightly flatter, duller lighting.
```

### 4 · `glove-eng-material.webp`
```
Three glove materials with embroidered logos side by side. Extreme macro, thread fibers in sharp focus, technical and cinematic, optional thin glowing red diagram lines. Vertical 4:5.
```

### 5 · `glove-eng-density.webp`
```
Macro of open-fill embroidery on leather. Extreme macro, thread fibers in sharp focus, technical and cinematic, optional thin glowing red diagram lines. Vertical 4:5.
```

### 6 · `glove-eng-simplify.webp`
```
Detailed logo simplified for a small glove placement. Extreme macro, thread fibers in sharp focus, technical and cinematic, optional thin glowing red diagram lines. Vertical 4:5.
```

### 7 · `glove-eng-placement.webp`
```
Glove placements marked: back, cuff and thumb. Extreme macro, thread fibers in sharp focus, technical and cinematic, optional thin glowing red diagram lines. Vertical 4:5.
```

### 8 · `glove-eng-hooping.webp`
```
Glove clamped in a small embroidery frame. Extreme macro, thread fibers in sharp focus, technical and cinematic, optional thin glowing red diagram lines. Vertical 4:5.
```

### 9 · `glove-app-baseball.webp`
```
Baseball glove with embroidered name, embroidery in red and ivory thread. Studio product shot on a charcoal backdrop, dramatic side light. Vertical 4:5.
```

### 10 · `glove-app-golf.webp`
```
Golf glove with small embroidered logo, embroidery in red and ivory thread. Studio product shot on a charcoal backdrop, dramatic side light. Vertical 4:5.
```

### 11 · `glove-app-work.webp`
```
Work glove with embroidered company logo, embroidery in red and ivory thread. Studio product shot on a charcoal backdrop, dramatic side light. Vertical 4:5.
```

### 12 · `glove-app-knit.webp`
```
Knit winter glove with cuff embroidery, embroidery in red and ivory thread. Studio product shot on a charcoal backdrop, dramatic side light. Vertical 4:5.
```

### 13 · `glove-app-fashion.webp`
```
Leather fashion glove with monogram, embroidery in red and ivory thread. Studio product shot on a charcoal backdrop, dramatic side light. Vertical 4:5.
```

### 14 · `glove-app-promo.webp`
```
Branded promotional gloves, embroidery in red and ivory thread. Studio product shot on a charcoal backdrop, dramatic side light. Vertical 4:5.
```


---

## Sleeve Embroidery Digitizing Services USA — `/sleeve-embroidery-digitizing-services`

Folder: `public/assets/pages/sleeve/`

| # | File | Size | Used in | Fallback now |
|---|---|---|---|---|
| 1 | `sleeve-hero.webp` | 1600×1200 (4:3) | Hero image | `showcase/portfolio-jacket.webp` |
| 2 | `sleeve-after-straight.webp` | 1400×1400 (1:1) | Before/After: right "Sleeve file" | `tiger-digitized.webp` |
| 3 | `sleeve-before-crooked.webp` | 1400×1400 (1:1) | Before/After: left "Rotated file" | `tiger-bad.webp` |
| 4 | `sleeve-eng-sizing.webp` | 1200×1500 (4:5) | Engineering card 01 (Sizing) | `showcase/portfolio-jacket.webp` |
| 5 | `sleeve-eng-sequence.webp` | 1200×1500 (4:5) | Engineering card 02 (Sequence) | `tf-pathing.jpg` |
| 6 | `sleeve-eng-lettering.webp` | 1200×1500 (4:5) | Engineering card 03 (Lettering) | `showcase/portfolio-detail.webp` |
| 7 | `sleeve-eng-density.webp` | 1200×1500 (4:5) | Engineering card 04 (Density) | `showcase/portfolio-polo.webp` |
| 8 | `sleeve-eng-frames.webp` | 1200×1500 (4:5) | Engineering card 05 (Frames) | `3d/hero-phoenix-hoop.jpg` |
| 9 | `sleeve-app-uniform.webp` | 1000×1250 (4:5) | Applications reel 01 (Uniform sleeves) | `showcase/portfolio-crest.webp` |
| 10 | `sleeve-app-flag.webp` | 1000×1250 (4:5) | Applications reel 02 (Flags) | `showcase/portfolio-patch.webp` |
| 11 | `sleeve-app-team.webp` | 1000×1250 (4:5) | Applications reel 03 (Team & sportswear) | `showcase/portfolio-polo.webp` |
| 12 | `sleeve-app-jacket.webp` | 1000×1250 (4:5) | Applications reel 04 (Jackets & hoodies) | `showcase/portfolio-jacket.webp` |
| 13 | `sleeve-app-cuff.webp` | 1000×1250 (4:5) | Applications reel 05 (Cuffs) | `showcase/portfolio-detail.webp` |
| 14 | `sleeve-app-fashion.webp` | 1000×1250 (4:5) | Applications reel 06 (Fashion apparel) | `3d/service-patch-wings.jpg` |

> Before/After: generate **#2 first**, then ask Gemini to edit that exact image into **#3** so the drag-wipe lines up.

### 1 · `sleeve-hero.webp`
```
Jacket sleeve with vertical embroidered lettering. Hero product shot at a dramatic three-quarter angle, thin glowing red stitch-path lines tracing the design like a digital overlay. Plenty of dark empty space on the left. 4:3 landscape.
```

### 2 · `sleeve-after-straight.webp`
```
Straight vertical sleeve embroidery with even stitching. Camera perfectly frontal and centered, macro detail of perfect embroidery, crisp edges, flat even stitches. Square 1:1 crop. GENERATE THIS ONE FIRST.
```

### 3 · `sleeve-before-crooked.webp`
```
Edit this exact image (the "Sleeve file" image), keeping identical framing, camera angle and design position. Sleeve embroidery drifting off-line with puckered fabric. Make the embroidery look badly digitized: gaps, puckering, uneven stitches. Slightly flatter, duller lighting.
```

### 4 · `sleeve-eng-sizing.webp`
```
Sleeve with embroidery field marked by a red dashed outline. Extreme macro, thread fibers in sharp focus, technical and cinematic, optional thin glowing red diagram lines. Vertical 4:5.
```

### 5 · `sleeve-eng-sequence.webp`
```
Stitch path diagram running down a sleeve. Extreme macro, thread fibers in sharp focus, technical and cinematic, optional thin glowing red diagram lines. Vertical 4:5.
```

### 6 · `sleeve-eng-lettering.webp`
```
Vertical embroidered lettering down a sleeve. Extreme macro, thread fibers in sharp focus, technical and cinematic, optional thin glowing red diagram lines. Vertical 4:5.
```

### 7 · `sleeve-eng-density.webp`
```
Embroidered sleeve flexing naturally with the arm. Extreme macro, thread fibers in sharp focus, technical and cinematic, optional thin glowing red diagram lines. Vertical 4:5.
```

### 8 · `sleeve-eng-frames.webp`
```
Sleeve hooped on a tubular embroidery frame. Extreme macro, thread fibers in sharp focus, technical and cinematic, optional thin glowing red diagram lines. Vertical 4:5.
```

### 9 · `sleeve-app-uniform.webp`
```
Work uniform sleeve with embroidered emblem, embroidery in red and ivory thread. Studio product shot on a charcoal backdrop, dramatic side light. Vertical 4:5.
```

### 10 · `sleeve-app-flag.webp`
```
Embroidered flag on a uniform sleeve, embroidery in red and ivory thread. Studio product shot on a charcoal backdrop, dramatic side light. Vertical 4:5.
```

### 11 · `sleeve-app-team.webp`
```
Sports jersey sleeve with embroidered logo, embroidery in red and ivory thread. Studio product shot on a charcoal backdrop, dramatic side light. Vertical 4:5.
```

### 12 · `sleeve-app-jacket.webp`
```
Hoodie sleeve with vertical embroidered text, embroidery in red and ivory thread. Studio product shot on a charcoal backdrop, dramatic side light. Vertical 4:5.
```

### 13 · `sleeve-app-cuff.webp`
```
Shirt cuff with embroidered monogram, embroidery in red and ivory thread. Studio product shot on a charcoal backdrop, dramatic side light. Vertical 4:5.
```

### 14 · `sleeve-app-fashion.webp`
```
Fashion jacket with ornate sleeve embroidery, embroidery in red and ivory thread. Studio product shot on a charcoal backdrop, dramatic side light. Vertical 4:5.
```


---

## Vectorization Services — `/vectorization-services`

Folder: `public/assets/pages/vector/`

| # | File | Size | Used in | Fallback now |
|---|---|---|---|---|
| 1 | `vector-hero.webp` | 1600×1200 (4:3) | Hero image | `tf-pathing.jpg` |
| 2 | `vector-after-vector.webp` | 1400×1400 (1:1) | Before/After: right "Vector" | `tf-pathing.jpg` |
| 3 | `vector-before-raster.webp` | 1400×1400 (1:1) | Before/After: left "Raster" | `tiger-bad.webp` |
| 4 | `vector-eng-paths.webp` | 1200×1500 (4:5) | Engineering card 01 (Paths) | `tf-pathing.jpg` |
| 5 | `vector-eng-color.webp` | 1200×1500 (4:5) | Engineering card 02 (Color) | `showcase/portfolio-crest.webp` |
| 6 | `vector-eng-detail.webp` | 1200×1500 (4:5) | Engineering card 03 (Detail) | `showcase/portfolio-detail.webp` |
| 7 | `vector-eng-formats.webp` | 1200×1500 (4:5) | Engineering card 04 (Formats) | `tf-preview.jpg` |
| 8 | `vector-eng-production.webp` | 1200×1500 (4:5) | Engineering card 05 (Production) | `tf-finished.jpg` |
| 9 | `vector-app-screen.webp` | 1000×1250 (4:5) | Applications reel 01 (Screen printing) | `showcase/portfolio-polo.webp` |
| 10 | `vector-app-signs.webp` | 1000×1250 (4:5) | Applications reel 02 (Signs & banners) | `3d/service-patch-wings.jpg` |
| 11 | `vector-app-vinyl.webp` | 1000×1250 (4:5) | Applications reel 03 (Vinyl & heat transfer) | `showcase/portfolio-logo.webp` |
| 12 | `vector-app-laser.webp` | 1000×1250 (4:5) | Applications reel 04 (Laser engraving) | `showcase/portfolio-crest.webp` |
| 13 | `vector-app-dtf.webp` | 1000×1250 (4:5) | Applications reel 05 (DTF & DTG) | `showcase/portfolio-jacket.webp` |
| 14 | `vector-app-embroidery.webp` | 1000×1250 (4:5) | Applications reel 06 (Embroidery prep) | `3d/service-logo-lion.jpg` |

> Before/After: generate **#2 first**, then ask Gemini to edit that exact image into **#3** so the drag-wipe lines up.

### 1 · `vector-hero.webp`
```
Logo redrawn as clean vector paths with visible anchor points. Hero product shot at a dramatic three-quarter angle, thin glowing red Bézier paths and anchor-point handles overlaid on the artwork. Plenty of dark empty space on the left. 4:3 landscape.
```

### 2 · `vector-after-vector.webp`
```
Clean vector logo with smooth curves and sharp edges. Camera perfectly frontal and centered, artwork shown flat on a dark screen-like background, edges razor sharp. Square 1:1 crop. GENERATE THIS ONE FIRST.
```

### 3 · `vector-before-raster.webp`
```
Edit this exact image (the "Vector" image), keeping identical framing, camera angle and design position. Low-resolution raster logo with blurry, pixelated edges. Make it look like an enlarged low-resolution JPG: visible square pixels, blurry jagged edges, JPEG compression noise, muddy colors.
```

### 4 · `vector-eng-paths.webp`
```
Vector curve with few anchor points and handles visible. Clean technical design-software aesthetic, glowing red guide lines and anchor points on dark background. Vertical 4:5.
```

### 5 · `vector-eng-color.webp`
```
Artwork separated into individual spot-color layers. Clean technical design-software aesthetic, glowing red guide lines and anchor points on dark background. Vertical 4:5.
```

### 6 · `vector-eng-detail.webp`
```
Before and after of rebuilt vector lettering. Clean technical design-software aesthetic, glowing red guide lines and anchor points on dark background. Vertical 4:5.
```

### 7 · `vector-eng-formats.webp`
```
Vector file exported to several formats. Clean technical design-software aesthetic, glowing red guide lines and anchor points on dark background. Vertical 4:5.
```

### 8 · `vector-eng-production.webp`
```
Vector artwork used for screen printing, vinyl and laser. Clean technical design-software aesthetic, glowing red guide lines and anchor points on dark background. Vertical 4:5.
```

### 9 · `vector-app-screen.webp`
```
Screen-printed shirt from vector artwork, the design in red, ivory and black. Studio product shot on a charcoal backdrop, dramatic side light. Vertical 4:5.
```

### 10 · `vector-app-signs.webp`
```
Large sign printed from vector artwork, the design in red, ivory and black. Studio product shot on a charcoal backdrop, dramatic side light. Vertical 4:5.
```

### 11 · `vector-app-vinyl.webp`
```
Vinyl cutter cutting vector shapes, the design in red, ivory and black. Studio product shot on a charcoal backdrop, dramatic side light. Vertical 4:5.
```

### 12 · `vector-app-laser.webp`
```
Laser-engraved logo on wood, the design in red, ivory and black. Studio product shot on a charcoal backdrop, dramatic side light. Vertical 4:5.
```

### 13 · `vector-app-dtf.webp`
```
DTF transfer printed from vector art, the design in red, ivory and black. Studio product shot on a charcoal backdrop, dramatic side light. Vertical 4:5.
```

### 14 · `vector-app-embroidery.webp`
```
Vector artwork beside its embroidered result, the design in red, ivory and black. Studio product shot on a charcoal backdrop, dramatic side light. Vertical 4:5.
```

---

## Contact, Our Process & Portfolio pages

| # | File | Size | Used in | Fallback now |
|---|---|---|---|---|
| 1 | `public/assets/pages/process/process-hero.webp` | 1600×1200 (4:3) | /our-process hero | `tf-pathing.jpg` |
| 2 | `public/assets/pages/portfolio/portfolio-hero.webp` | 1600×1200 (4:3) | /portfolio hero | `3d/hero-phoenix-hoop.jpg` |

Contact uses no images (typographic hero). Portfolio gallery items live in `src/lib/pages/portfolio.ts`: add new work there.

### 1 · `process-hero.webp`
```
Split composition on a dark studio table: on the left a flat printed logo artwork, in the middle the same design as glowing red digital stitch-path lines and numbered nodes floating in the air, on the right the finished embroidery in red and ivory thread on black fabric. Reads left-to-right as a transformation. Plenty of dark space at the top. 4:3 landscape.
```

### 2 · `portfolio-hero.webp`
```
Overhead flat-lay of finished embroidery work on a charcoal surface: a black cap with a red emblem, a merrowed patch, a folded black polo with a small chest logo and a jacket back with an eagle in red and ivory thread, arranged like a gallery with even spacing. Soft red rim light. 4:3 landscape.
```

---

_About, Blog, legal and 404 assets are added here as each page is redesigned._
