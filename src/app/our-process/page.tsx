import type { Metadata } from "next";
import { StitchDivider } from "@/components/cinematic/Ambient";
import { BeforeAfter } from "@/components/cinematic/BeforeAfter";
import { CinematicCta } from "@/components/cinematic/CinematicCta";
import { CinematicHero } from "@/components/cinematic/CinematicHero";
import { Faq } from "@/components/cinematic/Faq";
import { FlipCards } from "@/components/cinematic/FlipCards";
import { FormatsSection, SendChecklist } from "@/components/cinematic/InfoSections";
import { TestimonialBand } from "@/components/cinematic/KineticMarquee";
import { StatStrip } from "@/components/cinematic/Odometer";
import { PosterTop } from "@/components/cinematic/PosterTop";
import { StickyCards } from "@/components/cinematic/StickyCards";
import { StickyStack } from "@/components/cinematic/StickyStack";
import { TextMaskReveal } from "@/components/cinematic/TextMaskReveal";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Check } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { Spotlight } from "@/components/ui/Spotlight";
import { resolveAssets } from "@/lib/assets";
import { accountPages, links } from "@/lib/content";
import { defaultProcess } from "@/lib/pages/service-details";

export const metadata: Metadata = {
  title: { absolute: "Our Embroidery Digitizing Process | Threads and Arts" },
  description:
    "See how Threads and Arts turns your artwork into a machine-ready embroidery file in 4–6 hours: hand-planned stitch paths, a stitch preview, free revisions and every major format.",};

const img = resolveAssets({
  hero: { src: "/assets/pages/process/process-hero.webp", fallback: "/assets/tf-pathing.jpg", alt: "Embroidery artwork overlaid with hand-planned stitch paths" },
});

const inside = [
  {
    kicker: "Artwork",
    title: "We study your design first",
    text: "Before a single stitch, a digitizer checks the artwork at its finished size: which details will hold, which lines are too thin, which colors can merge, and how the fabric will behave.",
    specs: ["Finished-size check", "Detail audit", "Color plan"],
    image: { src: "/assets/tf-artwork.jpg", alt: "Original tiger artwork before digitizing" },
  },
  {
    kicker: "Stitch paths",
    title: "Every direction has a purpose",
    text: "We plan stitch types (satin, fill, run), angles that catch the light, underlay that holds the fabric, and pull compensation so edges meet. This is where a file becomes good or bad.",
    specs: ["Satin · fill · run", "Angles & underlay", "Pull compensation"],
    image: { src: "/assets/tf-pathing.jpg", alt: "Tiger artwork with stitch path construction lines" },
  },
  {
    kicker: "Preview",
    title: "Density, sequence and detail",
    text: "We sequence the design to minimize trims and color changes, set density for your fabric, and render a stitch preview so you can see exactly what your machine will sew.",
    specs: ["Smart sequence", "Fabric-tuned density", "Stitch preview"],
    image: { src: "/assets/tf-preview.jpg", alt: "Digitized stitch preview of the tiger design" },
  },
  {
    kicker: "Finished",
    title: "Ready for real production",
    text: "The approved file is exported in your machine format and checked for jumps, trims and stitch count — so it runs clean on a single head or a 15-head production line.",
    specs: ["All machine formats", "Trim & jump check", "Production-ready"],
    image: { src: "/assets/tf-finished.jpg", alt: "Finished tiger embroidery" },
  },
];

const checks = [
  { title: "Density", text: "Matched to the fabric so stitches cover without going stiff or bulletproof." },
  { title: "Underlay", text: "The right foundation for knit, woven, caps, towels or leather." },
  { title: "Pull compensation", text: "Columns widened just enough so outlines meet their fills." },
  { title: "Sequence & trims", text: "Ordered to avoid shifting, with as few trims and color changes as possible." },
  { title: "Small text", text: 'Lettering kept at about 0.25" or taller, rebuilt in clean satin.' },
  { title: "Stitch count", text: "No wasted stitches — faster run times on your machine." },
  { title: "Jumps & tie-offs", text: "Locked stitches so nothing unravels after trimming." },
  { title: "Format export", text: "Exported and re-opened in your format to confirm it reads correctly." },
];

const cheapVsPro = [
  { cheap: { title: "Auto-digitized in a click", text: "Software guesses stitch types for every shape." }, pro: { title: "Planned by hand", text: "A digitizer decides every type, angle and layer." } },
  { cheap: { title: "No preview", text: "You find the problems on your first sew-out." }, pro: { title: "Preview first", text: "You approve the stitch preview before downloading." } },
  { cheap: { title: "One-size density", text: "The same settings for caps, towels and polos." }, pro: { title: "Fabric-tuned", text: "Density and underlay set for your garment." } },
  { cheap: { title: "Pay for every fix", text: "Revisions cost extra, or never come." }, pro: { title: "Free minor revisions", text: "We tweak it until it sews the way you want." } },
];

const faqs = [
  { q: "How long does the whole process take?", a: "Standard turnaround is **4–6 hours** from when we receive your artwork and details. Larger or very detailed designs may take a little longer — we'll tell you up front." },
  { q: "Do I see the design before I pay or download?", a: "You get a **stitch preview** before you download, so you can check every detail. Minor revisions are free." },
  { q: "What if the file doesn't sew well on my machine?", a: "Tell us what you're seeing (a photo of the sew-out helps). We'll adjust density, underlay or sequence and send an updated file." },
  { q: "Is everything really digitized by hand?", a: "Yes. Every file is planned by a digitizer with machine operation experience — we don't sell auto-digitized files." },
  { q: "Can you work from a low-quality image?", a: "Yes. We can digitize from a rough image or photo; for very low resolution artwork we may redraw it first. See our [vectorization service](/vectorization-services)." },
  { q: "Which formats will I receive?", a: "Any major format: **DST, PES, EXP, JEF, HUS, VP3, XXX, PXF, EMB, SEW** and more. Just tell us your machine." },
];

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <CinematicHero
          eyebrow="Our process"
          word="Process"
          script="Art to stitch."
          title="Our Embroidery Digitizing Process"
          lead="From the artwork you have to a file your machine loves — planned stitch by stitch by people who have run commercial embroidery machines. Usually the same working day."
          offers={["Hand-digitized, never auto-traced", "Stitch preview + free minor revisions", "Machine-ready in 4–6 hours"]}
          image={img.hero}
          callouts={[
            { x: "38%", y: "28%", side: "left", label: "Step 01", value: "Study the art" },
            { x: "62%", y: "50%", side: "right", label: "Step 02", value: "Plan the paths" },
            { x: "30%", y: "76%", side: "left", label: "Step 03", value: "Preview & export" },
          ]}
          primary={{ label: "Start an order", href: accountPages.order }}
          secondary={{ label: "Get a free sample", href: links.sampleMail }}
        />
        <StatStrip
          stats={[
            { value: "2 min", label: "To place an order" },
            { value: "4–6h", label: "Standard turnaround" },
            { value: "100%", label: "Hand-digitized" },
            { value: "10+", label: "Machine formats" },
          ]}
        />
        <TextMaskReveal
          eyebrow="Why process matters"
          text="Great embroidery isn't *traced.* It's *planned* — every angle, every layer, every *stitch* decided before the needle moves."
          note="Here's exactly what happens to your artwork between the moment you hit send and the moment your machine starts."
        />
        <StickyCards
          eyebrow="How it works"
          word="Four"
          script="simple steps."
          intro="Your side of the process takes about two minutes. We handle everything else."
          steps={defaultProcess}
        />
        <StickyStack
          eyebrow="Inside the file"
          word="Inside"
          script="the digitizing."
          intro="Follow one design — a detailed tiger — from raw artwork to finished embroidery."
          items={inside}
        />

        <section className="section-x section-y border-b border-line">
          <PosterTop
            eyebrow="Quality control"
            word="Checked"
            script="Eight ways."
            intro="Before a file leaves our studio, it passes the same eight checks a production manager would run on the floor."
          />
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {checks.map((c, i) => (
              <Reveal as="li" key={c.title} delay={(i % 4) * 0.07} className="h-full">
                <Spotlight className="group flex h-full flex-col rounded-[1.25rem] border border-line bg-panel p-6 transition-colors hover:border-brand/70">
                  <span className="flex items-center gap-3">
                    <span className="grid size-8 place-items-center rounded-full bg-brand/15 text-brand transition-colors group-hover:bg-brand group-hover:text-ivory">
                      <Check className="size-4" strokeWidth={3} />
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">Check 0{i + 1}</span>
                  </span>
                  <p className="mt-6 font-display text-xl text-ivory">{c.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{c.text}</p>
                </Spotlight>
              </Reveal>
            ))}
          </ul>
        </section>

        <BeforeAfter
          eyebrow="The result"
          word="Auto"
          script="vs. hand-made."
          intro="Same tiger, two files. Left: auto-digitized. Right: our hand-planned file. Drag the needle to compare."
          before={{ src: "/assets/tiger-bad.webp", alt: "Auto-digitized tiger with lost detail and gaps", label: "Auto-digitized" }}
          after={{ src: "/assets/tiger-digitized.webp", alt: "Hand-digitized tiger with crisp detail", label: "Hand-digitized" }}
          points={[
            { bad: "Lost details", good: "Readable details", text: "Eyes, whiskers and fine lines rebuilt to hold at size." },
            { bad: "Gaps in fills", good: "Clean fills", text: "Pull compensation and overlap so every edge meets." },
            { bad: "Thread build-up", good: "Smooth stitching", text: "Layers planned so stitches don't stack into lumps." },
          ]}
        />
        <SendChecklist aside={<a href="/contactus#quote" className="btn btn-outline btn-sm">Build a quote</a>} />
        <FormatsSection />
        <FlipCards
          eyebrow="Why the process matters"
          word="Cheap"
          script="costs twice."
          intro="Most digitizing problems are process problems. Hover a card to see how ours is different."
          items={cheapVsPro}
        />
        <Faq items={faqs} eyebrow="About the process" />
        <TestimonialBand words={["Hand-planned", "Previewed", "Checked", "Machine-ready"]} />
        <StitchDivider />
        <CinematicCta
          word="Start?"
          script="Send your art."
          text="Upload your artwork and get a machine-ready file in 4–6 hours. Your first design is just $10."
        />
      </main>
      <Footer />
    </>
  );
}
