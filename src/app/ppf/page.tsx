import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";

export const metadata: Metadata = {
  title:
    "Paint Protection Film (PPF) Stony Plain | Clear Bra | Spruce Grove, Parkland County",
  description:
    "Professional paint protection film (PPF) installation in Stony Plain, AB. Self-healing clear bra from $800. Protect against rock chips, scratches, road debris. Serving Spruce Grove, Parkland County, Acheson & Edmonton West. Call 780.818.9904",
};

export default function PPFPage() {
  return (
    <ServicePage
      badge="Paint Protection Film"
      title="Paint"
      titleAccent="Protection"
      heroImage="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920&q=80"
      description="Invisible armor for your vehicle. PPF absorbs rock chips, scratches, and road debris so your paint doesn&apos;t have to. Self-healing technology means minor scratches disappear with heat. At Accurate Autoworks in Stony Plain, we precision-cut every piece of film using a digital plotter for a factory-perfect fit — no guessing, no rough edges. If you&apos;re driving Alberta roads, especially the gravel highways around Parkland County, PPF isn&apos;t optional — it&apos;s essential."
      benefits={[
        {
          title: "Rock Chip Protection",
          description:
            "Alberta highways will chip your paint. Period. Gravel trucks, construction zones, rural roads around Acheson and Parkland County — rocks are everywhere. PPF absorbs the impact so your paint stays flawless underneath. One saved rock chip pays for a section of film.",
          icon: "🪨",
        },
        {
          title: "Self-Healing Technology",
          description:
            "Light scratches from car washes, keys, or brush contact actually heal themselves. The top layer of the film smooths out with heat — sunlight on a warm day or a splash of hot water. Your vehicle stays looking clean without constant maintenance.",
          icon: "🔄",
        },
        {
          title: "Invisible Protection",
          description:
            "When installed properly, you can&apos;t even tell PPF is on the vehicle. It&apos;s optically clear with no orange peel or distortion. Your vehicle looks exactly the same — just protected. Nobody will know it&apos;s there until a rock bounces off your hood instead of chipping it.",
          icon: "👁️",
        },
        {
          title: "Preserve Resale Value",
          description:
            "A vehicle with perfect paint is worth significantly more at trade-in or private sale. PPF keeps your paint in new condition for years. When you eventually remove the film, the paint underneath looks like it did the day you drove it off the lot.",
          icon: "📈",
        },
      ]}
      processSteps={[
        {
          step: 1,
          title: "Choose Your Coverage",
          description:
            "Call us at 780.818.9904 and tell us your vehicle. We&apos;ll recommend coverage based on how and where you drive. Partial front-end for highway commuters, full front for gravel road warriors, or full vehicle for maximum protection. We&apos;ll quote it on the spot.",
        },
        {
          step: 2,
          title: "Precision Cutting",
          description:
            "Every piece of PPF is custom-cut on our digital plotter using exact templates for your vehicle&apos;s make, model, and year. No hand-trimming on your paint, no blade marks, no risk of scratching your vehicle during install.",
        },
        {
          step: 3,
          title: "Surface Prep and Install",
          description:
            "Your vehicle gets a thorough wash and decontamination before any film goes on. We work in a controlled environment to keep dust out. The film is applied wet, squeezeed to remove all moisture, and carefully wrapped around edges for a seamless look.",
        },
        {
          step: 4,
          title: "Cure and Pickup",
          description:
            "The film needs 24-48 hours to fully cure and bond. We&apos;ll let you know exactly when your vehicle is ready. You&apos;ll drive away knowing your paint is protected for the next 7-10 years — backed by a manufacturer warranty.",
        },
      ]}
      features={[
        "Full front-end coverage — hood, fenders, bumper, mirrors",
        "Full vehicle PPF for maximum protection",
        "Partial coverage packages — high-impact zones only",
        "Self-healing film — minor scratches disappear with heat",
        "Virtually invisible — protects without changing your vehicle&apos;s look",
        "UV protection prevents paint fading and yellowing",
        "10-year warranty on premium PPF products",
        "Custom cut with precision plotter for perfect fitment",
        "Ideal for new vehicles — protect from day one",
      ]}
      whySection={{
        title: "Why PPF is Essential on Alberta Roads",
        content:
          "If you&apos;ve driven Highway 16A between Stony Plain and Edmonton, you&apos;ve probably followed a gravel truck and watched rocks ping off your hood. If you&apos;ve taken a rural road around Parkland County or Acheson, you know what loose gravel does to a front bumper. Alberta roads are hard on paint, and once a chip happens, it&apos;s there forever — unless you repaint. Paint protection film stops that cycle entirely. At Accurate Autoworks, we install PPF that&apos;s engineered to absorb impacts without showing damage, and its self-healing top coat takes care of light scratches on its own. We&apos;ve protected everything from brand-new trucks to luxury sports cars for customers across Spruce Grove, Stony Plain, and Edmonton West. The best time to apply PPF is when your paint is still perfect — the second best time is right now.",
      }}
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
            "When installed properly, PPF is virtually invisible. Modern films are crystal clear with no orange peel texture. You&apos;ll know it&apos;s there when a rock chip bounces off your hood instead of chipping your paint — but visually, it&apos;s undetectable.",
        },
        {
          question: "Should I get PPF on a new car?",
          answer:
            "Absolutely — the best time to apply PPF is when the paint is brand new and perfect. It&apos;s much easier and more cost-effective to protect paint than to repair chips and scratches later. Think of it as insurance for your vehicle&apos;s finish, especially with Alberta&apos;s gravel roads and harsh winters.",
        },
        {
          question:
            "Where can I get PPF installed near Spruce Grove?",
          answer:
            "Accurate Autoworks in Stony Plain is your local PPF installation shop, just minutes from Spruce Grove. We use precision digital cutting for exact fitment and offer everything from partial coverage to full vehicle protection. Call 780.818.9904 for a quote.",
        },
        {
          question:
            "Can PPF and ceramic coating be combined?",
          answer:
            "Yes, and it&apos;s actually the ultimate protection combo. PPF handles the physical protection — rock chips, scratches, debris. Ceramic coating goes on top and adds hydrophobic properties, UV protection, and makes the vehicle easier to wash. We offer both services and can package them together.",
        },
        {
          question:
            "Does PPF protect against Alberta winter road salt?",
          answer:
            "Yes. PPF creates a physical barrier between your paint and road salt, brine, and calcium chloride — all of which are corrosive to automotive paint and clear coat. Especially important on the front end, rocker panels, and behind wheel wells where salt spray is heaviest during Alberta winters.",
        },
      ]}
      relatedServices={[
        { name: "Car Detailing", href: "/detailing" },
        { name: "Window Tinting", href: "/tinting" },
        { name: "Vinyl Wraps", href: "/wraps" },
      ]}
      ctaText="Get a PPF Quote"
    />
  );
}
