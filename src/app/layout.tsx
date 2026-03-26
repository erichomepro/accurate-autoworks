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
  title: {
    default: "Accurate Autoworks | Tint, Wraps, Detailing & Print | Stony Plain AB",
    template: "%s | Accurate Autoworks",
  },
  description:
    "Stony Plain's premier auto customization shop. Window tinting, vinyl wraps, car detailing, PPF, commercial printing & signage. Serving Spruce Grove, Parkland County & Acheson. Call 780.818.9904",
  keywords: [
    "window tinting Stony Plain",
    "vinyl wrap Spruce Grove",
    "car detailing Stony Plain",
    "PPF Spruce Grove",
    "commercial printing Stony Plain",
    "vehicle wrap Parkland County",
    "auto detailing Acheson",
    "sign printing Spruce Grove",
  ],
  openGraph: {
    type: "website",
    locale: "en_CA",
    siteName: "Accurate Autoworks",
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
