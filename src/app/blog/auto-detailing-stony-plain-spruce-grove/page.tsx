import Link from "next/link";
import type { Metadata } from "next";
import { BlogPostClient } from "./client";

export const metadata: Metadata = {
  title: "Auto Detailing Stony Plain & Spruce Grove | Accurate Autoworks",
  description:
    "Auto detailing in Stony Plain & Spruce Grove: full menu, 2026 Alberta pricing, interior vs exterior explained, and what to expect at Accurate Autoworks.",
  alternates: {
    canonical:
      "https://www.accurateautoworks.ca/blog/auto-detailing-stony-plain-spruce-grove/",
  },
  openGraph: {
    title: "Auto Detailing Stony Plain & Spruce Grove | Accurate Autoworks",
    description:
      "Full detailing menu, realistic 2026 Alberta pricing, and why Alberta vehicles need professional detailing more than drivers in most of Canada.",
    type: "article",
    url: "https://www.accurateautoworks.ca/blog/auto-detailing-stony-plain-spruce-grove/",
    locale: "en_CA",
    siteName: "Accurate Autoworks",
  },
};

const FAQ_DATA = [
  {
    q: "What is the difference between a car wash and a full detail?",
    a: "A car wash removes loose surface dirt with water and soap — it takes 5 to 15 minutes and leaves contaminants like road tar, iron fallout, tree sap, and embedded grit untouched. A full detail is a multi-hour restoration process: the paint is decontaminated with a clay bar, interior surfaces are deep-cleaned rather than wiped down, leather is conditioned, carpets are shampooed, and a protective wax or sealant is applied. At Accurate Autoworks in Stony Plain, a full detail restores a vehicle to near-showroom condition, not just cosmetically clean.",
  },
  {
    q: "How long does a full detail take?",
    a: "A full interior and exterior detail at Accurate Autoworks typically takes 4 to 8 hours depending on vehicle size, current condition, and the service package selected. A truck or SUV that has accumulated a winter's worth of salt, mud, and pet hair will take longer than a clean sedan. Premium packages that include machine polishing add another 2 to 4 hours. We recommend dropping your vehicle off in the morning for any full detail appointment. Call 780.818.9904 to book and we will give you a realistic time estimate based on your vehicle.",
  },
  {
    q: "How often should I detail my vehicle in Alberta?",
    a: "For Alberta drivers, a full detail twice per year — typically once in spring after road salt season and once in fall before winter — is the minimum we recommend. Spring detailing removes the salt, sand, and grime that has worked into every seam and crevice over winter. Fall detailing protects surfaces before they are exposed to another six months of abuse. Monthly quick details or professional washes in between help maintain the condition. Vehicles driven on Parkland County gravel roads or the Acheson industrial area may benefit from quarterly attention.",
  },
  {
    q: "What is included in an interior detail?",
    a: "A full interior detail at Accurate Autoworks includes thorough vacuuming of all surfaces (seats, carpets, mats, trunk), carpet and upholstery shampooing, leather seat cleaning and conditioning, dashboard and console cleaning with appropriate protectant, door jamb cleaning, glass cleaning from the inside, air vent cleaning, and odour treatment as needed. Stubborn stains — coffee spills, mud, pet accidents — receive targeted treatment. The goal is a cabin that looks, smells, and feels as clean as it did when the vehicle was new.",
  },
  {
    q: "Can detailing remove scratches from my paint?",
    a: "Light surface scratches and swirl marks in the clear coat can be significantly reduced or eliminated through machine polishing — a paint correction service included in our premium detail package. Scratches that penetrate through the clear coat to the colour coat or primer cannot be removed by detailing and require a body shop respray. At Accurate Autoworks, we assess your paint before recommending a service so you know exactly what to expect. For scratch prevention going forward, pairing a detail with paint protection film or ceramic coating is the smart move.",
  },
  {
    q: "Is detailing worth it before selling my vehicle?",
    a: "Absolutely. A professionally detailed vehicle consistently commands a higher asking price and sells faster than the same vehicle in poor cosmetic condition. Studies from the automotive remarketing industry consistently show that clean, well-presented vehicles achieve 5 to 15% higher sale prices than identical vehicles that appear neglected. At Accurate Autoworks, we offer pre-sale detail packages specifically designed to maximize your vehicle's visual appeal. Call 780.818.9904 — for what a detail costs, the return on investment when selling is almost always positive.",
  },
  {
    q: "Do you detail trucks and SUVs?",
    a: "Yes — trucks, SUVs, and vans are some of our most common detailing jobs at Accurate Autoworks. Larger vehicles carry a small premium over standard passenger sedans due to the additional surface area, larger cargo areas, and the fact that trucks typically accumulate more grime in harder-to-reach areas. Extended cabs, crew cabs with rear seat areas, and trucks with bed liners or tool boxes all add time. Give us a call at 780.818.9904 with your vehicle details and we will give you an accurate quote.",
  },
  {
    q: "Can I bundle detailing with other services at Accurate Autoworks?",
    a: "Yes, and this is one of the best ways to maximize your visit. Detailing before a window tint installation ensures clean glass for a flawless tint bond. Detailing before a ceramic coating application is actually mandatory — the paint surface must be fully decontaminated and polished before ceramic goes on. Similarly, detailing after a vinyl wrap removal restores the underlying paint. Accurate Autoworks handles tinting, wraps, PPF, ceramic coating, and detailing under one roof, so bundled appointments are easy to schedule. Ask about combined service pricing when you book.",
  },
  {
    q: "How do I maintain my vehicle between detail appointments?",
    a: "Between professional details, wash your vehicle with a pH-neutral car wash soap (not dish soap) using a microfibre wash mitt rather than a brush or sponge, which introduce swirl marks. Rinse thoroughly and dry with a microfibre towel to prevent water spots. Avoid automatic brush washes — the brushes drag contaminants across your paint. In winter, rinse salt accumulation off your undercarriage regularly, particularly around wheel wells. The International Detailing Association recommends monthly hand washing as the baseline for paint preservation in harsh-climate regions.",
  },
  {
    q: "Can detailing remove pet hair, smoke odour, or mildew smell from my vehicle?",
    a: "Yes to all three, though the severity of the issue affects the approach and outcome. Pet hair is removed during the deep vacuuming stage using specialized tools that pull embedded hair from carpet fibres and seat seams. Smoke and mildew odours require ozone treatment or enzyme-based odour eliminators applied to all interior surfaces — simple air fresheners mask odours, they do not eliminate them. Severe mildew (from flooding or a persistent leak) may require removal of carpeting and treatment of the subfloor. Accurate Autoworks will assess the situation honestly before booking so you know what level of service is needed.",
  },
];

const COST_DATA = [
  { service: "Express wash & dry", cost: "$50 – $80", priority: "Entry Level", level: "optional" },
  { service: "Exterior detail — sedan", cost: "$150 – $250", priority: "Popular", level: "recommended" },
  { service: "Exterior detail — truck / SUV", cost: "$200 – $300", priority: "Popular", level: "recommended" },
  { service: "Interior detail only", cost: "$150 – $250", priority: "Popular", level: "recommended" },
  { service: "Full detail combo — sedan", cost: "$250 – $400", priority: "Best Value", level: "essential" },
  { service: "Full detail combo — truck / SUV", cost: "$300 – $500", priority: "Best Value", level: "essential" },
  { service: "Premium detail + machine polish", cost: "$400 – $700", priority: "Pre-Ceramic / Pre-Sale", level: "recommended" },
  { service: "Engine bay clean (add-on)", cost: "$75 – $150", priority: "Add-on", level: "optional" },
];

const DETAIL_PACKAGES = [
  {
    name: "Express Wash & Dry",
    price: "$50 – $80",
    interior: false,
    exterior: true,
    clayBar: false,
    machinePolish: false,
    protection: "None",
    bestFor: "Quick maintenance between appointments",
    level: "entry",
  },
  {
    name: "Exterior Detail",
    price: "$150 – $250",
    interior: false,
    exterior: true,
    clayBar: true,
    machinePolish: false,
    protection: "Hand wax or paint sealant",
    bestFor: "Paint care without interior work",
    level: "standard",
  },
  {
    name: "Interior Detail",
    price: "$150 – $250",
    interior: true,
    exterior: false,
    clayBar: false,
    machinePolish: false,
    protection: "Leather conditioner / fabric protector",
    bestFor: "Deep cabin clean only",
    level: "standard",
  },
  {
    name: "Full Detail (Combo)",
    price: "$250 – $400",
    interior: true,
    exterior: true,
    clayBar: true,
    machinePolish: false,
    protection: "Hand wax or sealant",
    bestFor: "Complete refresh — most popular choice",
    level: "recommended",
    recommended: true,
  },
  {
    name: "Premium Detail + Machine Polish",
    price: "$400 – $700",
    interior: true,
    exterior: true,
    clayBar: true,
    machinePolish: true,
    protection: "Carnauba wax",
    bestFor: "Pre-ceramic coat prep or pre-sale max value",
    level: "premium",
  },
];

export default function AutoDetailingStonyPlain() {
  const publishDate = "2026-05-01";
  const modifiedDate = "2026-05-01";

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
            Auto Detailing Guide
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black uppercase tracking-tight leading-[1.05]">
            Auto Detailing in{" "}
            <span className="text-[#22d65f] glow-accent">
              Stony Plain &amp; Spruce Grove
            </span>
            : Full Menu, Prices &amp; What to Expect
          </h1>

          <p className="mt-8 text-lg sm:text-xl text-[#999] max-w-2xl mx-auto leading-relaxed">
            Everything Parkland County drivers need to know — what a real detail
            includes, how much it costs in 2026, and why Alberta roads make
            professional detailing a necessity, not a luxury.
          </p>

          <div className="mt-6 flex items-center justify-center gap-6 text-xs text-[#666] uppercase tracking-wider">
            <div className="flex items-center gap-2">
              <svg className="w-3.5 h-3.5 text-[#22d65f]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <time dateTime={publishDate}>May 1, 2026</time>
            </div>
            <span className="w-1 h-1 rounded-full bg-[#333]" />
            <div className="flex items-center gap-2">
              <svg className="w-3.5 h-3.5 text-[#22d65f]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>15 min read</span>
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
            Drive anything in Stony Plain, Spruce Grove, or the Parkland County
            area for twelve months and your vehicle will tell the story. Road
            salt embedded in every seam from November to April. Gravel road
            chips pitting the front bumper and lower doors. Bug splatter baked
            onto the hood through July and August. Fine dust from the Acheson
            industrial corridor working its way into every vent and upholstery
            fibre. A standard car wash removes the loose stuff on the surface.
            It does nothing about the rest.
          </p>
          <p className="mt-4 text-[#ccc] leading-relaxed text-base sm:text-lg">
            Professional auto detailing is what actually resets a vehicle.
            This guide breaks down exactly what a detail is, what each package
            covers, what it costs at a quality shop in this area in 2026, and
            what the process looks like when you bring your vehicle to{" "}
            <Link href="/detailing/" className="text-[#22d65f] hover:underline">
              Accurate Autoworks on Boulder Boulevard in Stony Plain
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
                { href: "#wash-vs-detail", label: "Car Wash vs. Professional Detail" },
                { href: "#packages", label: "Full Detailing Menu & Packages" },
                { href: "#cost-guide", label: "Detailing Costs in Stony Plain (2026)" },
                { href: "#interior-exterior", label: "Interior vs. Exterior — What Each Covers" },
                { href: "#alberta-reasons", label: "Why Alberta Vehicles Need It" },
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

        {/* Section 1: Wash vs Detail */}
        <section id="wash-vs-detail" className="mt-16 scroll-mt-24">
          <SectionHeading number="01" highlight="Detail">
            Car Wash vs. Professional{" "}
          </SectionHeading>
          <p className="mt-6 text-[#ccc] leading-relaxed text-base">
            Most people understand that a detail is more thorough than a wash,
            but the actual difference in scope is larger than most realize. Here
            is a direct comparison.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            <div className="card-gradient rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                  <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h3 className="text-sm font-bold text-white uppercase tracking-wide">Automatic Car Wash</h3>
              </div>
              <ul className="space-y-2 text-sm text-[#999]">
                {[
                  "Removes loose surface dirt only",
                  "Brush rollers drag abrasive grit across paint",
                  "Leaves road tar, iron fallout, water spots",
                  "No interior cleaning whatsoever",
                  "5 to 10 minutes total",
                  "No paint protection applied",
                  "No clay bar or decontamination",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="flex-shrink-0 mt-1 w-4 h-4 rounded-full border border-red-500/30 flex items-center justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-[#22d65f]/30 bg-[#22d65f]/[0.04] p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-[#22d65f]/10 flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#22d65f]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-sm font-bold text-white uppercase tracking-wide">Professional Detail</h3>
              </div>
              <ul className="space-y-2 text-sm text-[#999]">
                {[
                  "Full paint decontamination (clay bar + iron remover)",
                  "Hand wash with pH-neutral soap and microfibre",
                  "Interior deep-cleaned: vacuumed, shampooed, dressed",
                  "Leather cleaned and conditioned",
                  "Glass cleaned inside and out",
                  "Wax, sealant, or ceramic coating applied",
                  "4 to 8 hours of skilled labour",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="flex-shrink-0 mt-1 w-4 h-4 rounded-full border border-[#22d65f]/30 flex items-center justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#22d65f]" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-6 text-[#ccc] leading-relaxed text-base">
            Automatic brush washes are one of the most common sources of paint
            swirl marks on vehicles. The bristles pick up grit from previous
            cars and drag it across your clear coat, leaving fine circular
            scratches that dull the paint over time. For anyone who cares about
            their vehicle&apos;s finish, hand washing or professional detailing is the
            only safe option. The{" "}
            <a
              href="https://the-ida.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#22d65f] hover:underline"
            >
              International Detailing Association sets professional standards
            </a>{" "}
            for exactly this kind of proper paint care.
          </p>
        </section>

        {/* Section 2: Packages */}
        <section id="packages" className="mt-16 scroll-mt-24">
          <SectionHeading number="02" highlight="Packages">
            Full Detailing Menu &amp;{" "}
          </SectionHeading>
          <p className="mt-6 text-[#ccc] leading-relaxed text-base">
            Not every vehicle needs the same service. Here is how the five main
            detailing tiers stack up. Choose based on your vehicle&apos;s current
            condition, your goals, and your budget.
          </p>

          {/* Desktop table */}
          <div className="mt-8 hidden sm:block rounded-2xl overflow-hidden border border-[#2a2a2a]">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#22d65f]/[0.06]">
                  {["Package", "Price", "Interior", "Exterior", "Clay Bar", "Machine Polish", "Protection"].map((h) => (
                    <th key={h} className="text-left py-4 px-4 text-xs font-bold uppercase tracking-widest text-[#22d65f]">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-[#ccc]">
                {DETAIL_PACKAGES.map((row, i) => (
                  <tr
                    key={row.name}
                    className={`border-t border-[#1e1e1e] transition-colors hover:bg-[#22d65f]/[0.03] ${
                      row.recommended ? "bg-[#22d65f]/[0.04]" : i % 2 === 0 ? "bg-[#141414]" : "bg-[#0f0f0f]"
                    }`}
                  >
                    <td className="py-4 px-4 font-bold text-white">
                      {row.name}
                      {row.recommended && (
                        <span className="ml-2 text-[10px] font-bold uppercase tracking-widest text-[#22d65f] px-2 py-0.5 rounded-full bg-[#22d65f]/15">
                          Most Popular
                        </span>
                      )}
                    </td>
                    <td className="py-4 px-4 font-mono font-bold text-white">{row.price}</td>
                    <td className="py-4 px-4">
                      <CheckBadge value={row.interior} />
                    </td>
                    <td className="py-4 px-4">
                      <CheckBadge value={row.exterior} />
                    </td>
                    <td className="py-4 px-4">
                      <CheckBadge value={row.clayBar} />
                    </td>
                    <td className="py-4 px-4">
                      <CheckBadge value={row.machinePolish} />
                    </td>
                    <td className="py-4 px-4 text-xs text-[#999]">{row.protection}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="mt-8 sm:hidden space-y-4">
            {DETAIL_PACKAGES.map((row) => (
              <div
                key={row.name}
                className={`rounded-2xl p-5 border ${
                  row.recommended
                    ? "border-[#22d65f]/30 bg-[#22d65f]/[0.06]"
                    : "card-gradient"
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="font-bold text-white text-sm">{row.name}</span>
                  <span className="font-mono font-bold text-[#22d65f] text-sm">{row.price}</span>
                </div>
                {row.recommended && (
                  <div className="mb-3 text-[10px] font-bold uppercase tracking-widest text-[#22d65f]">
                    Most Popular
                  </div>
                )}
                <div className="grid grid-cols-2 gap-2 text-xs text-[#999] mb-3">
                  <span>Interior: <strong className="text-white">{row.interior ? "Yes" : "No"}</strong></span>
                  <span>Exterior: <strong className="text-white">{row.exterior ? "Yes" : "No"}</strong></span>
                  <span>Clay bar: <strong className="text-white">{row.clayBar ? "Yes" : "No"}</strong></span>
                  <span>Machine polish: <strong className="text-white">{row.machinePolish ? "Yes" : "No"}</strong></span>
                </div>
                <p className="text-xs text-[#666] leading-relaxed">
                  <strong className="text-[#999]">Best for:</strong> {row.bestFor}
                </p>
                <p className="mt-1 text-xs text-[#666]">
                  <strong className="text-[#999]">Protection:</strong> {row.protection}
                </p>
              </div>
            ))}
          </div>

          <Callout variant="tip">
            <strong className="text-white">Which package is right for you?</strong>{" "}
            If your vehicle hasn&apos;t been properly detailed in over a year, start
            with the Full Detail Combo — it covers everything and gives you a
            fresh baseline. If you are planning to add{" "}
            <Link href="/ppf/" className="text-[#22d65f] hover:underline">
              paint protection film
            </Link>{" "}
            or{" "}
            <Link href="/tinting/" className="text-[#22d65f] hover:underline">
              window tint
            </Link>
            , book those on the same visit after the detail for the best
            possible surface prep.
          </Callout>
        </section>

        {/* Section 3: Cost Guide */}
        <section id="cost-guide" className="mt-16 scroll-mt-24">
          <SectionHeading number="03" highlight="in Stony Plain (2026)">
            Detailing Costs{" "}
          </SectionHeading>
          <p className="mt-6 text-[#ccc] leading-relaxed text-base">
            Here is a realistic breakdown of professional auto detailing prices
            in the Stony Plain and Spruce Grove area for 2026. These reflect
            proper detail shop pricing — not a guy with a pressure washer in a
            parking lot.
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
            of 2026. Final pricing depends on vehicle size, condition, and
            services selected. Call 780.818.9904 for an exact quote on your
            vehicle.
          </p>

          <div className="mt-8 p-6 sm:p-7 card-gradient rounded-2xl">
            <h3 className="text-sm font-bold text-white uppercase tracking-wide mb-3">
              What Drives the Price Up
            </h3>
            <div className="grid sm:grid-cols-2 gap-4 text-sm text-[#999]">
              {[
                { factor: "Vehicle size", detail: "Trucks and SUVs have significantly more surface area, larger cab interiors, and cargo areas. Expect to add $50 to $100 over sedan pricing." },
                { factor: "Current condition", detail: "A vehicle not detailed in two years will take longer than one maintained monthly. Heavy pet hair, smoke damage, or significant staining adds labour time." },
                { factor: "Paint correction", detail: "Machine polishing to remove swirl marks and light scratches adds 2 to 4 hours of skilled labour. This is priced separately from a standard detail." },
                { factor: "Specialty surfaces", detail: "Alcantara headliners, perforated leather, suede inserts, and chrome or brushed metal trim require specific products and care that may carry a small premium." },
              ].map((item) => (
                <div key={item.factor}>
                  <p className="text-white text-xs font-bold uppercase tracking-wide mb-1">{item.factor}</p>
                  <p className="text-xs leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Interior vs Exterior */}
        <section id="interior-exterior" className="mt-16 scroll-mt-24">
          <SectionHeading number="04" highlight="Covered">
            Interior vs. Exterior — What&apos;s{" "}
          </SectionHeading>
          <p className="mt-6 text-[#ccc] leading-relaxed text-base">
            The full detail combo covers both sides of the vehicle, but it helps
            to understand what each component actually involves before you book.
          </p>

          <div className="mt-8 space-y-6">
            {/* Interior */}
            <div className="relative rounded-2xl overflow-hidden border border-[#22d65f]/20 bg-[#22d65f]/[0.03] p-6 sm:p-8">
              <div className="absolute top-0 right-0 px-3 py-1 bg-[#22d65f]/10 text-[#22d65f] text-[10px] font-bold uppercase tracking-widest rounded-bl-lg border-l border-b border-[#22d65f]/20">
                Interior
              </div>
              <h3 className="text-base font-bold text-white mb-4">What Interior Detailing Covers</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { step: "Deep Vacuum", desc: "Every surface: seats, carpets, floor mats, trunk floor, and crevices between seats and consoles. Pet hair, sand, and debris are fully extracted." },
                  { step: "Carpet & Mat Shampooing", desc: "Hot water extraction or steam cleaning lifts ingrained stains and odours from carpet fibres. Mats are removed and cleaned separately." },
                  { step: "Seat Cleaning", desc: "Cloth seats are shampooed and extracted. Leather seats are cleaned with appropriate leather cleaner and conditioned to prevent cracking and fading." },
                  { step: "Dashboard & Console", desc: "All hard surfaces are cleaned with appropriate products and dressed with UV-protective dressing to prevent cracking from Alberta's intense sun." },
                  { step: "Door Panels & Jambs", desc: "Door panels, arm rests, and door jambs — the dirty edges everyone forgets — are cleaned and dressed. Door jambs collect road grime on every trip." },
                  { step: "Interior Glass", desc: "Windows are cleaned from the inside, removing film, fingerprints, and the off-gassing residue from new vehicle plastics that fogs glass over time." },
                ].map((item) => (
                  <div key={item.step} className="flex gap-3">
                    <span className="flex-shrink-0 mt-0.5 w-4 h-4 rounded-full bg-[#22d65f]/15 border border-[#22d65f]/30 flex items-center justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#22d65f]" />
                    </span>
                    <div>
                      <p className="text-xs font-bold text-white mb-0.5">{item.step}</p>
                      <p className="text-xs text-[#999] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Exterior */}
            <div className="relative rounded-2xl overflow-hidden border border-[#22d65f]/20 bg-[#22d65f]/[0.03] p-6 sm:p-8">
              <div className="absolute top-0 right-0 px-3 py-1 bg-[#22d65f]/10 text-[#22d65f] text-[10px] font-bold uppercase tracking-widest rounded-bl-lg border-l border-b border-[#22d65f]/20">
                Exterior
              </div>
              <h3 className="text-base font-bold text-white mb-4">What Exterior Detailing Covers</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { step: "Pre-Rinse & Foam", desc: "A high-pressure pre-rinse removes bulk dirt, followed by a foam pre-soak that softens and loosens bonded contaminants before any physical contact." },
                  { step: "Hand Wash", desc: "Two-bucket hand wash with pH-neutral automotive soap and microfibre mitts — no brushes, no swirl marks. Wheels and wheel wells receive separate attention." },
                  { step: "Clay Bar Decontamination", desc: "A clay bar pulls out embedded road tar, industrial fallout, tree sap, and brake dust that washing cannot remove. This is what makes paint feel glassy smooth." },
                  { step: "Iron Fallout Removal", desc: "Chemical iron decontamination dissolves ferrous particles embedded in the paint — a key step for vehicles driven near railways or heavy industry in the Acheson corridor." },
                  { step: "Paint Correction (Premium)", desc: "Machine polishing with a dual-action polisher removes swirl marks, light oxidation, and fine scratches from the clear coat. Available in the premium package." },
                  { step: "Wax or Sealant", desc: "A protective layer is applied as the final step — carnauba wax for depth of shine, or a synthetic paint sealant for longer-lasting protection in Alberta's climate." },
                ].map((item) => (
                  <div key={item.step} className="flex gap-3">
                    <span className="flex-shrink-0 mt-0.5 w-4 h-4 rounded-full bg-[#22d65f]/15 border border-[#22d65f]/30 flex items-center justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#22d65f]" />
                    </span>
                    <div>
                      <p className="text-xs font-bold text-white mb-0.5">{item.step}</p>
                      <p className="text-xs text-[#999] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Callout variant="info">
            If you are considering{" "}
            <Link href="/ppf/" className="text-[#22d65f] hover:underline">
              paint protection film
            </Link>{" "}
            or a{" "}
            <Link href="/wraps/" className="text-[#22d65f] hover:underline">
              vinyl wrap
            </Link>
            , a full exterior detail and paint decontamination is required
            beforehand — film and wrap adhesives need a perfectly clean,
            contaminant-free surface to bond properly. Book the detail first,
            then the wrap or PPF on the same visit or the next day.
          </Callout>
        </section>

        {/* Section 5: Why Alberta */}
        <section id="alberta-reasons" className="mt-16 scroll-mt-24">
          <SectionHeading number="05" highlight="Regular Detailing">
            Why Alberta Vehicles Need{" "}
          </SectionHeading>
          <p className="mt-6 text-[#ccc] leading-relaxed text-base">
            This is not a province where you can get away with neglecting your
            vehicle. The combination of environmental factors that Alberta
            drivers deal with accelerates deterioration faster than most of
            Canada. Here are the four biggest threats to your vehicle&apos;s
            condition in this region.
          </p>

          <div className="mt-8 space-y-5">
            <div className="card-gradient rounded-2xl p-6 sm:p-8">
              <h3 className="text-sm font-bold uppercase tracking-wide text-white mb-3">
                Eight Months of Road Salt and Sand
              </h3>
              <p className="text-sm text-[#999] leading-relaxed">
                Alberta municipalities apply road salt and sand from October
                through April — and some years into May. Salt accelerates rust
                formation on any unprotected metal surface and works into every
                seam, panel gap, and undercarriage crevice. Sand abrades paint
                where it accumulates around wheel arches and lower door edges.
                A spring detail that includes a thorough undercarriage rinse,
                decontamination, and protection application is the single most
                important maintenance step you can do for the long-term
                condition of a vehicle driven here.
              </p>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-[#22d65f]/30 bg-gradient-to-br from-[#22d65f]/[0.06] to-[#141414]">
              <div className="absolute top-0 right-0 px-3 py-1 bg-[#22d65f] text-black text-[10px] font-bold uppercase tracking-widest rounded-bl-lg">
                High Impact
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="text-sm font-bold uppercase tracking-wide text-white mb-3">
                  Intense UV Radiation Degrades Interiors Fast
                </h3>
                <p className="text-sm text-[#999] leading-relaxed">
                  Alberta sits at a higher elevation than most of Canada, which
                  means greater UV intensity — and summer days run up to 17
                  hours of daylight. The combined effect on vehicle interiors is
                  severe: dashboard plastics crack and fade, leather dries and
                  splits without regular conditioning, and cloth upholstery
                  bleaches out over time. UV-protective interior dressings and
                  conditioners applied during a detail actively slow this
                  process.{" "}
                  <a
                    href="https://www.canada.ca/en/health-canada/services/sun-safety.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#22d65f] hover:underline"
                  >
                    Health Canada&apos;s sun safety data confirms Alberta&apos;s elevated UV exposure
                  </a>{" "}
                  — what damages your skin on every drive damages your vehicle&apos;s
                  interior at the same time.
                </p>
              </div>
            </div>

            <div className="card-gradient rounded-2xl p-6 sm:p-8">
              <h3 className="text-sm font-bold uppercase tracking-wide text-white mb-3">
                Gravel Roads and Chip Seal Highways
              </h3>
              <p className="text-sm text-[#999] leading-relaxed">
                Drive any Parkland County back road or many stretches of Highway
                16A and you are moving through a continuous stream of airborne
                aggregate. Rock chips accumulate on the front bumper, hood, and
                lower doors within the first season on a new vehicle. Left
                unaddressed, chips that reach bare metal become rust initiation
                points. Regular detailing — combined with{" "}
                <Link href="/ppf/" className="text-[#22d65f] hover:underline">
                  paint protection film on the front end
                </Link>{" "}
                — is the most effective defence against the cumulative damage
                from Parkland County roads.
              </p>
            </div>

            <div className="card-gradient rounded-2xl p-6 sm:p-8">
              <h3 className="text-sm font-bold uppercase tracking-wide text-white mb-3">
                Acheson Industrial Fallout
              </h3>
              <p className="text-sm text-[#999] leading-relaxed">
                The Acheson industrial area west of Edmonton is one of the
                largest industrial parks in western Canada. Vehicles regularly
                driven in this corridor accumulate a specific form of paint
                contamination: ferrous fallout from manufacturing, welding, and
                heavy transport operations. These microscopic iron particles
                embed in the clear coat and, if left in place, cause rust
                blooms in the paint. Iron fallout removal with a chemical
                decontaminator — standard at Accurate Autoworks — is the only
                way to remove them without damaging the paint surface.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: What to Expect */}
        <section id="what-to-expect" className="mt-16 scroll-mt-24">
          <SectionHeading number="06" highlight="at Accurate Autoworks">
            What to Expect{" "}
          </SectionHeading>
          <p className="mt-6 text-[#ccc] leading-relaxed text-base">
            Here is exactly what happens when you book a detail at Accurate
            Autoworks on Boulder Boulevard in Stony Plain. No surprises, no
            upselling once you are through the door.
          </p>

          <div className="mt-8 space-y-4">
            {[
              {
                step: "01",
                title: "Assessment & Quote",
                description:
                  "We walk around your vehicle together before anything starts. We assess the paint condition, interior severity, any specific staining, and flag anything that may affect the outcome (deep scratches that a detail won't remove, severe pet hair saturation that requires additional time, etc.). You get a fixed quote before work begins. No surprises when you pick it up.",
              },
              {
                step: "02",
                title: "Interior First",
                description:
                  "We start inside. Mats come out and are treated separately. Seats are vacuumed and treated based on material — cloth upholstery gets shampooed, leather gets cleaned and conditioned. Carpets are hot-water extracted. Hard surfaces are cleaned, air vents are cleared of dust, door jambs are scrubbed, and glass is cleaned from the inside. Odour treatment is applied at this stage if needed.",
              },
              {
                step: "03",
                title: "Exterior Decontamination",
                description:
                  "After the interior, the exterior gets a full two-stage decontamination: first a chemical iron fallout removal to dissolve embedded ferrous particles, followed by a thorough hand wash. A clay bar is then worked across all painted surfaces to pull out any remaining bonded contaminants. The result is paint that feels completely smooth under your fingertips — the baseline for proper paint protection.",
              },
              {
                step: "04",
                title: "Polish (Premium) and Protection",
                description:
                  "Premium packages include machine polishing at this stage to address swirl marks and light scratches. All packages finish with a protective application: hand wax, synthetic sealant, or carnauba wax depending on the package and your goals. This is what makes the shine last and gives your paint a layer of resistance against the next round of Alberta road abuse.",
              },
              {
                step: "05",
                title: "Final Inspection",
                description:
                  "Every vehicle goes through a final inspection before we contact you for pickup. We check for missed spots, verify glass is streak-free, confirm the interior is fully dry, and review any items we flagged at the initial assessment. You should leave in a vehicle that looks and smells like it just came out of the showroom.",
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
            <strong className="text-white">Maximize the investment:</strong>{" "}
            After a professional detail, a{" "}
            <Link href="/tinting/" className="text-[#22d65f] hover:underline">
              ceramic window tint installation
            </Link>{" "}
            gives you UV protection that slows the rate at which your newly
            conditioned interior degrades. And if you are doing a full exterior
            detail before a{" "}
            <Link href="/wraps/" className="text-[#22d65f] hover:underline">
              vinyl wrap
            </Link>
            , the decontamination step is mandatory for proper adhesion — so
            the detail is not extra work, it is the first step of the wrap
            process. Call{" "}
            <a href="tel:7808189904" className="text-[#22d65f] hover:underline font-bold">
              780.818.9904
            </a>{" "}
            to discuss bundling.
          </Callout>

          <div className="mt-8 p-6 sm:p-8 card-gradient rounded-2xl">
            <h3 className="text-sm font-bold text-white uppercase tracking-wide mb-4">
              Maintaining Your Detail
            </h3>
            <p className="text-sm text-[#999] leading-relaxed mb-4">
              A professional detail is a reset. What you do between appointments
              determines how long it stays that way. The basics:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              {[
                { title: "Hand wash only", desc: "pH-neutral soap, two-bucket method, microfibre mitts. Avoid automatic brush washes — they undo your paint correction." },
                { title: "Dry with microfibre", desc: "Terry cloths and chamois leave swirl marks. A large, plush microfibre drying towel protects the paint on every wash." },
                { title: "Rinse salt regularly", desc: "In winter, a quick rinse of the undercarriage and lower panels after every salted-road drive slows corrosion accumulation dramatically." },
                { title: "Interior quick wipe", desc: "A microfibre cloth on the dash weekly and a quick vacuum of the floor mats monthly keeps the cabin from accumulating the grime that takes hours to remove in a deep clean." },
              ].map((item) => (
                <div key={item.title}>
                  <p className="font-bold text-white text-xs uppercase tracking-wide mb-1">{item.title}</p>
                  <p className="text-xs text-[#999] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
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
              Book a Detail
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight">
              Ready to Reset Your{" "}
              <span className="text-[#22d65f] glow-accent">Vehicle?</span>
            </h2>
            <p className="mt-4 text-[#999] max-w-xl mx-auto leading-relaxed">
              Auto detailing, window tinting, PPF, vinyl wraps — Accurate
              Autoworks handles it all under one roof in Stony Plain. Serving
              Spruce Grove, Parkland County, Acheson, and Edmonton West. Call
              for a quote or book online.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Book Your Detail
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
                customize their vehicles since 2023. Detailing, tinting, wraps,
                PPF, tires, and commercial print under one roof.
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
              "Auto Detailing in Stony Plain & Spruce Grove: Full Menu, Prices & What to Expect",
            description:
              "Full detailing menu, 2026 Alberta pricing, interior vs exterior breakdown, and why Alberta vehicles need regular professional detailing.",
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
                "https://www.accurateautoworks.ca/blog/auto-detailing-stony-plain-spruce-grove/",
            },
            keywords:
              "auto detailing Stony Plain, car detailing Spruce Grove, car detail cost Alberta, auto detail near me Stony Plain, full detail package Alberta",
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
              "Stony Plain's premier auto customization shop offering auto detailing, window tinting, vinyl wraps, PPF, ceramic coating, and commercial printing.",
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

function CheckBadge({ value }: { value: boolean }) {
  return value ? (
    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#22d65f]/15 border border-[#22d65f]/30">
      <svg className="w-3 h-3 text-[#22d65f]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </span>
  ) : (
    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#333]/30 border border-[#333]">
      <svg className="w-3 h-3 text-[#555]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
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
