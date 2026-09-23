import type { Metadata } from "next";
import PortfolioPageClient from "./PortfolioPageClient";

export const metadata: Metadata = {
  title: "Portfolio | HEROY Digital Solutions",
  description:
    "Explore HEROY Digital Solutions portfolio across web development, mobile applications, UI/UX, digital marketing, SEO, branding, AI solutions, e-commerce, SaaS, and interactive digital experiences.",
  keywords: [
    "HEROY Digital Solutions portfolio",
    "digital agency portfolio",
    "web development portfolio",
    "web design portfolio",
    "mobile app development portfolio",
    "digital marketing portfolio",
    "SEO portfolio",
    "UI UX design portfolio",
    "AI solutions portfolio",
    "ecommerce development portfolio",
    "SaaS development portfolio",
    "branding portfolio",
    "3D web experiences",
    "software development Ethiopia",
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
    title: "Portfolio | HEROY Digital Solutions",
    description:
      "Explore digital projects and solution categories from HEROY Digital Solutions across websites, applications, branding, SEO, digital marketing, AI, SaaS, e-commerce, and interactive experiences.",
    url: "https://heroy.dev/portfolio",
    siteName: "HEROY Digital Solutions",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | HEROY Digital Solutions",
    description:
      "Explore HEROY Digital Solutions projects across web, mobile, UI/UX, SEO, digital marketing, AI, SaaS, e-commerce, branding, and interactive digital experiences.",
    creator: "@heroy_digital_solution2026",
  },
  alternates: {
    canonical: "https://heroy.dev/portfolio",
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

export default function PortfolioPage() {
  return <PortfolioPageClient />;
}