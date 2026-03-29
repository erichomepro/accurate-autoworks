import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";

export const metadata: Metadata = {
  title: "Commercial Printing & Signage Stony Plain",
  description:
    "Commercial printing & signage in Stony Plain. Fleet wraps, storefront signs, banners, decals & custom graphics. Full plotter on-site. Spruce Grove & Acheson.",
  alternates: { canonical: "/print/" },
  openGraph: { images: [{ url: "/images/hero-print.jpg", width: 1200, height: 630, alt: "Commercial Printing & Signage at Accurate Autoworks Stony Plain" }] },
};

export default function PrintPage() {
  return (
    <ServicePage
      badge="Commercial Print & Signage"
      title="Print &"
      titleAccent="Signage"
      heroImage="/images/hero-print.jpg"
      description="If you can imagine it, we can print it. Commercial-grade equipment on-site means we handle everything from design to finished product — fleet wraps, storefront signs, banners, decals, and custom graphics for businesses across Parkland County. At Accurate Autoworks in Stony Plain, we&apos;ve built our print and signage operation to serve local businesses who want quality work without Edmonton prices or Edmonton wait times. Everything is produced in-house so we control the quality from start to finish."
      benefits={[
        {
          title: "Mobile Advertising That Works",
          description:
            "A wrapped vehicle generates 30,000-70,000 impressions per day. That&apos;s more eyeballs than a billboard, and you&apos;re already driving the route. Fleet wraps are the lowest cost-per-impression advertising available for local businesses in Stony Plain, Spruce Grove, and Acheson.",
          icon: "🚛",
        },
        {
          title: "All Done In-House",
          description:
            "We don&apos;t outsource anything. Design, printing, cutting, and installation all happen right here in our Stony Plain shop. That means faster turnarounds, better quality control, and no middlemen adding to your cost. One point of contact from start to finish.",
          icon: "🏭",
        },
        {
          title: "Built for Alberta Weather",
          description:
            "We use UV-resistant inks and commercial-grade vinyl and substrates designed to handle -40 winters and +30 summers without fading, peeling, or cracking. Your signs and wraps look good for years, not months.",
          icon: "❄️",
        },
        {
          title: "Professional Brand Image",
          description:
            "Customers judge your business by how it looks. A clean, professional wrap on your truck or a sharp sign on your storefront tells people you take your work seriously. It&apos;s the difference between looking like a one-person operation and looking like an established company.",
          icon: "👔",
        },
      ]}
      processSteps={[
        {
          step: 1,
          title: "Tell Us What You Need",
          description:
            "Call 780.818.9904 or come by the shop. Whether it&apos;s fleet wraps for your trucks, a storefront sign, event banners, or vehicle decals — tell us the scope and we&apos;ll put together a plan and quote.",
        },
        {
          step: 2,
          title: "Design and Approval",
          description:
            "Send us your logo and brand assets, or work with us to create something from scratch. We&apos;ll mock up the design on your actual vehicle or sign dimensions so you can see exactly what it&apos;ll look like before we print a thing.",
        },
        {
          step: 3,
          title: "Print and Production",
          description:
            "Once approved, we print on our large-format commercial printer and cut on our precision plotter. Everything is produced in-house at our Stony Plain shop — no shipping delays, no third-party quality issues.",
        },
        {
          step: 4,
          title: "Install and Delivery",
          description:
            "For vehicle wraps and graphics, bring the vehicle in and we handle the install. For signs and banners, we can deliver or you can pick up. Most jobs are completed within the week from approval to finished product.",
        },
      ]}
      features={[
        "Fleet vehicle wraps — brand every truck, van, and car in your fleet",
        "Storefront signs and window graphics",
        "Banners — indoor and outdoor, any size",
        "Vinyl decals and lettering for vehicles and walls",
        "Custom graphics and logo printing",
        "Large-format commercial printing on-site",
        "Full plotter for precision cuts and contour graphics",
        "Design services available — bring us your logo, we&apos;ll do the rest",
        "Bulk and fleet pricing for commercial clients",
        "Serving businesses in Acheson industrial area",
        "Quick turnaround — most jobs done within the week",
        "Durable materials built for Alberta weather",
      ]}
      whySection={{
        title: "Why Local Print and Signage Matters",
        content:
          "When you order signs or wraps online, you get a box shipped to you and you figure out the install yourself. When you work with a local shop like Accurate Autoworks in Stony Plain, you get the full experience — consultation, design, production, and professional installation, all under one roof. We know the local market because we&apos;re part of it. We work with contractors in Acheson, retailers in Spruce Grove, service companies across Parkland County, and trades businesses that need their fleet to look professional and generate leads. Our commercial-grade equipment produces output that looks better and lasts longer than anything you&apos;ll find from an online print shop. And when you need changes, reprints, or new vehicles added to your fleet, we&apos;re right here — not behind a ticket system in another province.",
      }}
      faqs={[
        {
          question:
            "What commercial printing services do you offer in Stony Plain?",
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
          question:
            "Do you design the graphics or do I need to provide them?",
          answer:
            "Both. If you have existing brand assets (logo, colours, design files), we&apos;ll work with them. If you need design help, we can create custom graphics for your wrap, sign, or banner. Just bring us your logo and tell us what you&apos;re going for — we&apos;ll handle the creative.",
        },
        {
          question:
            "How long do printed wraps and signs last outside?",
          answer:
            "Our commercial-grade materials are built for Alberta conditions. Vehicle wraps typically last 5-7 years. Outdoor signs and banners use UV-resistant inks and durable substrates that hold up for years in sun, rain, and snow. We use quality materials because our name goes on every job.",
        },
        {
          question:
            "Do you serve businesses in the Acheson industrial area?",
          answer:
            "Absolutely. We work with many businesses in Acheson, Parkland County, Spruce Grove, and greater Edmonton. Whether you need fleet wraps for your construction company or storefront signage for your shop, we&apos;re just a short drive from the Acheson industrial park. Call 780.818.9904.",
        },
        {
          question:
            "How much does a storefront sign cost in Stony Plain?",
          answer:
            "Storefront signage varies based on size, materials, and complexity. Simple vinyl window lettering starts around $200-$500. Larger printed signs and dimensional lettering range from $500-$2,000+. We offer free on-site consultations for storefront projects — call 780.818.9904 and we&apos;ll come take a look at your space.",
        },
        {
          question:
            "Can you do event banners and trade show displays?",
          answer:
            "Yes. We print banners in any size for indoor or outdoor use — trade shows, grand openings, promotions, community events. Retractable banner stands, hanging banners, table wraps — whatever you need to make your business stand out. Fast turnaround too, usually within a few business days.",
        },
      ]}
      relatedServices={[
        { name: "Vinyl Wraps", href: "/wraps" },
        { name: "Window Tinting", href: "/tinting" },
        { name: "Car Detailing", href: "/detailing" },
      ]}
      ctaText="Get a Print Quote"
    />
  );
}
