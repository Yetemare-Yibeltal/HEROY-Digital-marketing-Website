import type { Metadata } from "next";
import PricingPageClient from "./PricingPageClient";

export const metadata: Metadata = {
  title: "Pricing | Transparent Digital Solutions & Development Plans",

  description:
    "Explore HEROY Digital Solutions pricing for websites, web applications, mobile apps, digital marketing, and custom digital products. Compare transparent project options, included services, and available add-ons with no hidden fees.",

  keywords: [
    "HEROY Digital Solutions pricing",
    "digital agency pricing",
    "web development pricing",
    "website development cost",
    "web application pricing",
    "mobile app development pricing",
    "digital marketing pricing",
    "SEO pricing",
    "UI UX design pricing",
    "custom software pricing",
    "SaaS development pricing",
    "e-commerce development pricing",
    "AI solutions pricing",
    "custom digital solutions",
    "fixed scope development",
    "software development services",
  ],

  authors: [
    {
      name: "HEROY Digital Solutions",
    },
  ],

  creator: "HEROY Digital Solutions",
  publisher: "HEROY Digital Solutions",
  category: "Technology & Digital Services",

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

  openGraph: {
    title: "Pricing | HEROY Digital Solutions",
    description:
      "Explore transparent pricing for websites, web applications, mobile apps, digital marketing, and custom digital solutions from HEROY Digital Solutions.",
    url: "https://heroy.dev/pricing",
    siteName: "HEROY Digital Solutions",
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Pricing | HEROY Digital Solutions",
    description:
      "Explore transparent pricing for digital products, websites, mobile apps, marketing, and custom software solutions.",
  },

  alternates: {
    canonical: "https://heroy.dev/pricing",
  },
};

export default function PricingPage() {
  return <PricingPageClient />;
}
