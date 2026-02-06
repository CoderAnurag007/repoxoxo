"use client";

import { useState, useEffect } from "react";

const START_DATE = new Date("2025-07-31T00:00:00");

function useTimeSince() {
  const [diff, setDiff] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const total = Math.max(0, Math.floor((now.getTime() - START_DATE.getTime()) / 1000));
      const days = Math.floor(total / 86400);
      const hours = Math.floor((total % 86400) / 3600);
      const minutes = Math.floor((total % 3600) / 60);
      const seconds = total % 60;
      setDiff({ days, hours, minutes, seconds });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return diff;
}

export default function TimelineSection() {
  const { days, hours, minutes, seconds } = useTimeSince();

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 py-24">
      <h2 className="font-script mb-4 text-4xl font-bold text-romantic-pink-dark sm:text-5xl md:text-6xl">
        Our Journey ❤️
      </h2>
      <p className="font-romantic mb-12 text-center text-lg text-black/80 sm:text-xl">
        We first talked on 31 July 2025
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
        {[
          { value: days, label: "Days" },
          { value: hours, label: "Hours" },
          { value: minutes, label: "Minutes" },
          { value: seconds, label: "Seconds" },
        ].map(({ value, label }) => (
          <div
            key={label}
            className="flex min-w-[80px] flex-col items-center rounded-2xl bg-white/80 px-6 py-4 shadow-lg ring-1 ring-romantic-pink/20"
          >
            <span className="font-romantic text-3xl font-bold text-romantic-pink-dark tabular-nums sm:text-4xl">
              {String(value).padStart(2, "0")}
            </span>
            <span className="text-sm font-medium text-black/70">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
