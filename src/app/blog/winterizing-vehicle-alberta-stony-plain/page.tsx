import Link from "next/link";
import type { Metadata } from "next";
import { BlogPostClient } from "./client";

export const metadata: Metadata = {
  title:
    "Winterizing Your Vehicle in Alberta | Accurate Autoworks",
  description:
    "Complete Alberta vehicle winterizing guide: winter tires, PPF, window tint, detailing, and ceramic coating. Stony Plain & Spruce Grove, 2026 costs.",
  alternates: {
    canonical:
      "https://www.accurateautoworks.ca/blog/winterizing-vehicle-alberta-stony-plain/",
  },
  openGraph: {
    title:
      "Winterizing Your Vehicle in Alberta | Accurate Autoworks",
    description:
      "Winter tires, PPF, window tint, detailing, everything Stony Plain and Spruce Grove drivers need to protect their vehicles from Alberta winters.",
    type: "article",
    url: "https://www.accurateautoworks.ca/blog/winterizing-vehicle-alberta-stony-plain/",
    locale: "en_CA",
    siteName: "Accurate Autoworks",
  },
};

const FAQ_DATA = [
  {
    q: "When should I start winterizing my vehicle in Alberta?",
    a: "October is the right time for most Stony Plain and Spruce Grove drivers. Daytime temperatures in Parkland County typically drop below 7°C in late October, which is the threshold at which all-season tires start losing grip. Getting your winter tires on, your detail done, and your PPF inspected in October means you are not rushing when the first major snowfall hits. Accurate Autoworks books up fast every fall, calling 780.818.9904 in early October to reserve your spot is the right move.",
  },
  {
    q: "How do I protect my vehicle's undercarriage from Alberta road salt damage?",
    a: "The undercarriage takes the worst of Alberta road salt, gravel, and sand every winter. A few things help significantly: getting a thorough undercarriage rinse every few weeks during salted-road months, having a rubberized undercoating applied if your vehicle does not already have factory protection, and parking in a heated garage when possible to slow corrosion between washes. At Accurate Autoworks, we include an undercarriage inspection during our detailing packages and flag any early rust or corrosion before it becomes a structural problem. Call 780.818.9904 for a pre-winter or post-winter vehicle inspection.",
  },
  {
    q: "Does window tint actually help in Alberta winters?",
    a: "Yes, in ways most drivers don't expect. Ceramic window tint retains cabin heat more effectively than bare glass, reducing the load on your heater on cold mornings. It also cuts the blinding low-angle glare from winter sun, driving west on Highway 16A in December at 4:30 PM is genuinely dangerous without glare management. UV rejection remains active year-round, protecting your dash and upholstery even on bright winter days. The film itself is unaffected by cold temperatures once fully cured.",
  },
  {
    q: "Should I detail my vehicle before or after winter?",
    a: "Both, if you can, but if you have to pick one, do it before winter. A proper fall detail includes a thorough paint decontamination that removes brake dust, rail dust, and embedded road grime that accelerates corrosion under salt exposure. Applying a ceramic coating or quality sealant before winter creates a protective layer that makes salt and slush bead off rather than bonding to the paint. A spring detail then removes the winter salt residue before it can cause long-term damage. Accurate Autoworks offers both seasonal detail packages.",
  },
  {
    q: "What is the difference between winter tires and all-weather tires for Alberta?",
    a: "Winter tires use a soft rubber compound optimized specifically for below-7°C performance, with deep tread blocks and sipes for maximum ice and snow grip. All-weather tires are a compromise, they carry the mountain snowflake symbol and outperform all-seasons in winter conditions, but they do not match dedicated winter tires on hard-pack snow or black ice. For Parkland County, where temperatures regularly hit -25°C and roads freeze hard, dedicated winter tires are the better choice if you want the best possible safety margin. All-weather tires are a reasonable option if you do very little driving in severe conditions.",
  },
  {
    q: "How much does full vehicle winterizing cost at Accurate Autoworks?",
    a: "It depends on which services you need. A tire changeover (swapping pre-mounted winter wheels) runs $80 to $120. A full interior and exterior detail runs $200 to $500 depending on vehicle size and condition. PPF on the front end (hood, fenders, mirrors) starts around $800 to $1,500. Ceramic coating starts around $600. You can mix and match based on your priorities and budget. Call 780.818.9904 and Accurate Autoworks will put together a package that makes sense for your vehicle and how hard your winters are on it.",
  },
  {
    q: "Does ceramic coating protect against Alberta road salt?",
    a: "Yes, ceramic coating creates a hydrophobic surface that causes water, salt, and slush to bead and roll off rather than sitting on the paint. Salt that can't stick can't corrode. That said, ceramic coating is not impervious to rock chips, so combining ceramic coating on the painted surfaces with PPF on the high-impact areas like the hood and front bumper gives you the most complete protection. Accurate Autoworks can walk you through which combination makes sense for your vehicle and typical driving routes.",
  },
  {
    q: "How long does a seasonal winterizing appointment take?",
    a: "That depends on the services. A tire changeover alone takes 45 to 90 minutes. A full detail is 4 to 8 hours. PPF installation on the front end is typically a full day. If you are combining services, detail plus tire swap, for example, we can often structure the appointment so both happen the same day, reducing the number of trips. Contact Accurate Autoworks at 780.818.9904 to discuss scheduling, and we will find the most efficient way to get everything done.",
  },
];

const COST_DATA = [
  { service: "Seasonal tire changeover (pre-mounted wheels)", cost: "$80 - $120", priority: "Essential", level: "essential" },
  { service: "Mount & balance (loose tires onto rims)", cost: "$100 - $180", priority: "If needed", level: "recommended" },
  { service: "Full exterior & interior detail", cost: "$200 - $500", priority: "Highly Recommended", level: "recommended" },
  { service: "Ceramic coating (paint protection)", cost: "$600 - $1,500+", priority: "Premium", level: "optional" },
  { service: "PPF front end (hood, fenders, mirrors)", cost: "$800 - $1,500", priority: "Premium", level: "optional" },
  { service: "Window tinting (full vehicle, ceramic)", cost: "$350 - $600", priority: "Recommended", level: "recommended" },
  { service: "Paint sealant / wax (budget option)", cost: "$100 - $200", priority: "Budget Option", level: "optional" },
];

const WINTER_SERVICES = [
  {
    name: "Winter Tires",
    urgency: "Critical",
    urgencyLevel: "critical",
    protects: "Safety & control on ice and snow",
    timing: "When temps drop below 7°C (late Oct)",
    lifespan: "4 - 6 seasons",
    notes: "The single highest-impact safety upgrade for Alberta winters. Non-negotiable for Parkland County driving.",
  },
  {
    name: "Paint Protection Film",
    urgency: "High",
    urgencyLevel: "high",
    protects: "Paint from rock chips, salt, road debris",
    timing: "Before first snowfall",
    lifespan: "7 - 10 years",
    notes: "Alberta highways and plow-cleared roads throw constant gravel and debris. PPF takes the hit so your paint doesn't.",
  },
  {
    name: "Window Tinting",
    urgency: "Medium",
    urgencyLevel: "medium",
    protects: "Cabin from glare, heat loss, UV",
    timing: "Any time, 3-7 day cure before cold",
    lifespan: "10+ years (ceramic)",
    notes: "Reduces low-sun glare, helps retain cabin heat, UV-active year-round. Best done before cold weather cure concerns.",
  },
  {
    name: "Ceramic Coating",
    urgency: "High",
    urgencyLevel: "high",
    protects: "Paint from salt, corrosion, bird drops",
    timing: "Fall (before salt season)",
    lifespan: "2 - 5 years depending on grade",
    notes: "Salt-shedding hydrophobic surface. Pair with PPF on high-impact zones for complete coverage.",
  },
  {
    name: "Full Detail (Fall)",
    urgency: "High",
    urgencyLevel: "high",
    protects: "Paint, interior from embedded contamination",
    timing: "October, before first serious snowfall",
    lifespan: "Seasonal",
    notes: "Decontamination removes brake dust and rail dust that corrode under salt. Interior protection prevents moisture damage.",
  },
];

export default function WinterizingVehicleAlberta() {
  const publishDate = "2026-05-13";
  const modifiedDate = "2026-05-13";

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
            Winter Prep Guide
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black uppercase tracking-tight leading-[1.05]">
            Winterizing Your Vehicle in{" "}
            <span className="text-[#EEFF00] glow-accent">Alberta</span>
            : Tires, PPF, Tint &amp; Detailing Guide
          </h1>

          <p className="mt-8 text-lg sm:text-xl text-[#999] max-w-2xl mx-auto leading-relaxed">
            Alberta winters hit hard. Rock chips from plow trucks, road salt
            that eats paint, black ice that demands proper rubber, this guide
            covers every protection service that actually matters for Stony
            Plain, Spruce Grove, and Parkland County drivers.
          </p>

          <div className="mt-6 flex items-center justify-center gap-6 text-xs text-[#666] uppercase tracking-wider">
            <div className="flex items-center gap-2">
              <svg className="w-3.5 h-3.5 text-[#EEFF00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <time dateTime={publishDate}>May 13, 2026</time>
            </div>
            <span className="w-1 h-1 rounded-full bg-[#333]" />
            <div className="flex items-center gap-2">
              <svg className="w-3.5 h-3.5 text-[#EEFF00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>15 min read</span>
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
            An Alberta winter is not a gentle inconvenience. From late October
            through March, Parkland County roads see hard-packed snow, black
            ice, temperature swings from -30°C to plus-5°C and back in 48
            hours, and a relentless diet of sand and salt that attacks every
            exposed surface on your vehicle. By the time the snow melts in
            April, an unprotected truck or SUV can look three years older than
            it is, rock-chipped hood, salt-etched paint, a stiff interior
            that smells like wet dog, and tires that wore out two seasons too
            early because they were the wrong rubber for the temperatures.
          </p>
          <p className="mt-4 text-[#ccc] leading-relaxed text-base sm:text-lg">
            The good news: every one of those outcomes is preventable with the
            right preparation in October. This guide covers the five services
            that matter most, winter tires, paint protection film, window
            tinting, ceramic coating, and a proper fall detail, what each one
            does, what it costs in 2026, and when to book them at{" "}
            <Link href="/tinting/" className="text-[#EEFF00] hover:underline">
              Accurate Autoworks in Stony Plain
            </Link>
            .
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
                { href: "#why-alberta-winters-are-different", label: "Why Alberta Winters Are Different" },
                { href: "#winter-tires", label: "Winter Tires: The Non-Negotiable" },
                { href: "#ppf-winter", label: "Paint Protection Film for Winter" },
                { href: "#window-tint-winter", label: "Window Tinting in Winter" },
                { href: "#ceramic-coating-salt", label: "Ceramic Coating vs. Road Salt" },
                { href: "#fall-detail", label: "Fall Detail: Why It Matters" },
                { href: "#service-comparison", label: "Complete Winter Prep Comparison" },
                { href: "#cost-guide", label: "2026 Pricing in Stony Plain" },
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

        {/* Section 1: Why Alberta Winters Are Different */}
        <section id="why-alberta-winters-are-different" className="mt-16 scroll-mt-24">
          <SectionHeading number="01" highlight="Different">
            Why Alberta Winters Are{" "}
          </SectionHeading>
          <p className="mt-6 text-[#ccc] leading-relaxed text-base">
            Alberta winters are not the same as Ontario winters, and they are
            not the same as British Columbia winters. They have a specific
            character that creates specific vehicle problems, and understanding
            it helps you prioritize where to spend your protection budget.
          </p>

          <div className="mt-8 space-y-4">
            {[
              {
                title: "Extreme Temperature Swings",
                detail:
                  "Parkland County regularly sees -30°C nights followed by plus-5°C afternoons a few days later. These freeze-thaw cycles are brutal on paint adhesion, tire rubber, and anything installed with adhesive (like poorly applied PPF). Quality materials and professional installation matter enormously, bargain-grade film or tint installed without proper surface prep will fail when Alberta's temperature swings hit.",
                icon: "temp",
              },
              {
                title: "Heavy Road Salt and Sand",
                detail:
                  "Alberta Transportation uses a combination of sand, salt, and magnesium chloride on provincial highways from October through April. The Acheson industrial corridor and Highway 16A see particularly heavy application. Salt that sits on bare paint begins attacking it within hours of contact. Undersides, rocker panels, and wheel wells are especially vulnerable. A hydrophobic coating like ceramic or wax gives salt a surface it can't easily bond to.",
                icon: "salt",
              },
              {
                title: "Plow Debris and Rock Chips",
                detail:
                  "Gravel plows pick up and throw road debris continuously, especially on secondary highways like Highway 779 and the Yellowhead connector routes used by Stony Plain and Spruce Grove commuters. If you drive more than 30 minutes from home in winter, you are driving through debris fields that chip paint. PPF on your hood and front bumper is not a luxury in Alberta, it is a practical investment in your vehicle's resale value.",
                icon: "chip",
              },
              {
                title: "Low-Angle Winter Sun",
                detail:
                  "In December and January, the sun in central Alberta never gets far above the horizon. Driving west on Highway 16A at 4:30 PM means driving directly into blinding low-angle sun for the entire commute. Window tint significantly reduces glare without compromising night visibility when the shade is chosen correctly.",
                icon: "sun",
              },
            ].map((item) => (
              <div key={item.title} className="card-gradient rounded-2xl p-6 sm:p-7">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#EEFF00]/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#EEFF00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      {item.icon === "temp" && (
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                      )}
                      {item.icon === "salt" && (
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      )}
                      {item.icon === "chip" && (
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      )}
                      {item.icon === "sun" && (
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l.707.707M6.343 6.343l.707.707M12 7a5 5 0 100 10 5 5 0 000-10z" />
                      )}
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-[#999] leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: Winter Tires */}
        <section id="winter-tires" className="mt-16 scroll-mt-24">
          <SectionHeading number="02" highlight="The Non-Negotiable">
            Winter Tires:{" "}
          </SectionHeading>
          <p className="mt-6 text-[#ccc] leading-relaxed text-base">
            Everything else in this guide is optional depending on your budget
            and priorities. Winter tires are not optional if you are driving in
            Alberta from late October through March. The physics are simple and
            unambiguous.
          </p>

          <div className="mt-8 space-y-5">
            <div className="card-gradient rounded-2xl p-6 sm:p-8">
              <h3 className="text-sm font-bold uppercase tracking-wide text-white mb-3">
                The 7°C Rule
              </h3>
              <p className="text-sm text-[#999] leading-relaxed">
                All-season tires are made from a rubber compound that stays
                flexible at temperatures above 7°C. Below that threshold, the
                compound hardens. A hardened tire has significantly less
                contact with the road surface, less grip, and longer braking
                distances, on dry pavement, not just on snow or ice.{" "}
                <a
                  href="https://www.tc.gc.ca/en/services/road/winter-driving.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#EEFF00] hover:underline"
                >
                  Transport Canada testing
                </a>{" "}
                consistently shows dedicated winter tires stop up to 25% shorter
                on ice than all-seasons at the same speed. In Stony Plain, where
                -15°C mornings are routine by November, that 25% gap is the
                difference between stopping at the intersection and going
                through it.
              </p>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-[#EEFF00]/30 bg-gradient-to-br from-[#EEFF00]/[0.06] to-[#141414]">
              <div className="absolute top-0 right-0 px-3 py-1 bg-[#EEFF00] text-black text-[10px] font-bold uppercase tracking-widest rounded-bl-lg">
                Key Timing
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="text-sm font-bold uppercase tracking-wide text-white mb-3">
                  Book in Early October, Not November
                </h3>
                <p className="text-sm text-[#999] leading-relaxed">
                  Every shop in Stony Plain, Spruce Grove, and Acheson gets
                  slammed with tire changeover bookings the moment the first
                  major snowfall hits. If you wait until November, you are
                  competing for appointment slots with every other driver in
                  Parkland County who also procrastinated. Booking in the first
                  two weeks of October means shorter wait times, more scheduling
                  flexibility, and you have your winters on before the roads get
                  genuinely dangerous.{" "}
                  <Link href="/tires/" className="text-[#EEFF00] hover:underline">
                    Accurate Autoworks handles seasonal tire changeovers
                  </Link>{" "}
, call ahead to reserve your slot.
                </p>
              </div>
            </div>

            <div className="card-gradient rounded-2xl p-6 sm:p-8">
              <h3 className="text-sm font-bold uppercase tracking-wide text-white mb-3">
                Winter vs All-Weather vs All-Season: The Real Differences
              </h3>
              <p className="text-sm text-[#999] leading-relaxed mb-4">
                Alberta drivers have three main options for cold-weather rubber.
                Understanding the differences helps you choose based on your
                actual driving patterns, not marketing language.
              </p>
              <div className="space-y-3 text-sm">
                {[
                  {
                    name: "Dedicated Winter Tires",
                    score: "Best",
                    scoreLevel: "best",
                    detail: "Soft compound optimized for below 7°C, deepest tread blocks, most sipes. Best grip on ice and hard-packed snow. Must be swapped seasonally.",
                  },
                  {
                    name: "All-Weather Tires",
                    score: "Good",
                    scoreLevel: "good",
                    detail: "Three-peak mountain snowflake rated. Better than all-seasons in winter, worse than dedicated winters on ice. Year-round convenience, no seasonal swap needed.",
                  },
                  {
                    name: "All-Season Tires",
                    score: "Poor (below 7°C)",
                    scoreLevel: "poor",
                    detail: "Not rated for severe winter conditions. Compound hardens in Alberta cold. Acceptable for fall and spring; inadequate for December through February in Parkland County.",
                  },
                ].map((t) => (
                  <div key={t.name} className="flex items-start gap-3 p-4 rounded-xl bg-[#0f0f0f] border border-[#1e1e1e]">
                    <TintRatingBadge level={t.scoreLevel} label={t.score} />
                    <div>
                      <p className="text-white font-bold text-xs mb-1">{t.name}</p>
                      <p className="text-[#999] text-xs leading-relaxed">{t.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Callout variant="tip">
            <strong className="text-white">Dedicated winter wheels pay off fast.</strong>{" "}
            If you plan to do seasonal changeovers for more than two years,
            buying a set of steel winter wheels is worth it. Swap cost drops
            from a mount-and-balance (which takes more time) to a simple
            wheel swap. You protect your alloys from road salt, and the total
            cost over three seasons is less than repeated mount-and-balance fees.{" "}
            <Link href="/tires/" className="text-[#EEFF00] hover:underline">
              Accurate Autoworks can advise on the right fitment
            </Link>{" "}
            for your vehicle.
          </Callout>
        </section>

        {/* Section 3: PPF for Winter */}
        <section id="ppf-winter" className="mt-16 scroll-mt-24">
          <SectionHeading number="03" highlight="for Alberta Winters">
            Paint Protection Film{" "}
          </SectionHeading>
          <p className="mt-6 text-[#ccc] leading-relaxed text-base">
            If you only add one paint-related service before winter, make it
            paint protection film on your front end. No other product offers
            the same combination of rock chip resistance, self-healing
            capability, and salt barrier in Alberta driving conditions. For a
            deep dive on the technology,{" "}
            <a
              href="https://www.3m.com/3M/en_US/p/c/paint-protection-film/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#EEFF00] hover:underline"
            >
              3M&apos;s paint protection film overview
            </a>{" "}
            is a useful reference for understanding how the film is
            manufactured and what self-healing urethane actually means
            chemically.
          </p>

          <div className="mt-8 space-y-5">
            <div className="card-gradient rounded-2xl p-6 sm:p-8">
              <h3 className="text-sm font-bold uppercase tracking-wide text-white mb-3">
                Rock Chips Are an Alberta Winter Inevitability
              </h3>
              <p className="text-sm text-[#999] leading-relaxed">
                Plow trucks operating on provincial highways don&apos;t just clear
                snow, they kick up the aggregate that is embedded in winter
                road surfaces and throw it sideways at highway speed. Secondary
                roads around Stony Plain, the Yellowhead connector, Highway 16A,
                and the Acheson ring roads are all heavily graveled in winter.
                Every commute on these roads without PPF on your hood is a
                chip lottery. One season of Alberta commuting can leave a
                truck hood looking like it was sandblasted. PPF absorbs those
                impacts, the film chips, not your paint.
              </p>
            </div>

            <div className="card-gradient rounded-2xl p-6 sm:p-8">
              <h3 className="text-sm font-bold uppercase tracking-wide text-white mb-3">
                Self-Healing Film Recovers from Light Damage with Heat
              </h3>
              <p className="text-sm text-[#999] leading-relaxed">
                Modern self-healing PPF uses a polyurethane topcoat with
                elastic memory properties. Light surface scratches, the kind
                you get from brushing snow off the hood, or from fine grit in
                a winter car wash, disappear when the film is exposed to heat.
                Park in the sun or pour warm water over the area and the
                scratches literally vanish as the topcoat relaxes back to its
                original shape. For Alberta, where fine road grit constantly
                contacts vehicle surfaces, this self-healing property
                significantly extends the appearance life of the film between
                replacements.
              </p>
            </div>

            <div className="card-gradient rounded-2xl p-6 sm:p-8">
              <h3 className="text-sm font-bold uppercase tracking-wide text-white mb-3">
                PPF as a Salt Barrier
              </h3>
              <p className="text-sm text-[#999] leading-relaxed">
                Paint protection film is not just about impact resistance. A
                properly installed PPF wrap creates a continuous barrier between
                road salt, magnesium chloride, and your paint. The film is
                non-porous and hydrophobic, salt water beads off rather than
                sitting on the surface and beginning the corrosion process. On
                the leading edge of the hood, mirror housings, and door edge
                cups where clearcoat gets the most salt exposure, PPF is
                functionally a corrosion barrier. After five Alberta winters,
                the difference between a PPF-protected hood and a bare hood is
                striking.
              </p>
            </div>

            <Callout variant="info">
              <Link href="/ppf/" className="text-[#EEFF00] hover:underline">
                Accurate Autoworks installs PPF
              </Link>{" "}
              on full vehicles, front ends, and high-impact zones. We use
              computer-cut templates specific to your vehicle, no hand-cutting
              guesswork. Book before the first snowfall for the best results,
              as PPF requires a clean, warm surface for optimal adhesion.
              Installation typically takes one to two full days depending on
              coverage area.
            </Callout>
          </div>
        </section>

        {/* Section 4: Window Tinting in Winter */}
        <section id="window-tint-winter" className="mt-16 scroll-mt-24">
          <SectionHeading number="04" highlight="in Winter">
            Window Tinting{" "}
          </SectionHeading>
          <p className="mt-6 text-[#ccc] leading-relaxed text-base">
            Window tinting is often thought of as a summer service, block the
            heat, add privacy. But Alberta drivers benefit from window tint in
            winter in several concrete ways that most people underestimate
            before they experience it.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            {[
              {
                title: "Low-Sun Glare Elimination",
                detail:
                  "Alberta's winter sun never climbs high. From November through February, it sits near the horizon for the entire driving day. Driving west in the afternoon on Highway 16A or toward Spruce Grove along Century Road means driving directly into that flat, blinding light. Ceramic window tint reduces glare without compromising night visibility, the science is that it cuts polarized and scattered light while maintaining good VLT for safe driving conditions. Visor strips do not solve this problem. Tint does.",
              },
              {
                title: "Cabin Heat Retention",
                detail:
                  "Glass is a poor insulator. On a -25°C night in Stony Plain, the interior glass surface is nearly as cold as the outside air, and convective heat loss through the windows is significant. Ceramic window film adds a small but measurable thermal barrier. You will notice less cold-draft sensation next to the glass, and your heater will reach comfortable cabin temperature faster. It's not the same as insulated glazing, but it's a real improvement over bare glass.",
              },
              {
                title: "Year-Round UV Protection",
                detail:
                  "UV radiation in Alberta is significant even in winter, especially when it reflects off snow, which amplifies solar intensity considerably. Ceramic tint blocks 99%+ of UV year-round. Your dashboard, leather seats, and upholstery are protected from fading even on bright winter days with high-angle sun bouncing off a fresh snowpack.",
              },
              {
                title: "Privacy and Security",
                detail:
                  "Dark rear windows are as effective in winter as in summer for keeping gear out of sight. Parkland County and the Acheson industrial area see higher-than-average vehicle break-in rates, tools, electronics, and bags left visible in trucks are targets. Window tint removes the visual invitation year-round.",
              },
            ].map((benefit) => (
              <div
                key={benefit.title}
                className="card-gradient rounded-2xl p-6 group hover:border-[#EEFF00]/50 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-[#EEFF00]/10 flex items-center justify-center mb-4 group-hover:bg-[#EEFF00]/20 transition-colors">
                  <svg className="w-5 h-5 text-[#EEFF00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-sm font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-xs text-[#999] leading-relaxed">{benefit.detail}</p>
              </div>
            ))}
          </div>

          <Callout variant="warning">
            <strong className="text-white">Timing matters for tint installation in fall.</strong>{" "}
            Window tint requires 3 to 7 days of cure time, and colder
            temperatures extend that period. If possible, get your tint done
            in September or early October before temperatures drop below 5°C
            consistently. Late-fall installations still work, but expect a
            longer cure period and keep the windows up for a full week. During
            cure, small water pockets and haze are normal, they disappear as
            the adhesive sets. Visit our{" "}
            <Link href="/tinting/" className="text-[#EEFF00] hover:underline">
              window tinting page
            </Link>{" "}
            for full details.
          </Callout>
        </section>

        {/* Section 5: Ceramic Coating vs. Road Salt */}
        <section id="ceramic-coating-salt" className="mt-16 scroll-mt-24">
          <SectionHeading number="05" highlight="vs. Road Salt">
            Ceramic Coating{" "}
          </SectionHeading>
          <p className="mt-6 text-[#ccc] leading-relaxed text-base">
            Ceramic coating is often marketed as a car show preparation or a
            high-gloss luxury treatment. For Alberta drivers, that framing
            undersells its most practical winter benefit: it makes salt slide
            off your paint instead of bonding to it.
          </p>

          <div className="mt-8 space-y-5">
            <div className="card-gradient rounded-2xl p-6 sm:p-8">
              <h3 className="text-sm font-bold uppercase tracking-wide text-white mb-3">
                How Ceramic Coating Works Against Salt
              </h3>
              <p className="text-sm text-[#999] leading-relaxed">
                A ceramic coating bonds at the molecular level to your
                clearcoat, creating a semi-permanent hydrophobic surface with
                a contact angle typically above 100 degrees. In practical terms,
                this means water, and salty, mineral-laden road spray, beads
                into droplets and rolls off rather than sitting on the paint
                surface. Salt that cannot stay in contact with the paint cannot
                begin the oxidation and corrosion cycle. After a winter storm,
                a ceramic-coated vehicle often needs just a pressure rinse to
                remove road salt, while an uncoated vehicle needs scrubbing to
                remove salt residue that has already started bonding to the
                clearcoat.
              </p>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-[#EEFF00]/30 bg-gradient-to-br from-[#EEFF00]/[0.06] to-[#141414]">
              <div className="absolute top-0 right-0 px-3 py-1 bg-[#EEFF00] text-black text-[10px] font-bold uppercase tracking-widest rounded-bl-lg">
                Best Combined
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="text-sm font-bold uppercase tracking-wide text-white mb-3">
                  Ceramic Coating + PPF: The Complete Protection Stack
                </h3>
                <p className="text-sm text-[#999] leading-relaxed">
                  The optimal setup for an Alberta winter is PPF on the
                  high-impact zones, hood, front bumper, mirrors, fender
                  leading edges, and ceramic coating on the remaining painted
                  surfaces. PPF handles the physical rock chip impacts that
                  ceramic cannot. Ceramic handles the salt, bird drops, and UV
                  on the areas not covered by film. Together they leave no
                  significant vulnerability. Accurate Autoworks installs both
                  services and can coordinate them in the right sequence:
                  PPF goes on first, then the ceramic coating is applied over
                  the remaining paint and over the PPF for uniform
                  hydrophobics across the entire vehicle.
                </p>
              </div>
            </div>

            <div className="card-gradient rounded-2xl p-6 sm:p-8">
              <h3 className="text-sm font-bold uppercase tracking-wide text-white mb-3">
                Fall Is the Best Time to Apply Ceramic Coating
              </h3>
              <p className="text-sm text-[#999] leading-relaxed">
                Ceramic coatings cure through a combination of time and
                temperature. Most professional-grade coatings need 24 to 72
                hours of controlled conditions and prefer temperatures above
                10°C for optimal bonding. Apply in October before the first
                hard freeze, let it cure properly, and the coating will be
                fully hardened and ready for the salt season by the time
                November arrives. Applying in December when it&apos;s -20°C is
                significantly harder on the installer and the product, and
                results are less predictable. Book your{" "}
                <Link href="/detailing/" className="text-[#EEFF00] hover:underline">
                  ceramic coating appointment with Accurate Autoworks
                </Link>{" "}
                in September or October for best results.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: Fall Detail */}
        <section id="fall-detail" className="mt-16 scroll-mt-24">
          <SectionHeading number="06" highlight="Why It Matters">
            Fall Detail:{" "}
          </SectionHeading>
          <p className="mt-6 text-[#ccc] leading-relaxed text-base">
            A fall detail is not just about making your vehicle look clean. It
            is about removing the contamination that will accelerate corrosion
            under five months of salt exposure, and preparing the surfaces for
            any protective coatings that will be applied.
          </p>

          <div className="mt-8 space-y-4">
            {[
              {
                step: "01",
                title: "Decontamination Wash",
                description:
                  "A proper fall detail starts with an iron decontamination treatment, a chemical that reacts with and dissolves ferrous particles embedded in the paint. Brake dust, rail dust from train crossings, and airborne industrial particles from the Acheson industrial area are all ferrous. Left in the paint under a winter of salt exposure, they accelerate corrosion. Removing them in October before the salt season starts gives your paint a clean baseline.",
              },
              {
                step: "02",
                title: "Clay Bar Treatment",
                description:
                  "After the chemical decon, a clay bar removes bonded contamination that the chemicals loosened. This step gets the paint to a truly smooth, contamination-free surface, the same surface you need if you are applying a ceramic coating or wax on top. Running your hand across a properly clay-barred hood feels like glass. This preparation step is what separates a professional fall detail from a car wash.",
              },
              {
                step: "03",
                title: "Interior Deep Clean",
                description:
                  "Alberta winters are wet, boots track in snow melt, sand, and salt residue from parking lots and sidewalks. If your carpets and floor mats are not cleaned and protected before winter hits, they spend five months saturated with salt-laden moisture. Salt-soaked carpet backing deteriorates, odours set in, and the moisture under the mats can cause corrosion in the vehicle floor. A fall interior detail extracts embedded dirt and applies a fabric protector that slows re-contamination.",
              },
              {
                step: "04",
                title: "Protective Sealant or Wax",
                description:
                  "After the paint is fully decontaminated, applying a quality carnauba wax or synthetic sealant gives the surface a sacrificial hydrophobic layer before the salt arrives. This is the budget alternative to ceramic coating. It won't last as long, typically one season versus two to five years for ceramic, but it is significantly better than going into winter with bare clearcoat. A sealant applied in October holds through approximately March in typical Alberta use.",
              },
            ].map((phase) => (
              <div key={phase.step} className="relative rounded-2xl overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#EEFF00] to-[#EEFF00]/20" />
                <div className="card-gradient rounded-2xl border-l-0 pl-6 pr-6 py-6 sm:pl-8 sm:pr-8 sm:py-8 ml-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-[#EEFF00] text-black text-xs font-black flex-shrink-0">
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
            <strong className="text-white">Don&apos;t forget the spring detail.</strong>{" "}
            Just as important as the fall detail is the spring wash and
            decontamination after the salt season ends. Road salt left on
            paint and in wheel wells continues to corrode even after spring
            thaws. A{" "}
            <Link href="/detailing/" className="text-[#EEFF00] hover:underline">
              thorough spring detail at Accurate Autoworks
            </Link>{" "}
            removes the winter&apos;s salt accumulation before it causes
            lasting damage, and it is the right time to assess whether your
            ceramic coating or PPF needs a maintenance pass.
          </Callout>
        </section>

        {/* Section 7: Service Comparison Table */}
        <section id="service-comparison" className="mt-16 scroll-mt-24">
          <SectionHeading number="07" highlight="Comparison">
            Complete Winter Prep{" "}
          </SectionHeading>
          <p className="mt-6 text-[#ccc] leading-relaxed text-base">
            Here is every key winterizing service compared side by side, what
            it protects, when to book it, and how long it lasts.
          </p>

          {/* Desktop table */}
          <div className="mt-8 hidden sm:block rounded-2xl overflow-hidden border border-[#2a2a2a]">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#EEFF00]/[0.06]">
                  {["Service", "Urgency", "Protects Against", "Best Timing", "Lifespan"].map((h) => (
                    <th key={h} className="text-left py-4 px-5 text-xs font-bold uppercase tracking-widest text-[#EEFF00]">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-[#ccc]">
                {WINTER_SERVICES.map((row, i) => (
                  <tr
                    key={row.name}
                    className={`border-t border-[#1e1e1e] transition-colors hover:bg-[#EEFF00]/[0.03] ${
                      i % 2 === 0 ? "bg-[#141414]" : "bg-[#0f0f0f]"
                    }`}
                  >
                    <td className="py-4 px-5 font-bold text-white">{row.name}</td>
                    <td className="py-4 px-5">
                      <TintRatingBadge
                        level={row.urgencyLevel === "critical" ? "best" : row.urgencyLevel === "high" ? "good" : "poor"}
                        label={row.urgency}
                      />
                    </td>
                    <td className="py-4 px-5 text-xs">{row.protects}</td>
                    <td className="py-4 px-5 text-xs">{row.timing}</td>
                    <td className="py-4 px-5 text-xs">{row.lifespan}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="mt-8 sm:hidden space-y-4">
            {WINTER_SERVICES.map((row) => (
              <div key={row.name} className="card-gradient rounded-2xl p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-bold text-white text-sm">{row.name}</span>
                  <TintRatingBadge
                    level={row.urgencyLevel === "critical" ? "best" : row.urgencyLevel === "high" ? "good" : "poor"}
                    label={row.urgency}
                  />
                </div>
                <div className="grid grid-cols-1 gap-2 text-xs text-[#999]">
                  <span>Protects: <strong className="text-white">{row.protects}</strong></span>
                  <span>Best time: <strong className="text-white">{row.timing}</strong></span>
                  <span>Lifespan: <strong className="text-white">{row.lifespan}</strong></span>
                </div>
                <p className="mt-3 text-xs text-[#666] leading-relaxed">{row.notes}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 8: Cost Guide */}
        <section id="cost-guide" className="mt-16 scroll-mt-24">
          <SectionHeading number="08" highlight="in Stony Plain (2026)">
            Winterizing Costs{" "}
          </SectionHeading>
          <p className="mt-6 text-[#ccc] leading-relaxed text-base">
            Here is what each winterizing service costs at a quality shop in
            the Stony Plain and Spruce Grove area in 2026. These are realistic
            price ranges for professional work with warranted products,             not self-install kits or budget-chain shop pricing.
          </p>

          {/* Desktop table */}
          <div className="mt-8 hidden sm:block rounded-2xl overflow-hidden border border-[#2a2a2a]">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#EEFF00]/[0.06]">
                  <th className="text-left py-4 px-6 text-xs font-bold uppercase tracking-widest text-[#EEFF00]">
                    Service
                  </th>
                  <th className="text-left py-4 px-6 text-xs font-bold uppercase tracking-widest text-[#EEFF00]">
                    Cost Range
                  </th>
                  <th className="text-left py-4 px-6 text-xs font-bold uppercase tracking-widest text-[#EEFF00]">
                    Priority
                  </th>
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
            as of 2026. Vehicle size, condition, and service combinations
            affect final pricing. Call 780.818.9904 for an exact quote.
          </p>

          <Callout variant="tip">
            <strong className="text-white">Bundle and save.</strong>{" "}
            Combining a fall detail with a tire changeover on the same day
            saves labour time and a return trip. If you are adding PPF or
            ceramic coating, coordinating all services in a single multi-day
            booking with{" "}
            <Link href="/detailing/" className="text-[#EEFF00] hover:underline">
              Accurate Autoworks
            </Link>{" "}
            often results in package pricing that is lower than booking each
            service separately. Call 780.818.9904 to discuss your specific
            combination.
          </Callout>
        </section>

        {/* Section 9: FAQ */}
        <section id="faq" className="mt-16 scroll-mt-24">
          <SectionHeading number="09" highlight="Asked">
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
          <div className="absolute inset-0 bg-gradient-to-br from-[#EEFF00]/15 via-[#EEFF00]/5 to-transparent" />
          <div className="absolute inset-0 hero-stripe opacity-30" />
          <div className="absolute inset-0 border border-[#EEFF00]/20 rounded-2xl" />
          <div className="relative p-8 sm:p-12 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs font-bold uppercase tracking-[3px] text-[#EEFF00] border border-[#EEFF00]/30 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#EEFF00] animate-pulse" />
              Book Before October
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight">
              Get Your Vehicle Ready for{" "}
              <span className="text-[#EEFF00] glow-accent">Alberta Winter</span>
            </h2>
            <p className="mt-4 text-[#999] max-w-xl mx-auto leading-relaxed">
              Winter tires, PPF, ceramic coating, window tint, and full
              detailing, Accurate Autoworks handles all of it under one roof
              in Stony Plain. Serving Spruce Grove, Parkland County, Acheson,
              and Edmonton West. Book early and beat the October rush.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Book Your Winter Prep
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
                Stony Plain, Alberta. Helping local drivers protect and
                customize their vehicles since 2023. Tinting, wraps, detailing,
                PPF, ceramic coating, and tire changeovers under one roof.
              </p>
              <div className="mt-3 flex items-center justify-center sm:justify-start gap-3">
                <a
                  href="tel:7808189904"
                  className="text-xs text-[#EEFF00] hover:underline font-bold"
                >
                  780.818.9904
                </a>
                <span className="w-1 h-1 rounded-full bg-[#333]" />
                <Link
                  href="/contact/"
                  className="text-xs text-[#999] hover:text-[#EEFF00] transition-colors"
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
              "Winterizing Your Vehicle in Alberta: Tires, PPF, Tint & Detailing Guide",
            description:
              "Complete guide to winterizing your vehicle in Alberta, winter tires, PPF, window tint, ceramic coating, and fall detailing for Stony Plain and Spruce Grove drivers.",
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
                "https://www.accurateautoworks.ca/blog/winterizing-vehicle-alberta-stony-plain/",
            },
            keywords:
              "winterizing vehicle Alberta, winter car protection Stony Plain, vehicle winter prep Spruce Grove, winter tires Parkland County, PPF winter Alberta",
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
              "Stony Plain's premier auto customization shop offering window tinting, vinyl wraps, car detailing, PPF, ceramic coating, tire changeovers, and commercial printing.",
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
    essential:
      "bg-[#EEFF00]/15 text-[#EEFF00] border-[#EEFF00]/30",
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
    best: "bg-[#EEFF00]/15 text-[#EEFF00] border-[#EEFF00]/30",
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
      border: "border-[#EEFF00]/20",
      bg: "bg-[#EEFF00]/[0.04]",
      icon: "text-[#EEFF00]",
      iconBg: "bg-[#EEFF00]/10",
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
