import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#154699",
        "blue-300": "#6b9ac4",
        "blue-700": "#153243",
        "blue-800": "#102d3c",
        white: "#FFFFFF",
        darkwhite: "#F4F3F2",
        black: "#000000",
        transparent: "rgba(255, 255, 255, 0)",
        gray: "#808080",
        primary: "#0766ff",
                "primary-content": "#ffffff",
                "primary-dark": "#0051d3",
                "primary-light": "#3a85ff",

                secondary: "#ff073d",
                "secondary-content": "#ffffff",
                "secondary-dark": "#d3002e",
                "secondary-light": "#ff3a65",

                background: "#eeeff2",
                foreground: "#fbfbfc",
                border: "#dbdee3",

                copy: "#21252b",
                "copy-light": "#596373",
                "copy-lighter": "#7e899b",

                success: "#07ff07",
                warning: "#ffff07",
                error: "#ff0707",

                "success-content": "#000700",
                "warning-content": "#070700",
                "error-content": "#ffffff"
      },
      animation: {
        bloop: "bloop 3s ease-in-out infinite",
        bloopMobile: "bloopMobile 3s ease-in-out infinite",
        slide: "slide 35s linear infinite",
        pulseShadow: "pulseShadow 2s infinite ease-in-out",
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
        pulseShadow: {
          "0%, 100%": {
            boxShadow: "0 0 0 0px rgba(255, 255, 255, 0.7)",
          },
          "50%": {
            boxShadow: "0 0 0 15px rgba(255, 255, 255, 0)",
          },
        },
      },
      boxShadow: {
        cool: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  plugins: [
    require("@xpd/tailwind-3dtransforms")
  ],
};

export default config;
