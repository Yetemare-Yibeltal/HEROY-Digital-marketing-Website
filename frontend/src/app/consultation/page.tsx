import type { Metadata } from "next";
import ConsultationPageClient from "./ConsultationPageClient";

export const metadata: Metadata = {
  title: "Book a Free Consultation | HEROY Digital Solutions",
  description:
    "Book a free 30-minute consultation with HEROY Digital Solutions to discuss your project, clarify requirements, explore technology options, and plan a realistic delivery approach.",
  keywords: [
    "HEROY Digital Solutions consultation",
    "free digital agency consultation",
    "web development consultation",
    "digital marketing consultation",
    "SEO consultation",
    "AI solutions consultation",
    "software development consultation",
    "technology consultation",
    "digital agency Ethiopia",
    "web development Ethiopia",
  ],
  authors: [
    {
      name: "HEROY Digital Solutions",
      url: "https://heroy.dev",
    },
  ],
  creator: "HEROY Digital Solutions",
  publisher: "HEROY Digital Solutions",
  category: "Business",
  openGraph: {
    title: "Book a Free Consultation | HEROY Digital Solutions",
    description:
      "Book a free 30-minute consultation with HEROY Digital Solutions to discuss your project, requirements, technology options, and delivery approach.",
    url: "https://heroy.dev/consultation",
    siteName: "HEROY Digital Solutions",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a Free Consultation | HEROY Digital Solutions",
    description:
      "Book a free 30-minute consultation with HEROY Digital Solutions to discuss your next digital project.",
  },
  alternates: {
    canonical: "https://heroy.dev/consultation",
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

export default function ConsultationPage() {
  return <ConsultationPageClient />;
}