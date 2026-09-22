import type { Metadata } from "next";
import CareersPageClient from "./CareersPageClient";

export const metadata: Metadata = {
  title: "Careers | HEROY Digital Solutions",
  description:
    "Explore career opportunities at HEROY Digital Solutions across software engineering, web development, design, digital marketing, and creative production. Discover our working culture, hiring process, and how to apply.",
  keywords: [
    "HEROY Digital Solutions careers",
    "digital agency careers",
    "software engineering jobs",
    "web development jobs",
    "digital marketing jobs",
    "UI UX design jobs",
    "creative jobs",
    "Ethiopia technology careers",
    "remote digital jobs",
  ],
  openGraph: {
    title: "Careers | HEROY Digital Solutions",
    description:
      "Explore opportunities to build digital products, experiences, and growth solutions with HEROY Digital Solutions.",
    url: "https://heroy.dev/careers",
    siteName: "HEROY Digital Solutions",
    type: "website",
    images: [
      {
        url: "https://heroy.dev/og/careers.jpg",
        width: 1200,
        height: 630,
        alt: "Careers at HEROY Digital Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers | HEROY Digital Solutions",
    description:
      "Explore opportunities in engineering, design, digital marketing, and creative production at HEROY Digital Solutions.",
    images: ["https://heroy.dev/og/careers.jpg"],
  },
  alternates: {
    canonical: "https://heroy.dev/careers",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CareersPage() {
  return <CareersPageClient />;
}