import type { Metadata } from "next";
import TestimonialsPageClient from "./TestimonialsPageClient";

export const metadata: Metadata = {
  title: "Client Testimonials & Experiences | HEROY Digital Solutions",

  description:
    "Explore client feedback, project experiences, and perspectives on working with HEROY Digital Solutions across web development, digital marketing, design, mobile apps, AI, and custom digital solutions.",

  keywords: [
    "HEROY Digital Solutions testimonials",
    "HEROY client testimonials",
    "digital agency testimonials",
    "digital marketing agency testimonials",
    "web development client feedback",
    "website development testimonials",
    "software development client experience",
    "mobile app development testimonials",
    "digital transformation partner",
    "web design agency reviews",
    "digital marketing agency reviews",
    "technology partner",
    "custom software development",
    "digital solutions agency",
    "Ethiopian digital agency",
    "African technology agency",
    "HEROY Digital Solutions",
  ],

  authors: [
    {
      name: "HEROY Digital Solutions",
    },
  ],

  creator: "HEROY Digital Solutions",
  publisher: "HEROY Digital Solutions",
  category: "Digital Services & Technology",

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
    title: "Client Testimonials & Experiences | HEROY Digital Solutions",
    description:
      "Explore client feedback and project experiences with HEROY across digital marketing, web development, design, mobile applications, AI, and custom digital solutions.",
    url: "https://heroy.dev/testimonials",
    siteName: "HEROY Digital Solutions",
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Client Testimonials & Experiences | HEROY Digital Solutions",
    description:
      "Explore client feedback and project experiences with HEROY Digital Solutions across technology, marketing, design, and digital product development.",
  },

  alternates: {
    canonical: "https://heroy.dev/testimonials",
  },
};

export default function TestimonialsPage() {
  return <TestimonialsPageClient />;
}
