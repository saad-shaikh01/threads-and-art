import type { ServiceDetail } from "../service-details";
import { commonFaqs, img, portfolio, S } from "./shared";

const F = "glove";

export const glove: ServiceDetail = {
  poster: { word: "Glove", script: "Fitted." },
  eyebrow: "Glove digitizing",
  lead: "A glove gives you a few square inches on a stretchy, curved or leather surface. We digitize glove files with lighter density, the right underlay for each material and lettering that stays readable at small sizes.",
  hero: img(F, "glove-hero", S.logo, "Leather glove with a small embroidered logo on the back of the hand"),
  callouts: [
    { x: "36%", y: "30%", side: "left", label: "Field", value: 'Often 2–3"' },
    { x: "60%", y: "46%", side: "right", label: "Density", value: "Lighter for leather" },
    { x: "28%", y: "72%", side: "left", label: "Text", value: 'Min 0.25"' },
  ],
  stats: [
    { value: "4–6h", label: "Standard turnaround" },
    { value: "$10", label: "Your first design" },
    { value: '2–3"', label: "Typical glove field" },
    { value: "10+", label: "Machine formats" },
  ],
  statement: {
    eyebrow: "Why gloves are tricky",
    text: "Dense stitches *perforate* leather like a stamp. Knit gloves *stretch* and distort. And there's barely room for a *logo.*",
    note: "A glove file has to respect the material first. That means fewer needle holes, smarter underlay and a design simplified for a tiny field.",
  },
  compare: {
    eyebrow: "Same logo · two files",
    word: "Torn",
    script: "vs. tailored.",
    intro: "Left: a garment file stitched on a leather glove. Right: the same logo digitized for the glove. Drag the needle to compare.",
    before: { ...img(F, "glove-before-perforated", S.tigerBad, "Leather glove torn along dense embroidery stitches"), label: "Garment file" },
    after: { ...img(F, "glove-after-tailored", S.tigerGood, "Clean small logo embroidered on a leather glove"), label: "Glove file" },
    points: [
      { bad: "Leather perforates", good: "Fewer needle holes", text: "Lower density and longer stitches so leather doesn't tear along the edge." },
      { bad: "Knit distorts", good: "Stable on stretch", text: "Lighter fills plus underlay that locks stretchy knit down first." },
      { bad: "Logo too detailed", good: "Simplified to fit", text: "Detail reduced for a 2–3\" field so it reads clearly." },
      { bad: "Hard to hoop", good: "Hooping-friendly", text: "Designs sized for small frames and adhesive stabilizers." },
    ],
  },
  engineering: {
    eyebrow: "What goes into a glove file",
    word: "Small",
    script: "field, big detail.",
    intro: "Five decisions decide whether your glove looks branded or ruined.",
    items: [
      {
        kicker: "Material",
        title: "Tuned for leather, knit or synthetic",
        text: "Leather can't heal needle holes, so we lower density and lengthen stitches. Knit gloves stretch, so we stabilize first. Synthetic work gloves get a balanced middle ground.",
        specs: ["Leather: low density", "Knit: stabilizing underlay", "Synthetic: balanced"],
        image: img(F, "glove-eng-material", S.logo, "Three glove materials with embroidered logos side by side"),
      },
      {
        kicker: "Density",
        title: "Fewer, better stitches",
        text: "Every needle hole weakens leather. We reduce stitch count without losing coverage — open fills, smart satins and no unnecessary layers.",
        specs: ["Reduced stitch count", "Open fills", "No stacked layers"],
        image: img(F, "glove-eng-density", S.detail, "Macro of open-fill embroidery on leather"),
      },
      {
        kicker: "Simplify",
        title: "Built for a 2–3\" space",
        text: "Back-of-hand and cuff areas are often only 2–3 inches. We simplify fine detail, thicken thin lines and keep lettering at 0.25\" or larger so the logo reads at a glance.",
        specs: ['Field ≈ 2–3"', "Thickened lines", 'Text ≥ 0.25"'],
        image: img(F, "glove-eng-simplify", S.crest, "Detailed logo simplified for a small glove placement"),
      },
      {
        kicker: "Placement",
        title: "Back, cuff or thumb",
        text: "We fit the design to where it will sew: back of the hand, cuff, wrist strap or thumb. Each has its own curve and space, and the file is sized accordingly.",
        specs: ["Back of hand", "Cuff / strap", "Thumb & palm"],
        image: img(F, "glove-eng-placement", S.polo, "Glove placements marked: back, cuff and thumb"),
      },
      {
        kicker: "Hooping",
        title: "Made for small frames",
        text: "Gloves are hard to hoop. We keep designs compact and sequenced to finish in one pass, perfect for small frames, clamp systems or adhesive stabilizer.",
        specs: ["Compact layout", "One pass", "Small-frame ready"],
        image: img(F, "glove-eng-hooping", S.phoenix, "Glove clamped in a small embroidery frame"),
      },
    ],
  },
  applications: {
    eyebrow: "Every kind of glove",
    word: "Work",
    script: "to play.",
    items: [
      { title: "Baseball & softball", text: "Names and numbers on leather fielding gloves.", image: img(F, "glove-app-baseball", S.logo, "Baseball glove with embroidered name") },
      { title: "Batting & golf", text: "Small logos on thin, technical leather.", image: img(F, "glove-app-golf", S.detail, "Golf glove with small embroidered logo") },
      { title: "Work & safety", text: "Company branding on rugged work gloves.", image: img(F, "glove-app-work", S.crest, "Work glove with embroidered company logo") },
      { title: "Winter & knit", text: "Cuff logos on stretchy knit gloves.", image: img(F, "glove-app-knit", S.puff, "Knit winter glove with cuff embroidery") },
      { title: "Fashion & leather", text: "Monograms on dress and fashion gloves.", image: img(F, "glove-app-fashion", S.polo, "Leather fashion glove with monogram") },
      { title: "Promotional", text: "Branded gloves for events and giveaways.", image: img(F, "glove-app-promo", S.wings, "Branded promotional gloves") },
    ],
  },
  cheapVsPro: {
    intro: "A glove is expensive to ruin. Hover a card to see what we do instead of a resized garment file.",
    items: [
      { cheap: { title: "Garment density", text: "Leather perforates and tears at the edge." }, pro: { title: "Material-tuned", text: "Lower density and longer stitches on leather." } },
      { cheap: { title: "Full-detail logo", text: "Fine lines blur in a 2-inch space." }, pro: { title: "Simplified to fit", text: "Detail reduced so it reads clearly." } },
      { cheap: { title: "No stabilizing", text: "Knit stretches and the design distorts." }, pro: { title: "Stabilizing underlay", text: "Knit locked down before the design sews." } },
      { cheap: { title: "Big, slow design", text: "Needs re-hooping and multiple passes." }, pro: { title: "Small-frame ready", text: "Compact and done in one pass." } },
    ],
  },
  faqs: [
    { q: "How big can embroidery on a glove be?", a: 'It depends on the glove and placement, but the back-of-hand area is **often about 2–3"**. Send the glove size and placement and we\'ll fit the design.' },
    { q: "Can you embroider leather gloves without damaging them?", a: "Yes, with a leather-specific file. We lower density and lengthen stitches so the needle doesn't perforate the leather into a tear line." },
    { q: "Can you digitize names on baseball gloves?", a: 'Yes — names, numbers and logos on fielding and batting gloves are common. Lettering is kept at about **0.25" or taller** for readability.' },
    { q: "What about knit winter gloves?", a: "Knit stretches, so we add stabilizing underlay and use lighter fills. We recommend a cut-away or adhesive stabilizer when sewing." },
    { q: "Do I need a special frame?", a: "Small frames, clamp systems or adhesive stabilizer work best. We keep the design compact so it sews in a single pass on any of them." },
    commonFaqs.formats,
    commonFaqs.turnaround,
  ],
  portfolio: portfolio("logo", "detail", "crest", "polo", "patch", "cap"),
  marquee: ["Leather-safe", "Stretch-ready", "Small & sharp", "One pass"],
  cta: { word: "Gloves?", script: "Fitted.", text: "Send your design, glove type and placement. We'll return a glove-ready file in 4–6 hours — your first design is just $10." },
};
