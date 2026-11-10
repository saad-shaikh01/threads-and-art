# Threads & Arts — Inner Pages Cinematic Redesign Plan

Scope: every page **except the home page** — 9 service pages, About, Contact, Blog (index + posts), Privacy Policy, Terms of Use (+ a new 404).
Design source of truth: the home page (`src/app/page.tsx`) — HeroPoster, PosterHeading, PromiseBar, DigitizingCompare, CheapVsPro, Process, Portfolio.

## Ground rules (non-negotiable)

- **Palette stays exactly as-is**: `--bg #111515`, `--red #f31e39`, `--wine #541a24`, `--ivory #f0ede4`, panels/lines from `globals.css`. No new colors.
- **Type system stays**: Anton giant word + red italic serif script (`PosterHeading`) for every major headline, Georgia display, Geist sans/mono for meta labels.
- **Existing SEO copy is kept** (`services.json` blocks, `legal.json`), restyled, not deleted. Metadata/titles unchanged.
- **No GSAP**. The cinematic modules are ported to React with the stack we already have: `framer-motion` (`useScroll`, `useTransform`, springs) + `lenis`.
- Every animated component respects `prefers-reduced-motion` and works at 375px width.
- Pages work **before** new assets exist: every new image slot has a fallback to an image already in `public/assets`.

---

## Phase 0 — Cinematic component library

New folder: `src/components/cinematic/` — React/TSX ports of the modules in `cinematic-site-components/`, restyled with site tokens.

| Component | Ported from | Used for |
|---|---|---|
| `CinematicHero` | HeroPoster + `curtain-reveal` + `zoom-parallax` | Top of every inner page: PosterHeading, image with needle-scan reveal, stitch-ring, callouts, offer chips, format ticker |
| `TextMaskReveal` | `text-mask` | Big statement lines that fill ivory→red as you scroll |
| `StickyStack` | `sticky-stack` | Pinned image on one side, spec/feature cards scroll past it |
| `StickyCards` | `sticky-cards` | Process steps that pin and stack |
| `StitchPath` | `svg-draw` | Dashed "running stitch" line that draws itself on scroll (connects process steps, timelines) |
| `HorizontalGallery` | `horizontal-scroll` | Applications/use-cases reel driven by vertical scroll |
| `BeforeAfter` | `cursor-reveal` (wipe mode) | Artwork vs. stitched result; generalizes the home DigitizingCompare |
| `AccordionStrips` | `accordion-slider` | Industries / garment types expanding on hover |
| `FlipCard` | `flip-cards` | "Myth vs. fact", "Cheap file vs. our file" |
| `SpotlightCard` | `spotlight-border` | Feature/related-service cards (extends existing `spotlight` utility) |
| `MagneticGrid` | `magnetic-grid` | Machine-format chips (DST, PES, EXP …) |
| `Odometer` | `odometer` | Stats: 50,000+ designs, 4–6h, 400+ shops, $10 |
| `Coverflow` | `coverflow` | Portfolio carousel per service |
| `KineticMarquee` | `kinetic-marquee` | Scroll-reactive testimonial / keyword bands between sections |
| `CircularBadge` | `circular-text` | Spinning "Free sample · 4–6h · Free revisions ·" badge on CTAs |
| `ScrambleText` | `text-scramble` | Eyebrow labels and mono callouts decoding in |
| `OutlineWord` | `gradient-stroke` | Outlined Anton ghost words behind sections (red→wine stroke) |
| `BurstButton` | `particle-button` | Primary "Order Now" CTA, bursts thread-colored particles |
| `AmbientMesh` | `mesh-gradient` | Slow red/wine glow backgrounds (palette-locked) |
| `Faq` | new | Accordion FAQ + JSON-LD `FAQPage` schema for SEO |
| `ReadingProgress` + `StickyToc` | new | Long-form guide and legal pages |

Skipped (off-brand or low value): `glitch-effect`, `dock-nav`, `drag-pan`, `dynamic-island`, `view-transitions`, `image-trail`, `color-shift` (would break the palette rule), `typewriter` (maybe Contact only).

Also: rebuild `src/components/page/Blocks.tsx` (Testimonials, RelatedServices, CtaBand) on top of these components so every page benefits.

---

## Phase 1 — Service page template (pilot: Hat Digitizing)

`ServicePage.tsx` becomes a cinematic, data-driven template. New per-service data in `src/lib/pages/service-details.ts` (typed), alongside the untouched `services.json`.

**Section flow for each service page**

1. **CinematicHero**: PosterHeading word + script (table below), hero image with stitch-in reveal, 3 spec callouts, offer chips ($10 first design), Order + Free Sample CTAs, format ticker.
2. **Proof strip**: Odometer stats (turnaround · price · revisions · formats).
3. **Statement**: TextMaskReveal, the one problem this service solves (e.g. caps: "A curved crown pulls flat files out of register.").
4. **Before / After**: BeforeAfter wipe, client artwork vs. stitched result for *this* service.
5. **Engineering details**: StickyStack with service-specific technical cards (underlay, density, pull compensation, sequencing, foam height, border types …). This is the main "value" section, real know-how buyers can check.
6. **Where it's used**: HorizontalGallery / AccordionStrips of applications (from the existing `ul` lists in services.json, expanded).
7. **How we work**: StickyCards, 4 steps, linked by a StitchPath line.
8. **Cheap vs. Pro**: FlipCards, what a $3 auto-digitized file does vs. ours, service-specific.
9. **Pricing**: Startup $10 card + Premium member card + what's included.
10. **Expert guide**: the existing SEO copy from services.json, restyled long-form with StickyToc + ReadingProgress.
11. **FAQ**: 5–7 service-specific questions + FAQ schema.
12. **Portfolio**: Coverflow of this service's work.
13. **Testimonials**: KineticMarquee band.
14. **Related services**: SpotlightCards with thumbnails.
15. **Final CTA**: CircularBadge + BurstButton.

**Poster headings**

| Page | Word | Script |
|---|---|---|
| Hat | CAPS | Curved right. |
| 3D Puff | PUFF | Raised. |
| Logo | LOGO | Precise. |
| Patch | PATCH | Bordered. |
| Appliqué | APPLIQUÉ | Layered. |
| Towel | TOWEL | Plush-proof. |
| Glove | GLOVE | Fitted. |
| Sleeve | SLEEVE | Narrow & bold. |
| Vector | VECTOR | Crisp. |

👉 **I stop after the Hat pilot for your review** before rolling out to the other 8.

## Phase 2 — Roll out to the 8 other services

Same template with per-service data: technical cards, FAQs, applications, before/after, cheap-vs-pro and gallery. Vectorization gets its own variant: BeforeAfter becomes pixelated raster vs. clean vector, and the technical cards cover nodes, paths, color separation and print formats (AI/EPS/SVG/PDF).

## Phase 3 — About & Contact

**About** (`STUDIO` / *Since 2017.*): hero → TextMaskReveal mission → StitchPath timeline (2017 → today) → "Machine operators, not just designers" StickyStack → Odometer stats → values FlipCards → MagneticGrid formats/machines → industries AccordionStrips → testimonials → CTA.

**Contact** (`TALK` / *Let's stitch.*): hero → contact cards (email, response time, hours/timezone) → **"What to send us"** checklist (artwork file, size in inches, garment type, placement, thread colors) → "What happens next" 3-step StitchPath → quote form (see open questions) → FAQ → CTA.

## Phase 4 — Blog

Blog index (`JOURNAL` / *From the hoop.*): featured post hero, category chips, post grid with hover reveal. Post template: cinematic cover, ReadingProgress, StickyToc, author/date meta, related posts, inline "$10 first design" CTA.
⚠️ Right now `blogIds` has no post content (see open questions).

## Phase 5 — Legal pages + 404

Privacy and Terms: compact PosterHeading hero (`PRIVACY` / *Plainly.*, `TERMS` / *Fair & clear.*), "last updated" meta, StickyToc, ReadingProgress, clean readable prose. Kept calm on purpose: readability over effects.
New `not-found.tsx`: `404` / *Thread snapped.*, with links back to services.

## Phase 6 — Assets file

`docs/ASSET_PROMPTS.md`: one entry per image with:
- **File name + exact path** (e.g. `public/assets/pages/hat/hat-before-artwork.webp`)
- Aspect ratio / pixel size, format (webp), transparent or not
- **Gemini prompt** (palette-locked: charcoal #111515 backgrounds, red #f31e39 accents, studio macro lighting)
- Which page/section/component uses it, and the current fallback image
- Note: Gemini fakes "transparent" checkerboards, so I'll strip those with `sharp` after you drop files in

Rough count: ~6 per service × 9 (hero, before artwork, after stitched, technical macro, 2 applications) + About 4 + Contact 1 + Blog covers 8 + 404 1 ≈ **68 images**. Folder layout: `public/assets/pages/<page-slug>/…`.

## Phase 7 — QA

`next build` passes, mobile 375px check, reduced-motion check, Lighthouse (LCP image priority, lazy below-the-fold, no CLS from animations), all internal links, metadata unchanged.

---

## Progress

- [x] Phase 0: cinematic library in `src/components/cinematic/` (CinematicHero, StatStrip/Odometer, TextMaskReveal, BeforeAfter, StickyStack, HorizontalGallery, StickyCards, FlipCards, Coverflow, KineticMarquee/TestimonialBand, Faq, GuideSection, CinematicCta/CircularBadge/BurstButton, AmbientMesh/GhostWord/StitchDivider, ScrambleText/Eyebrow)
- [x] Phase 1: Hat pilot. Data lives in `src/lib/pages/service-details.ts`, template in `src/components/page/service/`. Services without an entry still use the old template.
- [x] Asset prompts for Hat in `docs/ASSET_PROMPTS.md` (14 images, ~14 per service from here on)
- [x] Pilot approved → Phase 2: all 8 other services live on the cinematic template. Content in `src/lib/pages/services/<name>.ts`; Vectorization overrides ticker, process and "included" list.
- [x] Asset prompts for all 9 services (126 images), generated from the page data so file names always match.
- [x] Home page reuses the library: PosterTop headings (Services, Process, Why us, Industries), Coverflow portfolio, StatStrip, TestimonialBand, StitchDivider, CinematicCta (`#sample`). Old `Portfolio.tsx` / `SampleCta.tsx` are unused but kept.
- [x] Coverflow loops infinitely with autoplay (pauses on hover/focus/off-screen/reduced motion).
- [x] Contact redesigned: TALK hero + contact cards, mailto QuoteBuilder with live preview, SendChecklist, next-steps StickyCards, FormatsSection (MagneticGrid), FAQ, CTA.
- [x] New pages `/our-process` and `/portfolio` (filterable PortfolioGallery + lightbox), linked in navbar + footer; `links.portfolio` now points to `/portfolio`.
- [ ] AccordionStrips (About, Phase 3)
- [ ] Phase 3–5: About, Blog, legal, 404

Decisions taken with defaults (change any time): portfolio reuses `showcase/` images; Contact will use a mailto quote builder (no backend); blog content question deferred to Phase 4.

## Open questions

1. **Blog content**: there are 8 post IDs but no text. Should I write the posts (embroidery digitizing topics, SEO-focused), or will you provide them?
2. **Contact form**: the site has no backend. Options: (a) keep email only plus a `mailto:` "quote builder" that pre-fills the email, (b) a form posting to a service like Formspree/Resend (needs an account/API key).
3. **Portfolio per service**: OK to reuse `public/assets/showcase/*` until the new assets are generated?
