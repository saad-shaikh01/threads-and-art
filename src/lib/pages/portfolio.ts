/** Portfolio page items. Real work from public/assets; add new pieces to this list. */

export const portfolioCategories = ["Logos", "Caps", "3D Puff", "Patches", "Apparel", "Vector"] as const;
export type PortfolioCategory = (typeof portfolioCategories)[number];

export interface PortfolioItem {
  src: string;
  alt: string;
  title: string;
  technique: string;
  category: PortfolioCategory;
  service: string;
}

export const portfolioItems: PortfolioItem[] = [
  { src: "/assets/3d/service-logo-lion.jpg", alt: "Lion crest logo embroidery with layered satin and fills", title: "Lion Crest", technique: "Layered satin · tatami fill", category: "Logos", service: "/logo-embroidery-digitizing-services" },
  { src: "/assets/showcase/portfolio-cap.webp", alt: "Detailed cap embroidery on a curved crown", title: "Structured Cap Front", technique: "Center-out · cap frame", category: "Caps", service: "/hat-embroidery-digitizing-services" },
  { src: "/assets/showcase/portfolio-puff.webp", alt: "3D puff embroidery lettering", title: "Varsity Puff Lettering", technique: "3mm foam · capped ends", category: "3D Puff", service: "/3D-puff-embroidery-digitizing-services" },
  { src: "/assets/showcase/portfolio-patch.webp", alt: "Embroidered mountain patch with merrowed edge", title: "Mountain Patch", technique: "Full coverage · merrow edge", category: "Patches", service: "/embroidered-patch-digitizing-services" },
  { src: "/assets/showcase/portfolio-jacket.webp", alt: "Large eagle embroidered on a jacket back", title: "Eagle Jacket Back", technique: "Large format · directional fill", category: "Apparel", service: "/logo-embroidery-digitizing-services" },
  { src: "/assets/pages/logo-vector-logo-design-2.jpg", alt: "Before and after vector redraw of an artist poster", title: "Artist Poster Redraw", technique: "Raster → vector · color cleanup", category: "Vector", service: "/vectorization-services" },
  { src: "/assets/showcase/portfolio-crest.webp", alt: "Phoenix crest embroidery with tatami fill", title: "Phoenix Crest", technique: "Tatami fill · satin feathers", category: "Logos", service: "/logo-embroidery-digitizing-services" },
  { src: "/assets/3d/service-cap-crown.jpg", alt: "Embroidered cap crown in studio lighting", title: "Cap Crown Emblem", technique: "Seam-aware underlay", category: "Caps", service: "/hat-embroidery-digitizing-services" },
  { src: "/assets/3d/service-puff-macro.jpg", alt: "Macro of raised 3D puff embroidery", title: "Puff Macro", technique: "Dense satin over foam", category: "3D Puff", service: "/3D-puff-embroidery-digitizing-services" },
  { src: "/assets/3d/service-patch-wings.jpg", alt: "Winged emblem embroidered patch", title: "Winged Emblem Patch", technique: "Satin border · balanced fills", category: "Patches", service: "/embroidered-patch-digitizing-services" },
  { src: "/assets/showcase/portfolio-polo.webp", alt: "Compass logo embroidered on a polo left chest", title: "Compass Left Chest", technique: "Small-scale satin · piqué tuned", category: "Apparel", service: "/logo-embroidery-digitizing-services" },
  { src: "/assets/pages/vector-design-screen-print-1.jpg", alt: "Before and after vector redraw of a dive mask product image", title: "Product Illustration", technique: "Photo → clean vector", category: "Vector", service: "/vectorization-services" },
  { src: "/assets/showcase/portfolio-logo.webp", alt: "Embroidered logo with satin columns", title: "Monogram Logo", technique: "Satin column lettering", category: "Logos", service: "/logo-embroidery-digitizing-services" },
  { src: "/assets/3d/hero-phoenix-hoop.jpg", alt: "Phoenix embroidery stretched in a hoop", title: "Phoenix in the Hoop", technique: "Multi-color · long-and-short", category: "Apparel", service: "/logo-embroidery-digitizing-services" },
  { src: "/assets/showcase/portfolio-detail.webp", alt: "Intricate embroidery with fine detail", title: "Fine Detail Study", technique: "Micro lettering · run stitch", category: "Logos", service: "/logo-embroidery-digitizing-services" },
  { src: "/assets/tf-finished.jpg", alt: "Finished tiger embroidery with floral frame", title: "Tiger & Peony", technique: "Photo-real fills · multi-color", category: "Apparel", service: "/logo-embroidery-digitizing-services" },
];
