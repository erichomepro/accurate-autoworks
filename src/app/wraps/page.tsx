import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";

export const metadata: Metadata = {
  title:
    "Vinyl Vehicle Wraps Stony Plain | Full & Partial Wraps | Spruce Grove, Parkland County",
  description:
    "Professional vinyl wraps in Stony Plain, AB. Full vehicle wraps, partial wraps, color changes, commercial fleet wraps from $2,500. 3M and Avery Dennison vinyl. Serving Spruce Grove, Parkland County, Acheson & Edmonton West.",
};

export default function WrapsPage() {
  return (
    <ServicePage
      badge="Vinyl Wraps"
      title="Vinyl"
      titleAccent="Wraps"
      heroImage="https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=1920&q=80"
      description="Change the entire look of your vehicle without touching the paint. Full wraps, partial wraps, color changes, racing stripes, commercial branding — we do it all with premium cast vinyl that lasts. At Accurate Autoworks, we use only 3M and Avery Dennison materials because they hold up to Alberta&apos;s weather and remove cleanly when you&apos;re ready for something new. Whether you want to make your personal ride stand out or turn your work trucks into rolling billboards, this is where it happens."
      benefits={[
        {
          title: "Total Transformation",
          description:
            "Go from factory white to matte black, satin blue, or chrome gold — whatever you want. A full wrap completely changes how your vehicle looks without any permanent modification. When you&apos;re ready to sell or switch it up, the wrap comes off and the original paint is perfect underneath.",
          icon: "🎨",
        },
        {
          title: "Protect Your Paint",
          description:
            "Vinyl wrap acts as a shield against rock chips, minor scratches, and UV fading. It&apos;s like PPF with style. Especially useful if you drive gravel roads around Parkland County — your paint stays mint under the wrap.",
          icon: "🛡️",
        },
        {
          title: "Brand Your Business",
          description:
            "Every vehicle in your fleet is advertising space you&apos;re not using. A professional wrap turns your trucks and vans into 24/7 billboards that generate leads while you drive, park, and work. Businesses in Acheson and Spruce Grove are already doing this — don&apos;t get left behind.",
          icon: "📈",
        },
        {
          title: "Cheaper Than Paint",
          description:
            "A quality paint job on a truck can run $5,000-$10,000 and it&apos;s permanent. A full wrap costs less, protects the original finish, and can be changed whenever you want. It&apos;s the smarter play, especially if you lease or plan to resell.",
          icon: "💰",
        },
      ]}
      processSteps={[
        {
          step: 1,
          title: "Consultation and Quote",
          description:
            "Tell us what you&apos;re going for — color change, custom design, commercial branding, whatever it is. We&apos;ll measure your vehicle, recommend the right material, and give you an honest quote. No surprises, no hidden fees.",
        },
        {
          step: 2,
          title: "Design and Material Selection",
          description:
            "For custom wraps, we&apos;ll work with you on the design until it&apos;s exactly what you want. For color changes, you pick from hundreds of options — matte, gloss, satin, metallic, chrome, textured. We order the vinyl and schedule your install.",
        },
        {
          step: 3,
          title: "Prep and Install",
          description:
            "Your vehicle gets a thorough wash and decontamination before any vinyl touches the surface. Then our installers take their time — proper heat, proper stretch, proper tuck into every panel gap and edge. No shortcuts.",
        },
        {
          step: 4,
          title: "Quality Check and Pickup",
          description:
            "We inspect every edge, seam, and corner before you see it. We&apos;ll walk you through care tips to keep the wrap looking fresh for years. Most color changes are ready within 3-5 business days.",
        },
      ]}
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
      whySection={{
        title: "Why Wrap Your Vehicle in Alberta",
        content:
          "Alberta is tough on vehicles. Between the gravel highways, road salt, UV exposure in summer, and harsh winter conditions, your paint takes a beating every single day. A vinyl wrap gives you a fresh look while also protecting the factory finish underneath. At Accurate Autoworks in Stony Plain, we&apos;ve wrapped everything from personal trucks and sports cars to full commercial fleets for businesses across Spruce Grove, Acheson, and Parkland County. We only use premium cast vinyl from 3M and Avery Dennison — materials designed to handle our climate without peeling, cracking, or fading. Whether you want your ride to turn heads on Highway 16A or you want every vehicle in your company fleet to advertise your brand, we make it happen. The best part? When the wrap reaches the end of its life in 5-7 years, it comes off clean and your original paint is in better shape than the day you wrapped it.",
      }}
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
            "A full wrap typically takes 3-5 business days depending on complexity. Partial wraps and accent packages can often be done in 1-2 days. We&apos;ll give you a timeline when you book so you know exactly when to expect your ride back.",
        },
        {
          question:
            "Where can I get a vehicle wrap done near Spruce Grove?",
          answer:
            "Accurate Autoworks in Stony Plain is your closest professional wrap shop. We&apos;re just a few minutes from Spruce Grove, right off Highway 16A. We handle everything in-house — design, printing, and installation — so you don&apos;t have to deal with multiple vendors.",
        },
        {
          question:
            "Can I wrap a leased vehicle?",
          answer:
            "Yes, and it&apos;s actually one of the smartest things you can do with a lease. The wrap protects the factory paint from chips and scratches, and when your lease is up, we remove it cleanly. You avoid wear-and-tear charges and your vehicle looks brand new at return. Win-win.",
        },
      ]}
      relatedServices={[
        { name: "Paint Protection Film", href: "/ppf" },
        { name: "Window Tinting", href: "/tinting" },
        { name: "Print & Signage", href: "/print" },
      ]}
      ctaText="Get a Wrap Quote"
    />
  );
}
