import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";

export const metadata: Metadata = {
  title: "Commercial Printing & Signage | Vehicle Wraps, Signs, Banners | Stony Plain",
  description:
    "Commercial-grade printing and signage in Stony Plain, AB. Fleet vehicle wraps, storefront signs, banners, decals, custom graphics. Full plotter and large-format printer on-site. Serving Spruce Grove, Parkland County & Acheson.",
};

export default function PrintPage() {
  return (
    <ServicePage
      badge="Commercial Print & Signage"
      title="Print &"
      titleAccent="Signage"
      description="If you can imagine it, we can print it. Commercial-grade equipment on-site means we handle everything from design to finished product — fleet wraps, storefront signs, banners, decals, and custom graphics for businesses across Parkland County."
      features={[
        "Fleet vehicle wraps — brand every truck, van, and car in your fleet",
        "Storefront signs and window graphics",
        "Banners — indoor and outdoor, any size",
        "Vinyl decals and lettering for vehicles and walls",
        "Custom graphics and logo printing",
        "Large-format commercial printing on-site",
        "Full plotter for precision cuts and contour graphics",
        "Design services available — bring us your logo, we'll do the rest",
        "Bulk and fleet pricing for commercial clients",
        "Serving businesses in Acheson industrial area",
        "Quick turnaround — most jobs done within the week",
        "Durable materials built for Alberta weather",
      ]}
      faqs={[
        {
          question: "What commercial printing services do you offer in Stony Plain?",
          answer:
            "Accurate Autoworks offers full commercial printing and signage services including fleet vehicle wraps and graphics, storefront signs, window graphics, banners (indoor and outdoor), vinyl decals and lettering, custom graphics, and large-format prints. We have commercial-grade printing equipment and a full plotter on-site so everything is done in-house for quality control.",
        },
        {
          question: "Can you wrap our entire company fleet?",
          answer:
            "Yes — fleet wraps are one of our specialties. We work with businesses across Stony Plain, Spruce Grove, Acheson, and Parkland County to brand their vehicles with professional wraps and graphics. We offer volume pricing for fleets and can handle everything from design to installation. Turn every vehicle into a mobile advertisement for your business.",
        },
        {
          question: "How much do commercial vehicle wraps cost?",
          answer:
            "Commercial vehicle wraps range from $500-$1,500 for partial wraps and lettering to $2,500-$5,000+ for full wraps depending on vehicle size and design complexity. Fleet pricing is available for multiple vehicles. We provide free quotes — call 780.818.9904 or submit a request through our contact form.",
        },
        {
          question: "Do you design the graphics or do I need to provide them?",
          answer:
            "Both. If you have existing brand assets (logo, colours, design files), we'll work with them. If you need design help, we can create custom graphics for your wrap, sign, or banner. Just bring us your logo and tell us what you're going for — we'll handle the creative.",
        },
        {
          question: "How long do printed wraps and signs last outside?",
          answer:
            "Our commercial-grade materials are built for Alberta conditions. Vehicle wraps typically last 5-7 years. Outdoor signs and banners use UV-resistant inks and durable substrates that hold up for years in sun, rain, and snow. We use quality materials because our name goes on every job.",
        },
        {
          question: "Do you serve businesses in the Acheson industrial area?",
          answer:
            "Absolutely. We work with many businesses in Acheson, Parkland County, Spruce Grove, and greater Edmonton. Whether you need fleet wraps for your construction company or storefront signage for your shop, we're just a short drive from the Acheson industrial park. Call 780.818.9904.",
        },
      ]}
      ctaText="Get a Print Quote"
    />
  );
}
