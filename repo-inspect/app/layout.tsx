import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "M.D Studio | Award-Winning Digital Studio",
    template: "%s | M.D Studio",
  },
  description:
    "Award-winning digital studio crafting premium web experiences, SaaS products, and brand identities. We build intelligent digital products that drive growth.",
  keywords: [
    "web development",
    "SaaS",
    "UI/UX design",
    "brand identity",
    "digital studio",
    "Next.js",
    "React",
  ],
  authors: [{ name: "M.D Studio" }],
  creator: "M.D Studio",
  metadataBase: new URL("https://mdstudio.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mdstudio.vercel.app",
    siteName: "M.D Studio",
    title: "M.D Studio | Award-Winning Digital Studio",
    description:
      "Award-winning digital studio crafting premium web experiences, SaaS products, and brand identities.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "M.D Studio - Award-Winning Digital Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "M.D Studio | Award-Winning Digital Studio",
    description:
      "Award-winning digital studio crafting premium web experiences, SaaS products, and brand identities.",
    images: ["/og-image.jpg"],
    creator: "@mdstudio",
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
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-white">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
