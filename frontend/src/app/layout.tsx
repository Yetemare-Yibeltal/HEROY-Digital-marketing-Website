import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import AIChatWidget from "@/components/ui/AIChatWidget";
import AnimatedBackground from "@/components/ui/AnimatedBackground";

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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://heroy.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "HEROY Digital Solutions | Digital Transformation Agency",
    template: "%s | HEROY Digital Solutions",
  },
  description:
    "HEROY Digital Solutions is a full-service digital transformation agency from Ethiopia — digital marketing, SEO, branding, web and mobile development, UI/UX, AI, and 3D interactive experiences.",
  keywords: [
    "digital marketing agency",
    "web development Ethiopia",
    "SEO services",
    "branding agency",
    "mobile app development",
    "UI/UX design",
    "AI solutions",
    "HEROY Digital Solutions",
  ],
  icons: {
    icon: [
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    title: "HEROY Digital Solutions | Digital Transformation Agency",
    description:
      "We build digital systems that scale businesses — marketing, design, and full-stack development from Ethiopia to the world.",
    siteName: "HEROY Digital Solutions",
    type: "website",
    images: [{ url: "/images/hero-showcase.png", width: 1983, height: 793 }],
  },
};

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
      </body>
    </html>
  );
}