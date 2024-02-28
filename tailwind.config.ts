import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      blue: "#1d3b4f",
      "blue-300": "#6b9ac4",
      "blue-700": "#153243",
      "blue-800": "#102d3c",
      white: "#FFFFFF",
      black: "#000000",
      transparent: "rgba(255, 255, 255, 0)",
      gray: "#808080",
    },
    extend: {
      animation: {
        bloop: "bloop 3s ease-in-out infinite",
        bloopMobile: "bloopMobile 3s ease-in-out infinite",
        slide: "slide 35s linear infinite",
      },
      keyframes: {
        bloop: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.2)" },
        },
        bloopMobile: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
        slide: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      boxShadow: {
        cool: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
      },
      backgroundImage: {
        "splatter-gradient": 
          "radial-gradient(circle at 20% 20%, rgba(143, 45, 86, 0.8), transparent), radial-gradient(circle at 80% 80%, rgba(57, 105, 136, 0.8), transparent)"
      },
    },
  },
  plugins: [],
};

export default config;
