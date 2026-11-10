import { StitchDivider } from "@/components/cinematic/Ambient";
import { BeforeAfter } from "@/components/cinematic/BeforeAfter";
import { CinematicCta } from "@/components/cinematic/CinematicCta";
import { CinematicHero } from "@/components/cinematic/CinematicHero";
import { Coverflow } from "@/components/cinematic/Coverflow";
import { Faq } from "@/components/cinematic/Faq";
import { FlipCards } from "@/components/cinematic/FlipCards";
import { GuideSection } from "@/components/cinematic/GuideSection";
import { HorizontalGallery } from "@/components/cinematic/HorizontalGallery";
import { TestimonialBand } from "@/components/cinematic/KineticMarquee";
import { StatStrip } from "@/components/cinematic/Odometer";
import { StickyCards } from "@/components/cinematic/StickyCards";
import { StickyStack } from "@/components/cinematic/StickyStack";
import { TextMaskReveal } from "@/components/cinematic/TextMaskReveal";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { type Block, Prose } from "@/components/page/Prose";
import { slugify } from "@/components/page/RichText";
import { resolveAssets } from "@/lib/assets";
import { accountPages, links, servicePages } from "@/lib/content";
import data from "@/lib/pages/services.json";
import { defaultProcess, type ServiceDetail } from "@/lib/pages/service-details";
import { GuideOffer, PricingSection, RelatedGrid } from "./ServiceSections";

export function CinematicServicePage({ slug, detail }: { slug: keyof typeof data; detail: ServiceDetail }) {
  const page = data[slug];
  const d = resolveAssets(detail);
  const href = `/${slug}`;
  const idx = servicePages.findIndex((s) => s.href === href);
  const label = idx >= 0 ? servicePages[idx].title : page.h1;

  // SEO body copy: drop the legacy banner image, keep everything else.
  const blocks = page.blocks as Block[];
  const firstImg = blocks.find((b) => b.t === "img");
  const body = blocks.filter((b) => b !== firstImg);
  const tocLevel = body.filter((b) => b.t === "h2").length > 1 ? "h2" : "h3";
  const toc = body
    .filter((b): b is Extract<Block, { text: string }> => b.t === tocLevel)
    .map((b) => ({ id: slugify(b.text), label: b.text.replace(/\*\*/g, "") }));

  return (
    <>
      <Header />
      <main>
        <CinematicHero
          index={idx >= 0 ? String(idx + 1).padStart(2, "0") : undefined}
          eyebrow={d.eyebrow}
          word={d.poster.word}
          script={d.poster.script}
          posterSize={d.poster.size}
          title={page.h1}
          lead={d.lead}
          offers={page.offers}
          image={d.hero}
          callouts={d.callouts}
          primary={{ label: "Order Now", href: accountPages.order }}
          secondary={{ label: "Get Free Sample", href: links.sampleMail }}
          note={d.heroNote}
          ticker={d.ticker?.items}
          tickerLabel={d.ticker?.label}
        />
        <StatStrip stats={d.stats} />
        <TextMaskReveal eyebrow={d.statement.eyebrow} text={d.statement.text} note={d.statement.note} />
        <BeforeAfter {...d.compare} />
        <StickyStack {...d.engineering} />
        <HorizontalGallery {...d.applications} />
        <StickyCards
          eyebrow="How it works"
          word="Process"
          script="Four steps."
          intro={d.processIntro ?? "From the artwork you have to a file your machine loves — usually the same working day."}
          steps={d.process ?? defaultProcess}
        />
        <FlipCards eyebrow="Why the file matters" word="Cheap" script="costs twice." intro={d.cheapVsPro.intro} items={d.cheapVsPro.items} />
        <PricingSection service={label.toLowerCase()} included={d.included} />
        <GuideSection toc={toc} aside={<GuideOffer />}>
          <Prose blocks={body} />
        </GuideSection>
        <Faq items={d.faqs} />
        <Coverflow eyebrow="Recent work" word="Stitched" script="for real." items={d.portfolio} />
        <TestimonialBand words={d.marquee} />
        <RelatedGrid current={href} />
        <StitchDivider />
        <CinematicCta {...d.cta} />
      </main>
      <Footer />
    </>
  );
}
