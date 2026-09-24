import type { Metadata } from "next";
import PrivacyPolicyPageClient from "./PrivacyPolicyPageClient";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How HEROY Digital Solutions collects, uses, and protects your personal information.",
  alternates: {
    canonical: "https://heroy.dev/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyPageClient />;
}