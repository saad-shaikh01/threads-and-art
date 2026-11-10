import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";

export const metadata: Metadata = { title: "Blog | Threads & Arts" };

export default function Page() {
  return <PageShell title="Blog" />;
}
