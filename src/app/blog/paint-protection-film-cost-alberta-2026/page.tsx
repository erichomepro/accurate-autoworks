import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import { BlogPostClient } from "./client";

export const metadata: Metadata = {
  title: "Paint Protection Film Cost in Alberta 2026 | Accurate Autoworks",
  description:
    "Paint protection film cost in Alberta in 2026: full PPF $4,500-$8,500, partial $1,800-$3,200. Lifespan, types, install process, and is PPF worth it for your vehicle.",
  alternates: {
    canonical:
      "https://www.accurateautoworks.ca/blog/paint-protection-film-cost-alberta-2026/",
  },
  openGraph: {
    title: "Paint Protection Film Cost in Alberta 2026 | Accurate Autoworks",
    description:
      "Real PPF cost ranges, lifespan, types, install process, and an honest answer to whether paint protection film is worth it for your vehicle in 2026.",
    type: "article",
    url: "https://www.accurateautoworks.ca/blog/paint-protection-film-cost-alberta-2026/",
    locale: "en_CA",
    siteName: "Accurate Autoworks",
  },
};

const FAQ_DATA = [
  {
    q: "How much does PPF cost in Alberta in 2026?",
    a: "Full vehicle PPF coverage in the Stony Plain and Edmonton area costs $4,500 to $8,500 in 2026, depending on vehicle size and film grade. Partial front-end packages (hood, fenders, mirrors, front bumper, headlights) run $1,800 to $3,200. Full front clip with A-pillars and roof leading edge runs $2,800 to $4,500.",
  },
  {
    q: "How long does paint protection film last in Alberta?",
    a: "Quality urethane PPF lasts 7 to 10 years in Alberta when professionally installed. Top-tier self-healing films with ceramic topcoats can extend that to 12+ years. Modern films are engineered for the Alberta climate.",
  },
  {
    q: "Is paint protection film worth it on a new vehicle?",
    a: "For most owners keeping their vehicle 5+ years, yes. PPF prevents rock chips, sand abrasion, road salt etching, and minor scratches that destroy resale value. A $5,000 PPF investment on a $70,000 truck typically pays for itself in preserved resale value within the first 3 years.",
  },
  {
    q: "What is the difference between PPF and ceramic coating?",
    a: "PPF is a physical urethane film 8 to 10 mil thick that protects paint from impacts and chips. Ceramic coating is a chemical bond a few microns thick that adds gloss and hydrophobic properties but offers zero impact protection. Most premium owners use both.",
  },
  {
    q: "Will PPF damage my paint when removed?",
    a: "No, when professionally installed and removed within the warranty window. Quality urethane PPF uses an acrylic adhesive that releases cleanly with controlled heat and lifts the film without pulling paint.",
  },
  {
    q: "Can I install PPF myself with a kit?",
    a: "Technically yes, in practice almost never well. PPF requires precise pattern fitment, slip and tack solutions, controlled tension across compound curves, and dust-free environment. DIY kits typically result in visible seams, lifted edges, trapped debris, and bubbles within 30 days.",
  },
  {
    q: "How long does a PPF installation take?",
    a: "Partial front packages take 4 to 8 hours. Full front clips run 1 full day. Full vehicle wraps run 2 to 3 days. After installation, we hold the vehicle for a 24-hour cure period before release.",
  },
  {
    q: "Where can I get PPF installed near Stony Plain or Edmonton?",
    a: "Accurate Autoworks installs paint protection film in our Stony Plain shop, serving Spruce Grove, Parkland County, Acheson, and Edmonton-area customers. Free in-person consultations, written quotes, climate-controlled install bay, and 7-year workmanship warranty.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Paint Protection Film Cost in Alberta 2026: Real Numbers, Honest Answers",
  description:
    "Real PPF cost ranges, lifespan, types, install process, and an honest answer to whether paint protection film is worth it for your vehicle in 2026.",
  datePublished: "2026-04-16",
  dateModified: "2026-04-16",
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
      "https://www.accurateautoworks.ca/blog/paint-protection-film-cost-alberta-2026/",
  },
  keywords:
    "paint protection film cost alberta, ppf cost edmonton, ppf stony plain, paint protection film worth it, ppf installation alberta",
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_DATA.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

const PPF_PACKAGES = [
  { name: "Bumper Only", cost: "$650 - $950", coverage: "Front bumper face only" },
  { name: "Partial Front", cost: "$1,800 - $3,200", coverage: "Hood, fenders, mirrors, front bumper, headlights" },
  { name: "Full Front Clip", cost: "$2,800 - $4,500", coverage: "Adds A-pillars and roof leading edge" },
  { name: "Full Vehicle", cost: "$4,500 - $8,500", coverage: "Every painted panel including doors, rockers, rear" },
];

export default function PPFCostAlberta2026() {
  return (
    <article className="pb-20">
      <BlogPostClient />

      <header className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#22d65f]/5 via-transparent to-transparent" />
        <div className="absolute inset-0 hero-stripe opacity-50" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-3 px-5 py-2 mb-8 text-xs font-bold uppercase tracking-[3px] text-[#22d65f] border border-[#22d65f]/30 rounded-full backdrop-blur-sm bg-[#22d65f]/5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#22d65f] animate-pulse" />
            Paint Protection Film Guide
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black uppercase tracking-tight leading-[1.05]">
            Paint Protection Film Cost in{" "}
            <span className="text-[#22d65f] glow-accent">Alberta 2026</span>:
            Real Numbers, Honest Answers
          </h1>
          <p className="mt-8 text-lg sm:text-xl text-[#999] max-w-2xl mx-auto leading-relaxed">
            Full vehicle PPF runs $4,500 to $8,500 in Alberta in 2026. Partial
            front packages start at $1,800. Here is exactly what you get for
            the money, how long it lasts, and whether it is worth it for your
            specific vehicle.
          </p>
          <div className="mt-6 flex items-center justify-center gap-6 text-xs text-[#666] uppercase tracking-wider">
            <span>April 16, 2026</span>
            <span className="w-1 h-1 rounded-full bg-[#333]" />
            <span>11 min read</span>
          </div>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="prose-section">
          <p className="text-[#ccc] leading-relaxed text-base sm:text-lg">
            Paint protection film (PPF) is the single most effective upgrade
            for keeping a new or near-new vehicle looking new in Alberta. The
            highways between Stony Plain, Edmonton, and the rest of Parkland
            County throw gravel, sand, and road salt at your front end every
            day. Without protection, the rock chips and abrasion add up fast.
            With PPF properly installed, the front of your vehicle looks
            factory-fresh 5 years and 100,000 kilometres later.
          </p>
          <p className="mt-4 text-[#ccc] leading-relaxed text-base sm:text-lg">
            This guide covers what PPF actually costs in Alberta in 2026, the
            different package levels, the types of film on the market, the
            real lifespan in our climate, and an honest answer to the question
            most owners ask: is it worth it on my vehicle? At the end, we
            walk through what to expect when you bring your vehicle into{" "}
            <Link href="/ppf/" className="text-[#22d65f] hover:underline">
              Accurate Autoworks for a PPF installation
            </Link>
            .
          </p>
        </div>

        <section className="mt-16">
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">
            What PPF Costs in <span className="text-[#22d65f]">Alberta 2026</span>
          </h2>
          <div className="mt-3 h-px w-16 bg-gradient-to-r from-[#22d65f] to-transparent" />
          <p className="mt-6 text-[#ccc] leading-relaxed">
            PPF pricing is driven by three things: how much of the vehicle is
            covered, the size and complexity of the vehicle, and the grade of
            film selected. Here are the typical ranges at a quality Stony
            Plain or Edmonton shop in 2026.
          </p>
          <div className="mt-8 rounded-2xl overflow-hidden border border-[#2a2a2a]">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#22d65f]/[0.06]">
                  <th className="text-left py-4 px-6 text-xs font-bold uppercase tracking-widest text-[#22d65f]">
                    Package
                  </th>
                  <th className="text-left py-4 px-6 text-xs font-bold uppercase tracking-widest text-[#22d65f]">
                    Cost
                  </th>
                  <th className="text-left py-4 px-6 text-xs font-bold uppercase tracking-widest text-[#22d65f]">
                    Coverage
                  </th>
                </tr>
              </thead>
              <tbody className="text-[#ccc]">
                {PPF_PACKAGES.map((row, i) => (
                  <tr
                    key={row.name}
                    className={`border-t border-[#1e1e1e] ${
                      i % 2 === 0 ? "bg-[#141414]" : "bg-[#0f0f0f]"
                    }`}
                  >
                    <td className="py-4 px-6 font-bold text-white">{row.name}</td>
                    <td className="py-4 px-6 font-mono font-bold text-white">
                      {row.cost}
                    </td>
                    <td className="py-4 px-6 text-xs">{row.coverage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-[#555] italic">
            * Prices reflect 2026 ranges in Stony Plain and Edmonton-area shops
            for self-healing urethane PPF. Trucks, SUVs, and luxury vehicles
            trend toward the upper end. Call 780.818.9904 for a vehicle-specific
            quote.
          </p>
          <div className="mt-6 rounded-xl border border-[#22d65f]/20 bg-[#22d65f]/[0.04] p-5">
            <p className="text-sm text-[#999] leading-relaxed">
              <strong className="text-white">The cost-effective sweet spot:</strong>{" "}
              For 80% of Alberta drivers, the partial front package ($1,800 to
              $3,200) covers the highest-impact areas at roughly 1/3 the price
              of a full wrap. Adding{" "}
              <Link href="/tinting/" className="text-[#22d65f] hover:underline">
                ceramic window tint
              </Link>{" "}
              on the same visit often saves on total labour.
            </p>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">
            How Long PPF Lasts in the Alberta{" "}
            <span className="text-[#22d65f]">Climate</span>
          </h2>
          <div className="mt-3 h-px w-16 bg-gradient-to-r from-[#22d65f] to-transparent" />
          <p className="mt-6 text-[#ccc] leading-relaxed">
            Quality self-healing PPF lasts 7 to 10 years in Alberta when
            professionally installed. Top-tier ceramic-coated film stretches
            that to 12+ years. The Alberta climate is one of the harder tests
            for PPF anywhere on the continent — high UV at elevation, gravel
            exposure on every highway, road salt for 5 months a year, and
            freeze-thaw cycles that flex every panel — but modern urethane
            films are engineered for exactly this environment. For more on the
            underlying technology,{" "}
            <a
              href="https://en.wikipedia.org/wiki/Paint_protection_film"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#22d65f] hover:underline"
            >
              the Wikipedia overview of PPF
            </a>{" "}
            covers the chemistry well.
          </p>
          <div className="mt-8 space-y-4">
            <div className="card-gradient rounded-2xl p-6 sm:p-8">
              <h3 className="text-sm font-bold uppercase tracking-wide text-white mb-3">
                UV and Yellowing Resistance
              </h3>
              <p className="text-sm text-[#999] leading-relaxed">
                Older-generation PPF was notorious for yellowing under UV
                exposure within 3 to 4 years. Modern self-healing urethane
                includes UV inhibitors engineered to maintain optical clarity
                for 10+ years. We see properly maintained film from 2018 still
                looking factory clear in 2026.
              </p>
            </div>
            <div className="card-gradient rounded-2xl p-6 sm:p-8">
              <h3 className="text-sm font-bold uppercase tracking-wide text-white mb-3">
                Self-Healing Mechanism
              </h3>
              <p className="text-sm text-[#999] leading-relaxed">
                Self-healing PPF uses an elastomeric topcoat that reflows
                under heat. Light surface scratches from car washes, pebbles,
                and abrasion disappear when the film is exposed to sunlight or
                warm water. Deeper impacts that penetrate to the urethane layer
                do not heal, but they also do not propagate to your paint.
              </p>
            </div>
            <div className="card-gradient rounded-2xl p-6 sm:p-8">
              <h3 className="text-sm font-bold uppercase tracking-wide text-white mb-3">
                Edge Lifting and Bubbling
              </h3>
              <p className="text-sm text-[#999] leading-relaxed">
                The two most common PPF failure modes are edge lifting and
                bubbling. Both are almost entirely avoidable through
                professional installation in a controlled environment. We use
                precision-cut film patterns, slip and tack solutions, and
                post-install heat-set procedures that eliminate the entry
                points for failure.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">
            Is PPF Worth It on Your{" "}
            <span className="text-[#22d65f]">Vehicle?</span>
          </h2>
          <div className="mt-3 h-px w-16 bg-gradient-to-r from-[#22d65f] to-transparent" />
          <p className="mt-6 text-[#ccc] leading-relaxed">
            The honest answer depends on three variables: what you paid for the
            vehicle, how long you plan to keep it, and how you drive it. Here
            is the math.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            <div className="card-gradient rounded-2xl p-6">
              <h3 className="text-sm font-bold uppercase tracking-wide text-white mb-2">
                Worth It
              </h3>
              <ul className="text-sm text-[#999] leading-relaxed space-y-2 mt-3">
                <li>• Vehicles $40,000+ kept 5+ years</li>
                <li>• High-mileage daily drivers on Highway 16A or Yellowhead</li>
                <li>• Trucks used in Acheson industrial corridor</li>
                <li>• Lease vehicles where excess wear costs $0.50+ per km</li>
                <li>• Dark-colour vehicles where chips show worse</li>
                <li>• Electric vehicles with long delivery wait times</li>
              </ul>
            </div>
            <div className="card-gradient rounded-2xl p-6">
              <h3 className="text-sm font-bold uppercase tracking-wide text-white mb-2">
                Probably Not Worth It
              </h3>
              <ul className="text-sm text-[#999] leading-relaxed space-y-2 mt-3">
                <li>• Vehicles under $20,000 with limited resale value</li>
                <li>• Garage-kept vehicles with under 5,000 km/year</li>
                <li>• Short-term ownership (under 18 months)</li>
                <li>• Vehicles already showing significant wear or chips</li>
                <li>• Owners willing to accept normal wear as part of ownership</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 rounded-xl border border-blue-500/20 bg-blue-500/[0.04] p-5">
            <p className="text-sm text-[#999] leading-relaxed">
              <strong className="text-white">A real Alberta example:</strong> A
              $70,000 truck purchased new and kept 5 years typically loses
              $4,000 to $7,000 in resale value due to front-end rock chips,
              hood damage, and gravel pitting. A $4,800 partial-front PPF
              installation eliminates almost all of that — net positive ROI by
              year 3, every dollar after that is upside.
            </p>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">
            What to Expect at Accurate{" "}
            <span className="text-[#22d65f]">Autoworks</span>
          </h2>
          <div className="mt-3 h-px w-16 bg-gradient-to-r from-[#22d65f] to-transparent" />
          <p className="mt-6 text-[#ccc] leading-relaxed">
            Here is what the PPF installation process looks like when you bring
            your vehicle into our Stony Plain shop.
          </p>
          <div className="mt-8 space-y-4">
            {[
              {
                step: "01",
                title: "Free Consultation and Quote",
                description:
                  "We review your vehicle, recommend a coverage package based on your usage and budget, show you film samples, and provide a written quote on the spot. No pressure to book today — most clients take 24 to 48 hours to decide.",
              },
              {
                step: "02",
                title: "Vehicle Prep and Decontamination",
                description:
                  "Your vehicle is washed, clay-barred, and decontaminated to remove every trace of contamination from the paint. PPF bonds to a perfectly clean surface. Skipping prep is the most common reason cheap installations fail in 6 months.",
              },
              {
                step: "03",
                title: "Film Cutting and Installation",
                description:
                  "We use computer-cut patterns specific to your vehicle (no hand-cutting guesswork) installed in our climate-controlled bay. Film is applied with slip and tack solutions, squeegeed into place, and heat-set on every edge to lock down the bond.",
              },
              {
                step: "04",
                title: "24-Hour Cure and Quality Check",
                description:
                  "Your vehicle stays in our shop for 24 hours after installation while the adhesive cures. Before release, we walk every panel with you to verify edges, alignment, and any final tweaks.",
              },
            ].map((phase) => (
              <div
                key={phase.step}
                className="relative rounded-2xl overflow-hidden"
              >
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
          <div className="mt-6 rounded-xl border border-[#22d65f]/20 bg-[#22d65f]/[0.04] p-5">
            <p className="text-sm text-[#999] leading-relaxed">
              <strong className="text-white">Pair PPF with our other services:</strong>{" "}
              Combining PPF with{" "}
              <Link href="/tinting/" className="text-[#22d65f] hover:underline">
                window tinting
              </Link>{" "}
              or{" "}
              <Link href="/detailing/" className="text-[#22d65f] hover:underline">
                full vehicle detailing
              </Link>{" "}
              on the same booking saves on labour. See our{" "}
              <Link
                href="/blog/window-tinting-stony-plain-spruce-grove/"
                className="text-[#22d65f] hover:underline"
              >
                complete window tinting guide
              </Link>{" "}
              for the full breakdown.
            </p>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">
            Frequently <span className="text-[#22d65f]">Asked</span>
          </h2>
          <div className="mt-3 h-px w-16 bg-gradient-to-r from-[#22d65f] to-transparent" />
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
                </summary>
                <div className="px-6 pb-6 pt-0 pl-[4.25rem] text-sm text-[#999] leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-16 relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#22d65f]/15 via-[#22d65f]/5 to-transparent" />
          <div className="absolute inset-0 hero-stripe opacity-30" />
          <div className="absolute inset-0 border border-[#22d65f]/20 rounded-2xl" />
          <div className="relative p-8 sm:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight">
              Ready to Protect Your{" "}
              <span className="text-[#22d65f] glow-accent">Vehicle?</span>
            </h2>
            <p className="mt-4 text-[#999] max-w-xl mx-auto leading-relaxed">
              PPF, ceramic coating, window tint, vinyl wraps, detailing —
              Accurate Autoworks handles it all in one Stony Plain shop.
              Serving Spruce Grove, Parkland County, Acheson, and Edmonton West.
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
      </div>

      <Script
        id="ppf-article-schema"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(ARTICLE_SCHEMA)}
      </Script>
      <Script
        id="ppf-faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(FAQ_SCHEMA)}
      </Script>
    </article>
  );
}
