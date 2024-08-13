import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "10px",
        lg: "80px",
      },
      screens: {
        sm: "375px",
        md: "768px",
        lg: "1200px",
      },
    },
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    extend: {
      backgroundImage: {
        hero: "url('/src/assets/avatar-1.png')",
      },
      keyframes: {
        flicker: {
          '0%, 19%, 21%, 50%, 52%, 80%, 100%': {
            boxShadow: '20px -20px 50px rgba(255, 255, 255, 0.5), -20px -20px 80px rgba(255, 255, 255, 0.1), 0 0 50px rgba(140, 69, 255, 1)',
            opacity: '1',
          },
          '20%, 51%, 81%': {
            boxShadow: '20px -20px 30px rgba(255, 255, 255, 0.3), -20px -20px 60px rgba(255, 255, 255, 0.05), 0 0 30px rgba(140, 69, 255, 0.8)',
            opacity: '0.8',
          },
        },
      },
      animation: {
        flicker: 'flicker 4s infinite',
      },
    },
  },
  plugins: [],
};

export default config;
