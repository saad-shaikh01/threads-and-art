import type { ServiceDetail } from "../service-details";
import { commonFaqs, img, portfolio, S } from "./shared";

const F = "applique";

export const applique: ServiceDetail = {
  // No accent: Anton's É gets clipped by the poster word's tight line-height.
  poster: { word: "Applique", script: "Layered." },
  eyebrow: "Appliqué digitizing",
  lead: "Appliqué swaps thousands of stitches for a piece of fabric. We digitize the placement line, tack-down and cover stitch so the fabric lands in the right place, stays put and finishes with a clean edge.",
  hero: img(F, "applique-hero", S.jacket, "Layered appliqué lettering on a jacket with satin cover stitch"),
  callouts: [
    { x: "34%", y: "30%", side: "left", label: "Step 1", value: "Placement line" },
    { x: "60%", y: "46%", side: "right", label: "Step 2", value: "Tack-down" },
    { x: "28%", y: "72%", side: "left", label: "Step 3", value: "Satin cover 3–4mm" },
  ],
  stats: [
    { value: "4–6h", label: "Standard turnaround" },
    { value: "$10", label: "Your first design" },
    { value: "3", label: "Stops per fabric layer" },
    { value: "10+", label: "Machine formats" },
  ],
  statement: {
    eyebrow: "Why appliqué works",
    text: "Big letters in solid fill mean *thousands* of stitches and *stiff* fabric. Appliqué uses *fabric* for the fill and thread for the *edge.*",
    note: "Done right it's faster, softer and more striking. Done wrong you get frayed edges, shifted fabric and a cover stitch that misses. The file decides which.",
  },
  compare: {
    eyebrow: "Same letters · two files",
    word: "Shifted",
    script: "vs. sealed.",
    intro: "Left: an appliqué file with no proper tack-down. Right: the same design digitized with placement, tack-down and cover. Drag to compare.",
    before: { ...img(F, "applique-before-bad", S.tigerBad, "Appliqué with shifted fabric and frayed raw edges"), label: "Weak file" },
    after: { ...img(F, "applique-after-good", S.tigerGood, "Clean appliqué with fabric sealed under a satin border"), label: "Our file" },
    points: [
      { bad: "Fabric shifts", good: "Tacked in place", text: "A zig-zag or double-run tack-down holds the fabric before trimming." },
      { bad: "Frayed edges", good: "Fully covered edge", text: "The satin cover is wide enough to wrap the raw edge completely." },
      { bad: "Cover misses", good: "Perfect registration", text: "Cover stitch centered on the tack-down with matched pull compensation." },
      { bad: "Guess-where-to-cut", good: "Clear stops", text: "A machine stop after each step so your operator knows exactly what's next." },
    ],
  },
  engineering: {
    eyebrow: "What goes into an appliqué file",
    word: "Three",
    script: "steps, every layer.",
    intro: "Every fabric layer in your design is built from the same three steps, plus the details that make them land perfectly.",
    items: [
      {
        kicker: "Placement",
        title: "A line that shows where",
        text: "The machine first sews a single run line showing exactly where the fabric goes, then stops. Your operator lays the fabric over it — no measuring, no guesswork.",
        specs: ["Single run line", "Machine stop", "Exact position"],
        image: img(F, "applique-eng-placement", S.tfPathing, "Placement run line stitched on a garment before fabric is laid"),
      },
      {
        kicker: "Tack-down",
        title: "Holds the fabric still",
        text: "A tack-down (zig-zag or double run) stitches the fabric in place just inside the edge, then the machine stops again so the excess can be trimmed close.",
        specs: ["Zig-zag or double run", "Trim stop", "No shifting"],
        image: img(F, "applique-eng-tackdown", S.detail, "Macro of zig-zag tack-down stitch holding appliqué fabric"),
      },
      {
        kicker: "Cover",
        title: "A satin that seals the edge",
        text: "The final satin cover wraps the trimmed raw edge completely. We size it at roughly 3–4mm and center it on the tack-down so no fabric fibers poke through.",
        specs: ["Satin ≈ 3–4mm", "Centered on tack-down", "No fraying"],
        image: img(F, "applique-eng-cover", S.crest, "Satin cover stitch wrapping the edge of an appliqué letter"),
      },
      {
        kicker: "Layers",
        title: "Multi-fabric, in order",
        text: "Twill on twill, felt on fleece, layered letters with outlines — we sequence every fabric layer bottom-up, each with its own three steps, so nothing gets trapped or covered by mistake.",
        specs: ["Bottom-up layering", "Steps per layer", "Varsity / Greek ready"],
        image: img(F, "applique-eng-layers", S.jacket, "Layered twill appliqué letters with multiple outlines"),
      },
      {
        kicker: "Cutting",
        title: "Pre-cut and laser files",
        text: "Pre-cutting your fabric? We can provide a matching cut line or a vector cut file so laser-cut pieces fit the placement line exactly. Raw-edge and reverse appliqué are digitized too.",
        specs: ["Cut line / vector file", "Raw-edge style", "Reverse appliqué"],
        image: img(F, "applique-eng-cutting", S.phoenix, "Laser-cut appliqué fabric pieces ready for stitching"),
      },
    ],
  },
  applications: {
    eyebrow: "Where appliqué shines",
    word: "Big",
    script: "& bold.",
    items: [
      { title: "Varsity letters", text: "Chenille and twill letters with stacked outlines.", image: img(F, "applique-app-varsity", S.jacket, "Varsity jacket with layered appliqué letter") },
      { title: "Greek & sorority", text: "Classic stitched letters on sweatshirts and jerseys.", image: img(F, "applique-app-greek", S.crest, "Sweatshirt with Greek appliqué letters") },
      { title: "Team numbers", text: "Large jersey numbers with a fraction of the stitches.", image: img(F, "applique-app-numbers", S.polo, "Sports jersey with appliqué numbers") },
      { title: "Kids & baby wear", text: "Soft, playful shapes that stay comfortable.", image: img(F, "applique-app-kids", S.detail, "Kids' clothing with soft appliqué shapes") },
      { title: "Jacket backs", text: "Huge designs without a bulletproof stitch block.", image: img(F, "applique-app-jacket", S.wings, "Jacket back with large layered appliqué design") },
      { title: "Home & quilts", text: "Pillows, blankets and quilt blocks.", image: img(F, "applique-app-home", S.patch, "Quilt block with stitched appliqué motif") },
    ],
  },
  cheapVsPro: {
    intro: "A bad appliqué file wastes fabric and leaves frayed edges. Hover a card to see what we do instead.",
    items: [
      { cheap: { title: "No placement stop", text: "Fabric placed by eye, often off-center." }, pro: { title: "Placement + stop", text: "A run line shows exactly where fabric goes." } },
      { cheap: { title: "Weak tack-down", text: "Fabric shifts when the cover sews." }, pro: { title: "Solid tack-down", text: "Zig-zag holds fabric still before trimming." } },
      { cheap: { title: "Narrow cover", text: "Raw fibers poke out past the satin." }, pro: { title: "Sized cover", text: "≈ 3–4mm satin fully wraps the edge." } },
      { cheap: { title: "Layers in random order", text: "Outlines trapped under the wrong fabric." }, pro: { title: "Bottom-up layers", text: "Each layer with its own three steps." } },
    ],
  },
  faqs: [
    { q: "What is a placement line and tack-down?", a: "The **placement line** is a single run stitch showing where to lay the fabric. The **tack-down** stitches the fabric in place so you can trim it. Then the **cover stitch** (usually satin) finishes the edge." },
    { q: "Can you do multi-layer appliqué?", a: "Yes — varsity and Greek letters with several fabric layers and outlines are common orders. Each layer gets its own placement, tack-down and cover in the right order." },
    { q: "Do you provide cut files for pre-cut fabric?", a: "Yes. We can include a cut line in the stitch file or a separate [vector cut file](/vectorization-services) for laser and die cutting." },
    { q: "Do you digitize raw-edge and reverse appliqué?", a: "Yes. Raw-edge appliqué uses a running or bean stitch instead of satin; reverse appliqué cuts away the top layer to reveal fabric beneath. Tell us the style you want." },
    { q: "Why choose appliqué over a full fill?", a: "Large filled areas can take tens of thousands of stitches and turn stiff. Appliqué replaces the fill with fabric: fewer stitches, softer feel, faster run times." },
    commonFaqs.formats,
    commonFaqs.turnaround,
  ],
  portfolio: portfolio("jacket", "crest", "wings", "patch", "polo", "phoenix"),
  marquee: ["Layered", "Sealed edges", "Fewer stitches", "Perfect stops"],
  cta: { word: "Layers?", script: "Lined up.", text: "Send your design, fabric and style. We'll return an appliqué-ready file in 4–6 hours — your first design is just $10." },
};
