import Link from "next/link";
import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact & Book a Service | Stony Plain",
  description:
    "Book window tinting, wraps, detailing, PPF or print services at Accurate Autoworks in Stony Plain. Call 780.818.9904 or request a quote online.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="pt-24 sm:pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <div className="text-xs font-bold uppercase tracking-[3px] text-[#22d65f] mb-3">
            Book Your Service
          </div>
          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">
            Get In <span className="text-[#22d65f]">Touch</span>
          </h1>
          <p className="mt-4 text-[#888] max-w-lg mx-auto">
            Tell us what you need and we&apos;ll get back to you fast. Or just call — we pick up.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <ContactForm />

          {/* Contact Info Sidebar */}
          <div className="lg:col-span-2 space-y-6">
            <div className="card-gradient rounded-xl p-8">
              <h2 className="text-sm font-bold uppercase tracking-widest text-[#22d65f] mb-4">Call Us</h2>
              <a href="tel:7808189904" className="text-2xl font-black text-white hover:text-[#22d65f] transition-colors">
                780.818.9904
              </a>
              <p className="mt-2 text-sm text-[#888]">We pick up. If we miss you, we&apos;ll call right back.</p>
            </div>

            <div className="card-gradient rounded-xl p-8">
              <h2 className="text-sm font-bold uppercase tracking-widest text-[#22d65f] mb-4">Location</h2>
              <p className="text-white font-medium">Stony Plain, Alberta</p>
              <p className="mt-2 text-sm text-[#888]">
                Serving Stony Plain, Spruce Grove, Parkland County, Acheson, and Edmonton West.
              </p>
            </div>

            <div className="card-gradient rounded-xl p-8">
              <h2 className="text-sm font-bold uppercase tracking-widest text-[#22d65f] mb-4">Follow Us</h2>
              <div className="space-y-3">
                <a
                  href="https://www.facebook.com/HFDC780"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-[#888] hover:text-white transition-colors"
                >
                  <span>Facebook</span>
                  <span className="text-[#22d65f]">&rarr;</span>
                </a>
                <a
                  href="https://www.instagram.com/accurate_autoworks/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-[#888] hover:text-white transition-colors"
                >
                  <span>Instagram</span>
                  <span className="text-[#22d65f]">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Page Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AutoRepair",
            name: "Accurate Autoworks",
            telephone: "+1-780-818-9904",
            url: "https://www.accurateautoworks.ca",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Stony Plain",
              addressRegion: "AB",
              addressCountry: "CA",
            },
            areaServed: [
              { "@type": "City", name: "Stony Plain" },
              { "@type": "City", name: "Spruce Grove" },
              { "@type": "AdministrativeArea", name: "Parkland County" },
              { "@type": "City", name: "Acheson" },
              { "@type": "City", name: "Edmonton" },
            ],
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+1-780-818-9904",
              contactType: "customer service",
              availableLanguage: "English",
            },
          }),
        }}
      />
    </div>
  );
}
