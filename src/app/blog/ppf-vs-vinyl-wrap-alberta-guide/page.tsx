import Link from "next/link";
import type { Metadata } from "next";
import { BlogPostClient } from "./client";

export const metadata: Metadata = {
  title: "PPF vs Vinyl Wrap Alberta 2026",
  description:
    "Rock chips or new colour? Alberta's complete 2026 guide to PPF vs vinyl wrap, costs, lifespan, protection levels, and which one your vehicle actually needs.",
  alternates: {
    canonical:
      "https://www.accurateautoworks.ca/blog/ppf-vs-vinyl-wrap-alberta-guide/",
  },
  openGraph: {
    title: "PPF vs Vinyl Wrap Alberta 2026 | Accurate Autoworks",
    description:
      "Clear paint protection film or a full colour-change vinyl wrap? We break down both options for Stony Plain and Spruce Grove drivers, real costs, lifespan, and which one your truck actually needs.",
    type: "article",
    url: "https://www.accurateautoworks.ca/blog/ppf-vs-vinyl-wrap-alberta-guide/",
    locale: "en_CA",
    siteName: "Accurate Autoworks",
  },
};

const FAQ_DATA = [
  {
    q: "What is the main difference between PPF and vinyl wrap?",
    a: "PPF (paint protection film) is a thick, optically clear urethane film applied to protect your paint from rock chips, scratches, and UV damage. Vinyl wrap is a coloured or textured film applied over your paint to change how your vehicle looks. PPF is a protection product. Vinyl wrap is primarily an appearance product. The two serve different purposes, though they can be layered, more on that below.",
  },
  {
    q: "Does vinyl wrap protect paint like PPF does?",
    a: "Vinyl wrap provides a light barrier against minor scratches, bird droppings, and UV fade, but it is not designed to absorb impact like PPF. A rock chip or gravel strike that PPF would stop cold will punch right through vinyl. If rock chip protection is your goal, especially on Alberta highways like the Yellowhead or Highway 16A where gravel season is brutal, vinyl alone won't cut it. For genuine paint protection, PPF is the right tool.",
  },
  {
    q: "Does self-healing PPF actually work in Alberta's cold climate?",
    a: "Self-healing PPF relies on heat to activate the film's elastomeric top coat, allowing light surface scratches and swirl marks to disappear. In Alberta's winters, the healing process is slower in sub-zero temperatures, the film still works, it just heals more readily in warmer conditions. Parking in a heated garage overnight or running warm water over the film will trigger the self-healing even in winter. The protection against chips and impacts remains fully active year-round regardless of temperature.",
  },
  {
    q: "Which lasts longer in Alberta, PPF or vinyl wrap?",
    a: "Quality PPF typically lasts 7 to 10 years in Alberta conditions. Vinyl wrap, even premium cast vinyl from a reputable brand, typically runs 5 to 7 years before the edges begin lifting and the colour starts to fade or chalk. Alberta's extreme UV load in summer and the freeze-thaw stress on adhesive edges each winter accelerate wear on both products. Proper installation and regular maintenance washing extend the life of either film significantly.",
  },
  {
    q: "Can you put vinyl wrap over PPF?",
    a: "Yes, and this is actually the best of both worlds for drivers who want a colour change without sacrificing paint protection. You apply PPF first as the protection layer, then apply vinyl wrap on top. The vinyl changes the look; the PPF underneath guards the paint from everything the vinyl can't stop. At Accurate Autoworks, we can plan and execute a combined installation that layers both correctly. Call 780.818.9904 to talk through the options for your specific vehicle.",
  },
  {
    q: "Is PPF worth it for an everyday driver in Stony Plain?",
    a: "If you drive on highways around Stony Plain, Spruce Grove, or through Acheson's industrial corridor regularly, PPF on the front of your vehicle pays for itself in avoided paint damage. A single hood respray in Alberta runs $600 to $1,200 or more depending on the shop. A full front PPF package costs roughly the same but protects the vehicle for 7 to 10 years. For anyone with a newer truck, a luxury vehicle, or a daily driver on gravel-heavy routes, the math is straightforward.",
  },
  {
    q: "How much does PPF cost compared to vinyl wrap in Stony Plain?",
    a: "PPF is generally more expensive than vinyl wrap per square foot because the film is thicker, more technically demanding to install, and the material costs more. A full front PPF package (hood, fenders, bumper) runs roughly $1,200 to $2,000 in the Stony Plain area in 2026. A full colour-change vinyl wrap for a truck or SUV runs $3,500 to $6,000. For an exact quote on either service, contact Accurate Autoworks at 780.818.9904, pricing varies by vehicle size and complexity.",
  },
  {
    q: "Can I remove PPF or vinyl wrap later without damaging my paint?",
    a: "Yes, both PPF and vinyl wrap are fully removable without damaging factory paint when installed and removed correctly. The film adhesives are designed to release cleanly from clearcoat. Removal is best done by a professional using controlled heat, especially if the film has been on for several years and the adhesive has fully cured. Attempting cold removal on old film can sometimes leave adhesive residue, but a professional removal avoids this. One of the primary benefits of both products is that your original paint remains completely untouched underneath.",
  },
  {
    q: "Does PPF change the look of my vehicle?",
    a: "High-quality PPF is essentially invisible when installed correctly. The film has an optical clarity that preserves your paint's exact colour, depth, and gloss. Some premium PPF lines include a gloss-enhancement top coat that actually makes paint appear deeper and more saturated than bare clearcoat. There is also matte PPF available if you have a matte-finish vehicle or want to convert a gloss finish to satin. In all cases, PPF should be undetectable to a casual observer.",
  },
  {
    q: "Where can I get both PPF and vinyl wrap done near Stony Plain?",
    a: "Accurate Autoworks on Boulder Boulevard in Stony Plain offers both PPF installation and full vinyl wrap services, along with window tinting, ceramic coating, and auto detailing. You don't need to go to separate shops. We can plan a combined installation, give you a single quote, and handle both products on the same visit. We serve Stony Plain, Spruce Grove, Parkland County, Acheson, and Edmonton. Visit our PPF page or our wraps page to learn more, or call us directly at 780.818.9904.",
  },
];

const COST_DATA = [
  { service: 'PPF: Partial hood strip (18")', cost: "$300 - $500", type: "PPF", level: "optional" },
  { service: "PPF: Full front package (hood, fenders, bumper)", cost: "$1,200 - $2,000", type: "PPF", level: "recommended" },
  { service: "PPF: Full vehicle coverage", cost: "$4,000 - $8,000+", type: "PPF", level: "essential" },
  { service: "Vinyl wrap: Partial (roof or hood accent)", cost: "$400 - $800", type: "Vinyl", level: "optional" },
  { service: "Vinyl wrap: Full car (compact or sedan)", cost: "$2,500 - $4,000", type: "Vinyl", level: "recommended" },
  { service: "Vinyl wrap: Full truck or SUV", cost: "$3,500 - $6,000", type: "Vinyl", level: "recommended" },
  { service: "Combined: PPF front + full vinyl wrap", cost: "$4,500 - $8,500", type: "Combo", level: "essential" },
];

const COMPARISON_DATA = [
  {
    attribute: "Primary Purpose",
    ppf: "Protect paint from chips, scratches & UV",
    vinyl: "Change colour, finish, or branding",
    winner: "tie" as const,
  },
  {
    attribute: "Appearance Change",
    ppf: "None, optically clear (or matte option)",
    vinyl: "Full colour & finish transformation",
    winner: "vinyl" as const,
  },
  {
    attribute: "Rock Chip Protection",
    ppf: "Excellent, absorbs and deflects impacts",
    vinyl: "Minimal, not designed for impact",
    winner: "ppf" as const,
  },
  {
    attribute: "Self-Healing",
    ppf: "Yes, heat erases light swirls & scratches",
    vinyl: "No",
    winner: "ppf" as const,
  },
  {
    attribute: "Film Thickness",
    ppf: "8 mil (thick, impact-absorbing)",
    vinyl: "3-4 mil (thin, colour only)",
    winner: "ppf" as const,
  },
  {
    attribute: "Typical Alberta Lifespan",
    ppf: "7 - 10 years",
    vinyl: "5 - 7 years",
    winner: "ppf" as const,
  },
  {
    attribute: "Fully Removable",
    ppf: "Yes, paint untouched",
    vinyl: "Yes, paint untouched",
    winner: "tie" as const,
  },
  {
    attribute: "Typical Cost (full vehicle)",
    ppf: "$4,000 - $8,000+",
    vinyl: "$2,500 - $6,000",
    winner: "vinyl" as const,
  },
];

export default function PPFvsVinylWrapGuide() {
  const publishDate = "2026-05-09";
  const modifiedDate = "2026-05-09";

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
            Buyer&apos;s Guide, Alberta 2026
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black uppercase tracking-tight leading-[1.05]">
            PPF vs{" "}
            <span className="text-[#EEFF00] glow-accent">Vinyl Wrap</span>
            : Which Does Your Vehicle Actually Need?
          </h1>

          <p className="mt-8 text-lg sm:text-xl text-[#999] max-w-2xl mx-auto leading-relaxed">
            Two completely different products. One protects your paint; the other
            transforms your look. Alberta drivers often confuse them, here is the
            no-nonsense breakdown so you can make the right call for your vehicle.
          </p>

          <div className="mt-6 flex items-center justify-center gap-6 text-xs text-[#666] uppercase tracking-wider">
            <div className="flex items-center gap-2">
              <svg className="w-3.5 h-3.5 text-[#EEFF00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <time dateTime={publishDate}>May 9, 2026</time>
            </div>
            <span className="w-1 h-1 rounded-full bg-[#333]" />
            <div className="flex items-center gap-2">
              <svg className="w-3.5 h-3.5 text-[#EEFF00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>16 min read</span>
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
            Every week at{" "}
            <Link href="/ppf/" className="text-[#EEFF00] hover:underline">
              Accurate Autoworks
            </Link>
            , drivers pull up and ask some version of the same question: should I
            get PPF or a vinyl wrap? Sometimes they have already done their
            research and are comparing costs. Sometimes they think vinyl wrap will
            protect their paint from rock chips the same way PPF does. Sometimes
            they have a brand-new truck and want everything, but don&apos;t know where
            to start.
          </p>
          <p className="mt-4 text-[#ccc] leading-relaxed text-base sm:text-lg">
            This guide settles it. Paint protection film and vinyl wrap are
            fundamentally different products that solve different problems. Once
            you understand what each one actually does, the right answer for your
            situation becomes obvious. We will walk through how each product works,
            when to choose one over the other, what it costs in the Stony Plain
            and Spruce Grove market in 2026, and what happens when you combine
            both.
          </p>
          <p className="mt-4 text-[#ccc] leading-relaxed text-base sm:text-lg">
            Alberta roads are among the most demanding environments for vehicle
            paint in Canada. Gravel highways, freeze-thaw cycles, intense UV load
            in summer, and road salt through a six-month winter, all of that
            factors into which product makes the most sense for your specific
            vehicle and how you drive it.
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
                { href: "#what-is-ppf", label: "What Is PPF?" },
                { href: "#what-is-vinyl-wrap", label: "What Is Vinyl Wrap?" },
                { href: "#comparison", label: "Head-to-Head Comparison" },
                { href: "#when-ppf", label: "When to Choose PPF" },
                { href: "#when-vinyl", label: "When to Choose Vinyl Wrap" },
                { href: "#combine-both", label: "Running Both Products" },
                { href: "#cost-guide", label: "2026 Cost Breakdown" },
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

        {/* Section 1: What Is PPF */}
        <section id="what-is-ppf" className="mt-16 scroll-mt-24">
          <SectionHeading number="01" highlight="(Paint Protection Film)">
            What Is PPF{" "}
          </SectionHeading>
          <p className="mt-6 text-[#ccc] leading-relaxed text-base">
            Paint protection film, also called clear bra, PPF, or rock chip
            film, is a thick, optically clear urethane film applied directly
            over your vehicle&apos;s painted surfaces. It was originally developed by
            the U.S. military in the 1970s to protect helicopter rotor blades and
            fuel lines from abrasion, and the automotive version has evolved
            significantly since then.
          </p>
          <p className="mt-4 text-[#ccc] leading-relaxed text-base">
            Modern{" "}
            <Link href="/ppf/" className="text-[#EEFF00] hover:underline">
              automotive PPF
            </Link>{" "}
            is typically 8 mil thick (roughly 0.2 mm), which sounds thin but is
            substantial compared to vinyl wrap at 3 to 4 mil. That thickness is
            what allows PPF to absorb and distribute impact energy from gravel,
            road debris, and stone chips, protecting the paint underneath from
            chipping, cracking, or scratching.
          </p>

          <div className="mt-8 space-y-4">
            {[
              {
                title: "Self-Healing Top Coat",
                detail:
                  "Premium PPF lines feature a polyurethane elastomeric top coat that physically heals light surface scratches and swirl marks when exposed to heat. Park your vehicle in the sun for 20 minutes or pour warm water over the scratched area, and the film's surface returns to smooth. The underlying impact protection remains intact regardless of temperature.",
              },
              {
                title: "Optically Clear",
                detail:
                  "Quality PPF is invisible when installed correctly. There is no colour shift, no film texture visible from a normal viewing distance, and no change to your paint's depth or gloss. In fact, many premium PPF products include a gloss-enhancement layer that makes paint appear richer than bare clearcoat. Your factory colour stays exactly as the manufacturer intended.",
              },
              {
                title: "Hydrophobic Surface",
                detail:
                  "Most modern PPF includes a hydrophobic top coat that causes water to bead and roll off aggressively. This makes the vehicle easier to wash, reduces water spotting, and means road grime and bug splatter release more readily than they would from bare paint or clearcoat.",
              },
              {
                title: "Permanent vs Removable",
                detail:
                  "PPF is designed to be a long-term installation, typically 7 to 10 years, but it is fully removable without damaging factory paint. Professional removal uses controlled heat to soften the adhesive, allowing clean release. The paint underneath comes out in the same condition it went under, or better, since it has been shielded from UV and environmental attack the entire time.",
              },
            ].map((feature) => (
              <div key={feature.title} className="card-gradient rounded-2xl p-6">
                <h3 className="text-sm font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-[#999] leading-relaxed">{feature.detail}</p>
              </div>
            ))}
          </div>

          <Callout variant="info">
            The PPF industry has standardized around a few major manufacturers.{" "}
            <a
              href="https://www.xpel.com/products/paint-protection-film"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#EEFF00] hover:underline"
            >
              XPEL is one of the leading PPF brands
            </a>{" "}
            with a comprehensive product line covering everything from entry-level
            protection to track-grade film. At{" "}
            <Link href="/ppf/" className="text-[#EEFF00] hover:underline">
              Accurate Autoworks
            </Link>
            , we use premium PPF products and cut each panel using computer-aided
            patterns specific to your vehicle, not hand-trimmed guesswork.
          </Callout>
        </section>

        {/* Section 2: What Is Vinyl Wrap */}
        <section id="what-is-vinyl-wrap" className="mt-16 scroll-mt-24">
          <SectionHeading number="02" highlight="(Vehicle Wraps)">
            What Is Vinyl Wrap{" "}
          </SectionHeading>
          <p className="mt-6 text-[#ccc] leading-relaxed text-base">
            Vinyl wrap is a pressure-sensitive adhesive film available in
            thousands of colours, finishes, and textures. It is applied over your
            vehicle&apos;s painted panels to change how the vehicle looks, a complete
            colour change, a two-tone treatment, a matte or satin finish conversion,
            a chrome delete, or a full custom graphic. It is a transformation
            product, not a protection product.
          </p>
          <p className="mt-4 text-[#ccc] leading-relaxed text-base">
            That distinction matters. Vinyl wrap does provide a light barrier
            against minor surface scratches, bird dropping acids, and UV
            discolouration on the paint underneath, but it is a thin film (3 to
            4 mil) with no impact-absorbing capacity. A gravel strike that would
            chip bare paint will also punch through vinyl. It is not a substitute
            for PPF if paint protection is your goal.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-5">
            {[
              {
                finish: "Gloss",
                description:
                  "Mirrors the look of factory paint at a fraction of the cost of a respray. Offers a deep, wet finish in virtually any colour. Most popular for full colour-change wraps.",
              },
              {
                finish: "Matte / Satin",
                description:
                  "Flat to semi-flat finish that gives vehicles an aggressive, custom appearance. Extremely popular on trucks and performance cars. Impossible to achieve with standard spray paint without a specialist.",
              },
              {
                finish: "Chrome / Metallic",
                description:
                  "Mirror-finish or metallic vinyl for a bold, show-quality look. More demanding to install and maintain, but extremely eye-catching for show vehicles, custom builds, or fleet branding.",
              },
              {
                finish: "Colour-Shift / Satin Pearl",
                description:
                  "Films that shift colour depending on viewing angle and lighting, purple to teal, green to gold, etc. One of the hottest wrap trends in 2026 for standout custom builds.",
              },
            ].map((item) => (
              <div key={item.finish} className="card-gradient rounded-2xl p-5">
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#EEFF00] mb-2">
                  {item.finish}
                </h3>
                <p className="text-sm text-[#999] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-[#ccc] leading-relaxed text-base">
            Like PPF, quality{" "}
            <Link href="/wraps/" className="text-[#EEFF00] hover:underline">
              vinyl wrap
            </Link>{" "}
            is fully removable without damaging factory paint, provided it was
            installed correctly and has not been on the vehicle past its rated
            lifespan. This makes wraps especially attractive for leased vehicles,
            fleet trucks, or anyone who wants to preserve factory paint value while
            driving a custom-looking vehicle. It is also how businesses run vehicle
            branding without permanently altering their fleet.
          </p>

          <Callout variant="info">
            Cast vinyl is the professional standard for full wraps. It conforms to
            curves, recesses, and complex body lines without lifting. Calendered
            vinyl, cheaper and stiffer, is acceptable for flat surfaces like
            signs and banners but should not be used for vehicle wraps.{" "}
            <a
              href="https://www.3mcanada.ca/3M/en_CA/graphics-ca/products/wrap-films/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#EEFF00] hover:underline"
            >
              3M Canada&apos;s wrap film lineup
            </a>{" "}
            is one benchmark for professional-grade cast vinyl, though we work
            with multiple premium brands depending on the application.
          </Callout>
        </section>

        {/* Section 3: Head-to-Head Comparison */}
        <section id="comparison" className="mt-16 scroll-mt-24">
          <SectionHeading number="03" highlight="Comparison">
            PPF vs Vinyl Wrap, Head-to-Head{" "}
          </SectionHeading>
          <p className="mt-6 text-[#ccc] leading-relaxed text-base">
            Here is a direct, attribute-by-attribute comparison of both products.
            The goal column shows which product wins in each category, or whether
            it is a tie.
          </p>

          {/* Desktop table */}
          <div className="mt-8 hidden sm:block rounded-2xl overflow-hidden border border-[#2a2a2a]">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#EEFF00]/[0.06]">
                  {["Attribute", "PPF", "Vinyl Wrap", "Edge"].map((h) => (
                    <th key={h} className="text-left py-4 px-5 text-xs font-bold uppercase tracking-widest text-[#EEFF00]">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-[#ccc]">
                {COMPARISON_DATA.map((row, i) => (
                  <tr
                    key={row.attribute}
                    className={`border-t border-[#1e1e1e] transition-colors hover:bg-[#EEFF00]/[0.03] ${
                      i % 2 === 0 ? "bg-[#141414]" : "bg-[#0f0f0f]"
                    }`}
                  >
                    <td className="py-4 px-5 font-bold text-white text-xs uppercase tracking-wide">
                      {row.attribute}
                    </td>
                    <td className="py-4 px-5 text-xs">{row.ppf}</td>
                    <td className="py-4 px-5 text-xs">{row.vinyl}</td>
                    <td className="py-4 px-5">
                      <ComparisonBadge winner={row.winner} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="mt-8 sm:hidden space-y-4">
            {COMPARISON_DATA.map((row) => (
              <div key={row.attribute} className="card-gradient rounded-2xl p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wide text-white">
                    {row.attribute}
                  </span>
                  <ComparisonBadge winner={row.winner} />
                </div>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <div className="text-[#EEFF00] font-bold mb-1">PPF</div>
                    <div className="text-[#999] leading-relaxed">{row.ppf}</div>
                  </div>
                  <div>
                    <div className="text-white font-bold mb-1">Vinyl</div>
                    <div className="text-[#999] leading-relaxed">{row.vinyl}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Callout variant="tip">
            The single most important thing to understand from this table: PPF and
            vinyl wrap are not competing products, they are complementary ones.
            PPF wins on protection; vinyl wins on appearance transformation. The
            best outcome for many drivers is running both.
          </Callout>
        </section>

        {/* Section 4: When to Choose PPF */}
        <section id="when-ppf" className="mt-16 scroll-mt-24">
          <SectionHeading number="04" highlight="the Right Choice">
            When PPF Is{" "}
          </SectionHeading>
          <p className="mt-6 text-[#ccc] leading-relaxed text-base">
            Choose{" "}
            <Link href="/ppf/" className="text-[#EEFF00] hover:underline">
              paint protection film
            </Link>{" "}
            when your primary concern is keeping your vehicle&apos;s paint in
            original condition against physical damage. Here are the specific
            situations where PPF is the clear winner.
          </p>

          <div className="mt-8 space-y-5">
            <div className="relative rounded-2xl overflow-hidden border border-[#EEFF00]/30 bg-gradient-to-br from-[#EEFF00]/[0.06] to-[#141414]">
              <div className="absolute top-0 right-0 px-3 py-1 bg-[#EEFF00] text-black text-[10px] font-bold uppercase tracking-widest rounded-bl-lg">
                Most Common
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="text-sm font-bold uppercase tracking-wide text-white mb-3">
                  You Drive Highway Routes Regularly
                </h3>
                <p className="text-sm text-[#999] leading-relaxed">
                  If your daily commute runs through Acheson, along Highway 16A,
                  the Yellowhead, or any of the gravel and chip-seal roads common
                  in Parkland County, your front end is taking a constant beating
                  from flying rock debris. The leading edge of the hood, the front
                  bumper, and the lower portions of the front fenders are the
                  highest-impact zones. A full front PPF package covering those
                  areas turns years of guaranteed chip damage into years of
                  untouched factory paint.
                </p>
              </div>
            </div>

            <div className="card-gradient rounded-2xl p-6 sm:p-8">
              <h3 className="text-sm font-bold uppercase tracking-wide text-white mb-3">
                You Have a New or High-Value Vehicle
              </h3>
              <p className="text-sm text-[#999] leading-relaxed">
                The return on PPF is highest when applied to a new vehicle before
                the first chips and scratches appear. Every chip that does not
                happen is paint damage you will not need to repair before selling
                or trading in. On a $60,000 to $100,000 truck, the cost of PPF is
                a rounding error compared to the resale impact of a visibly chipped
                and paint-corrected front end. Apply it on delivery day and drive
                with confidence.
              </p>
            </div>

            <div className="card-gradient rounded-2xl p-6 sm:p-8">
              <h3 className="text-sm font-bold uppercase tracking-wide text-white mb-3">
                You Want to Keep the Factory Look
              </h3>
              <p className="text-sm text-[#999] leading-relaxed">
                Not every driver wants a colour change or a custom finish. If you
                love your factory colour and just want it to stay looking the way
                it did the day you bought the vehicle, PPF is exactly the right
                tool. It is invisible, it protects, and it keeps the vehicle
                looking factory-fresh for years while everything around it is
                getting beat up on Alberta roads.
              </p>
            </div>

            <div className="card-gradient rounded-2xl p-6 sm:p-8">
              <h3 className="text-sm font-bold uppercase tracking-wide text-white mb-3">
                You Plan to Resell or Return a Lease
              </h3>
              <p className="text-sm text-[#999] leading-relaxed">
                PPF is particularly smart for leased vehicles where you face
                end-of-lease damage charges for paint chips, scratches, and rock
                damage. Having PPF professionally removed at lease return
                eliminates that inspection anxiety, the paint underneath will
                typically be in better condition than a comparable vehicle that
                was never protected. For fleet operators in Acheson and the
                Edmonton West industrial area, PPF on the front ends of work trucks
                is a straightforward cost-benefit win.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: When to Choose Vinyl Wrap */}
        <section id="when-vinyl" className="mt-16 scroll-mt-24">
          <SectionHeading number="05" highlight="the Right Choice">
            When Vinyl Wrap Is{" "}
          </SectionHeading>
          <p className="mt-6 text-[#ccc] leading-relaxed text-base">
            Choose{" "}
            <Link href="/wraps/" className="text-[#EEFF00] hover:underline">
              vinyl wrap
            </Link>{" "}
            when you want to change how your vehicle looks, whether that is a
            personal custom build, a business vehicle branding, or a finish
            conversion that would cost a fortune to achieve with paint.
          </p>

          <div className="mt-8 space-y-5">
            <div className="relative rounded-2xl overflow-hidden border border-[#EEFF00]/30 bg-gradient-to-br from-[#EEFF00]/[0.06] to-[#141414]">
              <div className="absolute top-0 right-0 px-3 py-1 bg-[#EEFF00] text-black text-[10px] font-bold uppercase tracking-widest rounded-bl-lg">
                Top Reason
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="text-sm font-bold uppercase tracking-wide text-white mb-3">
                  You Want a New Colour or Custom Finish
                </h3>
                <p className="text-sm text-[#999] leading-relaxed">
                  A quality full wrap transforms your vehicle completely, colour,
                  finish, texture, at a fraction of the cost of a professional
                  respray. A respray requires disassembly, bodywork prep, booth
                  time, and colour matching, and once it is done, it is permanent.
                  A vinyl wrap can be removed later if you want the factory colour
                  back, changed to a different colour, or updated as your taste
                  evolves. That flexibility is something paint can never offer.
                  Matte black on a 2024 F-150? Satin army green on a Ram 1500?
                  Done in a few days, not weeks.
                </p>
              </div>
            </div>

            <div className="card-gradient rounded-2xl p-6 sm:p-8">
              <h3 className="text-sm font-bold uppercase tracking-wide text-white mb-3">
                You Have a Business Vehicle or Fleet
              </h3>
              <p className="text-sm text-[#999] leading-relaxed">
                Vehicle wraps are one of the most cost-effective forms of local
                advertising available to small businesses. A wrapped work truck
                driving through Stony Plain, Spruce Grove, or Acheson every day
                generates thousands of impressions per day at a one-time cost. The
                graphic can be updated when your branding changes. When the vehicle
                is sold, the wrap comes off clean. For contractors, trades, and
                service businesses in Parkland County, this is a proven ROI. Our{" "}
                <Link href="/print/" className="text-[#EEFF00] hover:underline">
                  commercial signs and print services
                </Link>{" "}
                complement full fleet wraps with matching storefront and vehicle
                graphics.
              </p>
            </div>

            <div className="card-gradient rounded-2xl p-6 sm:p-8">
              <h3 className="text-sm font-bold uppercase tracking-wide text-white mb-3">
                You Want Matte, Satin, or Specialty Finishes
              </h3>
              <p className="text-sm text-[#999] leading-relaxed">
                Certain finishes are simply not achievable with factory paint
                without extremely expensive specialist work. Matte and satin
                finishes in particular require specialized clearcoat processes that
                most body shops are not set up for. A professional vinyl wrap in
                matte black, satin charcoal, or any other flat finish delivers
                those results cleanly, consistently, and reversibly. The same goes
                for colour-shift films, brushed metal textures, and carbon fibre
                pattern accents.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: Running Both */}
        <section id="combine-both" className="mt-16 scroll-mt-24">
          <SectionHeading number="06" highlight="Both Together">
            Running PPF and Vinyl{" "}
          </SectionHeading>
          <p className="mt-6 text-[#ccc] leading-relaxed text-base">
            Here is the answer for drivers who want everything, a custom look and
            genuine paint protection: run PPF as the base layer, then vinyl wrap
            on top.
          </p>
          <p className="mt-4 text-[#ccc] leading-relaxed text-base">
            This approach is increasingly common at Accurate Autoworks because it
            solves both problems cleanly. The PPF underneath provides impact
            protection, self-healing, and UV shielding. The vinyl wrap on top
            delivers the custom colour or finish the owner wants. If the vinyl gets
            scuffed or damaged, it can be repaired or replaced without touching
            the PPF. When the time comes to remove the wrap, the paint underneath
, protected by PPF the entire time, comes off in showroom condition.
          </p>

          <div className="mt-8 relative rounded-2xl overflow-hidden border border-[#EEFF00]/20">
            <div className="absolute inset-0 bg-gradient-to-r from-[#EEFF00]/5 to-transparent" />
            <div className="relative p-6 sm:p-8">
              <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-4">
                The Recommended Combination
              </h3>
              <div className="grid sm:grid-cols-3 gap-4 text-sm">
                {[
                  { step: "01", title: "Full Front PPF", desc: "Hood, fenders, bumper, mirrors, A-pillars, the high-impact zones that face the road." },
                  { step: "02", title: "Vinyl Wrap Overall", desc: "Applied over the PPF and the rest of the vehicle to deliver your chosen colour and finish." },
                  { step: "03", title: "Long-Term Protection", desc: "PPF shields the paint. Vinyl carries the look. Both remove cleanly when it is time." },
                ].map((item) => (
                  <div key={item.step} className="flex gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#EEFF00] text-black text-xs font-black flex items-center justify-center">
                      {item.step}
                    </span>
                    <div>
                      <div className="font-bold text-white text-xs uppercase tracking-wide mb-1">{item.title}</div>
                      <div className="text-[#999] text-xs leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Callout variant="tip">
            Planning a combined PPF and wrap installation requires sequencing the
            work correctly. PPF goes on first; vinyl goes over it. At Accurate
            Autoworks, we handle both in-house so the process is planned,
            sequenced, and executed correctly. While your vehicle is already in
            for a wrap or PPF job, it is also a good time to consider{" "}
            <Link href="/detailing/" className="text-[#EEFF00] hover:underline">
              a professional detail
            </Link>{" "}
            to get the paint in the cleanest possible condition before either film
            goes on.
          </Callout>
        </section>

        {/* Section 7: Cost Breakdown */}
        <section id="cost-guide" className="mt-16 scroll-mt-24">
          <SectionHeading number="07" highlight="Breakdown 2026">
            Alberta Cost{" "}
          </SectionHeading>
          <p className="mt-6 text-[#ccc] leading-relaxed text-base">
            Here is realistic pricing for professional PPF and vinyl wrap
            installations in the Stony Plain and Spruce Grove market in 2026.
            These ranges reflect quality professional work, not strip-mall
            operations using budget materials.
          </p>

          {/* Desktop table */}
          <div className="mt-8 hidden sm:block rounded-2xl overflow-hidden border border-[#2a2a2a]">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#EEFF00]/[0.06]">
                  <th className="text-left py-4 px-6 text-xs font-bold uppercase tracking-widest text-[#EEFF00]">Service</th>
                  <th className="text-left py-4 px-6 text-xs font-bold uppercase tracking-widest text-[#EEFF00]">Type</th>
                  <th className="text-left py-4 px-6 text-xs font-bold uppercase tracking-widest text-[#EEFF00]">Cost Range</th>
                  <th className="text-left py-4 px-6 text-xs font-bold uppercase tracking-widest text-[#EEFF00]">Notes</th>
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
                    <td className="py-4 px-6 text-xs">{row.service}</td>
                    <td className="py-4 px-6">
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full border ${
                        row.type === "PPF"
                          ? "bg-[#EEFF00]/15 text-[#EEFF00] border-[#EEFF00]/30"
                          : row.type === "Vinyl"
                          ? "bg-white/5 text-white border-white/20"
                          : "bg-blue-500/10 text-blue-400 border-blue-500/20"
                      }`}>{row.type}</span>
                    </td>
                    <td className="py-4 px-6 font-mono text-white font-bold text-xs">
                      {row.cost}
                    </td>
                    <td className="py-4 px-6">
                      <PriorityBadge level={row.level} label={
                        row.level === "essential" ? "Popular" : row.level === "recommended" ? "Recommended" : "Optional"
                      } />
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
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${
                    row.type === "PPF"
                      ? "bg-[#EEFF00]/15 text-[#EEFF00] border-[#EEFF00]/30"
                      : row.type === "Vinyl"
                      ? "bg-white/5 text-white border-white/20"
                      : "bg-blue-500/10 text-blue-400 border-blue-500/20"
                  }`}>{row.type}</span>
                </div>
                <div className="text-sm text-[#ccc] mb-2">{row.service}</div>
                <div className="font-mono text-white font-bold text-sm">{row.cost}</div>
              </div>
            ))}
          </div>

          <p className="mt-4 text-xs text-[#555] italic">
            * Prices are approximate for the Stony Plain / Spruce Grove area as
            of 2026. Final costs vary based on vehicle size, paint condition,
            panel complexity, and film brand selected. Call 780.818.9904 for a
            specific quote on your vehicle.
          </p>

          <Callout variant="tip">
            <strong className="text-white">Bundling saves money and time:</strong>{" "}
            Booking PPF and a vinyl wrap together, or pairing either service with{" "}
            <Link href="/tinting/" className="text-[#EEFF00] hover:underline">
              window tinting
            </Link>{" "}
            or{" "}
            <Link href="/detailing/" className="text-[#EEFF00] hover:underline">
              a full detail
            </Link>{" "}
, often reduces total labour time since the vehicle is already fully
            prepped and in the shop. Ask about combined booking when you call
            Accurate Autoworks.
          </Callout>
        </section>

        {/* Section 8: FAQ */}
        <section id="faq" className="mt-16 scroll-mt-24">
          <SectionHeading number="08" highlight="Asked Questions">
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
              Free Consultation
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight">
              PPF, Wrap, or{" "}
              <span className="text-[#EEFF00] glow-accent">Both?</span>
            </h2>
            <p className="mt-4 text-[#999] max-w-xl mx-auto leading-relaxed">
              Accurate Autoworks installs professional PPF and vinyl wraps in
              Stony Plain. Serving Spruce Grove, Parkland County, Acheson, and
              Edmonton West. Come in for a free consultation, we will tell you
              straight what makes sense for your vehicle and budget.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Book a Free Consultation
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
                Stony Plain, Alberta. Helping local drivers protect and customize
                their vehicles since 2023. PPF, vinyl wraps, window tinting,
                ceramic coating, detailing, and commercial print under one roof.
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

      {/* Schema Markup: Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "PPF vs Vinyl Wrap: Which Does Your Vehicle Actually Need? (Alberta 2026)",
            description:
              "Complete Alberta 2026 guide to PPF vs vinyl wrap, what each product does, when to choose each, costs, and how to combine both. Accurate Autoworks, Stony Plain.",
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
                "https://www.accurateautoworks.ca/blog/ppf-vs-vinyl-wrap-alberta-guide/",
            },
            keywords:
              "ppf vs vinyl wrap, paint protection film vs vinyl wrap alberta, vinyl wrap or ppf stony plain, clear bra vs wrap spruce grove, vehicle protection alberta 2026",
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
              "Stony Plain's auto customization shop offering PPF, vinyl wraps, window tinting, ceramic coating, detailing, and commercial print.",
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

function ComparisonBadge({ winner }: { winner: "ppf" | "vinyl" | "tie" }) {
  if (winner === "ppf") {
    return (
      <span className="inline-block px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full border bg-[#EEFF00]/15 text-[#EEFF00] border-[#EEFF00]/30">
        PPF
      </span>
    );
  }
  if (winner === "vinyl") {
    return (
      <span className="inline-block px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full border bg-white/5 text-white border-white/20">
        Vinyl
      </span>
    );
  }
  return (
    <span className="inline-block px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full border bg-[#666]/10 text-[#999] border-[#666]/20">
      Tie
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
