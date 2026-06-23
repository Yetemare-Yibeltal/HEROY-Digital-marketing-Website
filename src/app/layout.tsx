import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import CustomCursor from "@/components/ui/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "HEROY | Digital Transformation Agency",
    template: "%s | HEROY",
  },
  description:
    "HEROY is a full-service digital transformation agency from Ethiopia — digital marketing, SEO, branding, web & mobile development, UI/UX, AI, and 3D interactive experiences.",
  keywords: [
    "digital marketing agency",
    "web development",
    "SEO services",
    "branding agency",
    "mobile app development",
    "UI/UX design",
    "3D interactive websites",
    "HEROY",
  ],
  openGraph: {
    title: "HEROY | Digital Transformation Agency",
    description:
      "We build digital systems that scale businesses — marketing, design, and full-stack development.",
    siteName: "HEROY",
    type: "website",
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
        className={`${inter.variable} ${spaceGrotesk.variable} font-body antialiased cursor-none`}
      >
        <CustomCursor />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}