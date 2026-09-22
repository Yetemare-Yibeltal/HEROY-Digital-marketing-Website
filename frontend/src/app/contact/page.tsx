import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact | HEROY Digital Solutions",
  description:
    "Contact HEROY Digital Solutions to discuss web development, digital marketing, SEO, AI solutions, branding, mobile apps, or a custom digital project.",
  keywords: [
    "contact HEROY Digital Solutions",
    "digital agency Ethiopia",
    "web development Ethiopia",
    "digital marketing Ethiopia",
    "SEO services Ethiopia",
    "AI solutions Ethiopia",
    "web development consultation",
    "digital agency contact",
  ],
  openGraph: {
    title: "Contact | HEROY Digital Solutions",
    description:
      "Start a conversation with HEROY Digital Solutions about your website, digital marketing, SEO, AI, branding, mobile app, or custom technology project.",
    url: "https://heroy.dev/contact",
    siteName: "HEROY Digital Solutions",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | HEROY Digital Solutions",
    description:
      "Start a conversation with HEROY Digital Solutions about your next digital project.",
  },
  alternates: {
    canonical: "https://heroy.dev/contact",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}