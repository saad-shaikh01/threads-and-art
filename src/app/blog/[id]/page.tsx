import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/PageShell";
import { blogIds } from "@/lib/content";

export const dynamicParams = false;

export function generateStaticParams() {
  return blogIds.map((id) => ({ id: String(id) }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  return { title: `Blog Post ${id} | Threads & Arts` };
}

export default async function BlogPost({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  if (!blogIds.some((b) => String(b) === id)) notFound();
  return <PageShell title={`Blog Post ${id}`} eyebrow="Blog" />;
}
