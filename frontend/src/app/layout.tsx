import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import AIChatWidget from "@/components/ui/AIChatWidget";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import AnalyticsAndConsent from "@/components/ui/AnalyticsAndConsent";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://heroy.dev"),

  title: {
    default: "HEROY | Digital Transformation & Marketing Agency",
    template: "%s | HEROY",
  },

  description:
    "HEROY is an international digital transformation agency from Ethiopia helping businesses build, market, and scale through digital marketing, SEO, branding, web and mobile development, UI/UX, AI, and 3D interactive experiences.",

  keywords: [
    "digital marketing agency",
    "international digital marketing agency",
    "digital transformation agency",
    "digital agency Ethiopia",
    "digital marketing Ethiopia",
    "web development Ethiopia",
    "international web development agency",
    "SEO agency",
    "international SEO services",
    "search engine optimization",
    "technical SEO",
    "local SEO",
    "content marketing",
    "social media marketing",
    "social media management",
    "performance marketing",
    "paid advertising",
    "Google Ads",
    "Meta Ads",
    "brand strategy",
    "branding agency",
    "brand identity design",
    "UI/UX design",
    "web design",
    "website development",
    "Next.js development",
    "React development",
    "full-stack development",
    "mobile app development",
    "Android app development",
    "React Native development",
    "AI solutions",
    "AI development",
    "business automation",
    "digital products",
    "3D experiences",
    "interactive experiences",
    "technology consulting",
    "digital strategy",
    "HEROY",
    "HEROY Digital Solutions",
  ],

  authors: [
    {
      name: "HEROY Digital Solutions",
      url: "https://heroy.dev",
    },
  ],

  creator: "HEROY Digital Solutions",
  publisher: "HEROY Digital Solutions",

  applicationName: "HEROY Digital Solutions",

  category: "technology",

  alternates: {
    canonical: "https://heroy.dev",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  manifest: "/manifest.webmanifest",

  openGraph: {
    title: "HEROY | Digital Transformation & Marketing Agency",
    description:
      "We build digital systems that scale businesses — digital marketing, strategy, design, and full-stack technology from Ethiopia to the world.",
    url: "https://heroy.dev",
    siteName: "HEROY Digital Solutions",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/brand/hero-team-banner.png",
        width: 1280,
        height: 511,
        alt: "The HEROY Digital Solutions team",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "HEROY | Digital Transformation & Marketing Agency",
    description:
      "Digital marketing, SEO, branding, web and mobile development, AI, UI/UX, and 3D experiences from Ethiopia to the world.",
    images: ["/images/brand/hero-team-banner.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",

    name: "HEROY Digital Solutions",
    alternateName: "HEROY",
    url: "https://heroy.dev",

    logo: "https://heroy.dev/images/brand/heroy-logo.png",

    image: "https://heroy.dev/images/brand/hero-team-banner.png",

    description:
      "HEROY is a full-service digital transformation agency from Ethiopia — digital marketing, SEO, branding, web and mobile development, UI/UX, AI, and 3D interactive experiences.",

    email: "Heroydigitalsolution@gmail.com",
    telephone: "+251923853252",

    foundingDate: "2025",

    address: {
      "@type": "PostalAddress",
      addressLocality: "Injibara",
      addressRegion: "Amhara",
      addressCountry: "ET",
    },

    areaServed: [
      {
        "@type": "Country",
        name: "Ethiopia",
      },
      {
        "@type": "Place",
        name: "Africa",
      },
      {
        "@type": "Place",
        name: "Europe",
      },
      {
        "@type": "Place",
        name: "Middle East",
      },
      {
        "@type": "Place",
        name: "North America",
      },
      {
        "@type": "Place",
        name: "Asia",
      },
      {
        "@type": "Place",
        name: "Worldwide",
      },
    ],

    knowsAbout: [
      "Digital Marketing",
      "Search Engine Optimization",
      "Content Marketing",
      "Social Media Marketing",
      "Brand Strategy",
      "Brand Identity",
      "Web Development",
      "Mobile App Development",
      "UI/UX Design",
      "Artificial Intelligence",
      "Business Automation",
      "3D Interactive Experiences",
      "Digital Transformation",
      "Technology Consulting",
    ],

    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Digital Marketing",
          description:
            "Digital marketing strategies designed to improve visibility, engagement, lead generation, and online growth.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Search Engine Optimization",
          description:
            "Technical, on-page, content, and strategic SEO services designed to improve organic search visibility.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Web Development",
          description:
            "Modern responsive websites and full-stack digital platforms built for performance, scalability, and business growth.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mobile App Development",
          description:
            "Modern mobile applications designed and developed for Android and cross-platform experiences.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Solutions",
          description:
            "AI-powered solutions, automation, integrations, and intelligent digital experiences for businesses.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "3D Interactive Experiences",
          description:
            "Interactive 3D and immersive digital experiences for brands, products, campaigns, and modern websites.",
        },
      },
    ],

    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: "+251923853252",
      email: "Heroydigitalsolution@gmail.com",
      availableLanguage: ["English", "Amharic"],
    },

    sameAs: [
      "https://facebook.com/heroydigitalsolution",
      "https://t.me/heroy_digital_solution2026",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",

    name: "HEROY Digital Solutions",
    alternateName: "HEROY",

    url: "https://heroy.dev",

    description:
      "HEROY Digital Solutions — digital marketing, digital transformation, web and mobile development, SEO, branding, AI, UI/UX, and 3D experiences.",

    publisher: {
      "@type": "Organization",
      name: "HEROY Digital Solutions",
      url: "https://heroy.dev",
    },

    inLanguage: "en",
  };

  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>

      <body
        className={`${inter.variable} $.variable} font-body antialiased`}
        style={{ background: "#080810" }}
      >
        {/* Animated gradient top bar */}
        <div className="gradient-bar" />

        {/* Animated floating dots and squares background */}
        <AnimatedBackground />

        {/* Custom cursor */}
        <CustomCursor />

        {/* Main layout */}
        <div className="relative z-10">
          <Header />

          <main>{children}</main>

          <Footer/ >
        </div>

        {/* AI Chat Widget */}
        <AIChatWidget />

        {/* Floating WhatsApp button */}
        <WhatsAppButton />

        {/* Analytics (consent-gated) and cookie consent banner */}
        <AnalyticsAndConsent />
      </body>
    </html>
  );
}