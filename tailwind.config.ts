import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        romantic: {
          pink: "#ff6b9d",
          "pink-light": "#ffb3c6",
          "pink-dark": "#e91e63",
          rose: "#ff85a2",
          blush: "#ffc0cb",
        },
      },
      fontFamily: {
        romantic: ["var(--font-playfair)", "Georgia", "serif"],
        script: ["var(--font-dancing)", "cursive"],
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
        "heart-float": "heartFloat 4s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(255, 107, 157, 0.3)" },
          "100%": { boxShadow: "0 0 40px rgba(255, 107, 157, 0.6)" },
        },
        heartFloat: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "25%": { transform: "translateY(-8px) rotate(2deg)" },
          "75%": { transform: "translateY(-4px) rotate(-2deg)" },
        },
      },
      perspective: {
        1000: "1000px",
        1200: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
