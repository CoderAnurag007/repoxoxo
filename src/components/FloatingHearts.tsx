"use client";

import { useEffect, useRef } from "react";

const HEARTS = ["❤️", "💕", "💖", "💗", "💓", "💝", "🩷"];

export default function FloatingHearts() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createHeart = () => {
      const heart = document.createElement("div");
      heart.className = "heart-particle";
      heart.textContent = HEARTS[Math.floor(Math.random() * HEARTS.length)];
      heart.style.left = `${Math.random() * 100}vw`;
      heart.style.animationDuration = `${8 + Math.random() * 6}s`;
      heart.style.animationDelay = `${Math.random() * 2}s`;
      heart.style.fontSize = `${14 + Math.random() * 12}px`;
      container.appendChild(heart);

      setTimeout(() => heart.remove(), 14000);
    };

    const interval = setInterval(createHeart, 600);
    for (let i = 0; i < 8; i++) setTimeout(createHeart, i * 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-[1] overflow-hidden"
      aria-hidden
    />
  );
}
