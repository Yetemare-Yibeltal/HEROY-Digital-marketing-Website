import type { Metadata } from "next";
import TermsPageClient from "./TermsPageClient";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and Conditions governing use of the HEROY Digital Solutions website and engagement of our services.",
  alternates: {
    canonical: "https://heroy.dev/terms",
  },
};

export default function TermsPage() {
  return <TermsPageClient />;
}