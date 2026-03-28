import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";

export const metadata: Metadata = {
  title: "Window Tinting Stony Plain | Ceramic & Carbon Tint",
  description:
    "Professional window tinting in Stony Plain. Ceramic, carbon & dyed films from $200. UV protection, heat rejection, privacy. Serving Spruce Grove & Parkland County.",
  alternates: { canonical: "/tinting" },
  openGraph: { images: [{ url: "/images/hero-tinting.jpg", width: 1200, height: 630, alt: "Window Tinting at Accurate Autoworks Stony Plain" }] },
};

export default function TintingPage() {
  return (
    <ServicePage
      badge="Window Tinting"
      title="Premium Window"
      titleAccent="Tinting"
      heroImage="/images/hero-tinting.jpg"
      description="Keep your interior cool, protect your skin from UV, and get the privacy you want. We carry ceramic, carbon, and dyed tint films in every shade — installed with zero bubbles, guaranteed. At Accurate Autoworks in Stony Plain, we&apos;ve tinted hundreds of vehicles from daily drivers to brand new trucks, and every install comes with the same attention to detail. Whether you want a subtle factory look or full limo dark, we&apos;ll get it done right the first time."
      benefits={[
        {
          title: "Beat the Summer Heat",
          description:
            "Alberta summers hit different when your car interior is 20 degrees cooler. Ceramic tint blocks up to 85% of infrared heat so you stop cooking the second you get in your vehicle. Your AC works less, your fuel economy improves, and your leather doesn&apos;t crack.",
          icon: "☀️",
        },
        {
          title: "UV Protection That Matters",
          description:
            "Our premium films block 99% of harmful UV rays — the same ones that fade your dash, crack your leather, and damage your skin on long drives. Think of it as sunscreen for your vehicle that never wears off.",
          icon: "🛡️",
        },
        {
          title: "Privacy and Security",
          description:
            "Darker tint means people can&apos;t see what&apos;s inside your vehicle. Whether it&apos;s tools for work, shopping bags, or just your own peace of mind — tinted windows keep your business your business. Especially useful for trucks parked at job sites around Acheson and Parkland County.",
          icon: "🔒",
        },
        {
          title: "Looks That Turn Heads",
          description:
            "Let&apos;s be honest — tinted windows just look good. A clean tint job transforms any vehicle from stock to sharp in a couple of hours. It&apos;s the single best bang-for-your-buck upgrade you can do to your ride.",
          icon: "✨",
        },
      ]}
      processSteps={[
        {
          step: 1,
          title: "Book Your Spot",
          description:
            "Call us at 780.818.9904 or book online. Tell us your vehicle make and model, and what level of tint you want. We&apos;ll recommend the right film and shade for your needs and give you a time that works.",
        },
        {
          step: 2,
          title: "Drop It Off",
          description:
            "Bring your ride to the shop in Stony Plain. We&apos;ll do a quick walk-around, check the condition of your glass, and confirm everything before we start. Most tint jobs are done same-day.",
        },
        {
          step: 3,
          title: "Precision Install",
          description:
            "We custom-cut every piece of film to your exact window dimensions — no pre-cut templates. The glass gets cleaned, prepped, and the film is applied with zero bubbles, zero dust, zero shortcuts.",
        },
        {
          step: 4,
          title: "Pick Up and Enjoy",
          description:
            "We&apos;ll walk you through the cure time and care instructions. Most vehicles are ready for pickup the same afternoon. Drive off with a vehicle that looks completely different — in the best way.",
        },
      ]}
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
      whySection={{
        title: "Why Tint Matters in Alberta",
        content:
          "Your vehicle is one of the biggest purchases you&apos;ll make. Window tinting isn&apos;t just about looks — it&apos;s about protecting your interior from Alberta&apos;s brutal UV exposure, keeping your cabin cool during those +30 summer days, and adding privacy and security year-round. At Accurate Autoworks in Stony Plain, we&apos;ve installed tint on hundreds of vehicles from Spruce Grove, Parkland County, Acheson, and Edmonton West. We use premium ceramic and carbon films that actually perform — not the cheap stuff that bubbles and turns purple after a year. Every install is backed by a warranty, and we only recommend tint levels that keep you legal on Alberta roads. If you&apos;ve been thinking about tinting your windows, stop thinking and book it. It&apos;s one of those upgrades where you wonder why you didn&apos;t do it sooner.",
      }}
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
            "Absolutely. Ceramic tint rejects up to 99% of UV rays and significantly more infrared heat than carbon or dyed films — your vehicle interior stays noticeably cooler. It also doesn&apos;t interfere with cell signals, GPS, or radio like metallic tints can. It costs more upfront but pays for itself in comfort.",
        },
        {
          question: "Can you tint my truck or SUV?",
          answer:
            "Yes — we tint everything from sedans to full-size trucks, SUVs, vans, and commercial vehicles. We also do fleet tinting for businesses in the Stony Plain, Spruce Grove, and Acheson area. Call us at 780.818.9904 for a fleet quote.",
        },
        {
          question:
            "Where can I get my windows tinted near Spruce Grove?",
          answer:
            "Accurate Autoworks is located in Stony Plain, just minutes from Spruce Grove. We&apos;re the go-to tint shop for drivers across Parkland County, Acheson, and Edmonton West. Easy to get to, free parking, and most tint jobs are done the same day you drop off.",
        },
        {
          question:
            "Will window tint help in Alberta winters?",
          answer:
            "Yes. Tint isn&apos;t just a summer upgrade. In winter, tinted windows reduce glare from low-angle sun and snow reflection — a huge deal on Alberta highways. Ceramic tint also helps retain heat inside your cabin, so your heater works more efficiently. It&apos;s a year-round investment.",
        },
      ]}
      relatedServices={[
        { name: "Vinyl Wraps", href: "/wraps" },
        { name: "Paint Protection Film", href: "/ppf" },
        { name: "Car Detailing", href: "/detailing" },
      ]}
      ctaText="Book Your Tint"
    />
  );
}
