import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Reveal } from "@/components/ui/Reveal";
import legal from "@/lib/pages/legal.json";
import { Sidebar } from "./Blocks";
import { PageHero } from "./PageHero";
import { type Block, Prose } from "./Prose";
import { RichText, slugify } from "./RichText";

export function LegalPage({ slug, title, lead }: { slug: keyof typeof legal; title: string; lead: string }) {
  const doc = legal[slug];
  const toc = doc.sections.map((s) => ({ id: slugify(s.heading), label: s.heading }));

  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Legal"
          title={title}
          cta={{ label: "Contact Us", href: "/contactus" }}
          secondaryCta={{ label: "Back to Home", href: "/" }}
        >
          <p className="mt-6 max-w-xl text-[0.98rem] text-muted">{lead}</p>
        </PageHero>
        <div className="section-x section-y grid gap-12 lg:grid-cols-[1fr_280px] lg:gap-16">
          <article className="max-w-3xl">
            <div className="space-y-5">
              {doc.intro.map((b, i) =>
                b.t === "p" ? (
                  <p key={i} className="whitespace-pre-line text-[1.02rem] leading-[1.85] text-ivory/90">
                    <RichText text={b.text} />
                  </p>
                ) : null,
              )}
            </div>
            <ol className="mt-12 space-y-10">
              {doc.sections.map((s, i) => (
                <Reveal as="li" key={s.heading} className="border-t border-line pt-8">
                  <h2 id={slugify(s.heading)} className="heading-display mb-4 scroll-mt-28 text-2xl">
                    <span className="eyebrow mr-3 align-middle">{String(i + 1).padStart(2, "0")}</span>
                    {s.heading}
                  </h2>
                  <Prose blocks={s.blocks as Block[]} />
                </Reveal>
              ))}
            </ol>
          </article>
          <Sidebar toc={toc} offer={false} />
        </div>
      </main>
      <Footer />
    </>
  );
}
