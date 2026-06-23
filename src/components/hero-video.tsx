"use client";

import { useEffect, useRef } from "react";

/**
 * Autoplaying hero video that plays once, holds on the final frame for a pause,
 * then replays. The HTML `loop` attribute can't pause between cycles, so we
 * replay manually on the `ended` event after a delay.
 */
export function HeroVideo({
  src,
  poster,
  className,
  delayMs = 5000,
}: {
  src: string;
  poster: string;
  className?: string;
  delayMs?: number;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    let timer: ReturnType<typeof setTimeout>;
    const onEnded = () => {
      timer = setTimeout(() => {
        v.currentTime = 0;
        v.play().catch(() => {});
      }, delayMs);
    };
    v.addEventListener("ended", onEnded);
    return () => {
      v.removeEventListener("ended", onEnded);
      clearTimeout(timer);
    };
  }, [delayMs]);

  return (
    <video
      ref={ref}
      className={className}
      autoPlay
      muted
      playsInline
      preload="metadata"
      poster={poster}
      aria-hidden="true"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
