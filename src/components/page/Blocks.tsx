import Link from "next/link";
import { ArrowUpRight } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTop } from "@/components/ui/SectionHeading";
import { accountPages, servicePages, testimonials } from "@/lib/content";

/** Sticky sidebar: "On this page" + the $10 offer card. */
export function Sidebar({ toc, offer = true }: { toc: { id: string; label: string }[]; offer?: boolean }) {
  return (
    <aside className="hidden lg:block">
      <div className="sticky top-[calc(var(--header-h)+1.5rem)] space-y-5">
        {toc.length > 1 && (
          <nav aria-label="On this page" className="surface-card p-5">
            <p className="eyebrow mb-3">On this page</p>
            <ul className="space-y-0.5 text-[13px]">
              {toc.map((t) => (
                <li key={t.id}>
                  <a href={`#${t.id}`} className="block rounded py-1.5 text-muted transition-colors hover:text-brand">
                    {t.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
        {offer && (
        <div className="relative overflow-hidden rounded-(--radius) border border-brand/50 p-5" style={{ background: "linear-gradient(160deg, rgba(84,26,36,0.7), var(--panel-deep))" }}>
          <p className="eyebrow mb-2">Startup offer</p>
          <p className="heading-display text-3xl">
            <span className="text-accent">$10</span> per design
          </p>
          <p className="mt-2 text-xs leading-relaxed text-muted">4–6 hour turnaround, free minor revisions.</p>
          <a href={accountPages.order} className="btn btn-primary btn-sm mt-4 w-full">
            Order Now <ArrowUpRight className="size-3.5" />
          </a>
        </div>
        )}
      </div>
    </aside>
  );
}

export function Testimonials() {
  return (
    <section className="section-x section-y border-t border-line">
      <SectionTop eyebrow="Feedbacks" title={<>What our <em className="text-accent">customers</em> say</>} />
      <div className="grid gap-5 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal key={t.author} delay={i * 0.08} className="surface-card flex flex-col p-6">
            <span aria-hidden className="font-display text-5xl leading-none text-brand">“</span>
            <p className="mt-1 flex-1 text-[0.95rem] leading-relaxed text-ivory/90">{t.quote}</p>
            <p className="mt-5 border-t border-line pt-4 text-xs font-semibold uppercase tracking-[0.12em] text-muted">{t.author}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function RelatedServices({ current }: { current?: string }) {
  const items = servicePages.filter((s) => s.href !== current);
  return (
    <section className="section-x section-y border-t border-line bg-deep">
      <SectionTop eyebrow="More services" title={<>Explore <em className="text-accent">every stitch</em></>} />
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((s, i) => (
          <Reveal key={s.href} delay={(i % 4) * 0.05}>
            <Link href={s.href} className="surface-card group flex h-full items-center justify-between gap-3 p-5 text-sm">
              <span>
                <span className="eyebrow mb-1 block text-[10px]">{String(i + 1).padStart(2, "0")}</span>
                {s.label}
              </span>
              <ArrowUpRight className="size-4 shrink-0 text-muted transition-colors group-hover:text-brand" />
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function CtaBand({
  title = <>Ready to bring your design to <em className="text-accent">life?</em></>,
  text = "Sign up now and get your first design for $10.",
  primary = { label: "Order Now", href: accountPages.order },
  secondary = { label: "Contact Us", href: "/contactus" },
}: {
  title?: React.ReactNode;
  text?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  const ext = (h: string) => !h.startsWith("/");
  return (
    <section className="section-x relative overflow-hidden border-t border-line py-20 text-center md:py-24">
      <div aria-hidden className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 120%, rgba(84,26,36,0.55), transparent 60%), var(--panel-deep)" }} />
      <Reveal className="relative mx-auto max-w-2xl">
        <h2 className="heading-2 text-[clamp(2rem,1.3rem+3vw,3.3rem)]">{title}</h2>
        <p className="mx-auto mt-5 max-w-md text-[0.95rem] text-muted">{text}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {[primary, secondary].map((b, i) =>
            ext(b.href) ? (
              <a key={b.label} href={b.href} className={`btn ${i === 0 ? "btn-primary" : "btn-ghost"}`}>
                {b.label} {i === 0 && <ArrowUpRight className="size-4" />}
              </a>
            ) : (
              <Link key={b.label} href={b.href} className={`btn ${i === 0 ? "btn-primary" : "btn-ghost"}`}>
                {b.label}
              </Link>
            ),
          )}
        </div>
      </Reveal>
    </section>
  );
}
