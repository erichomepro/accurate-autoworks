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
  heroImage?: string;
  benefits?: { title: string; description: string; icon: string }[];
  processSteps?: { step: number; title: string; description: string }[];
  features: string[];
  whySection?: { title: string; content: string };
  faqs: FAQ[];
  ctaText?: string;
  relatedServices?: { name: string; href: string }[];
}

export function ServicePage({
  badge,
  title,
  titleAccent,
  description,
  heroImage,
  benefits,
  processSteps,
  features,
  whySection,
  faqs,
  ctaText = "Book This Service",
  relatedServices,
}: ServicePageProps) {
  return (
    <div className="pb-20">
      {/* Hero */}
      {heroImage ? (
        <section
          className="graffiti-hero min-h-[60vh] flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center py-32 sm:py-40">
            <div className="inline-block px-4 py-1.5 mb-6 text-xs font-bold uppercase tracking-[3px] text-[#22d65f] border border-[#22d65f]/30 rounded-full bg-black/40 backdrop-blur-sm">
              {badge}
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[0.95]">
              {title} <span className="text-[#22d65f] glow-accent">{titleAccent}</span>
            </h1>
            <p className="mt-6 text-lg text-[#ccc] max-w-2xl mx-auto leading-relaxed">
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
          </div>
        </section>
      ) : (
        <section className="pt-24 sm:pt-32 max-w-5xl mx-auto px-4 sm:px-6 text-center mb-16">
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
      )}

      {/* Benefits Section */}
      {benefits && benefits.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-center mb-12">
            Why <span className="text-[#22d65f]">{titleAccent}</span>?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="card-gradient rounded-xl p-8 text-center"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-base font-bold uppercase tracking-wide text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-sm text-[#999] leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Process / How It Works */}
      {processSteps && processSteps.length > 0 && (
        <section className="py-20 bg-[#0d0d0d] border-t border-b border-[#1a1a1a]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-center mb-14">
              The <span className="text-[#22d65f]">Process</span>
            </h2>
            <div className="space-y-10">
              {processSteps.map((step, index) => (
                <div key={step.step} className="flex items-start gap-6">
                  <div className="process-number">{step.step}</div>
                  <div className="flex-1 pt-1">
                    <h3 className="text-base font-bold uppercase tracking-wide text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-[#999] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden" aria-hidden="true" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Features Grid */}
      <section className={`max-w-7xl mx-auto px-4 sm:px-6 py-20 ${benefits || processSteps ? "" : "mt-0"} spray-texture`}>
        <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-center mb-10">
          What&apos;s <span className="text-[#22d65f]">Included</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div key={feature} className="card-gradient rounded-xl p-6 flex items-start gap-4">
              <span className="text-[#22d65f] font-bold text-lg mt-0.5">&#10003;</span>
              <span className="text-sm text-[#ccc] leading-relaxed">{feature}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Why This Matters */}
      {whySection && (
        <section className="py-20 bg-[#0d0d0d] border-t border-b border-[#1a1a1a]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight mb-6">
              {whySection.title}
            </h2>
            <p className="text-[#999] leading-relaxed text-base">
              {whySection.content}
            </p>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-20">
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

      {/* Related Services */}
      {relatedServices && relatedServices.length > 0 && (
        <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-20">
          <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-center mb-8">
            You Might Also <span className="text-[#22d65f]">Like</span>
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {relatedServices.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="card-gradient rounded-xl px-6 py-4 text-sm font-bold uppercase tracking-wide text-[#ccc] hover:text-[#22d65f] transition-colors"
              >
                {service.name}
              </Link>
            ))}
          </div>
        </section>
      )}

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
