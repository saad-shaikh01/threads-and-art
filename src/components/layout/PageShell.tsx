import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

/** Placeholder layout for inner pages: header + title + footer. */
export function PageShell({ title, eyebrow }: { title: string; eyebrow?: string }) {
  return (
    <>
      <Header />
      <main className="section-x flex min-h-[60svh] flex-col justify-center py-24">
        {eyebrow && (
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.15em] text-brand">
            {eyebrow}
          </p>
        )}
        <h1 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-tight">{title}</h1>
      </main>
      <Footer />
    </>
  );
}
