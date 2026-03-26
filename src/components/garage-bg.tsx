"use client";

export function GarageBg() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Floating gear - top right */}
      <svg
        className="absolute animate-spin-slow opacity-[0.06]"
        style={{ top: "8%", right: "8%", width: "180px", height: "180px", animationDuration: "45s" }}
        viewBox="0 0 100 100"
        fill="currentColor"
      >
        <path d="M50 10 L54 0 L58 10 Q65 8 70 12 L78 5 L80 16 Q86 20 88 27 L98 27 L92 36 Q94 42 94 50 Q94 58 92 64 L98 73 L88 73 Q86 80 80 84 L78 95 L70 88 Q65 92 58 90 L54 100 L50 90 Q43 92 37 88 L30 95 L28 84 Q22 80 18 73 L8 73 L14 64 Q12 58 12 50 Q12 42 14 36 L8 27 L18 27 Q20 20 28 16 L30 5 L37 12 Q43 8 50 10Z M50 30 A20 20 0 1 0 50 70 A20 20 0 1 0 50 30Z" />
      </svg>

      {/* Floating wrench - left */}
      <svg
        className="absolute animate-float opacity-[0.05]"
        style={{ top: "35%", left: "5%", width: "120px", height: "120px", animationDuration: "8s" }}
        viewBox="0 0 100 100"
        fill="currentColor"
      >
        <path d="M25 5 Q15 15 15 28 Q15 38 22 45 L55 78 Q58 81 62 81 Q66 81 69 78 L78 69 Q81 66 81 62 Q81 58 78 55 L45 22 Q38 15 28 15 Q15 15 5 25 L15 25 L25 15 Z M70 75 L75 80 L80 75 L75 70 Z" />
      </svg>

      {/* Skull - center right */}
      <svg
        className="absolute animate-float-reverse opacity-[0.04]"
        style={{ top: "20%", right: "15%", width: "140px", height: "140px", animationDuration: "10s" }}
        viewBox="0 0 100 100"
        fill="currentColor"
      >
        <path d="M50 8 Q20 8 15 35 Q10 55 20 65 L20 75 Q20 82 30 82 L35 82 L35 90 Q35 95 42 95 L58 95 Q65 95 65 90 L65 82 L70 82 Q80 82 80 75 L80 65 Q90 55 85 35 Q80 8 50 8Z M35 40 A8 8 0 1 1 35 56 A8 8 0 1 1 35 40Z M65 40 A8 8 0 1 1 65 56 A8 8 0 1 1 65 40Z M45 62 L50 68 L55 62Z" />
      </svg>

      {/* Small gear - bottom left */}
      <svg
        className="absolute animate-spin-slow opacity-[0.05]"
        style={{ bottom: "15%", left: "12%", width: "100px", height: "100px", animationDuration: "35s", animationDirection: "reverse" }}
        viewBox="0 0 100 100"
        fill="currentColor"
      >
        <path d="M50 10 L54 0 L58 10 Q65 8 70 12 L78 5 L80 16 Q86 20 88 27 L98 27 L92 36 Q94 42 94 50 Q94 58 92 64 L98 73 L88 73 Q86 80 80 84 L78 95 L70 88 Q65 92 58 90 L54 100 L50 90 Q43 92 37 88 L30 95 L28 84 Q22 80 18 73 L8 73 L14 64 Q12 58 12 50 Q12 42 14 36 L8 27 L18 27 Q20 20 28 16 L30 5 L37 12 Q43 8 50 10Z M50 35 A15 15 0 1 0 50 65 A15 15 0 1 0 50 35Z" />
      </svg>

      {/* Piston - bottom right */}
      <svg
        className="absolute animate-float opacity-[0.04]"
        style={{ bottom: "20%", right: "10%", width: "90px", height: "90px", animationDuration: "7s" }}
        viewBox="0 0 100 100"
        fill="currentColor"
      >
        <rect x="30" y="5" width="40" height="15" rx="3" />
        <rect x="35" y="20" width="30" height="8" />
        <rect x="38" y="28" width="24" height="35" rx="2" />
        <rect x="33" y="63" width="34" height="10" rx="2" />
        <rect x="40" y="73" width="20" height="22" rx="3" />
      </svg>

      {/* Bolt/nut - scattered */}
      <svg
        className="absolute animate-spin-slow opacity-[0.05]"
        style={{ top: "60%", left: "30%", width: "50px", height: "50px", animationDuration: "25s" }}
        viewBox="0 0 100 100"
        fill="currentColor"
      >
        <polygon points="50,5 90,27 90,73 50,95 10,73 10,27" />
        <circle cx="50" cy="50" r="20" fill="#0a0a0a" />
      </svg>

      {/* Tire tread lines */}
      <div
        className="absolute animate-scroll-up opacity-[0.03]"
        style={{ top: "-100%", left: "50%", width: "2px", height: "200%" }}
      >
        {Array.from({ length: 40 }).map((_, i) => (
          <div
            key={i}
            className="bg-white"
            style={{ height: "20px", marginBottom: "20px", width: "2px" }}
          />
        ))}
      </div>
    </div>
  );
}
