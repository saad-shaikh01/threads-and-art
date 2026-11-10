"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState, type ReactNode } from "react";
import { ArrowUpRight, Check } from "@/components/ui/Icons";
import { formats, links, servicePages } from "@/lib/content";

const GARMENTS = ["Cap / hat", "Polo / shirt", "Jacket / hoodie", "Patch", "Towel", "Gloves", "Sleeve", "Bag", "Print (vector only)", "Other"];
const TURNAROUND = ["Standard (4–6h)", "Rush — ASAP", "No rush"];

interface Quote {
  name: string;
  email: string;
  service: string;
  garment: string;
  width: string;
  height: string;
  format: string;
  turnaround: string;
  notes: string;
}

const EMPTY: Quote = {
  name: "",
  email: "",
  service: servicePages[1].title,
  garment: GARMENTS[0],
  width: "",
  height: "",
  format: "DST",
  turnaround: TURNAROUND[0],
  notes: "",
};

const field =
  "w-full rounded-xl border border-line bg-deep px-4 py-3 text-sm text-ivory placeholder:text-muted/60 outline-none transition-colors focus:border-brand";

function Label({ n, children }: { n: string; children: ReactNode }) {
  return (
    <span className="mb-2 block font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
      <span className="text-brand">{n}</span> — {children}
    </span>
  );
}

function body(q: Quote) {
  const size = q.width || q.height ? `${q.width || "?"}" W × ${q.height || "?"}" H` : "Not sure yet";
  const details = [
    `Service: ${q.service}`,
    `Garment / product: ${q.garment}`,
    `Finished size: ${size}`,
    `Machine / file format: ${q.format}`,
    `Turnaround: ${q.turnaround}`,
    ...(q.notes ? [`Notes: ${q.notes}`] : []),
  ].join("\n");
  const sign = ["Thanks,", q.name, q.email].filter(Boolean).join("\n");
  return ["Hello Threads & Arts,", "I'd like a quote for the following:", details, "I've attached my artwork to this email.", sign].join("\n\n");
}

/** Quote form that opens the visitor's email app with a fully written request (no backend needed). */
export function QuoteBuilder() {
  const [q, setQ] = useState<Quote>(EMPTY);
  const [sent, setSent] = useState(false);
  const set = (k: keyof Quote) => (e: { target: { value: string } }) => setQ((s) => ({ ...s, [k]: e.target.value }));
  const subject = `Quote request — ${q.service}${q.name ? ` (${q.name})` : ""}`;
  const href = `mailto:${links.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body(q))}`;

  return (
    <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          window.location.href = href;
          setSent(true);
        }}
        className="surface-card rounded-[1.75rem] p-6 md:p-9"
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <label>
            <Label n="01">Your name</Label>
            <input className={field} value={q.name} onChange={set("name")} placeholder="Jane Doe" autoComplete="name" required />
          </label>
          <label>
            <Label n="02">Email (optional)</Label>
            <input className={field} type="email" value={q.email} onChange={set("email")} placeholder="you@shop.com" autoComplete="email" />
          </label>
          <label className="sm:col-span-2">
            <Label n="03">Service</Label>
            <select className={field} value={q.service} onChange={set("service")}>
              {servicePages.map((s) => (
                <option key={s.href}>{s.title}</option>
              ))}
            </select>
          </label>
          <label>
            <Label n="04">Garment / product</Label>
            <select className={field} value={q.garment} onChange={set("garment")}>
              {GARMENTS.map((g) => (
                <option key={g}>{g}</option>
              ))}
            </select>
          </label>
          <div>
            <Label n="05">Finished size (inches)</Label>
            <div className="flex items-center gap-2">
              <input className={field} inputMode="decimal" value={q.width} onChange={set("width")} placeholder="W" aria-label="Width in inches" />
              <span className="text-muted">×</span>
              <input className={field} inputMode="decimal" value={q.height} onChange={set("height")} placeholder="H" aria-label="Height in inches" />
            </div>
          </div>
          <label>
            <Label n="06">File format</Label>
            <select className={field} value={q.format} onChange={set("format")}>
              {[...formats, "Vector (AI / EPS / SVG / PDF)", "Not sure"].map((f) => (
                <option key={f}>{f}</option>
              ))}
            </select>
          </label>
          <fieldset>
            <Label n="07">Turnaround</Label>
            <div className="flex flex-wrap gap-2">
              {TURNAROUND.map((t) => (
                <button
                  key={t}
                  type="button"
                  aria-pressed={q.turnaround === t}
                  onClick={() => setQ((s) => ({ ...s, turnaround: t }))}
                  className={`rounded-full border px-3 py-2 text-xs transition-colors ${q.turnaround === t ? "border-brand bg-brand/15 text-ivory" : "border-line text-muted hover:text-ivory"}`}
                >
                  {t}
                </button>
              ))}
            </div>
          </fieldset>
          <label className="sm:col-span-2">
            <Label n="08">Anything else?</Label>
            <textarea className={`${field} min-h-28 resize-y`} value={q.notes} onChange={set("notes")} placeholder="Thread colors, placement, quantity, deadline…" />
          </label>
        </div>

        <div className="mt-7 flex flex-wrap items-center gap-4">
          <button type="submit" className="btn btn-primary">
            Write my quote email <ArrowUpRight className="size-4" />
          </button>
          <p className="text-xs text-muted">Opens your email app — just attach your artwork and hit send.</p>
        </div>
        <AnimatePresence>
          {sent && (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-4 flex items-center gap-2 text-sm text-ivory"
              role="status"
            >
              <Check className="size-4 text-brand" strokeWidth={3} />
              Email opened. Didn&apos;t work? Write to{" "}
              <a href={`mailto:${links.email}`} className="text-brand underline-offset-4 hover:underline">
                {links.email}
              </a>
            </motion.p>
          )}
        </AnimatePresence>
      </form>

      {/* Live preview of the email */}
      <div className="relative overflow-hidden rounded-[1.75rem] border border-line bg-[linear-gradient(160deg,rgb(84_26_36/0.55),var(--panel-deep))] p-6 md:p-8" aria-live="polite">
        <p className="eyebrow">Live preview</p>
        <div className="mt-5 space-y-2 border-b border-line/70 pb-4 font-mono text-[11px] text-muted">
          <p>
            <span className="text-brand">To:</span> {links.email}
          </p>
          <p className="break-words">
            <span className="text-brand">Subject:</span> <span className="text-ivory">{subject}</span>
          </p>
        </div>
        <pre className="mt-4 whitespace-pre-wrap font-mono text-[12px] leading-relaxed text-ivory/85">{body(q)}</pre>
        <span className="mt-1 inline-block h-4 w-2 animate-pulse bg-brand align-middle" aria-hidden />
      </div>
    </div>
  );
}
