import type { Metadata } from "next";
import ConsultationPageClient from "./ConsultationPageClient";

export const metadata: Metadata = {
  title: "Book a Free Consultation",
  description:
    "Book a free 30-minute consultation with the HEROY team to discuss your project, get a realistic timeline, and understand the right technology stack for your needs.",
  openGraph: {
    title: "Book a Free Consultation | HEROY Digital Solutions",
    description:
      "Book a free 30-minute consultation with the HEROY team to discuss your project.",
    url: "https://heroy.dev/consultation",
    type: "website",
  },
  alternates: {
    canonical: "https://heroy.dev/consultation",
  },
};

export default function ConsultationPage() {
  return <ConsultationPageClient />;
}