"use client";

import { useEffect, useState } from "react";

interface Review {
  author: string;
  rating: number;
  text: string;
  time: string;
}

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < count ? "text-yellow-400" : "text-[#333]"}`}
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
  const [rating, setRating] = useState(0);
  const [totalReviews, setTotalReviews] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch("/api/reviews")
      .then((r) => r.json())
      .then((data) => {
        setReviews(data.reviews || []);
        setRating(data.rating || 0);
        setTotalReviews(data.totalReviews || 0);
        setLoaded(true);
      })
      .catch(() => setLoaded(true));
  }, []);

  if (!loaded || reviews.length === 0) return null;

  return (
    <section className="py-20 sm:py-28 bg-[#0d0d0d] border-y border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight">
            What People <span className="text-[#22d65f]">Say</span>
          </h2>
          <div className="mt-4 flex items-center justify-center gap-3">
            <Stars count={Math.round(rating)} />
            <span className="text-white font-bold text-lg">{rating.toFixed(1)}</span>
            <span className="text-[#888] text-sm">({totalReviews} reviews on Google)</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.slice(0, 3).map((review, i) => (
            <div key={i} className="card-gradient rounded-xl p-6 sm:p-8 flex flex-col">
              <Stars count={review.rating} />
              <p className="mt-4 text-sm text-[#ccc] leading-relaxed flex-1 line-clamp-5">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="mt-5 pt-4 border-t border-[#2a2a2a] flex items-center justify-between">
                <span className="text-sm font-bold text-white">{review.author}</span>
                <span className="text-xs text-[#666]">{review.time}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://www.google.com/maps/search/Accurate+Autoworks+15+Boulder+Blvd+Stony+Plain+AB"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#22d65f] hover:text-[#2ae86d] font-medium uppercase tracking-wider transition-colors"
          >
            See All {totalReviews} Reviews on Google &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
