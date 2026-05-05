import Link from "next/link";
import type { Metadata } from "next";
import { BlogPostClient } from "./client";

export const metadata: Metadata = {
  title:
    "Tire Changeover Stony Plain & Spruce Grove | Accurate Autoworks",
  description:
    "Seasonal tire changeover in Stony Plain & Spruce Grove: when to switch, winter vs all-weather vs all-season, 2026 costs, and what's included.",
  alternates: {
    canonical:
      "https://www.accurateautoworks.ca/blog/tire-changeover-stony-plain-spruce-grove/",
  },
  openGraph: {
    title:
      "Tire Changeover Stony Plain & Spruce Grove | Accurate Autoworks",
    description:
      "When to switch tires in Alberta, winter vs all-weather compared, real 2026 cost breakdowns, and professional tire changeover service in Parkland County.",
    type: "article",
    url: "https://www.accurateautoworks.ca/blog/tire-changeover-stony-plain-spruce-grove/",
    locale: "en_CA",
    siteName: "Accurate Autoworks",
  },
};

const FAQ_DATA = [
  {
    q: "When should I switch to winter tires in Alberta?",
    a: "The general rule in Alberta is to switch when daytime temperatures consistently fall below 7°C — typically in late October or early November for Stony Plain and Spruce Grove. At that threshold, the rubber compound in all-season tires begins to harden and lose grip, even on dry pavement. Most Parkland County drivers book their changeover in the last two weeks of October to beat the rush. Accurate Autoworks sees a surge in bookings every year around that window, so calling ahead to 780.818.9904 and reserving your spot early is strongly recommended.",
  },
  {
    q: "What is the difference between all-season and winter tires?",
    a: "All-season tires are engineered to perform acceptably across a broad range of conditions — dry summer pavement, rain, and light snow — but they are a compromise in every category. Winter tires use a softer rubber compound that stays pliable below 7°C, combined with deeper tread blocks and sipes (tiny slits) that bite into snow and ice. In Transport Canada braking tests, dedicated winter tires stop up to 25% shorter on ice than all-season tires at the same speed. For Alberta winters with freeze-thaw cycles, black ice, and hard-pack snow from November through March, the performance gap is meaningful.",
  },
  {
    q: "How much does a seasonal tire changeover cost in Stony Plain?",
    a: "A standard swap — swapping your mounted winter wheels onto the vehicle and storing your summer set — runs $80 to $120 at a quality shop in the Stony Plain and Spruce Grove area in 2026. If you need tires mounted and balanced onto rims (loose tires, not pre-mounted), add $100 to $180 for the full set. TPMS sensor programming, if required, adds $30 to $60. Call Accurate Autoworks at 780.818.9904 for a quote specific to your vehicle — prices vary slightly for trucks, SUVs, and oversized tires.",
  },
  {
    q: "Do my tires need to be balanced at every changeover?",
    a: "Not necessarily every time, but it depends. If your tires are already mounted on dedicated rims and have not been disturbed since last season, a basic swap (off the car, on the car) does not require re-balancing. However, if tires are being dismounted from rims and remounted, or if you notice vibration at highway speeds after the swap, balancing is needed. At Accurate Autoworks, we inspect each tire during changeover and will flag if weights have shifted or if re-balancing is warranted — we won't push a service you don't need.",
  },
  {
    q: "What are TPMS sensors and do I need to worry about them during changeover?",
    a: "Tire Pressure Monitoring System sensors are small battery-powered transmitters inside the wheel that send real-time pressure data to your dashboard. Many 2012-and-newer vehicles have them, and all new vehicles sold in Canada since 2013 are required to. When you swap between winter and summer wheel sets, the TPMS computer needs to re-learn which sensor is at which position. Without a reset, your dash warning light may stay on. At Accurate Autoworks, we include TPMS sensor checks with changeover service and perform resets as needed. If a sensor battery is dead — typically after 7 to 10 years — we can replace it.",
  },
  {
    q: "Should I buy dedicated winter wheels or run winters on my regular rims?",
    a: "Dedicated steel or alloy winter wheels are almost always worth the investment if you plan to do seasonal changeovers for more than two years. The mounting and balancing fees each spring and fall add up quickly. With dedicated rims, your changeover is a simple swap — no mount-and-balance, lower labour cost, faster appointment. Steel wheels are the most popular choice for winters: they are cheaper, more dent-resistant in potholes, and corrosion from road salt does not damage a wheel you care about. Call 780.818.9904 and Accurate Autoworks can advise on the right fitment for your specific vehicle.",
  },
  {
    q: "Are all-weather tires good enough for Alberta winters?",
    a: "All-weather tires — those carrying both the M+S (mud and snow) rating and the Three-Peak Mountain Snowflake (3PMSF) symbol — are a legitimate option for Alberta drivers who want year-round convenience. They perform meaningfully better than plain all-season tires in cold temperatures and moderate snow. However, in severe Alberta winter conditions — hard-pack, deep snow, or ice-covered roads after a freeze-thaw cycle — dedicated winter tires still have a grip advantage. All-weather tires are the right call for vehicles that see occasional winter use; for daily driving through a full Parkland County winter, dedicated winters give you the best margin of safety.",
  },
  {
    q: "How long does a tire changeover take at Accurate Autoworks?",
    a: "A straightforward seasonal wheel swap on a standard passenger vehicle or half-ton truck typically takes 45 minutes to 1.5 hours, depending on volume. If mount-and-balance is included, allow 1.5 to 2.5 hours. During peak changeover season — late October and early November, and again in April — wait times can be longer if you walk in without an appointment. Booking ahead at 780.818.9904 means we have your vehicle in and out on your schedule.",
  },
  {
    q: "Can Accurate Autoworks store my tires between seasons?",
    a: "Yes. Accurate Autoworks offers seasonal tire storage for customers who don't have space at home for a second set of wheels and tires. Your tires are stored properly — off the floor, away from ozone sources, and in climate-controlled conditions that prevent premature cracking or sidewall degradation. Ask about our storage packages when you call to book your changeover.",
  },
  {
    q: "How do I know when my winter tires are worn out?",
    a: "Winter tires have a minimum effective tread depth of 4/32 inch — double the 2/32 inch legal minimum for all-season tires. Below 4/32 inch, winter tire performance drops sharply because the sipes and block edges that bite into snow are worn away. Most winter tires have wear indicator bars at 2/32 inch (the legal limit) but you should be replacing them well before that point. During your changeover at Accurate Autoworks, we measure tread depth on every tire and flag any that are approaching the replacement threshold so you can plan ahead.",
  },
];

const COST_DATA = [
  {
    service: "Seasonal wheel swap (pre-mounted set)",
    cost: "$80 - $120",
    priority: "Most Common",
    level: "essential",
  },
  {
    service: "Mount & balance — 4 tires (steel wheels)",
    cost: "$100 - $150",
    priority: "Popular",
    level: "essential",
  },
  {
    service: "Mount & balance — 4 tires (alloy wheels)",
    cost: "$120 - $180",
    priority: "Popular",
    level: "essential",
  },
  {
    service: "TPMS sensor reset / programming",
    cost: "$30 - $60",
    priority: "Often Needed",
    level: "recommended",
  },
  {
    service: "TPMS sensor replacement (each)",
    cost: "$50 - $90",
    priority: "If Faulty",
    level: "optional",
  },
  {
    service: "Tire storage (per season)",
    cost: "$60 - $100",
    priority: "Convenient",
    level: "recommended",
  },
  {
    service: "Tire disposal fee (per tire)",
    cost: "$5 - $10",
    priority: "If Replacing",
    level: "optional",
  },
];

const TIRE_TYPES = [
  {
    name: "All-Season",
    symbol: "M+S",
    coldWeatherRating: "Poor",
    ratingLevel: "poor",
    iceGrip: "Low",
    snowGrip: "Moderate",
    yearRoundUse: "Yes",
    switchRequired: "No",
    albertaVerdict: "Not recommended for full Alberta winters",
    notes:
      "Rubber hardens below 7°C. Acceptable for mild winters but lacks the bite needed for Parkland County ice and hard-pack.",
  },
  {
    name: "All-Weather",
    symbol: "M+S + 3PMSF",
    coldWeatherRating: "Good",
    ratingLevel: "good",
    iceGrip: "Moderate",
    snowGrip: "Good",
    yearRoundUse: "Yes",
    switchRequired: "No",
    albertaVerdict: "Solid choice for occasional winter use",
    notes:
      "Stays pliable in cold. Carries the snowflake symbol. Good for drivers who want year-round convenience with better-than-all-season winter performance.",
  },
  {
    name: "Dedicated Winter",
    symbol: "3PMSF",
    coldWeatherRating: "Best",
    ratingLevel: "best",
    iceGrip: "High",
    snowGrip: "Best",
    yearRoundUse: "No",
    switchRequired: "Yes",
    albertaVerdict: "Best for full Alberta winters",
    recommended: true,
    notes:
      "Purpose-built for cold weather. Softest compound, deepest sipes. Maximum grip on ice and snow. Requires seasonal changeover.",
  },
];

export default function TireChangeoverGuide() {
  const publishDate = "2026-05-05";
  const modifiedDate = "2026-05-05";

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
            Tire Changeover Guide
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black uppercase tracking-tight leading-[1.05]">
            Tire Changeover in{" "}
            <span className="text-[#22d65f] glow-accent">
              Stony Plain &amp; Spruce Grove
            </span>
            : When to Switch, What It Costs &amp; Where to Go
          </h1>

          <p className="mt-8 text-lg sm:text-xl text-[#999] max-w-2xl mx-auto leading-relaxed">
            Alberta&apos;s seasonal tire guide for Parkland County drivers:
            the 7°C rule explained, winter vs all-weather vs all-season
            compared, real 2026 pricing, and what to expect at Accurate
            Autoworks.
          </p>

          <div className="mt-6 flex items-center justify-center gap-6 text-xs text-[#666] uppercase tracking-wider">
            <div className="flex items-center gap-2">
              <svg
                className="w-3.5 h-3.5 text-[#22d65f]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <time dateTime={publishDate}>May 5, 2026</time>
            </div>
            <span className="w-1 h-1 rounded-full bg-[#333]" />
            <div className="flex items-center gap-2">
              <svg
                className="w-3.5 h-3.5 text-[#22d65f]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>13 min read</span>
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
            Every fall it happens the same way. The first hard frost hits the
            Parkland County lowlands, the highway shoulders turn white, and
            every tire shop in Stony Plain and Spruce Grove books solid for the
            next three weeks. The drivers who waited are now scrambling —
            booking the first available slot, sometimes a week out, driving on
            all-seasons over frozen roads in the meantime because they didn't
            get ahead of it.
          </p>
          <p className="mt-4 text-[#ccc] leading-relaxed text-base sm:text-lg">
            Seasonal tire changeovers are one of the most straightforward
            maintenance tasks an Alberta driver can do, but the timing, the
            tire choice, and the service details matter more than most people
            realize. This guide covers everything: when the right switching
            window is for this part of Alberta, how the three tire categories
            actually compare, what a changeover costs at a quality shop in
            2026, and what the process looks like when you bring your vehicle
            into{" "}
            <Link href="/tires/" className="text-[#22d65f] hover:underline">
              Accurate Autoworks for a seasonal tire changeover
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
                <svg
                  className="w-4 h-4 text-[#22d65f]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 10h16M4 14h16M4 18h16"
                  />
                </svg>
              </div>
              <h2 className="text-sm font-bold uppercase tracking-widest text-[#22d65f]">
                What We Cover
              </h2>
            </div>
            <ol className="grid sm:grid-cols-2 gap-x-6 gap-y-3 text-sm">
              {[
                { href: "#when-to-switch", label: "When to Switch Tires in Alberta" },
                { href: "#tire-types", label: "Winter vs All-Weather vs All-Season" },
                { href: "#cost-guide", label: "Tire Changeover Cost in Stony Plain" },
                { href: "#dedicated-wheels", label: "Why Dedicated Winter Wheels Pay Off" },
                { href: "#tpms", label: "TPMS Sensors: What You Need to Know" },
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

        {/* Section 1: When to Switch */}
        <section id="when-to-switch" className="mt-16 scroll-mt-24">
          <SectionHeading number="01" highlight="in Alberta">
            When to Switch Tires{" "}
          </SectionHeading>
          <p className="mt-6 text-[#ccc] leading-relaxed text-base">
            The most important thing to understand about seasonal tire timing is
            that it is not about snow on the ground — it is about air
            temperature. The rubber compound in all-season tires is formulated
            to perform optimally above 7°C. When ambient temperatures fall
            below that threshold, the compound stiffens and loses grip. This
            happens on dry pavement just as much as on snow. The{" "}
            <a
              href="https://www.tiresafety.ca/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#22d65f] hover:underline"
            >
              Tire Safety Council of Canada
            </a>{" "}
            identifies 7°C as the crossover point where winter tires begin to
            outperform all-season tires in stopping distance, cornering, and
            overall grip.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            {[
              {
                season: "Fall Changeover",
                window: "Late October — Mid November",
                trigger: "Consistent daytime temps below 7°C",
                tip: "Book by mid-October. Every tire shop in Stony Plain and Spruce Grove fills up fast during the last two weeks of October. If you wait until there's snow in the forecast, you're booking into a 1–2 week wait.",
                variant: "winter",
              },
              {
                season: "Spring Changeover",
                window: "Mid April — Early May",
                trigger: "Consistent temps staying above 7°C",
                tip: "Don't rush the spring swap. April nights still drop below freezing in Parkland County. Wait until overnight lows are reliably above 0°C before switching back to summer tires — typically around mid-April to late April.",
                variant: "summer",
              },
            ].map((item) => (
              <div
                key={item.season}
                className={`relative rounded-2xl overflow-hidden p-6 sm:p-7 ${
                  item.variant === "winter"
                    ? "bg-blue-500/[0.04] border border-blue-500/20"
                    : "bg-[#22d65f]/[0.04] border border-[#22d65f]/20"
                }`}
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-sm font-bold text-white">{item.season}</h3>
                  <span
                    className={`flex-shrink-0 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${
                      item.variant === "winter"
                        ? "text-blue-400 border-blue-500/30 bg-blue-500/10"
                        : "text-[#22d65f] border-[#22d65f]/30 bg-[#22d65f]/10"
                    }`}
                  >
                    {item.window}
                  </span>
                </div>
                <p className="text-xs text-[#666] mb-3 uppercase tracking-wider font-bold">
                  Switch trigger: {item.trigger}
                </p>
                <p className="text-sm text-[#999] leading-relaxed">{item.tip}</p>
              </div>
            ))}
          </div>

          <Callout variant="warning">
            <strong className="text-white">Alberta has no mandatory winter tire law</strong>{" "}
            — unlike British Columbia, which requires winter tires on most highways.
            But the{" "}
            <a
              href="https://www.alberta.ca/traffic-safety-act"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#22d65f] hover:underline"
            >
              Alberta Traffic Safety Act
            </a>{" "}
            does require drivers to have vehicle control at all times. If you
            are involved in a collision while driving on inadequate tires for
            the conditions, you can be found at fault and your insurance
            coverage may be affected. In Alberta, winter tires are effectively
            a financial and safety decision — the law just lets you make the
            wrong one.
          </Callout>

          <p className="mt-6 text-[#ccc] leading-relaxed text-base">
            Stony Plain and Spruce Grove sit in a climate zone where winter
            arrives hard and early. The Yellowhead corridor, Highway 16A, and
            the Acheson industrial roads are all plowed regularly but can still
            carry packed snow, ice, and freezing fog well into April. Vehicles
            operating in these conditions — especially half-tons and SUVs
            running loads — need proper tires, not compromises.
          </p>
        </section>

        {/* Section 2: Tire Types */}
        <section id="tire-types" className="mt-16 scroll-mt-24">
          <SectionHeading number="02" highlight="vs All-Season">
            Winter vs All-Weather{" "}
          </SectionHeading>
          <p className="mt-6 text-[#ccc] leading-relaxed text-base">
            There are three categories of tire relevant to Alberta drivers.
            Understanding the difference between the symbols on the sidewall —
            and what they actually mean for grip in cold conditions — is the
            most important step in making the right choice for your vehicle.
          </p>

          {/* Desktop table */}
          <div className="mt-8 hidden sm:block rounded-2xl overflow-hidden border border-[#2a2a2a]">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#22d65f]/[0.06]">
                  {[
                    "Type",
                    "Sidewall Symbol",
                    "Cold Weather",
                    "Ice Grip",
                    "Snow Grip",
                    "Year-Round",
                    "Alberta Rating",
                  ].map((h) => (
                    <th
                      key={h}
                      className="text-left py-4 px-4 text-xs font-bold uppercase tracking-widest text-[#22d65f]"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-[#ccc]">
                {TIRE_TYPES.map((row, i) => (
                  <tr
                    key={row.name}
                    className={`border-t border-[#1e1e1e] transition-colors hover:bg-[#22d65f]/[0.03] ${
                      row.recommended
                        ? "bg-[#22d65f]/[0.04]"
                        : i % 2 === 0
                        ? "bg-[#141414]"
                        : "bg-[#0f0f0f]"
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
                    <td className="py-4 px-4 font-mono text-xs">{row.symbol}</td>
                    <td className="py-4 px-4">
                      <TireRatingBadge
                        level={row.ratingLevel}
                        label={row.coldWeatherRating}
                      />
                    </td>
                    <td className="py-4 px-4">{row.iceGrip}</td>
                    <td className="py-4 px-4">{row.snowGrip}</td>
                    <td className="py-4 px-4">{row.yearRoundUse}</td>
                    <td className="py-4 px-4 text-xs text-[#999]">
                      {row.albertaVerdict}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="mt-8 sm:hidden space-y-4">
            {TIRE_TYPES.map((row) => (
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
                  <TireRatingBadge
                    level={row.ratingLevel}
                    label={row.coldWeatherRating}
                  />
                </div>
                {row.recommended && (
                  <div className="mb-3 text-[10px] font-bold uppercase tracking-widest text-[#22d65f]">
                    Our Recommendation for Alberta
                  </div>
                )}
                <div className="grid grid-cols-2 gap-2 text-xs text-[#999]">
                  <span>
                    Symbol:{" "}
                    <strong className="text-white font-mono">{row.symbol}</strong>
                  </span>
                  <span>
                    Year-round:{" "}
                    <strong className="text-white">{row.yearRoundUse}</strong>
                  </span>
                  <span>
                    Ice grip: <strong className="text-white">{row.iceGrip}</strong>
                  </span>
                  <span>
                    Snow grip:{" "}
                    <strong className="text-white">{row.snowGrip}</strong>
                  </span>
                </div>
                <p className="mt-3 text-xs text-[#666] leading-relaxed">
                  {row.notes}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 space-y-5">
            <div className="card-gradient rounded-2xl p-6 sm:p-8">
              <h3 className="text-sm font-bold uppercase tracking-wide text-white mb-3">
                What the Three-Peak Mountain Snowflake Symbol Actually Means
              </h3>
              <p className="text-sm text-[#999] leading-relaxed">
                The Three-Peak Mountain Snowflake (3PMSF) symbol — a
                mountain outline with a snowflake inside it — is the only
                certification that guarantees a tire has been tested and
                confirmed to meet winter traction performance standards. It
                appears on both dedicated winter tires and qualifying
                all-weather tires. The plain M+S (mud and snow) marking, on
                the other hand, is a self-certification by the manufacturer
                with no standardized test behind it. Many all-season tires
                carry M+S but are not tested for winter performance. If you
                see M+S without the snowflake, that tire is not a winter or
                all-weather tire in any meaningful sense.
              </p>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-[#22d65f]/30 bg-gradient-to-br from-[#22d65f]/[0.06] to-[#141414]">
              <div className="absolute top-0 right-0 px-3 py-1 bg-[#22d65f] text-black text-[10px] font-bold uppercase tracking-widest rounded-bl-lg">
                Key Fact
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="text-sm font-bold uppercase tracking-wide text-white mb-3">
                  Winter Tires Stop Up to 25% Shorter on Ice
                </h3>
                <p className="text-sm text-[#999] leading-relaxed">
                  Transport Canada testing has shown that vehicles equipped
                  with dedicated winter tires can stop up to 25% shorter on
                  ice compared to the same vehicle on all-season tires at
                  the same speed. At 50 km/h, that extra stopping distance
                  is the difference between a controlled stop and a
                  collision. On the black ice patches that form regularly on
                  Highway 16A and the overpass ramps through Acheson, that
                  margin is not hypothetical — it is the margin between a
                  close call and an insurance claim.
                </p>
              </div>
            </div>

            <div className="card-gradient rounded-2xl p-6 sm:p-8">
              <h3 className="text-sm font-bold uppercase tracking-wide text-white mb-3">
                All-Weather Tires: The Case For and Against
              </h3>
              <p className="text-sm text-[#999] leading-relaxed">
                All-weather tires with the 3PMSF snowflake rating are a
                legitimate year-round option — particularly for drivers who
                use a second vehicle only occasionally in winter, or for
                families who want to avoid the changeover hassle entirely.
                The newest generation of all-weather tires from brands like
                Michelin CrossClimate, Continental AllSeasonContact, and
                Nokian Seasonproof perform genuinely well in Alberta winter
                conditions. The tradeoff: in a hard winter event — deep
                snow on a rural Parkland County road, or freezing rain on
                a busy morning — dedicated winters still give you a
                measurable grip advantage. All-weather tires are excellent.
                Dedicated winters are better.
              </p>
            </div>
          </div>

          <Callout variant="info">
            Unsure whether your current tires have the snowflake symbol? Look
            at the outer sidewall near the rim — the 3PMSF symbol is always
            molded directly into the rubber. If you see a mountain outline with
            a snowflake inside, you have a qualifying tire. If you see only
            &ldquo;M+S&rdquo; or &ldquo;All Season,&rdquo; those are not winter-rated. Bring your
            vehicle into{" "}
            <Link href="/tires/" className="text-[#22d65f] hover:underline">
              Accurate Autoworks
            </Link>{" "}
            and we will assess your current tires and advise on whether a
            swap makes sense.
          </Callout>
        </section>

        {/* Section 3: Cost Guide */}
        <section id="cost-guide" className="mt-16 scroll-mt-24">
          <SectionHeading number="03" highlight="in Stony Plain">
            Tire Changeover Cost{" "}
          </SectionHeading>
          <p className="mt-6 text-[#ccc] leading-relaxed text-base">
            Here is a realistic cost breakdown for seasonal tire services at
            a quality shop in the Stony Plain and Spruce Grove area in 2026.
            Prices reflect professional labour with proper equipment —
            not a buddy with a hand torque wrench in a driveway. Properly
            torqued lug nuts and balanced tires matter for both safety and
            the life of your wheel bearings.
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
            of 2026. Actual costs vary based on vehicle type, tire size, and
            services required. Call 780.818.9904 for an exact quote on your
            vehicle.
          </p>

          <Callout variant="tip">
            <strong className="text-white">Bundling saves money:</strong> If
            your vehicle is already coming in for{" "}
            <Link href="/detailing/" className="text-[#22d65f] hover:underline">
              a seasonal detail
            </Link>{" "}
            or you want{" "}
            <Link href="/ppf/" className="text-[#22d65f] hover:underline">
              paint protection film
            </Link>{" "}
            applied before winter, combining services on a single visit
            saves on drop-off time and can reduce total labour. Ask about
            combined booking when you call{" "}
            <Link href="/tires/" className="text-[#22d65f] hover:underline">
              Accurate Autoworks
            </Link>{" "}
            to schedule your changeover.
          </Callout>

          <div className="mt-8 space-y-5">
            <div className="card-gradient rounded-2xl p-6 sm:p-8">
              <h3 className="text-sm font-bold uppercase tracking-wide text-white mb-3">
                Why Professional Torquing and Balancing Matter
              </h3>
              <p className="text-sm text-[#999] leading-relaxed">
                Lug nuts need to be torqued to manufacturer specification —
                typically between 80 and 140 ft-lb depending on the vehicle.
                Under-torqued nuts can loosen on the highway; over-torqued
                nuts stretch the wheel studs and make future removal
                dangerous. Tire balance affects ride quality, steering
                response, and uneven tread wear. Out-of-balance tires at
                highway speeds create vibration that accelerates wear on
                wheel bearings, tie rods, and suspension components. A
                properly executed changeover at a shop with calibrated
                equipment is not a cost — it is maintenance insurance.
              </p>
            </div>

            <div className="card-gradient rounded-2xl p-6 sm:p-8">
              <h3 className="text-sm font-bold uppercase tracking-wide text-white mb-3">
                The Real Cost of Running All-Season Tires in Alberta Winter
              </h3>
              <p className="text-sm text-[#999] leading-relaxed">
                Some drivers try to avoid the changeover cost by running
                all-season tires year-round. The math rarely works out.
                The collision deductible on a preventable winter accident
                typically runs $500 to $2,000 or more. Insurance premiums
                rise after an at-fault claim. A quality set of winter tires
                on steel wheels, amortized over 6 to 8 seasons, costs less
                per year than a single mid-winter collision repair. The
                changeover fee — $80 to $120 twice a year — is the least
                expensive part of the equation.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Dedicated Wheels */}
        <section id="dedicated-wheels" className="mt-16 scroll-mt-24">
          <SectionHeading number="04" highlight="Winter Wheels Pay Off">
            Why Dedicated{" "}
          </SectionHeading>
          <p className="mt-6 text-[#ccc] leading-relaxed text-base">
            The single best upgrade for any driver doing annual seasonal
            changeovers is a dedicated set of winter rims — steel wheels
            with your winter tires mounted and balanced, ready to swap
            straight onto the vehicle each fall.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            {[
              {
                title: "No Mount & Balance Fees",
                detail:
                  "When winters are on their own rims, the fall and spring changeovers are simple swaps — remove the summer set, install the winter set, torque the lugs. No mount-and-balance needed. That alone saves $100 to $180 per changeover, and over five seasons it more than covers the cost of the steel wheels.",
              },
              {
                title: "Faster Appointments",
                detail:
                  "A wheel swap takes 45 minutes to 1.5 hours. A full mount-and-balance appointment takes 1.5 to 2.5 hours. During the peak October booking rush at every shop in Stony Plain and Spruce Grove, shorter appointment slots are easier to get. Dedicated rims mean you're in and out faster.",
              },
              {
                title: "Protects Your Summer Wheels",
                detail:
                  "Winter roads in Alberta are hard on wheels. Salt spray, -30°C thermal cycles, pothole-ridden roads — all of this is rough on alloy wheels. Running winters on cheap steel rims means your summer alloys stay in a warm garage all winter, protected from corrosion and damage.",
              },
              {
                title: "Easy to Transfer on Vehicle Sale",
                detail:
                  "A complete second set of wheels and tires is a real selling point when you list your truck or SUV. Buyers in Alberta know exactly what a dedicated winter wheel set means — it is a vehicle that has been maintained properly and is ready to drive year-round without an immediate additional expense.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="card-gradient rounded-2xl p-6 group hover:border-[#22d65f]/50 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-[#22d65f]/10 flex items-center justify-center mb-4 group-hover:bg-[#22d65f]/20 transition-colors">
                  <svg
                    className="w-5 h-5 text-[#22d65f]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-sm font-bold text-white mb-2">{item.title}</h3>
                <p className="text-xs text-[#999] leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>

          <Callout variant="tip">
            Steel winter wheels are the most practical and durable choice for
            most Parkland County drivers. They are cheaper than alloy, handle
            salt and potholes without complaint, and any cosmetic damage does
            not matter — they spend half the year in storage. Ask the team at{" "}
            <Link href="/tires/" className="text-[#22d65f] hover:underline">
              Accurate Autoworks
            </Link>{" "}
            about fitment and pricing for your specific vehicle when you call{" "}
            <a href="tel:7808189904" className="text-[#22d65f] hover:underline font-bold">
              780.818.9904
            </a>
            .
          </Callout>
        </section>

        {/* Section 5: TPMS */}
        <section id="tpms" className="mt-16 scroll-mt-24">
          <SectionHeading number="05" highlight="Sensors Explained">
            TPMS{" "}
          </SectionHeading>
          <p className="mt-6 text-[#ccc] leading-relaxed text-base">
            Tire Pressure Monitoring System sensors are a source of
            confusion for a lot of Alberta drivers doing seasonal changeovers.
            Here is what you need to know.
          </p>

          <div className="mt-8 space-y-4">
            {[
              {
                title: "What TPMS Sensors Do",
                description:
                  "TPMS sensors are small battery-powered transmitters mounted inside the wheel, attached to the valve stem. They measure tire pressure in real time and broadcast the reading to your vehicle's computer. If pressure drops more than 25% below the recommended level, your dashboard TPMS warning light activates. Regulations in Canada require TPMS on all new passenger vehicles sold from 2013 onward.",
              },
              {
                title: "Why Changeovers Trigger TPMS Issues",
                description:
                  "When you swap between summer and winter wheel sets, the vehicle's computer needs to re-learn which sensor is at which corner of the vehicle. If it doesn't, the TPMS warning light may stay on or display incorrect wheel positions. This is not a malfunction — it is a reset requirement. Some vehicles auto-learn after driving a few kilometres at speed; others require a scan tool reset. At Accurate Autoworks, we handle TPMS re-registration as part of the changeover service.",
              },
              {
                title: "Sensor Lifespan and Battery Replacement",
                description:
                  "TPMS sensor batteries are not replaceable on most designs — when the battery dies, the entire sensor is replaced. Typical battery life is 7 to 10 years. If your vehicle is in that age range and your TPMS light comes on after a changeover despite proper pressure, a dead sensor is the likely cause. Sensor replacement at Accurate Autoworks runs $50 to $90 per sensor, including programming.",
              },
              {
                title: "Running Winter Wheels Without TPMS Sensors",
                description:
                  "It is common for drivers to run winter tires on steel wheels without TPMS sensors installed. This is legal in Alberta — it is not illegal to have an inactive or non-equipped TPMS system, though your dashboard warning light will be on throughout winter. If you want sensors on your winter wheels, we can supply and install them. If you are comfortable manually checking pressure (recommended monthly in winter, since cold air contracts and pressure drops noticeably between +5°C and -20°C), running winters without sensors is a reasonable choice.",
              },
            ].map((item, i) => (
              <div key={item.title} className="relative rounded-2xl overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#22d65f] to-[#22d65f]/20" />
                <div className="card-gradient rounded-2xl border-l-0 pl-6 pr-6 py-6 sm:pl-8 sm:pr-8 sm:py-8 ml-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-[#22d65f] text-black text-xs font-black flex-shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-white">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[#999] leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: What to Expect */}
        <section id="what-to-expect" className="mt-16 scroll-mt-24">
          <SectionHeading number="06" highlight="at Accurate Autoworks">
            What to Expect{" "}
          </SectionHeading>
          <p className="mt-6 text-[#ccc] leading-relaxed text-base">
            Here is exactly what happens when you bring your vehicle to
            Accurate Autoworks on Boulder Boulevard in Stony Plain for a
            seasonal tire changeover. No surprises, no unnecessary upsells.
          </p>

          <div className="mt-8 space-y-4">
            {[
              {
                step: "01",
                title: "Book Your Appointment",
                description:
                  "Call 780.818.9904 or contact us online to book. During peak changeover season in October and again in April, slots fill quickly — booking at least one to two weeks ahead is strongly recommended. Tell us your vehicle type, whether you have a pre-mounted wheel set or loose tires, and whether you have TPMS sensors on either set.",
              },
              {
                step: "02",
                title: "Vehicle Inspection on Arrival",
                description:
                  "When your vehicle arrives, we do a quick inspection of both sets of tires: tread depth measurement, visual inspection for sidewall damage, cracking, or embedded objects, and a check of the valve stems. If we see anything that affects safety or warrants attention before the changeover, we tell you upfront with no pressure.",
              },
              {
                step: "03",
                title: "Changeover, Torque, and Balance",
                description:
                  "For pre-mounted wheel sets, we swap the wheels on and off, torque lug nuts to manufacturer specification, and re-check after installation. For loose tires, we mount each tire on the appropriate rim, balance to within factory spec, and then install. All lug nuts are torqued with a calibrated torque wrench — not just an impact gun.",
              },
              {
                step: "04",
                title: "TPMS Reset if Required",
                description:
                  "If your vehicle has TPMS and requires a sensor re-registration after the wheel swap, we handle that before the vehicle leaves the shop. You drive out with a clean dashboard — no warning lights, no unfinished business.",
              },
              {
                step: "05",
                title: "Storage if Needed",
                description:
                  "If you want us to store your off-season set, we bag and tag your tires and wheels, log the fitment information, and store them in our facility until the next changeover. You get a receipt with the storage details and a reminder when your pickup window opens.",
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
            <strong className="text-white">While you&apos;re in:</strong> A lot
            of Accurate Autoworks customers combine their fall tire changeover
            with a{" "}
            <Link href="/detailing/" className="text-[#22d65f] hover:underline">
              full vehicle detail
            </Link>{" "}
            or a{" "}
            <Link href="/tinting/" className="text-[#22d65f] hover:underline">
              window tint installation
            </Link>{" "}
            — getting everything done in a single visit before winter sets in.
            If you run a commercial vehicle or fleet, we also handle{" "}
            <Link href="/print/" className="text-[#22d65f] hover:underline">
              vehicle graphics and signage
            </Link>
            . Call us at{" "}
            <a href="tel:7808189904" className="text-[#22d65f] hover:underline font-bold">
              780.818.9904
            </a>{" "}
            to coordinate.
          </Callout>

          <div className="mt-8 space-y-5">
            <div className="card-gradient rounded-2xl p-6 sm:p-8">
              <h3 className="text-sm font-bold uppercase tracking-wide text-white mb-3">
                Tire Pressure in Alberta Winter: Check It Monthly
              </h3>
              <p className="text-sm text-[#999] leading-relaxed">
                Tire pressure drops roughly 1 PSI for every 5°C drop in
                ambient temperature. Between a mild November day at +5°C
                and a hard January cold snap at -25°C, that is a 6°C
                swing of about 6 PSI — enough to noticeably affect handling,
                fuel economy, and tire wear. Winter tires are not exempt from
                this physics. Check pressure monthly and always check after
                a significant temperature swing. The recommended pressure is
                printed on the door jamb placard for your vehicle — use that
                number, not the maximum pressure embossed on the tire
                sidewall.
              </p>
            </div>

            <div className="card-gradient rounded-2xl p-6 sm:p-8">
              <h3 className="text-sm font-bold uppercase tracking-wide text-white mb-3">
                When to Replace Rather Than Swap
              </h3>
              <p className="text-sm text-[#999] leading-relaxed">
                If your winter tires are approaching 4/32 inch of remaining
                tread depth, this season&apos;s changeover is the right time to
                replace them rather than reinstall. Tread depth below 4/32
                inch dramatically reduces winter tire performance — the sipes
                and block edges are too worn down to channel snow and water.
                The legal minimum in Canada is 2/32 inch, but winter tire
                manufacturers and Transport Canada both recommend replacing
                at 4/32 inch for winter use. During your changeover
                inspection at Accurate Autoworks, we measure every tire and
                give you an honest assessment of how many seasons remain.
              </p>
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
              Book Your Changeover
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight">
              Ready for Your{" "}
              <span className="text-[#22d65f] glow-accent">Tire Changeover?</span>
            </h2>
            <p className="mt-4 text-[#999] max-w-xl mx-auto leading-relaxed">
              Tire changeovers, window tinting, PPF, detailing, and wraps —
              Accurate Autoworks handles it all under one roof in Stony
              Plain. Serving Spruce Grove, Parkland County, Acheson, and
              Edmonton West. Don&apos;t wait until the first snow to book.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Book Your Tire Changeover
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
              <svg
                className="w-7 h-7 text-[#22d65f]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016A3.001 3.001 0 0021 9.349m-18 0A2.989 2.989 0 004.5 9c.956 0 1.813-.44 2.37-1.13M21 9.349A2.989 2.989 0 0019.5 9c-.956 0-1.813-.44-2.37-1.13m0 0A3 3 0 0015 6H9a3 3 0 00-2.13.87m10.26 0A3 3 0 0015 6H9"
                />
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
                customize their vehicles since 2023. Tire changeovers,
                tinting, wraps, detailing, PPF, and commercial print under
                one roof.
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
              "Tire Changeover in Stony Plain: When to Switch, What It Costs & Where to Go",
            description:
              "When to switch tires in Alberta, winter vs all-weather vs all-season compared, 2026 pricing, and what to expect at Accurate Autoworks in Stony Plain.",
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
                "https://www.accurateautoworks.ca/blog/tire-changeover-stony-plain-spruce-grove/",
            },
            keywords:
              "tire change Stony Plain, seasonal tire changeover Spruce Grove, tire mount balance Parkland County, winter tires Alberta, tire changeover near me",
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
              "Stony Plain's auto customization and service shop offering tire changeovers, window tinting, vinyl wraps, car detailing, PPF, and commercial printing.",
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

function TireRatingBadge({ level, label }: { level: string; label: string }) {
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
    <div
      className={`mt-6 rounded-xl border ${s.border} ${s.bg} p-5 flex gap-4`}
    >
      <div
        className={`flex-shrink-0 w-8 h-8 rounded-lg ${s.iconBg} flex items-center justify-center`}
      >
        <svg
          className={`w-4 h-4 ${s.icon}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          {variant === "tip" ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5.002 5.002 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            />
          ) : variant === "info" ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          )}
        </svg>
      </div>
      <p className="text-sm text-[#999] leading-relaxed">{children}</p>
    </div>
  );
}
