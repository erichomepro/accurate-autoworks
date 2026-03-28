import Link from "next/link";
import type { Metadata } from "next";
import { BlogPostClient } from "./client";

export const metadata: Metadata = {
  title:
    "Spring Vehicle Maintenance Guide for Stony Plain & Spruce Grove Drivers | 2026 Checklist",
  description:
    "Complete spring car maintenance checklist for Alberta drivers. Tire changeover, detailing, paint protection & tint inspection. Accurate Autoworks, Stony Plain.",
  alternates: {
    canonical:
      "https://www.accurateautoworks.ca/blog/spring-vehicle-maintenance-guide-stony-plain",
  },
  openGraph: {
    title:
      "Spring Vehicle Maintenance Guide for Stony Plain & Spruce Grove Drivers",
    description:
      "The complete spring checklist every Alberta driver needs after a brutal winter. Tire swaps, detailing, paint protection, and more.",
    type: "article",
    locale: "en_CA",
    siteName: "Accurate Autoworks",
  },
};

const FAQ_DATA = [
  {
    q: "When should I switch from winter tires to summer tires in Stony Plain?",
    a: "Once daytime temperatures consistently stay above 7 degrees Celsius, it is time to swap. In the Stony Plain and Spruce Grove area, that is typically mid to late April. Running winters past mid-April wears the rubber fast and actually increases stopping distance on dry roads. Book early at Accurate Autoworks — call 780.818.9904.",
  },
  {
    q: "How much does spring car detailing cost near Spruce Grove?",
    a: "A full spring detail (interior and exterior) at Accurate Autoworks in Stony Plain typically runs $250 to $500 depending on vehicle size and condition. This includes hand wash, clay bar, polish, wax or sealant, interior vacuum, shampoo, leather conditioning, and full surface cleaning. Heavily soiled vehicles may be higher.",
  },
  {
    q: "Is paint protection film worth it for Alberta drivers?",
    a: "If you drive Highway 16A, gravel roads around Parkland County, or work in the Acheson industrial area, PPF pays for itself by preventing rock chips that cost hundreds to repair. The front bumper, hood, and fenders take the most abuse. Self-healing PPF absorbs impacts and stays clear for years.",
  },
  {
    q: "How do I know if my window tint needs replacing?",
    a: "Look for purple discolouration, bubbling, peeling edges, or visible scratches from ice scrapers. Low-quality dyed tint degrades after 3 to 5 Alberta winters. Modern ceramic tint lasts much longer, blocks more heat, and does not fade to purple. Visit Accurate Autoworks for a free tint inspection.",
  },
  {
    q: "What spring maintenance is most important for trucks in Parkland County?",
    a: "Tire changeover and undercarriage wash are the top two priorities. Trucks running gravel roads accumulate more salt, sand, and debris than city-driven cars. Follow that with a detail and consider PPF on the front end if you are regularly on unpaved roads around Acheson or rural Parkland County.",
  },
  {
    q: "Where can I get my tires changed near Acheson, AB?",
    a: "Accurate Autoworks on Boulder Boulevard in Stony Plain is a short drive from Acheson. We handle everything from passenger cars to full-size trucks with lift kits. Seasonal changeover, mount and balance, flat repairs, and new tire sourcing. Call 780.818.9904 or just roll in.",
  },
  {
    q: "Does road salt really damage my car?",
    a: "Absolutely. Road salt accelerates rust on your undercarriage, frame rails, brake lines, and body panels. In Alberta, vehicles are exposed to salt for 5 to 6 months per year. A thorough undercarriage wash in spring removes the salt before it causes structural damage. Pairing that with a full detail removes salt from paint surfaces as well.",
  },
  {
    q: "Can I do spring vehicle maintenance all at one shop in Stony Plain?",
    a: "At Accurate Autoworks, we handle tire changeovers, full detailing, window tint, PPF, ceramic coating, and vinyl wraps all under one roof. You can book your tire swap and spring detail on the same day and knock out the biggest items on your spring checklist in one visit. Call 780.818.9904 to book.",
  },
];

const COST_DATA = [
  { service: "Seasonal tire changeover (on rims)", cost: "$40 - $60", priority: "Essential", level: "essential" },
  { service: "Tire changeover (mount & balance)", cost: "$80 - $140", priority: "Essential", level: "essential" },
  { service: "Full detail (interior + exterior)", cost: "$250 - $500", priority: "Essential", level: "essential" },
  { service: "Undercarriage wash", cost: "$30 - $75", priority: "Essential", level: "essential" },
  { service: "Wiper blade replacement", cost: "$20 - $50", priority: "Recommended", level: "recommended" },
  { service: "Wax or sealant application", cost: "$50 - $150", priority: "Recommended", level: "recommended" },
  { service: "Ceramic coating", cost: "$500 - $1,500", priority: "Optional upgrade", level: "optional" },
  { service: "Paint protection film (front end)", cost: "$800 - $2,500", priority: "Optional upgrade", level: "optional" },
  { service: "Window tint replacement (full vehicle)", cost: "$300 - $600", priority: "If needed", level: "optional" },
  { service: "Oil change", cost: "$60 - $120", priority: "Recommended", level: "recommended" },
];

export default function SpringMaintenanceGuidePage() {
  const publishDate = "2026-03-27";
  const modifiedDate = "2026-03-27";

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
            Auto Care Guide
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black uppercase tracking-tight leading-[1.05]">
            The Complete Spring Vehicle Maintenance Guide for{" "}
            <span className="text-[#22d65f] glow-accent">
              Stony Plain &amp; Spruce Grove
            </span>{" "}
            Drivers
          </h1>

          <p className="mt-8 text-lg sm:text-xl text-[#999] max-w-2xl mx-auto leading-relaxed">
            Alberta winters are brutal on vehicles. Here is everything you need
            to do this spring to undo the damage, protect your investment, and
            get your ride ready for the warm months ahead.
          </p>

          <div className="mt-6 flex items-center justify-center gap-6 text-xs text-[#666] uppercase tracking-wider">
            <div className="flex items-center gap-2">
              <svg className="w-3.5 h-3.5 text-[#22d65f]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <time dateTime={publishDate}>March 27, 2026</time>
            </div>
            <span className="w-1 h-1 rounded-full bg-[#333]" />
            <div className="flex items-center gap-2">
              <svg className="w-3.5 h-3.5 text-[#22d65f]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>12 min read</span>
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
            If you live in Stony Plain, Spruce Grove, Parkland County, or
            anywhere in the Edmonton West corridor, your vehicle just survived
            five months of road salt, gravel, freeze-thaw cycles, and
            temperatures that dipped below minus 30. That takes a real toll on
            everything from your paint and tires to your windshield and
            undercarriage.
          </p>
          <p className="mt-4 text-[#ccc] leading-relaxed text-base sm:text-lg">
            Spring is when you have a window to fix the damage before it gets
            worse and to set your vehicle up for a smooth, problem-free summer.
            This guide covers every maintenance item that matters for local
            drivers, with real cost estimates and practical advice from the team
            at Accurate Autoworks.
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
                { href: "#tire-changeover", label: "Seasonal Tire Changeover" },
                { href: "#wash-and-detail", label: "Deep Wash and Spring Detail" },
                { href: "#paint-protection", label: "Paint Protection After Winter" },
                { href: "#tint-check", label: "Window Tint Inspection" },
                { href: "#undercarriage", label: "Undercarriage and Salt Damage" },
                { href: "#fluids-and-wipers", label: "Fluids, Wipers, and Visibility" },
                { href: "#cost-comparison", label: "Spring Maintenance Cost Guide" },
                { href: "#checklist", label: "Your Spring Checklist" },
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

        {/* Section 1: Tire Changeover */}
        <section id="tire-changeover" className="mt-16 scroll-mt-24">
          <SectionHeading number="01" highlight="Changeover">
            Seasonal Tire{" "}
          </SectionHeading>
          <p className="mt-6 text-[#ccc] leading-relaxed text-base">
            This is the single most important spring maintenance item for
            Alberta drivers. Running winter tires past mid-April is a bad idea
            for two reasons: the soft rubber compound wears out fast on warm
            pavement, and your fuel economy drops noticeably. Winter tires on dry
            roads at plus 15 degrees actually have <em>longer</em> stopping
            distances than all-seasons or summers.
          </p>
          <p className="mt-4 text-[#ccc] leading-relaxed text-base">
            The rule of thumb is simple: once temperatures consistently stay
            above 7 degrees Celsius, it is time to swap. In the Stony Plain and
            Spruce Grove area, that usually means mid to late April, though some
            years March gives us a warm stretch that fools everyone before one
            last dump of snow.
          </p>

          <div className="mt-8 card-gradient rounded-2xl p-6 sm:p-8">
            <h3 className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-[#22d65f] mb-5">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              What a Proper Changeover Includes
            </h3>
            <ul className="space-y-3 text-sm text-[#ccc]">
              {[
                "Dismount winter tires and mount summer or all-season tires",
                "Balance all four wheels on a Hunter balancing machine",
                "Torque lug nuts to factory specification",
                "TPMS sensor reset",
                "Tread depth and sidewall inspection on both sets",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#22d65f]/15 flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 text-[#22d65f]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <Callout variant="tip">
            <strong className="text-white">Local tip:</strong> Book your
            changeover early. The second and third weeks of April are the
            busiest at every tire shop in Parkland County. At{" "}
            <Link href="/tires" className="text-[#22d65f] hover:underline">
              Accurate Autoworks
            </Link>
            , a standard changeover runs $80 to $140 depending on vehicle size.
            If your tires are already on rims, a swap is $40 to $60.
          </Callout>
        </section>

        {/* Section 2: Wash and Detail */}
        <section id="wash-and-detail" className="mt-16 scroll-mt-24">
          <SectionHeading number="02" highlight="Detail">
            Deep Wash and Spring{" "}
          </SectionHeading>
          <p className="mt-6 text-[#ccc] leading-relaxed text-base">
            A drive-through car wash is not going to cut it after an Alberta
            winter. Road salt, calcium chloride, sand, and gravel dust are
            embedded into every surface of your vehicle. The paint has a film of
            contaminants that a basic wash will not remove. Inside, your floor
            mats are caked with salt residue, your seats have absorbed moisture
            and who knows what else, and your dashboard is coated in dust.
          </p>
          <p className="mt-4 text-[#ccc] leading-relaxed text-base">
            A proper spring detail involves a hand wash, clay bar treatment to
            pull embedded contaminants out of the paint, a polish to restore
            gloss, and a wax or sealant to protect the finish going into summer.
            Interior work should include a deep vacuum, shampoo of carpets and
            mats, leather conditioning, and cleaning of every vent and surface.
          </p>

          <Callout variant="info">
            This is not just cosmetic. Salt left on paint causes oxidation and
            rust. Salt in your carpet accelerates corrosion on the floor pan
            underneath. A proper spring detail removes these threats and resets
            your vehicle to a clean, protected state. At Accurate Autoworks, our{" "}
            <Link
              href="/detailing"
              className="text-[#22d65f] hover:underline"
            >
              full detail packages
            </Link>{" "}
            start at $250 and include everything inside and out.
          </Callout>
        </section>

        {/* Section 3: Paint Protection */}
        <section id="paint-protection" className="mt-16 scroll-mt-24">
          <SectionHeading number="03" highlight="After Winter">
            Paint Protection{" "}
          </SectionHeading>
          <p className="mt-6 text-[#ccc] leading-relaxed text-base">
            Once your vehicle is clean and detailed, spring is the ideal time to
            add a layer of protection. Alberta summer brings its own hazards:
            intense UV exposure, gravel roads around Parkland County and Acheson,
            bug splatter, and road construction debris on Highway 16A and the
            Yellowhead.
          </p>
          <p className="mt-4 text-[#ccc] leading-relaxed text-base">
            You have several options depending on your budget and how much
            protection you want:
          </p>

          <div className="mt-8 space-y-4">
            {[
              {
                title: "Wax or Sealant",
                price: "$50 - $150",
                description:
                  "The most affordable option. A quality carnauba wax or synthetic sealant adds a layer of protection that lasts 2 to 4 months. Applied during your spring detail, it protects against UV, light scratches, and makes washing easier. Good for daily drivers on a budget.",
                tier: "Good",
              },
              {
                title: "Ceramic Coating",
                price: "$500 - $1,500",
                description:
                  "A semi-permanent layer of protection that bonds to your paint and lasts 2 to 5 years. Hydrophobic (water beads and rolls off), UV resistant, and extremely glossy. Best applied after paint correction to seal in a flawless finish. Worth it for newer vehicles and anyone who wants low-maintenance protection.",
                tier: "Better",
              },
              {
                title: "Paint Protection Film (PPF)",
                price: "$800 - $5,000+",
                description:
                  "A clear, self-healing film applied to high-impact areas like the front bumper, hood, fenders, and mirrors. PPF physically absorbs rock chips, bug damage, and road debris that would otherwise chip your paint. Ideal for trucks running gravel roads in the Acheson industrial area or anyone driving Highway 16A regularly.",
                tier: "Best",
                link: "/ppf",
                linkText: "PPF service page",
              },
            ].map((option) => (
              <div
                key={option.title}
                className={`relative rounded-2xl overflow-hidden group transition-all duration-300 hover:-translate-y-0.5 ${
                  option.tier === "Best"
                    ? "border border-[#22d65f]/30 bg-gradient-to-br from-[#22d65f]/[0.06] to-[#141414]"
                    : "card-gradient"
                }`}
              >
                {option.tier === "Best" && (
                  <div className="absolute top-0 right-0 px-3 py-1 bg-[#22d65f] text-black text-[10px] font-bold uppercase tracking-widest rounded-bl-lg">
                    Most Popular
                  </div>
                )}
                <div className="p-6 sm:p-8">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-bold uppercase tracking-wide text-white">
                      {option.title}
                    </h3>
                    <span className="text-xs font-bold text-[#22d65f] px-3 py-1 rounded-full bg-[#22d65f]/10">
                      {option.tier}
                    </span>
                  </div>
                  <div className="text-xl font-black text-white mb-3">
                    {option.price}
                  </div>
                  <p className="text-sm text-[#999] leading-relaxed">
                    {option.description}
                    {option.link && (
                      <>
                        {" "}
                        See our{" "}
                        <Link
                          href={option.link}
                          className="text-[#22d65f] hover:underline"
                        >
                          {option.linkText}
                        </Link>{" "}
                        for details.
                      </>
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Tint Check */}
        <section id="tint-check" className="mt-16 scroll-mt-24">
          <SectionHeading number="04" highlight="Inspection">
            Window Tint{" "}
          </SectionHeading>
          <p className="mt-6 text-[#ccc] leading-relaxed text-base">
            If your vehicle has window tint, spring is the time to inspect it
            for damage. The freeze-thaw cycle that Alberta puts vehicles through
            can cause older or low-quality tint to bubble, peel, or crack along
            the edges. This is especially common on rear windows with defroster
            lines and on side windows that get the most ice scraper contact.
          </p>
          <p className="mt-4 text-[#ccc] leading-relaxed text-base">
            Signs your tint needs attention:
          </p>

          <div className="mt-6 grid sm:grid-cols-2 gap-3">
            {[
              { icon: "eye", text: "Purple or faded colour, especially on side windows" },
              { icon: "alert", text: "Bubbles forming under the film" },
              { icon: "peel", text: "Edges peeling or curling away from the glass" },
              { icon: "scratch", text: "Scratches from ice scrapers that catch light and obstruct vision" },
            ].map((sign) => (
              <div
                key={sign.text}
                className="card-gradient rounded-xl p-4 flex items-start gap-3"
              >
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-500/10 flex items-center justify-center mt-0.5">
                  <svg className="w-3.5 h-3.5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </span>
                <span className="text-sm text-[#ccc]">{sign.text}</span>
              </div>
            ))}
          </div>

          <Callout variant="tip">
            If your tint is showing any of these signs, it is time for a
            replacement. Modern ceramic tint films are far more durable than the
            dyed films from a few years ago, and they reject significantly more
            heat. A fresh set of{" "}
            <Link
              href="/tinting"
              className="text-[#22d65f] hover:underline"
            >
              premium ceramic window tint
            </Link>{" "}
            at Accurate Autoworks keeps your cabin cool through Alberta summers
            and blocks 99% of UV rays that damage your interior.
          </Callout>
        </section>

        {/* Section 5: Undercarriage */}
        <section id="undercarriage" className="mt-16 scroll-mt-24">
          <SectionHeading number="05" highlight="Salt Damage">
            Undercarriage and{" "}
          </SectionHeading>
          <p className="mt-6 text-[#ccc] leading-relaxed text-base">
            This is the part most people skip, and it is the part that costs the
            most when neglected. Road salt and calcium chloride get sprayed up
            into your undercarriage, wheel wells, brake lines, exhaust
            components, and frame rails every time you drive on a treated road.
            Over the winter, that salt sits there and slowly corrodes metal.
          </p>
          <p className="mt-4 text-[#ccc] leading-relaxed text-base">
            A thorough undercarriage wash in the spring removes this salt before
            it can cause serious damage. This is especially important for trucks
            and SUVs that spend time on gravel roads around Parkland County and
            the Acheson industrial park, where road treatment is heavy and
            debris is constant.
          </p>
          <p className="mt-4 text-[#ccc] leading-relaxed text-base">
            Look for these signs of existing salt damage during your spring
            inspection:
          </p>

          <div className="mt-6 space-y-3">
            {[
              "Rust bubbles forming on rocker panels or wheel arches",
              "Brake dust buildup that is heavier than normal (could indicate corroded rotors)",
              "White or brownish residue caked on frame rails and suspension components",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 p-4 rounded-xl bg-red-500/[0.04] border border-red-500/10"
              >
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-red-500/15 flex items-center justify-center mt-0.5">
                  <svg className="w-3 h-3 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01" />
                  </svg>
                </span>
                <span className="text-sm text-[#ccc]">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: Fluids and Wipers */}
        <section id="fluids-and-wipers" className="mt-16 scroll-mt-24">
          <SectionHeading number="06" highlight="Visibility">
            Fluids, Wipers, and{" "}
          </SectionHeading>
          <p className="mt-6 text-[#ccc] leading-relaxed text-base">
            Alberta winter is hard on visibility components. Your wiper blades
            have spent months scraping ice and pushing heavy snow. By spring,
            most blades are torn, streaking, or chattering across the glass. A
            fresh set of wipers costs $20 to $50 and takes five minutes to
            install. There is no reason to start spring with bad wipers.
          </p>
          <p className="mt-4 text-[#ccc] leading-relaxed text-base">
            While you are at it, check these fluid levels:
          </p>
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {[
              {
                title: "Windshield Washer Fluid",
                icon: "droplet",
                description:
                  "Switch from winter (-40 rated) to a summer bug-wash formula. You burn through more washer fluid in spring due to road spray and bugs.",
              },
              {
                title: "Coolant / Antifreeze",
                icon: "thermometer",
                description:
                  "Your cooling system works hard in summer too. Check that coolant is at the proper level and the mixture is correct. Low coolant heading into summer is a recipe for overheating.",
              },
              {
                title: "Engine Oil",
                icon: "oil",
                description:
                  "If you are near your next oil change interval, do it now. Winter driving with frequent cold starts is harder on oil than summer highway driving.",
              },
              {
                title: "Brake Fluid",
                icon: "brake",
                description:
                  "Brake fluid absorbs moisture over time. If it has been more than two years since a brake fluid flush, spring is a good time to have it tested.",
              },
            ].map((fluid) => (
              <div
                key={fluid.title}
                className="card-gradient rounded-2xl p-6 group hover:border-[#22d65f]/50 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-[#22d65f]/10 flex items-center justify-center mb-4 group-hover:bg-[#22d65f]/20 transition-colors">
                  <svg className="w-5 h-5 text-[#22d65f]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-sm font-bold text-white mb-2">
                  {fluid.title}
                </h3>
                <p className="text-xs text-[#999] leading-relaxed">
                  {fluid.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 7: Cost Comparison */}
        <section id="cost-comparison" className="mt-16 scroll-mt-24">
          <SectionHeading number="07" highlight="Cost Guide">
            Spring Maintenance{" "}
          </SectionHeading>
          <p className="mt-6 text-[#ccc] leading-relaxed text-base">
            Here is a realistic breakdown of what spring maintenance costs in
            the Stony Plain and Spruce Grove area. These are typical prices for
            2026 based on what local shops charge, including Accurate Autoworks.
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
                    Priority
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
            of 2026. Actual costs may vary based on vehicle size and condition.
          </p>
        </section>

        {/* Section 8: Checklist */}
        <section id="checklist" className="mt-16 scroll-mt-24">
          <SectionHeading number="08" highlight="Checklist">
            Your Spring Vehicle{" "}
          </SectionHeading>
          <p className="mt-6 text-[#ccc] leading-relaxed text-base">
            Save this checklist and work through it over the next few weeks.
            You do not have to do everything at once, but the tire changeover
            and undercarriage wash should be first priorities.
          </p>

          <div className="mt-8 space-y-6">
            {[
              {
                week: "Week 1",
                subtitle: "The Essentials",
                items: [
                  "Book and complete seasonal tire changeover",
                  "Get an undercarriage wash to remove road salt",
                  "Check tread depth on summer/all-season tires",
                ],
                accent: "#22d65f",
              },
              {
                week: "Week 2",
                subtitle: "Clean and Protect",
                items: [
                  "Book a full spring detail (interior + exterior)",
                  "Inspect window tint for bubbling, peeling, or fading",
                  "Replace wiper blades",
                  "Switch to summer washer fluid",
                ],
                accent: "#22d65f",
              },
              {
                week: "Week 3",
                subtitle: "Inspect and Upgrade",
                items: [
                  "Check for paint chips and consider PPF for high-impact areas",
                  "Consider ceramic coating if your paint is unprotected",
                  "Check coolant, oil, and brake fluid levels",
                  "Inspect for rust forming on rocker panels and wheel arches",
                ],
                accent: "#22d65f",
              },
            ].map((week, wi) => (
              <div
                key={week.week}
                className="relative rounded-2xl overflow-hidden"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#22d65f] to-[#22d65f]/20" />
                <div className="card-gradient rounded-2xl border-l-0 pl-6 pr-6 py-6 sm:pl-8 sm:pr-8 sm:py-8 ml-1">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-[#22d65f] text-black text-xs font-black">
                      {wi + 1}
                    </span>
                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-widest text-white">
                        {week.week}
                      </h3>
                      <p className="text-xs text-[#22d65f] uppercase tracking-wider">
                        {week.subtitle}
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {week.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm text-[#ccc]"
                      >
                        <span className="flex-shrink-0 w-5 h-5 rounded border border-[#333] bg-[#1a1a1a] flex items-center justify-center mt-0.5 hover:border-[#22d65f] transition-colors">
                          <span className="sr-only">Checkbox</span>
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
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
              Now Booking
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight">
              Get Your Ride{" "}
              <span className="text-[#22d65f] glow-accent">Spring Ready</span>
            </h2>
            <p className="mt-4 text-[#999] max-w-xl mx-auto leading-relaxed">
              Tire changeover, spring detail, tint, PPF — Accurate Autoworks
              handles it all under one roof in Stony Plain. Serving Spruce Grove,
              Parkland County, Acheson, and Edmonton West.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Book Your Service
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
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016A3.001 3.001 0 0021 9.349m-18 0A2.989 2.989 0 004.5 9c.956 0 1.813-.44 2.37-1.13M21 9.349A2.989 2.989 0 0019.5 9c-.956 0-1.813-.44-2.37-1.13m0 0A3 3 0 0015 6H9a3 3 0 00-2.13.87m10.26 0A3 3 0 0115 6H9" />
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
                  href="/contact"
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
              "The Complete Spring Vehicle Maintenance Guide for Stony Plain & Spruce Grove Drivers",
            description:
              "Complete spring car maintenance checklist for Alberta drivers. Tire changeover, detailing, paint protection, tint inspection, and more from Accurate Autoworks.",
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
                "https://www.accurateautoworks.ca/blog/spring-vehicle-maintenance-guide-stony-plain",
            },
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
