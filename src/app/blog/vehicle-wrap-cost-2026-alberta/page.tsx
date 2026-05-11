import Link from "next/link";
import type { Metadata } from "next";
import { BlogPostClient } from "./client";

export const metadata: Metadata = {
  title: "Vehicle Wrap Cost 2026: Alberta Pricing Guide | Accurate Autoworks",
  description:
    "How much does a vehicle wrap cost in Alberta in 2026? Full-colour change, partial wraps, commercial fleet pricing — real numbers from Stony Plain.",
  alternates: {
    canonical:
      "https://www.accurateautoworks.ca/blog/vehicle-wrap-cost-2026-alberta/",
  },
  openGraph: {
    title: "Vehicle Wrap Cost 2026: Alberta Pricing Guide | Accurate Autoworks",
    description:
      "Real 2026 pricing for car wraps in Alberta. Full colour change, partial, chrome delete, fleet — plus what drives costs up or down.",
    type: "article",
    url: "https://www.accurateautoworks.ca/blog/vehicle-wrap-cost-2026-alberta/",
    locale: "en_CA",
    siteName: "Accurate Autoworks",
  },
};

const FAQ_DATA = [
  {
    q: "How much does a full vehicle wrap cost in Alberta in 2026?",
    a: "A full colour-change wrap on a standard sedan runs $2,500 to $4,000 at a quality Alberta shop in 2026. Trucks and SUVs cost more — typically $3,500 to $6,000 depending on size and complexity. Specialty films like chrome, colour-shift, or satin metallic push prices higher. At Accurate Autoworks in Stony Plain, we give you a firm quote before any work begins — call 780.818.9904 to get yours.",
  },
  {
    q: "Why are vinyl wraps so expensive?",
    a: "The material cost alone for a quality cast vinyl film from a brand like 3M or Avery Dennison runs $500 to $1,500 for a full vehicle. The rest is skilled labour — proper wraps require disassembling trim, doors, and bumpers, cutting and stretching film precisely around every curve and recess, and finishing edges so they can't lift. A rushed or low-cost wrap will bubble, peel, and damage your paint. The price reflects the time, skill, and materials needed to do it right.",
  },
  {
    q: "How long does a vehicle wrap last in Alberta's climate?",
    a: "A professionally installed cast vinyl wrap using quality film lasts 5 to 7 years in Alberta conditions when properly cared for. The freeze-thaw cycles, road salt, and intense summer UV we get in the Edmonton area accelerate wear on cheap calendered vinyl, which may only last 2 to 3 years. At Accurate Autoworks, we use premium cast films rated for Alberta's climate — the investment holds.",
  },
  {
    q: "Is a partial wrap cheaper than a full wrap?",
    a: "Significantly cheaper. A hood and roof wrap runs $400 to $800. A half-wrap (typically the lower body or the rear half of the vehicle) runs $1,200 to $2,500 depending on design complexity. Partial wraps are a great way to add visual impact — colour accents, racing stripes, or a contrasting roof — without the cost of a full colour change. Accurate Autoworks can design a partial wrap that looks intentional and sharp.",
  },
  {
    q: "Does a vehicle wrap protect the paint underneath?",
    a: "Yes — quality vinyl wrap acts as a physical shield against rock chips, UV fading, minor abrasions, and bird droppings. This is actually one of the top reasons drivers wrap rather than paint: the factory paint stays pristine under the film. When the wrap is eventually removed (properly), the paint underneath looks like new. If maximum paint protection is your priority, pair the wrap with PPF on high-impact zones — ask Accurate Autoworks about combo installs.",
  },
  {
    q: "Can a vehicle wrap be removed without damaging paint?",
    a: "Yes, if the wrap was properly installed and the underlying paint is in good condition. Quality cast vinyl is designed to be removable for up to 7 years without leaving adhesive residue or lifting paint. Cheaper films, wraps left on too long, or wraps applied over already-compromised paint can cause issues on removal. At Accurate Autoworks, we use removal-friendly premium films and can remove old wraps safely.",
  },
  {
    q: "How much does a commercial fleet wrap cost per vehicle?",
    a: "Fleet wraps for commercial vehicles — vans, service trucks, box trucks — typically run $2,500 to $5,000 per vehicle for a full branded wrap including design. Partial wraps (cab area, rear panel, door graphics) start around $800 to $1,500 per vehicle. Multi-vehicle fleet orders at Accurate Autoworks often come with volume pricing — call 780.818.9904 to discuss your fleet. We also handle storefront signs and banners through our commercial print division.",
  },
  {
    q: "What's the difference between cast and calendered vinyl?",
    a: "Cast vinyl is made through a precision process that produces a thinner, more conformable film with better longevity (5 to 7 years). It stretches cleanly around curves, recesses, and complex body lines without distortion. Calendered vinyl is cheaper but thicker, less conformable, and tends to shrink over time — especially in Alberta's cold winters — causing lifting edges and eventual peeling. Accurate Autoworks uses cast vinyl exclusively for all full vehicle wrap installations.",
  },
  {
    q: "Does colour affect the price of a wrap?",
    a: "Standard solid colours — matte black, gloss white, satin grey — are the most cost-effective. Specialty finishes like chrome, colour-shift (also called chameleon or flip), brushed metal, or carbon fibre texture films carry a premium of $500 to $1,500 over a standard colour due to higher material cost and the extra skill required to install them without distorting the effect. If you want chrome or colour-shift, expect the total to be at the higher end of the pricing range.",
  },
  {
    q: "How do I keep a vehicle wrap looking new in Alberta?",
    a: "Hand wash with a gentle automotive soap — never use automated car washes with stiff brushes, which will lift wrap edges. Keep the vehicle out of prolonged UV exposure when parked (a garage or covered space helps enormously in Alberta summers). Avoid harsh solvents near seams. For matte or satin wraps, a dedicated wrap sealant product keeps the finish looking clean. Accurate Autoworks provides care instructions with every wrap installation and is happy to answer questions — just call 780.818.9904.",
  },
];

const COST_DATA = [
  { service: "Partial wrap (hood only)", cost: "$300 - $600", priority: "Budget-Friendly", level: "optional" },
  { service: "Partial wrap (hood + roof)", cost: "$500 - $900", priority: "Popular", level: "optional" },
  { service: "Half-wrap (lower body or rear)", cost: "$1,200 - $2,500", priority: "Popular", level: "recommended" },
  { service: "Full wrap — sedan / coupe", cost: "$2,500 - $4,000", priority: "Most Common", level: "essential" },
  { service: "Full wrap — truck / SUV", cost: "$3,500 - $6,000", priority: "Most Common", level: "essential" },
  { service: "Full wrap — van / cargo van", cost: "$3,000 - $5,500", priority: "Fleet", level: "essential" },
  { service: "Specialty film (chrome / colour-shift)", cost: "+$500 - $1,500", priority: "Premium Add-on", level: "recommended" },
  { service: "Chrome delete package", cost: "$400 - $900", priority: "Popular", level: "recommended" },
];

const WRAP_FILM_TYPES = [
  {
    name: "Gloss Colour Change",
    cost: "$",
    durability: "5 - 7 years",
    complexity: "Standard",
    bestFor: "Full colour swaps, classic looks",
    rating: "great",
    ratingLabel: "Great Value",
    notes: "Most popular choice. Clean finish, wide colour selection, easiest to care for.",
  },
  {
    name: "Matte / Satin",
    cost: "$$",
    durability: "5 - 7 years",
    complexity: "Standard",
    bestFor: "Stealth builds, murdered-out trucks",
    rating: "great",
    ratingLabel: "Popular",
    notes: "Non-reflective finish. Needs specific care (no wax). Aggressive, modern look.",
  },
  {
    name: "Colour-Shift / Chameleon",
    cost: "$$$",
    durability: "4 - 6 years",
    complexity: "High",
    bestFor: "Show vehicles, head-turners",
    rating: "premium",
    ratingLabel: "Premium",
    notes: "Changes hue depending on viewing angle. Requires expert installation to align correctly.",
    recommended: true,
  },
  {
    name: "Chrome",
    cost: "$$$$",
    durability: "3 - 5 years",
    complexity: "Very High",
    bestFor: "Show builds, commercial attention-grabbing",
    rating: "premium",
    ratingLabel: "Show Quality",
    notes: "Highest impact, most difficult to install cleanly. Mirror finish requires near-perfect prep.",
  },
  {
    name: "Carbon Fibre Texture",
    cost: "$$",
    durability: "5 - 7 years",
    complexity: "Moderate",
    bestFor: "Accents, hoods, interiors, pillars",
    rating: "great",
    ratingLabel: "Great for Accents",
    notes: "Textured 3D look. Common for roofs, hoods, spoilers, and interior trim.",
  },
  {
    name: "Brushed Metal",
    cost: "$$$",
    durability: "4 - 6 years",
    complexity: "High",
    bestFor: "Commercial trucks, industrial look",
    rating: "premium",
    ratingLabel: "Premium",
    notes: "Directional finish — alignment critical. Popular on commercial and fleet vehicles.",
  },
];

export default function VehicleWrapCostAlberta2026() {
  const publishDate = "2026-05-11";
  const modifiedDate = "2026-05-11";

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
            Alberta Pricing Guide 2026
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black uppercase tracking-tight leading-[1.05]">
            How Much Does a{" "}
            <span className="text-[#22d65f] glow-accent">Vehicle Wrap</span>{" "}
            Cost in 2026?
          </h1>

          <p className="mt-8 text-lg sm:text-xl text-[#999] max-w-2xl mx-auto leading-relaxed">
            Real Alberta pricing for full wraps, partial wraps, chrome deletes,
            and commercial fleet graphics — plus exactly what drives costs up
            or down.
          </p>

          <div className="mt-6 flex items-center justify-center gap-6 text-xs text-[#666] uppercase tracking-wider">
            <div className="flex items-center gap-2">
              <svg className="w-3.5 h-3.5 text-[#22d65f]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <time dateTime={publishDate}>May 11, 2026</time>
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
            The most common question we get at{" "}
            <Link href="/wraps/" className="text-[#22d65f] hover:underline">
              Accurate Autoworks
            </Link>{" "}
            is some version of: &ldquo;I want to wrap my truck — what&apos;s it
            going to cost me?&rdquo; The honest answer is that it depends on
            several variables, but there is a predictable range once you know
            what drives the price. This guide breaks it all down — not the
            vague numbers you find on national sites, but real 2026 Alberta
            pricing reflective of actual material and labour costs in the Stony
            Plain, Spruce Grove, and Edmonton area.
          </p>
          <p className="mt-4 text-[#ccc] leading-relaxed text-base sm:text-lg">
            Whether you are looking at a full colour change on a pickup, a
            partial wrap for some visual pop, a chrome delete package, or
            commercial graphics for a service fleet, this guide has the numbers.
            By the end you will know exactly what to budget, what questions to
            ask any shop you talk to, and what warning signs indicate a quote
            that is too good to be true.
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
                { href: "#pricing-breakdown", label: "2026 Alberta Wrap Pricing" },
                { href: "#what-drives-cost", label: "What Drives the Price Up or Down" },
                { href: "#film-types", label: "Film Types & Finish Options" },
                { href: "#cast-vs-calendered", label: "Cast vs Calendered Vinyl" },
                { href: "#partial-vs-full", label: "Partial vs Full Wrap" },
                { href: "#commercial-fleet", label: "Commercial & Fleet Wraps" },
                { href: "#red-flags", label: "Red Flags in Cheap Quotes" },
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

        {/* Section 1: Pricing Breakdown */}
        <section id="pricing-breakdown" className="mt-16 scroll-mt-24">
          <SectionHeading number="01" highlight="Pricing">
            2026 Alberta Wrap{" "}
          </SectionHeading>
          <p className="mt-6 text-[#ccc] leading-relaxed text-base">
            These are real-world prices from a quality professional shop in
            Alberta in 2026. They assume premium cast vinyl film, proper surface
            prep, panel removal where required, and a warranted installation.
            Budget installs using cheap calendered film will be lower — and so
            will the result.
          </p>

          {/* Desktop table */}
          <div className="mt-8 hidden sm:block rounded-2xl overflow-hidden border border-[#2a2a2a]">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#22d65f]/[0.06]">
                  {["Service", "Cost Range (CAD)", "Notes"].map((h) => (
                    <th key={h} className="text-left py-4 px-5 text-xs font-bold uppercase tracking-widest text-[#22d65f]">
                      {h}
                    </th>
                  ))}
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
                    <td className="py-4 px-5">{row.service}</td>
                    <td className="py-4 px-5 font-mono text-white font-bold">{row.cost}</td>
                    <td className="py-4 px-5">
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
                  <span className="font-mono text-white font-bold text-sm">{row.cost}</span>
                  <PriorityBadge level={row.level} label={row.priority} />
                </div>
              </div>
            ))}
          </div>

          <p className="mt-4 text-xs text-[#555] italic">
            * Prices are approximate for the Stony Plain / Spruce Grove / Edmonton area as of 2026.
            Actual costs vary based on vehicle size, body complexity, prep condition, and film
            selected. Call 780.818.9904 for an exact quote on your vehicle.
          </p>

          <Callout variant="tip">
            <strong className="text-white">Compare apples to apples:</strong>{" "}
            When getting quotes, ask every shop what film brand and grade they
            use. A quote using 3M Series 1080 or Avery Dennison Supreme
            Wrapping Film is not the same product as a house-brand import
            film — and the difference shows up within a year or two. At{" "}
            <Link href="/wraps/" className="text-[#22d65f] hover:underline">
              Accurate Autoworks
            </Link>
            , we are transparent about exactly what goes on your vehicle.
          </Callout>
        </section>

        {/* Section 2: What Drives Cost */}
        <section id="what-drives-cost" className="mt-16 scroll-mt-24">
          <SectionHeading number="02" highlight="the Price">
            What Drives{" "}
          </SectionHeading>
          <p className="mt-6 text-[#ccc] leading-relaxed text-base">
            Vehicle wrap pricing is not arbitrary. Six factors account for
            virtually all the variation you will see between quotes, and
            understanding them tells you immediately whether a shop is cutting
            corners or delivering real value.
          </p>

          <div className="mt-8 space-y-5">
            <div className="card-gradient rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#22d65f]/10 flex items-center justify-center">
                  <span className="text-[#22d65f] text-xs font-black">01</span>
                </div>
                <h3 className="text-sm font-bold uppercase tracking-wide text-white">
                  Vehicle Size &amp; Body Complexity
                </h3>
              </div>
              <p className="text-sm text-[#999] leading-relaxed">
                A two-door coupe has far less surface area than a crew-cab
                long-box pickup. More square footage means more film, more
                labour, and more time. Beyond raw size, body complexity
                matters enormously — a vehicle with deep character lines,
                aggressive curves, hood scoops, large bumper recesses, or
                intricate trim panels takes significantly longer to wrap
                cleanly than a flat-sided panel van. Labour is the largest
                cost component in any professional wrap, so complexity
                directly drives price.
              </p>
            </div>

            <div className="card-gradient rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#22d65f]/10 flex items-center justify-center">
                  <span className="text-[#22d65f] text-xs font-black">02</span>
                </div>
                <h3 className="text-sm font-bold uppercase tracking-wide text-white">
                  Film Type &amp; Finish
                </h3>
              </div>
              <p className="text-sm text-[#999] leading-relaxed">
                Standard gloss or satin colour-change vinyl is the most
                cost-effective film option. Step up to colour-shift or
                chameleon film and material costs roughly double. Chrome
                vinyl is the most expensive and most difficult to install —
                requiring near-perfect panel prep and extremely slow,
                meticulous work to avoid finger marks and distortion. The
                film you choose can shift the total cost by $1,000 to
                $2,000 on a full wrap, independent of labour.
              </p>
            </div>

            <div className="card-gradient rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#22d65f]/10 flex items-center justify-center">
                  <span className="text-[#22d65f] text-xs font-black">03</span>
                </div>
                <h3 className="text-sm font-bold uppercase tracking-wide text-white">
                  Surface Prep Condition
                </h3>
              </div>
              <p className="text-sm text-[#999] leading-relaxed">
                Vinyl does not hide problems — it amplifies them. Scratches,
                rock chips, rust bubbles, or peeling factory clear coat all
                telegraph through the film and create lift points where
                moisture can get underneath. Before any wrap, the vehicle
                needs to be thoroughly cleaned, decontaminated, and any
                surface defects addressed. Vehicles arriving in poor
                condition require more prep time, which adds to cost. A
                vehicle that has been{" "}
                <Link href="/detailing/" className="text-[#22d65f] hover:underline">
                  professionally detailed
                </Link>{" "}
                before the wrap appointment saves prep time and produces a
                cleaner result.
              </p>
            </div>

            <div className="card-gradient rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#22d65f]/10 flex items-center justify-center">
                  <span className="text-[#22d65f] text-xs font-black">04</span>
                </div>
                <h3 className="text-sm font-bold uppercase tracking-wide text-white">
                  Disassembly Requirements
                </h3>
              </div>
              <p className="text-sm text-[#999] leading-relaxed">
                Professional wraps require removing mirrors, door handles,
                trim pieces, bumpers, and sometimes door panels to get film
                underneath and behind components — so the wrap looks clean
                rather than just surface-applied. Shops that skip
                disassembly deliver wraps with visible cut lines at every
                edge, and those edges lift first. The disassembly and
                reassembly time is significant and is a legitimate cost
                driver, not padding.
              </p>
            </div>

            <div className="card-gradient rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#22d65f]/10 flex items-center justify-center">
                  <span className="text-[#22d65f] text-xs font-black">05</span>
                </div>
                <h3 className="text-sm font-bold uppercase tracking-wide text-white">
                  Partial vs Full Coverage
                </h3>
              </div>
              <p className="text-sm text-[#999] leading-relaxed">
                The difference between a partial and full wrap is not just
                proportional — partial wraps require careful edge management
                and design work to make the wrap look intentional rather
                than incomplete. A clean partial wrap is harder to design
                than a full wrap and requires more planning, but uses far
                less material. The labour-to-material ratio shifts
                significantly.
              </p>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-[#22d65f]/30 bg-gradient-to-br from-[#22d65f]/[0.06] to-[#141414]">
              <div className="absolute top-0 right-0 px-3 py-1 bg-[#22d65f] text-black text-[10px] font-bold uppercase tracking-widest rounded-bl-lg">
                Most Overlooked
              </div>
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#22d65f]/10 flex items-center justify-center">
                    <span className="text-[#22d65f] text-xs font-black">06</span>
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-wide text-white">
                    Shop Overhead &amp; Installer Experience
                  </h3>
                </div>
                <p className="text-sm text-[#999] leading-relaxed">
                  A shop with a proper climate-controlled install bay,
                  certified installers, and experience using professional
                  techniques will charge more than someone doing wraps in
                  their garage. That overhead is exactly what keeps dust
                  contamination, temperature failures, and adhesion problems
                  from ruining your wrap. In Alberta, where temperatures can
                  swing 40 degrees between seasons, a controlled environment
                  during installation is not optional for a quality result.
                  According to the{" "}
                  <a
                    href="https://pda.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#22d65f] hover:underline"
                  >
                    Professional Detailing Association
                  </a>
                  , proper installation environment is one of the primary
                  factors separating professional-grade results from DIY or
                  budget installs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Film Types */}
        <section id="film-types" className="mt-16 scroll-mt-24">
          <SectionHeading number="03" highlight="Options">
            Film Types &amp; Finish{" "}
          </SectionHeading>
          <p className="mt-6 text-[#ccc] leading-relaxed text-base">
            The finish you choose defines the look and significantly impacts
            cost. Here is a comparison of the major film categories available
            for vehicle wraps in 2026, along with their Alberta durability
            ratings and best-use cases.{" "}
            <a
              href="https://www.3m.com/3M/en_US/graphics-us/resources/products/vinyl-wrap/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#22d65f] hover:underline"
            >
              3M&apos;s wrap film overview
            </a>{" "}
            is a useful technical reference for understanding what differentiates
            cast films from lower-grade options.
          </p>

          {/* Desktop table */}
          <div className="mt-8 hidden sm:block rounded-2xl overflow-hidden border border-[#2a2a2a]">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#22d65f]/[0.06]">
                  {["Film Type", "Cost", "Durability", "Complexity", "Best For", "Rating"].map((h) => (
                    <th key={h} className="text-left py-4 px-4 text-xs font-bold uppercase tracking-widest text-[#22d65f]">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-[#ccc]">
                {WRAP_FILM_TYPES.map((row, i) => (
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
                          Popular
                        </span>
                      )}
                    </td>
                    <td className="py-4 px-4 font-mono font-bold">{row.cost}</td>
                    <td className="py-4 px-4">{row.durability}</td>
                    <td className="py-4 px-4">{row.complexity}</td>
                    <td className="py-4 px-4 text-xs text-[#999]">{row.bestFor}</td>
                    <td className="py-4 px-4">
                      <RatingBadge level={row.rating} label={row.ratingLabel} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="mt-8 sm:hidden space-y-4">
            {WRAP_FILM_TYPES.map((row) => (
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
                  <RatingBadge level={row.rating} label={row.ratingLabel} />
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs text-[#999]">
                  <span>Cost: <strong className="text-white">{row.cost}</strong></span>
                  <span>Durability: <strong className="text-white">{row.durability}</strong></span>
                  <span>Complexity: <strong className="text-white">{row.complexity}</strong></span>
                </div>
                <p className="mt-3 text-xs text-[#666] leading-relaxed">{row.notes}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Cast vs Calendered */}
        <section id="cast-vs-calendered" className="mt-16 scroll-mt-24">
          <SectionHeading number="04" highlight="Calendered Vinyl">
            Cast vs{" "}
          </SectionHeading>
          <p className="mt-6 text-[#ccc] leading-relaxed text-base">
            This distinction is the single most important technical factor
            in vehicle wrap quality — and most people shopping for a wrap have
            no idea it exists. Understanding it explains why two quotes for
            &ldquo;a wrap&rdquo; can be separated by $1,500 or more.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            <div className="card-gradient rounded-2xl p-6 border-t-2 border-t-[#555]">
              <div className="mb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#555]">Budget Option</span>
                <h3 className="text-base font-black text-white mt-1">Calendered Vinyl</h3>
              </div>
              <ul className="space-y-3 text-sm text-[#999]">
                {[
                  "Cheaper to produce — lower material cost",
                  "Thicker, stiffer film — harder to conform around curves",
                  "Shrinks in cold Alberta winters, lifting edges",
                  "2 to 4 year lifespan before visible deterioration",
                  "Distorts on complex body lines and deep recesses",
                  "Better for flat surfaces: signs, windows, panels",
                  "Not recommended for full vehicle wraps",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="flex-shrink-0 w-4 h-4 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-[#22d65f]/30 bg-[#22d65f]/[0.04]">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#22d65f] to-[#22d65f]/20" />
              <div className="p-6">
                <div className="mb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#22d65f]">Professional Standard</span>
                  <h3 className="text-base font-black text-white mt-1">Cast Vinyl</h3>
                </div>
                <ul className="space-y-3 text-sm text-[#999]">
                  {[
                    "Higher material cost — precision manufacturing process",
                    "Thin, flexible film — conforms cleanly to any curve",
                    "Dimensionally stable in cold and heat — stays put",
                    "5 to 7 year lifespan with proper care",
                    "Stretches without distorting the colour or finish",
                    "Designed specifically for complex vehicle surfaces",
                    "What Accurate Autoworks uses on every full wrap",
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="flex-shrink-0 w-4 h-4 rounded-full bg-[#22d65f]/10 border border-[#22d65f]/30 flex items-center justify-center mt-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#22d65f]" />
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <Callout variant="warning">
            <strong className="text-white">In Alberta specifically:</strong>{" "}
            Calendered vinyl&apos;s tendency to shrink is particularly
            problematic here. The thermal shock between a minus-35 January
            night and a plus-35 July afternoon is among the most extreme
            temperature ranges any vehicle film will ever experience. Cast
            vinyl is engineered to handle this. Calendered is not.
          </Callout>
        </section>

        {/* Section 5: Partial vs Full */}
        <section id="partial-vs-full" className="mt-16 scroll-mt-24">
          <SectionHeading number="05" highlight="Full Wrap">
            Partial vs{" "}
          </SectionHeading>
          <p className="mt-6 text-[#ccc] leading-relaxed text-base">
            Not every vehicle needs a full wrap to look sharp or to achieve
            your goal. Understanding what each approach delivers helps you
            spend your money where it actually matters.
          </p>

          <div className="mt-8 space-y-6">
            <div className="card-gradient rounded-2xl p-6 sm:p-8">
              <h3 className="text-sm font-bold uppercase tracking-widest text-[#22d65f] mb-4">
                When a Partial Wrap Makes Sense
              </h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-[#999] leading-relaxed mb-4">
                    A partial wrap works best when you want to add visual
                    interest to a vehicle that already has a factory colour
                    you like. Common and effective partial wrap approaches include:
                  </p>
                  <ul className="space-y-2 text-sm text-[#999]">
                    {[
                      "Contrasting roof on a two-tone build",
                      "Hood and fenders in matte over gloss body",
                      "Chrome delete on black trim and pillars",
                      "Racing stripes front-to-back",
                      "Rear bumper wrap / diffuser accent",
                      "Mirror caps in a contrasting colour",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#22d65f] flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-[#22d65f]/[0.04] rounded-xl p-4 border border-[#22d65f]/20">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#22d65f] mb-3">
                    Partial Wrap Budget
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between text-[#ccc]">
                      <span>Mirror caps</span>
                      <span className="font-mono text-white font-bold">$150 - $300</span>
                    </div>
                    <div className="flex justify-between text-[#ccc]">
                      <span>Roof only</span>
                      <span className="font-mono text-white font-bold">$400 - $700</span>
                    </div>
                    <div className="flex justify-between text-[#ccc]">
                      <span>Hood + roof</span>
                      <span className="font-mono text-white font-bold">$600 - $1,000</span>
                    </div>
                    <div className="flex justify-between text-[#ccc]">
                      <span>Chrome delete</span>
                      <span className="font-mono text-white font-bold">$400 - $900</span>
                    </div>
                    <div className="flex justify-between text-[#ccc]">
                      <span>Racing stripes</span>
                      <span className="font-mono text-white font-bold">$300 - $600</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-gradient rounded-2xl p-6 sm:p-8">
              <h3 className="text-sm font-bold uppercase tracking-widest text-[#22d65f] mb-4">
                When a Full Wrap Makes Sense
              </h3>
              <p className="text-sm text-[#999] leading-relaxed mb-4">
                A full wrap makes sense when you want to completely transform
                the vehicle&apos;s colour, protect the entire paint surface, or build
                a branded commercial vehicle. It is also the right choice when
                the factory colour is one you dislike — a full wrap lets you
                change the vehicle&apos;s look without committing to an expensive
                respray that permanently alters the vehicle&apos;s value and
                originality. When the wrap eventually comes off, your factory
                paint is still underneath, protected and intact.
              </p>
              <p className="text-sm text-[#999] leading-relaxed">
                For Parkland County and Acheson-area workers who use their
                trucks as business tools, a full-wrap brand identity on a
                crew cab is one of the most cost-effective marketing
                investments available — your truck becomes a moving billboard
                that reaches thousands of local impressions every week.
                Check our{" "}
                <Link href="/wraps/" className="text-[#22d65f] hover:underline">
                  wraps service page
                </Link>{" "}
                for examples of full vehicle transformations.
              </p>
            </div>
          </div>

          <Callout variant="info">
            Considering wrap alongside{" "}
            <Link href="/ppf/" className="text-[#22d65f] hover:underline">
              paint protection film
            </Link>
            ? A popular combo for trucks and SUVs is full PPF on the front
            end (hood, fenders, bumper, mirrors) and a colour-change wrap
            on the rest of the body. You get rock chip protection where
            you need it most, plus the colour transformation — and neither
            product interferes with the other.
          </Callout>
        </section>

        {/* Section 6: Commercial & Fleet */}
        <section id="commercial-fleet" className="mt-16 scroll-mt-24">
          <SectionHeading number="06" highlight="Fleet Wraps">
            Commercial &amp;{" "}
          </SectionHeading>
          <p className="mt-6 text-[#ccc] leading-relaxed text-base">
            Commercial vehicle wraps are one of the most cost-effective
            advertising formats available to local Alberta businesses.
            According to the{" "}
            <a
              href="https://www.oaaa.org/resources/research/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#22d65f] hover:underline"
            >
              Outdoor Advertising Association of America
            </a>
            , vehicle wraps generate between 30,000 and 70,000 daily
            impressions — more than virtually any other local advertising
            channel at the same cost. For a Stony Plain or Spruce Grove
            service business operating trucks in and around the Edmonton
            corridor, that reach is significant.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            {[
              {
                title: "Service Van / Cargo Van",
                price: "$2,500 - $4,500",
                description:
                  "A full branded wrap on a cargo van — including design, print, and installation — reaches every neighbourhood your team works in. For plumbers, electricians, HVAC, and landscaping companies operating out of Stony Plain and Spruce Grove, this is your most visible marketing asset.",
              },
              {
                title: "Pickup Truck (Full Wrap)",
                price: "$3,000 - $5,500",
                description:
                  "Crew-cab pickups are the dominant commercial vehicle in Parkland County. A professional wrap turns every site visit into a brand impression. Partial truck wraps (cab area + doors) cost $1,200 to $2,500 and still deliver strong visibility at lower cost.",
              },
              {
                title: "Box Truck / Cube Van",
                price: "$4,000 - $8,000",
                description:
                  "The large flat panels of a box truck or cube van are ideal for bold graphics and messaging. These vehicles function as mobile billboards — high visibility at highway speed on the Yellowhead and through Acheson industrial makes every delivery a brand touchpoint.",
              },
              {
                title: "Fleet Volume Pricing",
                price: "Ask for Quote",
                description:
                  "Multi-vehicle fleet orders at Accurate Autoworks are priced per project. We handle design, production, and installation in-house, which means consistent results across your fleet without coordinating multiple vendors. Call 780.818.9904 to discuss your fleet size and timeline.",
              },
            ].map((item) => (
              <div key={item.title} className="card-gradient rounded-2xl p-6 group hover:border-[#22d65f]/50 transition-all duration-300">
                <h3 className="text-sm font-bold text-white mb-1">{item.title}</h3>
                <p className="font-mono text-[#22d65f] font-bold text-base mb-3">{item.price}</p>
                <p className="text-xs text-[#999] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <Callout variant="tip">
            <strong className="text-white">One roof, full service:</strong>{" "}
            Accurate Autoworks handles commercial vehicle wraps and{" "}
            <Link href="/print/" className="text-[#22d65f] hover:underline">
              commercial printing and signage
            </Link>{" "}
            under one roof. That means your storefront banner, your fleet
            wrap, and your A-frame signs all carry the same design, printed
            to the same standard. No vendor juggling. Call{" "}
            <a href="tel:7808189904" className="text-[#22d65f] hover:underline font-bold">
              780.818.9904
            </a>{" "}
            to discuss your business branding needs.
          </Callout>
        </section>

        {/* Section 7: Red Flags */}
        <section id="red-flags" className="mt-16 scroll-mt-24">
          <SectionHeading number="07" highlight="in a Cheap Quote">
            Red Flags{" "}
          </SectionHeading>
          <p className="mt-6 text-[#ccc] leading-relaxed text-base">
            The wrap industry has a quality spectrum wider than almost any
            other automotive service. At the low end, you get a vehicle that
            looks questionable for six months and starts lifting and bubbling
            before the first winter is out. Here is what to watch for when
            comparing quotes.
          </p>

          <div className="mt-8 space-y-4">
            {[
              {
                flag: "No mention of the film brand or grade",
                detail:
                  "Any professional installer can tell you exactly what film they use — brand, product line, and grade. If a shop can't or won't answer this question, they are almost certainly using off-brand import film that won't perform in Alberta conditions.",
                severity: "critical",
              },
              {
                flag: "Quote with no vehicle inspection",
                detail:
                  "Wrap pricing cannot be accurate without seeing the vehicle. Complex body lines, existing paint damage, and unique trim configurations all affect labour time. A shop quoting a firm price without looking at your vehicle is either overcharging for a cushion or undercharging because they plan to cut corners.",
                severity: "critical",
              },
              {
                flag: "No mention of disassembly",
                detail:
                  "A professional wrap means removing mirrors, door handles, and trim to wrap underneath them. If a quote doesn't account for this or if the installer says they \"wrap around\" those parts, you are getting a surface-applied wrap with exposed cut lines at every edge.",
                severity: "warning",
              },
              {
                flag: "Quote significantly below market",
                detail:
                  "If the Stony Plain / Edmonton market is seeing $3,500 to $5,500 for a truck wrap and someone quotes you $1,800, they are either using cheap calendered film, skipping disassembly, rushing the install, or all three. The truck will show it within one Alberta winter.",
                severity: "warning",
              },
              {
                flag: "No warranty offered",
                detail:
                  "Quality films come with manufacturer warranties. A professional shop stands behind their installation. If a shop offers no warranty on either the film or the labour, that tells you everything you need to know about their confidence in the result.",
                severity: "warning",
              },
            ].map((item) => (
              <div
                key={item.flag}
                className={`relative rounded-2xl overflow-hidden p-6 ${
                  item.severity === "critical"
                    ? "bg-red-500/[0.04] border border-red-500/20"
                    : "bg-amber-500/[0.04] border border-amber-500/20"
                }`}
              >
                <div className="flex items-start gap-3 mb-2">
                  <span
                    className={`flex-shrink-0 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border ${
                      item.severity === "critical"
                        ? "text-red-400 border-red-500/30 bg-red-500/10"
                        : "text-amber-400 border-amber-500/30 bg-amber-500/10"
                    }`}
                  >
                    {item.severity === "critical" ? "Critical" : "Warning"}
                  </span>
                  <h3 className="text-sm font-bold text-white">{item.flag}</h3>
                </div>
                <p className="text-sm text-[#999] leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 8: FAQ */}
        <section id="faq" className="mt-16 scroll-mt-24">
          <SectionHeading number="08" highlight="Asked">
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
              Free Quote
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight">
              Ready to Wrap Your{" "}
              <span className="text-[#22d65f] glow-accent">Vehicle?</span>
            </h2>
            <p className="mt-4 text-[#999] max-w-xl mx-auto leading-relaxed">
              Accurate Autoworks wraps cars, trucks, SUVs, vans, and commercial
              fleets — in Stony Plain and serving Spruce Grove, Parkland County,
              Acheson, and Edmonton. Premium cast vinyl, professional
              installation, real results. Free consultation, no pressure.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Get a Free Wrap Quote
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
                customize their vehicles since 2023. Wraps, tinting, PPF,
                detailing, and commercial print under one roof.
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

      {/* Schema: Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "How Much Does a Vehicle Wrap Cost in 2026? Alberta Pricing Guide",
            description:
              "Real 2026 Alberta pricing for car wraps — full colour change, partial wraps, commercial fleet graphics, and what drives costs up or down.",
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
                "https://www.accurateautoworks.ca/blog/vehicle-wrap-cost-2026-alberta/",
            },
            keywords:
              "car wrap cost Alberta, vehicle wrap price Spruce Grove, vehicle wrap cost 2026, vinyl wrap cost Stony Plain, fleet wrap pricing Alberta",
          }),
        }}
      />

      {/* Schema: LocalBusiness */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AutoRepair",
            name: "Accurate Autoworks",
            description:
              "Stony Plain auto customization shop — vinyl wraps, window tinting, PPF, detailing, and commercial signs.",
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

      {/* Schema: FAQPage */}
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

function RatingBadge({ level, label }: { level: string; label: string }) {
  const colors: Record<string, string> = {
    premium: "bg-[#22d65f]/15 text-[#22d65f] border-[#22d65f]/30",
    great: "bg-white/5 text-white border-white/20",
    standard: "bg-[#666]/10 text-[#999] border-[#666]/20",
  };
  return (
    <span
      className={`inline-block px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full border ${
        colors[level] || colors.standard
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
