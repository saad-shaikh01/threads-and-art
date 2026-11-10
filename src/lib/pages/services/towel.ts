import type { ServiceDetail } from "../service-details";
import { commonFaqs, img, portfolio, S } from "./shared";

const F = "towel";

export const towel: ServiceDetail = {
  poster: { word: "Towel", script: "Plush-proof." },
  eyebrow: "Towel digitizing",
  lead: "Terry loops swallow thread. We digitize towel files with knockdown stitches that flatten the pile, heavier underlay, wider satins and lettering sized to sit on top — not sink in.",
  hero: img(F, "towel-hero", S.detail, "Embroidered monogram sitting crisply on top of plush terry towel"),
  callouts: [
    { x: "36%", y: "30%", side: "left", label: "Base", value: "Knockdown stitch" },
    { x: "60%", y: "46%", side: "right", label: "Satin", value: "Wider · ≥ 1.5mm" },
    { x: "28%", y: "72%", side: "left", label: "Text", value: 'Min ≈ 0.4" tall' },
  ],
  stats: [
    { value: "4–6h", label: "Standard turnaround" },
    { value: "$10", label: "Your first design" },
    { value: "0", label: "Loops poking through" },
    { value: "10+", label: "Machine formats" },
  ],
  statement: {
    eyebrow: "Why towels are different",
    text: "On terry, a normal file *sinks* into the pile, loops *poke* through the stitches and thin text simply *disappears.*",
    note: "The fix isn't more thread on top — it's a foundation that flattens the loops first, then stitches sized to stay visible.",
  },
  compare: {
    eyebrow: "Same monogram · two files",
    word: "Sunk",
    script: "vs. sitting pretty.",
    intro: "Left: a regular file sewn on a bath towel. Right: the same design digitized for terry. Drag the needle to compare.",
    before: { ...img(F, "towel-before-sunk", S.tigerBad, "Embroidery sinking into towel pile with loops poking through"), label: "Regular file" },
    after: { ...img(F, "towel-after-knockdown", S.tigerGood, "Crisp embroidery on a towel with flattened pile beneath"), label: "Towel file" },
    points: [
      { bad: "Stitches sink in", good: "Sits on top", text: "A knockdown layer flattens the loops before the design sews." },
      { bad: "Loops poke through", good: "Clean coverage", text: "Heavier underlay and slightly higher density lock the pile down." },
      { bad: "Thin text vanishes", good: "Bold, readable", text: "Lettering sized up and satins widened so they ride above the pile." },
      { bad: "Puckered terry", good: "Smooth and soft", text: "Balanced density keeps the towel soft and unwrinkled." },
    ],
  },
  engineering: {
    eyebrow: "What goes into a towel file",
    word: "Flatten",
    script: "then stitch.",
    intro: "Five decisions keep your design on top of the pile through every wash.",
    items: [
      {
        kicker: "Knockdown",
        title: "A base that flattens the pile",
        text: "Before your design, we add a light knockdown fill — a low-density net stitched in a color matching the towel. It presses the loops flat so the real design has a smooth surface to sit on.",
        specs: ["Low-density net", "Towel-colored", "Under text & detail"],
        image: img(F, "towel-eng-knockdown", S.detail, "Macro of a knockdown stitch flattening terry loops"),
      },
      {
        kicker: "Underlay",
        title: "Heavier foundation",
        text: "Terry needs more support than a tee. We use stronger center-run and zig-zag underlay so top stitches are lifted above the pile instead of sinking between the loops.",
        specs: ["Center-run + zig-zag", "Lifted top stitches", "Pile locked down"],
        image: img(F, "towel-eng-underlay", S.crest, "Diagram of heavy underlay under towel embroidery"),
      },
      {
        kicker: "Satins",
        title: "Wider columns, bolder text",
        text: "Thin satins disappear in the pile. We widen columns and keep lettering at roughly 0.4\" tall or larger, so monograms and names stay readable from across the room.",
        specs: ["Satin ≥ 1.5mm", 'Text ≈ 0.4"+', "Bold fonts"],
        image: img(F, "towel-eng-satin", S.logo, "Wide satin monogram on a plush towel"),
      },
      {
        kicker: "Topping",
        title: "Built to work with topping",
        text: "Most shops use a water-soluble topping on towels. We digitize with that in mind — clean edges and no tiny gaps where topping fragments get trapped after washing.",
        specs: ["Water-soluble topping", "Clean edges", "Wash-friendly"],
        image: img(F, "towel-eng-topping", S.tfFinished, "Towel embroidery with water-soluble topping being removed"),
      },
      {
        kicker: "Placement",
        title: "Sized for the towel",
        text: "Hand, bath, beach and golf towels all have different borders (the dobby band) and hoop sizes. We fit the design to your placement — above the band, centered or in a corner.",
        specs: ["Above dobby band", "Corner or center", "Hoop-matched"],
        image: img(F, "towel-eng-placement", S.patch, "Monogram placed above the dobby band of a bath towel"),
      },
    ],
  },
  applications: {
    eyebrow: "Every kind of towel",
    word: "Plush",
    script: "to pro.",
    items: [
      { title: "Bath & hand towels", text: "Monograms and initials above the band.", image: img(F, "towel-app-bath", S.detail, "Stack of monogrammed bath towels") },
      { title: "Hotel & spa", text: "Brand marks that survive industrial laundry.", image: img(F, "towel-app-hotel", S.crest, "Hotel towels with embroidered logo") },
      { title: "Golf towels", text: "Club crests on small waffle and terry towels.", image: img(F, "towel-app-golf", S.logo, "Golf towel with embroidered club crest") },
      { title: "Beach towels", text: "Big names and graphics on oversized terry.", image: img(F, "towel-app-beach", S.wings, "Beach towel with large embroidered name") },
      { title: "Baby & hooded", text: "Soft, safe designs on the softest towels.", image: img(F, "towel-app-baby", S.puff, "Hooded baby towel with embroidered name") },
      { title: "Robes", text: "Chest monograms and back logos on terry robes.", image: img(F, "towel-app-robe", S.polo, "Terry bathrobe with chest monogram") },
    ],
  },
  cheapVsPro: {
    intro: "A towel file that ignores the pile looks fine on screen and vanishes in the wash. Hover a card to see what we do instead.",
    items: [
      { cheap: { title: "No knockdown", text: "Stitches sink straight into the loops." }, pro: { title: "Knockdown base", text: "Pile pressed flat before the design sews." } },
      { cheap: { title: "T-shirt underlay", text: "Too light to lift stitches above the pile." }, pro: { title: "Heavier underlay", text: "Top stitches ride on a solid foundation." } },
      { cheap: { title: "Thin satins", text: "Columns disappear between the loops." }, pro: { title: "Wider satins", text: "Bold columns that stay visible." } },
      { cheap: { title: "Small text", text: "Names turn into fuzz on terry." }, pro: { title: "Sized-up lettering", text: 'Text kept ≈ 0.4" and taller.' } },
    ],
  },
  faqs: [
    { q: "What is a knockdown stitch?", a: "A light, low-density fill stitched under the design — usually in the towel's color — that flattens the terry loops so the embroidery sits on a smooth surface instead of sinking in." },
    { q: "How small can text be on a towel?", a: 'We recommend lettering about **0.4" (10mm) tall or larger** on terry. Smaller than that, the pile swallows the stitches.' },
    { q: "Do I need topping on towels?", a: "We strongly recommend a water-soluble topping. It keeps stitches on top of the loops while sewing and washes away afterwards. Our files are built to work with it." },
    { q: "Will the design survive hotel laundry?", a: "Yes, when the file is built right. Heavier underlay and properly locked stitches hold up to commercial washing. Use polyester thread for bleach-heavy laundries." },
    { q: "Where should a towel monogram go?", a: 'Typically centered **2–3" above the dobby band** on bath and hand towels. Tell us the towel type and we\'ll size it to fit.' },
    commonFaqs.formats,
    commonFaqs.turnaround,
  ],
  portfolio: portfolio("detail", "crest", "logo", "patch", "wings", "polo"),
  marquee: ["Knockdown", "Sits on top", "Wash-proof", "Bold monograms"],
  cta: { word: "Towels?", script: "Tamed.", text: "Send your design and towel type. We'll return a terry-ready file in 4–6 hours — your first design is just $10." },
};
