import type { Metadata } from "next";
import PricingPageClient from "./PricingPageClient";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent, fixed-scope pricing for websites, apps, and digital marketing. No hidden fees — see exactly what's included in every HEROY plan, plus à la carte add-ons.",
  openGraph: {
    title: "Pricing | HEROY Digital Solutions",
    description:
      "Transparent, fixed-scope pricing for websites, apps, and digital marketing. No hidden fees — see exactly what's included in every HEROY plan.",
    url: "https://heroy.dev/pricing",
    type: "website",
  },
  alternates: {
    canonical: "https://heroy.dev/pricing",
  },
};

export default function PricingPage() {
  return <PricingPageClient />;
}