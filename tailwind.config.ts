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
      white: "#FFFFFF",
      black: "#000000",
      transparent: "rgba(255, 255, 255, 0)"
    },
    extend: {
      animation: {
        bloop: 'bloop 3s ease-in-out infinite',
        swing: 'swing 4s ease-in-out infinite',
      },
      keyframes: {
        bloop: {
          '0%, 100%': {
            transform: 'scale(1)',
          },
          '50%': {
            transform: 'scale(1.2)',
          },
        },
      },
      height: {
        'screen-150': '250vh', 
      },
    },
  },
  plugins: [],
};
export default config;
