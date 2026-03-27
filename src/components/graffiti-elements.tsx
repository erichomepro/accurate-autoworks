/**
 * SVG graffiti decorative elements — spray paint splatters, drips,
 * skulls, crossbones, paint splashes. Used as background overlays
 * on service pages for the biker/shop aesthetic.
 */

export function SpraySplatter({ className = "", color = "#22d65f" }: { className?: string; color?: string }) {
  return (
    <svg className={className} viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Main splatter blob */}
      <path d="M200 80c-40 10-90 30-110 80-15 40 5 90 40 120 20 15 50 30 70 25 30-8 20-40 50-50 25-8 55 10 70-5 20-20 15-60 0-90-10-20-30-35-50-50-15-12-40-35-70-30z" fill={color} opacity="0.06" />
      {/* Spray dots */}
      <circle cx="120" cy="60" r="3" fill={color} opacity="0.08" />
      <circle cx="280" cy="90" r="2" fill={color} opacity="0.1" />
      <circle cx="90" cy="200" r="4" fill={color} opacity="0.05" />
      <circle cx="320" cy="250" r="3" fill={color} opacity="0.07" />
      <circle cx="150" cy="320" r="2" fill={color} opacity="0.09" />
      <circle cx="250" cy="350" r="3" fill={color} opacity="0.06" />
      <circle cx="60" cy="140" r="2" fill={color} opacity="0.08" />
      <circle cx="340" cy="160" r="2" fill={color} opacity="0.07" />
      <circle cx="180" cy="40" r="1.5" fill={color} opacity="0.1" />
      <circle cx="310" cy="300" r="2.5" fill={color} opacity="0.06" />
      {/* Drip */}
      <path d="M180 280c0 0-2 30-2 45-0 8 4 12 8 12s8-4 8-12c0-15-2-45-2-45" fill={color} opacity="0.05" />
      <path d="M260 250c0 0-1 20-1 35 0 6 3 9 6 9s6-3 6-9c0-15-1-35-1-35" fill={color} opacity="0.04" />
    </svg>
  );
}

export function PaintDrips({ className = "", color = "#22d65f" }: { className?: string; color?: string }) {
  return (
    <svg className={className} viewBox="0 0 1200 200" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      {/* Paint drips hanging down from top edge */}
      <path d="M100 0 v60 c0 15 5 25 10 25 s10-10 10-25 V0" fill={color} opacity="0.06" />
      <path d="M300 0 v90 c0 20 6 30 12 30 s12-10 12-30 V0" fill={color} opacity="0.04" />
      <path d="M500 0 v40 c0 12 4 18 8 18 s8-6 8-18 V0" fill={color} opacity="0.07" />
      <path d="M700 0 v70 c0 18 5 28 10 28 s10-10 10-28 V0" fill={color} opacity="0.05" />
      <path d="M900 0 v50 c0 14 4 22 8 22 s8-8 8-22 V0" fill={color} opacity="0.06" />
      <path d="M1100 0 v80 c0 16 5 26 10 26 s10-10 10-26 V0" fill={color} opacity="0.04" />
    </svg>
  );
}

export function SkullIcon({ className = "", color = "#22d65f" }: { className?: string; color?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Skull */}
      <path d="M50 10 C25 10 10 30 10 50 C10 65 18 78 30 83 L30 95 L40 95 L40 88 L45 92 L50 88 L55 92 L60 88 L60 95 L70 95 L70 83 C82 78 90 65 90 50 C90 30 75 10 50 10Z" stroke={color} strokeWidth="2" opacity="0.08" fill="none" />
      {/* Eyes */}
      <ellipse cx="35" cy="45" rx="10" ry="12" stroke={color} strokeWidth="2" opacity="0.08" fill="none" />
      <ellipse cx="65" cy="45" rx="10" ry="12" stroke={color} strokeWidth="2" opacity="0.08" fill="none" />
      {/* Nose */}
      <path d="M47 58 L50 65 L53 58" stroke={color} strokeWidth="2" opacity="0.08" fill="none" />
    </svg>
  );
}

export function CrossBones({ className = "", color = "#22d65f" }: { className?: string; color?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Bone 1 */}
      <path d="M10 15 C5 10 5 5 10 2 C15-1 20 2 20 8 L90 62 C85 57 85 52 90 49 C95 46 100 49 100 55 L100 60 C105 65 105 70 100 73 C95 76 90 73 90 67 L20 13 C25 18 25 23 20 26 C15 29 10 26 10 20Z" stroke={color} strokeWidth="1.5" opacity="0.06" fill="none" />
      {/* Bone 2 */}
      <path d="M100 15 C105 10 105 5 100 2 C95-1 90 2 90 8 L20 62 C25 57 25 52 20 49 C15 46 10 49 10 55 L10 60 C5 65 5 70 10 73 C15 76 20 73 20 67 L90 13 C85 18 85 23 90 26 C95 29 100 26 100 20Z" stroke={color} strokeWidth="1.5" opacity="0.06" fill="none" />
    </svg>
  );
}

export function SprayCanLine({ className = "", color = "#22d65f" }: { className?: string; color?: string }) {
  return (
    <svg className={className} viewBox="0 0 800 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      {/* Rough spray paint line */}
      <path d="M0 10 Q50 5 100 10 T200 10 T300 8 T400 12 T500 9 T600 11 T700 10 T800 10" stroke={color} strokeWidth="3" opacity="0.08" strokeLinecap="round" />
      {/* Overspray dots */}
      <circle cx="50" cy="4" r="1" fill={color} opacity="0.06" />
      <circle cx="150" cy="16" r="1.5" fill={color} opacity="0.05" />
      <circle cx="350" cy="3" r="1" fill={color} opacity="0.07" />
      <circle cx="550" cy="17" r="1.5" fill={color} opacity="0.04" />
      <circle cx="750" cy="5" r="1" fill={color} opacity="0.06" />
    </svg>
  );
}

/**
 * Full graffiti background overlay for a section.
 * Combines skulls, crossbones, splatters, and drips at low opacity.
 */
export function GraffitiOverlay({ variant = "default" }: { variant?: "default" | "alt" | "heavy" }) {
  const opacity = variant === "heavy" ? "opacity-100" : "opacity-100";
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${opacity}`} aria-hidden="true">
      {/* Top drips */}
      <PaintDrips className="absolute top-0 left-0 w-full h-[100px]" />

      {/* Skull top-right */}
      <SkullIcon className="absolute top-[10%] right-[5%] w-[120px] h-[120px] rotate-12" />

      {/* Crossbones bottom-left */}
      <CrossBones className="absolute bottom-[15%] left-[3%] w-[150px] h-[100px] -rotate-15" />

      {/* Spray splatters */}
      <SpraySplatter className="absolute top-[20%] left-[10%] w-[300px] h-[300px]" />
      <SpraySplatter className="absolute bottom-[10%] right-[8%] w-[250px] h-[250px] rotate-180" />

      {/* Skull bottom-right on alt variant */}
      {variant !== "default" && (
        <SkullIcon className="absolute bottom-[20%] right-[15%] w-[80px] h-[80px] -rotate-6" />
      )}

      {/* Extra crossbones on heavy */}
      {variant === "heavy" && (
        <>
          <CrossBones className="absolute top-[40%] right-[20%] w-[100px] h-[70px] rotate-30" />
          <SkullIcon className="absolute top-[60%] left-[20%] w-[90px] h-[90px] rotate-6" />
        </>
      )}

      {/* Spray line dividers */}
      <SprayCanLine className="absolute top-[30%] left-0 w-full h-[20px]" />
      <SprayCanLine className="absolute bottom-[25%] left-0 w-full h-[20px]" color="#ffffff" />
    </div>
  );
}
