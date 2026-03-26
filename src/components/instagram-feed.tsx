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

export function InstagramFeed() {
  const [posts, setPosts] = useState<InstaPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch("/api/instagram");
        if (res.ok) {
          const data = await res.json();
          setPosts(data.posts || []);
        }
      } catch {
        // Silently fail — gallery placeholders will show
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="aspect-square bg-[#141414] border border-[#2a2a2a] rounded-lg animate-pulse"
          />
        ))}
      </div>
    );
  }

  if (posts.length === 0) {
    return null; // Fall back to placeholder gallery
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
      {posts.map((post) => (
        <a
          key={post.id}
          href={post.permalink}
          target="_blank"
          rel="noopener noreferrer"
          className="aspect-square rounded-lg overflow-hidden border border-[#2a2a2a] hover:border-[#22d65f] transition-colors group relative"
        >
          <img
            src={post.media_type === "VIDEO" ? post.thumbnail_url || post.media_url : post.media_url}
            alt={post.caption?.slice(0, 100) || "Accurate Autoworks"}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
          {post.media_type === "VIDEO" && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 bg-black/60 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="absolute bottom-3 left-3 right-3">
              <p className="text-xs text-white/80 line-clamp-2">
                {post.caption?.slice(0, 80)}
              </p>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
