import { ScrollSequenceSection } from "@/components/scroll-sequence";

/**
 * Minimal host page: just proves the section pins, plays, and unpins
 * correctly inside normal page scroll. The blank spacers above/below are
 * scaffolding for this demo only — they are not part of the component.
 */
export default function Home() {
  return (
    <main>
      <div className="h-screen bg-neutral-950" />
      <ScrollSequenceSection />
      <div className="h-screen bg-neutral-950" />
    </main>
  );
}
