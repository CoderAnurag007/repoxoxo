"use client";

import RoseIllustration from "./RoseIllustration";

interface DayIllustrationProps {
  componentKey: string;
  className?: string;
}

export default function DayIllustration({ componentKey, className = "" }: DayIllustrationProps) {
  if (componentKey === "rose") {
    return <RoseIllustration />;
  }

  const baseClass = "h-40 w-40 sm:h-48 sm:w-48 flex items-center justify-center " + className;

  switch (componentKey) {
    case "propose":
      return (
        <div className={baseClass}>
          <div className="text-6xl sm:text-7xl drop-shadow-lg animate-[float_6s_ease-in-out_infinite]">
            💍
          </div>
        </div>
      );
    case "chocolate":
      return (
        <div className={baseClass}>
          <div className="rounded-2xl bg-amber-900/90 p-6 shadow-xl animate-[float_6s_ease-in-out_infinite] text-5xl sm:text-6xl">
            🍫
          </div>
        </div>
      );
    case "teddy":
      return (
        <div className={baseClass}>
          <div className="text-6xl sm:text-7xl drop-shadow-lg animate-[float_6s_ease-in-out_infinite]">
            🧸
          </div>
        </div>
      );
    case "promise":
      return (
        <div className={baseClass}>
          <div className="text-6xl sm:text-7xl drop-shadow-lg animate-[float_6s_ease-in-out_infinite]">
            🤝
          </div>
        </div>
      );
    case "hug":
      return (
        <div className={baseClass}>
          <div className="text-6xl sm:text-7xl drop-shadow-lg animate-[float_6s_ease-in-out_infinite]">
            🤗
          </div>
        </div>
      );
    case "kiss":
      return (
        <div className={baseClass}>
          <div className="text-6xl sm:text-7xl drop-shadow-lg animate-[float_6s_ease-in-out_infinite]">
            💋
          </div>
        </div>
      );
    case "valentine":
      return (
        <div className={baseClass}>
          <div className="text-6xl sm:text-7xl drop-shadow-lg animate-[float_6s_ease-in-out_infinite]">
            💕
          </div>
        </div>
      );
    case "mahashivratri":
      return (
        <div className={baseClass}>
          <div className="rounded-2xl bg-slate-800/80 px-6 py-4 shadow-xl animate-[float_6s_ease-in-out_infinite] text-4xl sm:text-5xl">
            🪷
          </div>
        </div>
      );
    default:
      return null;
  }
}
