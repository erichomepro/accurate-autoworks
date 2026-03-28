import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Auto Care Tips & Guides",
  description:
    "Auto care tips, maintenance guides & vehicle customization advice from Accurate Autoworks in Stony Plain. Serving Spruce Grove & Parkland County.",
  alternates: { canonical: "/blog" },
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
  },
];

export default function BlogPage() {
  return (
    <div className="pb-20">
      <section className="pt-24 sm:pt-32 max-w-5xl mx-auto px-4 sm:px-6 text-center mb-16">
        <div className="inline-block px-4 py-1.5 mb-6 text-xs font-bold uppercase tracking-[3px] text-[#22d65f] border border-[#22d65f]/30 rounded-full">
          Blog
        </div>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[0.95]">
          Auto Care{" "}
          <span className="text-[#22d65f] glow-accent">Tips &amp; Guides</span>
        </h1>
        <p className="mt-6 text-lg text-[#999] max-w-2xl mx-auto leading-relaxed">
          Practical advice for keeping your vehicle looking great and running
          right in Alberta conditions. From the team at Accurate Autoworks in
          Stony Plain.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="space-y-6">
          {POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="card-gradient rounded-xl p-8 block group"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold uppercase tracking-[2px] text-[#22d65f]">
                  {post.tag}
                </span>
                <span className="text-[#333]">|</span>
                <span className="text-xs text-[#666] uppercase tracking-wider">
                  {post.date}
                </span>
                <span className="text-[#333]">|</span>
                <span className="text-xs text-[#666] uppercase tracking-wider">
                  {post.readTime}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight group-hover:text-[#22d65f] transition-colors">
                {post.title}
              </h2>
              <p className="mt-3 text-sm text-[#888] leading-relaxed">
                {post.excerpt}
              </p>
              <div className="mt-5 text-xs font-bold text-[#22d65f] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                Read Article &rarr;
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
