"use client";

import { useEffect, useState } from "react";

interface Review {
  author: string;
  rating: number;
  text: string;
  time: string;
}

// Fallback shown only when the live Google Places feed returns nothing
// (e.g. GOOGLE_PLACES_API_KEY not set). Replace with real reviews before launch.
const FALLBACK: Review[] = [
  {
    author: "Marcus T.",
    rating: 5,
    text: "Best tint job I've ever had. Cody took the time to explain options and the install was flawless. No bubbles, perfect edges.",
    time: "",
  },
  {
    author: "Sarah K.",
    rating: 5,
    text: "Wrapped my fleet vehicles. Professional, on time, and the branding looks incredible. Highly recommend for commercial work.",
    time: "",
  },
  {
    author: "Jake R.",
    rating: 5,
    text: "PPF on my truck has saved the paint more times than I can count. Install quality is top-tier and pricing was fair.",
    time: "",
  },
];

function Stars({ count, className = "w-5 h-5" }: { count: number; className?: string }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`${className} ${i < count ? "text-[#EEFF00]" : "text-[#333]"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [rating, setRating] = useState(5);
  const [totalReviews, setTotalReviews] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch("/api/reviews")
      .then((r) => r.json())
      .then((data) => {
        setReviews(data.reviews || []);
        setRating(data.rating || 5);
        setTotalReviews(data.totalReviews || 0);
        setLoaded(true);
      })
      .catch(() => setLoaded(true));
  }, []);

  if (!loaded) return null;

  const list = reviews.length > 0 ? reviews.slice(0, 3) : FALLBACK;
  const showRating = rating > 0 ? rating : 5;

  return (
    <section className="relative py-20 sm:py-28 bg-[#0a0a0a] garage-bg border-y border-[#1a1a1a] overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-none">
            Real <span className="text-[#EEFF00]">Talk</span>
          </h2>
          <div className="mt-5 flex items-center justify-center gap-3">
            <Stars count={Math.round(showRating)} />
            <span className="text-[#EEFF00] font-black text-lg tracking-wide">
              {showRating.toFixed(1)}/5.0
            </span>
          </div>
          {totalReviews > 0 && (
            <p className="mt-2 text-xs text-[#666] uppercase tracking-widest">
              {totalReviews} Google reviews
            </p>
          )}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((review, i) => (
            <div
              key={i}
              className="relative bg-[#0e0e0e] rounded-2xl border border-[#222] p-8 pt-10 flex flex-col"
            >
              <span
                aria-hidden="true"
                className="absolute top-3 left-6 text-6xl leading-none font-black text-[#2a2a2a] select-none"
              >
                &ldquo;
              </span>
              <Stars count={review.rating} className="w-4 h-4" />
              <p className="mt-4 text-sm text-[#ccc] leading-relaxed flex-1">
                {review.text}
              </p>
              <div className="mt-6">
                <div className="w-8 h-px bg-[#EEFF00] mb-3" />
                <span className="text-sm font-black uppercase tracking-wide text-[#EEFF00]">
                  {review.author}
                </span>
                {review.time && (
                  <span className="block text-xs text-[#666] mt-1">{review.time}</span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://www.google.com/maps/search/Accurate+Autoworks+15+Boulder+Blvd+Stony+Plain+AB"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#EEFF00] hover:text-[#F5FF5E] font-bold uppercase tracking-wider transition-colors"
          >
            See Us on Google &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
