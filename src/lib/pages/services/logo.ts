import type { ServiceDetail } from "../service-details";
import { commonFaqs, img, portfolio, S } from "./shared";

const F = "logo";

export const logo: ServiceDetail = {
  poster: { word: "Logo", script: "Precise." },
  eyebrow: "Logo digitizing",
  lead: "Your logo is your brand — it should sew like it. We hand-digitize every logo for its real size and fabric, choosing stitch types, angles and colors so it stays sharp from a left chest to a jacket back.",
  hero: img(F, "logo-hero", S.lion, "Detailed embroidered logo with layered satin and fill stitches"),
  callouts: [
    { x: "36%", y: "30%", side: "left", label: "Text", value: 'Min 0.25" tall' },
    { x: "60%", y: "46%", side: "right", label: "Satin", value: "1–7mm columns" },
    { x: "28%", y: "72%", side: "left", label: "Fill", value: "Tatami · angled" },
  ],
  stats: [
    { value: "4–6h", label: "Standard turnaround" },
    { value: "$10", label: "Your first design" },
    { value: "50,000+", label: "Designs delivered" },
    { value: "10+", label: "Machine formats" },
  ],
  statement: {
    eyebrow: "Why logos fail",
    text: "Auto-traced logos *fill* every shape the same way, *shrink* text into mush and *ignore* the fabric. A logo file needs *decisions,* not a button.",
    note: "Every stitch type, angle and density in your file is chosen by a digitizer who has run commercial machines — for your size, your garment and your machine.",
  },
  compare: {
    eyebrow: "Same logo · two files",
    word: "Traced",
    script: "vs. digitized.",
    intro: "Left: an auto-digitized logo. Right: the same artwork hand-digitized by our team. Drag the needle to compare.",
    before: { ...img(F, "logo-before-auto", S.tigerBad, "Auto-digitized logo with jagged edges and uneven fill"), label: "Auto-traced" },
    after: { ...img(F, "logo-after-hand", S.tigerGood, "Hand-digitized logo with crisp edges and smooth fills"), label: "Hand-digitized" },
    points: [
      { bad: "Jagged edges", good: "Clean satin borders", text: "Edges built as satin columns with pull compensation, not stair-stepped fill." },
      { bad: "Flat, lifeless fills", good: "Angled tatami", text: "Fill angles follow the shape so light catches the thread and adds depth." },
      { bad: "Unreadable text", good: "Legible lettering", text: 'Small text rebuilt in satin and kept at 0.25" or taller.' },
      { bad: "Too many colors", good: "Smart color plan", text: "Similar shades merged and sequenced to cut thread changes and trims." },
    ],
  },
  engineering: {
    eyebrow: "What goes into a logo file",
    word: "Every",
    script: "stitch decided.",
    intro: "Five calls separate a logo that looks printed-on-cheap from one that looks premium. We make each by hand.",
    items: [
      {
        kicker: "Stitch types",
        title: "Satin, fill or run — on purpose",
        text: "Narrow shapes get satin for shine, wide shapes get tatami fill for durability, fine lines get run or bean stitch. Choosing right is the difference between crisp and cluttered.",
        specs: ["Satin 1–7mm", "Tatami for wide areas", "Run / bean for detail"],
        image: img(F, "logo-eng-stitch-types", S.logo, "Macro of satin, fill and run stitches side by side"),
      },
      {
        kicker: "Lettering",
        title: "Small text that reads",
        text: 'Text below about 0.25" fills in and blurs. We rebuild lettering as clean satin columns, open up counters (the holes in a, e and o) and adjust letter spacing so names and taglines stay readable.',
        specs: ['Text ≥ 0.25"', "Open counters", "Satin lettering"],
        image: img(F, "logo-eng-lettering", S.detail, "Macro of crisp small embroidered lettering"),
      },
      {
        kicker: "Fabric",
        title: "Tuned for the garment",
        text: "A piqué polo, a stretchy performance tee and a heavy canvas jacket all need different density and underlay. Tell us the garment and we tune the file for it — no puckering, no gaps.",
        specs: ["Density by fabric", "Underlay by fabric", "Knit vs. woven"],
        image: img(F, "logo-eng-fabric", S.polo, "Left-chest logo embroidered on a piqué polo"),
      },
      {
        kicker: "Color",
        title: "Fewer stops, same look",
        text: "Every color change costs machine time. We merge near-identical shades, sequence colors to minimize trims and give you a thread chart for your brand colors.",
        specs: ["Thread color chart", "Merged shades", "Minimal trims"],
        image: img(F, "logo-eng-color", S.crest, "Embroidered crest with a clean multi-color thread plan"),
      },
      {
        kicker: "Sizing",
        title: "One logo, every placement",
        text: 'A 3.5" left-chest logo and a 12" jacket back aren\'t the same file scaled up. We digitize each size separately so density and detail are right at every placement.',
        specs: ['Left chest ≈ 3.5"', 'Back up to ≈ 12"', "Re-digitized per size"],
        image: img(F, "logo-eng-sizing", S.jacket, "Same logo embroidered at chest and jacket-back sizes"),
      },
    ],
  },
  applications: {
    eyebrow: "Wherever your brand goes",
    word: "Every",
    script: "placement.",
    items: [
      { title: "Polos & left chest", text: "The most common logo placement, tuned for piqué knit.", image: img(F, "logo-app-polo", S.polo, "Polo shirt with left-chest embroidered logo") },
      { title: "Caps & headwear", text: "Re-sequenced for the cap frame and curved crown.", image: img(F, "logo-app-cap", S.cap, "Cap with embroidered company logo") },
      { title: "Jackets & outerwear", text: "Large back logos and chest marks on heavy fabric.", image: img(F, "logo-app-jacket", S.jacket, "Jacket back with large embroidered logo") },
      { title: "Uniforms & workwear", text: "Durable files that survive industrial washing.", image: img(F, "logo-app-uniform", S.crest, "Work uniform with embroidered company crest") },
      { title: "Bags & accessories", text: "Totes, backpacks and duffels.", image: img(F, "logo-app-bag", S.logo, "Canvas bag with embroidered logo") },
      { title: "Patches & badges", text: "Turn your logo into a stitched patch.", image: img(F, "logo-app-patch", S.patch, "Embroidered logo patch with merrowed border") },
    ],
  },
  cheapVsPro: {
    intro: "A cheap logo file costs you blanks, machine time and your brand's reputation. Hover a card to see what we do instead.",
    items: [
      { cheap: { title: "Auto-traced artwork", text: "Software fills every shape the same way." }, pro: { title: "Hand-digitized", text: "Stitch types and angles chosen shape by shape." } },
      { cheap: { title: "Text shrunk to fit", text: "Small lettering fills in and becomes unreadable." }, pro: { title: "Lettering rebuilt", text: "Satin text with open counters, readable at size." } },
      { cheap: { title: "One file for all sizes", text: "Scaled up or down until density breaks." }, pro: { title: "Digitized per size", text: "Left chest and jacket back built separately." } },
      { cheap: { title: "Every color a stop", text: "Dozens of trims and color changes per run." }, pro: { title: "Production-ready", text: "Merged shades, smart sequence, fewer trims." } },
    ],
  },
  faqs: [
    { q: "What size should my logo be?", a: 'A typical **left-chest logo is about 3–4" wide**, cap fronts are up to about 5.5" wide, and jacket backs run 10–12". Tell us the placement and we\'ll digitize for that exact size.' },
    { q: "Can I use one file for every size?", a: "Not well. Scaling a stitch file changes its density and detail. We recommend a separate file for each size you'll run — we'll quote multiple sizes together." },
    { q: "What artwork do you need?", a: "Anything you have: JPG, PNG, PDF, AI, EPS or even a photo. Higher resolution helps, but we can work from a sketch. If you need clean artwork too, see our [vectorization service](/vectorization-services)." },
    { q: "Can you match my brand colors?", a: "Yes. Send your Pantone or hex colors and your thread brand (Madeira, Isacord, Robison-Anton…) and we'll include a matching thread chart." },
    { q: "How small can text be?", a: 'About **0.25" (6mm) tall** for capital letters is the practical minimum for clean, readable lettering. Below that we\'ll recommend a simplification.' },
    commonFaqs.formats,
    commonFaqs.turnaround,
  ],
  portfolio: portfolio("lion", "logo", "polo", "crest", "cap", "jacket"),
  marquee: ["Hand-digitized", "Brand-true", "Every size", "Crisp edges"],
  cta: { word: "Logo?", script: "Locked in.", text: "Send your logo, size and garment. We'll return a production-ready file in 4–6 hours — your first design is just $10." },
};
