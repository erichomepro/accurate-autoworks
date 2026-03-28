import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";

export const metadata: Metadata = {
  title: "Tire Service Stony Plain | Mount, Balance & Changeover",
  description:
    "Tire service in Stony Plain. Seasonal changeovers, mount & balance, flat repairs, TPMS resets. Fast turnaround, fair prices. Spruce Grove & Parkland County.",
  alternates: { canonical: "/tires" },
  openGraph: { images: [{ url: "/images/hero-tires.jpg", width: 1200, height: 630, alt: "Tire Service at Accurate Autoworks Stony Plain" }] },
};

export default function TiresPage() {
  return (
    <ServicePage
      badge="Tires & Service"
      title="Accurate"
      titleAccent="Tires"
      heroImage="/images/hero-tires.jpg"
      description="Seasonal changeovers, mount and balance, flat repairs, new rubber — we handle it all. No appointment needed for most tire work, and we get it done fast so you&apos;re not sitting around all day. Whether you&apos;re swapping your winters on before the first snow or you picked up a nail on Highway 16A, Accurate Autoworks has you covered. We work on everything from daily drivers to lifted trucks and commercial vehicles."
      benefits={[
        {
          title: "Seasonal Changeover Done Right",
          description:
            "Alberta doesn&apos;t play around with weather. One week it&apos;s plus 15, the next you&apos;re on black ice. We do full seasonal tire swaps — winters on, summers off, torqued to spec, TPMS reset. Most vehicles done in under an hour.",
          icon: "🔄",
        },
        {
          title: "Save Money on Tire Life",
          description:
            "Tires that aren&apos;t balanced properly wear out unevenly and cost you hundreds in premature replacements. We balance every wheel on a Hunter machine so your tread wears even and your ride stays smooth.",
          icon: "💰",
        },
        {
          title: "Flat Repair, Not Flat Replacement",
          description:
            "Picked up a screw or nail? Don&apos;t buy a whole new tire if you don&apos;t have to. We patch and plug punctures in the repairable zone so you&apos;re back on the road for a fraction of the cost. If it can&apos;t be fixed safely, we&apos;ll tell you straight.",
          icon: "🔧",
        },
        {
          title: "Trucks, SUVs, Fleet — All of It",
          description:
            "We&apos;re not just a car shop. We handle full-size trucks, SUVs, commercial vans, and fleet vehicles. Got 35-inch mud tires on a lifted Ram? No problem. Got 10 work trucks that need changeovers before Monday? We&apos;ll make it happen.",
          icon: "🚛",
        },
      ]}
      processSteps={[
        {
          step: 1,
          title: "Roll In or Call Ahead",
          description:
            "Most tire work is walk-in friendly. If you want a guaranteed time slot — especially during changeover season in October and April — give us a call at 780.818.9904 and we&apos;ll book you in.",
        },
        {
          step: 2,
          title: "We Inspect Everything",
          description:
            "Before we touch anything, we check your tread depth, sidewall condition, and tire pressure. If something&apos;s worn or damaged, we&apos;ll show you and give you options — no surprises.",
        },
        {
          step: 3,
          title: "Mount, Balance, Torque",
          description:
            "Tires get mounted on a modern tire machine, balanced on a Hunter balancer, and lug nuts torqued to your vehicle&apos;s factory spec. TPMS sensors get reset if your vehicle has them.",
        },
        {
          step: 4,
          title: "Out the Door",
          description:
            "Most tire jobs are done in 30 to 60 minutes. We&apos;ll do a final pressure check, hand you the keys, and you&apos;re gone. No upsells, no runaround.",
        },
      ]}
      features={[
        "Seasonal tire changeover — winters and summers swapped fast",
        "Mount and balance on Hunter equipment",
        "Flat tire repair — patch and plug for repairable punctures",
        "TPMS sensor reset and diagnostics",
        "Lug nuts torqued to manufacturer spec every time",
        "Tire inspection — tread depth, sidewall, and pressure check",
        "New tire sourcing — we can order any brand and size",
        "Truck and SUV tire service — up to 37-inch off-road tires",
        "Fleet tire changeovers — multiple vehicles, fast turnaround",
        "Tire storage recommendations for off-season sets",
        "Valve stem replacement",
        "Wheel cleaning during service",
      ]}
      whySection={{
        title: "Why Tire Service Matters More Than You Think",
        content:
          "Your tires are the only thing between your vehicle and the road. In Alberta, that road can be covered in ice, gravel, slush, or baking hot pavement depending on the month. Running winters past April wears them out fast and kills your gas mileage. Running all-seasons in January is a safety risk your insurance company won&apos;t cover if something goes wrong. At Accurate Autoworks in Stony Plain, we make seasonal changeovers quick and painless so you&apos;re always on the right rubber at the right time. We also catch problems early — uneven wear patterns, slow leaks, cracked sidewalls — before they leave you stranded on the side of the Yellowhead. Whether you drive a sedan, a truck, or run a fleet of work vehicles out of Acheson, proper tire maintenance saves you money and keeps you safe.",
      }}
      faqs={[
        {
          question: "How much does a seasonal tire changeover cost in Stony Plain?",
          answer:
            "A standard seasonal changeover at Accurate Autoworks runs $80-$120 for most cars and small SUVs. Trucks and larger SUVs are $100-$140 depending on wheel size. That includes dismount, mount, balance, torque to spec, and TPMS reset. If your tires are already on rims, a swap is even cheaper — typically $40-$60.",
        },
        {
          question: "When should I switch to winter tires in Alberta?",
          answer:
            "Most years, mid-October is the sweet spot. Once temperatures consistently drop below 7°C, summer and all-season tires lose grip — the rubber compound hardens and doesn&apos;t grip cold pavement well. We usually see the first rush of changeovers in the second week of October. Book early to avoid the wait. For spring swap-back, mid-April is typical.",
        },
        {
          question: "Can you fix a flat tire or do I need a new one?",
          answer:
            "If the puncture is in the tread area and smaller than 6mm, we can almost always patch and plug it safely. Sidewall damage, large gashes, or punctures near the bead can&apos;t be repaired safely — we&apos;ll be straight with you about it. A flat repair runs $25-$40, which is a lot cheaper than a new tire.",
        },
        {
          question: "Do you service trucks with big tires and lifts?",
          answer:
            "Absolutely. We work on everything from stock sedans to trucks running 35s and 37s with lift kits. Our equipment handles large diameter wheels and heavy-duty tires. Lots of guys from the Acheson industrial area bring their rigs in.",
        },
        {
          question: "Where can I get tires changed near Spruce Grove?",
          answer:
            "Accurate Autoworks is on Boulder Boulevard in Stony Plain — about a 5-minute drive from Spruce Grove. We serve Spruce Grove, Parkland County, Acheson, and Edmonton West. Quick in, quick out. Call 780.818.9904 or just roll in.",
        },
        {
          question: "Can you order new tires for my vehicle?",
          answer:
            "Yes — if you need new rubber, tell us your vehicle make, model, and year and we&apos;ll source the right tires at competitive prices. We work with multiple distributors and can get most sizes within a day or two. We&apos;ll mount, balance, and install them when they arrive.",
        },
        {
          question: "Do you do fleet tire changeovers?",
          answer:
            "We do. If you run a fleet of work trucks or vans out of the Stony Plain, Acheson, or Spruce Grove area, we can handle bulk changeovers efficiently. Call ahead and we&apos;ll schedule a block of time so your vehicles aren&apos;t sitting. We&apos;ve done fleets of 10+ vehicles in a single day.",
        },
      ]}
      ctaText="Book Tire Service"
      relatedServices={[
        { name: "Detailing", href: "/detailing" },
        { name: "Paint Protection Film", href: "/ppf" },
        { name: "Window Tinting", href: "/tinting" },
      ]}
    />
  );
}
