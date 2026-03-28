import type { Metadata } from "next";
import Link from "next/link";
import { InstagramFeed } from "@/components/instagram-feed";

export const metadata: Metadata = {
  title: "Tint, Wrap & Detail Gallery | Stony Plain",
  description:
    "See our work — window tinting, vinyl wraps, car detailing, PPF & commercial printing at Accurate Autoworks in Stony Plain, AB. Real results.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <div className="pt-24 sm:pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <div className="inline-block px-4 py-1.5 mb-6 text-xs font-bold uppercase tracking-[3px] text-[#22d65f] border border-[#22d65f]/30 rounded-full">
            Our Work
          </div>
          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">
            The <span className="text-[#22d65f]">Gallery</span>
          </h1>
          <p className="mt-4 text-[#888] max-w-lg mx-auto">
            Real work. Real results. Check out our latest tints, wraps, details, and prints.
          </p>
        </div>

        {/* Live Instagram Feed */}
        <InstagramFeed />

        {/* Fallback Gallery grid — shows if Instagram feed is not connected */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 mt-8">
          {[
            { label: "Full Wrap", category: "Wraps" },
            { label: "Ceramic Tint", category: "Tinting" },
            { label: "Interior Detail", category: "Detailing" },
            { label: "Fleet Graphics", category: "Print" },
            { label: "Color Change", category: "Wraps" },
            { label: "PPF Install", category: "PPF" },
            { label: "Exterior Detail", category: "Detailing" },
            { label: "Storefront Sign", category: "Print" },
            { label: "Limo Tint", category: "Tinting" },
            { label: "Matte Wrap", category: "Wraps" },
            { label: "Engine Bay", category: "Detailing" },
            { label: "Vehicle Decals", category: "Print" },
          ].map((item, i) => (
            <div
              key={i}
              className="aspect-square bg-[#141414] border border-[#2a2a2a] rounded-lg flex flex-col items-center justify-center text-center p-4 hover:border-[#22d65f] transition-colors group"
            >
              <div className="text-3xl mb-3 opacity-30 group-hover:opacity-60 transition-opacity">
                {item.category === "Wraps" ? "🎨" : item.category === "Tinting" ? "🔲" : item.category === "Detailing" ? "✨" : item.category === "PPF" ? "🛡️" : "🖨️"}
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#666] group-hover:text-[#999] transition-colors">
                {item.label}
              </div>
              <div className="text-[10px] uppercase tracking-widest text-[#22d65f]/50 mt-1">{item.category}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-[#888] mb-4">
            Want to see more? Check out our latest work on social media.
          </p>
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://www.instagram.com/accurate_autoworks/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-xs"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/HFDC780"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-xs"
            >
              Facebook
            </a>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">
            Like What You <span className="text-[#22d65f]">See</span>?
          </h2>
          <p className="mt-3 text-[#888]">Let&apos;s make your ride the next one in the gallery.</p>
          <div className="mt-6">
            <Link href="/contact" className="btn-primary">
              Book Your Service
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
