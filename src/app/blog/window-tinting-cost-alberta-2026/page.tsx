import Link from "next/link";
import type { Metadata } from "next";
import { BlogPostClient } from "./client";

export const metadata: Metadata = {
  title: "Window Tinting Cost in Alberta 2026",
  description:
    "How much does window tinting cost in Alberta in 2026? Dyed, carbon, and ceramic tint pricing, Alberta tint laws, and what to expect. Stony Plain & Spruce Grove.",
  alternates: {
    canonical:
      "https://www.accurateautoworks.ca/blog/window-tinting-cost-alberta-2026/",
  },
  openGraph: {
    title: "Window Tinting Cost in Alberta 2026 | Accurate Autoworks",
    description:
      "Real 2026 Alberta window tint pricing, dyed vs carbon vs ceramic, the legal tint limits, and what drives the price up or down.",
    type: "article",
    url: "https://www.accurateautoworks.ca/blog/window-tinting-cost-alberta-2026/",
    locale: "en_CA",
    siteName: "Accurate Autoworks",
  },
};

const FAQ_DATA = [
  {
    q: "How much does it cost to tint car windows in Alberta in 2026?",
    a: "A full vehicle tint in Alberta runs roughly $120 to $200 for basic dyed film, $200 to $350 for carbon, and $350 to $650 for quality ceramic, depending on vehicle size and how many windows are done. Two front windows on their own usually run $90 to $180. At Accurate Autoworks in Stony Plain, we quote your exact vehicle before any work starts, call 780.818.9904 for a firm number.",
  },
  {
    q: "Is ceramic tint worth the extra money?",
    a: "For most Alberta drivers, yes. Ceramic film rejects far more heat and infrared energy than dyed or carbon film at the same shade, so your interior stays cooler in summer and your AC works less. It also blocks over 99% of UV rays without interfering with phone, GPS, or radio signals the way old metallic films did, and it will not fade purple over time. If you keep your vehicle for more than a couple of years, ceramic pays for itself in comfort and durability.",
  },
  {
    q: "Is it worth tinting just the windshield, and what does it cost in Alberta?",
    a: "A full windshield tint is not legal in Alberta, but a ceramic windshield film applied below the legal visor strip is one of the best heat-rejection upgrades you can do. It blocks the intense UV and infrared that beats through front glass on summer highway drives and reduces the brutal sun glare that hits drivers low in the sky during Alberta winters. A ceramic windshield film installation typically runs $150 to $350 depending on vehicle size. At Accurate Autoworks in Stony Plain, we quote your exact vehicle before any work starts, call 780.818.9904 for pricing.",
  },
  {
    q: "Why is some window tint so cheap?",
    a: "A $99 full-car special almost always means low-grade dyed film, a rushed install, or both, and it frequently excludes the rear windshield, which is the hardest and most expensive piece to do. Cheap film turns purple, bubbles, and peels within a year or two in Alberta's sun and cold, and then you pay again to have it removed and redone. Paying once for quality film and a clean install is cheaper than paying twice.",
  },
  {
    q: "How long does window tint last in Alberta's climate?",
    a: "Quality ceramic or carbon film installed correctly lasts the life of the vehicle for most owners, often 10 years or more, and carries a manufacturer warranty against fading, bubbling, and peeling. Cheap dyed film in our freeze-thaw climate may start failing in as little as 1 to 3 years. The film grade and the quality of the install are what determine lifespan, not the shade.",
  },
  {
    q: "Does installing window tint increase my vehicle's resale value?",
    a: "Properly installed, quality window tint adds to resale value in two ways: it preserves the interior by blocking UV that causes dashboard cracking, seat fading, and upholstery damage, and it appeals to buyers who value the privacy, look, and heat rejection it delivers. The key is quality. Bubbling or purple-shifted cheap film actively hurts resale by making a vehicle look neglected. Ceramic tint from a shop like Accurate Autoworks stays clean and clear for years, making it a visible upgrade that future buyers will notice.",
  },
  {
    q: "How long does it take to tint a vehicle?",
    a: "A full vehicle tint typically takes 2 to 4 hours depending on the number of windows and the vehicle's glass shape. Two front windows can often be done in under an hour. After installation, the film needs a few days to fully cure, you may see a slight haze or small water pockets during that time, which clear on their own. We will walk you through the cure process when you pick up.",
  },
  {
    q: "Can old or bubbling tint be removed and replaced?",
    a: "Yes. We remove old, purple, or bubbling film, clean off the adhesive, and install fresh film properly. Tint removal usually runs $50 to $150 depending on how many windows and how stubborn the old adhesive is (rear windows with defroster lines take extra care). If you are tired of looking at failing tint, bring it in and we will give you a clean start.",
  },
];

const COST_DATA = [
  { service: "Two front windows (dyed)", cost: "$90 - $150", priority: "Budget-Friendly", level: "optional" },
  { service: "Two front windows (ceramic)", cost: "$150 - $280", priority: "Popular", level: "recommended" },
  { service: "Full vehicle, dyed film", cost: "$120 - $200", priority: "Budget-Friendly", level: "optional" },
  { service: "Full vehicle, carbon film", cost: "$200 - $350", priority: "Popular", level: "recommended" },
  { service: "Full vehicle, ceramic film", cost: "$350 - $650", priority: "Most Popular", level: "essential" },
  { service: "Full vehicle, premium IR ceramic", cost: "$550 - $850", priority: "Top Tier", level: "essential" },
  { service: "Windshield (full ceramic)", cost: "$150 - $350", priority: "Heat / UV", level: "recommended" },
  { service: "Old tint removal", cost: "$50 - $150", priority: "Add-on", level: "optional" },
];

const FILM_TYPES = [
  {
    name: "Dyed",
    cost: "$",
    heat: "Low",
    durability: "1 - 3 years",
    bestFor: "Privacy on a tight budget",
    rating: "standard",
    ratingLabel: "Budget",
    notes: "Cheapest option. Blocks glare and adds privacy, but rejects little heat and tends to fade purple over time in Alberta sun.",
  },
  {
    name: "Carbon",
    cost: "$$",
    heat: "Medium",
    durability: "5 - 10 years",
    bestFor: "A solid all-rounder",
    rating: "great",
    ratingLabel: "Great Value",
    notes: "Matte, non-reflective look that will not fade purple. Good heat rejection at a mid-range price. A big step up from dyed.",
  },
  {
    name: "Ceramic",
    cost: "$$$",
    heat: "High",
    durability: "10+ years",
    bestFor: "Most drivers who keep their vehicle",
    rating: "premium",
    ratingLabel: "Best Overall",
    notes: "Excellent heat and infrared rejection, blocks 99%+ UV, no signal interference, and will not fade. The sweet spot for comfort and longevity.",
    recommended: true,
  },
  {
    name: "Premium IR Ceramic",
    cost: "$$$$",
    heat: "Maximum",
    durability: "10+ years",
    bestFor: "Maximum comfort, big glass, EVs",
    rating: "premium",
    ratingLabel: "Top Tier",
    notes: "Top-shelf infrared-rejection ceramic. Noticeably cooler cabin even at lighter shades. Popular on trucks, SUVs, and EVs with large glass.",
  },
];

export default function WindowTintingCostAlberta2026() {
  const publishDate = "2026-06-23";
  const modifiedDate = "2026-06-23";

  return (
    <article className="pb-20">
      <BlogPostClient />

      {/* Hero Section */}
      <header className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#EEFF00]/5 via-transparent to-transparent" />
        <div className="absolute inset-0 hero-stripe opacity-50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#EEFF00]/[0.03] rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-3 px-5 py-2 mb-8 text-xs font-bold uppercase tracking-[3px] text-[#EEFF00] border border-[#EEFF00]/30 rounded-full backdrop-blur-sm bg-[#EEFF00]/5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#EEFF00] animate-pulse" />
            Alberta Pricing Guide 2026
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black uppercase tracking-tight leading-[1.05]">
            How Much Does{" "}
            <span className="text-[#EEFF00] glow-accent">Window Tinting</span>{" "}
            Cost in Alberta?
          </h1>

          <p className="mt-8 text-lg sm:text-xl text-[#999] max-w-2xl mx-auto leading-relaxed">
            Real 2026 pricing for dyed, carbon, and ceramic tint, the legal
            limits you need to know in Alberta, and exactly what separates a
            good tint job from a cheap one that fails.
          </p>

          <div className="mt-6 flex items-center justify-center gap-6 text-xs text-[#666] uppercase tracking-wider">
            <div className="flex items-center gap-2">
              <svg className="w-3.5 h-3.5 text-[#EEFF00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <time dateTime={publishDate}>June 23, 2026</time>
            </div>
            <span className="w-1 h-1 rounded-full bg-[#333]" />
            <div className="flex items-center gap-2">
              <svg className="w-3.5 h-3.5 text-[#EEFF00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>12 min read</span>
            </div>
          </div>

          <div className="mt-12 flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#EEFF00]/40" />
            <div className="w-2 h-2 rotate-45 border border-[#EEFF00]/40" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#EEFF00]/40" />
          </div>
        </div>
      </header>

      {/* Article Body */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6">

        {/* Intro */}
        <div className="prose-section">
          <p className="text-[#ccc] leading-relaxed text-base sm:text-lg">
            &ldquo;How much to tint my windows?&rdquo; is one of the most common
            questions we hear at{" "}
            <Link href="/tinting/" className="text-[#EEFF00] hover:underline">
              Accurate Autoworks
            </Link>
            . The honest answer is that it depends on the film you choose, your
            vehicle, and how many windows you want done, but there is a clear
            and predictable range once you understand the options. This guide
            gives you real 2026 pricing for the Stony Plain, Spruce Grove, and
            Edmonton area, not the vague national numbers you find elsewhere.
          </p>
          <p className="mt-4 text-[#ccc] leading-relaxed text-base sm:text-lg">
            We will also cover something most price guides skip entirely: the
            Alberta tint law. The fronts of your vehicle are regulated, and a
            shop that ignores that is setting you up for tickets and failed
            inspections. By the end you will know what to budget, which film is
            right for you, and how to spot a quote that is too good to be true.
          </p>
        </div>

        {/* Table of Contents */}
        <nav className="mt-12 relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#EEFF00]/10 via-[#141414] to-[#141414]" />
          <div className="absolute inset-0 border border-[#EEFF00]/20 rounded-2xl" />
          <div className="relative p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-[#EEFF00]/10 flex items-center justify-center">
                <svg className="w-4 h-4 text-[#EEFF00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
              </div>
              <h2 className="text-sm font-bold uppercase tracking-widest text-[#EEFF00]">
                What We Cover
              </h2>
            </div>
            <ol className="grid sm:grid-cols-2 gap-x-6 gap-y-3 text-sm">
              {[
                { href: "#pricing-breakdown", label: "2026 Alberta Tint Pricing" },
                { href: "#film-types", label: "Dyed vs Carbon vs Ceramic" },
                { href: "#what-drives-cost", label: "What Drives the Price" },
                { href: "#alberta-law", label: "Alberta Tint Laws" },
                { href: "#cheap-tint", label: "Why Cheap Tint Costs More" },
                { href: "#red-flags", label: "Red Flags in a Cheap Quote" },
                { href: "#faq", label: "Frequently Asked Questions" },
              ].map((item, i) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="flex items-center gap-3 py-1.5 text-[#999] hover:text-[#EEFF00] transition-colors group"
                  >
                    <span className="flex-shrink-0 w-6 h-6 rounded-md bg-[#EEFF00]/10 text-[#EEFF00] text-xs font-bold flex items-center justify-center group-hover:bg-[#EEFF00]/20 transition-colors">
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
          <SectionHeading number="01" highlight="Tint Pricing">
            2026 Alberta{" "}
          </SectionHeading>
          <p className="mt-6 text-[#ccc] leading-relaxed text-base">
            These are real-world prices from a quality professional shop in the
            Edmonton area in 2026. They assume name-brand film, proper glass
            prep, and a clean, warranted installation. Bargain-basement specials
            using cheap film and a rushed install will be lower, and the result
            will show it within a year.
          </p>

          {/* Desktop table */}
          <div className="mt-8 hidden sm:block rounded-2xl overflow-hidden border border-[#2a2a2a]">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#EEFF00]/[0.06]">
                  {["Service", "Cost Range (CAD)", "Notes"].map((h) => (
                    <th key={h} className="text-left py-4 px-5 text-xs font-bold uppercase tracking-widest text-[#EEFF00]">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-[#ccc]">
                {COST_DATA.map((row, i) => (
                  <tr
                    key={row.service}
                    className={`border-t border-[#1e1e1e] transition-colors hover:bg-[#EEFF00]/[0.03] ${
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
            Actual cost depends on vehicle size, glass shape, number of windows, and film selected.
            Call 780.818.9904 for an exact quote on your vehicle.
          </p>

          <Callout variant="tip">
            <strong className="text-white">Most popular package:</strong>{" "}
            For daily drivers in the Edmonton area, a full ceramic tint hits the
            best balance of heat rejection, looks, and longevity. See our{" "}
            <Link href="/tinting/" className="text-[#EEFF00] hover:underline">
              window tinting service page
            </Link>{" "}
            for the films we carry, or read our{" "}
            <Link href="/blog/window-tinting-stony-plain-spruce-grove/" className="text-[#EEFF00] hover:underline">
              complete window tinting guide
            </Link>{" "}
            for a deeper look at shades and film grades.
          </Callout>
        </section>

        {/* Section 2: Film Types */}
        <section id="film-types" className="mt-16 scroll-mt-24">
          <SectionHeading number="02" highlight="Ceramic">
            Dyed vs Carbon vs{" "}
          </SectionHeading>
          <p className="mt-6 text-[#ccc] leading-relaxed text-base">
            The film you choose is the single biggest factor in both price and
            performance. Here is how the main categories compare for Alberta
            driving. For a deeper technical breakdown of how film blocks heat
            and UV, the{" "}
            <a
              href="https://iwfa.com/learn-about-film/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#EEFF00] hover:underline"
            >
              International Window Film Association
            </a>{" "}
            is a solid independent reference.
          </p>

          {/* Desktop table */}
          <div className="mt-8 hidden sm:block rounded-2xl overflow-hidden border border-[#2a2a2a]">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#EEFF00]/[0.06]">
                  {["Film Type", "Cost", "Heat Rejection", "Lifespan", "Best For", "Rating"].map((h) => (
                    <th key={h} className="text-left py-4 px-4 text-xs font-bold uppercase tracking-widest text-[#EEFF00]">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-[#ccc]">
                {FILM_TYPES.map((row, i) => (
                  <tr
                    key={row.name}
                    className={`border-t border-[#1e1e1e] transition-colors hover:bg-[#EEFF00]/[0.03] ${
                      row.recommended ? "bg-[#EEFF00]/[0.04]" : i % 2 === 0 ? "bg-[#141414]" : "bg-[#0f0f0f]"
                    }`}
                  >
                    <td className="py-4 px-4 font-bold text-white">
                      {row.name}
                      {row.recommended && (
                        <span className="ml-2 text-[10px] font-bold uppercase tracking-widest text-[#EEFF00] px-2 py-0.5 rounded-full bg-[#EEFF00]/15">
                          Best Overall
                        </span>
                      )}
                    </td>
                    <td className="py-4 px-4 font-mono font-bold">{row.cost}</td>
                    <td className="py-4 px-4">{row.heat}</td>
                    <td className="py-4 px-4">{row.durability}</td>
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
            {FILM_TYPES.map((row) => (
              <div
                key={row.name}
                className={`rounded-2xl p-5 border ${
                  row.recommended
                    ? "border-[#EEFF00]/30 bg-[#EEFF00]/[0.06]"
                    : "card-gradient"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-bold text-white text-sm">{row.name}</span>
                  <RatingBadge level={row.rating} label={row.ratingLabel} />
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs text-[#999]">
                  <span>Cost: <strong className="text-white">{row.cost}</strong></span>
                  <span>Heat: <strong className="text-white">{row.heat}</strong></span>
                  <span>Lifespan: <strong className="text-white">{row.durability}</strong></span>
                </div>
                <p className="mt-3 text-xs text-[#666] leading-relaxed">{row.notes}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: What Drives Cost */}
        <section id="what-drives-cost" className="mt-16 scroll-mt-24">
          <SectionHeading number="03" highlight="the Price">
            What Drives{" "}
          </SectionHeading>
          <p className="mt-6 text-[#ccc] leading-relaxed text-base">
            Two tint quotes can differ by hundreds of dollars for reasons that
            are not obvious until you know what to look at. These are the
            factors that actually move the number.
          </p>

          <div className="mt-8 space-y-5">
            {[
              {
                n: "01",
                title: "Film Grade",
                body: "This is the big one. Dyed film is cheap and short-lived. Carbon is a strong mid-tier. Ceramic and infrared-rejection ceramic cost more because they reject far more heat and carry long warranties. The film alone can swing a full-vehicle price by $300 or more.",
              },
              {
                n: "02",
                title: "Number of Windows",
                body: "Two front windows is the cheapest job. A full vehicle adds the rear doors, rear quarter glass, and the rear windshield. The rear windshield is the most labour-intensive single piece on the car, which is exactly why cheap specials quietly leave it out.",
              },
              {
                n: "03",
                title: "Vehicle Size & Glass Shape",
                body: "A coupe has less glass than a crew-cab truck or a three-row SUV. Steeply curved rear glass and large panoramic EV windows take more film and more skill to install without creases, which adds to both material and labour.",
              },
              {
                n: "04",
                title: "Old Tint Removal",
                body: "If you have existing film that is bubbling or turning purple, it has to come off first. Removal and adhesive cleanup is a real labour step, especially on rear windows with defroster lines, and it typically adds $50 to $150.",
              },
            ].map((item) => (
              <div key={item.n} className="card-gradient rounded-2xl p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#EEFF00]/10 flex items-center justify-center">
                    <span className="text-[#EEFF00] text-xs font-black">{item.n}</span>
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-wide text-white">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm text-[#999] leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          <Callout variant="info">
            Getting tint at the same time as{" "}
            <Link href="/ppf/" className="text-[#EEFF00] hover:underline">
              paint protection film
            </Link>{" "}
            or a fresh{" "}
            <Link href="/detailing/" className="text-[#EEFF00] hover:underline">
              detail
            </Link>
            ? Bundling services in one visit saves you time and often a bit of
            money. Ask us about combo pricing when you call.
          </Callout>
        </section>

        {/* Section 4: Alberta Law */}
        <section id="alberta-law" className="mt-16 scroll-mt-24">
          <SectionHeading number="04" highlight="Tint Laws">
            Alberta{" "}
          </SectionHeading>
          <p className="mt-6 text-[#ccc] leading-relaxed text-base">
            This is the part bargain shops gloss over. Alberta regulates the
            front of your vehicle, and getting it wrong means tickets, hassle at
            inspection, and paying to redo the work. The rules are set out under
            Alberta&apos;s{" "}
            <a
              href="https://www.alberta.ca/vehicle-equipment-regulations"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#EEFF00] hover:underline"
            >
              vehicle equipment regulations
            </a>
            . Here is the plain-English version.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            <div className="card-gradient rounded-2xl p-6 border-t-2 border-t-amber-500/40">
              <div className="mb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Regulated</span>
                <h3 className="text-base font-black text-white mt-1">Front of the Vehicle</h3>
              </div>
              <ul className="space-y-3 text-sm text-[#999]">
                {[
                  "Front side windows must let through more than 70% of light, so only a very light tint is legal.",
                  "Windshield can only be tinted along a narrow strip at the very top (above the AS-1 line).",
                  "Going darker up front than the law allows risks fines and a failed out-of-province or commercial inspection.",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="flex-shrink-0 w-4 h-4 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-[#EEFF00]/30 bg-[#EEFF00]/[0.04]">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#EEFF00] to-[#EEFF00]/20" />
              <div className="p-6">
                <div className="mb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#EEFF00]">No Limit</span>
                  <h3 className="text-base font-black text-white mt-1">Behind the Driver</h3>
                </div>
                <ul className="space-y-3 text-sm text-[#999]">
                  {[
                    "Rear side windows have no legal tint limit, go as dark as you like.",
                    "The rear windshield also has no limit in Alberta.",
                    "This is why most drivers go dark in the back for privacy and heat, and keep the fronts legal.",
                    "A reputable shop keeps your fronts compliant so you never get pulled over for it.",
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="flex-shrink-0 w-4 h-4 rounded-full bg-[#EEFF00]/10 border border-[#EEFF00]/30 flex items-center justify-center mt-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#EEFF00]" />
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <Callout variant="warning">
            <strong className="text-white">Watch the &ldquo;$199 full car&rdquo; trap:</strong>{" "}
            Some shops hit that price by putting illegal dark film on your front
            windows. It looks great in the parking lot and costs you a ticket
            plus a removal bill later. At Accurate Autoworks we keep your fronts
            within the law and put the dark film where it is allowed.
          </Callout>
        </section>

        {/* Section 5: Why Cheap Tint Costs More */}
        <section id="cheap-tint" className="mt-16 scroll-mt-24">
          <SectionHeading number="05" highlight="Costs More">
            Why Cheap Tint{" "}
          </SectionHeading>
          <p className="mt-6 text-[#ccc] leading-relaxed text-base">
            Window tint is one of those jobs where the cheapest quote is almost
            never the cheapest in the long run. Here is what tends to go wrong
            with bargain film in Alberta&apos;s climate, and what it costs you.
          </p>

          <div className="mt-8 space-y-4">
            {[
              {
                title: "It turns purple",
                body: "Low-grade dyed film breaks down under UV and shifts from black to purple. Once it goes, the only fix is full removal and replacement.",
              },
              {
                title: "It bubbles and peels",
                body: "Cheap adhesive and rushed installs trap moisture and dust. Our freeze-thaw winters accelerate edge lifting and bubbling, often within the first year.",
              },
              {
                title: "It blocks your signals",
                body: "Old metallic films can interfere with phone, GPS, and radio reception. Quality ceramic film does not, which is one reason it is worth the upgrade.",
              },
              {
                title: "You pay twice",
                body: "Removal, adhesive cleanup, and re-tinting with proper film costs more than simply buying quality the first time. The cheap job becomes a down payment on the real one.",
              },
            ].map((item) => (
              <div key={item.title} className="card-gradient rounded-2xl p-6">
                <h3 className="text-sm font-bold uppercase tracking-wide text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#999] leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          <Callout variant="tip">
            <strong className="text-white">The UV angle people forget:</strong>{" "}
            Quality tint blocks over 99% of UV rays, which the{" "}
            <a
              href="https://www.skincancer.org/risk-factors/uv-radiation/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#EEFF00] hover:underline"
            >
              Skin Cancer Foundation
            </a>{" "}
            notes is a real concern for anyone who spends time behind the wheel.
            It also keeps your dash, seats, and trim from fading and cracking in
            the sun.
          </Callout>
        </section>

        {/* Section 6: Red Flags */}
        <section id="red-flags" className="mt-16 scroll-mt-24">
          <SectionHeading number="06" highlight="in a Cheap Quote">
            Red Flags{" "}
          </SectionHeading>
          <p className="mt-6 text-[#ccc] leading-relaxed text-base">
            When you call around for tint quotes, these are the answers that
            tell you whether you are dealing with a pro or a problem.
          </p>

          <div className="mt-8 space-y-4">
            {[
              {
                flag: "They will not name the film brand",
                detail:
                  "Any real installer can tell you the brand and grade of film they use and show you its warranty. If they dodge the question, it is almost always cheap import film.",
                severity: "critical",
              },
              {
                flag: "The price seems too good to be true",
                detail:
                  "If the market is $350 to $650 for a full ceramic tint and someone quotes $150, they are using dyed film, skipping the rear windshield, or both. Ask exactly which windows are included.",
                severity: "critical",
              },
              {
                flag: "No warranty on film or labour",
                detail:
                  "Quality films carry manufacturer warranties against fading, bubbling, and peeling, and a good shop warranties its install. No warranty tells you how confident they are in the result.",
                severity: "warning",
              },
              {
                flag: "They will tint your fronts dark, no questions asked",
                detail:
                  "A shop willing to put illegal dark film on your front windows without mentioning Alberta law is happy to hand you a future ticket. A pro keeps your fronts legal.",
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
                <summary className="px-6 py-5 cursor-pointer text-sm font-bold text-white hover:text-[#EEFF00] transition-colors list-none flex items-center gap-4">
                  <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-[#EEFF00]/10 text-[#EEFF00] text-xs font-bold flex items-center justify-center group-open:bg-[#EEFF00] group-open:text-black transition-all">
                    {i + 1}
                  </span>
                  <span className="flex-1">{faq.q}</span>
                  <span className="flex-shrink-0 w-6 h-6 rounded-full border border-[#333] flex items-center justify-center group-open:border-[#EEFF00] group-open:bg-[#EEFF00]/10 transition-all">
                    <svg
                      className="w-3 h-3 text-[#EEFF00] transition-transform group-open:rotate-180"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
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
          <div className="absolute inset-0 bg-gradient-to-br from-[#EEFF00]/15 via-[#EEFF00]/5 to-transparent" />
          <div className="absolute inset-0 hero-stripe opacity-30" />
          <div className="absolute inset-0 border border-[#EEFF00]/20 rounded-2xl" />
          <div className="relative p-8 sm:p-12 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs font-bold uppercase tracking-[3px] text-[#EEFF00] border border-[#EEFF00]/30 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#EEFF00] animate-pulse" />
              Free Quote
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight">
              Ready to Tint Your{" "}
              <span className="text-[#EEFF00] glow-accent">Ride?</span>
            </h2>
            <p className="mt-4 text-[#999] max-w-xl mx-auto leading-relaxed">
              Accurate Autoworks tints cars, trucks, SUVs, and EVs in Stony
              Plain and serves Spruce Grove, Parkland County, Acheson, and
              Edmonton. Quality ceramic and carbon film, legal fronts,
              warrantied installs. Free quote, no pressure.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Get a Free Tint Quote
              </Link>
              <a href="tel:7808189904" className="btn-outline">
                Call 780.818.9904
              </a>
            </div>
          </div>
        </section>

        {/* Related */}
        <div className="mt-12">
          <h2 className="text-sm font-bold uppercase tracking-widest text-[#EEFF00] mb-5">
            Keep Reading
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { href: "/blog/window-tinting-stony-plain-spruce-grove/", label: "Window Tinting in Stony Plain & Spruce Grove" },
              { href: "/blog/ceramic-coating-stony-plain-alberta/", label: "Ceramic Coating: How It Works & Is It Worth It?" },
              { href: "/blog/paint-protection-film-cost-alberta-2026/", label: "Paint Protection Film Cost in Alberta" },
              { href: "/tinting/", label: "Our Window Tinting Service" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="card-gradient rounded-xl px-5 py-4 text-sm font-bold text-[#ccc] hover:text-[#EEFF00] transition-colors flex items-center justify-between gap-3"
              >
                <span>{item.label}</span>
                <span className="text-[#EEFF00]">&rarr;</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Author / Shop Card */}
        <div className="mt-12 card-gradient rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
            <div className="w-14 h-14 rounded-xl bg-[#EEFF00]/10 flex items-center justify-center flex-shrink-0">
              <svg className="w-7 h-7 text-[#EEFF00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016A3.001 3.001 0 0021 9.349m-18 0A2.989 2.989 0 004.5 9c.956 0 1.813-.44 2.37-1.13M21 9.349A2.989 2.989 0 0019.5 9c-.956 0-1.813-.44-2.37-1.13m0 0A3 3 0 0015 6H9a3 3 0 00-2.13.87m10.26 0A3 3 0 0015 6H9" />
              </svg>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-sm font-bold text-white">
                Written by the team at{" "}
                <Link href="/" className="text-[#EEFF00] hover:underline">
                  Accurate Autoworks
                </Link>
              </p>
              <p className="mt-1 text-xs text-[#666] leading-relaxed">
                Stony Plain, Alberta. Helping local drivers maintain and
                customize their vehicles since 2023. Tinting, wraps, PPF,
                detailing, and commercial print under one roof.
              </p>
              <div className="mt-3 flex items-center justify-center sm:justify-start gap-3">
                <a href="tel:7808189904" className="text-xs text-[#EEFF00] hover:underline font-bold">
                  780.818.9904
                </a>
                <span className="w-1 h-1 rounded-full bg-[#333]" />
                <Link href="/contact/" className="text-xs text-[#999] hover:text-[#EEFF00] transition-colors">
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
              "How Much Does Window Tinting Cost in Alberta? 2026 Pricing Guide",
            description:
              "Real 2026 Alberta window tint pricing, dyed vs carbon vs ceramic, the legal tint limits, and what drives the price up or down.",
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
                "https://www.accurateautoworks.ca/blog/window-tinting-cost-alberta-2026/",
            },
            keywords:
              "window tint cost Alberta, window tinting price Edmonton, ceramic tint cost, car window tint Stony Plain, window tinting Spruce Grove, Alberta tint laws",
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
              "Stony Plain auto customization shop, window tinting, vinyl wraps, PPF, detailing, and commercial signs.",
            telephone: "+1-780-818-9904",
            email: "Cody@accurateautoworksinc.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "15 Boulder Blvd",
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
      <span className="flex-shrink-0 text-xs font-mono font-bold text-[#EEFF00]/40 mt-2">
        {number}
      </span>
      <div>
        <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight leading-tight">
          {children}
          <span className="text-[#EEFF00]">{highlight}</span>
        </h2>
        <div className="mt-3 h-px w-16 bg-gradient-to-r from-[#EEFF00] to-transparent" />
      </div>
    </div>
  );
}

function PriorityBadge({ level, label }: { level: string; label: string }) {
  const colors: Record<string, string> = {
    essential: "bg-[#EEFF00]/15 text-[#EEFF00] border-[#EEFF00]/30",
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
    premium: "bg-[#EEFF00]/15 text-[#EEFF00] border-[#EEFF00]/30",
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
    tip: { border: "border-[#EEFF00]/20", bg: "bg-[#EEFF00]/[0.04]", icon: "text-[#EEFF00]", iconBg: "bg-[#EEFF00]/10" },
    info: { border: "border-blue-500/20", bg: "bg-blue-500/[0.04]", icon: "text-blue-400", iconBg: "bg-blue-500/10" },
    warning: { border: "border-amber-500/20", bg: "bg-amber-500/[0.04]", icon: "text-amber-400", iconBg: "bg-amber-500/10" },
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
