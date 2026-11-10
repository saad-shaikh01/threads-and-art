import type { ServiceDetail } from "../service-details";
import { commonFaqs, img, portfolio, S } from "./shared";

const F = "puff";

export const puff: ServiceDetail = {
  poster: { word: "Puff", script: "Raised." },
  eyebrow: "3D puff digitizing",
  lead: "Foam doesn't forgive. We digitize 3D puff with the density to cut foam clean, capped column ends that seal it in, and a sequence that sews the flat parts first — so every letter stands up sharp.",
  hero: img(F, "puff-hero", S.puffMacro, "Raised 3D puff embroidery lettering on a black cap front"),
  callouts: [
    { x: "38%", y: "32%", side: "left", label: "Foam", value: "3mm · color stop" },
    { x: "58%", y: "48%", side: "right", label: "Density", value: "≈ 2× standard satin" },
    { x: "26%", y: "72%", side: "left", label: "Ends", value: "Capped & sealed" },
  ],
  stats: [
    { value: "4–6h", label: "Standard turnaround" },
    { value: "$10", label: "Your first design" },
    { value: "3mm", label: "Typical foam height" },
    { value: "10+", label: "Machine formats" },
  ],
  statement: {
    eyebrow: "Why puff is different",
    text: "Run a flat file over foam and it *peeks* through the stitches, *frays* out of the column ends and *collapses* in wide areas. Puff is *sculpture* in thread.",
    note: "A good puff file is built for the foam from the first stitch: what sews flat, where the machine stops, how dense the satin is and how every column closes.",
  },
  compare: {
    eyebrow: "Same lettering · two files",
    word: "Flat",
    script: "vs. puff-built.",
    intro: "Left: a regular file sewn over foam. Right: the same design digitized for 3D puff. Drag the needle to compare.",
    before: { ...img(F, "puff-before-flat-file", S.tigerBad, "Foam showing through thin stitches on badly digitized puff"), label: "Flat file" },
    after: { ...img(F, "puff-after-puff-file", S.tigerGood, "Clean, raised 3D puff lettering with sealed ends"), label: "Puff file" },
    points: [
      { bad: "Foam peeks through", good: "Full coverage", text: "Satin density roughly doubled so stitches perforate and fully cover the foam." },
      { bad: "Frayed column ends", good: "Sealed ends", text: "Capping stitches at every column end cut the foam and close it in." },
      { bad: "Collapsed wide areas", good: "Puff-safe widths", text: "Columns kept narrow enough to stand up; wide shapes split or switched to flat." },
      { bad: "Foam under flat parts", good: "Clean color stop", text: "Flat elements sew first, then a stop for foam, then the puff layer." },
    ],
  },
  engineering: {
    eyebrow: "What goes into a puff file",
    word: "Built",
    script: "to stand up.",
    intro: "Five decisions decide whether your puff looks sculpted or squashed. We make every one of them by hand.",
    items: [
      {
        kicker: "Density",
        title: "Dense enough to cut foam",
        text: "Puff satins run at roughly twice normal density. The needle perforates the foam along every edge so the excess tears away clean, and the thread fully hides the foam — no colored specks showing through.",
        specs: ["≈ 2× satin density", "Edge perforation", "Full foam coverage"],
        image: img(F, "puff-eng-density", S.puffMacro, "Macro of dense satin stitches over 3D puff foam"),
      },
      {
        kicker: "Column ends",
        title: "Capped and sealed",
        text: "Open satin ends let foam squeeze out and fray. We add capping stitches across every column end and around tight corners, so the foam is cut and closed in on all sides.",
        specs: ["End caps on every column", "Corner closures", "No fraying foam"],
        image: img(F, "puff-eng-caps", S.puff, "Close-up of capped column ends on puff lettering"),
      },
      {
        kicker: "Widths",
        title: "Columns that stand up",
        text: "Puff looks best in satin columns roughly 2–10mm wide. Thinner and the foam can't lift; wider and the satin goes loose and the top flattens. We split wide shapes and keep fine details flat.",
        specs: ["≈ 2–10mm columns", "Wide areas split", "Fine detail kept flat"],
        image: img(F, "puff-eng-widths", S.cap, "Puff lettering with even satin column widths"),
      },
      {
        kicker: "Underlay",
        title: "Light underneath, lofty on top",
        text: "Heavy underlay crushes foam before the top stitches land. Puff areas get only a light center-run, so the foam keeps its height, while flat areas get full underlay as normal.",
        specs: ["Center-run only under puff", "Full underlay on flat", "Maximum loft"],
        image: img(F, "puff-eng-underlay", S.detail, "Diagram of light underlay beneath raised puff stitches"),
      },
      {
        kicker: "Sequence",
        title: "Flat first, then the stop",
        text: "Every flat element sews first. Then the file stops so your operator can lay the foam, and the puff layer sews last in a clean, minimal-trim path. Run a heat gun over it and the stray foam shrinks away.",
        specs: ["Flat → stop → puff", "Foam color stop", "Minimal trims"],
        image: img(F, "puff-eng-sequence", S.capCrown, "Cap in a hoop with foam placed for the puff layer"),
      },
    ],
  },
  applications: {
    eyebrow: "Where puff shines",
    word: "Bold",
    script: "on anything.",
    items: [
      { title: "Caps & snapbacks", text: "The classic: raised lettering on structured fronts.", image: img(F, "puff-app-cap", S.puff, "Snapback cap with 3D puff lettering") },
      { title: "Varsity jackets", text: "Chest initials and sleeve numbers with real depth.", image: img(F, "puff-app-varsity", S.jacket, "Varsity jacket with raised embroidered initials") },
      { title: "Hoodies & sweats", text: "Heavyweight fleece holds puff beautifully.", image: img(F, "puff-app-hoodie", S.polo, "Hoodie with 3D puff chest logo") },
      { title: "Team uniforms", text: "Sports names and numbers that pop on the field.", image: img(F, "puff-app-team", S.crest, "Team uniform with raised embroidered crest") },
      { title: "Beanies", text: "Cuff logos raised off the knit.", image: img(F, "puff-app-beanie", S.detail, "Knit beanie with 3D puff cuff logo") },
      { title: "Bags & totes", text: "Canvas and duck take puff with no distortion.", image: img(F, "puff-app-bag", S.logo, "Canvas tote with 3D puff embroidered logo") },
    ],
  },
  cheapVsPro: {
    intro: "Cheap puff files waste foam, blanks and machine time. Hover a card to see what we do instead.",
    items: [
      { cheap: { title: "Regular file over foam", text: "Normal density can't cut or cover the foam." }, pro: { title: "Digitized for foam", text: "Roughly double density so foam perforates and hides." } },
      { cheap: { title: "Open column ends", text: "Foam squeezes out and frays at every end." }, pro: { title: "Capped ends", text: "Every column is sealed and the foam cut clean." } },
      { cheap: { title: "Everything puffed", text: "Fine detail and wide fills collapse under foam." }, pro: { title: "Puff where it works", text: "Fine detail stays flat; wide shapes are split." } },
      { cheap: { title: "No machine stop", text: "Foam ends up under the flat parts too." }, pro: { title: "Flat → stop → puff", text: "A clean color stop exactly where foam goes on." } },
    ],
  },
  faqs: [
    { q: "What thickness of foam should I use?", a: "**3mm foam** is the most common and what we digitize for by default. Tell us if you run 2mm or 6mm and we'll adjust density and widths to suit." },
    { q: "Can any design be done in 3D puff?", a: "Bold lettering and simple shapes work best. Very thin lines and small details can't lift foam, so we keep those flat and puff the rest. If your design isn't puff-friendly, we'll tell you before you order." },
    { q: "How small can puff lettering be?", a: 'Puff letters generally need to be at least about **0.5" tall** with column widths of about 2mm or more. Below that, the foam can\'t stand up and the letters blur.' },
    { q: "Do you digitize puff for caps?", a: "Yes — it's one of our most common orders. Cap puff files are also sequenced center-out for the cap frame. See our [hat digitizing service](/hat-embroidery-digitizing-services)." },
    { q: "Can I combine flat and puff in one design?", a: "Yes. We sequence all flat elements first, add a stop for foam, then sew the puff layer. You get one file that runs both." },
    commonFaqs.formats,
    commonFaqs.turnaround,
  ],
  portfolio: portfolio("puff", "puffMacro", "cap", "capCrown", "jacket", "crest"),
  marquee: ["Foam-ready", "Sealed ends", "Raised edges", "Zero fraying"],
  cta: { word: "Puff?", script: "Pumped.", text: "Send your design and foam height. We'll return a puff-ready file in 4–6 hours — your first design is just $10." },
};
