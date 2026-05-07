import Link from "next/link";
import type { Metadata } from "next";
import { BlogPostClient } from "./client";

export const metadata: Metadata = {
  title:
    "Commercial Signs Stony Plain | Fleet Wraps & Storefront Signs",
  description:
    "Fleet vehicle wraps, storefront signs, banners & decals for Stony Plain & Spruce Grove businesses. Design, print, and install at Accurate Autoworks.",
  alternates: {
    canonical:
      "https://www.accurateautoworks.ca/blog/commercial-signs-vehicle-wraps-stony-plain/",
  },
  openGraph: {
    title:
      "Commercial Signs Stony Plain | Fleet Wraps & Storefront Signs",
    description:
      "Fleet wraps, storefront signs, banners, and window graphics for Parkland County businesses. Accurate Autoworks handles design through installation.",
    type: "article",
    url: "https://www.accurateautoworks.ca/blog/commercial-signs-vehicle-wraps-stony-plain/",
    locale: "en_CA",
    siteName: "Accurate Autoworks",
  },
};

const FAQ_DATA = [
  {
    q: "What commercial sign and print services does Accurate Autoworks offer?",
    a: "Accurate Autoworks offers a full range of commercial print and signage services including fleet vehicle wraps, partial wraps and vinyl decals, storefront signs, window graphics and frosting, vinyl banners, corrugated plastic signs, aluminum panel signs, and real estate yard signs. Everything is designed, printed, and installed in-house at our Stony Plain shop. Call 780.818.9904 to discuss your specific project.",
  },
  {
    q: "How much does a fleet vehicle wrap cost in Alberta?",
    a: "Fleet wrap pricing in Alberta depends on vehicle size and wrap coverage. A full wrap on a half-ton pickup typically runs $2,500 to $4,000, while a full cargo van wrap runs $3,500 to $5,500. Partial wraps — covering doors, tailgates, and key panels — start around $800 to $2,000. Vinyl lettering-only packages are the most budget-friendly option at $200 to $600 per vehicle. At Accurate Autoworks, we provide detailed quotes based on your fleet size and design requirements.",
  },
  {
    q: "How long does a commercial vehicle wrap last?",
    a: "A professionally installed fleet wrap using quality cast vinyl lasts 5 to 7 years under normal Alberta conditions. The Acheson industrial corridor, highway driving, and Alberta's freeze-thaw cycles are all hard on wraps, but cast vinyl handles them well when the wrap is properly installed and maintained. Calendered vinyl, used in cheaper installs, typically degrades in 2 to 3 years in our climate. Accurate Autoworks uses cast vinyl for all fleet work.",
  },
  {
    q: "Can you do a partial wrap instead of a full wrap?",
    a: "Absolutely. Partial wraps are a cost-effective option for businesses that want strong brand visibility without the full-wrap price tag. A common approach for fleets in the Stony Plain and Spruce Grove area is a partial wrap covering the doors and tailgate combined with cut vinyl lettering on the cab and box sides. This gives you strong visual impact at 40 to 60% of a full wrap cost. Accurate Autoworks will mock up both options so you can compare before committing.",
  },
  {
    q: "Do vehicle wraps damage the paint underneath?",
    a: "No — in fact, a quality vinyl wrap protects the paint underneath from UV exposure, minor abrasion, and debris. The vinyl adheres to the paint's clear coat and removes cleanly when done by a trained installer. The condition of the paint does matter: chips, rust, or peeling clear coat can cause adhesion problems, so we inspect and address any paint issues before wrapping. Accurate Autoworks also offers PPF as an alternative when paint protection — rather than full branding — is the primary goal.",
  },
  {
    q: "What types of storefront signs can you produce?",
    a: "Accurate Autoworks produces aluminum panel signs, corrugated plastic (Coroplast) signs, vinyl banner signs, window graphics and frosted vinyl, and cut vinyl lettering for storefronts and office windows. For businesses on the Stony Plain commercial strip or in the Spruce Grove retail areas, we can produce everything from a full-width fascia banner to individual door graphics. Contact us at 780.818.9904 to discuss your storefront project.",
  },
  {
    q: "Do I need to provide print-ready artwork or can you design it?",
    a: "Both options work. If you have existing brand guidelines, logos, and artwork, we can use those files and set up the print layout in-house. If you need design from scratch, Accurate Autoworks can create the graphics as part of the project — just come in with your logo (or a description of what you want) and your colour preferences. We produce a proof for your approval before anything goes to print, so you see exactly what you are getting.",
  },
  {
    q: "How long does it take to produce and install commercial signs or a fleet wrap?",
    a: "Turnaround time depends on project complexity. Vinyl banners and basic signs can often be produced in 2 to 5 business days. Full fleet vehicle wraps typically require 1 to 2 days per vehicle for installation after artwork is approved. For multi-vehicle fleet projects, we schedule the work in batches to minimize downtime for your business. Accurate Autoworks recommends reaching out as early as possible for large fleet projects, especially heading into the busy spring and summer season.",
  },
  {
    q: "How do I maintain a wrapped fleet vehicle?",
    a: "Wrapped vehicles should be hand-washed or run through touchless automatic washes — brush-type washes can lift wrap edges over time. Avoid high-pressure spray directly at panel edges and seams. Use a mild, non-abrasive soap and rinse thoroughly. Do not wax over a printed wrap; instead, use a vinyl-safe detailer. Wrapped vehicles should not sit under direct sun for extended periods if avoidable. Following these basics, a quality fleet wrap installed by Accurate Autoworks will easily last its full rated lifespan.",
  },
  {
    q: "Can wraps and signs be updated when my business info changes?",
    a: "Yes. One of the practical advantages of vinyl over painted lettering is that it can be removed and replaced section by section. If your phone number, website, or service list changes, we can remove the old vinyl and install updated graphics without replacing the entire wrap. For storefront signs, panel replacement or overlay vinyl is usually the most cost-effective update path. Call Accurate Autoworks at 780.818.9904 to discuss the most efficient approach for your specific situation.",
  },
];

const COST_DATA = [
  { service: "Full fleet wrap — half-ton / pickup", cost: "$2,500 - $4,000", priority: "Most Popular", level: "essential" },
  { service: "Full fleet wrap — cargo van", cost: "$3,500 - $5,500", priority: "Most Popular", level: "essential" },
  { service: "Full fleet wrap — cube truck / box truck", cost: "$5,000 - $8,000", priority: "Large Format", level: "recommended" },
  { service: "Partial wrap + cut vinyl decals", cost: "$800 - $2,000", priority: "Best Value", level: "recommended" },
  { service: "Vinyl lettering package (per vehicle)", cost: "$200 - $600", priority: "Budget Option", level: "optional" },
  { service: "Storefront aluminum panel sign", cost: "$300 - $1,200", priority: "Varies by size", level: "recommended" },
  { service: "Window graphics / frosted vinyl", cost: "$150 - $500", priority: "Per window", level: "optional" },
  { service: "Vinyl banner (4 ft × 8 ft)", cost: "$150 - $350", priority: "Events & promos", level: "optional" },
];

const SIGN_TYPES = [
  {
    type: "Full Fleet Vehicle Wrap",
    visibility: "Highest",
    durability: "5–7 years",
    bestFor: "Any commercial vehicle",
    impressions: "30,000–70,000/day",
    rating: "Top Pick",
    ratingLevel: "best",
    recommended: true,
    notes: "Maximum brand coverage. Cast vinyl stands up to Alberta highways and freeze-thaw cycles.",
  },
  {
    type: "Partial Wrap + Decals",
    visibility: "High",
    durability: "5–7 years",
    bestFor: "Budget-conscious fleets",
    impressions: "15,000–40,000/day",
    rating: "Great Value",
    ratingLevel: "good",
    notes: "40–60% of full wrap cost with strong visual impact. Popular for trade service trucks.",
  },
  {
    type: "Vinyl Lettering Only",
    visibility: "Moderate",
    durability: "3–5 years",
    bestFor: "Minimal branding needs",
    impressions: "10,000–25,000/day",
    rating: "Solid",
    ratingLevel: "good",
    notes: "Most affordable per-vehicle option. Works well alongside door magnets for part-time branding.",
  },
  {
    type: "Storefront Signs (aluminum/ACM)",
    visibility: "High — local foot traffic",
    durability: "7–10+ years",
    bestFor: "Retail & office locations",
    impressions: "Foot & drive-by traffic",
    rating: "Long-Term",
    ratingLevel: "good",
    notes: "Rigid panel signs project permanence. ACM (aluminum composite) is the industry standard for durability.",
  },
  {
    type: "Window Graphics / Frosting",
    visibility: "High — storefront only",
    durability: "3–5 years",
    bestFor: "Storefronts, privacy, branding",
    impressions: "Walk-in & street traffic",
    rating: "Solid",
    ratingLevel: "good",
    notes: "Dual purpose: branding and privacy. Frosted vinyl on glass gives a premium look at a low cost.",
  },
  {
    type: "Vinyl Banners",
    visibility: "High — event/seasonal",
    durability: "1–3 years",
    bestFor: "Sales, openings, events",
    impressions: "Variable by placement",
    rating: "Seasonal",
    ratingLevel: "ok",
    notes: "Best for short-term high-visibility campaigns. Easy to store and re-use across multiple events.",
  },
  {
    type: "Magnetic Vehicle Signs",
    visibility: "Low–Moderate",
    durability: "2–3 years",
    bestFor: "Part-time commercial use",
    impressions: "5,000–15,000/day",
    rating: "Limited",
    ratingLevel: "poor",
    notes: "Convenient but low visual impact vs. wrap. Magnets can scratch paint if debris gets underneath.",
  },
];

export default function CommercialSignsGuide() {
  const publishDate = "2026-05-07";
  const modifiedDate = "2026-05-07";

  return (
    <article className="pb-20">
      <BlogPostClient />

      {/* Hero Section */}
      <header className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#22d65f]/5 via-transparent to-transparent" />
        <div className="absolute inset-0 hero-stripe opacity-50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#22d65f]/[0.03] rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-3 px-5 py-2 mb-8 text-xs font-bold uppercase tracking-[3px] text-[#22d65f] border border-[#22d65f]/30 rounded-full backdrop-blur-sm bg-[#22d65f]/5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#22d65f] animate-pulse" />
            Commercial Signs &amp; Fleet Wraps
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black uppercase tracking-tight leading-[1.05]">
            Commercial Signs &amp; Vehicle Wraps in{" "}
            <span className="text-[#22d65f] glow-accent">
              Stony Plain
            </span>
            : Fleet, Storefront &amp; Banners
          </h1>

          <p className="mt-8 text-lg sm:text-xl text-[#999] max-w-2xl mx-auto leading-relaxed">
            How Parkland County businesses use fleet wraps, storefront signs,
            and commercial print to build brand visibility — and what it costs
            to get it done right in 2026.
          </p>

          <div className="mt-6 flex items-center justify-center gap-6 text-xs text-[#666] uppercase tracking-wider">
            <div className="flex items-center gap-2">
              <svg className="w-3.5 h-3.5 text-[#22d65f]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <time dateTime={publishDate}>May 7, 2026</time>
            </div>
            <span className="w-1 h-1 rounded-full bg-[#333]" />
            <div className="flex items-center gap-2">
              <svg className="w-3.5 h-3.5 text-[#22d65f]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>16 min read</span>
            </div>
          </div>

          <div className="mt-12 flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#22d65f]/40" />
            <div className="w-2 h-2 rotate-45 border border-[#22d65f]/40" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#22d65f]/40" />
          </div>
        </div>
      </header>

      {/* Article Body */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6">

        {/* Intro */}
        <div className="prose-section">
          <p className="text-[#ccc] leading-relaxed text-base sm:text-lg">
            Drive through the Acheson industrial corridor on a Tuesday morning
            and count how many trucks you see with nothing on them. No name.
            No phone number. No logo. Just a plain white or grey box driving
            around Parkland County doing absolutely nothing for the business
            that owns it. That is money being left on the table every single
            day. A wrapped fleet vehicle is one of the most cost-effective
            forms of advertising available to a local business — it reaches
            tens of thousands of people per day, it runs 24 hours a day, and
            it costs a fraction of a comparable digital or print ad budget
            spread over five years.
          </p>
          <p className="mt-4 text-[#ccc] leading-relaxed text-base sm:text-lg">
            But commercial signage is not limited to vehicle wraps. Storefront
            signs, window graphics, banners, and decals all play a role in
            how a business shows up in Stony Plain, Spruce Grove, and the
            surrounding Parkland County market. This guide covers the full
            range of commercial print and signage services available at{" "}
            <Link href="/print/" className="text-[#22d65f] hover:underline">
              Accurate Autoworks
            </Link>
            , how each product performs, what it realistically costs in 2026,
            and what the design-to-installation process looks like.
          </p>
        </div>

        {/* Table of Contents */}
        <nav className="mt-12 relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#22d65f]/10 via-[#141414] to-[#141414]" />
          <div className="absolute inset-0 border border-[#22d65f]/20 rounded-2xl" />
          <div className="relative p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-[#22d65f]/10 flex items-center justify-center">
                <svg className="w-4 h-4 text-[#22d65f]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
              </div>
              <h2 className="text-sm font-bold uppercase tracking-widest text-[#22d65f]">
                What We Cover
              </h2>
            </div>
            <ol className="grid sm:grid-cols-2 gap-x-6 gap-y-3 text-sm">
              {[
                { href: "#what-we-offer", label: "What Accurate Autoworks Offers" },
                { href: "#fleet-wraps", label: "Fleet Vehicle Wraps in Stony Plain" },
                { href: "#storefront-signs", label: "Storefront Signs & Window Graphics" },
                { href: "#sign-types-compared", label: "Sign Types Compared" },
                { href: "#cost-guide", label: "2026 Commercial Sign Cost Guide" },
                { href: "#design-to-install", label: "Design to Install: What to Expect" },
                { href: "#faq", label: "Frequently Asked Questions" },
              ].map((item, i) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="flex items-center gap-3 py-1.5 text-[#999] hover:text-[#22d65f] transition-colors group"
                  >
                    <span className="flex-shrink-0 w-6 h-6 rounded-md bg-[#22d65f]/10 text-[#22d65f] text-xs font-bold flex items-center justify-center group-hover:bg-[#22d65f]/20 transition-colors">
                      {i + 1}
                    </span>
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </nav>

        {/* Section 1: What We Offer */}
        <section id="what-we-offer" className="mt-16 scroll-mt-24">
          <SectionHeading number="01" highlight="Offers">
            What Accurate Autoworks{" "}
          </SectionHeading>
          <p className="mt-6 text-[#ccc] leading-relaxed text-base">
            Accurate Autoworks is not just an auto shop — it is a full-service
            commercial print and vehicle graphics operation based on Boulder
            Boulevard in Stony Plain. From a single vinyl decal to a ten-truck
            fleet wrap, from a storefront sign to a building-side banner, the
            production and installation all happens under one roof. That means
            one point of contact, one consistent quality standard, and
            no disconnects between what the designer promised and what the
            installer delivered.
          </p>
          <p className="mt-4 text-[#ccc] leading-relaxed text-base">
            Here is the full commercial print and signage menu:
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-5">
            {[
              {
                title: "Fleet Vehicle Wraps",
                icon: "truck",
                detail:
                  "Full and partial wraps for any commercial vehicle — half-tons, cargo vans, cube trucks, trailers, and heavy equipment. Cast vinyl only. Installed in our climate-controlled bay.",
              },
              {
                title: "Storefront Signs",
                icon: "store",
                detail:
                  "Aluminum composite (ACM) panel signs, corrugated plastic signs, and PVC board signs for storefronts, offices, and commercial properties across Stony Plain and Spruce Grove.",
              },
              {
                title: "Window Graphics & Frosting",
                icon: "window",
                detail:
                  "Printed window graphics, perforated see-through vinyl, and frosted privacy vinyl for retail windows, office partitions, and vehicle glass branding.",
              },
              {
                title: "Vinyl Banners",
                icon: "banner",
                detail:
                  "Heavy-duty vinyl banners with reinforced hems and grommets. Available in any custom size. Used for grand openings, seasonal promotions, site signage, and trade shows.",
              },
              {
                title: "Vehicle Decals & Lettering",
                icon: "decal",
                detail:
                  "Cut vinyl lettering and logo decals for trucks, service vans, equipment, and boats. The most cost-effective way to brand a fleet when full wraps are not in the budget.",
              },
              {
                title: "Real Estate & Yard Signs",
                icon: "yard",
                detail:
                  "Coroplast and aluminum yard signs for real estate agents, contractors, events, and political campaigns. Produced quickly and in quantity for seasonal campaigns.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="card-gradient rounded-2xl p-6 group hover:border-[#22d65f]/50 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-[#22d65f]/10 flex items-center justify-center mb-4 group-hover:bg-[#22d65f]/20 transition-colors">
                  <svg className="w-5 h-5 text-[#22d65f]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    {item.icon === "truck" && (
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                    )}
                    {item.icon === "store" && (
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    )}
                    {item.icon === "window" && (
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                    )}
                    {item.icon === "banner" && (
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                    )}
                    {item.icon === "decal" && (
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    )}
                    {item.icon === "yard" && (
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    )}
                  </svg>
                </div>
                <h3 className="text-sm font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-[#999] leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: Fleet Vehicle Wraps */}
        <section id="fleet-wraps" className="mt-16 scroll-mt-24">
          <SectionHeading number="02" highlight="in Stony Plain">
            Fleet Vehicle Wraps{" "}
          </SectionHeading>
          <p className="mt-6 text-[#ccc] leading-relaxed text-base">
            A fleet vehicle wrap is the single highest-ROI advertising medium
            available to most small and medium-sized businesses in Parkland
            County. According to the{" "}
            <a
              href="https://www.signassociation.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#22d65f] hover:underline"
            >
              Canadian Sign Association
            </a>
            , vehicle-mounted advertising generates more impressions per
            dollar than virtually any other format — including billboards,
            digital ads, and radio. A single wrapped truck driving regular
            routes in the Stony Plain, Spruce Grove, and Acheson corridor
            can generate 30,000 to 70,000 brand impressions per day.
          </p>
          <p className="mt-4 text-[#ccc] leading-relaxed text-base">
            The math is straightforward. A full fleet wrap on a pickup costs
            roughly $2,500 to $4,000 and lasts 5 to 7 years. Spread that over
            the wrap&apos;s lifespan, and you are paying pennies per thousand
            impressions — a fraction of what equivalent digital advertising
            would cost. And unlike a social media ad, your wrap is working
            every time the truck moves, parks on a job site, or sits in a
            Tim Hortons drive-through.
          </p>

          <div className="mt-10 space-y-5">
            <div className="card-gradient rounded-2xl p-6 sm:p-8">
              <h3 className="text-sm font-bold uppercase tracking-wide text-white mb-3">
                Full Wraps: Maximum Coverage, Maximum Impact
              </h3>
              <p className="text-sm text-[#999] leading-relaxed">
                A full vehicle wrap covers every painted surface of the vehicle
                — hood, roof, doors, tailgate, fenders, bumpers, and mirrors.
                The result is a rolling billboard that is impossible to miss.
                Full wraps work especially well for businesses with strong
                visual identities and those serving broad geographic areas
                across Parkland County and the Edmonton metro. Trades
                businesses, landscaping companies, HVAC contractors, and
                food service operators all see strong returns from full
                fleet wraps.
              </p>
              <p className="mt-3 text-sm text-[#999] leading-relaxed">
                At Accurate Autoworks, full wraps are produced on a large-format
                printer using UV-resistant ink, then installed by hand in our
                climate-controlled bay. We use cast vinyl — not the cheaper
                calendered film — because cast vinyl conforms properly to
                compound curves, door handles, and body contours without
                lifting edges over time. Every seam is heat-set for durability.
              </p>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-[#22d65f]/30 bg-gradient-to-br from-[#22d65f]/[0.06] to-[#141414]">
              <div className="absolute top-0 right-0 px-3 py-1 bg-[#22d65f] text-black text-[10px] font-bold uppercase tracking-widest rounded-bl-lg">
                Popular Option
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="text-sm font-bold uppercase tracking-wide text-white mb-3">
                  Partial Wraps: High Impact, Lower Budget
                </h3>
                <p className="text-sm text-[#999] leading-relaxed">
                  For businesses that want strong brand presence without the
                  full-wrap price tag, partial wraps are the sweet spot. A
                  typical partial wrap covers the doors, tailgate, and a
                  graphic element on the rear quarter panels, with cut vinyl
                  lettering on the remaining surfaces. The combination gives
                  you a cohesive, professional look that reads as &ldquo;intentional
                  branding&rdquo; rather than &ldquo;budget lettering.&rdquo;
                </p>
                <p className="mt-3 text-sm text-[#999] leading-relaxed">
                  Partial wraps typically run 40 to 60% of a full wrap cost
                  and are especially effective on darker base-colour vehicles
                  where the original paint can be incorporated into the design
                  — black or dark grey trucks work particularly well. Accurate
                  Autoworks can mock up both partial and full wrap concepts
                  side by side so you can see the visual difference before
                  making a decision.
                </p>
              </div>
            </div>

            <div className="card-gradient rounded-2xl p-6 sm:p-8">
              <h3 className="text-sm font-bold uppercase tracking-wide text-white mb-3">
                Cast Vinyl vs. Calendered Vinyl: Why It Matters in Alberta
              </h3>
              <p className="text-sm text-[#999] leading-relaxed">
                Not all wrap vinyl is equal, and in Alberta&apos;s climate the
                difference matters enormously. Cast vinyl is manufactured by
                casting liquid PVC onto a moving belt — the result is a thin,
                dimensionally stable film that conforms to complex curves and
                handles extreme temperature swings without shrinking. Calendered
                vinyl is pressed between rollers and has memory — it wants to
                return to its flat shape, which causes lift at edges and seams
                over time, especially through freeze-thaw cycles.
              </p>
              <p className="mt-3 text-sm text-[#999] leading-relaxed">
                A calendered wrap installed in October may look fine through
                the winter, but by the following spring you start seeing
                lifted edges at door handles, bubbles forming in the flat
                panels, and seams pulling away from body lines. Accurate
                Autoworks uses cast vinyl exclusively for all fleet work
                because we warranty our installs and we only warranty what
                we can stand behind.
              </p>
            </div>
          </div>

          <Callout variant="tip">
            If you are considering{" "}
            <Link href="/wraps/" className="text-[#22d65f] hover:underline">
              a vehicle wrap for your personal vehicle
            </Link>{" "}
            alongside your fleet work, the process and materials are identical.
            Bundle a personal colour-change wrap with your commercial fleet
            project and ask about multi-vehicle pricing when you call
            Accurate Autoworks.
          </Callout>
        </section>

        {/* Section 3: Storefront Signs */}
        <section id="storefront-signs" className="mt-16 scroll-mt-24">
          <SectionHeading number="03" highlight="& Window Graphics">
            Storefront Signs{" "}
          </SectionHeading>
          <p className="mt-6 text-[#ccc] leading-relaxed text-base">
            Fleet wraps move your brand across Parkland County. Storefront
            signs anchor it in place. For businesses on the Stony Plain
            commercial strip, along Highway 16A, or in any of the Spruce
            Grove retail nodes, a professional sign is the difference between
            being found and being missed. Accurate Autoworks produces
            signage in-house and handles installation, so there is no
            handoff between a print shop and a sign company.
          </p>

          <div className="mt-8 space-y-4">
            {[
              {
                step: "01",
                title: "Aluminum Composite (ACM) Panel Signs",
                description:
                  "ACM — commonly known by the brand name Dibond — is the industry standard for exterior business signage. Two thin aluminum sheets bonded to a polyethylene core, it is rigid, weather-resistant, lightweight, and takes print graphics exceptionally well. ACM signs are the right choice for fascia-mounted business signage, directional signs, and any application where permanence and professional appearance matter. They handle Alberta winters, UV exposure, and highway wind without warping or fading.",
              },
              {
                step: "02",
                title: "Corrugated Plastic (Coroplast) Signs",
                description:
                  "Coroplast signs are the workhorse of real estate, contracting, and event signage — inexpensive, lightweight, and easy to install with wire H-stakes. For businesses running seasonal campaigns or needing high quantities (25+ signs for a real estate campaign, for example), Coroplast is the clear choice on cost. They are not meant for permanent exterior mounting, but for yard-sign and temporary applications they are reliable and produce sharp graphics.",
              },
              {
                step: "03",
                title: "Window Graphics & Frosted Vinyl",
                description:
                  "Window graphics serve two purposes simultaneously: branding and privacy. Perforated see-through vinyl applied to large storefront windows lets you display bold graphics visible from the street while maintaining a clear interior view from inside. Frosted vinyl creates a premium sandblasted-glass look on office partitions, conference room glass, and storefront windows — a popular choice for professional services firms, medical offices, and retail boutiques in the Spruce Grove and Stony Plain commercial areas.",
              },
              {
                step: "04",
                title: "Vinyl Banners",
                description:
                  "Heavy-duty 13-ounce vinyl banners with reinforced perimeter hems and brass grommets are the fastest, most cost-effective way to deploy high-visibility signage for a specific period. Grand openings, seasonal sales, contractor site identification, and trade shows are all common uses. Accurate Autoworks produces banners in any custom size with full-colour print, and they are ready quickly — often within 2 to 5 business days of artwork approval.",
              },
            ].map((phase) => (
              <div key={phase.step} className="relative rounded-2xl overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#22d65f] to-[#22d65f]/20" />
                <div className="card-gradient rounded-2xl border-l-0 pl-6 pr-6 py-6 sm:pl-8 sm:pr-8 sm:py-8 ml-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-[#22d65f] text-black text-xs font-black flex-shrink-0">
                      {phase.step}
                    </span>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-white">
                      {phase.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[#999] leading-relaxed">
                    {phase.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <Callout variant="info">
            For businesses that need both a storefront sign and vehicle branding,
            running both projects at the same time at Accurate Autoworks
            is the most efficient approach. Design is done once, brand assets
            are consistent across all outputs, and you deal with a single
            shop instead of coordinating between a signage company and a wrap
            installer. Call{" "}
            <a href="tel:7808189904" className="text-[#22d65f] hover:underline font-bold">
              780.818.9904
            </a>{" "}
            to discuss a combined project.
          </Callout>
        </section>

        {/* Section 4: Sign Types Compared */}
        <section id="sign-types-compared" className="mt-16 scroll-mt-24">
          <SectionHeading number="04" highlight="Compared">
            Sign &amp; Wrap Types{" "}
          </SectionHeading>
          <p className="mt-6 text-[#ccc] leading-relaxed text-base">
            Every commercial signage product has a specific use case where it
            excels. Here is a direct comparison of the main options available
            at Accurate Autoworks, ranked by visibility, durability, and best
            application for Stony Plain and Spruce Grove area businesses.
          </p>

          {/* Desktop table */}
          <div className="mt-8 hidden sm:block rounded-2xl overflow-hidden border border-[#2a2a2a]">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#22d65f]/[0.06]">
                  {["Type", "Visibility", "Durability", "Best For", "Impressions", "Rating"].map((h) => (
                    <th key={h} className="text-left py-4 px-4 text-xs font-bold uppercase tracking-widest text-[#22d65f]">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-[#ccc]">
                {SIGN_TYPES.map((row, i) => (
                  <tr
                    key={row.type}
                    className={`border-t border-[#1e1e1e] transition-colors hover:bg-[#22d65f]/[0.03] ${
                      row.recommended ? "bg-[#22d65f]/[0.04]" : i % 2 === 0 ? "bg-[#141414]" : "bg-[#0f0f0f]"
                    }`}
                  >
                    <td className="py-4 px-4 font-bold text-white">
                      {row.type}
                      {row.recommended && (
                        <span className="ml-2 text-[10px] font-bold uppercase tracking-widest text-[#22d65f] px-2 py-0.5 rounded-full bg-[#22d65f]/15">
                          Recommended
                        </span>
                      )}
                    </td>
                    <td className="py-4 px-4">{row.visibility}</td>
                    <td className="py-4 px-4">{row.durability}</td>
                    <td className="py-4 px-4 text-[#777] text-xs">{row.bestFor}</td>
                    <td className="py-4 px-4 text-xs">{row.impressions}</td>
                    <td className="py-4 px-4">
                      <SignRatingBadge level={row.ratingLevel} label={row.rating} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="mt-8 sm:hidden space-y-4">
            {SIGN_TYPES.map((row) => (
              <div
                key={row.type}
                className={`rounded-2xl p-5 border ${
                  row.recommended
                    ? "border-[#22d65f]/30 bg-[#22d65f]/[0.06]"
                    : "card-gradient"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-bold text-white text-sm">{row.type}</span>
                  <SignRatingBadge level={row.ratingLevel} label={row.rating} />
                </div>
                {row.recommended && (
                  <div className="mb-3 text-[10px] font-bold uppercase tracking-widest text-[#22d65f]">
                    Our Recommendation
                  </div>
                )}
                <div className="grid grid-cols-2 gap-2 text-xs text-[#999]">
                  <span>Visibility: <strong className="text-white">{row.visibility}</strong></span>
                  <span>Durability: <strong className="text-white">{row.durability}</strong></span>
                  <span>Impressions: <strong className="text-white">{row.impressions}</strong></span>
                  <span>Best for: <strong className="text-white">{row.bestFor}</strong></span>
                </div>
                <p className="mt-3 text-xs text-[#666] leading-relaxed">{row.notes}</p>
              </div>
            ))}
          </div>

          <Callout variant="warning">
            <strong className="text-white">A note on magnetic signs:</strong>{" "}
            Magnetic vehicle signs show up frequently as a &ldquo;budget-friendly&rdquo;
            alternative to wraps. In practice, they are the worst of both worlds
            — lower visibility than a wrap, risk of paint scratching if dirt or
            debris gets underneath, and they get stolen or blow off at highway
            speeds. For a business making a professional impression in
            Parkland County, invest in vinyl lettering at minimum. Call{" "}
            <Link href="/print/" className="text-[#22d65f] hover:underline">
              Accurate Autoworks
            </Link>{" "}
            to compare options at your actual budget.
          </Callout>
        </section>

        {/* Section 5: Cost Guide */}
        <section id="cost-guide" className="mt-16 scroll-mt-24">
          <SectionHeading number="05" highlight="Cost Guide (2026)">
            Commercial Signs{" "}
          </SectionHeading>
          <p className="mt-6 text-[#ccc] leading-relaxed text-base">
            Here is a realistic breakdown of commercial sign and fleet wrap
            pricing at Accurate Autoworks in Stony Plain for 2026. Prices
            reflect professional-grade materials and installation — not
            DIY kits or online-print commodity signs. Final pricing depends
            on artwork complexity, quantity, and vehicle size.
          </p>

          {/* Desktop table */}
          <div className="mt-8 hidden sm:block rounded-2xl overflow-hidden border border-[#2a2a2a]">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#22d65f]/[0.06]">
                  <th className="text-left py-4 px-6 text-xs font-bold uppercase tracking-widest text-[#22d65f]">
                    Service
                  </th>
                  <th className="text-left py-4 px-6 text-xs font-bold uppercase tracking-widest text-[#22d65f]">
                    Cost Range
                  </th>
                  <th className="text-left py-4 px-6 text-xs font-bold uppercase tracking-widest text-[#22d65f]">
                    Notes
                  </th>
                </tr>
              </thead>
              <tbody className="text-[#ccc]">
                {COST_DATA.map((row, i) => (
                  <tr
                    key={row.service}
                    className={`border-t border-[#1e1e1e] transition-colors hover:bg-[#22d65f]/[0.03] ${
                      i % 2 === 0 ? "bg-[#141414]" : "bg-[#0f0f0f]"
                    }`}
                  >
                    <td className="py-4 px-6">{row.service}</td>
                    <td className="py-4 px-6 font-mono text-white font-bold">
                      {row.cost}
                    </td>
                    <td className="py-4 px-6">
                      <PriorityBadge level={row.level} label={row.priority} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="mt-8 sm:hidden space-y-3">
            {COST_DATA.map((row) => (
              <div key={row.service} className="card-gradient rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-[#ccc]">{row.service}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-white font-bold text-sm">
                    {row.cost}
                  </span>
                  <PriorityBadge level={row.level} label={row.priority} />
                </div>
              </div>
            ))}
          </div>

          <p className="mt-4 text-xs text-[#555] italic">
            * Prices are approximate for the Stony Plain / Spruce Grove area
            as of 2026. Multi-vehicle fleet discounts available. Call
            780.818.9904 for an itemized quote on your specific project.
          </p>

          <div className="mt-8 space-y-4">
            <div className="card-gradient rounded-2xl p-6 sm:p-8">
              <h3 className="text-sm font-bold uppercase tracking-wide text-white mb-3">
                What Drives the Cost of a Fleet Wrap
              </h3>
              <p className="text-sm text-[#999] leading-relaxed">
                Three factors move the price of a fleet wrap more than anything
                else: vehicle size, design complexity, and material grade.
                A cargo van has significantly more surface area than a
                half-ton — more material, more installation time, more
                seams to manage. A complex multi-layer design with gradients
                and photo elements takes longer to produce and install than
                a clean two-colour logo on a white field. And cast vinyl
                costs more than calendered, but lasts twice as long in
                Alberta conditions.
              </p>
              <p className="mt-3 text-sm text-[#999] leading-relaxed">
                Fleet quantity also matters. Wrapping five identical trucks
                is more efficient than five different vehicles because the
                print setup and installation process can be optimized.
                Accurate Autoworks offers fleet pricing for multi-vehicle
                projects — call us to discuss a quote for your specific fleet.
              </p>
            </div>

            <div className="card-gradient rounded-2xl p-6 sm:p-8">
              <h3 className="text-sm font-bold uppercase tracking-wide text-white mb-3">
                The ROI Calculation Every Business Should Run
              </h3>
              <p className="text-sm text-[#999] leading-relaxed">
                A full wrap on a pickup at $3,500 spread over a 6-year
                lifespan costs roughly $583 per year, or about $1.60 per
                day. If that vehicle generates even 20,000 impressions per
                day in the Stony Plain and Spruce Grove market, your cost
                per thousand impressions (CPM) is approximately $0.08 —
                significantly below local radio, digital display, or print
                advertising in the same market. According to research cited
                by the{" "}
                <a
                  href="https://www.signassociation.ca/research"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#22d65f] hover:underline"
                >
                  Canadian Sign Association
                </a>
                , vehicle graphics consistently rank among the lowest-cost
                advertising formats on a per-impression basis.
              </p>
            </div>
          </div>

          <Callout variant="tip">
            <strong className="text-white">Bundle and save:</strong> If your
            vehicles need{" "}
            <Link href="/detailing/" className="text-[#22d65f] hover:underline">
              detailing
            </Link>{" "}
            or{" "}
            <Link href="/ppf/" className="text-[#22d65f] hover:underline">
              paint protection film
            </Link>{" "}
            before wrapping, doing it all in one visit at Accurate Autoworks
            saves on vehicle drop-off logistics and often reduces combined
            labour time. Ask about package pricing when you call{" "}
            <a href="tel:7808189904" className="text-[#22d65f] hover:underline font-bold">
              780.818.9904
            </a>
            .
          </Callout>
        </section>

        {/* Section 6: Design to Install */}
        <section id="design-to-install" className="mt-16 scroll-mt-24">
          <SectionHeading number="06" highlight="What to Expect">
            Design to Install:{" "}
          </SectionHeading>
          <p className="mt-6 text-[#ccc] leading-relaxed text-base">
            Here is what the process looks like from first call to finished
            product at Accurate Autoworks on Boulder Boulevard in Stony Plain.
          </p>

          <div className="mt-8 space-y-4">
            {[
              {
                step: "01",
                title: "Project Consultation",
                description:
                  "Everything starts with a conversation. Bring in your vehicles, describe your storefront, and tell us what you are trying to achieve — brand awareness across the Yellowhead corridor, specific service promotion in the Acheson industrial park, a professional storefront on the Stony Plain commercial strip. We will walk through the product options, realistic budget ranges, and a timeline. No pressure, no quota. Just a straight conversation about what makes sense for your business.",
              },
              {
                step: "02",
                title: "Design & Artwork Approval",
                description:
                  "If you have existing brand guidelines and print-ready files (vector logos, brand colour specs, approved fonts), we set up the layout and send you a proof. If you are starting from scratch, we create the design concept, present mockups showing how the wrap or sign will look on your actual vehicle or storefront, and revise until you are satisfied. Nothing goes to print without written approval on the final artwork.",
              },
              {
                step: "03",
                title: "Print Production",
                description:
                  "Approved artwork goes to our large-format printer. Fleet wrap graphics are printed on cast vinyl with UV-resistant ink, laminated for scratch and abrasion protection, then cut and paneled for efficient installation. Signs and banners are printed on the appropriate substrate — ACM, Coroplast, or heavy banner vinyl — and finished with grommets, hems, or mounting hardware as required.",
              },
              {
                step: "04",
                title: "Installation",
                description:
                  "Fleet wraps are installed in our climate-controlled bay. The vehicle is cleaned and decontaminated first — any embedded grit, wax, or silicone residue will prevent proper adhesion, so surface prep is non-negotiable. Each panel is applied by a trained installer, heat-set for conformity over body curves, and finished at edges and seams. Post-installation, we inspect the entire vehicle in full light to catch any bubbles or lift points before you drive away. Typical installation time is 1 to 2 days per vehicle.",
              },
              {
                step: "05",
                title: "Care Instructions & Warranty",
                description:
                  "After installation you receive clear care instructions covering washing, chemical exposure, and long-term maintenance. Accurate Autoworks warranties the installation — if a seam lifts or a panel fails under normal use within the warranty period, we fix it. We document the vehicle condition before and after wrapping so there are no disputes if the wrap is ever removed.",
              },
            ].map((phase) => (
              <div key={phase.step} className="relative rounded-2xl overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#22d65f] to-[#22d65f]/20" />
                <div className="card-gradient rounded-2xl border-l-0 pl-6 pr-6 py-6 sm:pl-8 sm:pr-8 sm:py-8 ml-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-[#22d65f] text-black text-xs font-black flex-shrink-0">
                      {phase.step}
                    </span>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-white">
                      {phase.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[#999] leading-relaxed">
                    {phase.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <Callout variant="tip">
            <strong className="text-white">Ready to start your project?</strong>{" "}
            Call{" "}
            <a href="tel:7808189904" className="text-[#22d65f] hover:underline font-bold">
              780.818.9904
            </a>{" "}
            or{" "}
            <Link href="/contact/" className="text-[#22d65f] hover:underline">
              submit a project inquiry online
            </Link>
            . Accurate Autoworks is on Boulder Boulevard in Stony Plain, serving
            businesses across Spruce Grove, Acheson, Parkland County, and
            Edmonton. Bring your vehicle in or send us photos and we will put
            together a preliminary quote within one business day.
          </Callout>

          <div className="mt-8 card-gradient rounded-2xl p-6 sm:p-8">
            <h3 className="text-sm font-bold uppercase tracking-wide text-white mb-4">
              Why Local Matters for Commercial Signs
            </h3>
            <p className="text-sm text-[#999] leading-relaxed">
              There are online print brokers that will ship vinyl banners
              and decals from a warehouse in Ontario or the United States.
              They are cheap for a reason: no site survey, no local colour
              calibration check, no accountability when the banner shows
              up with the wrong colours or the wrong size. When something
              goes wrong with an online order, you are emailing customer
              service and waiting for a re-ship while your job site sits
              unsigned or your fleet trucks sit unbranded.
            </p>
            <p className="mt-3 text-sm text-[#999] leading-relaxed">
              Working with Accurate Autoworks means you deal directly with
              the people who design, print, and install your signs. If a
              colour looks off on the proof, we adjust it before it runs.
              If a storefront sign needs a bracket adjusted on install day,
              we handle it on the spot. Local accountability is worth the
              difference in price — especially for your business&apos;s
              public-facing brand.
            </p>
          </div>
        </section>

        {/* Section 7: FAQ */}
        <section id="faq" className="mt-16 scroll-mt-24">
          <SectionHeading number="07" highlight="Asked">
            Frequently{" "}
          </SectionHeading>
          <div className="mt-8 space-y-3">
            {FAQ_DATA.map((faq, i) => (
              <details
                key={faq.q}
                className="group rounded-2xl overflow-hidden card-gradient"
              >
                <summary className="px-6 py-5 cursor-pointer text-sm font-bold text-white hover:text-[#22d65f] transition-colors list-none flex items-center gap-4">
                  <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-[#22d65f]/10 text-[#22d65f] text-xs font-bold flex items-center justify-center group-open:bg-[#22d65f] group-open:text-black transition-all">
                    {i + 1}
                  </span>
                  <span className="flex-1">{faq.q}</span>
                  <span className="flex-shrink-0 w-6 h-6 rounded-full border border-[#333] flex items-center justify-center group-open:border-[#22d65f] group-open:bg-[#22d65f]/10 transition-all">
                    <svg
                      className="w-3 h-3 text-[#22d65f] transition-transform group-open:rotate-180"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 pt-0 pl-[4.25rem] text-sm text-[#999] leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-16 relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#22d65f]/15 via-[#22d65f]/5 to-transparent" />
          <div className="absolute inset-0 hero-stripe opacity-30" />
          <div className="absolute inset-0 border border-[#22d65f]/20 rounded-2xl" />
          <div className="relative p-8 sm:p-12 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs font-bold uppercase tracking-[3px] text-[#22d65f] border border-[#22d65f]/30 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22d65f] animate-pulse" />
              Free Project Consultation
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight">
              Ready to Brand Your{" "}
              <span className="text-[#22d65f] glow-accent">Fleet?</span>
            </h2>
            <p className="mt-4 text-[#999] max-w-xl mx-auto leading-relaxed">
              Fleet wraps, storefront signs, banners, and decals — Accurate
              Autoworks handles design, print, and installation under one roof
              in Stony Plain. Serving Spruce Grove, Acheson, Parkland County,
              and Edmonton West.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Get a Fleet Wrap Quote
              </Link>
              <a href="tel:7808189904" className="btn-outline">
                Call 780.818.9904
              </a>
            </div>
          </div>
        </section>

        {/* Author / Shop Card */}
        <div className="mt-12 card-gradient rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
            <div className="w-14 h-14 rounded-xl bg-[#22d65f]/10 flex items-center justify-center flex-shrink-0">
              <svg className="w-7 h-7 text-[#22d65f]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016A3.001 3.001 0 0021 9.349m-18 0A2.989 2.989 0 004.5 9c.956 0 1.813-.44 2.37-1.13M21 9.349A2.989 2.989 0 0019.5 9c-.956 0-1.813-.44-2.37-1.13m0 0A3 3 0 0015 6H9a3 3 0 00-2.13.87m10.26 0A3 3 0 0015 6H9" />
              </svg>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-sm font-bold text-white">
                Written by the team at{" "}
                <Link href="/" className="text-[#22d65f] hover:underline">
                  Accurate Autoworks
                </Link>
              </p>
              <p className="mt-1 text-xs text-[#666] leading-relaxed">
                Stony Plain, Alberta. Commercial signs, fleet wraps, vehicle
                graphics, and auto customization for Parkland County businesses
                and drivers. Everything under one roof since 2023.
              </p>
              <div className="mt-3 flex items-center justify-center sm:justify-start gap-3">
                <a
                  href="tel:7808189904"
                  className="text-xs text-[#22d65f] hover:underline font-bold"
                >
                  780.818.9904
                </a>
                <span className="w-1 h-1 rounded-full bg-[#333]" />
                <Link
                  href="/contact/"
                  className="text-xs text-[#999] hover:text-[#22d65f] transition-colors"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Schema Markup: Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Commercial Signs & Vehicle Wraps in Stony Plain: Fleet, Storefront & Banners",
            description:
              "Fleet wraps, storefront signs, banners, and decals for Parkland County businesses. Design, print, and install at Accurate Autoworks, Stony Plain.",
            datePublished: publishDate,
            dateModified: modifiedDate,
            author: {
              "@type": "Organization",
              name: "Accurate Autoworks",
              url: "https://accurateautoworks.ca",
            },
            publisher: {
              "@type": "Organization",
              name: "Accurate Autoworks",
              url: "https://accurateautoworks.ca",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id":
                "https://www.accurateautoworks.ca/blog/commercial-signs-vehicle-wraps-stony-plain/",
            },
            keywords:
              "commercial signs Stony Plain, fleet wraps Alberta, storefront signs Spruce Grove, vehicle wraps Parkland County, vinyl banners Stony Plain",
          }),
        }}
      />

      {/* Schema Markup: LocalBusiness */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AutoRepair",
            name: "Accurate Autoworks",
            description:
              "Stony Plain's commercial sign and vehicle graphics shop offering fleet wraps, storefront signs, banners, decals, and full auto customization.",
            telephone: "+1-780-818-9904",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Boulder Boulevard",
              addressLocality: "Stony Plain",
              addressRegion: "AB",
              addressCountry: "CA",
            },
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
            ],
          }),
        }}
      />

      {/* Schema Markup: FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQ_DATA.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.a,
              },
            })),
          }),
        }}
      />
    </article>
  );
}

/* ──────────────────── Helper Components ──────────────────── */

function SectionHeading({
  number,
  highlight,
  children,
}: {
  number: string;
  highlight: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">
      <span className="flex-shrink-0 text-xs font-mono font-bold text-[#22d65f]/40 mt-2">
        {number}
      </span>
      <div>
        <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight leading-tight">
          {children}
          <span className="text-[#22d65f]">{highlight}</span>
        </h2>
        <div className="mt-3 h-px w-16 bg-gradient-to-r from-[#22d65f] to-transparent" />
      </div>
    </div>
  );
}

function PriorityBadge({ level, label }: { level: string; label: string }) {
  const colors: Record<string, string> = {
    essential: "bg-[#22d65f]/15 text-[#22d65f] border-[#22d65f]/30",
    recommended: "bg-white/5 text-white border-white/20",
    optional: "bg-[#666]/10 text-[#999] border-[#666]/20",
  };
  return (
    <span
      className={`inline-block px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full border ${
        colors[level] || colors.optional
      }`}
    >
      {label}
    </span>
  );
}

function SignRatingBadge({ level, label }: { level: string; label: string }) {
  const colors: Record<string, string> = {
    best: "bg-[#22d65f]/15 text-[#22d65f] border-[#22d65f]/30",
    good: "bg-white/5 text-white border-white/20",
    ok: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    poor: "bg-red-500/10 text-red-400 border-red-500/20",
  };
  return (
    <span
      className={`inline-block px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full border ${
        colors[level] || colors.good
      }`}
    >
      {label}
    </span>
  );
}

function Callout({
  variant,
  children,
}: {
  variant: "tip" | "info" | "warning";
  children: React.ReactNode;
}) {
  const styles = {
    tip: {
      border: "border-[#22d65f]/20",
      bg: "bg-[#22d65f]/[0.04]",
      icon: "text-[#22d65f]",
      iconBg: "bg-[#22d65f]/10",
    },
    info: {
      border: "border-blue-500/20",
      bg: "bg-blue-500/[0.04]",
      icon: "text-blue-400",
      iconBg: "bg-blue-500/10",
    },
    warning: {
      border: "border-amber-500/20",
      bg: "bg-amber-500/[0.04]",
      icon: "text-amber-400",
      iconBg: "bg-amber-500/10",
    },
  };
  const s = styles[variant];
  return (
    <div className={`mt-6 rounded-xl border ${s.border} ${s.bg} p-5 flex gap-4`}>
      <div className={`flex-shrink-0 w-8 h-8 rounded-lg ${s.iconBg} flex items-center justify-center`}>
        <svg className={`w-4 h-4 ${s.icon}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          {variant === "tip" ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5.002 5.002 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          ) : variant === "info" ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          )}
        </svg>
      </div>
      <p className="text-sm text-[#999] leading-relaxed">{children}</p>
    </div>
  );
}
