import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Renders the light markup used by the page data files:
 *   **bold**  and  [label](href)
 * Internal hrefs use next/link, everything else is a plain anchor.
 */
export function RichText({ text }: { text: string }) {
  const out: ReactNode[] = [];
  const re = /\*\*([^*]+)\*\*|\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    if (m[1] !== undefined) {
      out.push(
        <strong key={i++} className="font-semibold text-ivory">
          {m[1]}
        </strong>,
      );
    } else {
      const href = m[3];
      const cls = "text-brand underline decoration-brand/40 underline-offset-4 transition-colors hover:decoration-brand";
      out.push(
        href.startsWith("/") ? (
          <Link key={i++} href={href} className={cls}>
            {m[2]}
          </Link>
        ) : (
          <a key={i++} href={href} className={cls}>
            {m[2]}
          </a>
        ),
      );
    }
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return <>{out}</>;
}

export const slugify = (s: string) =>
  s
    .replace(/\*\*/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
