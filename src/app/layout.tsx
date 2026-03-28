import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.accurateautoworks.ca"),
  title: {
    default: "Accurate Autoworks | Tint, Wraps, Detailing & Print | Stony Plain AB",
    template: "%s | Accurate Autoworks",
  },
  description:
    "Stony Plain's auto customization shop. Window tinting, vinyl wraps, detailing, PPF, printing & signage. Serving Spruce Grove & Parkland County. 780.818.9904",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    siteName: "Accurate Autoworks",
    images: [
      {
        url: "/images/logo-banner.png",
        width: 1200,
        height: 630,
        alt: "Accurate Autoworks — Tint, Wraps, Detailing & Print in Stony Plain AB",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/logo-banner.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-[#0a0a0a] text-[#f0f0f0]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
