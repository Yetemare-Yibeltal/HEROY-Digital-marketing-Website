import type { Metadata } from "next";
import TestimonialsPageClient from "./TestimonialsPageClient";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "See the standard of work and communication HEROY commits to on every project, and what founding clients can expect working with a hands-on Ethiopian digital studio.",
  openGraph: {
    title: "Testimonials | HEROY Digital Solutions",
    description:
      "See the standard of work and communication HEROY commits to on every project, and what founding clients can expect.",
    url: "https://heroy.dev/testimonials",
    type: "website",
  },
  alternates: {
    canonical: "https://heroy.dev/testimonials",
  },
};

export default function TestimonialsPage() {
  return <TestimonialsPageClient />;
}