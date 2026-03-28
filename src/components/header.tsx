"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/tinting", label: "Tinting" },
  { href: "/wraps", label: "Wraps" },
  { href: "/detailing", label: "Detailing" },
  { href: "/ppf", label: "PPF" },
  { href: "/tires", label: "Tires" },
  { href: "/print", label: "Print & Signs" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#2a2a2a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo-round.png"
              alt="Accurate Autoworks — Auto Customization Shop in Stony Plain AB"
              width={56}
              height={56}
              className="w-11 h-11 sm:w-14 sm:h-14"
            />
            <span className="text-lg sm:text-2xl font-black tracking-tight uppercase">
              Accurate<span className="text-[#22d65f]"> Autoworks</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-[#999] hover:text-white transition-colors uppercase tracking-wider"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="btn-primary ml-4 text-xs !py-2.5 !px-5">
              Book Now
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-white"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <nav className="lg:hidden py-4 border-t border-[#2a2a2a]">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-3 text-sm font-medium text-[#ccc] hover:text-[#22d65f] uppercase tracking-wider"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="btn-primary mt-4 block text-center text-xs"
            >
              Book Now
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
