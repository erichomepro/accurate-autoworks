"use client";

import { useEffect, useState } from "react";

interface InstaPost {
  id: string;
  media_url: string;
  permalink: string;
  caption?: string;
  media_type: string;
  thumbnail_url?: string;
}

interface Card {
  img: string;
  link: string;
  isVideo: boolean;
}

const PROFILE = "https://www.instagram.com/accurate_autoworks/";

// Real Accurate Autoworks job photos. Shown when the live IG feed is unavailable.
const FALLBACK: Card[] = Array.from({ length: 12 }, (_, i) => ({
  img: `/images/work/work-${i + 1}.jpg`,
  link: PROFILE,
  isVideo: false,
}));

export function LatestFromInstagram() {
  const [cards, setCards] = useState<Card[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch("/api/instagram")
      .then((r) => r.json())
      .then((data) => {
        const posts: InstaPost[] = data.posts || [];
        if (posts.length > 0) {
          setCards(
            posts.map((p) => ({
              img: p.media_type === "VIDEO" ? p.thumbnail_url || p.media_url : p.media_url,
              link: p.permalink,
              isVideo: p.media_type === "VIDEO",
            }))
          );
        } else {
          setCards(FALLBACK);
        }
        setLoaded(true);
      })
      .catch(() => {
        setCards(FALLBACK);
        setLoaded(true);
      });
  }, []);

  if (!loaded) return null;

  return (
    <section className="py-20 sm:py-28 bg-[#0a0a0a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="text-xs font-bold uppercase tracking-[3px] text-[#EEFF00] mb-3">
            Follow Us
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tighter">
            Latest From <span className="text-[#EEFF00]">Instagram</span>
          </h2>
          <a
            href={PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-[#EEFF00] hover:text-[#F5FF5E] font-bold transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            @Accurate_autoworks
          </a>
        </div>

        {/* Horizontal snap carousel of work cards */}
        <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {cards.map((card, i) => (
            <a
              key={i}
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group snap-start shrink-0 w-[260px] sm:w-[300px] bg-white rounded-2xl overflow-hidden shadow-lg"
            >
              {/* Card header, mimics the IG post chrome */}
              <div className="flex items-center justify-between px-3 py-2.5 border-b border-gray-100">
                <div className="flex items-center gap-2 min-w-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/aaw-crest.png"
                    alt=""
                    className="w-8 h-8 rounded-full object-contain bg-[#0a0a0a] p-1"
                  />
                  <div className="leading-tight min-w-0">
                    <div className="text-xs font-bold text-gray-900 truncate">accurate_autoworks</div>
                    <div className="text-[10px] text-gray-500">Stony Plain, AB</div>
                  </div>
                </div>
                <span className="shrink-0 text-[11px] font-bold text-[#1a73e8]">View profile</span>
              </div>
              {/* Image */}
              <div className="relative aspect-square bg-gray-100 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={card.img}
                  alt="Accurate Autoworks vehicle tint, wrap, detailing and PPF work in Stony Plain AB"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                {card.isVideo && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-black/60 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
              {/* Footer */}
              <div className="px-3 py-2.5 text-[11px] font-semibold text-[#1a73e8]">
                View more on Instagram
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
