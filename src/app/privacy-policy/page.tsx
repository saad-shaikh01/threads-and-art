import type { Metadata } from "next";
import { LegalPage } from "@/components/page/LegalPage";

export const metadata: Metadata = { title: "Privacy Policy | Threads & Arts" };

export default function Page() {
  return <LegalPage slug="privacy-policy" title="Privacy Policy" lead="Get familiar with the data acquired by Threads and Arts." />;
}
