import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";

export const metadata: Metadata = {
  title: "Window Tinting | Stony Plain & Spruce Grove",
  description:
    "Professional window tinting in Stony Plain, AB. Ceramic, carbon, and dyed tint films. UV protection, heat rejection, and privacy. Serving Spruce Grove, Parkland County & Acheson. Call 780.818.9904",
};

export default function TintingPage() {
  return (
    <ServicePage
      badge="Window Tinting"
      title="Premium Window"
      titleAccent="Tinting"
      description="Keep your interior cool, protect your skin from UV, and get the privacy you want. We carry ceramic, carbon, and dyed tint films in every shade — installed with zero bubbles, guaranteed."
      features={[
        "Ceramic tint — top-tier heat rejection without signal interference",
        "Carbon tint — sleek look with solid UV and heat blocking",
        "Dyed tint — budget-friendly option for privacy and style",
        "Full vehicle tinting — all windows done in one visit",
        "Windshield strip tinting available",
        "Commercial vehicle and fleet tinting",
        "Lifetime warranty on premium films",
        "Alberta-legal tint levels — we keep you compliant",
        "Same-day service available for most vehicles",
      ]}
      faqs={[
        {
          question: "How much does window tinting cost in Stony Plain?",
          answer:
            "Window tinting at Accurate Autoworks starts at around $200-$300 for a standard sedan with quality carbon film. Ceramic tint runs $350-$500+ depending on vehicle size. SUVs and trucks are slightly more due to the larger glass area. We offer free quotes — call 780.818.9904 or send us a message.",
        },
        {
          question: "What tint percentage is legal in Alberta?",
          answer:
            "In Alberta, the front windshield must allow at least 70% of light through. Front side windows must also allow 70% light transmission. Rear side windows and the back window can be any darkness, including limo tint (5%). We always recommend and install tint that keeps you legal.",
        },
        {
          question: "How long does window tinting take?",
          answer:
            "Most vehicles take 1.5 to 3 hours depending on the number of windows and film type. We can often do same-day service if you book ahead. Drop your ride off in the morning and pick it up looking fresh by afternoon.",
        },
        {
          question: "Does ceramic tint really make a difference?",
          answer:
            "Absolutely. Ceramic tint rejects up to 99% of UV rays and significantly more infrared heat than carbon or dyed films — your vehicle interior stays noticeably cooler. It also doesn't interfere with cell signals, GPS, or radio like metallic tints can. It costs more upfront but pays for itself in comfort.",
        },
        {
          question: "Can you tint my truck or SUV?",
          answer:
            "Yes — we tint everything from sedans to full-size trucks, SUVs, vans, and commercial vehicles. We also do fleet tinting for businesses in the Stony Plain, Spruce Grove, and Acheson area. Call us at 780.818.9904 for a fleet quote.",
        },
      ]}
      ctaText="Book Your Tint"
    />
  );
}
