import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";

export const metadata: Metadata = {
  title: "Paint Protection Film (PPF) | Stony Plain & Spruce Grove",
  description:
    "Professional paint protection film (PPF) installation in Stony Plain, AB. Invisible shield against rock chips, scratches, and road debris. Serving Spruce Grove, Parkland County & Acheson.",
};

export default function PPFPage() {
  return (
    <ServicePage
      badge="Paint Protection Film"
      title="Paint"
      titleAccent="Protection"
      description="Invisible armor for your vehicle. PPF absorbs rock chips, scratches, and road debris so your paint doesn't have to. Self-healing technology means minor scratches disappear with heat."
      features={[
        "Full front-end coverage — hood, fenders, bumper, mirrors",
        "Full vehicle PPF for maximum protection",
        "Partial coverage packages — high-impact zones only",
        "Self-healing film — minor scratches disappear with heat",
        "Virtually invisible — protects without changing your vehicle's look",
        "UV protection prevents paint fading and yellowing",
        "10-year warranty on premium PPF products",
        "Custom cut with precision plotter for perfect fitment",
        "Ideal for new vehicles — protect from day one",
      ]}
      faqs={[
        {
          question: "What is paint protection film (PPF)?",
          answer:
            "PPF is a clear, thermoplastic urethane film applied to the painted surfaces of your vehicle. It acts as an invisible shield against rock chips, road debris, bug splatter, and minor scratches. The best PPF films are self-healing — meaning light scratches smooth out on their own with heat from the sun or warm water.",
        },
        {
          question: "How much does PPF cost in Stony Plain?",
          answer:
            "PPF pricing depends on how much of the vehicle you want protected. A partial front-end kit (bumper, partial hood, mirrors) starts around $800-$1,200. Full front-end coverage runs $1,500-$2,500. Full vehicle PPF ranges from $4,000 to $7,000+ depending on the vehicle. Call 780.818.9904 for a specific quote.",
        },
        {
          question: "How long does PPF last?",
          answer:
            "Quality PPF lasts 7-10 years with proper care. Premium films come with manufacturer warranties of up to 10 years against yellowing, cracking, and peeling. The film can be removed and replaced when it reaches the end of its life, revealing pristine paint underneath.",
        },
        {
          question: "Can you see PPF on the car?",
          answer:
            "When installed properly, PPF is virtually invisible. Modern films are crystal clear with no orange peel texture. You'll know it's there when a rock chip bounces off your hood instead of chipping your paint — but visually, it's undetectable.",
        },
        {
          question: "Should I get PPF on a new car?",
          answer:
            "Absolutely — the best time to apply PPF is when the paint is brand new and perfect. It's much easier and more cost-effective to protect paint than to repair chips and scratches later. Think of it as insurance for your vehicle's finish, especially with Alberta's gravel roads and harsh winters.",
        },
      ]}
      ctaText="Get a PPF Quote"
    />
  );
}
