import type { Metadata } from "next";
import IndustriesPageClient from "./IndustriesPageClient";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "HEROY builds tailored digital solutions across healthcare, finance, real estate, education, NGOs, e-commerce, logistics, tourism, government, startups, and SaaS.",
  openGraph: {
    title: "Industries We Serve | HEROY Digital Solutions",
    description:
      "HEROY builds tailored digital solutions across healthcare, finance, real estate, education, NGOs, e-commerce, and more.",
    url: "https://heroy.dev/industries",
    type: "website",
  },
  alternates: {
    canonical: "https://heroy.dev/industries",
  },
};

export default function IndustriesPage() {
  return <IndustriesPageClient />;
}