import type { ServiceDetail } from "../service-details";
import { commonFaqs, img, portfolio, S } from "./shared";

const F = "patch";

export const patch: ServiceDetail = {
  poster: { word: "Patch", script: "Bordered." },
  eyebrow: "Embroidered patch digitizing",
  lead: "A patch is a self-contained piece of embroidery, edge to edge. We digitize full-coverage fills that won't show the twill, borders built for merrow or satin finishing, and cut lines for clean trimming.",
  hero: img(F, "patch-hero", S.wings, "Embroidered patch with satin border and full-coverage fill"),
  callouts: [
    { x: "34%", y: "28%", side: "left", label: "Border", value: "Satin 3–5mm" },
    { x: "60%", y: "48%", side: "right", label: "Coverage", value: "100% fill" },
    { x: "26%", y: "74%", side: "left", label: "Edge", value: "Merrow or laser" },
  ],
  stats: [
    { value: "4–6h", label: "Standard turnaround" },
    { value: "$10", label: "Your first design" },
    { value: "100%", label: "Stitch coverage" },
    { value: "10+", label: "Machine formats" },
  ],
  statement: {
    eyebrow: "Why patches are different",
    text: "A patch has no garment to hide behind. Thin fills show the *twill,* weak borders *fray* when cut, and the whole thing *curls* if density is off.",
    note: "Patch files are built as a complete object: placement, fill, detail and border, sequenced so the edge is clean when it comes off the machine.",
  },
  compare: {
    eyebrow: "Same patch · two files",
    word: "Frayed",
    script: "vs. finished.",
    intro: "Left: a garment file stitched as a patch. Right: the same design digitized as a patch. Drag the needle to compare.",
    before: { ...img(F, "patch-before-garment-file", S.tigerBad, "Patch with twill showing through and a frayed edge"), label: "Garment file" },
    after: { ...img(F, "patch-after-patch-file", S.tigerGood, "Clean embroidered patch with full coverage and tight border"), label: "Patch file" },
    points: [
      { bad: "Twill shows through", good: "Full coverage", text: "Fill density and underlay tuned so no backing fabric peeks out." },
      { bad: "Frayed edges", good: "Locked border", text: "Satin border sewn last over a run line, so the edge is sealed when trimmed." },
      { bad: "Curled patch", good: "Lies flat", text: "Fill angles balanced across the design so the patch doesn't pull in one direction." },
      { bad: "Messy trimming", good: "Cut line included", text: "A cut/placement line marks exactly where to trim or laser-cut." },
    ],
  },
  engineering: {
    eyebrow: "What goes into a patch file",
    word: "Edge",
    script: "to edge.",
    intro: "Five details make a patch look bought, not homemade. We build every one into your file.",
    items: [
      {
        kicker: "Coverage",
        title: "100% stitch coverage",
        text: "Fully embroidered patches cover every millimeter of the backing. We set fill density and underlay so the twill never shows — even on light thread over dark fabric.",
        specs: ["Full-coverage fills", "Tuned underlay", "No twill show-through"],
        image: img(F, "patch-eng-coverage", S.patch, "Macro of dense full-coverage patch fill"),
      },
      {
        kicker: "Border",
        title: "Satin or merrow — your call",
        text: "Satin borders are stitched in the file (usually 3–5mm wide). Merrowed edges are added after cutting, so we stop the design just inside the edge with a clean run line for the merrow machine to wrap.",
        specs: ["Satin 3–5mm", "Merrow-ready edge", "Run line under border"],
        image: img(F, "patch-eng-border", S.wings, "Close-up of a raised satin patch border"),
      },
      {
        kicker: "Sequence",
        title: "Placement, fill, detail, border",
        text: "A placement line comes first, then the background fill, then the detail, and the border last so it locks every edge down. You get a clean outline every time.",
        specs: ["Placement line", "Border sewn last", "Locked edges"],
        image: img(F, "patch-eng-sequence", S.crest, "Patch shown in stages from placement line to border"),
      },
      {
        kicker: "Flatness",
        title: "Balanced so it lies flat",
        text: "Dense fills all running the same way pull the patch into a curl. We vary fill angles across areas and balance pull compensation so the finished patch sits flat on any garment.",
        specs: ["Varied fill angles", "Balanced pull comp", "Flat finish"],
        image: img(F, "patch-eng-flat", S.detail, "Flat embroidered patch on a dark table"),
      },
      {
        kicker: "Cutting",
        title: "Cut lines for clean trims",
        text: "Running patches in bulk? We include a cut line for hot-knife or laser cutting and can lay out multiple patches per hoop so you sew a sheet at a time.",
        specs: ["Laser / hot-knife line", "Multi-patch layouts", "Batch-ready"],
        image: img(F, "patch-eng-cutting", S.phoenix, "Sheet of embroidered patches being laser cut"),
      },
    ],
  },
  applications: {
    eyebrow: "Patches for every purpose",
    word: "Sew,",
    script: "stick or iron.",
    items: [
      { title: "Uniform & work patches", text: "Name tags, company badges and department marks.", image: img(F, "patch-app-uniform", S.crest, "Work uniform with embroidered patch") },
      { title: "Club & motorcycle", text: "Large back patches, rockers and chapter marks.", image: img(F, "patch-app-club", S.jacket, "Leather vest with embroidered club patches") },
      { title: "Hook & loop / morale", text: "Velcro-backed patches for tactical gear.", image: img(F, "patch-app-velcro", S.patch, "Hook-and-loop backed embroidered patch") },
      { title: "Brand & merch", text: "Patches for caps, bags and limited drops.", image: img(F, "patch-app-brand", S.cap, "Cap with sewn-on embroidered brand patch") },
      { title: "Scouts & schools", text: "Badges, crests and achievement patches.", image: img(F, "patch-app-scouts", S.wings, "Collection of embroidered badge patches") },
      { title: "Iron-on & peel-and-stick", text: "Heat-seal and adhesive backed patches.", image: img(F, "patch-app-iron-on", S.logo, "Iron-on embroidered patch on denim") },
    ],
  },
  cheapVsPro: {
    intro: "A bad patch file shows the twill, frays at the edge and curls in the wash. Hover a card to see what we do instead.",
    items: [
      { cheap: { title: "Garment-weight fill", text: "Too thin to cover the twill completely." }, pro: { title: "Full-coverage fill", text: "Density set to hide the backing entirely." } },
      { cheap: { title: "Border sewn first", text: "Fill shifts and pushes past the edge." }, pro: { title: "Border sewn last", text: "Locks every edge down for a clean outline." } },
      { cheap: { title: "One fill angle", text: "The whole patch pulls and curls." }, pro: { title: "Balanced angles", text: "Fills vary by area so it lies flat." } },
      { cheap: { title: "No cut line", text: "Every patch trimmed by eye." }, pro: { title: "Cut line included", text: "Ready for laser or hot-knife trimming." } },
    ],
  },
  faqs: [
    { q: "What size patches can you digitize?", a: 'Any size. Most patches are **2–4"** for uniforms and caps, while back patches can be **10–12"** or more. Tell us the finished size and we\'ll digitize for it.' },
    { q: "Satin border or merrowed edge?", a: "Satin borders are part of the stitch file and work for any shape. Merrowed (overlocked) edges suit round, oval and simple shapes and are added after cutting. We'll prepare your file for either." },
    { q: "Do you do woven, PVC or chenille patches?", a: "We digitize **embroidered patches** for your machine. Woven, PVC and chenille patches are made with different processes, but we can prepare clean [vector artwork](/vectorization-services) for any of them." },
    { q: "Can you lay out several patches in one hoop?", a: "Yes. We can step-and-repeat your patch across the hoop with cut lines, so you sew a whole sheet in one run." },
    { q: "What backing should I use?", a: "Twill with a heavy tear-away or cut-away stabilizer is the most common. For laser cutting, many shops use a heat-cut twill. Tell us your setup and we'll tune density to it." },
    commonFaqs.formats,
    commonFaqs.turnaround,
  ],
  portfolio: portfolio("patch", "wings", "crest", "phoenix", "logo", "cap"),
  marquee: ["Full coverage", "Clean borders", "Lies flat", "Cut-ready"],
  cta: { word: "Patch?", script: "Perfected.", text: "Send your design, size and border style. We'll return a patch-ready file in 4–6 hours — your first design is just $10." },
};
