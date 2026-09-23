import type { Metadata } from "next";
import IndustriesPageClient from "./IndustriesPageClient";

export const metadata: Metadata = {
  title: "Industries We Serve | HEROY Digital Solutions",
  description:
    "Explore how HEROY Digital Solutions creates tailored web development, digital marketing, SEO, AI, mobile, and technology solutions for healthcare, finance, real estate, education, NGOs, e-commerce, logistics, tourism, government, startups, and SaaS.",
  keywords: [
    "industries served by HEROY",
    "digital solutions Ethiopia",
    "web development Ethiopia",
    "digital marketing Ethiopia",
    "healthcare technology solutions",
    "finance technology solutions",
    "real estate digital solutions",
    "education technology solutions",
    "NGO digital solutions",
    "ecommerce development",
    "logistics technology solutions",
    "tourism digital solutions",
    "government technology solutions",
    "startup technology solutions",
    "SaaS development",
  ],
  openGraph: {
    title: "Industries We Serve | HEROY Digital Solutions",
    description:
      "Discover tailored digital, marketing, software, AI, and technology solutions for organizations across healthcare, finance, real estate, education, NGOs, e-commerce, logistics, tourism, government, startups, and SaaS.",
    url: "https://heroy.dev/industries",
    siteName: "HEROY Digital Solutions",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Industries We Serve | HEROY Digital Solutions",
    description:
      "Tailored digital, software, marketing, AI, and technology solutions for organizations across diverse industries.",
  },
  alternates: {
    canonical: "https://heroy.dev/industries",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function IndustriesPage() {
  return <IndustriesPageClient />;
}