import type { Metadata } from "next";
import FAQPageClient from "./FAQPageClient";

export const metadata: Metadata = {
  title: "FAQ | HEROY Digital Solutions",
  description:
    "Find answers to common questions about HEROY Digital Solutions, including services, pricing, project process, technology, communication, timelines, and ongoing support.",
  keywords: [
    "HEROY Digital Solutions FAQ",
    "digital agency FAQ",
    "web development FAQ",
    "digital marketing FAQ",
    "SEO services FAQ",
    "AI solutions FAQ",
    "website development pricing",
    "digital agency process",
  ],
  openGraph: {
    title: "FAQ | HEROY Digital Solutions",
    description:
      "Answers to common questions about HEROY Digital Solutions services, pricing, project process, technology, communication, and support.",
    url: "https://heroy.dev/faq",
    siteName: "HEROY Digital Solutions",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ | HEROY Digital Solutions",
    description:
      "Answers to common questions about HEROY Digital Solutions services, pricing, process, technology, and support.",
  },
  alternates: {
    canonical: "https://heroy.dev/faq",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function FAQPage() {
  return <FAQPageClient />;
}