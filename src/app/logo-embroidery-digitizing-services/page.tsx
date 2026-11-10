import type { Metadata } from "next";
import { ServicePage } from "@/components/page/ServicePage";
import data from "@/lib/pages/services.json";

const page = data["logo-embroidery-digitizing-services"];

export const metadata: Metadata = {
  title: { absolute: page.title },
  description: page.description,
};

export default function Page() {
  return <ServicePage slug="logo-embroidery-digitizing-services" />;
}
