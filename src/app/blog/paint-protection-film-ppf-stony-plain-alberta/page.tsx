import Link from "next/link";
import type { Metadata } from "next";
import { BlogPostClient } from "./client";

export const metadata: Metadata = {
  title: "Paint Protection Film Stony Plain | Accurate Autoworks",
  description:
    "PPF in Stony Plain & Spruce Grove: rock chip protection, self-healing film, 2026 Alberta costs, and whether clear bra is worth it for your vehicle.",
  alternates: {
    canonical:
      "https://www.accurateautoworks.ca/blog/paint-protection-film-ppf-stony-plain-alberta/",
  },
  openGraph: {
    title: "Paint Protection Film Stony Plain | Accurate Autoworks",
    description:
      "PPF explained for Alberta drivers: self-healing clear bra, rock chip protection, 2026 pricing, and full vs partial coverage compared.",
    type: "article",
    url: "https://www.accurateautoworks.ca/blog/paint-protection-film-ppf-stony-plain-alberta/",
    locale: "en_CA",
    siteName: "Accurate Autoworks",
  },
};

const FAQ_DATA = [
  {
    q: "What is paint protection film (PPF) and how does it work?",
    a: "Paint protection film — also called clear bra — is a thick, optically clear thermoplastic urethane film that is bonded directly to your vehicle's painted surfaces. It absorbs rock chips, scratches, road debris, and minor abrasion impacts before they reach the paint. Self-healing PPF uses a topcoat that flows back to its original shape when exposed to heat — either from the sun or warm water — erasing light swirl marks and scuffs. At Accurate Autoworks in Stony Plain, we install professional-grade PPF cut precisely to your vehicle's panels for seamless coverage.",
  },
  {
    q: "Is PPF worth it for Alberta drivers?",
    a: "For most Alberta drivers, yes — especially if you drive on the Yellowhead Highway, Highway 16A, or any Parkland County gravel road regularly. Alberta roads are notoriously hard on paint: chip seal highway surfaces, gravel shoulders, loose aggregate on rural roads, and sand/salt used for eight months of the year create constant chip hazards. Without PPF, a truck driven in this environment will show front-end chip damage within the first year. Accurate Autoworks installs PPF on everything from brand-new trucks to daily drivers that owners want to keep looking sharp.",
  },
  {
    q: "How much does PPF cost in Stony Plain or Spruce Grove?",
    a: "PPF pricing in the Stony Plain and Spruce Grove area depends on coverage area and film type. A partial front package (bumper plus leading hood edge) starts around $600 to $900. A full front package — bumper, full hood, fenders, mirrors, and A-pillars — typically runs $1,500 to $2,500 for a truck or SUV. Full-vehicle coverage can reach $5,000 to $9,000+ depending on vehicle size. Call Accurate Autoworks at 780.818.9904 for an exact quote on your vehicle — prices vary by panel count and film grade.",
  },
  {
    q: "What is the difference between self-healing PPF and standard PPF?",
    a: "Standard PPF protects your paint from chips and scratches but will retain surface marks permanently once they penetrate the topcoat. Self-healing PPF has a special elastomeric polymer topcoat that, when exposed to heat (sunlight or 60°C water), flows back into its original flat surface — essentially erasing light swirl marks, minor scratches, and scuffs on its own. For Alberta drivers who go through automatic washes in winter or park in tight spots, self-healing film keeps the installation looking like new far longer. Accurate Autoworks recommends self-healing PPF for anyone planning to keep their vehicle three or more years.",
  },
  {
    q: "How long does PPF last in Alberta?",
    a: "Quality PPF installed by a professional shop typically lasts 7 to 10 years in Alberta conditions. The combination of extreme UV in summer, deep freezes in winter, and constant sand/salt exposure is harder on film than moderate climates, but modern PPF products are specifically engineered for this. Self-healing grades tend to maintain their appearance longer because minor surface marks are erased rather than accumulated. Accurate Autoworks uses warranted film products and proper installation techniques to maximize the lifespan of your investment.",
  },
  {
    q: "Can PPF be removed without damaging my paint?",
    a: "Yes, when installed by a professional using high-quality film, PPF can be safely removed without damage to the underlying clear coat. The adhesive is designed to release cleanly. The key is using the right removal technique — controlled heat and proper angle — which is why we recommend having it removed by a professional rather than attempting DIY removal. At Accurate Autoworks, we can remove old PPF and either replace it with fresh film or leave the factory paint in the condition it was protected in. Call us at 780.818.9904 to discuss removal and replacement options.",
  },
  {
    q: "Does PPF affect the appearance of my vehicle?",
    a: "When professionally installed, gloss PPF is virtually invisible on the vehicle — maintaining the factory paint colour and shine with no noticeable change in appearance. High-quality film is optically clear and does not yellow significantly over time. Matte PPF, on the other hand, actually transforms a gloss paint job to a satin-matte finish — a popular look on black, white, and grey vehicles. Edges are carefully wrapped around panel edges so there are no visible film lines in normal viewing conditions. The goal at Accurate Autoworks is an installation that protects without announcing itself.",
  },
  {
    q: "Should I get PPF, ceramic coating, or both?",
    a: "These two products do different jobs and work best together. PPF provides physical protection from rock chips, scratches, and abrasion. Ceramic coating provides chemical protection and hydrophobic water beading that makes the surface easier to wash and more resistant to contaminants. For maximum protection, Accurate Autoworks recommends PPF on high-impact zones (front bumper, hood, fenders, mirrors) with a ceramic coating applied over the PPF and the rest of the vehicle. This combination gives you the best of both worlds — chip protection on the front, slick easy-clean surface everywhere. Visit our services page at accurateautoworks.ca to learn more.",
  },
];

const COST_DATA = [
  { service: "Partial front (bumper + hood edge)", cost: "$600 - $900", priority: "Entry Level", level: "optional" },
  { service: "Full bumper only", cost: "$400 - $600", priority: "Popular Add-On", level: "optional" },
  { service: "Full front (bumper + hood + fenders + mirrors)", cost: "$1,500 - $2,500", priority: "Most Popular", level: "essential" },
  { service: "Full front + rocker panels", cost: "$2,000 - $3,200", priority: "Recommended", level: "recommended" },
  { service: "Full vehicle (sedan)", cost: "$3,500 - $5,500", priority: "Full Protection", level: "recommended" },
  { service: "Full vehicle (truck / SUV)", cost: "$5,000 - $9,000+", priority: "Full Protection", level: "recommended" },
  { service: "PPF removal (existing film)", cost: "$300 - $600", priority: "If Replacing", level: "optional" },
];

const FILM_TYPES = [
  {
    name: "Standard Clear PPF",
    cost: "$",
    selfHealing: "No",
    clarity: "Good",
    lifespan: "5 - 7 years",
    albertaRating: "Good",
    ratingLevel: "good",
    notes: "Protects against chips and scratches. Does not self-heal surface marks. Solid entry-level protection.",
  },
  {
    name: "Self-Healing PPF",
    cost: "$$",
    selfHealing: "Yes",
    clarity: "Excellent",
    lifespan: "7 - 10 years",
    albertaRating: "Best",
    ratingLevel: "best",
    notes: "Minor swirls and surface scratches disappear with heat. Best long-term appearance. Our top recommendation.",
    recommended: true,
  },
  {
    name: "Gloss Enhanced PPF",
    cost: "$$",
    selfHealing: "Yes",
    clarity: "Glossier than paint",
    lifespan: "7 - 10 years",
    albertaRating: "Best",
    ratingLevel: "best",
    notes: "Self-healing with an extra-glossy finish. Makes paint look wet. Popular on black and dark vehicles.",
  },
  {
    name: "Matte / Satin PPF",
    cost: "$$$",
    selfHealing: "Yes",
    clarity: "Matte finish",
    lifespan: "5 - 8 years",
    albertaRating: "Good",
    ratingLevel: "good",
    notes: "Transforms gloss paint to satin-matte finish while protecting it. Popular styling upgrade. Harder to maintain.",
  },
];

export default function PaintProtectionFilmGuide() {
  const publishDate = "2026-04-05";
  const modifiedDate = "2026-04-05";

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
            Paint Protection Film Guide
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black uppercase tracking-tight leading-[1.05]">
            Paint Protection Film in{" "}
            <span className="text-[#22d65f] glow-accent">
              Stony Plain
            </span>
            : Is It Worth It for Alberta Drivers?
          </h1>

          <p className="mt-8 text-lg sm:text-xl text-[#999] max-w-2xl mx-auto leading-relaxed">
            Rock chips, gravel roads, road salt, and -40C winters — Alberta
            is one of the harshest environments for vehicle paint on the planet.
            Here is everything you need to know about PPF before you decide.
          </p>

          <div className="mt-6 flex items-center justify-center gap-6 text-xs text-[#666] uppercase tracking-wider">
            <div className="flex items-center gap-2">
              <svg className="w-3.5 h-3.5 text-[#22d65f]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <time dateTime={publishDate}>April 5, 2026</time>
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
            Drive fifty kilometres west of Edmonton on the Yellowhead and you
            will see the evidence on every vehicle in the passing lane: white
            and silver trucks with dozens of tiny stone chips pitting the
            leading edge of the hood, clear coat missing from the front bumper,
            and paint worn down to primer on the A-pillars. This is not
            neglect — it is just what happens when you drive Alberta roads.
            The chip seal highway surfaces, the gravel shoulders, and the
            Acheson industrial traffic that stirs up loose aggregate combine to
            create a constant chip-impact environment that no wax or paint
            sealant can stop.
          </p>
          <p className="mt-4 text-[#ccc] leading-relaxed text-base sm:text-lg">
            Paint protection film — PPF, or clear bra — is the only product
            that physically blocks chips and abrasion impacts from reaching
            your paint. This guide covers everything Stony Plain, Spruce Grove,
            and Parkland County drivers need to know: what PPF actually is, the
            difference between standard and self-healing film, what it costs at
            a professional shop in 2026, and what the installation process
            looks like at{" "}
            <Link href="/ppf/" className="text-[#22d65f] hover:underline">
              Accurate Autoworks on Boulder Boulevard
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
                { href: "#alberta-roads", label: "Why Alberta Roads Destroy Paint" },
                { href: "#film-types", label: "Types of PPF Compared" },
                { href: "#cost-guide", label: "PPF Cost in Stony Plain" },
                { href: "#self-healing", label: "Self-Healing PPF Explained" },
                { href: "#ppf-vs-ceramic", label: "PPF vs Ceramic Coating vs Wrap" },
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

        {/* Section 1: Why Alberta Roads Destroy Paint */}
        <section id="alberta-roads" className="mt-16 scroll-mt-24">
          <SectionHeading number="01" highlight="Destroy Paint">
            Why Alberta Roads{" "}
          </SectionHeading>
          <p className="mt-6 text-[#ccc] leading-relaxed text-base">
            Alberta&apos;s road conditions are uniquely brutal for vehicle paint.
            Understanding the specific hazards helps explain why PPF is not a
            luxury item here — it is practical protection with a real return.
          </p>

          <div className="mt-8 space-y-4">
            {[
              {
                title: "Chip Seal Highway Surfaces",
                detail:
                  "A significant portion of Alberta&apos;s highway network — including stretches of Highway 16A west of Stony Plain — uses chip seal (tar and gravel) as a road surfacing method. This surface is designed to be durable and low-cost, but it continuously sheds loose aggregate, especially when freshly laid or after frost heave breaks up the surface in spring. At highway speeds, these stones hit your bumper and hood with enough force to pierce clear coat. According to Alberta Transportation, the province maintains over 31,000 kilometres of highway — much of it chip seal.",
                externalLink: {
                  href: "https://www.alberta.ca/roads-highways-bridges.aspx",
                  label: "Alberta Transportation&apos;s road network",
                },
                status: "danger",
              },
              {
                title: "Gravel Shoulders and Rural Roads",
                detail:
                  "Parkland County has hundreds of kilometres of gravel and dirt access roads used for agricultural and industrial access. If you drive in from a rural property, haul equipment from the Acheson industrial area, or regularly use county roads, your vehicle gets a constant sandblasting of fine gravel on the lower panels and rocker areas. PPF on the rockers and lower doors is a common addition for Parkland County drivers.",
                status: "danger",
              },
              {
                title: "Road Salt and Sand: November to April",
                detail:
                  "Alberta municipalities use road salt and sand from freeze-up in November through spring thaw in April — roughly five months of corrosive treatment every year. Salt doesn&apos;t just attack the undercarriage; the spray from tires coats the lower third of your vehicle in a corrosive brine. PPF on lower panels and rockers acts as a barrier against this accelerated oxidation, helping preserve the paint in areas that are otherwise nearly impossible to protect with wax or sealant alone.",
                status: "caution",
              },
              {
                title: "Yellowhead Highway Truck Traffic",
                detail:
                  "The Yellowhead Highway (Highway 16) through Stony Plain is a major commercial freight corridor. Heavy semi-trucks at highway speed create turbulence and stir up road debris that travels far wider than the immediate lane. If you commute eastbound toward Edmonton or haul anything along the Yellowhead, you are regularly in the blast radius of commercial truck debris. The front of your vehicle bears the brunt of this exposure.",
                status: "caution",
              },
              {
                title: "-40&deg;C Winters and Paint Micro-Cracking",
                detail:
                  "Extreme cold causes automotive paint to contract rapidly. Over multiple freeze-thaw cycles — especially when temperatures swing from -30&deg;C at night to +5&deg;C on a bright February afternoon — micro-cracking develops in clear coat and paint layers. PPF acts as a flexible buffer that absorbs thermal stress, reducing the rate at which this cracking occurs. For vehicles parked outdoors year-round in Stony Plain, this protection is meaningful.",
                status: "caution",
              },
            ].map((item) => (
              <div
                key={item.title}
                className={`relative rounded-2xl overflow-hidden p-6 sm:p-7 ${
                  item.status === "danger"
                    ? "bg-red-500/[0.04] border border-red-500/20"
                    : "bg-amber-500/[0.04] border border-amber-500/20"
                }`}
              >
                <h3 className="text-sm font-bold text-white mb-3">{item.title}</h3>
                <p className="text-sm text-[#999] leading-relaxed" dangerouslySetInnerHTML={{ __html: item.detail }} />
                {item.externalLink && (
                  <a
                    href={item.externalLink.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-xs text-[#22d65f] hover:underline"
                    dangerouslySetInnerHTML={{ __html: item.externalLink.label + " &rarr;" }}
                  />
                )}
              </div>
            ))}
          </div>

          <Callout variant="info">
            <strong className="text-white">The bottom line:</strong> If you
            drive a new truck, a vehicle with a fresh respray, or any car you
            plan to keep for five or more years, the Alberta driving environment
            makes PPF one of the highest-return protection investments you can
            make. The alternative is watching $40,000&ndash;$80,000 worth of
            truck depreciate faster than it has to.
          </Callout>
        </section>

        {/* Section 2: Types of PPF */}
        <section id="film-types" className="mt-16 scroll-mt-24">
          <SectionHeading number="02" highlight="Compared">
            Types of PPF{" "}
          </SectionHeading>
          <p className="mt-6 text-[#ccc] leading-relaxed text-base">
            Not all paint protection film is the same. There are four main
            categories available in 2026, and the right choice depends on your
            budget, vehicle colour, and how long you plan to keep the vehicle.
            For deep technical specs on professional-grade PPF products,{" "}
            <a
              href="https://www.xpel.com/products/paint-protection-film"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#22d65f] hover:underline"
            >
              XPEL&apos;s PPF product lineup
            </a>{" "}
            is a good reference for understanding what modern film technology
            delivers.
          </p>

          {/* Desktop table */}
          <div className="mt-8 hidden sm:block rounded-2xl overflow-hidden border border-[#2a2a2a]">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#22d65f]/[0.06]">
                  {["Type", "Cost", "Self-Healing", "Clarity", "Lifespan", "Alberta Rating"].map((h) => (
                    <th key={h} className="text-left py-4 px-5 text-xs font-bold uppercase tracking-widest text-[#22d65f]">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-[#ccc]">
                {FILM_TYPES.map((row, i) => (
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
                    <td className="py-4 px-5">{row.selfHealing}</td>
                    <td className="py-4 px-5">{row.clarity}</td>
                    <td className="py-4 px-5">{row.lifespan}</td>
                    <td className="py-4 px-5">
                      <FilmRatingBadge level={row.ratingLevel} label={row.albertaRating} />
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
                    ? "border-[#22d65f]/30 bg-[#22d65f]/[0.06]"
                    : "card-gradient"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-bold text-white text-sm">{row.name}</span>
                  <FilmRatingBadge level={row.ratingLevel} label={row.albertaRating} />
                </div>
                {row.recommended && (
                  <div className="mb-3 text-[10px] font-bold uppercase tracking-widest text-[#22d65f]">
                    Our Recommendation
                  </div>
                )}
                <div className="grid grid-cols-2 gap-2 text-xs text-[#999]">
                  <span>Self-healing: <strong className="text-white">{row.selfHealing}</strong></span>
                  <span>Clarity: <strong className="text-white">{row.clarity}</strong></span>
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
            PPF{" "}
          </SectionHeading>
          <p className="mt-6 text-[#ccc] leading-relaxed text-base">
            Paint protection film pricing varies widely depending on how much
            of the vehicle you cover and which film grade you select. Here is a
            realistic breakdown of professional PPF prices in the Stony Plain
            and Spruce Grove area in 2026. These figures reflect quality-shop
            pricing with computer-cut film, proper surface prep, and a warranty
            — not roll-and-cut budget installations.
          </p>

          {/* Desktop table */}
          <div className="mt-8 hidden sm:block rounded-2xl overflow-hidden border border-[#2a2a2a]">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#22d65f]/[0.06]">
                  <th className="text-left py-4 px-6 text-xs font-bold uppercase tracking-widest text-[#22d65f]">
                    Coverage Package
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
            of 2026. Actual costs vary based on vehicle size, panel complexity,
            film grade, and any existing paint correction required before
            installation. Call 780.818.9904 for an exact quote.
          </p>

          <Callout variant="tip">
            <strong className="text-white">Most popular package for Alberta trucks:</strong>{" "}
            The full front package — bumper, full hood, both fenders, both
            mirrors, and A-pillars — covers every high-impact zone that takes
            rock chip damage on the highway. For most Stony Plain and Spruce
            Grove truck owners, this is the sweet spot between coverage and
            cost. Pair it with{" "}
            <Link href="/tinting/" className="text-[#22d65f] hover:underline">
              window tinting
            </Link>{" "}
            for a complete front-end protection and privacy package on the same
            visit.
          </Callout>
        </section>

        {/* Section 4: Self-Healing PPF */}
        <section id="self-healing" className="mt-16 scroll-mt-24">
          <SectionHeading number="04" highlight="PPF Explained">
            Self-Healing{" "}
          </SectionHeading>
          <p className="mt-6 text-[#ccc] leading-relaxed text-base">
            Self-healing PPF is the most significant advancement in paint
            protection technology of the last decade. Understanding how it
            works — and what it can and cannot do — helps you decide whether
            the premium is worth it for your vehicle and driving habits.
          </p>

          <div className="mt-8 space-y-5">
            <div className="card-gradient rounded-2xl p-6 sm:p-8">
              <h3 className="text-sm font-bold uppercase tracking-wide text-white mb-3">
                How It Works: Thermoplastic Urethane Topcoat
              </h3>
              <p className="text-sm text-[#999] leading-relaxed">
                Standard PPF is a rigid thermoplastic urethane film that resists
                impacts well but retains surface marks permanently once the
                topcoat is scratched. Self-healing PPF adds an elastomeric
                polymer layer to the topcoat that has shape-memory properties
                — it &quot;wants&quot; to return to its original flat state. When
                heat is applied (either from direct sunlight on a warm day, or
                by pouring 60&deg;C water over the affected area), the polymer
                flows back into its original form, erasing light surface scratches
                and swirl marks within minutes. For deeper gouges that penetrate
                the urethane film itself, self-healing does not apply — but those
                impacts would have gone straight through to your paint without
                the film at all.
              </p>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-[#22d65f]/30 bg-gradient-to-br from-[#22d65f]/[0.06] to-[#141414]">
              <div className="absolute top-0 right-0 px-3 py-1 bg-[#22d65f] text-black text-[10px] font-bold uppercase tracking-widest rounded-bl-lg">
                Key Advantage
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="text-sm font-bold uppercase tracking-wide text-white mb-3">
                  Alberta Winters Make Self-Healing Worth It
                </h3>
                <p className="text-sm text-[#999] leading-relaxed">
                  In Alberta, vehicles go through automated car washes hundreds
                  of times per year to deal with road salt buildup — and every
                  automated wash leaves micro-swirl marks on surfaces. On
                  standard film, these swirls accumulate over years until the
                  installation looks hazy and worn. On self-healing film, the
                  warmth of a sunny day or the heat from a warm rinse erases
                  those marks continuously. After five Alberta winters, a
                  self-healing installation still looks like year one. Standard
                  film in the same conditions will show its age clearly.
                </p>
              </div>
            </div>

            <div className="card-gradient rounded-2xl p-6 sm:p-8">
              <h3 className="text-sm font-bold uppercase tracking-wide text-white mb-3">
                What Self-Healing PPF Can and Cannot Do
              </h3>
              <div className="mt-2 grid sm:grid-cols-2 gap-4">
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-[#22d65f] mb-2">Heals ✓</div>
                  <ul className="text-sm text-[#999] space-y-1 leading-relaxed">
                    <li>• Light swirl marks from washing</li>
                    <li>• Fine surface scratches</li>
                    <li>• Minor scuffs from brushing contact</li>
                    <li>• Car wash brush marks</li>
                    <li>• Fingernail marks on the film surface</li>
                  </ul>
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-red-400 mb-2">Does Not Heal ✗</div>
                  <ul className="text-sm text-[#999] space-y-1 leading-relaxed">
                    <li>• Deep cuts that penetrate the film</li>
                    <li>• Rock chip impacts (film absorbs these)</li>
                    <li>• Yellowing from age (quality film resists this)</li>
                    <li>• Edge lifting from improper installation</li>
                    <li>• Chemical staining (use appropriate cleaner)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="card-gradient rounded-2xl p-6 sm:p-8">
              <h3 className="text-sm font-bold uppercase tracking-wide text-white mb-3">
                The Cost-Benefit Math for Alberta Drivers
              </h3>
              <p className="text-sm text-[#999] leading-relaxed">
                Self-healing PPF typically costs 15 to 25% more than standard
                film for the same coverage area. On a full front package priced
                at $2,000 for standard film, the self-healing upgrade adds
                roughly $300 to $500. Over a 7-to-10-year installation
                lifespan, that premium works out to $30 to $70 per year for
                an installation that continuously looks fresh rather than one
                that shows two years of salt-season wear after every winter.
                For most Alberta truck owners who plan to keep their vehicle,
                this math is easy.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: PPF vs Ceramic vs Wrap */}
        <section id="ppf-vs-ceramic" className="mt-16 scroll-mt-24">
          <SectionHeading number="05" highlight="vs Ceramic vs Wrap">
            PPF{" "}
          </SectionHeading>
          <p className="mt-6 text-[#ccc] leading-relaxed text-base">
            PPF, ceramic coating, and vinyl wraps are the three main vehicle
            protection and customization products offered at Accurate Autoworks.
            They do different things, and knowing which one — or which
            combination — fits your situation saves you money and sets the right
            expectations.
          </p>

          <div className="mt-8 space-y-4">
            {[
              {
                product: "Paint Protection Film (PPF)",
                icon: "shield",
                bestFor: "Physical protection from chips, scratches, and road debris",
                howItWorks: "Thick thermoplastic urethane film bonded to paint. Absorbs impacts before they reach clear coat. Self-healing grades erase surface marks with heat.",
                limitations: "Does not change vehicle appearance (unless matte film). Higher upfront cost than ceramic. Requires professional installation for seamless results.",
                albertaVerdict: "Essential for any vehicle driven on Alberta highways. Start with a full front package and expand from there.",
                highlight: true,
              },
              {
                product: "Ceramic Coating",
                icon: "sparkle",
                bestFor: "Chemical protection, hydrophobic water beading, ease of washing",
                howItWorks: "Liquid nano-ceramic polymer that bonds to the paint surface and cures into a hard, slick layer. Repels water, contaminants, bird droppings, tree sap, and road grime. Makes washing easier and keeps the vehicle looking clean longer.",
                limitations: "Does NOT protect against rock chips or physical impacts. Offers minimal scratch resistance. Not a replacement for PPF on high-impact zones.",
                albertaVerdict: "Excellent complement to PPF. Apply ceramic over the top of PPF and on unprottected panels. Visit our detailing page for ceramic coating options.",
                highlight: false,
              },
              {
                product: "Vinyl Wrap",
                icon: "palette",
                bestFor: "Colour change, branding, custom appearance",
                howItWorks: "Coloured or textured vinyl film applied to the vehicle to change its appearance. Can cover the entire vehicle or just accent panels. Protects factory paint underneath from UV and minor abrasion.",
                limitations: "Vinyl is not as thick or impact-resistant as PPF. Not designed primarily as a chip protection product. More susceptible to physical damage on leading edges.",
                albertaVerdict: "Great for colour change or branding. If you want both a colour change and rock chip protection, ask about PPF-over-vinyl or colour-stable PPF options.",
                highlight: false,
              },
            ].map((item) => (
              <div
                key={item.product}
                className={`rounded-2xl p-6 sm:p-8 border ${
                  item.highlight
                    ? "border-[#22d65f]/30 bg-[#22d65f]/[0.05]"
                    : "card-gradient"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#22d65f]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#22d65f]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      {item.icon === "shield" && (
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      )}
                      {item.icon === "sparkle" && (
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      )}
                      {item.icon === "palette" && (
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                      )}
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-bold text-white mb-1">{item.product}</h3>
                    <p className="text-xs text-[#22d65f] font-semibold mb-3">{item.bestFor}</p>
                    <p className="text-sm text-[#999] leading-relaxed mb-2">
                      <strong className="text-[#ccc]">How it works: </strong>
                      {item.howItWorks}
                    </p>
                    <p className="text-sm text-[#999] leading-relaxed mb-2">
                      <strong className="text-[#ccc]">Limitations: </strong>
                      {item.limitations}
                    </p>
                    <p className="text-sm text-[#999] leading-relaxed">
                      <strong className="text-[#22d65f]">Alberta verdict: </strong>
                      {item.albertaVerdict}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Callout variant="info">
            The most complete protection setup for an Alberta truck: PPF on the
            full front end, a{" "}
            <Link href="/wraps/" className="text-[#22d65f] hover:underline">
              vinyl wrap or colour-change film
            </Link>{" "}
            if you want a different look, and ceramic coating applied over the
            top of both for easy cleaning. Accurate Autoworks can do all three
            as a combined package — call 780.818.9904 to discuss your vehicle
            and build a custom protection plan.
          </Callout>
        </section>

        {/* Section 6: What to Expect */}
        <section id="what-to-expect" className="mt-16 scroll-mt-24">
          <SectionHeading number="06" highlight="at Accurate Autoworks">
            What to Expect{" "}
          </SectionHeading>
          <p className="mt-6 text-[#ccc] leading-relaxed text-base">
            Here is exactly what happens when you bring your vehicle to
            Accurate Autoworks on Boulder Boulevard in Stony Plain for a
            professional PPF installation.
          </p>

          <div className="mt-8 space-y-4">
            {[
              {
                step: "01",
                title: "Consultation and Coverage Planning",
                description:
                  "We start by reviewing your vehicle and your driving habits. Where do you drive regularly? What are your biggest concerns — highway rock chips, parking lot door dings, rocker panel sand blasting? We will walk you through the coverage options, show you sample film types, and recommend the package that makes sense for your budget and how you use the vehicle. There is no pressure — we want you to understand exactly what you are getting.",
              },
              {
                step: "02",
                title: "Paint Correction and Decontamination",
                description:
                  "PPF locks in whatever is under it — permanently. Any swirl marks, water spots, light scratches, or paint contamination that exist before installation will be sealed under the film for the life of the product. For this reason, we perform a thorough decontamination wash and, if needed, a paint correction prior to installation. This step is non-negotiable for a quality result. It adds time and cost, but it is the difference between a film that looks excellent for ten years and one that looks mediocre from day one.",
              },
              {
                step: "03",
                title: "Computer-Cut Installation",
                description:
                  "We use a digital cutting system with vehicle-specific templates to cut every piece of film precisely. No hand-cutting guesswork, no visible seam lines from over-cuts, no gaps on panel edges. Each piece is applied using a slip solution, positioned precisely, squeegeed flat to remove air and moisture, and wrapped around panel edges where possible for seamless coverage. Complex areas like bumper inlets, mirror housings, and A-pillars are handled individually for full coverage with no exposed paint.",
              },
              {
                step: "04",
                title: "Cure Period and Quality Inspection",
                description:
                  "After installation, the film needs 48 to 72 hours to fully cure and bond to the paint surface. During this period, avoid washing the vehicle and keep it out of direct rain if possible. We perform a final quality inspection before returning your vehicle — checking edge adhesion, clarity, and coverage at every panel. If anything is not right, we fix it before you leave. After the cure period, normal washing is fine; we recommend avoiding high-pressure jets directly at film edges.",
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
            <strong className="text-white">Book your PPF consultation:</strong>{" "}
            Call{" "}
            <a href="tel:7808189904" className="text-[#22d65f] hover:underline font-bold">
              780.818.9904
            </a>{" "}
            or visit our{" "}
            <Link href="/ppf/" className="text-[#22d65f] hover:underline">
              paint protection film service page
            </Link>
            . Accurate Autoworks is on Boulder Boulevard in Stony Plain —
            convenient for drivers coming from Spruce Grove, Acheson, and
            Parkland County. We also handle{" "}
            <Link href="/detailing/" className="text-[#22d65f] hover:underline">
              paint correction and full detailing
            </Link>{" "}
            as part of the pre-installation prep if your vehicle needs it.
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
              Ready to Protect Your{" "}
              <span className="text-[#22d65f] glow-accent">Paint?</span>
            </h2>
            <p className="mt-4 text-[#999] max-w-xl mx-auto leading-relaxed">
              PPF, ceramic coating, window tint, vinyl wraps — Accurate
              Autoworks handles complete vehicle protection under one roof in
              Stony Plain. Serving Spruce Grove, Parkland County, Acheson, and
              Edmonton West. Free consultation, no obligation.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Book Your PPF Consultation
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
                customize their vehicles since 2023. PPF, tinting, wraps,
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

      {/* Schema Markup: Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Paint Protection Film (PPF) in Stony Plain: Is It Worth It for Alberta Drivers?",
            description:
              "Rock chip protection, self-healing PPF, and clear bra explained for Alberta drivers. Accurate Autoworks, Stony Plain.",
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
                "https://www.accurateautoworks.ca/blog/paint-protection-film-ppf-stony-plain-alberta/",
            },
            keywords:
              "paint protection film Stony Plain, clear bra Spruce Grove, rock chip protection Alberta, self healing PPF, PPF cost Alberta",
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
              "Stony Plain's premier auto customization shop offering paint protection film, window tinting, vinyl wraps, car detailing, ceramic coating, and commercial printing.",
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

function FilmRatingBadge({ level, label }: { level: string; label: string }) {
  const colors: Record<string, string> = {
    best: "bg-[#22d65f]/15 text-[#22d65f] border-[#22d65f]/30",
    good: "bg-white/5 text-white border-white/20",
    fair: "bg-amber-500/10 text-amber-400 border-amber-500/20",
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
