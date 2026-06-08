/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Critical for next-themes to toggle styles correctly
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#2563EB",
          secondary: "#1E293B",
          success: "#22C55E",
          warning: "#F59E0B",
          danger: "#EF4444",
          bgLight: "#F8FAFC",
          bgDark: "#0B0F19", // Sleek, dark SaaS background
        },
      },
      animation: {
        "orbit-clockwise": "orbitClockwise 25s linear infinite",
        "orbit-counter": "orbitCounter 35s linear infinite",
        "pulse-glow": "pulseGlow 6s ease-in-out infinite",
        "float-slow": "floatSlow 7s ease-in-out infinite",
        "fade-in-up": "fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
      keyframes: {
        orbitClockwise: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        orbitCounter: {
          "0%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: 0.3, transform: "scale(1)" },
          "50%": { opacity: 0.6, transform: "scale(1.08)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px) translateX(0px)" },
          "50%": { transform: "translateY(-12px) translateX(6px)" },
        },
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(24px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
