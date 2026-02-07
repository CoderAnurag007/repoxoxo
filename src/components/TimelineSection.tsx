"use client";

import { useMemo } from "react";
import {
  VALENTINE_DAYS,
  getLatestUnlockedDay,
  isDayUnlocked,
  type ValentineDay,
} from "./valentine/valentineDays";
import DayIllustration from "./valentine/DayIllustration";

function formatDateLabel(day: number) {
  return `${day} Feb`;
}

export default function TimelineSection() {
  const today = useMemo(() => new Date(), []);
  const latestUnlocked = useMemo(() => getLatestUnlockedDay(today), [today]);
  const activeDay: ValentineDay | undefined = useMemo(
    () => VALENTINE_DAYS.find((d) => d.date === latestUnlocked),
    [latestUnlocked]
  );

  return (
    <section className="relative flex min-h-screen flex-col items-center px-6 py-24">
      <h2 className="font-script mb-2 text-4xl font-bold text-romantic-pink-dark sm:text-5xl md:text-6xl">
        Valentine&apos;s Week
      </h2>
      <p className="font-romantic mb-12 text-center text-lg text-black/70 sm:text-xl">
        7 – 15 February 2026 • Each day unlocks a little more love
      </p>

      {/* Timeline strip: all 9 days */}
      <div className="mb-14 flex w-full max-w-4xl flex-wrap items-center justify-center gap-2 sm:gap-3">
        {VALENTINE_DAYS.map((day) => {
          const unlocked = isDayUnlocked(day.date, today);
          return (
            <div
              key={day.date}
              className={`rounded-xl px-3 py-2 text-center sm:px-4 sm:py-2.5 ${
                unlocked
                  ? "bg-romantic-pink/20 ring-2 ring-romantic-pink text-romantic-pink-dark"
                  : "bg-black/5 text-black/50"
              } ${day.date === latestUnlocked ? "ring-2 ring-romantic-pink-dark ring-offset-2" : ""}`}
            >
              <span className="font-romantic block text-xs font-semibold sm:text-sm">
                {formatDateLabel(day.date)}
              </span>
              <span className="font-romantic block text-xs sm:text-sm">
                {unlocked ? day.name : "🔒"}
              </span>
            </div>
          );
        })}
      </div>

      {/* Active day: illustration + metaphorical lines */}
      {activeDay && (
        <div className="flex w-full max-w-2xl flex-col items-center">
          <div className="mb-6 flex flex-col items-center">
            <DayIllustration componentKey={activeDay.componentKey} />
            <h3 className="font-script mt-4 text-2xl font-bold text-romantic-pink-dark sm:text-3xl">
              {activeDay.name}
            </h3>
            <p className="font-romantic text-sm text-black/60 sm:text-base">
              {activeDay.subtitle}
            </p>
          </div>
          <div className="space-y-4 text-center">
            {activeDay.lines.map((line, i) => (
              <p
                key={i}
                className="font-romantic text-base italic leading-relaxed text-black/85 sm:text-lg"
              >
                &ldquo;{line}&rdquo;
              </p>
            ))}
          </div>
        </div>
      )}

      {/* Locked message for future days */}
      {latestUnlocked < 7 && (
        <p className="font-romantic text-center text-black/60">
          The first surprise unlocks on 7 February — Rose Day 🌹
        </p>
      )}
    </section>
  );
}
