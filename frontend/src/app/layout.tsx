import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
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

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://heroy.dev"),
  title: {
    default: "HEROY | Digital Transformation Agency",
    template: "%s | HEROY",
  },
  description:
    "HEROY is a full-service digital transformation agency from Ethiopia — digital marketing, SEO, branding, web and mobile development, UI/UX, AI, and 3D interactive experiences.",
  keywords: [
    "digital marketing agency",
    "web development Ethiopia",
    "SEO services",
    "branding agency",
    "mobile app development",
    "UI/UX design",
    "AI solutions",
    "HEROY",
  ],
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: "HEROY | Digital Transformation Agency",
    description:
      "We build digital systems that scale businesses — marketing, design, and full-stack development from Ethiopia to the world.",
    siteName: "HEROY",
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
    title: "HEROY | Digital Transformation Agency",
    description:
      "We build digital systems that scale businesses — marketing, design, and full-stack development from Ethiopia to the world.",
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
    url: "https://heroy.dev",
    logo: "https://heroy.dev/images/brand/heroy-logo.png",
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
    sameAs: [
      "https://facebook.com/heroydigitalsolution",
      "https://t.me/heroy_digital_solution2026",
    ],
  };

  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-body antialiased`}
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
          <Footer />
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