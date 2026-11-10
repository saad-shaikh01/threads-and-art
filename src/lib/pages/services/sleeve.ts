import type { ServiceDetail } from "../service-details";
import { commonFaqs, img, portfolio, S } from "./shared";

const F = "sleeve";

export const sleeve: ServiceDetail = {
  poster: { word: "Sleeve", script: "Narrow & bold." },
  eyebrow: "Sleeve digitizing",
  lead: "A sleeve is a narrow tube that moves. We digitize sleeve files for the arm — sized to the panel, sequenced along the length and stabilized so vertical text and flags stay straight.",
  hero: img(F, "sleeve-hero", S.jacket, "Jacket sleeve with vertical embroidered lettering"),
  callouts: [
    { x: "36%", y: "30%", side: "left", label: "Width", value: 'Often ≤ 3.5"' },
    { x: "60%", y: "46%", side: "right", label: "Sequence", value: "Top → bottom" },
    { x: "28%", y: "72%", side: "left", label: "Text", value: "Vertical · rotated" },
  ],
  stats: [
    { value: "4–6h", label: "Standard turnaround" },
    { value: "$10", label: "Your first design" },
    { value: '3.5"', label: "Typical sleeve width" },
    { value: "10+", label: "Machine formats" },
  ],
  statement: {
    eyebrow: "Why sleeves are different",
    text: "A sleeve is *narrow,* *tubular* and always moving. Long designs *drift,* vertical text goes *crooked* and the seam is never far away.",
    note: "Sleeve files are built for the space and the frame: right width, the right direction of travel and density that bends with the arm.",
  },
  compare: {
    eyebrow: "Same design · two files",
    word: "Crooked",
    script: "vs. straight.",
    intro: "Left: a chest file rotated onto a sleeve. Right: the same design digitized for the sleeve. Drag the needle to compare.",
    before: { ...img(F, "sleeve-before-crooked", S.tigerBad, "Sleeve embroidery drifting off-line with puckered fabric"), label: "Rotated file" },
    after: { ...img(F, "sleeve-after-straight", S.tigerGood, "Straight vertical sleeve embroidery with even stitching"), label: "Sleeve file" },
    points: [
      { bad: "Long designs drift", good: "Straight to the end", text: "Sequenced in one direction along the length so fabric never bunches." },
      { bad: "Too wide for the panel", good: "Sized to fit", text: "Width matched to the sleeve so it stays clear of seams." },
      { bad: "Stiff, boardy patch", good: "Moves with the arm", text: "Lighter density so the sleeve still bends and drapes." },
      { bad: "Crooked lettering", good: "True vertical text", text: "Letters rotated and spaced for reading down the arm." },
    ],
  },
  engineering: {
    eyebrow: "What goes into a sleeve file",
    word: "Down",
    script: "the arm.",
    intro: "Five decisions keep sleeve designs straight, flat and comfortable to wear.",
    items: [
      {
        kicker: "Sizing",
        title: "Fit to the sleeve panel",
        text: "Most sleeves give you a field around 3–3.5\" wide on adults (less on kids and short sleeves). We size the design to your garment so it stays clear of the seams and the cuff.",
        specs: ['≈ 3–3.5" wide', "Clear of seams", "Length to suit"],
        image: img(F, "sleeve-eng-sizing", S.jacket, "Sleeve with embroidery field marked by a red dashed outline"),
      },
      {
        kicker: "Sequence",
        title: "One direction of travel",
        text: "Long designs drift if the machine jumps back and forth. We sequence top-to-bottom (or cuff-to-shoulder) so fabric is always pushed one way and the design stays aligned.",
        specs: ["Top → bottom", "No back-and-forth", "Minimal trims"],
        image: img(F, "sleeve-eng-sequence", S.tfPathing, "Stitch path diagram running down a sleeve"),
      },
      {
        kicker: "Lettering",
        title: "Vertical text that reads",
        text: "Names, slogans and dates down the arm need letters rotated, spaced and baselined for vertical reading. We build the lettering for that direction instead of rotating a chest file.",
        specs: ["Rotated baseline", "Even spacing", "Readable at a glance"],
        image: img(F, "sleeve-eng-lettering", S.detail, "Vertical embroidered lettering down a sleeve"),
      },
      {
        kicker: "Density",
        title: "Bends with the arm",
        text: "A sleeve moves constantly. Overly dense stitching turns into a stiff board. We use lighter fills and smart underlay so the design flexes with the fabric.",
        specs: ["Lighter fills", "Flexible underlay", "Comfortable wear"],
        image: img(F, "sleeve-eng-density", S.polo, "Embroidered sleeve flexing naturally with the arm"),
      },
      {
        kicker: "Frames",
        title: "Built for sleeve & tubular hoops",
        text: "Whether you hoop on a sleeve arm, a tubular frame or a clamp system, we keep the design inside your frame's field and balanced for one clean run.",
        specs: ["Tubular frame ready", "Sleeve-arm safe", "One clean run"],
        image: img(F, "sleeve-eng-frames", S.phoenix, "Sleeve hooped on a tubular embroidery frame"),
      },
    ],
  },
  applications: {
    eyebrow: "Every kind of sleeve",
    word: "Shoulder",
    script: "to cuff.",
    items: [
      { title: "Uniform sleeves", text: "Department marks, ranks and company logos.", image: img(F, "sleeve-app-uniform", S.crest, "Work uniform sleeve with embroidered emblem") },
      { title: "Flags", text: "National and state flags, sewn the right way round.", image: img(F, "sleeve-app-flag", S.patch, "Embroidered flag on a uniform sleeve") },
      { title: "Team & sportswear", text: "Numbers, names and sponsor marks.", image: img(F, "sleeve-app-team", S.polo, "Sports jersey sleeve with embroidered logo") },
      { title: "Jackets & hoodies", text: "Long vertical text down the arm.", image: img(F, "sleeve-app-jacket", S.jacket, "Hoodie sleeve with vertical embroidered text") },
      { title: "Cuffs", text: "Small monograms and brand marks at the wrist.", image: img(F, "sleeve-app-cuff", S.detail, "Shirt cuff with embroidered monogram") },
      { title: "Fashion apparel", text: "Statement sleeve graphics for brands and drops.", image: img(F, "sleeve-app-fashion", S.wings, "Fashion jacket with ornate sleeve embroidery") },
    ],
  },
  cheapVsPro: {
    intro: "A rotated chest file on a sleeve drifts, puckers and stiffens. Hover a card to see what we do instead.",
    items: [
      { cheap: { title: "Chest file, rotated", text: "Sequenced for a flat chest, not a narrow tube." }, pro: { title: "Built for the sleeve", text: "Sized and sequenced along the arm." } },
      { cheap: { title: "Back-and-forth paths", text: "Long designs drift out of line." }, pro: { title: "One direction", text: "Top-to-bottom so the design stays straight." } },
      { cheap: { title: "Heavy density", text: "The sleeve turns stiff as a board." }, pro: { title: "Flexible density", text: "Moves and drapes with the arm." } },
      { cheap: { title: "Too wide", text: "Runs into the seam or off the frame." }, pro: { title: "Panel-sized", text: "Kept inside a 3–3.5\" field." } },
    ],
  },
  faqs: [
    { q: "How big can sleeve embroidery be?", a: 'On adult long sleeves the field is **usually around 3–3.5" wide**, with length depending on the design and frame. Short sleeves and kids\' sizes are smaller. Tell us the garment and we\'ll fit it.' },
    { q: "Which way should a flag face on a sleeve?", a: "By convention, a US flag on the **right sleeve** is shown reversed, so the stars face forward as if the flag is moving with the wearer. Tell us which sleeve and we'll set it correctly." },
    { q: "Can you do text running down the whole sleeve?", a: "Yes. Long vertical text is digitized for that direction, sequenced top-to-bottom so it stays straight. Very long designs may need a tubular frame or re-hooping." },
    { q: "Will the embroidery make the sleeve stiff?", a: "Not with a sleeve file. We use lighter density and flexible underlay so the design moves with the arm." },
    { q: "Can I use my chest logo on the sleeve?", a: "Usually not as-is. Sleeves are narrower, so the logo is resized and often simplified. We'll re-digitize it to the sleeve size. See our [logo digitizing service](/logo-embroidery-digitizing-services)." },
    commonFaqs.formats,
    commonFaqs.turnaround,
  ],
  portfolio: portfolio("jacket", "polo", "crest", "patch", "detail", "wings"),
  marquee: ["Straight lines", "Sleeve-sized", "Flexible", "Flag-ready"],
  cta: { word: "Sleeves?", script: "Sorted.", text: "Send your design, garment and sleeve. We'll return a sleeve-ready file in 4–6 hours — your first design is just $10." },
};
