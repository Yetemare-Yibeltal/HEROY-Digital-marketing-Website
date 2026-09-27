import type { Metadata } from "next";
import PrivacyPolicyPageClient from "./PrivacyPolicyPageClient";

export const metadata: Metadata = {
  title: "Privacy Policy | HEROY Digital Solutions",
  description:
    "Learn how HEROY Digital Solutions collects, uses, stores, and protects personal information when you use our website, contact our team, or engage our digital services.",
  keywords: [
    "HEROY Digital Solutions privacy policy",
    "privacy policy",
    "digital agency privacy policy",
    "website privacy policy",
    "personal information protection",
    "data privacy",
    "HEROY privacy",
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
    title: "Privacy Policy | HEROY Digital Solutions",
    description:
      "Learn how HEROY Digital Solutions collects, uses, stores, and protects personal information when you use our website or engage our digital services.",
    url: "https://heroy.dev/privacy-policy",
    siteName: "HEROY Digital Solutions",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy | HEROY Digital Solutions",
    description:
      "Learn how HEROY Digital Solutions handles personal information and protects your privacy.",
  },
  alternates: {
    canonical: "https://heroy.dev/privacy-policy",
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

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyPageClient />;
}