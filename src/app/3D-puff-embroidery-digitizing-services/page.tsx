import type { Metadata } from "next";
import { ServicePage } from "@/components/page/ServicePage";
import data from "@/lib/pages/services.json";

const page = data["3D-puff-embroidery-digitizing-services"];

export const metadata: Metadata = {
  title: { absolute: page.title },
  description: page.description,
};

export default function Page() {
  return <ServicePage slug="3D-puff-embroidery-digitizing-services" />;
}
