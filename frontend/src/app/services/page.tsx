import type { Metadata } from "next";
import ServicesPageClient from "./ServicesPageClient";

export { services } from "./servicesData";
export type { Service } from "./servicesData";

export const metadata: Metadata = {
  title: "Digital Services | Web, Mobile, AI, Marketing & Design",
  description:
    "Explore HEROY Digital Solutions services across web development, mobile apps, UI/UX design, digital marketing, SEO, AI solutions, e-commerce, SaaS, cloud, cybersecurity, creative production, and interactive 3D experiences.",

  keywords: [
    "HEROY Digital Solutions",
    "digital agency",
    "web development",
    "full stack development",
    "Next.js development",
    "mobile app development",
    "Android development",
    "UI UX design",
    "digital marketing",
    "SEO services",
    "social media marketing",
    "e-commerce development",
    "SaaS development",
    "AI solutions",
    "cloud solutions",
    "cybersecurity",
    "ERP CRM systems",
    "3D interactive experiences",
    "IT consulting",
    "content creation",
    "graphic design",
    "video editing",
  ],

  authors: [
    {
      name: "HEROY Digital Solutions",
    },
  ],

  creator: "HEROY Digital Solutions",
  publisher: "HEROY Digital Solutions",
  category: "Technology & Digital Services",

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
    title: "Digital Services | HEROY Digital Solutions",
    description:
      "Explore HEROY's digital services across software engineering, mobile development, AI, digital marketing, SEO, UI/UX, creative production, cloud, cybersecurity, e-commerce, and interactive experiences.",
    url: "https://heroy.dev/services",
    siteName: "HEROY Digital Solutions",
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Digital Services | HEROY Digital Solutions",
    description:
      "Explore HEROY's services for building modern digital products, growing brands, automating workflows, and creating engaging digital experiences.",
  },

  alternates: {
    canonical: "https://heroy.dev/services",
  },
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
