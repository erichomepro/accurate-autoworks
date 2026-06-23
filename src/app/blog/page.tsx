import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Auto Care Tips & Guides",
  description:
    "Auto care tips, maintenance guides & vehicle customization advice from Accurate Autoworks in Stony Plain. Serving Spruce Grove & Parkland County.",
  alternates: { canonical: "/blog/" },
};

const POSTS = [
  {
    slug: "spring-vehicle-maintenance-guide-stony-plain",
    title:
      "The Complete Spring Vehicle Maintenance Guide for Stony Plain & Spruce Grove Drivers",
    excerpt:
      "Alberta winters are brutal on vehicles. Here is everything you need to do this spring to undo the damage, protect your investment, and get your ride ready for summer.",
    date: "March 27, 2026",
    readTime: "12 min read",
    tag: "Auto Care Guide",
    featured: true,
  },
  {
    slug: "window-tinting-cost-alberta-2026",
    title: "How Much Does Window Tinting Cost in Alberta? (2026)",
    excerpt:
      "Real 2026 Alberta window tint pricing: dyed vs carbon vs ceramic, what drives the cost, the legal tint limits in Alberta, and how to spot a cheap job that will fail.",
    date: "June 23, 2026",
    readTime: "12 min read",
    tag: "Window Tinting",
  },
  {
    slug: "winterizing-vehicle-alberta-stony-plain",
    title: "Winterizing Your Vehicle in Alberta",
    excerpt:
      "Complete Alberta vehicle winterizing guide: winter tires, PPF, window tint, detailing, and ceramic coating. What Stony Plain and Spruce Grove drivers need before the cold hits.",
    date: "June 22, 2026",
    readTime: "11 min read",
    tag: "Auto Care Guide",
  },
  {
    slug: "truck-suv-detailing-stony-plain",
    title: "Truck & SUV Detailing in Stony Plain",
    excerpt:
      "Truck and SUV detailing in Stony Plain & Spruce Grove: what's different, 2026 Alberta pricing, packages, and what to expect at Accurate Autoworks.",
    date: "June 21, 2026",
    readTime: "9 min read",
    tag: "Detailing",
  },
  {
    slug: "vehicle-wrap-cost-2026-alberta",
    title: "Vehicle Wrap Cost 2026: Alberta Pricing Guide",
    excerpt:
      "How much does a vehicle wrap cost in Alberta in 2026? Full colour change, partial wraps, and commercial fleet pricing, with real numbers from Stony Plain.",
    date: "June 20, 2026",
    readTime: "10 min read",
    tag: "Vinyl Wraps",
  },
  {
    slug: "ppf-vs-vinyl-wrap-alberta-guide",
    title: "PPF vs Vinyl Wrap: Which Does Your Vehicle Actually Need?",
    excerpt:
      "Rock chips or a new colour? Alberta's complete 2026 guide to PPF vs vinyl wrap: costs, lifespan, protection levels, and which one your vehicle actually needs.",
    date: "June 19, 2026",
    readTime: "10 min read",
    tag: "PPF vs Wrap",
  },
  {
    slug: "commercial-signs-vehicle-wraps-stony-plain",
    title: "Commercial Signs & Fleet Wraps in Stony Plain",
    excerpt:
      "Fleet vehicle wraps, storefront signs, banners, and decals for Stony Plain & Spruce Grove businesses. Design, print, and install all in-house at Accurate Autoworks.",
    date: "June 18, 2026",
    readTime: "9 min read",
    tag: "Commercial",
  },
  {
    slug: "tire-changeover-stony-plain-spruce-grove",
    title: "Tire Changeover in Stony Plain & Spruce Grove",
    excerpt:
      "Seasonal tire changeover in Stony Plain & Spruce Grove: when to switch, winter vs all-weather vs all-season, 2026 costs, and what's included.",
    date: "June 17, 2026",
    readTime: "8 min read",
    tag: "Tires",
  },
  {
    slug: "ceramic-coating-stony-plain-alberta",
    title: "Ceramic Coating in Stony Plain: How It Works & Is It Worth It?",
    excerpt:
      "Ceramic coating in Stony Plain: how it works, 2026 Alberta costs, how long it lasts, and whether it's worth it for your truck or SUV.",
    date: "June 16, 2026",
    readTime: "10 min read",
    tag: "Ceramic Coating",
  },
  {
    slug: "paint-protection-film-cost-alberta-2026",
    title: "Paint Protection Film Cost in Alberta (2026)",
    excerpt:
      "Paint protection film cost in Alberta in 2026: full PPF, partial coverage, lifespan, types, the install process, and an honest answer on whether PPF is worth it.",
    date: "June 15, 2026",
    readTime: "11 min read",
    tag: "PPF",
  },
  {
    slug: "window-tinting-stony-plain-spruce-grove",
    title: "Window Tinting in Stony Plain & Spruce Grove",
    excerpt:
      "Window tinting in Stony Plain & Spruce Grove: Alberta tint laws, ceramic vs carbon vs dyed, 2026 costs, UV protection, and expert installation.",
    date: "May 2, 2026",
    readTime: "10 min read",
    tag: "Window Tinting",
  },
  {
    slug: "vinyl-wraps-stony-plain-spruce-grove",
    title: "Vinyl Wraps in Stony Plain & Spruce Grove",
    excerpt:
      "Vinyl wraps and colour-change wraps in Stony Plain: the types, Alberta pricing, how long they last, and what to expect.",
    date: "April 28, 2026",
    readTime: "9 min read",
    tag: "Vinyl Wraps",
  },
  {
    slug: "auto-detailing-stony-plain-spruce-grove",
    title: "Auto Detailing in Stony Plain & Spruce Grove",
    excerpt:
      "Auto detailing in Stony Plain & Spruce Grove: the full menu, 2026 Alberta pricing, interior vs exterior explained, and what to expect.",
    date: "April 20, 2026",
    readTime: "9 min read",
    tag: "Detailing",
  },
  {
    slug: "paint-protection-film-ppf-stony-plain-alberta",
    title: "Paint Protection Film in Stony Plain",
    excerpt:
      "PPF in Stony Plain & Spruce Grove: rock chip protection, self-healing film, 2026 Alberta costs, and whether a clear bra is worth it for your vehicle.",
    date: "April 12, 2026",
    readTime: "9 min read",
    tag: "PPF",
  },
];

export default function BlogPage() {
  const featured = POSTS.find((p) => p.featured);
  const rest = POSTS.filter((p) => !p.featured);

  return (
    <div className="pb-20">
      {/* Hero */}
      <section className="relative pt-24 sm:pt-32 max-w-5xl mx-auto px-4 sm:px-6 text-center mb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#EEFF00]/[0.03] via-transparent to-transparent" />
        <div className="relative">
          <div className="inline-flex items-center gap-2 px-5 py-2 mb-8 text-xs font-bold uppercase tracking-[3px] text-[#EEFF00] border border-[#EEFF00]/30 rounded-full backdrop-blur-sm bg-[#EEFF00]/5">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
            Blog
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[0.95]">
            Auto Care{" "}
            <span className="text-[#EEFF00] glow-accent">Tips &amp; Guides</span>
          </h1>
          <p className="mt-6 text-lg text-[#999] max-w-2xl mx-auto leading-relaxed">
            Practical advice for keeping your vehicle looking great and running
            right in Alberta conditions. From the team at Accurate Autoworks in
            Stony Plain.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#EEFF00]/40" />
            <div className="w-2 h-2 rotate-45 border border-[#EEFF00]/40" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#EEFF00]/40" />
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featured && (
        <section className="max-w-5xl mx-auto px-4 sm:px-6 mb-12">
          <Link
            href={`/blog/${featured.slug}`}
            className="group block relative rounded-2xl overflow-hidden"
          >
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#EEFF00]/10 via-[#141414] to-[#141414] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative card-gradient rounded-2xl p-8 sm:p-10 lg:p-12 transition-all duration-300 group-hover:border-[#EEFF00]/40">
              {/* Featured badge */}
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[10px] font-bold uppercase tracking-[2px] text-black bg-[#EEFF00] rounded-full">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                  Featured
                </span>
                <span className="text-xs font-bold uppercase tracking-[2px] text-[#EEFF00]">
                  {featured.tag}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight leading-tight group-hover:text-[#EEFF00] transition-colors duration-300">
                {featured.title}
              </h2>

              <p className="mt-4 text-base text-[#888] leading-relaxed max-w-3xl">
                {featured.excerpt}
              </p>

              <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4 text-xs text-[#666] uppercase tracking-wider">
                  <div className="flex items-center gap-2">
                    <svg className="w-3.5 h-3.5 text-[#EEFF00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {featured.date}
                  </div>
                  <span className="w-1 h-1 rounded-full bg-[#333]" />
                  <div className="flex items-center gap-2">
                    <svg className="w-3.5 h-3.5 text-[#EEFF00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {featured.readTime}
                  </div>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-bold text-[#EEFF00] uppercase tracking-widest group-hover:gap-3 transition-all duration-300">
                  Read Article
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* Additional Posts Grid */}
      {rest.length > 0 && (
        <section className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-sm font-bold uppercase tracking-widest text-[#EEFF00] mb-6">
            More Articles
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="card-gradient rounded-2xl p-6 group flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#EEFF00]">
                    {post.tag}
                  </span>
                </div>
                <h3 className="text-lg font-black uppercase tracking-tight group-hover:text-[#EEFF00] transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm text-[#888] leading-relaxed flex-1">
                  {post.excerpt}
                </p>
                <div className="mt-5 flex items-center justify-between text-xs text-[#666] uppercase tracking-wider">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Newsletter CTA */}
      <section className="mt-16 max-w-3xl mx-auto px-4 sm:px-6">
        <div className="relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#EEFF00]/10 via-transparent to-transparent" />
          <div className="absolute inset-0 border border-[#EEFF00]/20 rounded-2xl" />
          <div className="relative p-8 sm:p-10 text-center">
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight">
              Want More{" "}
              <span className="text-[#EEFF00] glow-accent">Tips?</span>
            </h2>
            <p className="mt-3 text-sm text-[#999] max-w-md mx-auto">
              Follow Accurate Autoworks for seasonal auto care advice, local
              deals, and behind-the-scenes content from the shop.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/contact" className="btn-primary text-sm">
                Get in Touch
              </Link>
              <a
                href="https://www.instagram.com/accurate_autoworks/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-sm"
              >
                Follow on Instagram
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
