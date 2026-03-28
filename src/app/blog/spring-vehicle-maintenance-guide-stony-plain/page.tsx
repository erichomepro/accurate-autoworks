import Link from "next/link";
import type { Metadata } from "next";

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

export default function SpringMaintenanceGuidePage() {
  const publishDate = "2026-03-27";
  const modifiedDate = "2026-03-27";

  return (
    <article className="pb-20">
      {/* Hero */}
      <header className="pt-24 sm:pt-32 pb-12 sm:pb-16 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <div className="inline-block px-4 py-1.5 mb-6 text-xs font-bold uppercase tracking-[3px] text-[#22d65f] border border-[#22d65f]/30 rounded-full">
            Auto Care Guide
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight leading-[1.1]">
            The Complete Spring Vehicle Maintenance Guide for{" "}
            <span className="text-[#22d65f] glow-accent">
              Stony Plain &amp; Spruce Grove
            </span>{" "}
            Drivers
          </h1>
          <p className="mt-6 text-lg text-[#999] max-w-2xl mx-auto leading-relaxed">
            Alberta winters are brutal on vehicles. Here is everything you need
            to do this spring to undo the damage, protect your investment, and
            get your ride ready for the warm months ahead.
          </p>
          <div className="mt-4 flex items-center justify-center gap-4 text-xs text-[#666] uppercase tracking-wider">
            <time dateTime={publishDate}>March 27, 2026</time>
            <span className="text-[#333]">|</span>
            <span>12 min read</span>
          </div>
        </div>
      </header>

      {/* Article Body */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Intro */}
        <div className="prose-section">
          <p className="text-[#ccc] leading-relaxed text-base">
            If you live in Stony Plain, Spruce Grove, Parkland County, or
            anywhere in the Edmonton West corridor, your vehicle just survived
            five months of road salt, gravel, freeze-thaw cycles, and
            temperatures that dipped below minus 30. That takes a real toll on
            everything from your paint and tires to your windshield and
            undercarriage.
          </p>
          <p className="mt-4 text-[#ccc] leading-relaxed text-base">
            Spring is when you have a window to fix the damage before it gets
            worse and to set your vehicle up for a smooth, problem-free summer.
            This guide covers every maintenance item that matters for local
            drivers, with real cost estimates and practical advice from the team
            at Accurate Autoworks.
          </p>
        </div>

        {/* Table of Contents */}
        <nav className="mt-10 card-gradient rounded-xl p-6 sm:p-8">
          <h2 className="text-sm font-bold uppercase tracking-widest text-[#22d65f] mb-4">
            What We Cover
          </h2>
          <ol className="space-y-2 text-sm text-[#999]">
            <li>
              <a
                href="#tire-changeover"
                className="hover:text-[#22d65f] transition-colors"
              >
                1. Seasonal Tire Changeover
              </a>
            </li>
            <li>
              <a
                href="#wash-and-detail"
                className="hover:text-[#22d65f] transition-colors"
              >
                2. Deep Wash and Spring Detail
              </a>
            </li>
            <li>
              <a
                href="#paint-protection"
                className="hover:text-[#22d65f] transition-colors"
              >
                3. Paint Protection After Winter
              </a>
            </li>
            <li>
              <a
                href="#tint-check"
                className="hover:text-[#22d65f] transition-colors"
              >
                4. Window Tint Inspection
              </a>
            </li>
            <li>
              <a
                href="#undercarriage"
                className="hover:text-[#22d65f] transition-colors"
              >
                5. Undercarriage and Salt Damage
              </a>
            </li>
            <li>
              <a
                href="#fluids-and-wipers"
                className="hover:text-[#22d65f] transition-colors"
              >
                6. Fluids, Wipers, and Visibility
              </a>
            </li>
            <li>
              <a
                href="#cost-comparison"
                className="hover:text-[#22d65f] transition-colors"
              >
                7. Spring Maintenance Cost Guide
              </a>
            </li>
            <li>
              <a
                href="#checklist"
                className="hover:text-[#22d65f] transition-colors"
              >
                8. Your Printable Spring Checklist
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className="hover:text-[#22d65f] transition-colors"
              >
                9. Frequently Asked Questions
              </a>
            </li>
          </ol>
        </nav>

        {/* Section 1: Tire Changeover */}
        <section id="tire-changeover" className="mt-14">
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">
            1. Seasonal Tire{" "}
            <span className="text-[#22d65f]">Changeover</span>
          </h2>
          <p className="mt-4 text-[#ccc] leading-relaxed text-base">
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

          <div className="mt-6 card-gradient rounded-xl p-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-[#22d65f] mb-3">
              What a Proper Changeover Includes
            </h3>
            <ul className="space-y-2 text-sm text-[#ccc]">
              <li className="flex items-start gap-3">
                <span className="text-[#22d65f] font-bold mt-0.5">
                  &#10003;
                </span>
                <span>
                  Dismount winter tires and mount summer or all-season tires
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#22d65f] font-bold mt-0.5">
                  &#10003;
                </span>
                <span>Balance all four wheels on a Hunter balancing machine</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#22d65f] font-bold mt-0.5">
                  &#10003;
                </span>
                <span>Torque lug nuts to factory specification</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#22d65f] font-bold mt-0.5">
                  &#10003;
                </span>
                <span>TPMS sensor reset</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#22d65f] font-bold mt-0.5">
                  &#10003;
                </span>
                <span>
                  Tread depth and sidewall inspection on both sets
                </span>
              </li>
            </ul>
          </div>

          <p className="mt-4 text-[#999] leading-relaxed text-sm">
            <strong className="text-white">Local tip:</strong> Book your
            changeover early. The second and third weeks of April are the
            busiest at every tire shop in Parkland County. At{" "}
            <Link href="/tires" className="text-[#22d65f] hover:underline">
              Accurate Autoworks
            </Link>
            , a standard changeover runs $80 to $140 depending on vehicle size.
            If your tires are already on rims, a swap is $40 to $60.
          </p>
        </section>

        {/* Section 2: Wash and Detail */}
        <section id="wash-and-detail" className="mt-14">
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">
            2. Deep Wash and Spring{" "}
            <span className="text-[#22d65f]">Detail</span>
          </h2>
          <p className="mt-4 text-[#ccc] leading-relaxed text-base">
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
          <p className="mt-4 text-[#999] leading-relaxed text-sm">
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
          </p>
        </section>

        {/* Section 3: Paint Protection */}
        <section id="paint-protection" className="mt-14">
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">
            3. Paint Protection{" "}
            <span className="text-[#22d65f]">After Winter</span>
          </h2>
          <p className="mt-4 text-[#ccc] leading-relaxed text-base">
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

          <div className="mt-6 space-y-4">
            <div className="card-gradient rounded-xl p-6">
              <h3 className="text-sm font-bold uppercase tracking-wide text-white mb-2">
                Wax or Sealant — $50 to $150
              </h3>
              <p className="text-sm text-[#999] leading-relaxed">
                The most affordable option. A quality carnauba wax or synthetic
                sealant adds a layer of protection that lasts 2 to 4 months.
                Applied during your spring detail, it protects against UV,
                light scratches, and makes washing easier. Good for daily
                drivers on a budget.
              </p>
            </div>
            <div className="card-gradient rounded-xl p-6">
              <h3 className="text-sm font-bold uppercase tracking-wide text-white mb-2">
                Ceramic Coating — $500 to $1,500
              </h3>
              <p className="text-sm text-[#999] leading-relaxed">
                A semi-permanent layer of protection that bonds to your paint
                and lasts 2 to 5 years. Hydrophobic (water beads and rolls
                off), UV resistant, and extremely glossy. Best applied after
                paint correction to seal in a flawless finish. Worth it for
                newer vehicles and anyone who wants low-maintenance protection.
              </p>
            </div>
            <div className="card-gradient rounded-xl p-6">
              <h3 className="text-sm font-bold uppercase tracking-wide text-white mb-2">
                Paint Protection Film (PPF) — $800 to $5,000+
              </h3>
              <p className="text-sm text-[#999] leading-relaxed">
                A clear, self-healing film applied to high-impact areas like
                the front bumper, hood, fenders, and mirrors. PPF physically
                absorbs rock chips, bug damage, and road debris that would
                otherwise chip your paint. Ideal for trucks running gravel
                roads in the Acheson industrial area or anyone driving Highway
                16A regularly. See our{" "}
                <Link
                  href="/ppf"
                  className="text-[#22d65f] hover:underline"
                >
                  PPF service page
                </Link>{" "}
                for details.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Tint Check */}
        <section id="tint-check" className="mt-14">
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">
            4. Window Tint{" "}
            <span className="text-[#22d65f]">Inspection</span>
          </h2>
          <p className="mt-4 text-[#ccc] leading-relaxed text-base">
            If your vehicle has window tint, spring is the time to inspect it
            for damage. The freeze-thaw cycle that Alberta puts vehicles through
            can cause older or low-quality tint to bubble, peel, or crack along
            the edges. This is especially common on rear windows with defroster
            lines and on side windows that get the most ice scraper contact.
          </p>
          <p className="mt-4 text-[#ccc] leading-relaxed text-base">
            Signs your tint needs attention:
          </p>
          <ul className="mt-3 space-y-2 text-sm text-[#ccc]">
            <li className="flex items-start gap-3">
              <span className="text-[#22d65f] font-bold mt-0.5">
                &#10003;
              </span>
              <span>Purple or faded colour, especially on side windows</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#22d65f] font-bold mt-0.5">
                &#10003;
              </span>
              <span>Bubbles forming under the film</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#22d65f] font-bold mt-0.5">
                &#10003;
              </span>
              <span>Edges peeling or curling away from the glass</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#22d65f] font-bold mt-0.5">
                &#10003;
              </span>
              <span>
                Scratches from ice scrapers that now catch light and obstruct
                vision
              </span>
            </li>
          </ul>
          <p className="mt-4 text-[#999] leading-relaxed text-sm">
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
          </p>
        </section>

        {/* Section 5: Undercarriage */}
        <section id="undercarriage" className="mt-14">
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">
            5. Undercarriage and{" "}
            <span className="text-[#22d65f]">Salt Damage</span>
          </h2>
          <p className="mt-4 text-[#ccc] leading-relaxed text-base">
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
          <ul className="mt-3 space-y-2 text-sm text-[#ccc]">
            <li className="flex items-start gap-3">
              <span className="text-[#22d65f] font-bold mt-0.5">
                &#10003;
              </span>
              <span>
                Rust bubbles forming on rocker panels or wheel arches
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#22d65f] font-bold mt-0.5">
                &#10003;
              </span>
              <span>
                Brake dust buildup that is heavier than normal (could indicate
                corroded rotors)
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#22d65f] font-bold mt-0.5">
                &#10003;
              </span>
              <span>
                White or brownish residue caked on frame rails and suspension
                components
              </span>
            </li>
          </ul>
        </section>

        {/* Section 6: Fluids and Wipers */}
        <section id="fluids-and-wipers" className="mt-14">
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">
            6. Fluids, Wipers, and{" "}
            <span className="text-[#22d65f]">Visibility</span>
          </h2>
          <p className="mt-4 text-[#ccc] leading-relaxed text-base">
            Alberta winter is hard on visibility components. Your wiper blades
            have spent months scraping ice and pushing heavy snow. By spring,
            most blades are torn, streaking, or chattering across the glass. A
            fresh set of wipers costs $20 to $50 and takes five minutes to
            install. There is no reason to start spring with bad wipers.
          </p>
          <p className="mt-4 text-[#ccc] leading-relaxed text-base">
            While you are at it, check these fluid levels:
          </p>
          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            <div className="card-gradient rounded-xl p-5">
              <h3 className="text-sm font-bold text-white mb-1">
                Windshield Washer Fluid
              </h3>
              <p className="text-xs text-[#999] leading-relaxed">
                Switch from winter (-40 rated) to a summer bug-wash formula.
                You burn through more washer fluid in spring due to road spray
                and bugs.
              </p>
            </div>
            <div className="card-gradient rounded-xl p-5">
              <h3 className="text-sm font-bold text-white mb-1">
                Coolant / Antifreeze
              </h3>
              <p className="text-xs text-[#999] leading-relaxed">
                Your cooling system works hard in summer too. Check that
                coolant is at the proper level and the mixture is correct. Low
                coolant heading into summer is a recipe for overheating.
              </p>
            </div>
            <div className="card-gradient rounded-xl p-5">
              <h3 className="text-sm font-bold text-white mb-1">
                Engine Oil
              </h3>
              <p className="text-xs text-[#999] leading-relaxed">
                If you are near your next oil change interval, do it now.
                Winter driving with frequent cold starts is harder on oil than
                summer highway driving.
              </p>
            </div>
            <div className="card-gradient rounded-xl p-5">
              <h3 className="text-sm font-bold text-white mb-1">
                Brake Fluid
              </h3>
              <p className="text-xs text-[#999] leading-relaxed">
                Brake fluid absorbs moisture over time. If it has been more
                than two years since a brake fluid flush, spring is a good time
                to have it tested.
              </p>
            </div>
          </div>
        </section>

        {/* Section 7: Cost Comparison Table */}
        <section id="cost-comparison" className="mt-14">
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">
            7. Spring Maintenance{" "}
            <span className="text-[#22d65f]">Cost Guide</span>
          </h2>
          <p className="mt-4 text-[#ccc] leading-relaxed text-base">
            Here is a realistic breakdown of what spring maintenance costs in
            the Stony Plain and Spruce Grove area. These are typical prices for
            2026 based on what local shops charge, including Accurate Autoworks.
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#2a2a2a]">
                  <th className="text-left py-3 pr-4 text-xs font-bold uppercase tracking-widest text-[#22d65f]">
                    Service
                  </th>
                  <th className="text-left py-3 pr-4 text-xs font-bold uppercase tracking-widest text-[#22d65f]">
                    Cost Range
                  </th>
                  <th className="text-left py-3 text-xs font-bold uppercase tracking-widest text-[#22d65f]">
                    Priority
                  </th>
                </tr>
              </thead>
              <tbody className="text-[#ccc]">
                <tr className="border-b border-[#1a1a1a]">
                  <td className="py-3 pr-4">
                    Seasonal tire changeover (on rims)
                  </td>
                  <td className="py-3 pr-4">$40 - $60</td>
                  <td className="py-3 text-[#22d65f] font-bold">Essential</td>
                </tr>
                <tr className="border-b border-[#1a1a1a]">
                  <td className="py-3 pr-4">
                    Tire changeover (mount &amp; balance)
                  </td>
                  <td className="py-3 pr-4">$80 - $140</td>
                  <td className="py-3 text-[#22d65f] font-bold">Essential</td>
                </tr>
                <tr className="border-b border-[#1a1a1a]">
                  <td className="py-3 pr-4">Full detail (interior + exterior)</td>
                  <td className="py-3 pr-4">$250 - $500</td>
                  <td className="py-3 text-[#22d65f] font-bold">Essential</td>
                </tr>
                <tr className="border-b border-[#1a1a1a]">
                  <td className="py-3 pr-4">Undercarriage wash</td>
                  <td className="py-3 pr-4">$30 - $75</td>
                  <td className="py-3 text-[#22d65f] font-bold">Essential</td>
                </tr>
                <tr className="border-b border-[#1a1a1a]">
                  <td className="py-3 pr-4">Wiper blade replacement</td>
                  <td className="py-3 pr-4">$20 - $50</td>
                  <td className="py-3 text-white">Recommended</td>
                </tr>
                <tr className="border-b border-[#1a1a1a]">
                  <td className="py-3 pr-4">Wax or sealant application</td>
                  <td className="py-3 pr-4">$50 - $150</td>
                  <td className="py-3 text-white">Recommended</td>
                </tr>
                <tr className="border-b border-[#1a1a1a]">
                  <td className="py-3 pr-4">Ceramic coating</td>
                  <td className="py-3 pr-4">$500 - $1,500</td>
                  <td className="py-3 text-[#999]">Optional upgrade</td>
                </tr>
                <tr className="border-b border-[#1a1a1a]">
                  <td className="py-3 pr-4">
                    Paint protection film (front end)
                  </td>
                  <td className="py-3 pr-4">$800 - $2,500</td>
                  <td className="py-3 text-[#999]">Optional upgrade</td>
                </tr>
                <tr className="border-b border-[#1a1a1a]">
                  <td className="py-3 pr-4">
                    Window tint replacement (full vehicle)
                  </td>
                  <td className="py-3 pr-4">$300 - $600</td>
                  <td className="py-3 text-[#999]">If needed</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4">Oil change</td>
                  <td className="py-3 pr-4">$60 - $120</td>
                  <td className="py-3 text-white">Recommended</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-[#666]">
            * Prices are approximate for the Stony Plain / Spruce Grove area as
            of 2026. Actual costs may vary based on vehicle size and condition.
          </p>
        </section>

        {/* Section 8: Printable Checklist */}
        <section id="checklist" className="mt-14">
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">
            8. Your Spring Vehicle{" "}
            <span className="text-[#22d65f]">Checklist</span>
          </h2>
          <p className="mt-4 text-[#ccc] leading-relaxed text-base">
            Save this checklist and work through it over the next few weeks.
            You do not have to do everything at once, but the tire changeover
            and undercarriage wash should be first priorities.
          </p>
          <div className="mt-6 card-gradient rounded-xl p-6 sm:p-8 space-y-6">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-[#22d65f] mb-3">
                Week 1: The Essentials
              </h3>
              <ul className="space-y-2 text-sm text-[#ccc]">
                <li className="flex items-start gap-3">
                  <span className="text-[#666]">&#9744;</span>
                  <span>
                    Book and complete seasonal tire changeover
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#666]">&#9744;</span>
                  <span>
                    Get an undercarriage wash to remove road salt
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#666]">&#9744;</span>
                  <span>
                    Check tread depth on summer/all-season tires
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-[#22d65f] mb-3">
                Week 2: Clean and Protect
              </h3>
              <ul className="space-y-2 text-sm text-[#ccc]">
                <li className="flex items-start gap-3">
                  <span className="text-[#666]">&#9744;</span>
                  <span>Book a full spring detail (interior + exterior)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#666]">&#9744;</span>
                  <span>
                    Inspect window tint for bubbling, peeling, or fading
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#666]">&#9744;</span>
                  <span>Replace wiper blades</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#666]">&#9744;</span>
                  <span>
                    Switch to summer washer fluid
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-[#22d65f] mb-3">
                Week 3: Inspect and Upgrade
              </h3>
              <ul className="space-y-2 text-sm text-[#ccc]">
                <li className="flex items-start gap-3">
                  <span className="text-[#666]">&#9744;</span>
                  <span>
                    Check for paint chips and consider PPF for high-impact areas
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#666]">&#9744;</span>
                  <span>
                    Consider ceramic coating if your paint is unprotected
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#666]">&#9744;</span>
                  <span>Check coolant, oil, and brake fluid levels</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#666]">&#9744;</span>
                  <span>
                    Inspect for rust forming on rocker panels and wheel arches
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 9: FAQ */}
        <section id="faq" className="mt-14">
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight mb-8">
            Frequently <span className="text-[#22d65f]">Asked</span>
          </h2>
          <div className="space-y-4">
            {[
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
            ].map((faq) => (
              <details
                key={faq.q}
                className="card-gradient rounded-xl group"
              >
                <summary className="px-6 py-5 cursor-pointer text-sm font-bold uppercase tracking-wide text-white hover:text-[#22d65f] transition-colors list-none flex items-center justify-between">
                  {faq.q}
                  <span className="text-[#22d65f] text-lg group-open:rotate-45 transition-transform ml-4 flex-shrink-0">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-5 text-sm text-[#999] leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-14 card-gradient rounded-xl p-8 sm:p-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">
            Get Your Ride{" "}
            <span className="text-[#22d65f]">Spring Ready</span>
          </h2>
          <p className="mt-4 text-[#999] max-w-xl mx-auto">
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
        </section>

        {/* Author / Shop info */}
        <div className="mt-10 text-center text-xs text-[#555]">
          <p>
            Written by the team at{" "}
            <Link href="/" className="text-[#22d65f] hover:underline">
              Accurate Autoworks
            </Link>{" "}
            in Stony Plain, Alberta. We have been helping local drivers
            maintain and customize their vehicles since 2023.
          </p>
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
            mainEntity: [
              {
                "@type": "Question",
                name: "When should I switch from winter tires to summer tires in Stony Plain?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Once daytime temperatures consistently stay above 7 degrees Celsius, it is time to swap. In the Stony Plain and Spruce Grove area, that is typically mid to late April. Running winters past mid-April wears the rubber fast and actually increases stopping distance on dry roads.",
                },
              },
              {
                "@type": "Question",
                name: "How much does spring car detailing cost near Spruce Grove?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A full spring detail (interior and exterior) at Accurate Autoworks in Stony Plain typically runs $250 to $500 depending on vehicle size and condition. This includes hand wash, clay bar, polish, wax or sealant, interior vacuum, shampoo, leather conditioning, and full surface cleaning.",
                },
              },
              {
                "@type": "Question",
                name: "Is paint protection film worth it for Alberta drivers?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "If you drive Highway 16A, gravel roads around Parkland County, or work in the Acheson industrial area, PPF pays for itself by preventing rock chips that cost hundreds to repair. The front bumper, hood, and fenders take the most abuse.",
                },
              },
              {
                "@type": "Question",
                name: "How do I know if my window tint needs replacing?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Look for purple discolouration, bubbling, peeling edges, or visible scratches from ice scrapers. Low-quality dyed tint degrades after 3 to 5 Alberta winters. Modern ceramic tint lasts much longer, blocks more heat, and does not fade to purple.",
                },
              },
              {
                "@type": "Question",
                name: "What spring maintenance is most important for trucks in Parkland County?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Tire changeover and undercarriage wash are the top two priorities. Trucks running gravel roads accumulate more salt, sand, and debris than city-driven cars. Follow that with a detail and consider PPF on the front end.",
                },
              },
              {
                "@type": "Question",
                name: "Where can I get my tires changed near Acheson, AB?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Accurate Autoworks on Boulder Boulevard in Stony Plain is a short drive from Acheson. We handle everything from passenger cars to full-size trucks with lift kits. Call 780.818.9904 or just roll in.",
                },
              },
              {
                "@type": "Question",
                name: "Does road salt really damage my car?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Absolutely. Road salt accelerates rust on your undercarriage, frame rails, brake lines, and body panels. In Alberta, vehicles are exposed to salt for 5 to 6 months per year. A thorough undercarriage wash in spring removes the salt before it causes structural damage.",
                },
              },
              {
                "@type": "Question",
                name: "Can I do spring vehicle maintenance all at one shop in Stony Plain?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "At Accurate Autoworks, we handle tire changeovers, full detailing, window tint, PPF, ceramic coating, and vinyl wraps all under one roof. Call 780.818.9904 to book.",
                },
              },
            ],
          }),
        }}
      />
    </article>
  );
}
