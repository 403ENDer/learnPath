import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter"],
      },
      colors: {
        primary: {
          DEFAULT: "#2563EB", // Blue-600
          light: "#3B82F6", // Blue-500
          dark: "#1E40AF", // Blue-700
        },
        secondary: {
          DEFAULT: "#F59E0B", // Amber-500
          light: "#FBBF24", // Amber-400
          dark: "#D97706", // Amber-600
        },
        neutral: {
          DEFAULT: "#64748B", // Slate-500
          light: "#E2E8F0", // Slate-200
          dark: "#1E293B", // Slate-800
        },
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
      boxShadow: {
        "custom-light": "0 4px 6px rgba(0, 0, 0, 0.1)",
        "custom-dark": "0 4px 10px rgba(0, 0, 0, 0.25)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideUp: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.3s ease-out",
        slideUp: "slideUp 0.5s ease-in-out",
      },
    },
  },
  plugins: [],
};

export default config;
