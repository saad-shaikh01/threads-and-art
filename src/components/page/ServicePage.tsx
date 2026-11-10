import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import data from "@/lib/pages/services.json";
import { serviceDetails } from "@/lib/pages/service-details";
import { CinematicServicePage } from "./service/CinematicServicePage";
import { CtaBand, RelatedServices, Sidebar, Testimonials } from "./Blocks";
import { PageHero } from "./PageHero";
import { type Block, Prose } from "./Prose";
import { slugify } from "./RichText";

export type ServiceSlug = keyof typeof data;

export function ServicePage({ slug }: { slug: ServiceSlug }) {
  // Services with cinematic content get the redesigned template.
  const detail = serviceDetails[slug];
  if (detail) return <CinematicServicePage slug={slug} detail={detail} />;

  const page = data[slug];
  const blocks = page.blocks as Block[];

  // First image becomes the hero image; the rest stay inline.
  const heroImg = blocks.find((b) => b.t === "img") as { src: string; alt: string } | undefined;
  const body = heroImg ? blocks.filter((b) => b !== heroImg) : blocks;

  // Table of contents: h2s, or h3s when the page has a single h2.
  const h2s = body.filter((b) => b.t === "h2");
  const tocLevel = h2s.length > 1 ? "h2" : "h3";
  const toc = body
    .filter((b): b is Extract<Block, { text: string }> => b.t === tocLevel)
    .map((b) => ({ id: slugify(b.text), label: b.text.replace(/\*\*/g, "") }));

  return (
    <>
      <Header />
      <main>
        <PageHero eyebrow="Services" title={page.h1} offers={page.offers} image={heroImg} />
        <div id="details" className="section-x section-y grid scroll-mt-24 gap-12 lg:grid-cols-[1fr_280px] lg:gap-16">
          <article className="max-w-3xl">
            <Prose blocks={body} />
          </article>
          <Sidebar toc={toc} />
        </div>
        <RelatedServices current={`/${slug}`} />
        <Testimonials />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
