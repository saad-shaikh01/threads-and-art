import { ArrowUpRight } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { links } from "@/lib/content";

export function SampleCta() {
  return (
    <section
      id="sample"
      className="section-x relative overflow-hidden py-20 md:py-28 lg:py-32"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 110%, rgba(84,26,36,0.5), transparent 55%), var(--panel-deep)",
        }}
      />

      <svg
        aria-hidden
        className="pointer-events-none absolute -right-20 -top-20 hidden size-80 animate-float opacity-20 lg:block"
        viewBox="0 0 200 200"
      >
        <circle cx="100" cy="100" r="92" fill="none" stroke="var(--red)" strokeWidth="1" strokeDasharray="5 6" />
        <circle cx="100" cy="100" r="68" fill="none" stroke="var(--line)" strokeWidth="1" strokeDasharray="2 5" />
      </svg>

      <svg
        aria-hidden
        className="pointer-events-none absolute -bottom-16 -left-16 hidden size-64 animate-float opacity-15 lg:block"
        style={{ animationDelay: "-3s" }}
        viewBox="0 0 200 200"
      >
        <circle cx="100" cy="100" r="80" fill="none" stroke="var(--line)" strokeWidth="1" strokeDasharray="4 8" />
      </svg>

      <div className="relative mx-auto max-w-2xl text-center">
        <Reveal>
          <p className="eyebrow mb-5">Let&apos;s make something great</p>
          <h2 className="heading-2 text-[clamp(2.1rem,1.4rem+3vw,3.5rem)]">
            Your artwork.
            <br />
            <em className="text-accent">Our next great stitch.</em>
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mx-auto mt-6 max-w-md text-[0.95rem] leading-relaxed text-muted">
            Send one design and tell us what you&apos;re making. Let&apos;s
            start with your first qualified sample.
          </p>
          <a
            href={links.sampleMail}
            className="btn btn-primary mt-8 px-8 py-4 text-[0.88rem]"
          >
            Request Your Free Sample
            <ArrowUpRight className="size-4" />
          </a>
          <small className="mt-4 block text-[11px] text-muted">
            Opens your email app. Attach your artwork and requirements.
          </small>
        </Reveal>
      </div>
    </section>
  );
}
