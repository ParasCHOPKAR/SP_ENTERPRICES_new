import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "S. P. Enterprises | Premier Dealer & Supplier",
  description: "S. P. Enterprises is a trusted dealer & supplier for premium electrical components, SSRs, PID controllers, filters, sensors, drives, and laboratory equipment based in Pune, India.",
  keywords: ["S. P. Enterprises", "Electrical Components", "Pune", "SSR", "PID Controllers", "Filters", "Sensors", "Lugs", "Thyristors"],
  authors: [{ name: "Pradeep Kulkarni" }],
  creator: "S. P. Enterprises",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

import FloatingActions from "@/components/FloatingActions";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </head>
      <body>
        {children}
        <FloatingActions />
      </body>
    </html>
  );
}
