"use client";

import ConfettiBlast from "./ConfettiBlast";

export default function ProposalSection() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 py-24">
      <ConfettiBlast />
      <div className="flex flex-col items-center text-center animate-[fadeInScale_0.7s_ease-out_forwards]">
        <h2 className="font-script mb-4 text-4xl font-bold text-romantic-pink-dark sm:text-5xl md:text-6xl">
          Tanu said YES! ❤️
        </h2>
        <p className="font-romantic mb-2 text-lg text-black/70">
          Accepted on 6 February 2026
        </p>
        <p className="font-script mb-2 text-2xl text-romantic-pink sm:text-3xl">
          Will you be my Valentine? — Yes! I love you so much Tanu
        </p>
        <p className="font-romantic text-lg text-black/80">
          — Yours, Anurag 💖
        </p>
      </div>
    </section>
  );
}
