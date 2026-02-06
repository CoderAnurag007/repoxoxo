"use client";

import { useState, useRef, useEffect } from "react";

const BACKGROUND_MUSIC = "/background.mp3";
const AUTO_PLAY_DELAY_MS = 5000;

export default function MusicToggle() {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio();
    audioRef.current = audio;
    audio.volume = 0.5;
    audio.loop = true;
    audio.src = BACKGROUND_MUSIC;

    const startTimer = setTimeout(() => {
      audio.play().then(() => setPlaying(true)).catch(() => {});
    }, AUTO_PLAY_DELAY_MS);

    return () => {
      clearTimeout(startTimer);
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const toggle = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    } else {
      audioRef.current.play().catch(() => {});
    }
    setPlaying(!playing);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className="fixed top-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-romantic-pink/90 text-white shadow-lg transition-all hover:scale-110 hover:bg-romantic-pink hover:shadow-romantic-pink/50"
      title={playing ? "Pause music" : "Play music"}
      aria-label={playing ? "Pause music" : "Play music"}
    >
      {playing ? (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
        </svg>
      ) : (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z" />
        </svg>
      )}
    </button>
  );
}
