"use client";

import { useRef, useEffect } from "react";

const MEMORY_IMAGES = [
  { id: 1, src: "/memory-1.jpeg", alt: "Memory 1" },
  { id: 2, src: "/memory-2.jpeg", alt: "Memory 2" },
  { id: 3, src: "/memory-3.jpeg", alt: "Memory 3" },
  { id: 4, src: "/memory-4.jpeg", alt: "Memory 4" },
  { id: 5, src: "/memory-5.jpeg", alt: "Memory 5" },
  { id: 6, src: "/memory-6.jpeg", alt: "Memory 6" },
  { id: 7, src: "/memory-7.jpeg", alt: "Memory 7" },
  { id: 8, src: "/memory-8.jpeg", alt: "Memory 8" },
];

export default function MemoriesSection() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll(".memory-card");
    if (!cards?.length) return;

    const style = document.createElement("style");
    style.textContent = `
      .memory-card { transition: transform 0.4s ease, box-shadow 0.4s ease; }
      .memory-card:hover { transform: scale(1.08); box-shadow: 0 20px 40px rgba(255, 107, 157, 0.3); }
      @keyframes memFloat { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
      .memory-card:nth-child(odd) { animation: memFloat 5s ease-in-out infinite; }
      .memory-card:nth-child(even) { animation: memFloat 6s ease-in-out infinite 0.5s; }
    `;
    document.head.appendChild(style);
    return () => style.remove();
  }, []);

  return (
    <section className="relative flex min-h-screen flex-col items-center px-6 py-24">
      <h2 className="font-script mb-14 text-center text-4xl font-bold text-romantic-pink-dark sm:text-5xl md:text-6xl">
        Some Beautiful Memories We Made 💕
      </h2>
      <div
        ref={gridRef}
        className="grid w-full max-w-6xl grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 lg:grid-cols-5"
      >
        {MEMORY_IMAGES.map((img) => (
          <div
            key={img.id}
            className="memory-card overflow-hidden rounded-2xl bg-white/90 shadow-lg ring-1 ring-romantic-pink/10"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="h-40 w-full object-cover sm:h-48"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
