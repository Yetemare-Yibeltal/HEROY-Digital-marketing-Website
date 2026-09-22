import type { Metadata } from "next";
import ServicesPageClient from "./ServicesPageClient";

export { services } from "./servicesData";
export type { Service } from "./servicesData";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore HEROY's full range of digital services — marketing, SEO, branding, web and mobile development, AI, and creative production.",
  openGraph: {
    title: "Services | HEROY Digital Solutions",
    description:
      "Explore HEROY's full range of digital services — marketing, SEO, branding, web and mobile development, AI, and creative production.",
    url: "https://heroy.dev/services",
    type: "website",
  },
  alternates: {
    canonical: "https://heroy.dev/services",
  },
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}