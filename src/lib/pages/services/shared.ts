import type { Img } from "@/lib/assets";

/** Planned asset in public/assets/pages/<folder>/<file>.webp with an existing fallback. */
export const img = (folder: string, file: string, fallback: string, alt: string): Img => ({
  src: `/assets/pages/${folder}/${file}.webp`,
  fallback,
  alt,
});

export const S = {
  cap: "/assets/showcase/portfolio-cap.webp",
  crest: "/assets/showcase/portfolio-crest.webp",
  detail: "/assets/showcase/portfolio-detail.webp",
  jacket: "/assets/showcase/portfolio-jacket.webp",
  logo: "/assets/showcase/portfolio-logo.webp",
  patch: "/assets/showcase/portfolio-patch.webp",
  polo: "/assets/showcase/portfolio-polo.webp",
  puff: "/assets/showcase/portfolio-puff.webp",
  capCrown: "/assets/3d/service-cap-crown.jpg",
  lion: "/assets/3d/service-logo-lion.jpg",
  puffMacro: "/assets/3d/service-puff-macro.jpg",
  wings: "/assets/3d/service-patch-wings.jpg",
  phoenix: "/assets/3d/hero-phoenix-hoop.jpg",
  tigerStack: "/assets/3d/transformation-tiger-stack.jpg",
  tigerBad: "/assets/tiger-bad.webp",
  tigerGood: "/assets/tiger-digitized.webp",
  tfArtwork: "/assets/tf-artwork.jpg",
  tfPathing: "/assets/tf-pathing.jpg",
  tfPreview: "/assets/tf-preview.jpg",
  tfFinished: "/assets/tf-finished.jpg",
} as const;

const CAPTIONS: Record<keyof typeof S, string> = {
  cap: "Cap Embroidery · Curved Surface",
  crest: "Crest · Tatami Fill",
  detail: "Fine Detail · Micro Lettering",
  jacket: "Jacket Back · Large Format",
  logo: "Logo · Satin Column",
  patch: "Patch · Merrowed Edge",
  polo: "Polo · Left Chest",
  puff: "3D Puff · Foam Lettering",
  capCrown: "Cap Crown · Center-out",
  lion: "Logo · Layered Fills",
  puffMacro: "3D Puff · Macro",
  wings: "Patch · Wings Emblem",
  phoenix: "Phoenix · In the Hoop",
  tigerStack: "Tiger · Stitch Layers",
  tigerBad: "Auto-digitized · Before",
  tigerGood: "Hand-digitized · After",
  tfArtwork: "Artwork · Client Upload",
  tfPathing: "Stitch Pathing · Plan",
  tfPreview: "Stitch Preview",
  tfFinished: "Finished Sew-out",
};

/** Portfolio items for the Coverflow, in the given order. */
export const portfolio = (...keys: (keyof typeof S)[]) =>
  keys.map((k) => ({ src: S[k], alt: CAPTIONS[k].replace(" · ", " embroidery sample — "), caption: CAPTIONS[k] }));

/** FAQ answers every embroidery service shares. */
export const commonFaqs = {
  formats: {
    q: "Which file formats do you deliver?",
    a: "All major machine formats, including **DST, PES, EXP, JEF, HUS, VP3, XXX, PXF, EMB and SEW**. Just tell us what your machine runs.",
  },
  turnaround: {
    q: "How fast is the turnaround, and are revisions free?",
    a: "Standard turnaround is **4–6 hours**. You get a stitch preview before you download, and minor revisions are free.",
  },
};
