/**
 * Cinematic service-page content. The SEO body copy stays in services.json;
 * this file holds everything the redesigned sections need.
 *
 * Image slots use { src, fallback }: `src` is the planned asset listed in
 * docs/ASSET_PROMPTS.md, `fallback` an existing image shown until it exists.
 */
import type { Img } from "@/lib/assets";
import type { PosterSize } from "@/components/ui/PosterHeading";
import { applique } from "./services/applique";
import { glove } from "./services/glove";
import { logo } from "./services/logo";
import { patch } from "./services/patch";
import { puff } from "./services/puff";
import { sleeve } from "./services/sleeve";
import { towel } from "./services/towel";
import { vector } from "./services/vector";

export interface ServiceDetail {
  poster: { word: string; script: string; size?: PosterSize };
  eyebrow: string;
  lead: string;
  hero: Img;
  callouts: { x: string; y: string; side: "left" | "right"; label: string; value: string }[];
  stats: { value: string; label: string }[];
  statement: { eyebrow: string; text: string; note: string };
  compare: {
    eyebrow: string;
    word: string;
    script: string;
    intro: string;
    before: Img & { label: string };
    after: Img & { label: string };
    points: { bad: string; good: string; text: string }[];
  };
  engineering: {
    eyebrow: string;
    word: string;
    script: string;
    intro: string;
    items: { kicker: string; title: string; text: string; specs: string[]; image: Img }[];
  };
  applications: { eyebrow: string; word: string; script: string; items: { title: string; text: string; image: Img }[] };
  process?: { title: string; text: string; meta: string }[];
  cheapVsPro: { intro: string; items: { cheap: { title: string; text: string }; pro: { title: string; text: string } }[] };
  faqs: { q: string; a: string }[];
  portfolio: { src: string; alt: string; caption: string }[];
  marquee?: string[];
  cta?: { word: string; script: string; text: string };
  /** Overrides for non-embroidery services (e.g. vectorization). */
  ticker?: { label: string; items: string[] };
  heroNote?: string;
  processIntro?: string;
  included?: string[];
}

/** Process used on every service page unless overridden. */
export const defaultProcess = [
  {
    title: "Send your artwork",
    text: "Upload any file you have — JPG, PNG, PDF, AI or even a photo. Tell us the finished size, the garment and your machine format.",
    meta: "~2 min",
  },
  {
    title: "We digitize by hand",
    text: "A digitizer who has run commercial machines plans every stitch: underlay, angles, density, pull compensation and a clean sequence.",
    meta: "4–6 hours",
  },
  {
    title: "Review the preview",
    text: "You get a stitch preview before anything goes on fabric. Want something adjusted? Minor revisions are free, as many as you need.",
    meta: "Free revisions",
  },
  {
    title: "Download & stitch",
    text: "Download the machine-ready file in DST, PES, EXP, JEF or any format you run, and send it straight to production.",
    meta: "Machine-ready",
  },
];

/** Thumbnails for the related-services grid (existing assets). */
export const serviceThumbs: Record<string, string> = {
  "/vectorization-services": "/assets/pages/vector-design-screen-print-1.jpg",
  "/logo-embroidery-digitizing-services": "/assets/3d/service-logo-lion.jpg",
  "/3D-puff-embroidery-digitizing-services": "/assets/3d/service-puff-macro.jpg",
  "/glove-embroidery-digitizing-services": "/assets/pages/glove-digitizing.jpg",
  "/sleeve-embroidery-digitizing-services": "/assets/pages/sleeve-embroidery.jpg",
  "/towel-embroidery-digitizing-services": "/assets/pages/towel-embroidery-digitzing.jpg",
  "/hat-embroidery-digitizing-services": "/assets/3d/service-cap-crown.jpg",
  "/embroidered-patch-digitizing-services": "/assets/3d/service-patch-wings.jpg",
  "/applique-embroidery-digitizing-services": "/assets/pages/applique-digitizing.png",
};

const P = "/assets/pages";

export const serviceDetails: Partial<Record<string, ServiceDetail>> = {
  "3D-puff-embroidery-digitizing-services": puff,
  "logo-embroidery-digitizing-services": logo,
  "embroidered-patch-digitizing-services": patch,
  "applique-embroidery-digitizing-services": applique,
  "towel-embroidery-digitizing-services": towel,
  "glove-embroidery-digitizing-services": glove,
  "sleeve-embroidery-digitizing-services": sleeve,
  "vectorization-services": vector,
  "hat-embroidery-digitizing-services": {
    poster: { word: "Caps", script: "Curved right." },
    eyebrow: "Hat & cap digitizing",
    lead: "A cap is a curve, not a canvas. We digitize every hat file for the cap frame — sequenced center-out, compensated for the crown and built to sew clean across the seam.",
    hero: {
      src: `${P}/hat/hat-hero.webp`,
      fallback: "/assets/3d/service-cap-crown.jpg",
      alt: "Structured cap with embroidered logo and red stitch-path wireframe",
    },
    callouts: [
      { x: "40%", y: "30%", side: "left", label: "Sequence", value: "Center → out" },
      { x: "52%", y: "46%", side: "right", label: "Satin", value: "≤ 7mm · +0.2mm pull" },
      { x: "22%", y: "74%", side: "left", label: "Field", value: '2.25" × 5.5"' },
    ],
    stats: [
      { value: "4–6h", label: "Standard turnaround" },
      { value: "$10", label: "Your first design" },
      { value: '5.5"', label: "Max cap front width" },
      { value: "10+", label: "Machine formats" },
    ],
    statement: {
      eyebrow: "Why caps are different",
      text: "A flat file on a curved crown will *pucker,* drift out of *register* and gap at the seam. Cap digitizing is *engineering,* not tracing.",
      note: "Most failed hat orders aren't machine problems — they're file problems. Here's how we build a cap file that runs clean the first time.",
    },
    compare: {
      eyebrow: "Same logo · two files",
      word: "Flat",
      script: "vs. cap-ready.",
      intro:
        "Left: a left-chest file pushed straight onto a cap. Right: the same artwork re-digitized for the cap frame. Drag the needle to see what your machine sees.",
      before: {
        src: `${P}/hat/hat-before-flat-file.webp`,
        fallback: "/assets/tiger-bad.webp",
        alt: "Cap embroidery from a flat file with gaps and puckering",
        label: "Flat file",
      },
      after: {
        src: `${P}/hat/hat-after-cap-file.webp`,
        fallback: "/assets/tiger-digitized.webp",
        alt: "Cap embroidery from a cap-specific file with clean registration",
        label: "Cap file",
      },
      points: [
        { bad: "Outline gaps", good: "Locked registration", text: "Center-out sequencing pushes fabric away from the middle so outlines land on their fills." },
        { bad: "Puckered crown", good: "Flat, tight stitching", text: "Lighter density and edge-walk underlay stop the crown from rippling." },
        { bad: "Needle breaks on the seam", good: "Seam-aware underlay", text: "Paths bridge the center seam instead of stacking satin on top of it." },
        { bad: "Unreadable small text", good: "Legible lettering", text: 'Lettering kept at 0.25" or taller with opened satin columns.' },
      ],
    },
    engineering: {
      eyebrow: "What goes into a cap file",
      word: "Built",
      script: "for the crown.",
      intro: "Five decisions separate a cap file that sews clean from one that gets re-hooped. We make every one of them by hand.",
      items: [
        {
          kicker: "Sequencing",
          title: "Center-out, bottom-up",
          text: "On a cap frame the fabric can only move one way: outward. We start in the middle of the design and work toward the sides and up from the brim, so the material is always pushed away from what's already sewn — no bubbles, no shifted outlines.",
          specs: ["Center → sides", "Bottom → top", "Minimal trims & jumps"],
          image: { src: `${P}/hat/hat-eng-sequencing.webp`, fallback: "/assets/3d/service-cap-crown.jpg", alt: "Center-out stitch sequence diagram on a cap front" },
        },
        {
          kicker: "Underlay",
          title: "Seam-aware foundation",
          text: "Structured 6-panel caps have a center seam and stiff buckram behind the front. We lay an edge-walk plus zig-zag underlay that locks the fabric down and bridges the seam, so top stitches sit flat instead of sinking or bouncing.",
          specs: ["Edge-walk + zig-zag", "Seam bridging", "Buckram-tuned density"],
          image: { src: `${P}/hat/hat-eng-underlay.webp`, fallback: "/assets/showcase/portfolio-detail.webp", alt: "Macro of underlay stitches across a cap seam" },
        },
        {
          kicker: "Compensation",
          title: "Pull compensation for curves",
          text: "Thread tension pulls columns narrower across a curved surface. We widen satin columns and overlap fills just enough so edges meet exactly where the artwork says — and cap satins stay under 7mm so they don't snag.",
          specs: ["+0.15–0.3mm pull comp", "Satin ≤ 7mm", "Fill overlap at borders"],
          image: { src: `${P}/hat/hat-eng-pull-comp.webp`, fallback: "/assets/showcase/portfolio-logo.webp", alt: "Macro of crisp satin edges on embroidered cap" },
        },
        {
          kicker: "Sizing",
          title: "Designed inside the cap field",
          text: 'Most cap frames sew about 2.25" high on low-profile caps and up to 2.7" on structured fronts, with roughly 5.5" of width. We fit and rebalance your logo inside that space and keep small lettering readable instead of shrinking it into mush.',
          specs: ['2.25"–2.7" high', '≈ 5.5" wide', 'Text ≥ 0.25"'],
          image: { src: `${P}/hat/hat-eng-sizing.webp`, fallback: "/assets/showcase/portfolio-cap.webp", alt: "Cap front with embroidery field dimensions overlay" },
        },
        {
          kicker: "Dimension",
          title: "3D puff, ready when you are",
          text: "Want raised lettering? We build puff-ready versions with higher density, foam-cutting closures at the ends of every column and a separate flat file for the parts that should stay down.",
          specs: ["3mm foam ready", "Capped column ends", "Puff + flat combo"],
          image: { src: `${P}/hat/hat-eng-puff.webp`, fallback: "/assets/3d/service-puff-macro.jpg", alt: "Macro of 3D puff embroidery on a cap front" },
        },
      ],
    },
    applications: {
      eyebrow: "Every kind of headwear",
      word: "Any",
      script: "crown, any brim.",
      items: [
        { title: "Structured caps", text: "Firm buckram front — ideal for detailed logos and 3D puff.", image: { src: `${P}/hat/hat-app-structured.webp`, fallback: "/assets/showcase/portfolio-cap.webp", alt: "Structured baseball cap with front embroidery" } },
        { title: "Unstructured dad hats", text: "Soft crowns digitized lighter to stop distortion.", image: { src: `${P}/hat/hat-app-dad-hat.webp`, fallback: "/assets/cap.jpg", alt: "Unstructured dad hat with embroidered logo" } },
        { title: "Trucker & mesh-back", text: "Foam fronts and mesh backs, with stitches sized to hold.", image: { src: `${P}/hat/hat-app-trucker.webp`, fallback: "/assets/3d/service-cap-crown.jpg", alt: "Trucker cap with mesh back and embroidered front" } },
        { title: "Snapbacks & flat bills", text: "Wide, flat fronts that show off bold logos and puff.", image: { src: `${P}/hat/hat-app-snapback.webp`, fallback: "/assets/showcase/portfolio-puff.webp", alt: "Flat-bill snapback with 3D puff embroidery" } },
        { title: "Beanies & knits", text: "Stretchy knit gets lighter density and extra stabilizing underlay.", image: { src: `${P}/hat/hat-app-beanie.webp`, fallback: "/assets/showcase/portfolio-detail.webp", alt: "Knit beanie with embroidered cuff patch" } },
        { title: "Visors & bucket hats", text: "Side, back and brim placements, each digitized for its own curve.", image: { src: `${P}/hat/hat-app-visor.webp`, fallback: "/assets/showcase/portfolio-logo.webp", alt: "Bucket hat with side embroidery" } },
      ],
    },
    cheapVsPro: {
      intro: "A cheap cap file is the most expensive thing in your shop: broken needles, ruined blanks and re-runs. Hover a card to see what we do instead.",
      items: [
        {
          cheap: { title: "One file for shirt and cap", text: "The same left-chest file is resized and sent to the cap frame." },
          pro: { title: "A file built for the cap frame", text: "Re-sequenced center-out and re-balanced for the curved crown." },
        },
        {
          cheap: { title: "Gaps between outline and fill", text: "Borders drift as the fabric shifts on the curve." },
          pro: { title: "Pull comp and overlap", text: "Columns widened and fills overlapped so every edge meets." },
        },
        {
          cheap: { title: "Needles break on the seam", text: "Dense satin stacks over the center seam and buckram." },
          pro: { title: "Seam-aware underlay", text: "Lighter density and paths that bridge the seam cleanly." },
        },
        {
          cheap: { title: "Tiny text turns to mush", text: "Lettering is shrunk below what thread can draw." },
          pro: { title: "Lettering kept legible", text: 'Text held at 0.25"+ with opened satin columns.' },
        },
      ],
    },
    faqs: [
      {
        q: "What is the maximum embroidery size on a cap?",
        a: 'Most cap frames sew about **2.25" high on low-profile caps and up to 2.7" on structured fronts**, with roughly **5.5" of width**. Tell us your cap type and we\'ll fit your design to it.',
      },
      {
        q: "Can I use my shirt / left-chest file on a hat?",
        a: "Usually not well. A flat file is sequenced for a flat hoop, so on a cap it tends to gap and pucker. We re-digitize it for the cap frame — center-out, with cap-specific underlay and pull compensation.",
      },
      {
        q: "Is digitizing different for structured and unstructured hats?",
        a: "Yes. Structured caps have a stiff buckram front and can take more detail and [3D puff](/3D-puff-embroidery-digitizing-services). Unstructured hats have soft crowns, so we use lighter density and more underlay to stop distortion.",
      },
      {
        q: "Do you digitize 3D puff for caps?",
        a: "Yes — puff lettering and logos on caps are one of our most common orders. We build them with higher density and capped column ends so the foam cuts clean. See our [3D puff digitizing service](/3D-puff-embroidery-digitizing-services).",
      },
      {
        q: "Which file formats do you deliver?",
        a: "All major machine formats, including **DST, PES, EXP, JEF, HUS, VP3, XXX, PXF, EMB and SEW**. Just tell us what your machine runs.",
      },
      {
        q: "How fast is the turnaround, and are revisions free?",
        a: "Standard turnaround is **4–6 hours**. You get a preview before you download, and minor revisions are free.",
      },
      {
        q: "What should I send with my order?",
        a: "Your artwork in any format (JPG, PNG, PDF, AI or a photo), the finished size, the cap type (structured, unstructured, trucker, beanie…), thread colors if you have them, and your machine format.",
      },
    ],
    portfolio: [
      { src: "/assets/showcase/portfolio-cap.webp", alt: "Detailed cap embroidery on curved surface", caption: "Cap Embroidery · Curved Surface" },
      { src: "/assets/showcase/portfolio-puff.webp", alt: "3D puff embroidery lettering", caption: "3D Puff · Foam Lettering" },
      { src: "/assets/showcase/portfolio-logo.webp", alt: "Embroidered logo digitizing sample", caption: "Logo · Satin Column" },
      { src: "/assets/showcase/portfolio-crest.webp", alt: "Custom embroidered crest with tatami fill", caption: "Crest · Tatami Fill" },
      { src: "/assets/showcase/portfolio-detail.webp", alt: "Intricate embroidery with fine detail", caption: "Fine Detail · Micro Lettering" },
      { src: "/assets/showcase/portfolio-patch.webp", alt: "Embroidered patch with merrowed edge", caption: "Patch · Merrowed Edge" },
    ],
    marquee: ["Center-out", "Seam-safe", "Puff-ready", "Zero puckers"],
    cta: {
      word: "Caps?",
      script: "Covered.",
      text: "Send your logo and cap type. We'll return a cap-ready file in 4–6 hours — your first design is just $10.",
    },
  },
};
