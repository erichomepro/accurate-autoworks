import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";

export const metadata: Metadata = {
  title: "Car Detailing Stony Plain | Interior & Exterior",
  description:
    "Professional car detailing in Stony Plain. Interior, exterior & full packages from $150. Ceramic coating, paint correction, pre-sale detail. Spruce Grove & area.",
  alternates: { canonical: "/detailing" },
  openGraph: { images: [{ url: "/images/hero-detailing.jpeg", width: 1200, height: 630, alt: "Car Detailing at Accurate Autoworks Stony Plain" }] },
};

export default function DetailingPage() {
  return (
    <ServicePage
      badge="Car Detailing"
      title="Car"
      titleAccent="Detailing"
      heroImage="/images/hero-detailing.jpeg"
      description="Your ride, looking like it just rolled off the showroom floor. From a quick exterior wash and wax to a deep interior clean, we bring your vehicle back to its best. At Accurate Autoworks in Stony Plain, we don&apos;t rush through details — every vehicle gets the time and attention it needs, whether it&apos;s a daily driver that needs some love or a show car getting prepped for the season. We use professional-grade products, proper techniques, and we actually care about the result."
      benefits={[
        {
          title: "Preserve Your Investment",
          description:
            "A well-maintained vehicle holds its value. Regular detailing prevents UV damage, paint oxidation, and interior wear that knock thousands off your resale price. It&apos;s not a luxury — it&apos;s smart ownership, especially with how Alberta conditions beat up vehicles.",
          icon: "💎",
        },
        {
          title: "That New Car Feeling",
          description:
            "There&apos;s nothing like getting into a freshly detailed vehicle. Clean leather, spotless glass, that fresh scent — it just feels right. We bring back the experience you had when you first drove it off the lot.",
          icon: "✨",
        },
        {
          title: "Health and Air Quality",
          description:
            "Your cabin collects dust, allergens, bacteria, pet dander, and who knows what else. A proper interior detail doesn&apos;t just make it look clean — it actually cleans it. Better air quality, fewer allergy triggers, and a healthier space for you and your family.",
          icon: "🌿",
        },
        {
          title: "Sell for More Money",
          description:
            "Planning to sell or trade in? A professionally detailed vehicle can fetch $500 to $2,000 more than a dirty one. First impressions matter, and buyers notice everything. Our pre-sale detail package is specifically designed to maximize your return.",
          icon: "💰",
        },
      ]}
      processSteps={[
        {
          step: 1,
          title: "Book Your Detail",
          description:
            "Call 780.818.9904 or book online. Let us know your vehicle type, what condition it&apos;s in, and what you&apos;re looking for — basic cleanup, full detail, or ceramic coating. We&apos;ll recommend the right package.",
        },
        {
          step: 2,
          title: "Drop Off",
          description:
            "Bring your vehicle to the shop in Stony Plain. We&apos;ll do a quick inspection, note any areas of concern, and confirm the scope of work. If your vehicle needs extra attention in certain spots, we&apos;ll let you know upfront.",
        },
        {
          step: 3,
          title: "The Detail",
          description:
            "This is where the magic happens. Depending on your package, we wash, clay bar, polish, wax or seal the exterior. Inside, we vacuum, shampoo, condition leather, clean every vent and crevice. We don&apos;t cut corners — period.",
        },
        {
          step: 4,
          title: "Final Inspection and Pickup",
          description:
            "We do a final walk-around to make sure everything meets our standards before you see it. You&apos;ll pick up a vehicle that looks and smells brand new. We&apos;ll give you tips on maintaining the results between details.",
        },
      ]}
      features={[
        "Full detail packages — interior + exterior, bumper to bumper",
        "Interior detailing — vacuum, shampoo, leather conditioning, dashboard treatment",
        "Exterior detailing — hand wash, clay bar, polish, wax or ceramic sealant",
        "Engine bay cleaning and dressing",
        "Headlight restoration — bring cloudy lenses back to clear",
        "Odour removal and ozone treatment",
        "Pet hair removal — we get every last strand",
        "Ceramic coating application for long-term protection",
        "Pre-sale detailing — maximize your vehicle&apos;s resale value",
      ]}
      whySection={{
        title: "Why Detailing Matters in Alberta",
        content:
          "Alberta is brutal on vehicles. Winter road salt eats into paint and undercarriage. Summer UV bakes dashboards and fades interiors. Gravel roads around Parkland County and Acheson kick up chips and dust that embed into every surface. Regular detailing isn&apos;t just about looking good — it&apos;s about protecting the second biggest purchase most people make. At Accurate Autoworks in Stony Plain, we see vehicles come in that haven&apos;t been properly cleaned in years, and we bring them back to life. We also see owners who get their vehicles detailed regularly and their cars still look amazing at 200,000 km. The difference is maintenance. Whether you&apos;re in Spruce Grove, Stony Plain, or driving in from Edmonton West, our detail shop is easy to find and we treat every vehicle like it&apos;s our own.",
      }}
      faqs={[
        {
          question: "How much does car detailing cost in Stony Plain?",
          answer:
            "Our detailing packages start around $150 for a basic exterior wash, clay bar, and wax. Interior detailing runs $150-$250. Full detail packages (interior + exterior) range from $250 to $500+ depending on vehicle size and condition. Heavily soiled vehicles or those needing paint correction may run higher. Call 780.818.9904 for a quote.",
        },
        {
          question: "How long does a full detail take?",
          answer:
            "A full interior and exterior detail typically takes 4-8 hours depending on the size and condition of the vehicle. We recommend dropping off in the morning for same-day pickup. For heavily soiled vehicles or those needing paint correction, it may require a full day.",
        },
        {
          question: "Do you offer ceramic coating?",
          answer:
            "Yes. Ceramic coating provides long-lasting paint protection that repels water, dirt, and UV damage. It creates a hard, glossy layer over your paint that lasts 2-5 years. We apply it after a thorough paint correction and detail to ensure the best bond and finish.",
        },
        {
          question: "Can you detail my truck or SUV?",
          answer:
            "Absolutely — we detail everything from compact cars to full-size trucks, SUVs, and vans. We also offer fleet detailing services for commercial vehicles in the Stony Plain, Spruce Grove, and Parkland County area.",
        },
        {
          question: "Should I detail my car before selling it?",
          answer:
            "Yes — pre-sale detailing is one of the best investments you can make. A professionally detailed vehicle can sell for $500 to $2,000 more than a dirty one. First impressions matter, and buyers notice the details. We offer a specific pre-sale package designed to maximize your return.",
        },
        {
          question:
            "Where is the best car detailing near Spruce Grove?",
          answer:
            "Accurate Autoworks in Stony Plain is just minutes from Spruce Grove and offers full-service detailing packages. We&apos;re known for taking our time and doing the job right — not rushing through cars like a drive-through wash. Check our reviews and see for yourself.",
        },
        {
          question:
            "How often should I get my vehicle detailed?",
          answer:
            "For most people, a full detail twice a year works well — once in spring to clean up winter damage and once in fall to prep for the cold. If you drive gravel roads regularly or have kids and pets, every 3-4 months is a better call. Regular detailing keeps your vehicle looking good and holding its value.",
        },
        {
          question:
            "What is the difference between a car wash and a detail?",
          answer:
            "A car wash cleans the surface. A detail restores and protects the vehicle inside and out. We clay bar to remove embedded contaminants, polish out scratches, condition leather, clean every vent and crevice, and apply long-lasting protection. It&apos;s the difference between brushing your teeth and going to the dentist.",
        },
      ]}
      relatedServices={[
        { name: "Paint Protection Film", href: "/ppf" },
        { name: "Window Tinting", href: "/tinting" },
        { name: "Vinyl Wraps", href: "/wraps" },
      ]}
      ctaText="Book Your Detail"
    />
  );
}
