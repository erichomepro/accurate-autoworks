import Link from "next/link";
import type { Metadata } from "next";
import { BlogPostClient } from "./client";

export const metadata: Metadata = {
  title:
    "Window Tinting Stony Plain & Spruce Grove | Accurate Autoworks",
  description:
    "Window tinting Stony Plain & Spruce Grove: Alberta tint laws, ceramic vs carbon vs dyed, 2026 costs, UV protection, and expert installation.",
  alternates: {
    canonical:
      "https://www.accurateautoworks.ca/blog/window-tinting-stony-plain-spruce-grove/",
  },
  openGraph: {
    title:
      "Window Tinting Stony Plain & Spruce Grove | Accurate Autoworks",
    description:
      "Alberta tint laws, ceramic vs carbon vs dyed comparisons, real cost breakdowns, and why ceramic tint is worth it for Parkland County drivers.",
    type: "article",
    url: "https://www.accurateautoworks.ca/blog/window-tinting-stony-plain-spruce-grove/",
    locale: "en_CA",
    siteName: "Accurate Autoworks",
  },
};

const FAQ_DATA = [
  {
    q: "Is window tint legal in Alberta?",
    a: "Yes, window tint is legal in Alberta with specific restrictions. Front side windows must allow at least 50% visible light transmission (VLT). Rear side windows and the rear window have no VLT minimum — any darkness is permitted. The windshield may only have a non-reflective tint strip along the top (the visor band). Violating these rules can result in fines and a required fix-it order. At Accurate Autoworks, every installation is done to Alberta Traffic Safety Act standards.",
  },
  {
    q: "How long does window tint last in Alberta?",
    a: "Quality matters enormously here. Low-grade dyed tint can start bubbling and fading to purple within 2 to 3 Alberta winters due to the extreme freeze-thaw cycles and UV load. Carbon tint lasts 5 to 8 years. Ceramic tint, which is what we recommend and install at Accurate Autoworks, routinely lasts 10 or more years without fading, bubbling, or signal interference. A warranty-backed ceramic installation is a one-time investment.",
  },
  {
    q: "Can I roll my windows down after getting tint installed?",
    a: "No — not for 3 to 7 days. The adhesive needs time to cure fully to the glass. Rolling windows down too early causes the tint to peel away from the edges, which is not covered under warranty. The cure period is longer in cold weather, so if you get tint installed in spring or fall, plan to leave the windows up for at least a week to be safe.",
  },
  {
    q: "Does window tint affect my rear defroster?",
    a: "Not when installed correctly. Professional tint is cut to leave a thin border around the defroster lines, and the film itself does not block the electrical resistance that heats the glass. Cheap or improperly installed tint can sometimes interfere, but at Accurate Autoworks we use precision-cut film and installation techniques that preserve full defroster function.",
  },
  {
    q: "Does window tint help in winter?",
    a: "Yes, in several ways. Ceramic tint retains heat inside the cabin more effectively than bare glass, which means less work for your heater on cold mornings. It also reduces glare from low winter sun — a significant safety benefit when driving west on Highway 16A at 4:30 PM in December. The UV block remains active year-round, protecting your dash and upholstery from fading even on sunny winter days.",
  },
  {
    q: "What VLT percentage should I choose for my windows?",
    a: "For front side windows, Alberta law requires 50% VLT minimum, so we typically install 50% or 35% (with the understanding that 35% on fronts is technically non-compliant and the customer's risk). For rear windows, 20% and 35% are the most popular choices — dark enough for privacy and heat rejection, light enough to maintain good outward visibility. During your free consultation at Accurate Autoworks, we show you samples so you can see exactly what each shade looks like before committing.",
  },
  {
    q: "How long does the installation take?",
    a: "A full vehicle tint (all side windows plus rear) typically takes 2 to 4 hours depending on vehicle size and complexity. Trucks and SUVs with curved rear glass take longer than sedans. We recommend dropping off in the morning and picking up in the afternoon. After pickup, allow 3 to 7 days of cure time before rolling windows down.",
  },
  {
    q: "Can you tint my truck or SUV?",
    a: "Absolutely. Trucks, SUVs, and vans are some of our most common window tint jobs at Accurate Autoworks. Larger vehicles with extended cabs, panoramic rear windows, or complex curved glass may carry a small premium over standard passenger sedans. Call 780.818.9904 or visit our tinting page to get a quote for your specific vehicle.",
  },
];

const COST_DATA = [
  { service: "Front two windows only", cost: "$150 - $200", priority: "Popular", level: "recommended" },
  { service: "Full vehicle tint (sedan)", cost: "$300 - $450", priority: "Most Common", level: "essential" },
  { service: "Full vehicle tint (truck / SUV)", cost: "$350 - $600", priority: "Most Common", level: "essential" },
  { service: "Truck / SUV size premium", cost: "$50 - $100 extra", priority: "Add-on", level: "optional" },
  { service: "Ceramic upgrade (vs carbon)", cost: "$50 - $150 extra", priority: "Recommended", level: "recommended" },
  { service: "Tint removal (old film)", cost: "$100 - $200", priority: "If replacing", level: "optional" },
];

const TINT_TYPES = [
  {
    name: "Dyed",
    cost: "$",
    heatRejection: "20 - 30%",
    uvBlock: "80 - 90%",
    lifespan: "2 - 5 years",
    albertaRating: "Poor",
    ratingLevel: "poor",
    notes: "Fades to purple, bubbles in freeze-thaw. Avoid for Alberta climates.",
  },
  {
    name: "Carbon",
    cost: "$$",
    heatRejection: "40 - 50%",
    uvBlock: "99%",
    lifespan: "5 - 8 years",
    albertaRating: "Good",
    ratingLevel: "good",
    notes: "No purple fade, better heat rejection. Solid mid-range choice.",
  },
  {
    name: "Ceramic",
    cost: "$$$",
    heatRejection: "50 - 70%",
    uvBlock: "99%+",
    lifespan: "10+ years",
    albertaRating: "Best",
    ratingLevel: "best",
    notes: "No signal interference, best heat block, won't fade. Our recommendation for Alberta.",
    recommended: true,
  },
];

export default function WindowTintingGuide() {
  const publishDate = "2026-04-02";
  const modifiedDate = "2026-04-02";

  return (
    <article className="pb-20">
      <BlogPostClient />

      {/* Hero Section */}
      <header className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#22d65f]/5 via-transparent to-transparent" />
        <div className="absolute inset-0 hero-stripe opacity-50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#22d65f]/[0.03] rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-3 px-5 py-2 mb-8 text-xs font-bold uppercase tracking-[3px] text-[#22d65f] border border-[#22d65f]/30 rounded-full backdrop-blur-sm bg-[#22d65f]/5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#22d65f] animate-pulse" />
            Window Tinting Guide
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black uppercase tracking-tight leading-[1.05]">
            Window Tinting in{" "}
            <span className="text-[#22d65f] glow-accent">
              Stony Plain &amp; Spruce Grove
            </span>
            : Alberta&apos;s Complete 2026 Guide
          </h1>

          <p className="mt-8 text-lg sm:text-xl text-[#999] max-w-2xl mx-auto leading-relaxed">
            Alberta tint laws explained, ceramic vs carbon vs dyed compared,
            real cost breakdowns, and why the right tint is one of the smartest
            upgrades you can make for an Alberta vehicle.
          </p>

          <div className="mt-6 flex items-center justify-center gap-6 text-xs text-[#666] uppercase tracking-wider">
            <div className="flex items-center gap-2">
              <svg className="w-3.5 h-3.5 text-[#22d65f]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <time dateTime={publishDate}>April 2, 2026</time>
            </div>
            <span className="w-1 h-1 rounded-full bg-[#333]" />
            <div className="flex items-center gap-2">
              <svg className="w-3.5 h-3.5 text-[#22d65f]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>14 min read</span>
            </div>
          </div>

          {/* Decorative bottom line */}
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
            Anyone who has driven west on Highway 16A toward Stony Plain at
            sunset knows the problem. The low Alberta sun hits your windshield
            at a flat angle, your visor does nothing, and you are essentially
            driving blind for ten minutes. Add in the scorching summer UV that
            fades your dash in a single season, the lack of privacy when you are
            parked anywhere near the Acheson industrial strip, and the heat that
            builds in a dark-interior truck on a plus-35 July day — and window
            tinting stops being a cosmetic choice and becomes a practical one.
          </p>
          <p className="mt-4 text-[#ccc] leading-relaxed text-base sm:text-lg">
            This guide covers everything Stony Plain, Spruce Grove, and Parkland
            County drivers need to know: Alberta tinting laws, the real
            differences between dyed, carbon, and ceramic tint, what it costs at
            a local shop in 2026, and what the process looks like when you bring
            your vehicle into{" "}
            <Link href="/tinting/" className="text-[#22d65f] hover:underline">
              Accurate Autoworks for a professional window tint
            </Link>
            .
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
                { href: "#alberta-laws", label: "Alberta Window Tinting Laws" },
                { href: "#tint-types", label: "Types of Window Tint Compared" },
                { href: "#cost-guide", label: "Window Tinting Cost in Stony Plain" },
                { href: "#alberta-benefits", label: "Benefits Specific to Alberta" },
                { href: "#ceramic-worth-it", label: "Why Ceramic Tint Is Worth It" },
                { href: "#what-to-expect", label: "What to Expect at Accurate Autoworks" },
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

        {/* Section 1: Alberta Laws */}
        <section id="alberta-laws" className="mt-16 scroll-mt-24">
          <SectionHeading number="01" highlight="Laws">
            Alberta Window Tinting{" "}
          </SectionHeading>
          <p className="mt-6 text-[#ccc] leading-relaxed text-base">
            Before you book a tint, understand the rules. Alberta regulates
            window tint under the{" "}
            <a
              href="https://www.alberta.ca/traffic-safety-act"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#22d65f] hover:underline"
            >
              Alberta Traffic Safety Act
            </a>{" "}
            and the Vehicle Equipment Regulation. The key measurement is Visible
            Light Transmission, or VLT — the percentage of visible light that
            passes through the glass and tint combined.
          </p>

          <div className="mt-8 space-y-4">
            {[
              {
                window: "Front Side Windows (driver and passenger)",
                rule: "Minimum 50% VLT",
                detail: "Combined glass + tint must let through at least 50% of visible light. Most factory glass already absorbs 5 to 15%, which limits how dark your tint can be on these windows without going non-compliant.",
                status: "restricted",
              },
              {
                window: "Rear Side Windows",
                rule: "No VLT minimum",
                detail: "You can go as dark as you want — 5%, 20%, 35%, or anything in between. Full limo tint is legal on rear side windows in Alberta.",
                status: "open",
              },
              {
                window: "Rear Window",
                rule: "No VLT minimum",
                detail: "Any darkness is legal. If your rear window is tinted very dark, Alberta requires you to have functioning side mirrors on both sides of the vehicle.",
                status: "open",
              },
              {
                window: "Windshield",
                rule: "Visor strip only",
                detail: "Only a non-reflective tint strip across the top of the windshield is allowed. The strip must not extend below the top of the steering wheel at the manufacturer's AS-1 line.",
                status: "restricted",
              },
            ].map((item) => (
              <div
                key={item.window}
                className={`relative rounded-2xl overflow-hidden p-6 sm:p-7 ${
                  item.status === "restricted"
                    ? "bg-amber-500/[0.04] border border-amber-500/20"
                    : "card-gradient"
                }`}
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-sm font-bold text-white">{item.window}</h3>
                  <span
                    className={`flex-shrink-0 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${
                      item.status === "restricted"
                        ? "text-amber-400 border-amber-500/30 bg-amber-500/10"
                        : "text-[#22d65f] border-[#22d65f]/30 bg-[#22d65f]/10"
                    }`}
                  >
                    {item.rule}
                  </span>
                </div>
                <p className="text-sm text-[#999] leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>

          <Callout variant="warning">
            <strong className="text-white">Enforcement and penalties:</strong>{" "}
            Non-compliant tint can result in a fine and a fix-it order requiring
            you to remove the tint before your next inspection. RCMP and
            municipal police in the Edmonton West area do check tint darkness
            during traffic stops — especially on front side windows. At{" "}
            <Link href="/tinting/" className="text-[#22d65f] hover:underline">
              Accurate Autoworks
            </Link>
            , every installation is measured and confirmed compliant before we
            hand you the keys.
          </Callout>
        </section>

        {/* Section 2: Tint Types */}
        <section id="tint-types" className="mt-16 scroll-mt-24">
          <SectionHeading number="02" highlight="Compared">
            Types of Window Tint{" "}
          </SectionHeading>
          <p className="mt-6 text-[#ccc] leading-relaxed text-base">
            Not all window tint is created equal. There are three main
            technologies on the market in 2026, and the differences in
            performance — especially in an Alberta climate — are dramatic. Here
            is a direct comparison of all three. For deep context on ceramic
            film technology,{" "}
            <a
              href="https://www.consumerreports.org/cars/car-maintenance/window-tint-guide/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#22d65f] hover:underline"
            >
              Consumer Reports has a useful overview of ceramic film performance
            </a>
            .
          </p>

          {/* Desktop table */}
          <div className="mt-8 hidden sm:block rounded-2xl overflow-hidden border border-[#2a2a2a]">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#22d65f]/[0.06]">
                  {["Type", "Cost", "Heat Rejection", "UV Block", "Lifespan", "Alberta Rating"].map((h) => (
                    <th key={h} className="text-left py-4 px-5 text-xs font-bold uppercase tracking-widest text-[#22d65f]">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-[#ccc]">
                {TINT_TYPES.map((row, i) => (
                  <tr
                    key={row.name}
                    className={`border-t border-[#1e1e1e] transition-colors hover:bg-[#22d65f]/[0.03] ${
                      row.recommended ? "bg-[#22d65f]/[0.04]" : i % 2 === 0 ? "bg-[#141414]" : "bg-[#0f0f0f]"
                    }`}
                  >
                    <td className="py-4 px-5 font-bold text-white">
                      {row.name}
                      {row.recommended && (
                        <span className="ml-2 text-[10px] font-bold uppercase tracking-widest text-[#22d65f] px-2 py-0.5 rounded-full bg-[#22d65f]/15">
                          Recommended
                        </span>
                      )}
                    </td>
                    <td className="py-4 px-5 font-mono font-bold">{row.cost}</td>
                    <td className="py-4 px-5">{row.heatRejection}</td>
                    <td className="py-4 px-5">{row.uvBlock}</td>
                    <td className="py-4 px-5">{row.lifespan}</td>
                    <td className="py-4 px-5">
                      <TintRatingBadge level={row.ratingLevel} label={row.albertaRating} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="mt-8 sm:hidden space-y-4">
            {TINT_TYPES.map((row) => (
              <div
                key={row.name}
                className={`rounded-2xl p-5 border ${
                  row.recommended
                    ? "border-[#22d65f]/30 bg-[#22d65f]/[0.06]"
                    : "card-gradient"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-bold text-white text-sm">{row.name}</span>
                  <TintRatingBadge level={row.ratingLevel} label={row.albertaRating} />
                </div>
                {row.recommended && (
                  <div className="mb-3 text-[10px] font-bold uppercase tracking-widest text-[#22d65f]">
                    Our Recommendation
                  </div>
                )}
                <div className="grid grid-cols-2 gap-2 text-xs text-[#999]">
                  <span>Heat rejection: <strong className="text-white">{row.heatRejection}</strong></span>
                  <span>UV block: <strong className="text-white">{row.uvBlock}</strong></span>
                  <span>Lifespan: <strong className="text-white">{row.lifespan}</strong></span>
                  <span>Cost: <strong className="text-white">{row.cost}</strong></span>
                </div>
                <p className="mt-3 text-xs text-[#666] leading-relaxed">{row.notes}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Cost Guide */}
        <section id="cost-guide" className="mt-16 scroll-mt-24">
          <SectionHeading number="03" highlight="Cost in Stony Plain">
            Window Tinting{" "}
          </SectionHeading>
          <p className="mt-6 text-[#ccc] leading-relaxed text-base">
            Here is a realistic breakdown of window tinting prices at a quality
            shop in the Stony Plain and Spruce Grove area in 2026. These are
            typical prices for professional installation with warranted film —
            not the self-stick kits from the auto parts store.
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
            * Prices are approximate for the Stony Plain / Spruce Grove area as
            of 2026. Actual costs vary based on vehicle size, glass complexity,
            and film type selected. Call 780.818.9904 for an exact quote.
          </p>

          <Callout variant="tip">
            <strong className="text-white">Getting the most value:</strong> If
            you are already coming in for{" "}
            <Link href="/detailing/" className="text-[#22d65f] hover:underline">
              a detail
            </Link>{" "}
            or{" "}
            <Link href="/ppf/" className="text-[#22d65f] hover:underline">
              paint protection film
            </Link>
            , bundling window tint on the same visit often saves you on labour.
            Ask about combined booking discounts when you call{" "}
            <Link href="/tinting/" className="text-[#22d65f] hover:underline">
              Accurate Autoworks
            </Link>
            .
          </Callout>
        </section>

        {/* Section 4: Alberta Benefits */}
        <section id="alberta-benefits" className="mt-16 scroll-mt-24">
          <SectionHeading number="04" highlight="Alberta">
            Benefits Specific to{" "}
          </SectionHeading>
          <p className="mt-6 text-[#ccc] leading-relaxed text-base">
            Window tint is often marketed as a cosmetic upgrade, but for Alberta
            drivers there are four concrete, practical reasons it pays for itself.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            {[
              {
                title: "UV Protection",
                icon: "sun",
                detail:
                  "Alberta sits at a high elevation with long summer days and intense solar radiation. According to Health Canada, UV radiation exposure is a leading cause of skin cancer — and you accumulate UV dose during every drive. Ceramic tint blocks 99%+ of UVA and UVB rays. Your passengers, your skin, and your interior materials all benefit year-round.",
                externalLink: {
                  href: "https://www.canada.ca/en/health-canada/services/sun-safety.html",
                  label: "Health Canada sun safety data",
                },
              },
              {
                title: "Heat Rejection (+35°C Summers)",
                icon: "thermometer",
                detail:
                  "A dark-interior truck parked in the Acheson industrial area on a July afternoon can hit 70°C inside. Quality ceramic tint rejects 50 to 70% of solar heat, making the cabin significantly more comfortable and reducing the load on your air conditioning. Over a full summer, that translates to real fuel savings.",
              },
              {
                title: "Privacy and Theft Deterrence",
                icon: "shield",
                detail:
                  "Stony Plain and the surrounding Acheson industrial corridor see a higher-than-average rate of vehicle break-ins targeting tools, electronics, and gear left in plain sight. Dark rear windows remove the visual invitation. What thieves cannot see, they are less likely to smash for.",
              },
              {
                title: "Glare Reduction",
                icon: "eye",
                detail:
                  "Driving west on Highway 16A or the Yellowhead at dusk is genuinely dangerous without proper glare management. Even a 35% tint on your rear side windows and a clean windshield significantly reduces the reflected and ambient glare inside the cabin, giving you better contrast and reaction time.",
              },
            ].map((benefit) => (
              <div
                key={benefit.title}
                className="card-gradient rounded-2xl p-6 group hover:border-[#22d65f]/50 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-[#22d65f]/10 flex items-center justify-center mb-4 group-hover:bg-[#22d65f]/20 transition-colors">
                  <svg className="w-5 h-5 text-[#22d65f]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    {benefit.icon === "sun" && (
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l.707.707M6.343 6.343l.707.707M12 7a5 5 0 100 10 5 5 0 000-10z" />
                    )}
                    {benefit.icon === "thermometer" && (
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                    )}
                    {benefit.icon === "shield" && (
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    )}
                    {benefit.icon === "eye" && (
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    )}
                  </svg>
                </div>
                <h3 className="text-sm font-bold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-xs text-[#999] leading-relaxed">
                  {benefit.detail}
                </p>
                {benefit.externalLink && (
                  <a
                    href={benefit.externalLink.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-xs text-[#22d65f] hover:underline"
                  >
                    {benefit.externalLink.label} &rarr;
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Ceramic Worth It */}
        <section id="ceramic-worth-it" className="mt-16 scroll-mt-24">
          <SectionHeading number="05" highlight="Worth It in Alberta">
            Why Ceramic Tint Is{" "}
          </SectionHeading>
          <p className="mt-6 text-[#ccc] leading-relaxed text-base">
            Ceramic tint costs more upfront than dyed or carbon film, but the
            total cost of ownership over the life of your vehicle makes it the
            clear winner for Alberta drivers. Here is why.
          </p>

          <div className="mt-8 space-y-5">
            <div className="card-gradient rounded-2xl p-6 sm:p-8">
              <h3 className="text-sm font-bold uppercase tracking-wide text-white mb-3">
                Cheap Dyed Tint Turns Purple in 2 to 3 Alberta Winters
              </h3>
              <p className="text-sm text-[#999] leading-relaxed">
                The dye in low-cost tint film breaks down under UV exposure and
                extreme temperature swings — exactly the conditions Alberta
                delivers every year. After a couple of winters, you get that
                unmistakable purple hue on the windows, bubbling at the edges,
                and peeling around the corners. That means paying for removal
                (add $100 to $200) and reinstallation — costs that quickly
                exceed what you would have spent on ceramic from the start.
              </p>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-[#22d65f]/30 bg-gradient-to-br from-[#22d65f]/[0.06] to-[#141414]">
              <div className="absolute top-0 right-0 px-3 py-1 bg-[#22d65f] text-black text-[10px] font-bold uppercase tracking-widest rounded-bl-lg">
                Key Advantage
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="text-sm font-bold uppercase tracking-wide text-white mb-3">
                  Ceramic Maintains True Black Colour for 10+ Years
                </h3>
                <p className="text-sm text-[#999] leading-relaxed">
                  Ceramic film uses nano-ceramic particles instead of dye,
                  which means there is nothing to fade or break down. The deep,
                  clean colour you get on day one is the same colour you will
                  have in year ten. No purple tinge, no bubbling, no peeling
                  edges. That stability alone justifies the price difference for
                  anyone planning to keep their vehicle more than three years.
                </p>
              </div>
            </div>

            <div className="card-gradient rounded-2xl p-6 sm:p-8">
              <h3 className="text-sm font-bold uppercase tracking-wide text-white mb-3">
                Blocks Infrared Heat, Not Just Visible Light
              </h3>
              <p className="text-sm text-[#999] leading-relaxed">
                This is the most misunderstood advantage of ceramic tint. A
                dark dyed film blocks visible light but lets infrared radiation
                through — the infrared is what you feel as heat. Ceramic film
                blocks up to 70% of infrared heat even in a relatively light
                shade, so you can run a 50% VLT-compliant front window tint
                that still dramatically reduces heat buildup. You stay legal
                and cool at the same time.
              </p>
            </div>

            <div className="card-gradient rounded-2xl p-6 sm:p-8">
              <h3 className="text-sm font-bold uppercase tracking-wide text-white mb-3">
                No Signal Interference — GPS, Radio, Toll Tags Work Fine
              </h3>
              <p className="text-sm text-[#999] leading-relaxed">
                Metalized tint films — popular in the 2000s and still sold at
                the low end of the market — interfere with GPS signals, radio
                reception, and RFID transponders like highway toll tags.
                Ceramic film has zero metal content, so your GPS locks on
                normally, your radio sounds the same, and your phone stays
                connected. For trucks with GPS fleet tracking in the Acheson
                area, this is a meaningful practical benefit.
              </p>
            </div>
          </div>

          <Callout variant="info">
            Want to see and feel the difference? At{" "}
            <Link href="/tinting/" className="text-[#22d65f] hover:underline">
              Accurate Autoworks
            </Link>
            , we have sample boards of every shade and type so you can hold the
            film up to light, feel the heat difference, and choose your shade
            with full confidence before we touch your vehicle. No surprises.
            Pair your tint with{" "}
            <Link href="/ppf/" className="text-[#22d65f] hover:underline">
              paint protection film on the front end
            </Link>{" "}
            for complete coverage from both UV and physical damage.
          </Callout>
        </section>

        {/* Section 6: What to Expect */}
        <section id="what-to-expect" className="mt-16 scroll-mt-24">
          <SectionHeading number="06" highlight="at Accurate Autoworks">
            What to Expect{" "}
          </SectionHeading>
          <p className="mt-6 text-[#ccc] leading-relaxed text-base">
            Here is what the process looks like when you bring your vehicle into
            Accurate Autoworks on Boulder Boulevard in Stony Plain for a window
            tint installation.
          </p>

          <div className="mt-8 space-y-4">
            {[
              {
                step: "01",
                title: "Free Consultation",
                description:
                  "We start by reviewing your vehicle, discussing Alberta's legal VLT requirements for each window, and showing you our sample boards. You see every shade option in natural light before making a decision. There is no pressure to book on the spot — we want you confident in your choice.",
              },
              {
                step: "02",
                title: "Film Selection",
                description:
                  "Choose your shade (percentage VLT) and film type. We carry dyed, carbon, and ceramic films and will give you an honest recommendation based on your vehicle, budget, and how long you plan to keep it. For most Alberta drivers, ceramic at 35% on rears and compliant shade on fronts is the sweet spot.",
              },
              {
                step: "03",
                title: "Professional Installation",
                description:
                  "Your vehicle goes into our climate-controlled installation bay. Glass is cleaned thoroughly, film is precision-cut using computer-aided patterns for your exact vehicle (no hand-cutting guesswork), and each piece is applied with a slip solution, squeegeed flat, and heat-shrunk on curved glass. The entire process takes 2 to 4 hours depending on vehicle size.",
              },
              {
                step: "04",
                title: "Cure Time: 3 to 7 Days",
                description:
                  "After installation you take your vehicle home, but the tint needs time to cure. During this period: do not roll your windows down, do not clean the glass from the inside, and expect to see small water pockets or haze — these are normal and disappear as the adhesive cures. In cold weather (below 10°C), allow the full 7 days.",
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
            <strong className="text-white">Book your free consultation:</strong>{" "}
            Call{" "}
            <a href="tel:7808189904" className="text-[#22d65f] hover:underline font-bold">
              780.818.9904
            </a>{" "}
            or{" "}
            <Link href="/contact/" className="text-[#22d65f] hover:underline">
              submit a request online
            </Link>
            . Accurate Autoworks is on Boulder Boulevard in Stony Plain, a
            short drive from Spruce Grove, Acheson, and the Yellowhead corridor.
            We also handle{" "}
            <Link href="/detailing/" className="text-[#22d65f] hover:underline">
              full vehicle detailing
            </Link>{" "}
            if you want to arrive with perfectly clean glass.
          </Callout>
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
              Free Consultation
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight">
              Ready to Tint Your{" "}
              <span className="text-[#22d65f] glow-accent">Windows?</span>
            </h2>
            <p className="mt-4 text-[#999] max-w-xl mx-auto leading-relaxed">
              Window tint, PPF, detailing, wraps — Accurate Autoworks handles
              it all under one roof in Stony Plain. Serving Spruce Grove,
              Parkland County, Acheson, and Edmonton West. Free consultation,
              no obligation.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Book Your Tint Consultation
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
                Stony Plain, Alberta. Helping local drivers maintain and
                customize their vehicles since 2023. Tinting, wraps, detailing,
                PPF, and commercial print under one roof.
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
              "Window Tinting in Stony Plain & Spruce Grove: Alberta's Complete 2026 Guide",
            description:
              "Everything Alberta drivers need to know about window tinting — laws, costs, ceramic vs carbon vs dyed. Accurate Autoworks, Stony Plain.",
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
                "https://www.accurateautoworks.ca/blog/window-tinting-stony-plain-spruce-grove/",
            },
            keywords:
              "window tinting stony plain, ceramic window tint spruce grove, window tint alberta laws, window tint near me stony plain, car window tinting cost alberta",
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
              "Stony Plain's premier auto customization shop offering window tinting, vinyl wraps, car detailing, PPF, commercial printing and signage.",
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
    essential:
      "bg-[#22d65f]/15 text-[#22d65f] border-[#22d65f]/30",
    recommended:
      "bg-white/5 text-white border-white/20",
    optional:
      "bg-[#666]/10 text-[#999] border-[#666]/20",
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

function TintRatingBadge({ level, label }: { level: string; label: string }) {
  const colors: Record<string, string> = {
    best: "bg-[#22d65f]/15 text-[#22d65f] border-[#22d65f]/30",
    good: "bg-white/5 text-white border-white/20",
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
