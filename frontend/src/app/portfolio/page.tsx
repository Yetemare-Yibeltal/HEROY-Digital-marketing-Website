import type { Metadata } from "next";
import PortfolioPageClient from "./PortfolioPageClient";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "See the types of projects HEROY works on across web, mobile, branding, SEO, AI, and 3D — with real case studies published as projects are completed.",
  openGraph: {
    title: "Portfolio | HEROY Digital Solutions",
    description:
      "See the types of projects HEROY works on across web, mobile, branding, SEO, AI, and 3D.",
    url: "https://heroy.dev/portfolio",
    type: "website",
  },
  alternates: {
    canonical: "https://heroy.dev/portfolio",
  },
};

export default function PortfolioPage() {
  return <PortfolioPageClient />;
}