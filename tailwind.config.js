/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#05070B",
        bgAlt: "#0D1320",
        card: "#0F1626",
        border: "rgba(255,255,255,0.08)",
        accent: "#2F5CFF",
        accentGlow: "#6C8DFF",
        text: "#F5F7FA",
        textSecondary: "#9AA3B5",
        textTertiary: "#5E6675",
      },
      fontFamily: {
        display: ["Space Grotesk", "Inter", "sans-serif"],
        sans: ["Inter", "-apple-system", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px -8px rgba(47,92,255,0.45)",
        card: "0 20px 50px -20px rgba(0,0,0,0.5)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};
