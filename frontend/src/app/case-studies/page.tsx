import type { Metadata } from "next";
import CaseStudiesPageClient from "./CaseStudiesPageClient";

export const metadata: Metadata = {
  title: "Case Studies | HEROY Digital Solutions",
  description:
    "Explore how HEROY Digital Solutions approaches real digital challenges across web development, mobile apps, AI solutions, SEO, digital marketing, branding, and technology.",
  keywords: [
    "HEROY Digital Solutions case studies",
    "digital agency case studies",
    "web development case studies",
    "mobile app case studies",
    "AI solutions case studies",
    "SEO case studies",
    "digital marketing case studies",
    "branding case studies",
    "software development case studies",
    "digital agency Ethiopia",
  ],
  authors: [
    {
      name: "HEROY Digital Solutions",
      url: "https://heroy.dev",
    },
  ],
  creator: "HEROY Digital Solutions",
  publisher: "HEROY Digital Solutions",
  category: "Technology",
  openGraph: {
    title: "Case Studies | HEROY Digital Solutions",
    description:
      "Explore HEROY's approach to solving digital challenges across web development, mobile apps, AI, SEO, digital marketing, branding, and technology.",
    url: "https://heroy.dev/case-studies",
    siteName: "HEROY Digital Solutions",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies | HEROY Digital Solutions",
    description:
      "Explore HEROY's approach to solving digital challenges across web, mobile, AI, SEO, marketing, branding, and technology.",
    creator: "@heroy_digital_solution2026",
  },
  alternates: {
    canonical: "https://heroy.dev/case-studies",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function CaseStudiesPage() {
  return <CaseStudiesPageClient />;
}