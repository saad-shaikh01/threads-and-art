import type { Metadata } from "next";
import Image from "next/image";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { CtaBand, RelatedServices, Testimonials } from "@/components/page/Blocks";
import { PageHero } from "@/components/page/PageHero";
import { RichText } from "@/components/page/RichText";
import { Reveal } from "@/components/ui/Reveal";
import { accountPages } from "@/lib/content";

export const metadata: Metadata = {
  title: { absolute: "About Threads and Arts | Professional Embroidery Digitizing & Vector Art Services" },
  description:
    "Threads and Arts specializes in professional embroidery digitizing and vector art services for promotional product manufacturers across the United States and Canada.",
};

const intro =
  "**Threads and Arts** specializes in professional **embroidery digitizing** and **vector art services** for promotional product manufacturers. We partner with custom promotional companies across the United States and Canada, delivering fast, reliable digitizing and vector design solutions that enhance branded merchandise with precision quality and quick turnaround times.";

const team = [
  "At **threadsandarts.com**, we employ internationally experienced designers who excel in **embroidery digitizing** and **vector art conversion**. Our embroidery digitizers combine exceptional design skills with decades of practical experience operating computerized embroidery machines, ensuring your designs stitch perfectly every time. We work collaboratively with clients from concept to final product and offer flexible payment terms including pay-after-delivery options.",
  "Our vector artists specialize in transforming complex images into detailed vector formats, reconstructing old raster images, and creating new logo designs that maintain quality across all applications. Trusted by promotional manufacturers throughout North America, we deliver technical excellence in every embroidery file and vector design.",
];

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Our story"
          title="About Threads and Arts"
          offers={[
            "Sign up now for our special startup offer - Only $10 per design",
            "Become a Premium Member and enjoy discounted pricing on all embroidery digitizing services",
          ]}
          cta={{ label: "Order Now", href: accountPages.signup }}
          secondaryCta={{ label: "Contact Us", href: "/contactus" }}
        />

        <section className="section-x section-y">
          <Reveal className="mx-auto max-w-4xl text-center">
            <p className="eyebrow mb-5">Who we are</p>
            <p className="heading-display text-[clamp(1.35rem,1rem+1.5vw,2.1rem)] leading-snug text-ivory/95">
              <RichText text={intro} />
            </p>
          </Reveal>
        </section>

        <section className="section-x pb-20 md:pb-28">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal className="relative">
              <div aria-hidden className="absolute -inset-3 rounded-[0.8rem] border border-dashed border-brand/40" />
              <div className="relative aspect-[16/10] overflow-hidden rounded-(--radius) border border-line">
                <Image
                  src="/assets/pages/about-us.png"
                  alt="Threads and Arts embroidery digitizing and vector art services"
                  fill
                  sizes="(min-width:1024px) 600px, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <div className="space-y-6">
              {team.map((t, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <p className="text-[1rem] leading-[1.85] text-muted">
                    <RichText text={t} />
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <RelatedServices />
        <Testimonials />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
