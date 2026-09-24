import type { Metadata } from "next";
import TermsPageClient from "./TermsPageClient";

export const metadata: Metadata = {
  title: "Terms & Conditions | HEROY Digital Solutions",
  description:
    "Review the Terms & Conditions governing use of the HEROY Digital Solutions website, digital services, project engagements, communications, and related online resources.",
  keywords: [
    "HEROY Digital Solutions terms",
    "terms and conditions",
    "digital agency terms",
    "website terms and conditions",
    "service terms",
    "HEROY terms of service",
  ],
  authors: [
    {
      name: "HEROY Digital Solutions",
      url: "https://heroy.dev",
    },
  ],
  creator: "HEROY Digital Solutions",
  publisher: "HEROY Digital Solutions",
  category: "Legal",
  openGraph: {
    title: "Terms & Conditions | HEROY Digital Solutions",
    description:
      "Review the Terms & Conditions governing use of the HEROY Digital Solutions website and engagement of our digital services.",
    url: "https://heroy.dev/terms",
    siteName: "HEROY Digital Solutions",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Terms & Conditions | HEROY Digital Solutions",
    description:
      "Review the Terms & Conditions governing use of the HEROY Digital Solutions website and digital services.",
  },
  alternates: {
    canonical: "https://heroy.dev/terms",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
    },
  },
};

export default function TermsPage() {
  return <TermsPageClient />;
}