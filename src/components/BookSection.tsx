"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function BookSection() {
  const bookRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    const book = bookRef.current;
    const content = contentRef.current;
    if (!book || !content) return;

    const tl = gsap.timeline({ paused: true });
    tl.fromTo(
      content,
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" }
    );

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !opened) {
          setOpened(true);
          tl.play();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(book);

    return () => observer.disconnect();
  }, [opened]);

  return (
    <section className="relative flex min-h-screen items-center justify-center px-4 py-24">
      <div
        ref={bookRef}
        className="book-glow relative flex w-full max-w-2xl overflow-hidden rounded-lg bg-gradient-to-b from-amber-100 to-amber-50 shadow-2xl"
        style={{ height: "480px" }}
      >
        {/* Left page - decorative */}
        <div className="flex h-full w-1/2 shrink-0 items-center justify-center rounded-l-lg bg-gradient-to-br from-amber-50 to-rose-50/30 shadow-inner">
          <span className="text-6xl opacity-40">❤️</span>
        </div>
        {/* Right page - text on the book */}
        <div className="flex h-full w-1/2 shrink-0 items-center justify-center rounded-r-lg bg-gradient-to-bl from-rose-50/50 to-amber-50 shadow-inner">
          <div
            ref={contentRef}
            className="flex flex-col items-center justify-center gap-3 px-6 py-6 text-center opacity-0"
          >
            <p className="font-script text-2xl leading-relaxed text-romantic-pink-dark sm:text-3xl">
              Tanu, jab se tum meri life me aayi ho, har din special ho gaya hai.
            </p>
            <p className="font-script text-xl text-romantic-pink-dark/90 sm:text-2xl">
              Tum meri smile ka reason ho ✨
            </p>
            <p className="font-script text-lg text-romantic-pink sm:text-xl">
              Har din tumse milna, meri sabse pyari habit hai.
            </p>
            <p className="font-script text-lg text-romantic-pink sm:text-xl">
              Tum jahan ho, wahan ghar lagta hai 💕
            </p>
            <p className="font-script mt-2 text-xl text-romantic-pink">
              — from Anurag, forever yours ❤️
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
