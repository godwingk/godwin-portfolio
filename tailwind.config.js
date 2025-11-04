/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        float: "float 6s ease-in-out infinite",
        orbit: "orbit 20s linear infinite",
        typewriter: "typewriter 3s steps(40) 1s 1 normal both",
        blink: "blink 1s infinite",
        particle: "particle 2s ease-out forwards",
        "bounce-slow": "bounce 3s infinite",
        "pulse-slow": "pulse 4s infinite",
        "spin-slow": "spin 8s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        orbit: {
          "0%": { transform: "rotate(0deg) translateX(100px) rotate(0deg)" },
          "100%": {
            transform: "rotate(360deg) translateX(100px) rotate(-360deg)",
          },
        },
        typewriter: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
        blink: {
          "0%, 50%": { opacity: "1" },
          "51%, 100%": { opacity: "0" },
        },
        particle: {
          "0%": { transform: "translateY(0) scale(1)", opacity: "1" },
          "100%": { transform: "translateY(-100px) scale(0)", opacity: "0" },
        },
      },
      colors: {
        primary: {
          50: "#f0f9ff",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
        },
        accent: {
          500: "#8b5cf6",
          600: "#7c3aed",
        },
      },
      fontFamily: {
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
