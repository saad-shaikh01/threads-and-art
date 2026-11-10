import type { Metadata } from "next";
import { LegalPage } from "@/components/page/LegalPage";

export const metadata: Metadata = { title: "Terms of Use | Threads & Arts" };

export default function Page() {
  return <LegalPage slug="terms-of-use" title="Terms of Use" lead="Get familiar with the terms and use of Threads and Arts." />;
}
