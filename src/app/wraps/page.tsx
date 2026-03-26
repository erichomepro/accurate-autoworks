import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";

export const metadata: Metadata = {
  title: "Vinyl Wraps | Vehicle & Commercial Wraps | Stony Plain & Spruce Grove",
  description:
    "Professional vinyl wraps in Stony Plain, AB. Full wraps, partial wraps, color changes, commercial fleet wraps. Transform your vehicle or brand your business. Serving Spruce Grove, Parkland County & Acheson.",
};

export default function WrapsPage() {
  return (
    <ServicePage
      badge="Vinyl Wraps"
      title="Vinyl"
      titleAccent="Wraps"
      description="Change the entire look of your vehicle without touching the paint. Full wraps, partial wraps, color changes, racing stripes, commercial branding — we do it all with premium cast vinyl that lasts."
      features={[
        "Full vehicle wraps — complete color change or custom design",
        "Partial wraps — accents, hoods, roofs, mirrors, trim",
        "Color change wraps — matte, gloss, satin, metallic, chrome",
        "Commercial fleet wraps — brand every vehicle in your fleet",
        "Custom graphics and designs — your vision, printed and applied",
        "3M and Avery Dennison premium vinyl materials",
        "Paint-safe removal — protects the original finish underneath",
        "Race stripes, decals, and accent packages",
        "Serving businesses in Acheson, Parkland County, and Spruce Grove",
      ]}
      faqs={[
        {
          question: "How much does a full vehicle wrap cost in Stony Plain?",
          answer:
            "A full vehicle wrap typically ranges from $2,500 to $5,000+ depending on vehicle size, vinyl type, and complexity of the design. Sedans are on the lower end, trucks and SUVs run higher. Commercial fleet wraps get volume pricing. Contact us at 780.818.9904 for an exact quote.",
        },
        {
          question: "How long does a vinyl wrap last?",
          answer:
            "A quality vinyl wrap lasts 5-7 years with proper care. Premium cast vinyl from 3M or Avery Dennison holds up well to Alberta winters and UV exposure. We recommend hand washing and avoiding automatic car washes with brushes to maximize lifespan.",
        },
        {
          question: "Will a wrap damage my paint?",
          answer:
            "No — in fact, wraps protect your paint. When removed by a professional, the original paint underneath is preserved and often in better condition than unwrapped areas. This can actually increase resale value. We use heat-removal techniques that are safe for factory paint.",
        },
        {
          question: "Can you wrap my work truck or commercial fleet?",
          answer:
            "Absolutely. We specialize in commercial fleet wraps for businesses in Stony Plain, Spruce Grove, Acheson, and Parkland County. Turn every vehicle into a rolling billboard. We handle design, printing, and installation — start to finish, all in-house.",
        },
        {
          question: "How long does it take to wrap a vehicle?",
          answer:
            "A full wrap typically takes 3-5 business days depending on complexity. Partial wraps and accent packages can often be done in 1-2 days. We'll give you a timeline when you book so you know exactly when to expect your ride back.",
        },
      ]}
      ctaText="Get a Wrap Quote"
    />
  );
}
