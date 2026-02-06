"use client";

import { useState, useCallback } from "react";
import ConfettiBlast from "./ConfettiBlast";

const NO_MESSAGES = [
  "Are you serious? 😟",
  "No chance? 🥺",
  "So just click YES na ❤️",
];

export default function ProposalSection() {
  const [saidYes, setSaidYes] = useState(false);
  const [noCount, setNoCount] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  const handleNo = useCallback(() => {
    setShowPopup(true);
    setNoCount((c) => Math.min(c + 1, NO_MESSAGES.length));
  }, []);

  const handleYes = useCallback(() => {
    setSaidYes(true);
  }, []);

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 py-24">
      {saidYes && <ConfettiBlast />}
      {saidYes ? (
        <div className="flex flex-col items-center text-center animate-[fadeInScale_0.7s_ease-out_forwards]">
          <h2 className="font-script mb-4 text-4xl font-bold text-romantic-pink-dark sm:text-5xl md:text-6xl">
            Heyyy Chiklu said YES! ❤️
          </h2>
          <p className="font-script mb-2 text-2xl text-romantic-pink sm:text-3xl">
            I love you so much Tanu
          </p>
          <p className="font-romantic text-lg text-black/80">
            — Yours, Anurag 💖
          </p>
        </div>
      ) : (
        <>
          <h2 className="font-script mb-6 text-center text-3xl font-bold text-romantic-pink-dark sm:text-4xl md:text-5xl">
            So I just want to ask you something...
          </h2>
          <p className="font-script mb-12 text-center text-2xl text-romantic-pink-dark sm:text-3xl">
            Will you be my Valentine? ❤️
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={handleYes}
              className="btn-romantic rounded-2xl bg-romantic-pink px-8 py-4 font-script text-xl text-white sm:text-2xl"
            >
              YES 💖
            </button>
            <button
              type="button"
              onClick={handleNo}
              className="btn-romantic rounded-2xl border-2 border-romantic-pink bg-white px-8 py-4 font-script text-xl text-romantic-pink hover:bg-romantic-pink-light/30 sm:text-2xl"
            >
              NO 💔
            </button>
          </div>
          {showPopup && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
              onClick={() => setShowPopup(false)}
              role="dialog"
              aria-modal="true"
              aria-label="Popup"
            >
              <div
                className="max-w-sm rounded-2xl bg-white p-8 shadow-2xl ring-2 ring-romantic-pink"
                onClick={(e) => e.stopPropagation()}
              >
                <p className="font-script mb-6 text-center text-2xl text-romantic-pink-dark">
                  {NO_MESSAGES[noCount - 1]}
                </p>
                <button
                  type="button"
                  onClick={() => setShowPopup(false)}
                  className="btn-romantic w-full rounded-xl bg-romantic-pink py-3 font-script text-lg text-white"
                >
                  OK
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </section>
  );
}
