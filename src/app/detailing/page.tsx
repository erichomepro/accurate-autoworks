import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";

export const metadata: Metadata = {
  title: "Car Detailing | Interior & Exterior | Stony Plain & Spruce Grove",
  description:
    "Professional car detailing in Stony Plain, AB. Interior, exterior, and full detail packages. Your ride, looking showroom fresh. Serving Spruce Grove, Parkland County & Acheson. Call 780.818.9904",
};

export default function DetailingPage() {
  return (
    <ServicePage
      badge="Car Detailing"
      title="Car"
      titleAccent="Detailing"
      description="Your ride, looking like it just rolled off the showroom floor. From a quick exterior wash and wax to a deep interior clean — we bring your vehicle back to its best."
      features={[
        "Full detail packages — interior + exterior, bumper to bumper",
        "Interior detailing — vacuum, shampoo, leather conditioning, dashboard treatment",
        "Exterior detailing — hand wash, clay bar, polish, wax or ceramic sealant",
        "Engine bay cleaning and dressing",
        "Headlight restoration — bring cloudy lenses back to clear",
        "Odour removal and ozone treatment",
        "Pet hair removal — we get every last strand",
        "Ceramic coating application for long-term protection",
        "Pre-sale detailing — maximize your vehicle's resale value",
      ]}
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
      ]}
      ctaText="Book Your Detail"
    />
  );
}
