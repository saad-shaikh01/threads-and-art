import type { Metadata } from "next";
import { StitchDivider } from "@/components/cinematic/Ambient";
import { BeforeAfter } from "@/components/cinematic/BeforeAfter";
import { CinematicCta } from "@/components/cinematic/CinematicCta";
import { CinematicHero } from "@/components/cinematic/CinematicHero";
import { Coverflow } from "@/components/cinematic/Coverflow";
import { TestimonialBand } from "@/components/cinematic/KineticMarquee";
import { StatStrip } from "@/components/cinematic/Odometer";
import { PortfolioGallery } from "@/components/cinematic/PortfolioGallery";
import { PosterTop } from "@/components/cinematic/PosterTop";
import { TextMaskReveal } from "@/components/cinematic/TextMaskReveal";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { RelatedGrid } from "@/components/page/service/ServiceSections";
import { resolveAssets } from "@/lib/assets";
import { accountPages, links } from "@/lib/content";
import { portfolioCategories, portfolioItems } from "@/lib/pages/portfolio";

export const metadata: Metadata = {
  title: { absolute: "Embroidery Digitizing Portfolio | Threads and Arts" },
  description:
    "Browse real embroidery digitizing and vector art work by Threads and Arts: logos, caps, 3D puff, patches, jacket backs and vector redraws — all hand-digitized.",
};

const img = resolveAssets({
  hero: { src: "/assets/pages/portfolio/portfolio-hero.webp", fallback: "/assets/3d/hero-phoenix-hoop.jpg", alt: "Phoenix embroidery stretched in a hoop under studio light" },
});

const featured = portfolioItems
  .filter((p) => p.category !== "Vector")
  .slice(0, 9)
  .map((p) => ({ src: p.src, alt: p.alt, caption: `${p.title} · ${p.technique}` }));

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <CinematicHero
          eyebrow="Portfolio"
          word="Portfolio"
          script="Real results."
          posterSize="section"
          title="Our Embroidery Digitizing Portfolio"
          lead="Logos, caps, 3D puff, patches, jacket backs and vector redraws — every piece hand-digitized for real machines and real garments."
          offers={["Logos, caps, 3D puff, patches & vector", "Every piece planned stitch by stitch", "Click any piece for its technique"]}
          image={img.hero}
          callouts={[
            { x: "40%", y: "30%", side: "left", label: "Detail", value: "Fine feathers" },
            { x: "60%", y: "52%", side: "right", label: "Fill", value: "Directional" },
            { x: "30%", y: "76%", side: "left", label: "Run", value: "Production-ready" },
          ]}
          primary={{ label: "Start your design", href: accountPages.order }}
          secondary={{ label: "Get a free sample", href: links.sampleMail }}
        />
        <StatStrip
          stats={[
            { value: "50,000+", label: "Designs delivered" },
            { value: "400+", label: "Customers served" },
            { value: "9", label: "Specialties" },
            { value: "2017", label: "Stitching since" },
          ]}
        />

        <section id="work" className="section-x section-y scroll-mt-24 border-b border-line">
          <PosterTop
            eyebrow="Browse the work"
            word="The work"
            script="Filter by craft."
            intro="Pick a category, then click any piece to see the technique behind it and the service that made it."
          />
          <PortfolioGallery items={portfolioItems} categories={portfolioCategories} />
        </section>

        <TextMaskReveal
          eyebrow="What you're looking at"
          text="Every piece here started as a *flat* image. What makes it look *expensive* is the file — not the *machine.*"
          note="Same machine, same thread, same garment. The difference is a digitizer who plans every angle, layer and stitch."
        />

        <BeforeAfter
          eyebrow="Before / after"
          word="Before"
          script="& after."
          intro="Left: an auto-digitized file. Right: the same artwork hand-digitized by our team. Drag the needle to compare."
          before={{ src: "/assets/tiger-bad.webp", alt: "Auto-digitized tiger embroidery with lost detail", label: "Auto-digitized" }}
          after={{ src: "/assets/tiger-digitized.webp", alt: "Hand-digitized tiger embroidery with crisp detail", label: "Threads & Arts" }}
          points={[
            { bad: "Blurry eyes & whiskers", good: "Readable detail", text: "Fine features rebuilt in satin and run stitches." },
            { bad: "Gaps at the edges", good: "Locked outlines", text: "Pull compensation so borders sit on their fills." },
            { bad: "Lumpy, stiff fills", good: "Smooth, flexible fills", text: "Layered density instead of stacked stitches." },
          ]}
        />

        <Coverflow eyebrow="Featured" word="Featured" script="Best of the hoop." items={featured} />

        <RelatedGrid />
        <TestimonialBand words={["Real work", "Real machines", "Real results", "Zero shortcuts"]} />
        <StitchDivider />
        <CinematicCta
          word="Yours?"
          script="Next up."
          text="Send your artwork and see it stitched like this. Your first design is just $10 — with free minor revisions."
        />
      </main>
      <Footer />
    </>
  );
}
