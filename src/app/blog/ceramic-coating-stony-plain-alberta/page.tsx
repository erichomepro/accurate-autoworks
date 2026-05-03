import Link from "next/link";
import type { Metadata } from "next";
import { BlogPostClient } from "./client";

export const metadata: Metadata = {
  title: "Ceramic Coating Stony Plain & Spruce Grove | Accurate Autoworks",
  description:
    "Ceramic coating in Stony Plain: how it works, 2026 Alberta costs, how long it lasts, and whether it's worth it for your truck or SUV.",
  alternates: {
    canonical:
      "https://www.accurateautoworks.ca/blog/ceramic-coating-stony-plain-alberta/",
  },
  openGraph: {
    title: "Ceramic Coating Stony Plain & Spruce Grove | Accurate Autoworks",
    description:
      "How ceramic coating works, what it costs in 2026, Alberta-specific benefits, and how it compares to wax and PPF for local drivers.",
    type: "article",
    url: "https://www.accurateautoworks.ca/blog/ceramic-coating-stony-plain-alberta/",
    locale: "en_CA",
    siteName: "Accurate Autoworks",
  },
};

const FAQ_DATA = [
  {
    q: "What exactly is ceramic coating and how does it work?",
    a: "Ceramic coating is a liquid polymer — typically silicon dioxide (SiO2) or titanium dioxide (TiO2) — that chemically bonds to your vehicle's clear coat at a molecular level. Once cured, it forms a hard, hydrophobic layer that sits on top of your paint, repelling water, road grime, bird droppings, bug acids, and UV radiation. Unlike wax, which sits on the surface and washes away, a professional ceramic coating from Accurate Autoworks becomes part of the paint system and cannot be removed by washing or rain. It typically measures 9H on the pencil hardness scale, which is harder than your factory clear coat.",
  },
  {
    q: "How long does ceramic coating last in Alberta?",
    a: "A professionally applied ceramic coating at Accurate Autoworks will last two to five years or more depending on the grade chosen and how well the vehicle is maintained. Alberta's climate is hard on vehicles — road salt, freeze-thaw cycles, and intense summer UV accelerate wear on any protective product — but a quality multi-layer coating applied over properly prepared paint holds up remarkably well. Consumer-grade DIY coatings degrade faster and typically last one season. Call 780.818.9904 to discuss which grade makes sense for how long you plan to keep your vehicle.",
  },
  {
    q: "Does ceramic coating prevent rock chips and scratches?",
    a: "Ceramic coating significantly improves resistance to light surface scratches — the kind caused by improper washing, road dust, and minor abrasion. However, it is not a physical barrier against rock chips or road debris the way paint protection film (PPF) is. If rock chip protection is your primary concern, especially on the hood, front bumper, and mirrors, Accurate Autoworks recommends pairing ceramic coating with PPF on the high-impact zones. Ceramic on the rest of the vehicle, PPF on the front, is the complete protection setup for Alberta roads.",
  },
  {
    q: "How much does ceramic coating cost in Stony Plain?",
    a: "In the Stony Plain and Spruce Grove area, professional ceramic coating ranges from roughly $500 to $700 for an entry-level single-layer application on a standard sedan, up to $1,600 to $2,500 or more for a premium multi-layer coating with full paint correction on a truck or SUV. Paint condition matters: if your paint needs correction before coating, that adds $200 to $600 to the job. Call Accurate Autoworks at 780.818.9904 or visit our detailing page for an accurate quote on your specific vehicle.",
  },
  {
    q: "Can I apply ceramic coating myself?",
    a: "Consumer-grade ceramic coatings are available at auto parts stores, and some do provide real protection. The problem is preparation — applying a ceramic coating over contaminated, oxidized, or scratched paint locks those defects in permanently. Professional application at Accurate Autoworks includes a full decontamination wash, clay bar treatment, and paint correction before any coating goes on. The result is a deeper gloss and a longer-lasting bond that DIY kits cannot replicate. For a daily driver, a professional coating properly applied is worth the price difference over doing it yourself.",
  },
  {
    q: "How do I maintain a ceramic-coated vehicle in Alberta?",
    a: "Ceramic coating makes maintenance easier, not unnecessary. For best longevity, use pH-neutral car wash soap rather than dish soap or all-purpose cleaners, avoid automatic brushless car washes that grind grit across the surface, and rinse off road salt after winter drives when possible. Avoid parking under trees where sap and bird droppings can sit for days — while the coating resists their acids better than bare paint, prolonged contact still etches through over time. Many owners apply an annual maintenance coat (a spray SiO2 booster) to extend the coating's hydrophobic performance.",
  },
  {
    q: "Should I get ceramic coating or PPF? What is the difference?",
    a: "Paint protection film (PPF) is a thick, self-healing urethane film that absorbs physical impacts from gravel, road debris, and rock chips. Ceramic coating is a chemical layer that repels water, chemicals, and UV, and provides minor scratch resistance, but does not absorb physical impacts. PPF is the better choice for high-impact zones like the front bumper, hood, and mirrors on gravel-road Alberta vehicles. Ceramic is better suited for the full vehicle as a maintenance and appearance upgrade. At Accurate Autoworks, we often install PPF on the front and ceramic coat the rest for complete protection.",
  },
  {
    q: "How long does ceramic coating application take?",
    a: "A basic single-layer coating on a clean, already-detailed vehicle can be completed in a half-day. A full premium package — wash, decontamination, clay bar, one or two stages of paint correction, and multiple coating layers — typically takes two to three full days including cure time between layers. You will want to leave your vehicle with us for at least one full day, and we recommend keeping it out of rain and automatic washes for the first seven days after application while the coating fully cures.",
  },
  {
    q: "Does ceramic coating work in cold Alberta winters?",
    a: "Absolutely. The coating itself is not temperature-sensitive once it has cured — it performs fine from minus-40 Celsius to plus-50. The hydrophobic properties mean ice and snow release more easily from coated paint, and road salt and chemical de-icers have a harder time bonding to and etching the surface. It does not eliminate the need for proper winter washing, but it gives your paint significantly more resistance against the corrosive chemical cocktail on Alberta roads from October through April. Accurate Autoworks recommends applying ceramic coating in late summer or early fall so it is fully cured before the first serious snowfall.",
  },
  {
    q: "What's the difference between ceramic coating and car wax?",
    a: "Wax is a natural or synthetic compound that sits on top of your paint and creates a temporary hydrophobic layer. It lasts two to four months before washing away and provides minimal protection against UV, chemicals, or scratches. Ceramic coating chemically bonds to the clear coat and lasts years. It is harder than wax, provides significantly better UV and chemical resistance, and dramatically reduces the effort needed to keep the vehicle clean. For Stony Plain and Spruce Grove drivers who want a lasting solution rather than a seasonal ritual, ceramic coating is the logical upgrade over wax.",
  },
];

const COST_DATA = [
  { service: "Paint decontamination & prep", cost: "$150 - $300", priority: "Required", level: "essential" },
  { service: "Paint correction (single-stage)", cost: "$200 - $400", priority: "Recommended", level: "recommended" },
  { service: "Paint correction (two-stage)", cost: "$400 - $600", priority: "For older paint", level: "optional" },
  { service: "Entry-level coating (1 - 2 yr)", cost: "$500 - $700", priority: "Budget option", level: "optional" },
  { service: "Standard coating (2 - 3 yr)", cost: "$700 - $1,100", priority: "Most Popular", level: "recommended" },
  { service: "Premium coating (3 - 5 yr)", cost: "$1,100 - $1,600", priority: "Best Value", level: "essential" },
  { service: "Ultimate package (5 - 7 yr)", cost: "$1,600 - $2,500+", priority: "Show / Long-term", level: "optional" },
  { service: "Wheel coating add-on", cost: "$150 - $250", priority: "Add-on", level: "optional" },
];

const COATING_GRADES = [
  {
    name: "Entry",
    layers: "1",
    duration: "1 - 2 years",
    paintCorrection: "None",
    gloss: "Good",
    hardness: "7H",
    albertaRating: "Basic",
    ratingLevel: "basic",
    notes: "Fine for newer vehicles with good paint. Budget-friendly starting point, but plan on a maintenance coat each year.",
  },
  {
    name: "Standard",
    layers: "2 - 3",
    duration: "2 - 3 years",
    paintCorrection: "Light polish",
    gloss: "Very Good",
    hardness: "9H",
    albertaRating: "Good",
    ratingLevel: "good",
    notes: "Best value for daily drivers. Multi-layer depth, solid durability, and real performance against road salt and UV.",
  },
  {
    name: "Premium",
    layers: "3 - 4",
    duration: "3 - 5 years",
    paintCorrection: "Single-stage",
    gloss: "Excellent",
    hardness: "9H+",
    albertaRating: "Best",
    ratingLevel: "best",
    notes: "Full single-stage paint correction plus a top-tier multi-layer coating. For enthusiasts who want it done right.",
    recommended: true,
  },
  {
    name: "Ultimate",
    layers: "4+",
    duration: "5 - 7 years",
    paintCorrection: "Two-stage",
    gloss: "Show-Level",
    hardness: "9H+",
    albertaRating: "Show",
    ratingLevel: "best",
    notes: "Two-stage correction removes virtually all swirl marks before coating. For show trucks, collector vehicles, or long-term ownership.",
  },
];

export default function CeramicCoatingGuide() {
  const publishDate = "2026-05-03";
  const modifiedDate = "2026-05-03";

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
            Ceramic Coating Guide
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black uppercase tracking-tight leading-[1.05]">
            Ceramic Coating in{" "}
            <span className="text-[#22d65f] glow-accent">
              Stony Plain &amp; Spruce Grove
            </span>
            : How It Works, What It Costs &amp; Is It Worth It?
          </h1>

          <p className="mt-8 text-lg sm:text-xl text-[#999] max-w-2xl mx-auto leading-relaxed">
            The straight answer on ceramic coating for Alberta vehicles — what
            it actually protects against, realistic 2026 prices, how it
            compares to wax and PPF, and whether it makes sense for your truck
            or daily driver.
          </p>

          <div className="mt-6 flex items-center justify-center gap-6 text-xs text-[#666] uppercase tracking-wider">
            <div className="flex items-center gap-2">
              <svg className="w-3.5 h-3.5 text-[#22d65f]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <time dateTime={publishDate}>May 3, 2026</time>
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
            Every truck owner in Stony Plain eventually has the same moment.
            You wash your vehicle, step back, and think — it looked better six
            months ago. The paint is dull. There are fine scratches everywhere
            from the last road trip on Highway 43. The glossy black hood has a
            haze from a summer of UV exposure. And no matter how many times you
            wax it, the result lasts about eight weeks before Alberta rain and
            road grime take it back to square one.
          </p>
          <p className="mt-4 text-[#ccc] leading-relaxed text-base sm:text-lg">
            Ceramic coating is the solution a lot of Parkland County drivers
            are turning to — but there is a lot of noise around it. Shops
            overpromise. YouTube tutorials make it sound easy. Price quotes
            vary wildly. This guide cuts through that. You will know exactly
            what ceramic coating does and does not do, what it realistically
            costs at a local shop in 2026, and whether your vehicle is a good
            candidate — based on honest advice from the team at{" "}
            <Link href="/detailing/" className="text-[#22d65f] hover:underline">
              Accurate Autoworks in Stony Plain
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
                { href: "#what-is-ceramic", label: "What Is Ceramic Coating" },
                { href: "#coating-grades", label: "Coating Grades Compared" },
                { href: "#cost-guide", label: "Cost in Stony Plain (2026)" },
                { href: "#alberta-benefits", label: "Why Alberta Vehicles Need It" },
                { href: "#vs-wax-ppf", label: "Ceramic vs Wax vs PPF" },
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

        {/* Section 1: What Is Ceramic Coating */}
        <section id="what-is-ceramic" className="mt-16 scroll-mt-24">
          <SectionHeading number="01" highlight="Ceramic Coating">
            What Is{" "}
          </SectionHeading>
          <p className="mt-6 text-[#ccc] leading-relaxed text-base">
            Ceramic coating is a liquid polymer — the active ingredient is
            typically silicon dioxide (SiO2), sometimes combined with titanium
            dioxide (TiO2) or other ceramic compounds — that is applied to a
            vehicle&apos;s exterior surfaces by hand and left to cure. As it
            cures, the coating undergoes a chemical reaction with the clear
            coat of your paint, forming a covalent bond at a molecular level.
            The result is a hard, transparent, semi-permanent protective layer
            that becomes part of the paint system.
          </p>
          <p className="mt-4 text-[#ccc] leading-relaxed text-base">
            According to{" "}
            <a
              href="https://gtechniq.com/pages/what-is-ceramic-coating"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#22d65f] hover:underline"
            >
              Gtechniq, one of the industry&apos;s leading professional coating
              manufacturers
            </a>
            , professionally applied coatings typically register 9H on the
            pencil hardness scale — harder than your factory clear coat — and
            create a surface contact angle above 110 degrees, meaning water
            beads into spheres and rolls off the surface carrying surface
            contaminants with it. This hydrophobic effect is one of the most
            visible and practical benefits of a quality coating.
          </p>

          <div className="mt-8 space-y-4">
            {[
              {
                title: "What Ceramic Coating Does",
                items: [
                  "Creates a hard protective layer above your clear coat",
                  "Makes the surface extremely hydrophobic — water beads and rolls off",
                  "Resists UV oxidation, preventing paint fade and dulling",
                  "Repels road grime, mud, bird droppings, and bug acids",
                  "Significantly reduces the effort and frequency of washing",
                  "Provides minor scratch resistance against swirl marks and light abrasion",
                  "Enhances paint depth and gloss when applied over corrected paint",
                ],
                variant: "positive" as const,
              },
              {
                title: "What Ceramic Coating Does NOT Do",
                items: [
                  "It does not stop rock chips or deep scratches from gravel roads",
                  "It does not self-heal (unlike premium PPF films)",
                  "It does not eliminate the need for washing — just makes it easier",
                  "It does not fix existing paint defects — it locks them in permanently",
                  "It will not make oxidized or faded paint look new without prior correction",
                  "It is not permanent — it degrades over years and eventually needs reapplication",
                ],
                variant: "negative" as const,
              },
            ].map((block) => (
              <div
                key={block.title}
                className={`relative rounded-2xl overflow-hidden p-6 sm:p-7 ${
                  block.variant === "positive"
                    ? "card-gradient"
                    : "bg-amber-500/[0.04] border border-amber-500/20"
                }`}
              >
                <h3 className={`text-sm font-bold mb-4 ${block.variant === "positive" ? "text-white" : "text-amber-300"}`}>
                  {block.title}
                </h3>
                <ul className="space-y-2">
                  {block.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-[#999]">
                      <span className={`flex-shrink-0 mt-1 w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold ${
                        block.variant === "positive"
                          ? "bg-[#22d65f]/20 text-[#22d65f]"
                          : "bg-amber-500/20 text-amber-400"
                      }`}>
                        {block.variant === "positive" ? "✓" : "✕"}
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <Callout variant="info">
            The most common mistake people make with ceramic coating is skipping
            paint correction. If your paint has swirl marks, water spots, or
            light scratches, the coating seals those defects in permanently
            under a glassy layer — making them more visible, not less. At{" "}
            <Link href="/detailing/" className="text-[#22d65f] hover:underline">
              Accurate Autoworks
            </Link>
            , every ceramic coating job begins with a thorough inspection and
            honest assessment of your paint condition before we touch a bottle
            of coating.
          </Callout>
        </section>

        {/* Section 2: Coating Grades Compared */}
        <section id="coating-grades" className="mt-16 scroll-mt-24">
          <SectionHeading number="02" highlight="Compared">
            Coating Grades{" "}
          </SectionHeading>
          <p className="mt-6 text-[#ccc] leading-relaxed text-base">
            Not all ceramic coatings are the same. Professional installers
            carry multiple product tiers, and the differences in layer count,
            hardness, and how much paint preparation is included have a
            significant impact on the result and how long it lasts. Here is
            how the four main tiers compare.
          </p>

          {/* Desktop table */}
          <div className="mt-8 hidden sm:block rounded-2xl overflow-hidden border border-[#2a2a2a]">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#22d65f]/[0.06]">
                  {["Grade", "Layers", "Duration", "Paint Correction", "Gloss", "Alberta Rating"].map((h) => (
                    <th key={h} className="text-left py-4 px-4 text-xs font-bold uppercase tracking-widest text-[#22d65f]">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-[#ccc]">
                {COATING_GRADES.map((row, i) => (
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
                          Recommended
                        </span>
                      )}
                    </td>
                    <td className="py-4 px-4 font-mono font-bold">{row.layers}</td>
                    <td className="py-4 px-4">{row.duration}</td>
                    <td className="py-4 px-4 text-xs">{row.paintCorrection}</td>
                    <td className="py-4 px-4">{row.gloss}</td>
                    <td className="py-4 px-4">
                      <CoatingRatingBadge level={row.ratingLevel} label={row.albertaRating} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="mt-8 sm:hidden space-y-4">
            {COATING_GRADES.map((row) => (
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
                  <CoatingRatingBadge level={row.ratingLevel} label={row.albertaRating} />
                </div>
                {row.recommended && (
                  <div className="mb-3 text-[10px] font-bold uppercase tracking-widest text-[#22d65f]">
                    Our Recommendation
                  </div>
                )}
                <div className="grid grid-cols-2 gap-2 text-xs text-[#999]">
                  <span>Layers: <strong className="text-white">{row.layers}</strong></span>
                  <span>Duration: <strong className="text-white">{row.duration}</strong></span>
                  <span>Gloss: <strong className="text-white">{row.gloss}</strong></span>
                  <span>Correction: <strong className="text-white">{row.paintCorrection}</strong></span>
                </div>
                <p className="mt-3 text-xs text-[#666] leading-relaxed">{row.notes}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-[#ccc] leading-relaxed text-base">
            For most Alberta daily drivers — trucks and SUVs that see highway
            miles, gravel roads, and winter salt — the Premium tier is the
            sweet spot. The single-stage paint correction removes the fine
            swirls and watermarks accumulated from previous seasons, the base
            coat bonds directly to a clean, flat surface for maximum adhesion,
            and the multi-layer build gives you real durability. The entry-tier
            saves money upfront but often ends up costing more if you have to
            redo it after a single rough winter season.
          </p>
        </section>

        {/* Section 3: Cost Guide */}
        <section id="cost-guide" className="mt-16 scroll-mt-24">
          <SectionHeading number="03" highlight="Cost in Stony Plain">
            Ceramic Coating{" "}
          </SectionHeading>
          <p className="mt-6 text-[#ccc] leading-relaxed text-base">
            Here is a realistic pricing breakdown for professional ceramic
            coating in the Stony Plain and Spruce Grove area for 2026. These
            figures represent what you should expect to pay at a shop that
            uses professional-grade products, does proper preparation, and
            backs their work with a warranty.
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
            of 2026. Actual costs vary based on vehicle size, paint condition,
            and coating tier selected. Call 780.818.9904 for an accurate quote
            on your specific vehicle.
          </p>

          <Callout variant="tip">
            <strong className="text-white">Important pricing note:</strong> The
            cost of paint correction is separate from the coating itself. A
            vehicle with clean, relatively new paint needs minimal prep. A
            truck that has been through five Alberta winters with heavy wash
            swirls, water spots, and oxidation will need single- or two-stage
            correction before coating — adding $200 to $600 to the job. Trying
            to skip this step to save money produces a bad result. At{" "}
            <Link href="/detailing/" className="text-[#22d65f] hover:underline">
              Accurate Autoworks
            </Link>
            , we inspect your paint first and only recommend the correction
            your vehicle actually needs.
          </Callout>
        </section>

        {/* Section 4: Alberta Benefits */}
        <section id="alberta-benefits" className="mt-16 scroll-mt-24">
          <SectionHeading number="04" highlight="Alberta Vehicles">
            Why It Matters More for{" "}
          </SectionHeading>
          <p className="mt-6 text-[#ccc] leading-relaxed text-base">
            Ceramic coating is beneficial in any climate, but Alberta throws
            more at your paint than most of Canada. The combination of road
            salt chemistry, UV intensity, temperature extremes, and gravel
            road exposure makes the protection case stronger here than it is
            for someone parking a daily driver in a coastal city. Here is
            why each factor matters.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            {[
              {
                title: "Road Salt & Chemical De-icers",
                icon: "salt",
                detail:
                  "Alberta municipalities use road salt, sand, and chemical de-icing compounds from October through April. These chemicals are highly corrosive — they attack bare paint, penetrate microscopic surface pores, and accelerate oxidation. A properly cured ceramic coating fills those surface pores and gives salt-laden road spray a hydrophobic surface to roll off of instead of sitting and working. Your paint still needs washing after winter drives, but the damage accumulates far more slowly.",
              },
              {
                title: "Intense Summer UV Radiation",
                icon: "sun",
                detail:
                  "Alberta sits at a high latitude with long summer days and clear skies. According to Health Canada, UV radiation is most intense between 11 AM and 3 PM, and damage accumulates year-round — including on overcast days. UV breaks down clear coat at a molecular level, leading to oxidation, colour fade, and eventually chalky paint. Ceramic coating contains UV inhibitors that deflect radiation before it reaches the clear coat, dramatically slowing the oxidation timeline.",
                externalLink: {
                  href: "https://www.canada.ca/en/health-canada/services/sun-safety.html",
                  label: "Health Canada UV safety resources",
                },
              },
              {
                title: "Temperature Swings: -40°C to +35°C",
                icon: "thermometer",
                detail:
                  "Few places in Canada experience the range of temperatures that central Alberta delivers. Wax cannot handle this — it softens in summer heat, becomes brittle in deep cold, and is simply gone after the first freeze-thaw cycle of fall. Ceramic coating is stable across the full range of Alberta temperatures. It does not soften, separate, or degrade with temperature swings, giving you consistent protection from the July heat on the Yellowhead to a February deep freeze in Stony Plain.",
              },
              {
                title: "Gravel Roads & Bug Season",
                icon: "road",
                detail:
                  "Secondary highways around Parkland County, Acheson, and the surrounding rural areas mean gravel exposure for a lot of local trucks. Ceramic coating adds a hard layer between road debris and your clear coat — it does not stop rock chips (that is PPF&apos;s job) but it does resist the fine abrasion of gravel dust and sand that etches unprotected clear coat over thousands of kilometres. Add summer bug season and the acidic splatter it produces, and the case for a chemically resistant coating gets even stronger.",
              },
            ].map((benefit) => (
              <div
                key={benefit.title}
                className="card-gradient rounded-2xl p-6 group hover:border-[#22d65f]/50 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-[#22d65f]/10 flex items-center justify-center mb-4 group-hover:bg-[#22d65f]/20 transition-colors">
                  <svg className="w-5 h-5 text-[#22d65f]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    {benefit.icon === "salt" && (
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    )}
                    {benefit.icon === "sun" && (
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l.707.707M6.343 6.343l.707.707M12 7a5 5 0 100 10 5 5 0 000-10z" />
                    )}
                    {benefit.icon === "thermometer" && (
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                    )}
                    {benefit.icon === "road" && (
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
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

        {/* Section 5: Ceramic vs Wax vs PPF */}
        <section id="vs-wax-ppf" className="mt-16 scroll-mt-24">
          <SectionHeading number="05" highlight="Wax vs PPF">
            Ceramic Coating vs{" "}
          </SectionHeading>
          <p className="mt-6 text-[#ccc] leading-relaxed text-base">
            The three most common paint protection options — wax, ceramic
            coating, and paint protection film — each solve a different
            problem. Understanding which does what is the key to making the
            right investment for your vehicle and how you use it.
          </p>

          <div className="mt-8 space-y-5">
            <div className="card-gradient rounded-2xl p-6 sm:p-8">
              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="text-sm font-bold uppercase tracking-wide text-white">
                  Wax: Temporary and Limited
                </h3>
                <span className="flex-shrink-0 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border text-[#999] border-[#333] bg-[#333]/20">
                  2 - 4 months
                </span>
              </div>
              <p className="text-sm text-[#999] leading-relaxed">
                Car wax — whether carnauba or synthetic polymer — sits on top
                of your paint rather than bonding to it. It creates a
                temporary hydrophobic layer and adds some gloss, but it
                begins degrading immediately when exposed to UV, rain, and
                temperature swings. In Alberta conditions, expect six to
                twelve weeks of real protection before it is effectively gone.
                Wax does not provide meaningful chemical resistance, scratch
                protection, or UV blocking. It is a maintenance product, not
                a protection system. If you are waxing your truck three times
                a year and still ending up with dull, scratched paint, ceramic
                coating is the logical next step.
              </p>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-[#22d65f]/30 bg-gradient-to-br from-[#22d65f]/[0.06] to-[#141414]">
              <div className="absolute top-0 right-0 px-3 py-1 bg-[#22d65f] text-black text-[10px] font-bold uppercase tracking-widest rounded-bl-lg">
                This Page
              </div>
              <div className="p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="text-sm font-bold uppercase tracking-wide text-white">
                    Ceramic Coating: Semi-Permanent Chemical Protection
                  </h3>
                  <span className="flex-shrink-0 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border text-[#22d65f] border-[#22d65f]/30 bg-[#22d65f]/10">
                    2 - 7 years
                  </span>
                </div>
                <p className="text-sm text-[#999] leading-relaxed">
                  Ceramic coating bonds chemically to the clear coat and
                  provides multi-year protection against UV, road grime,
                  chemical contamination, minor scratches, and water damage.
                  It dramatically reduces washing effort, maintains gloss
                  without buffing, and is stable through Alberta&apos;s full
                  temperature range. It is the right choice for the full body
                  of any vehicle where appearance matters — trucks, SUVs,
                  cars, and even commercial fleet vehicles. However, it does
                  not absorb physical impacts from gravel or road debris.
                  That is where PPF comes in.
                </p>
              </div>
            </div>

            <div className="card-gradient rounded-2xl p-6 sm:p-8">
              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="text-sm font-bold uppercase tracking-wide text-white">
                  PPF (Paint Protection Film): Physical Impact Shield
                </h3>
                <span className="flex-shrink-0 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border text-[#999] border-[#333] bg-[#333]/20">
                  5 - 10 years
                </span>
              </div>
              <p className="text-sm text-[#999] leading-relaxed">
                Paint protection film is a thick, optically clear urethane
                film that absorbs rock chips, gravel impact, and road debris
                before they reach your paint. Premium self-healing PPF films
                repair minor scratches when exposed to heat. PPF is the best
                choice for high-impact zones — the leading edge of the hood,
                the front bumper, the A-pillars, the mirrors, and rocker
                panels on lifted trucks. It costs more per square foot than
                ceramic coating, which is why most owners protect the front
                end with PPF and coat the rest of the vehicle with ceramic.
                Learn more on our{" "}
                <Link href="/ppf/" className="text-[#22d65f] hover:underline">
                  paint protection film page
                </Link>
                .
              </p>
            </div>
          </div>

          <Callout variant="info">
            <strong className="text-white">The complete setup:</strong>{" "}
            For a truck that sees Parkland County gravel, highway miles, and
            year-round Alberta weather, the optimal protection strategy is
            PPF on the front end and doors, ceramic coating on the rest. You
            get physical impact protection where it matters most and
            semi-permanent chemical and UV protection across the whole
            vehicle. Accurate Autoworks offers both services under one roof —
            ask about combination pricing when you call{" "}
            <a href="tel:7808189904" className="text-[#22d65f] hover:underline font-bold">
              780.818.9904
            </a>
            . For comparison, our{" "}
            <Link href="/blog/ppf-vs-vinyl-wrap-alberta-guide/" className="text-[#22d65f] hover:underline">
              PPF vs vinyl wrap guide
            </Link>{" "}
            covers how these technologies stack up for different use cases.
          </Callout>
        </section>

        {/* Section 6: What to Expect */}
        <section id="what-to-expect" className="mt-16 scroll-mt-24">
          <SectionHeading number="06" highlight="at Accurate Autoworks">
            What to Expect{" "}
          </SectionHeading>
          <p className="mt-6 text-[#ccc] leading-relaxed text-base">
            Here is exactly what the ceramic coating process looks like when
            you bring your vehicle to Accurate Autoworks on Boulder Boulevard
            in Stony Plain. No surprises, no upsells once the vehicle is on
            the lift.
          </p>

          <div className="mt-8 space-y-4">
            {[
              {
                step: "01",
                title: "Free Paint Inspection & Quote",
                description:
                  "We start by examining your paint in proper lighting — looking at the condition of the clear coat, identifying swirl marks, water spots, oxidation, and any existing damage. This inspection determines exactly how much paint correction your vehicle actually needs before coating, and gives you an honest quote upfront. We do not charge for the inspection, and we will not talk you into correction work your paint does not need.",
              },
              {
                step: "02",
                title: "Wash & Full Decontamination",
                description:
                  "Before any correction or coating begins, the entire vehicle is washed using a pH-neutral soap, then treated with an iron fallout remover to dissolve embedded brake dust and rail dust that a regular wash cannot shift. This is followed by a full clay bar treatment to pull surface contaminants out of the paint. You are starting with a genuinely clean surface — not just visually clean.",
              },
              {
                step: "03",
                title: "Paint Correction (If Required)",
                description:
                  "If your paint needs it, we perform machine polishing to remove or reduce swirl marks, haze, water etching, and light scratches. Light single-stage correction is included in the Premium tier. Two-stage correction — the kind needed on older vehicles or paint with significant marring — is a separate line item but produces a result that is dramatically better under the final coating. We show you before-and-after images using a paint inspection light at this stage.",
              },
              {
                step: "04",
                title: "Panel Wipe & Surface Prep",
                description:
                  "After correction, the paint is wiped down with an IPA (isopropyl alcohol) solution to remove any remaining polish oils or residue. This step is critical — any oil left on the surface prevents the ceramic coating from bonding properly. The vehicle is then moved into a clean, dust-controlled environment for coating application.",
              },
              {
                step: "05",
                title: "Ceramic Coating Application",
                description:
                  "The coating is applied panel by panel using an applicator block, worked into the surface in crosshatch patterns, allowed to flash (begin curing) for the manufacturer-specified time, then levelled off with a clean microfibre cloth. On multi-layer packages, each layer fully cures before the next goes on — this cannot be rushed. The entire application process takes several hours to a full day depending on tier and vehicle size.",
              },
              {
                step: "06",
                title: "Cure Time & Aftercare Instructions",
                description:
                  "Most professional coatings require 24 to 48 hours before any water contact and full cure in 7 days. We will give you specific care instructions: no washing for the first week, avoid parking under trees during initial cure, and no automatic car washes ever (the brushes create the swirl marks you just paid to remove). At the 7-day mark, your coating is fully hard and ready for normal use.",
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
            <strong className="text-white">Best time to book:</strong> Late
            summer and early fall — August through October — is the ideal
            window to apply ceramic coating in Alberta. Your vehicle is fresh
            from a summer of use, paint temperatures are ideal for curing, and
            the coating will be fully hardened before the first winter salt
            hits in November. Call{" "}
            <a href="tel:7808189904" className="text-[#22d65f] hover:underline font-bold">
              780.818.9904
            </a>{" "}
            to book — late summer slots fill up fast. We also handle{" "}
            <Link href="/tinting/" className="text-[#22d65f] hover:underline">
              window tinting
            </Link>{" "}
            and{" "}
            <Link href="/wraps/" className="text-[#22d65f] hover:underline">
              vinyl wraps
            </Link>{" "}
            if you want to combine services on the same visit.
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
              Free Paint Inspection
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight">
              Ready to Protect Your{" "}
              <span className="text-[#22d65f] glow-accent">Paint?</span>
            </h2>
            <p className="mt-4 text-[#999] max-w-xl mx-auto leading-relaxed">
              Ceramic coating, PPF, detailing, window tinting, and vinyl
              wraps — Accurate Autoworks handles everything under one roof
              in Stony Plain. Serving Spruce Grove, Parkland County,
              Acheson, and Edmonton West. Free paint inspection, no
              obligation.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Book Your Free Inspection
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
                Stony Plain, Alberta. Helping local drivers protect and
                customize their vehicles since 2023. Ceramic coating, PPF,
                detailing, tinting, wraps, and commercial print under one roof.
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
              "Ceramic Coating in Stony Plain: How It Works, What It Costs & Is It Worth It?",
            description:
              "Everything Alberta drivers need to know about ceramic coating — how it works, realistic 2026 costs, Alberta-specific benefits, and how it compares to wax and PPF. Accurate Autoworks, Stony Plain.",
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
                "https://www.accurateautoworks.ca/blog/ceramic-coating-stony-plain-alberta/",
            },
            keywords:
              "ceramic coating Stony Plain, ceramic coating Spruce Grove, ceramic coat Edmonton, paint protection Alberta, nano coating Alberta",
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
              "Stony Plain's premier auto customization shop offering ceramic coating, paint protection film, window tinting, vinyl wraps, auto detailing, and commercial printing.",
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

function CoatingRatingBadge({ level, label }: { level: string; label: string }) {
  const colors: Record<string, string> = {
    best: "bg-[#22d65f]/15 text-[#22d65f] border-[#22d65f]/30",
    good: "bg-white/5 text-white border-white/20",
    basic: "bg-[#666]/10 text-[#999] border-[#666]/20",
  };
  return (
    <span
      className={`inline-block px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full border ${
        colors[level] || colors.basic
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
