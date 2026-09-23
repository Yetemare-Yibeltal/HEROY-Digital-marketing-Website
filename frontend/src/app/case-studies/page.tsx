import type { Metadata } from "next";
import CaseStudiesPageClient from "./CaseStudiesPageClient";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Common challenges businesses bring HEROY and exactly how we approach solving them — across web development, mobile apps, AI, SEO, and more.",
  openGraph: {
    title: "Case Studies | HEROY Digital Solutions",
    description:
      "Common challenges businesses bring HEROY and exactly how we approach solving them.",
    url: "https://heroy.dev/case-studies",
    type: "website",
  },
  alternates: {
    canonical: "https://heroy.dev/case-studies",
  },
};

export default function CaseStudiesPage() {
  return <CaseStudiesPageClient />;
}