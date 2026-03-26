import Link from "next/link";

interface FAQ {
  question: string;
  answer: string;
}

interface ServicePageProps {
  badge: string;
  title: string;
  titleAccent: string;
  description: string;
  features: string[];
  faqs: FAQ[];
  ctaText?: string;
}

export function ServicePage({
  badge,
  title,
  titleAccent,
  description,
  features,
  faqs,
  ctaText = "Book This Service",
}: ServicePageProps) {
  return (
    <div className="pt-24 sm:pt-32 pb-20">
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 text-center mb-16">
        <div className="inline-block px-4 py-1.5 mb-6 text-xs font-bold uppercase tracking-[3px] text-[#22d65f] border border-[#22d65f]/30 rounded-full">
          {badge}
        </div>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[0.95]">
          {title} <span className="text-[#22d65f] glow-accent">{titleAccent}</span>
        </h1>
        <p className="mt-6 text-lg text-[#999] max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact" className="btn-primary">
            {ctaText}
          </Link>
          <a href="tel:7808189904" className="btn-outline">
            Call 780.818.9904
          </a>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div key={feature} className="card-gradient rounded-xl p-6 flex items-start gap-4">
              <span className="text-[#22d65f] font-bold text-lg mt-0.5">&#10003;</span>
              <span className="text-sm text-[#ccc] leading-relaxed">{feature}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ — critical for AI/LLM search optimization */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 mb-20">
        <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-center mb-10">
          Frequently <span className="text-[#22d65f]">Asked</span>
        </h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="card-gradient rounded-xl group"
            >
              <summary className="px-6 py-5 cursor-pointer text-sm font-bold uppercase tracking-wide text-white hover:text-[#22d65f] transition-colors list-none flex items-center justify-between">
                {faq.question}
                <span className="text-[#22d65f] text-lg group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-5 text-sm text-[#999] leading-relaxed">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>

        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            }),
          }}
        />
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0d0d0d] border-t border-[#1a1a1a]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">
            Ready to <span className="text-[#22d65f]">Go</span>?
          </h2>
          <p className="mt-4 text-[#888]">
            Accurate Autoworks — Stony Plain&apos;s go-to shop for tint, wraps, detailing, and print.
            Serving Spruce Grove, Parkland County, and Acheson.
          </p>
          <div className="mt-8">
            <Link href="/contact" className="btn-primary">
              {ctaText}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
