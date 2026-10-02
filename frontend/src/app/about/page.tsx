import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
  title: "About HEROY",
  description:
    "Learn about HEROY Digital Solutions, a digital transformation agency from Ethiopia providing digital marketing, SEO, branding, web and mobile development, AI, UI/UX, and technology solutions.",
  alternates: {
    canonical: "https://heroy.dev/about",
  },
  openGraph: {
    title: "About HEROY | Digital Transformation Agency",
    description:
      "Meet the team and learn how HEROY combines engineering, design, digital marketing, and technology to build practical digital solutions.",
    url: "https://heroy.dev/about",
    siteName: "HEROY Digital Solutions",
    type: "website",
    images: [
      {
        url: "/images/brand/hero-team-banner.png",
        width: 1280,
        height: 511,
        alt: "HEROY Digital Solutions team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About HEROY | Digital Transformation Agency",
    description:
      "Meet the team behind HEROY Digital Solutions and learn how we build digital products and growth systems.",
    images: ["/images/brand/hero-team-banner.png"],
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}