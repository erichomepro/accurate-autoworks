"use client";

const GEAR_PATH = "M50 10 L54 0 L58 10 Q65 8 70 12 L78 5 L80 16 Q86 20 88 27 L98 27 L92 36 Q94 42 94 50 Q94 58 92 64 L98 73 L88 73 Q86 80 80 84 L78 95 L70 88 Q65 92 58 90 L54 100 L50 90 Q43 92 37 88 L30 95 L28 84 Q22 80 18 73 L8 73 L14 64 Q12 58 12 50 Q12 42 14 36 L8 27 L18 27 Q20 20 28 16 L30 5 L37 12 Q43 8 50 10Z M50 30 A20 20 0 1 0 50 70 A20 20 0 1 0 50 30Z";
const GEAR_SM_PATH = "M50 10 L54 0 L58 10 Q65 8 70 12 L78 5 L80 16 Q86 20 88 27 L98 27 L92 36 Q94 42 94 50 Q94 58 92 64 L98 73 L88 73 Q86 80 80 84 L78 95 L70 88 Q65 92 58 90 L54 100 L50 90 Q43 92 37 88 L30 95 L28 84 Q22 80 18 73 L8 73 L14 64 Q12 58 12 50 Q12 42 14 36 L8 27 L18 27 Q20 20 28 16 L30 5 L37 12 Q43 8 50 10Z M50 35 A15 15 0 1 0 50 65 A15 15 0 1 0 50 35Z";
const SKULL_PATH = "M50 8 Q20 8 15 35 Q10 55 20 65 L20 75 Q20 82 30 82 L35 82 L35 90 Q35 95 42 95 L58 95 Q65 95 65 90 L65 82 L70 82 Q80 82 80 75 L80 65 Q90 55 85 35 Q80 8 50 8Z M35 40 A8 8 0 1 1 35 56 A8 8 0 1 1 35 40Z M65 40 A8 8 0 1 1 65 56 A8 8 0 1 1 65 40Z M45 62 L50 68 L55 62Z";
const WRENCH_PATH = "M25 5 Q15 15 15 28 Q15 38 22 45 L55 78 Q58 81 62 81 Q66 81 69 78 L78 69 Q81 66 81 62 Q81 58 78 55 L45 22 Q38 15 28 15 Q15 15 5 25 L15 25 L25 15 Z M70 75 L75 80 L80 75 L75 70 Z";
const CROSSBONES_PATH = "M15 15 Q20 10 25 15 L45 40 L55 40 L75 15 Q80 10 85 15 Q90 20 85 25 L65 45 L65 55 L85 75 Q90 80 85 85 Q80 90 75 85 L55 60 L45 60 L25 85 Q20 90 15 85 Q10 80 15 75 L35 55 L35 45 L15 25 Q10 20 15 15Z";

export function GarageBg() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* === GEARS (4 total) === */}

      {/* Big gear - top right, slow spin */}
      <svg className="absolute animate-spin-slow opacity-[0.07]"
        style={{ top: "5%", right: "6%", width: "200px", height: "200px", animationDuration: "50s" }}
        viewBox="0 0 100 100" fill="currentColor">
        <path d={GEAR_PATH} />
      </svg>

      {/* Medium gear - bottom left, reverse spin */}
      <svg className="absolute animate-spin-slow opacity-[0.06]"
        style={{ bottom: "10%", left: "8%", width: "140px", height: "140px", animationDuration: "35s", animationDirection: "reverse" }}
        viewBox="0 0 100 100" fill="currentColor">
        <path d={GEAR_SM_PATH} />
      </svg>

      {/* Small gear - mid left, fast spin */}
      <svg className="absolute animate-spin-slow opacity-[0.05]"
        style={{ top: "45%", left: "3%", width: "80px", height: "80px", animationDuration: "20s" }}
        viewBox="0 0 100 100" fill="currentColor">
        <path d={GEAR_SM_PATH} />
      </svg>

      {/* Tiny gear - top center */}
      <svg className="absolute animate-spin-slow opacity-[0.06]"
        style={{ top: "12%", left: "40%", width: "60px", height: "60px", animationDuration: "15s", animationDirection: "reverse" }}
        viewBox="0 0 100 100" fill="currentColor">
        <path d={GEAR_PATH} />
      </svg>

      {/* === SKULLS (3 total) === */}

      {/* Skull - upper right area */}
      <svg className="absolute animate-float-reverse opacity-[0.06]"
        style={{ top: "18%", right: "20%", width: "150px", height: "150px", animationDuration: "10s" }}
        viewBox="0 0 100 100" fill="currentColor">
        <path d={SKULL_PATH} />
      </svg>

      {/* Skull small - bottom center */}
      <svg className="absolute animate-float opacity-[0.05]"
        style={{ bottom: "25%", left: "45%", width: "90px", height: "90px", animationDuration: "12s" }}
        viewBox="0 0 100 100" fill="currentColor">
        <path d={SKULL_PATH} />
      </svg>

      {/* Skull with crossbones - left */}
      <svg className="absolute animate-float-reverse opacity-[0.05]"
        style={{ top: "55%", left: "15%", width: "120px", height: "120px", animationDuration: "9s" }}
        viewBox="0 0 100 100" fill="currentColor">
        <path d={SKULL_PATH} />
        <g transform="translate(0,5) scale(0.4)" opacity="0.6">
          <path d={CROSSBONES_PATH} transform="translate(75,100)" />
        </g>
      </svg>

      {/* === WRENCHES (3 total) === */}

      {/* Wrench - left side */}
      <svg className="absolute animate-float opacity-[0.06]"
        style={{ top: "30%", left: "5%", width: "130px", height: "130px", animationDuration: "8s" }}
        viewBox="0 0 100 100" fill="currentColor">
        <path d={WRENCH_PATH} />
      </svg>

      {/* Wrench - right side, rotated */}
      <svg className="absolute animate-float-reverse opacity-[0.05]"
        style={{ top: "65%", right: "8%", width: "110px", height: "110px", animationDuration: "11s", transform: "rotate(45deg)" }}
        viewBox="0 0 100 100" fill="currentColor">
        <path d={WRENCH_PATH} />
      </svg>

      {/* Crossed wrenches - top left */}
      <svg className="absolute animate-float opacity-[0.04]"
        style={{ top: "8%", left: "18%", width: "100px", height: "100px", animationDuration: "9s" }}
        viewBox="0 0 100 100" fill="currentColor">
        <g transform="rotate(30, 50, 50)"><path d={WRENCH_PATH} /></g>
        <g transform="rotate(-30, 50, 50)" opacity="0.7"><path d={WRENCH_PATH} /></g>
      </svg>

      {/* === BOLTS & NUTS (3 total) === */}

      {/* Hex bolt - center */}
      <svg className="absolute animate-spin-slow opacity-[0.06]"
        style={{ top: "50%", left: "35%", width: "55px", height: "55px", animationDuration: "25s" }}
        viewBox="0 0 100 100" fill="currentColor">
        <polygon points="50,5 90,27 90,73 50,95 10,73 10,27" />
        <circle cx="50" cy="50" r="18" fill="#0a0a0a" />
      </svg>

      {/* Hex bolt - right */}
      <svg className="absolute animate-spin-slow opacity-[0.05]"
        style={{ top: "35%", right: "5%", width: "45px", height: "45px", animationDuration: "18s", animationDirection: "reverse" }}
        viewBox="0 0 100 100" fill="currentColor">
        <polygon points="50,5 90,27 90,73 50,95 10,73 10,27" />
        <circle cx="50" cy="50" r="18" fill="#0a0a0a" />
      </svg>

      {/* Hex bolt - bottom */}
      <svg className="absolute animate-spin-slow opacity-[0.05]"
        style={{ bottom: "30%", right: "30%", width: "40px", height: "40px", animationDuration: "22s" }}
        viewBox="0 0 100 100" fill="currentColor">
        <polygon points="50,5 90,27 90,73 50,95 10,73 10,27" />
        <circle cx="50" cy="50" r="18" fill="#0a0a0a" />
      </svg>

      {/* === PISTONS (2 total) === */}

      {/* Piston - bottom right */}
      <svg className="absolute animate-float opacity-[0.05]"
        style={{ bottom: "15%", right: "12%", width: "100px", height: "100px", animationDuration: "7s" }}
        viewBox="0 0 100 100" fill="currentColor">
        <rect x="30" y="5" width="40" height="15" rx="3" />
        <rect x="35" y="20" width="30" height="8" />
        <rect x="38" y="28" width="24" height="35" rx="2" />
        <rect x="33" y="63" width="34" height="10" rx="2" />
        <rect x="40" y="73" width="20" height="22" rx="3" />
      </svg>

      {/* Piston - top center-left */}
      <svg className="absolute animate-float-reverse opacity-[0.04]"
        style={{ top: "15%", left: "30%", width: "70px", height: "70px", animationDuration: "9s", transform: "rotate(25deg)" }}
        viewBox="0 0 100 100" fill="currentColor">
        <rect x="30" y="5" width="40" height="15" rx="3" />
        <rect x="35" y="20" width="30" height="8" />
        <rect x="38" y="28" width="24" height="35" rx="2" />
        <rect x="33" y="63" width="34" height="10" rx="2" />
        <rect x="40" y="73" width="20" height="22" rx="3" />
      </svg>

      {/* === SPARK PLUG === */}
      <svg className="absolute animate-float opacity-[0.05]"
        style={{ bottom: "40%", left: "25%", width: "60px", height: "60px", animationDuration: "8s" }}
        viewBox="0 0 100 100" fill="currentColor">
        <rect x="42" y="5" width="16" height="20" rx="3" />
        <polygon points="38,25 62,25 58,45 42,45" />
        <rect x="44" y="45" width="12" height="25" rx="1" />
        <polygon points="40,70 60,70 55,85 45,85" />
        <rect x="46" y="85" width="8" height="10" rx="1" />
      </svg>

      {/* === TIRE TREAD LINES (2 columns) === */}
      <div className="absolute animate-scroll-up opacity-[0.04]"
        style={{ top: "-100%", left: "15%", width: "2px", height: "200%" }}>
        {Array.from({ length: 50 }).map((_, i) => (
          <div key={i} className="bg-white" style={{ height: "15px", marginBottom: "25px", width: "2px" }} />
        ))}
      </div>
      <div className="absolute animate-scroll-up opacity-[0.03]"
        style={{ top: "-50%", right: "20%", width: "2px", height: "200%", animationDuration: "25s" }}>
        {Array.from({ length: 50 }).map((_, i) => (
          <div key={i} className="bg-white" style={{ height: "12px", marginBottom: "30px", width: "2px" }} />
        ))}
      </div>
    </div>
  );
}
