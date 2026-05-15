import Link from "next/link";
import type { Metadata } from "next";
import { BlogPostClient } from "./client";

export const metadata: Metadata = {
  title: "Truck & SUV Detailing Stony Plain | Accurate Autoworks",
  description:
    "Truck and SUV detailing in Stony Plain & Spruce Grove: what's different, 2026 Alberta pricing, packages, and what to expect at Accurate Autoworks.",
  alternates: {
    canonical:
      "https://www.accurateautoworks.ca/blog/truck-suv-detailing-stony-plain/",
  },
  openGraph: {
    title: "Truck & SUV Detailing Stony Plain | Accurate Autoworks",
    description:
      "Trucks and SUVs take more abuse, cover more surface area, and accumulate grime in places sedans never reach. Real 2026 pricing and what the detail covers.",
    type: "article",
    url: "https://www.accurateautoworks.ca/blog/truck-suv-detailing-stony-plain/",
    locale: "en_CA",
    siteName: "Accurate Autoworks",
  },
};

const FAQ_DATA = [
  {
    q: "Is truck and SUV detailing more expensive than a sedan?",
    a: "Yes, and the premium is justified. A full-size pickup or SUV has significantly more exterior surface area, a larger interior cabin, harder-to-access wheel wells, and — in the case of trucks — a cargo bed that takes considerable time to clean properly. At Accurate Autoworks in Stony Plain, truck and SUV details typically run $50 to $150 more than the equivalent sedan package depending on size and condition. Call 780.818.9904 and we will give you an exact quote based on your specific vehicle.",
  },
  {
    q: "What's included in a truck interior detail?",
    a: "A full interior truck detail at Accurate Autoworks covers every surface in the cab: deep vacuuming of all seats and carpet, hot-water extraction or steam shampooing of floor mats and carpet, leather cleaning and conditioning or cloth upholstery treatment, dashboard and console cleaning with UV-protective dressing, door panel and jamb cleaning, air vent clearing, and interior glass cleaning. Extended cabs and crew cabs get full attention in the rear seating area, including the fold-flat rear seat sections that accumulate pet hair, sand, and debris. If your truck has a rear seat organizer, tool bag, or floor-mounted tool box, those come out and the area underneath is cleaned too.",
  },
  {
    q: "Do you detail truck beds and cargo areas?",
    a: "Yes. A truck bed or cargo area is one of the most neglected parts of a truck, and it takes real time to clean properly. At Accurate Autoworks, bed detail includes removing all loose debris, pressure rinsing, scrubbing the bed liner (spray-in or drop-in), cleaning the tailgate interior, and treating the liner with an appropriate protectant. Spray-in liners like Line-X or Raptor get a specific treatment that cleans out the textured surface without damaging it. Aluminum or painted factory beds are washed and protected. If you want the bed looking its best, let us know when you book.",
  },
  {
    q: "Can you detail a work truck that's seriously filthy?",
    a: "Absolutely — work trucks are our bread and butter at Accurate Autoworks. A truck that has been hauling equipment, driving gravel roads through Parkland County, and sitting in the Acheson industrial corridor for months is exactly the kind of vehicle that benefits most from a proper detail. We assess condition before we quote so you know what to expect, and we do not charge surprise fees. Heavy contamination, caked mud, or industrial fallout simply means we allocate more time. Call 780.818.9904 and describe your truck's condition — we will tell you exactly what it needs.",
  },
  {
    q: "How long does a full truck or SUV detail take?",
    a: "Plan for 5 to 8 hours for a full interior and exterior detail on a full-size truck or large SUV in average condition. Vehicles that are heavily soiled, have significant pet hair saturation, or require machine polishing will take longer. We recommend dropping your vehicle off first thing in the morning. Smaller half-tons and mid-size SUVs in good condition can often be completed in 4 to 6 hours. At Accurate Autoworks, we give you a realistic time estimate when you book rather than telling you what you want to hear and having you wait.",
  },
  {
    q: "How often should I detail my truck in Alberta?",
    a: "For Alberta truck owners, twice a year is the minimum we recommend: a thorough spring detail after road salt season (May or June) and a fall detail before winter hits (September or October). The spring detail removes the six months of salt, sand, and road grime that has worked into every seam and surface. The fall detail applies fresh protection before another winter begins. Trucks driven regularly on Parkland County gravel roads, in the Acheson industrial area, or used for hauling benefit from quarterly attention. Accurate Autoworks will tell you honestly what your truck needs when you bring it in.",
  },
  {
    q: "Can you detail a lifted truck or one with aftermarket accessories?",
    a: "Yes. Lifted trucks, trucks with leveling kits, aftermarket bumpers, running boards, side steps, and bed racks are all vehicles we work with regularly at Accurate Autoworks. Lift kits change the clearance under the vehicle and can make wheel well access trickier — but that is our problem, not yours. Aftermarket accessories sometimes require working around them or removing removable items before the detail begins. When you call 780.818.9904, mention any significant aftermarket work so we can plan the appointment properly.",
  },
  {
    q: "Is detailing worth it for an older or high-mileage truck?",
    a: "Yes — often more so than for a newer vehicle. An older truck that has been properly maintained and detailed will command a better resale price, feel better to drive daily, and show less accumulated wear on its interior and exterior surfaces. A detail is not about making a truck look new; it is about restoring it to the best condition it can be in right now and protecting it from further degradation. At Accurate Autoworks, we are honest about what a detail can and cannot achieve on an older vehicle — we will tell you upfront if something is beyond the scope of a detail.",
  },
  {
    q: "Can I bundle truck detailing with window tint or PPF at Accurate Autoworks?",
    a: "Absolutely, and bundling is actually the smart way to book. A detail before window tint installation ensures the glass is perfectly clean for a flawless tint bond. A full exterior detail and paint decontamination before paint protection film or a vinyl wrap is not optional — it is required for proper adhesion. Doing them together saves you a trip and often saves on labour when services are booked on the same visit. Call 780.818.9904 or visit our detailing page to ask about combined service pricing.",
  },
  {
    q: "Do you use products safe for spray-in bed liners and rubber running boards?",
    a: "Yes. Different surfaces require different products, and Accurate Autoworks uses surface-appropriate cleaners and protectants throughout the detail process. Spray-in liners (Line-X, Rhino, etc.) get a dedicated liner cleaner and protectant that cleans the textured surface without degrading the liner compound. Rubber running boards and mud flaps are treated with a non-slippery protectant that conditions the rubber without leaving a greasy film. Chrome, brushed aluminum, and powder-coated accessories each get matched treatment. We do not use a one-product-for-everything approach.",
  },
];

const COST_DATA = [
  { service: "Exterior detail — half-ton truck", cost: "$225 – $325", priority: "Popular", level: "recommended" },
  { service: "Exterior detail — 3/4 ton or dually", cost: "$275 – $375", priority: "Popular", level: "recommended" },
  { service: "Interior detail — standard/crew cab", cost: "$175 – $275", priority: "Popular", level: "recommended" },
  { service: "Interior detail — extended/super crew cab", cost: "$225 – $325", priority: "Larger Format", level: "recommended" },
  { service: "Full detail combo — half-ton truck", cost: "$350 – $500", priority: "Best Value", level: "essential" },
  { service: "Full detail combo — full-size SUV / 3-row", cost: "$375 – $550", priority: "Best Value", level: "essential" },
  { service: "Premium detail + machine polish — truck/SUV", cost: "$475 – $750", priority: "Pre-Sale / Pre-Ceramic", level: "recommended" },
  { service: "Truck bed detail (add-on)", cost: "$75 – $150", priority: "Add-on", level: "optional" },
];

const TRUCK_DETAIL_AREAS = [
  {
    area: "Extended / Crew Cab Rear Seating",
    concern: "Cramped floor access, fold-seat crevices, rear seat organizer areas",
    addedTime: "30 – 60 min",
    level: "significant",
  },
  {
    area: "Cargo Bed (pickups)",
    concern: "Mud, rust scale, spray-in liner texture, tailgate tracks",
    addedTime: "45 – 90 min",
    level: "significant",
  },
  {
    area: "Running Boards & Side Steps",
    concern: "Salt and mud accumulation, rubber or aluminum surface treatment",
    addedTime: "15 – 30 min",
    level: "moderate",
  },
  {
    area: "Wheel Wells & Mud Flaps",
    concern: "Packed mud, spray-in liner, road debris and iron fallout buildup",
    addedTime: "20 – 40 min",
    level: "moderate",
  },
  {
    area: "Roof Panel (higher profile)",
    concern: "More surface area, requires ladder or extended reach, road film",
    addedTime: "20 – 30 min",
    level: "moderate",
  },
  {
    area: "3rd Row Seating (SUVs)",
    concern: "Additional carpet, seat surfaces, and cargo area behind 3rd row",
    addedTime: "45 – 60 min",
    level: "significant",
  },
  {
    area: "Tow Hitch & Receiver",
    concern: "Grease, rust, and grime accumulation on hitch receiver and ball",
    addedTime: "10 – 20 min",
    level: "minor",
  },
];

export default function TruckSuvDetailingStonyPlain() {
  const publishDate = "2026-05-15";
  const modifiedDate = "2026-05-15";

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
            Truck &amp; SUV Detailing Guide
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black uppercase tracking-tight leading-[1.05]">
            Truck &amp; SUV Detailing in{" "}
            <span className="text-[#22d65f] glow-accent">Stony Plain</span>
            : What&apos;s Different &amp; What It Costs
          </h1>

          <p className="mt-8 text-lg sm:text-xl text-[#999] max-w-2xl mx-auto leading-relaxed">
            Trucks and SUVs are not just bigger sedans — they accumulate grime
            in places a standard detail never reaches. Here is exactly what
            professional truck detailing covers, what it costs in 2026, and why
            Alberta conditions make it non-negotiable.
          </p>

          <div className="mt-6 flex items-center justify-center gap-6 text-xs text-[#666] uppercase tracking-wider">
            <div className="flex items-center gap-2">
              <svg className="w-3.5 h-3.5 text-[#22d65f]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <time dateTime={publishDate}>May 15, 2026</time>
            </div>
            <span className="w-1 h-1 rounded-full bg-[#333]" />
            <div className="flex items-center gap-2">
              <svg className="w-3.5 h-3.5 text-[#22d65f]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>14 min read</span>
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
            If you drive a truck or SUV in the Stony Plain, Spruce Grove, or
            Parkland County area, you already know what your vehicle goes
            through. Six months of road salt working into every wheel well and
            door seam. Gravel roads throwing aggregate at the lower panels and
            bed. Mud tracked into the cab from job sites, acreages, and the
            network of unpaved county roads that connect this part of Alberta.
            Industrial fallout from the Acheson corridor settling on every
            painted surface. A family full-size SUV hauling kids, pets, and
            sports gear — the cargo area becomes a write-off within a season.
          </p>
          <p className="mt-4 text-[#ccc] leading-relaxed text-base sm:text-lg">
            The problem with treating truck and SUV detailing the same as sedan
            detailing is that it misses most of what actually needs attention.
            A truck is a completely different vehicle in terms of surface area,
            access difficulty, and the specific ways it gets dirty. This guide
            covers everything: what makes truck and SUV detailing different,
            what the full process covers, what it realistically costs at a
            quality shop in this area in 2026, and what the experience looks
            like when you bring your vehicle to{" "}
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
                { href: "#why-different", label: "Why Truck & SUV Detailing Is Different" },
                { href: "#truck-areas", label: "Truck-Specific Detail Areas" },
                { href: "#cost-guide", label: "2026 Pricing: Trucks & SUVs" },
                { href: "#work-trucks", label: "Work Trucks & Heavy Contamination" },
                { href: "#alberta-seasons", label: "Alberta Seasons & Your Truck" },
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

        {/* Section 1: Why Different */}
        <section id="why-different" className="mt-16 scroll-mt-24">
          <SectionHeading number="01" highlight="Different">
            Why Truck &amp; SUV Detailing Is{" "}
          </SectionHeading>
          <p className="mt-6 text-[#ccc] leading-relaxed text-base">
            Most detailing price lists treat vehicle size as a simple linear
            premium — add $50 for trucks, move on. The reality is more
            involved. Trucks and SUVs differ from sedans in five fundamental
            ways that affect every stage of the detailing process.
          </p>

          <div className="mt-8 space-y-5">
            <div className="card-gradient rounded-2xl p-6 sm:p-8">
              <h3 className="text-sm font-bold uppercase tracking-wide text-white mb-3">
                1. Substantially More Surface Area
              </h3>
              <p className="text-sm text-[#999] leading-relaxed">
                A full-size pickup like an F-150 or Ram 1500 has roughly 30 to
                40% more exterior paintable surface than a mid-size sedan. A
                full-size SUV like a Chevy Tahoe or Ford Expedition is even
                larger. Every additional square foot is more paint to wash,
                clay-bar, polish, and protect. The roof alone on a full-size
                truck or SUV is larger than the entire hood of a small car.
                That translates directly into time, and time is what
                professional detailing costs.
              </p>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-[#22d65f]/30 bg-gradient-to-br from-[#22d65f]/[0.06] to-[#141414]">
              <div className="absolute top-0 right-0 px-3 py-1 bg-[#22d65f] text-black text-[10px] font-bold uppercase tracking-widest rounded-bl-lg">
                Key Difference
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="text-sm font-bold uppercase tracking-wide text-white mb-3">
                  2. The Cargo Bed — A Unique, Heavily Abused Surface
                </h3>
                <p className="text-sm text-[#999] leading-relaxed">
                  No sedan equivalent exists for a pickup truck bed. The cargo
                  bed accumulates mud, rust scale, organic debris, metal
                  shavings, oil, and whatever else your truck has been hauling.
                  Spray-in liners like Line-X and Raptor are excellent for
                  protection but their textured surface is a trap for fine
                  particles that require dedicated cleaning techniques. Factory
                  painted or aluminum beds need surface decontamination and
                  protection just like the rest of the vehicle. A proper truck
                  bed detail is a significant, time-consuming job on its own —
                  not a quick rinse.
                </p>
              </div>
            </div>

            <div className="card-gradient rounded-2xl p-6 sm:p-8">
              <h3 className="text-sm font-bold uppercase tracking-wide text-white mb-3">
                3. Wheel Wells Accumulate Far More Contamination
              </h3>
              <p className="text-sm text-[#999] leading-relaxed">
                Truck and SUV wheel wells are physically larger, often
                taller-clearanced (especially on lifted vehicles), and
                directly exposed to spray from larger tires moving faster
                through more water, mud, and road chemicals. In Alberta, where
                sand and salt are on the roads from October through April, the
                wheel wells of a truck driven daily become packed with a layer
                of gritty salt-contaminated slurry that hardens to a crust by
                spring. Left untreated, this is one of the primary rust
                initiation zones on northern-climate vehicles. Clearing it
                properly requires high-pressure rinsing, brushing, and in
                many cases chemical decontamination.
              </p>
            </div>

            <div className="card-gradient rounded-2xl p-6 sm:p-8">
              <h3 className="text-sm font-bold uppercase tracking-wide text-white mb-3">
                4. Interior Access Is Harder, Especially in Multi-Row Cabs
              </h3>
              <p className="text-sm text-[#999] leading-relaxed">
                An extended cab or crew cab truck has rear seating areas that
                are awkward to access — the fold-down rear seats, the crevices
                behind the front seats, the narrow floor space — and they
                accumulate an enormous amount of grime because they are hard
                to clean casually. Three-row SUVs compound this further: the
                third row and the cargo area behind it are essentially a
                separate interior cleaning job. Anyone who has tried to vacuum
                the rear floor of a crew cab or pull pet hair out of third-row
                upholstery knows what we mean.
              </p>
            </div>

            <div className="card-gradient rounded-2xl p-6 sm:p-8">
              <h3 className="text-sm font-bold uppercase tracking-wide text-white mb-3">
                5. Aftermarket Accessories Create Additional Cleaning Zones
              </h3>
              <p className="text-sm text-[#999] leading-relaxed">
                Most trucks and many SUVs in the Stony Plain and Spruce Grove
                area have aftermarket additions: running boards, side steps,
                mud flaps, tow hitches, tonneau covers, roof racks, bed racks,
                or external tool boxes. Each of these creates additional
                surfaces that collect dirt, salt, and road grime in the gaps
                and mounting points where the accessory meets the vehicle.
                Properly cleaning around and under these accessories takes
                time and the right tools. Skipping them leaves the detail
                incomplete.
              </p>
            </div>
          </div>

          <Callout variant="info">
            The{" "}
            <a
              href="https://the-ida.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#22d65f] hover:underline"
            >
              International Detailing Association
            </a>{" "}
            recognizes vehicle class and size as primary factors in detailing
            time and complexity — a recognition that professional detailing is
            not a commodity service, but a skilled trade that adapts to each
            vehicle. At{" "}
            <Link href="/detailing/" className="text-[#22d65f] hover:underline">
              Accurate Autoworks
            </Link>
            , we assess your truck or SUV before quoting rather than applying
            a flat rate that may underdeliver.
          </Callout>
        </section>

        {/* Section 2: Truck-Specific Areas */}
        <section id="truck-areas" className="mt-16 scroll-mt-24">
          <SectionHeading number="02" highlight="Areas">
            Truck-Specific Detail{" "}
          </SectionHeading>
          <p className="mt-6 text-[#ccc] leading-relaxed text-base">
            Below is a breakdown of the truck- and SUV-specific areas that add
            time and complexity to a professional detail — areas that are
            either absent on sedans or dramatically more involved on trucks
            and SUVs. These are not optional extras; they are the parts of the
            job that distinguish a proper truck detail from a standard wash.
          </p>

          {/* Desktop table */}
          <div className="mt-8 hidden sm:block rounded-2xl overflow-hidden border border-[#2a2a2a]">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#22d65f]/[0.06]">
                  {["Area", "What Accumulates", "Added Time", "Severity"].map((h) => (
                    <th key={h} className="text-left py-4 px-5 text-xs font-bold uppercase tracking-widest text-[#22d65f]">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-[#ccc]">
                {TRUCK_DETAIL_AREAS.map((row, i) => (
                  <tr
                    key={row.area}
                    className={`border-t border-[#1e1e1e] transition-colors hover:bg-[#22d65f]/[0.03] ${
                      i % 2 === 0 ? "bg-[#141414]" : "bg-[#0f0f0f]"
                    }`}
                  >
                    <td className="py-4 px-5 font-bold text-white">{row.area}</td>
                    <td className="py-4 px-5 text-xs text-[#999]">{row.concern}</td>
                    <td className="py-4 px-5 font-mono font-bold text-[#22d65f]">{row.addedTime}</td>
                    <td className="py-4 px-5">
                      <SeverityBadge level={row.level} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="mt-8 sm:hidden space-y-4">
            {TRUCK_DETAIL_AREAS.map((row) => (
              <div key={row.area} className="card-gradient rounded-2xl p-5">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <span className="font-bold text-white text-sm">{row.area}</span>
                  <SeverityBadge level={row.level} />
                </div>
                <p className="text-xs text-[#999] mb-2">{row.concern}</p>
                <p className="text-xs text-[#22d65f] font-mono font-bold">
                  +{row.addedTime}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-[#ccc] leading-relaxed text-base">
            When you add up the time for just the truck-specific areas, you are
            looking at 3 to 5 additional hours over a comparable sedan detail —
            and that is before accounting for the larger exterior surface area
            and bigger interior cabin. This is why quoting a truck detail over
            the phone without seeing the vehicle is imprecise: a clean daily
            driver half-ton and a work truck used on acreages all winter are
            both &quot;trucks&quot; but they represent completely different scopes of
            work.
          </p>

          <Callout variant="tip">
            <strong className="text-white">Before you book:</strong> The
            easiest way to get an accurate quote is to call{" "}
            <a href="tel:7808189904" className="text-[#22d65f] hover:underline font-bold">
              780.818.9904
            </a>{" "}
            and describe your truck or SUV, its current condition, and what you
            need done. Accurate Autoworks will give you a straightforward
            estimate — no pressure, no inflated quotes to pad a margin.
          </Callout>
        </section>

        {/* Section 3: Cost Guide */}
        <section id="cost-guide" className="mt-16 scroll-mt-24">
          <SectionHeading number="03" highlight="Trucks & SUVs (2026)">
            Pricing:{" "}
          </SectionHeading>
          <p className="mt-6 text-[#ccc] leading-relaxed text-base">
            Here is a realistic breakdown of what professional truck and SUV
            detailing costs at a quality shop in the Stony Plain and Spruce
            Grove area in 2026. These reflect proper professional detailing
            with warranted products — not a mobile service operating out of a
            car wash parking lot.
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
            of 2026. Final pricing depends on vehicle size, current condition,
            and services selected. Call 780.818.9904 for an exact quote on your
            specific truck or SUV.
          </p>

          <div className="mt-8 p-6 sm:p-8 card-gradient rounded-2xl">
            <h3 className="text-sm font-bold text-white uppercase tracking-wide mb-4">
              What Pushes the Price Higher
            </h3>
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              {[
                {
                  factor: "Vehicle condition",
                  detail: "A truck not detailed in 18 months, or one used on job sites daily, will take significantly more time than a well-maintained vehicle. We assess honestly before quoting.",
                },
                {
                  factor: "Lift height",
                  detail: "Lifted trucks with significant clearance require additional time to properly access wheel wells, running boards, and the undercarriage frame.",
                },
                {
                  factor: "Bed liner type",
                  detail: "Spray-in liners (Line-X, Raptor, Herculiner) have textured surfaces that trap fine particles. A proper liner cleaning takes 30 to 60 minutes beyond a standard bed rinse.",
                },
                {
                  factor: "Pet hair",
                  detail: "Heavy pet hair saturation in upholstery and carpet significantly extends interior cleaning time. We use specialized extraction tools but this is time-intensive work.",
                },
              ].map((item) => (
                <div key={item.factor}>
                  <p className="font-bold text-white text-xs uppercase tracking-wide mb-1">{item.factor}</p>
                  <p className="text-xs text-[#999] leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <Callout variant="tip">
            <strong className="text-white">Bundling saves money:</strong> If
            your truck is coming in for a detail and you have been considering{" "}
            <Link href="/tinting/" className="text-[#22d65f] hover:underline">
              window tinting
            </Link>{" "}
            or{" "}
            <Link href="/ppf/" className="text-[#22d65f] hover:underline">
              paint protection film on the front end
            </Link>
            , booking them together often saves on labour and eliminates a
            second drop-off trip. Ask about combined service pricing when you
            call Accurate Autoworks.
          </Callout>
        </section>

        {/* Section 4: Work Trucks */}
        <section id="work-trucks" className="mt-16 scroll-mt-24">
          <SectionHeading number="04" highlight="Heavy Contamination">
            Work Trucks &amp;{" "}
          </SectionHeading>
          <p className="mt-6 text-[#ccc] leading-relaxed text-base">
            A significant portion of the trucks that come into Accurate
            Autoworks are work trucks — vehicles used daily in construction,
            trades, oilfield support, agriculture, and the Acheson industrial
            corridor. These trucks operate in conditions that accumulate
            contamination at an accelerated rate, and they require a different
            approach than a weekend-driver half-ton.
          </p>

          <div className="mt-8 space-y-5">
            <div className="card-gradient rounded-2xl p-6 sm:p-8">
              <h3 className="text-sm font-bold uppercase tracking-wide text-white mb-3">
                Industrial Fallout and Chemical Contamination
              </h3>
              <p className="text-sm text-[#999] leading-relaxed">
                Work trucks operating in industrial areas — and particularly
                in the Acheson corridor west of Edmonton — accumulate ferrous
                fallout from manufacturing, welding operations, and heavy
                transport. These microscopic iron particles embed into the
                clear coat and, if left long enough, initiate rust blooms in
                the paint that no amount of washing will remove. Chemical
                decontamination using an iron fallout remover is required to
                address this — it is not optional for industrial-area vehicles,
                it is mandatory. At Accurate Autoworks, this step is included
                in every exterior detail, not sold as an add-on.
              </p>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-[#22d65f]/30 bg-gradient-to-br from-[#22d65f]/[0.06] to-[#141414]">
              <div className="absolute top-0 right-0 px-3 py-1 bg-[#22d65f] text-black text-[10px] font-bold uppercase tracking-widest rounded-bl-lg">
                Work Truck Specific
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="text-sm font-bold uppercase tracking-wide text-white mb-3">
                  Construction Site Mud and Calcium Chloride
                </h3>
                <p className="text-sm text-[#999] leading-relaxed">
                  Alberta construction sites use calcium chloride as a dust
                  suppressant on access roads and unpaved areas — and it is
                  significantly more corrosive than road salt. Trucks that
                  work construction sites in Parkland County, Spruce Grove
                  expansion areas, or any active development zone are regularly
                  exposed to calcium chloride spray that coats the undercarriage,
                  wheel wells, and lower body panels. Allowing this to sit
                  accelerates corrosion faster than road salt alone. A detail
                  that includes a proper undercarriage rinse and lower-panel
                  decontamination is not a luxury for these trucks; it is
                  essential maintenance.
                </p>
              </div>
            </div>

            <div className="card-gradient rounded-2xl p-6 sm:p-8">
              <h3 className="text-sm font-bold uppercase tracking-wide text-white mb-3">
                What a Work Truck Detail Actually Involves
              </h3>
              <p className="text-sm text-[#999] leading-relaxed">
                When a work truck comes into Accurate Autoworks, the assessment
                is more thorough than for a daily driver. We look at the degree
                of embedded contamination in the paint, the condition of the
                bed and liner, the state of any aftermarket accessories, the
                interior condition (tools, equipment residue, food waste,
                cigarette odour), and the undercarriage. We give you an honest
                quote that reflects the actual scope of work. If the truck
                needs an ozone treatment for odour, we say so. If the cab
                carpet is beyond restoration by shampooing alone and needs
                extraction plus enzyme treatment, we tell you. No surprises
                when you pick it up.
              </p>
            </div>

            <div className="card-gradient rounded-2xl p-6 sm:p-8">
              <h3 className="text-sm font-bold uppercase tracking-wide text-white mb-3">
                Fleet and Commercial Vehicles
              </h3>
              <p className="text-sm text-[#999] leading-relaxed">
                If you run a fleet of trucks or vans in the Stony Plain,
                Spruce Grove, or Acheson area, Accurate Autoworks offers fleet
                detailing on an ongoing basis. Regular fleet detailing
                maintains the professional appearance of your vehicles, extends
                the service life of interior surfaces, and supports vehicle
                value at trade-in or resale. We also handle{" "}
                <Link href="/print/" className="text-[#22d65f] hover:underline">
                  commercial fleet wraps and vehicle graphics
                </Link>{" "}
                — if your trucks need branding and maintenance in one shop,
                that is exactly what we offer. Call 780.818.9904 to discuss
                a fleet servicing schedule.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Alberta Seasons */}
        <section id="alberta-seasons" className="mt-16 scroll-mt-24">
          <SectionHeading number="05" highlight="Your Truck">
            Alberta Seasons &amp;{" "}
          </SectionHeading>
          <p className="mt-6 text-[#ccc] leading-relaxed text-base">
            Alberta&apos;s seasonal extremes are hard on every vehicle, but trucks
            and SUVs bear the brunt disproportionately because of how they are
            used. Here is what each season does to your truck and how a detail
            fits into the maintenance cycle.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            {[
              {
                season: "Spring (May – June)",
                icon: "sun",
                impact:
                  "Six months of road salt, sand, and grit has worked into every seam, panel gap, wheel well, and undercarriage component. The cab floor shows the winter — salt crystals, mud, sand ground into carpet fibres. This is the most important detail of the year for protecting your truck&apos;s long-term condition.",
                action: "Full detail + undercarriage rinse + iron decontamination",
              },
              {
                season: "Summer (July – August)",
                icon: "heat",
                impact:
                  "Bug splatter hardens on the front bumper, hood, and mirrors within days in the heat. Alberta UV intensity fades unprotected interior plastics and dries out leather rapidly. Gravel road season means rock chips accumulating on front surfaces. A mid-summer maintenance detail protects your investment through the peak abuse season.",
                action: "Exterior decontamination + UV-protective interior dressing",
              },
              {
                season: "Fall (September – October)",
                icon: "leaf",
                impact:
                  "Before the salt season begins is the second most important detail timing. A fall detail removes summer bug debris and gravel road contamination, conditions leather before the dry winter air attacks it, and applies a fresh protective coat to the paint before six months of road salt exposure begins.",
                action: "Full detail + paint sealant application",
              },
              {
                season: "Winter (November – April)",
                icon: "snow",
                impact:
                  "Salt and sand are on the roads constantly. What you can do is minimize accumulation: regular cold-water undercarriage rinses at a self-serve bay flush out salt before it can work deeper. A properly detailed vehicle with wax or sealant protection holds up significantly better through winter than unprotected paint.",
                action: "Monthly undercarriage rinse + quick exterior wash",
              },
            ].map((item) => (
              <div
                key={item.season}
                className="card-gradient rounded-2xl p-6 group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#22d65f]/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-[#22d65f]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      {item.icon === "sun" && (
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l.707.707M6.343 6.343l.707.707M12 7a5 5 0 100 10 5 5 0 000-10z" />
                      )}
                      {item.icon === "heat" && (
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                      )}
                      {item.icon === "leaf" && (
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      )}
                      {item.icon === "snow" && (
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                      )}
                    </svg>
                  </div>
                  <h3 className="text-sm font-bold text-white">{item.season}</h3>
                </div>
                <p className="text-xs text-[#999] leading-relaxed mb-3">
                  {item.impact}
                </p>
                <div className="mt-3 pt-3 border-t border-[#2a2a2a]">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#22d65f] mb-1">
                    Recommended Action
                  </p>
                  <p className="text-xs text-[#666]">{item.action}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-[#ccc] leading-relaxed text-base">
            The{" "}
            <a
              href="https://www.alberta.ca/roads-and-traffic"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#22d65f] hover:underline"
            >
              Alberta Transportation road maintenance program
            </a>{" "}
            applies road salt from approximately October to April across the
            province&apos;s highway network. For Parkland County and Stony Plain
            area roads, municipal maintenance adds additional sand and salt
            applications. Combined, this represents six months of continuous
            salt exposure per year — more than enough to cause significant
            corrosion on unprotected vehicles over two or three seasons.
          </p>

          <Callout variant="warning">
            <strong className="text-white">Salt damage is cumulative and silent.</strong>{" "}
            You will not see rust forming under your truck while it is
            happening. By the time rust is visible on body panels or the
            frame, the process is well advanced. Regular detailing that
            removes salt accumulation — combined with{" "}
            <Link href="/ppf/" className="text-[#22d65f] hover:underline">
              paint protection film on high-impact areas
            </Link>{" "}
            — is the best defence for an Alberta truck you plan to keep.
          </Callout>
        </section>

        {/* Section 6: What to Expect */}
        <section id="what-to-expect" className="mt-16 scroll-mt-24">
          <SectionHeading number="06" highlight="at Accurate Autoworks">
            What to Expect{" "}
          </SectionHeading>
          <p className="mt-6 text-[#ccc] leading-relaxed text-base">
            Here is exactly what the process looks like when you bring your
            truck or SUV to Accurate Autoworks on Boulder Boulevard in Stony
            Plain for a professional detail. We handle trucks of every size,
            condition, and configuration.
          </p>

          <div className="mt-8 space-y-4">
            {[
              {
                step: "01",
                title: "Vehicle Assessment & Honest Quote",
                description:
                  "Before we touch your truck, we walk around it with you. We check the paint condition, interior severity, bed and liner state, and any specific concerns you have. If there is something the detail cannot fix — a deep rock chip that will still show after polishing, a stain that has been there long enough to become permanent — we tell you before we start. You get a fixed quote. No 'we found more once we started' surprises when you come to pick it up.",
              },
              {
                step: "02",
                title: "Interior Extraction — Starting Deep",
                description:
                  "We start inside with the worst first. Mats and removable floor liners come out and are treated separately. Seat surfaces are vacuumed thoroughly — cloth with a brush attachment to pull up embedded fibres, leather with a soft head to avoid damage. Carpet and floor mat shampooing uses hot-water extraction: it injects cleaning solution and extracts the dirty water simultaneously, pulling out what dry vacuuming leaves behind. Door jambs, cup holders, air vents, seat track rails, and the tailgate of SUVs all get attention. Interior glass is cleaned last to prevent re-contamination.",
              },
              {
                step: "03",
                title: "Exterior Pre-Treatment and Wheel Work",
                description:
                  "Exterior work starts with the dirtiest areas: wheels and wheel wells. Wheel wells on trucks accumulate packed material that requires dedicated high-pressure rinsing and brushing before the rest of the vehicle is touched. Wheels are treated with a wheel-appropriate cleaner based on surface type — powder-coated, chrome, polished aluminum, and painted wheels each require different products. A foam pre-soak is applied to the full exterior to soften bonded contamination before any physical contact.",
              },
              {
                step: "04",
                title: "Full Two-Stage Paint Decontamination",
                description:
                  "After the pre-soak rinse, the vehicle receives two-stage decontamination: first, chemical iron fallout removal dissolves embedded ferrous particles from the clear coat — especially important for trucks that work near industrial areas or have spent time in the Acheson corridor. Second, a full clay bar treatment removes any remaining bonded surface contamination. After clay bar, the paint should feel completely smooth under your palm — that texture is the standard we are working toward before any wax or sealant goes on.",
              },
              {
                step: "05",
                title: "Bed, Running Boards & Accessories",
                description:
                  "If your truck has a cargo bed, it gets proper attention at this stage: liner cleaning with appropriate products, tailgate and side rail cleaning, and a liner protectant application. Running boards, side steps, and mud flaps are cleaned and dressed. Tow hitches and receivers are degreased and treated. Any removable accessories are cleaned in place or removed as needed.",
              },
              {
                step: "06",
                title: "Protection Application & Final Inspection",
                description:
                  "The final exterior step is protection: hand wax, synthetic paint sealant, or ceramic coating depending on your package and goals. Premium packages that include machine polishing run this step before protection application. After protection goes on, every vehicle gets a final inspection before we call you for pickup. We check for missed spots, verify glass is streak-free inside and out, confirm the interior is dry, and review anything we flagged at the initial assessment.",
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
            <strong className="text-white">Protect it after you clean it:</strong>{" "}
            A freshly detailed truck is the ideal time to add protection.{" "}
            <Link href="/ppf/" className="text-[#22d65f] hover:underline">
              Paint protection film on the front bumper, hood, and mirrors
            </Link>{" "}
            stops rock chips before they start on the next gravel road run.{" "}
            <Link href="/wraps/" className="text-[#22d65f] hover:underline">
              A vinyl wrap
            </Link>{" "}
            transforms the look while protecting the paint underneath.
            Ceramic coating locks in the fresh shine and makes every subsequent
            wash easier. Accurate Autoworks handles all of these under one roof
            — book them on the same visit and save a trip. Call{" "}
            <a href="tel:7808189904" className="text-[#22d65f] hover:underline font-bold">
              780.818.9904
            </a>{" "}
            to discuss your options.
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
              Book a Truck Detail
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight">
              Your Truck Deserves a{" "}
              <span className="text-[#22d65f] glow-accent">Proper Detail</span>
            </h2>
            <p className="mt-4 text-[#999] max-w-xl mx-auto leading-relaxed">
              Truck and SUV detailing, window tinting, PPF, vinyl wraps, and
              commercial printing — all under one roof at Accurate Autoworks in
              Stony Plain. Serving Spruce Grove, Parkland County, Acheson, and
              Edmonton West. Call for a quote or book online.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Book Your Truck Detail
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
              "Truck & SUV Detailing in Stony Plain: What's Different & What It Costs",
            description:
              "What makes truck and SUV detailing different from sedan detailing, full 2026 pricing, and what to expect at Accurate Autoworks in Stony Plain, Alberta.",
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
                "https://www.accurateautoworks.ca/blog/truck-suv-detailing-stony-plain/",
            },
            keywords:
              "truck detailing Stony Plain, SUV detailing Spruce Grove, truck detail cost Alberta, work truck detailing Parkland County, full-size truck detail near me",
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
              "Stony Plain's premier auto customization shop offering truck and SUV detailing, window tinting, vinyl wraps, PPF, ceramic coating, and commercial printing.",
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

function SeverityBadge({ level }: { level: string }) {
  const config: Record<string, { label: string; classes: string }> = {
    significant: {
      label: "Significant",
      classes: "bg-[#22d65f]/15 text-[#22d65f] border-[#22d65f]/30",
    },
    moderate: {
      label: "Moderate",
      classes: "bg-white/5 text-white border-white/20",
    },
    minor: {
      label: "Minor",
      classes: "bg-[#666]/10 text-[#999] border-[#666]/20",
    },
  };
  const c = config[level] || config.minor;
  return (
    <span
      className={`inline-block px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full border ${c.classes}`}
    >
      {c.label}
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
