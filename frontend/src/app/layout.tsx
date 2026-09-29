import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import AIChatWidget from "@/components/ui/AIChatWidget";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

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

/**
 * Global viewport configuration
 * Helps maintain a polished responsive experience
 * across desktop, tablet, and mobile devices.
 */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#080810",
  colorScheme: "dark",
};

/**
 * Global SEO and social metadata
 */
export const metadata: Metadata = {
  title: {
    default: "HEROY | Digital Transformation Agency",
    template: "%s | HEROY",
  },

  description:
    "HEROY is a full-service digital transformation agency from Ethiopia — digital marketing, SEO, branding, web and mobile development, UI/UX, AI, and 3D interactive experiences.",

  keywords: [
    "HEROY",
    "HEROY Digital Solutions",
    "digital transformation agency",
    "digital marketing agency",
    "digital marketing Ethiopia",
    "web development Ethiopia",
    "full stack development",
    "software development Ethiopia",
    "SEO services",
    "SEO agency Ethiopia",
    "branding agency",
    "mobile app development",
    "UI/UX design",
    "AI solutions",
    "artificial intelligence solutions",
    "3D interactive experiences",
    "digital experiences",
    "technology solutions",
  ],

  applicationName: "HEROY Digital Solutions",

  authors: [
    {
      name: "HEROY Digital Solutions",
    },
  ],

  creator: "HEROY Digital Solutions",
  publisher: "HEROY Digital Solutions",

  category: "technology",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: "HEROY | Digital Transformation Agency",
    description:
      "We build digital systems that scale businesses — marketing, design, technology, AI, and full-stack development from Ethiopia to the world.",
    siteName: "HEROY Digital Solutions",
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "HEROY | Digital Transformation Agency",
    description:
      "Digital marketing, SEO, branding, web development, mobile applications, AI, UI/UX, and immersive digital experiences.",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

/**
 * Root application layout
 *
 * This component provides the global visual shell and
 * interactive experience shared across the entire website.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-body antialiased`}
        style={{ background: "#080810" }}
      >
        {/* =========================================================
            ACCESSIBILITY
            ========================================================= */}

        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[9999] focus:rounded-lg focus:bg-primary focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white focus:shadow-xl"
        >
          Skip to main content
        </a>

        {/* =========================================================
            GLOBAL VISUAL ATMOSPHERE
            ========================================================= */}

        {/* Animated gradient top bar */}
        <div
          className="gradient-bar"
          aria-hidden="true"
        />

        {/* Animated floating dots and squares background */}
        <AnimatedBackground />

        {/* =========================================================
            GLOBAL INTERACTION
            ========================================================= */}

        {/* Custom cursor */}
        <CustomCursor />

        {/* =========================================================
            MAIN WEBSITE SHELL
            ========================================================= */}

        <div className="relative z-10 min-h-screen">
          {/* Global navigation */}
          <Header />

          {/* Main page content */}
          <main id="main-content">{children}</main>

          {/* Global footer */}
          <Footer />
        </div>

        {/* =========================================================
            GLOBAL ASSISTANCE & CONVERSION
            ========================================================= */}

        {/* AI-powered website assistant */}
        <AIChatWidget />

        {/* Floating WhatsApp contact button */}
        <WhatsAppButton />
      </body>
    </html>
  );
}