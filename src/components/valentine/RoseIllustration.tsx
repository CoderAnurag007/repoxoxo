"use client";

export default function RoseIllustration() {
  return (
    <svg
      viewBox="0 0 200 220"
      className="h-48 w-48 sm:h-56 sm:w-56 md:h-64 md:w-64 drop-shadow-lg animate-[float_6s_ease-in-out_infinite]"
      aria-hidden
    >
      {/* Stem */}
      <path
        d="M100 180 Q95 160 98 140 Q100 120 100 100"
        fill="none"
        stroke="#2d5a27"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M100 180 Q105 160 102 140 Q100 120 100 100"
        fill="none"
        stroke="#1e3d1a"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.6"
      />
      {/* Leaves */}
      <ellipse cx="95" cy="155" rx="8" ry="18" fill="#2d5a27" transform="rotate(-25 95 155)" />
      <ellipse cx="105" cy="135" rx="8" ry="18" fill="#2d5a27" transform="rotate(25 105 135)" />
      {/* Rose bloom - layered petals */}
      <g transform="translate(100, 85)">
        {/* Outer petals */}
        <path
          d="M0 -35 Q-25 -20 -30 5 Q-25 25 0 30 Q25 25 30 5 Q25 -20 0 -35"
          fill="url(#roseGrad1)"
        />
        <path
          d="M0 -35 Q20 -25 25 0 Q20 28 0 32 Q-20 28 -25 0 Q-20 -25 0 -35"
          fill="url(#roseGrad2)"
        />
        {/* Middle petals */}
        <path
          d="M0 -28 Q-18 -12 -20 8 Q-15 22 0 25 Q15 22 20 8 Q18 -12 0 -28"
          fill="url(#roseGrad3)"
        />
        <path
          d="M0 -25 Q15 -10 18 5 Q12 20 0 22 Q-12 20 -18 5 Q-15 -10 0 -25"
          fill="url(#roseGrad4)"
        />
        {/* Inner spiral */}
        <path
          d="M0 -18 Q-10 0 -8 15 Q0 18 0 18 Q8 15 10 0 Q0 -18 0 -18"
          fill="url(#roseGrad5)"
        />
        <ellipse cx="0" cy="0" rx="6" ry="8" fill="#8b1538" />
      </g>
      <defs>
        <linearGradient id="roseGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e91e63" />
          <stop offset="50%" stopColor="#ff6b9d" />
          <stop offset="100%" stopColor="#ffb3c6" />
        </linearGradient>
        <linearGradient id="roseGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ff85a2" />
          <stop offset="100%" stopColor="#e91e63" />
        </linearGradient>
        <linearGradient id="roseGrad3" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ff6b9d" />
          <stop offset="100%" stopColor="#ffb3c6" />
        </linearGradient>
        <linearGradient id="roseGrad4" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e91e63" />
          <stop offset="100%" stopColor="#ff6b9d" />
        </linearGradient>
        <linearGradient id="roseGrad5" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffb3c6" />
          <stop offset="100%" stopColor="#e91e63" />
        </linearGradient>
      </defs>
    </svg>
  );
}
