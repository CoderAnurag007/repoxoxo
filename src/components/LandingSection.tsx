"use client";

import { useCallback } from "react";
import gsap from "gsap";

interface LandingSectionProps {
  onContinue: () => void;
}

export default function LandingSection({ onContinue }: LandingSectionProps) {
  const handleClick = useCallback(() => {
    const section = document.getElementById("landing-section");
    if (!section) return;
    gsap.to(section, {
      opacity: 0,
      scale: 1.05,
      duration: 0.8,
      ease: "power2.inOut",
      onComplete: () => {
        section.style.pointerEvents = "none";
        section.style.visibility = "hidden";
        onContinue();
      },
    });
  }, [onContinue]);

  return (
    <section
      id="landing-section"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 py-20"
    >
      <h1 className="font-script mb-12 text-center text-5xl font-bold text-romantic-pink-dark drop-shadow-sm sm:text-6xl md:text-7xl">
        Hii Tanu ❤️
      </h1>
      <p className="font-romantic mb-14 text-center text-lg text-black/70 sm:text-xl">
        Click below to open your surprise
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <button
          type="button"
          onClick={handleClick}
          className="btn-romantic rounded-2xl bg-romantic-pink px-8 py-4 font-script text-xl text-white sm:text-2xl"
        >
          Hello 😊
        </button>
        <button
          type="button"
          onClick={handleClick}
          className="btn-romantic rounded-2xl bg-romantic-pink px-8 py-4 font-script text-xl text-white sm:text-2xl"
        >
          Hi 👋
        </button>
      </div>
    </section>
  );
}
