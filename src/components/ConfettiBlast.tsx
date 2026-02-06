"use client";

import { useEffect } from "react";
import confetti from "canvas-confetti";

export default function ConfettiBlast() {
  useEffect(() => {
    const duration = 4 * 1000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#ff6b9d", "#ffb3c6", "#e91e63", "#ff85a2", "#ffc0cb"],
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#ff6b9d", "#ffb3c6", "#e91e63", "#ff85a2", "#ffc0cb"],
      });
      if (Date.now() < end) requestAnimationFrame(frame);
    };

    frame();
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.6 },
      colors: ["#ff6b9d", "#ffb3c6", "#e91e63", "#ff85a2", "#ffc0cb", "#fff"],
    });
  }, []);

  return null;
}
