import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { GarageBg } from "@/components/garage-bg";
import { Reviews } from "@/components/reviews";

export const metadata: Metadata = {
  title: "Accurate Autoworks | Tint, Wraps, Detailing & Print | Stony Plain AB",
  description:
    "Stony Plain's auto customization shop. Window tinting, vinyl wraps, detailing, PPF, printing & signage. Serving Spruce Grove & Parkland County. 780.818.9904",
  alternates: { canonical: "/" },
};

const SERVICES = [
  {
    title: "Window Tinting",
    description: "Premium ceramic and carbon tints. UV protection, heat rejection, and privacy for your ride.",
    href: "/tinting",
    icon: "🔲",
  },
  {
    title: "Vinyl Wraps",
    description: "Full wraps, partial wraps, color changes. Transform your vehicle or brand your fleet.",
    href: "/wraps",
    icon: "🎨",
  },
  {
    title: "Car Detailing",
    description: "Interior and exterior packages. Your ride, looking like it just rolled off the lot.",
    href: "/detailing",
    icon: "✨",
  },
  {
    title: "Paint Protection",
    description: "PPF that takes the hits so your paint doesn't. Invisible armor for your vehicle.",
    href: "/ppf",
    icon: "🛡️",
  },
  {
    title: "Print & Signage",
    description: "Vehicle wraps, storefront signs, banners, decals. Commercial-grade printing for any business.",
    href: "/print",
    icon: "🖨️",
  },
  {
    title: "Tires & Service",
    description: "Mount, balance, seasonal changeover. Get rolling on the right rubber.",
    href: "/tires",
    icon: "🔧",
  },
];

const TRUST_ITEMS = [
  { label: "Est. 2023", sublabel: "Stony Plain, AB" },
  { label: "5-Star Rated", sublabel: "Google Reviews" },
  { label: "All Makes", sublabel: "Cars, Trucks, Fleet" },
  { label: "Commercial", sublabel: "Print & Signage" },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Graffiti banner background */}
        <Image
          src="/images/hero-main.jpg"
          alt="Accurate Autoworks shop — window tinting, vinyl wraps, car detailing, PPF and commercial printing in Stony Plain AB"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Animated garage background on top */}
        <GarageBg />
        {/* Darkened overlay so text is readable */}
        <div className="absolute inset-0 bg-[#0a0a0a]/85" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/60 via-transparent to-[#0a0a0a]" />

        {/* Diagonal accent line */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#22d65f]/5 to-transparent skew-x-[-12deg] translate-x-20" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-20">
          <div className="inline-block px-4 py-1.5 mb-6 text-xs font-bold uppercase tracking-[3px] text-[#22d65f] border border-[#22d65f]/30 rounded-full">
            Stony Plain&apos;s Auto Customization Shop
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase leading-[0.95] tracking-tight hero-title-shadow drop-shadow-[0_4px_12px_rgba(0,0,0,1)]">
            Your Ride.{" "}
            <span className="text-[#22d65f] glow-accent">Your Style.</span>
            <br />
            Done Right.
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-[#999] max-w-2xl mx-auto leading-relaxed hero-title-shadow">
            Tint. Wraps. Detail. Print. From a fresh tint job to full commercial
            fleet wraps — we make it look exactly how you want it.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary text-base">
              Book Your Service
            </Link>
            <Link href="/gallery" className="btn-outline text-base">
              See Our Work
            </Link>
          </div>

          <div className="mt-8">
            <a
              href="tel:7808189904"
              className="text-[#aaa] hover:text-[#22d65f] transition-colors text-xl sm:text-2xl font-medium hero-title-shadow"
            >
              or call <span className="text-white font-bold">780.818.9904</span>
            </a>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-y border-[#1a1a1a] bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#1a1a1a]">
            {TRUST_ITEMS.map((item) => (
              <div key={item.label} className="py-6 sm:py-8 text-center">
                <div className="text-lg sm:text-xl font-bold text-white">{item.label}</div>
                <div className="text-xs sm:text-sm text-[#666] uppercase tracking-wider mt-1">{item.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GOOGLE REVIEWS */}
      <Reviews />

      {/* SERVICES */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight">
              What We <span className="text-[#22d65f]">Do</span>
            </h2>
            <p className="mt-4 text-[#888] max-w-xl mx-auto">
              From daily drivers to commercial fleets. Every service, done with precision.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="service-card card-gradient rounded-xl p-8 group"
              >
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-bold uppercase tracking-wide group-hover:text-[#22d65f] transition-colors">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm text-[#888] leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-5 text-xs font-bold text-[#22d65f] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More &rarr;
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* COMMERCIAL PRINT CALLOUT */}
      <section className="py-20 sm:py-28 bg-[#0d0d0d] border-y border-[#1a1a1a] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-[#22d65f]/5 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-xs font-bold uppercase tracking-[3px] text-[#22d65f] mb-4">
                Commercial Services
              </div>
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight leading-tight">
                If You Can Imagine It,<br />
                <span className="text-[#22d65f]">We Can Print It.</span>
              </h2>
              <p className="mt-6 text-[#999] leading-relaxed text-lg">
                Commercial-grade printing and signage for businesses across Parkland County.
                Vehicle fleet wraps, storefront signs, banners, decals, custom graphics —
                whatever your brand needs to stand out.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Fleet vehicle wraps & graphics",
                  "Storefront signs & window graphics",
                  "Banners, decals & custom prints",
                  "Large-format commercial printing",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-[#ccc]">
                    <span className="text-[#22d65f] font-bold">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link href="/print" className="btn-primary">
                  Get a Print Quote
                </Link>
              </div>
            </div>
            <div className="bg-[#141414] rounded-xl border border-[#2a2a2a] p-12 text-center">
              <div className="text-6xl mb-4">🖨️</div>
              <h3 className="text-xl font-bold uppercase">Commercial-Grade Equipment</h3>
              <p className="mt-3 text-[#888] text-sm">
                Full-size plotter and commercial printer on-site. From concept to finished product,
                everything stays in-house for quality you can count on.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight">
              Why <span className="text-[#22d65f]">Accurate</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Precision Work",
                description:
                  "Every cut, every edge, every detail — done right the first time. We don't rush and we don't cut corners.",
              },
              {
                title: "Local & Trusted",
                description:
                  "Born and built in Stony Plain. We're your neighbours, and our reputation is everything. See us on Google.",
              },
              {
                title: "Full Service Shop",
                description:
                  "Tint, wraps, detail, PPF, print, tires — everything under one roof. One shop, one standard of quality.",
              },
            ].map((item) => (
              <div key={item.title} className="text-center p-8">
                <h3 className="text-lg font-bold uppercase tracking-wide">{item.title}</h3>
                <p className="mt-3 text-sm text-[#888] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28 bg-[#0d0d0d] border-t border-[#1a1a1a]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight">
            Ready to Get <span className="text-[#22d65f]">Started</span>?
          </h2>
          <p className="mt-4 text-[#999] text-lg">
            Whether it&apos;s a quick tint job or a full commercial fleet wrap, we&apos;re ready when you are.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary text-base">
              Book Your Service
            </Link>
            <a href="tel:7808189904" className="btn-outline text-base">
              Call 780.818.9904
            </a>
          </div>
        </div>
      </section>

      {/* LOCAL SEO / STRUCTURED DATA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AutoRepair",
            name: "Accurate Autoworks",
            url: "https://www.accurateautoworks.ca",
            image: "https://www.accurateautoworks.ca/images/logo-banner.png",
            description:
              "Stony Plain's premier auto customization shop offering window tinting, vinyl wraps, car detailing, PPF, commercial printing and signage.",
            telephone: "+1-780-818-9904",
            priceRange: "$$",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Stony Plain",
              addressRegion: "AB",
              postalCode: "T7Z",
              addressCountry: "CA",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 53.5346,
              longitude: -114.0089,
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "09:00",
                closes: "17:00",
              },
            ],
            areaServed: [
              { "@type": "City", name: "Stony Plain" },
              { "@type": "City", name: "Spruce Grove" },
              { "@type": "AdministrativeArea", name: "Parkland County" },
              { "@type": "City", name: "Acheson" },
              { "@type": "City", name: "Edmonton" },
            ],
            foundingDate: "2023",
            sameAs: [
              "https://www.facebook.com/HFDC780",
              "https://www.instagram.com/accurate_autoworks/",
              "https://share.google/it6xHeQpFwShRskZW",
            ],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Auto Customization Services",
              itemListElement: [
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Window Tinting", url: "https://www.accurateautoworks.ca/tinting" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Vinyl Wraps", url: "https://www.accurateautoworks.ca/wraps" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Car Detailing", url: "https://www.accurateautoworks.ca/detailing" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Paint Protection Film", url: "https://www.accurateautoworks.ca/ppf" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Printing & Signage", url: "https://www.accurateautoworks.ca/print" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tires Mount & Balance", url: "https://www.accurateautoworks.ca/tires" } },
              ],
            },
          }),
        }}
      />
    </>
  );
}
