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
        smoothRandomGlow: {
          '0%, 100%': {
            boxShadow: '20px -20px 60px rgba(255, 255, 255, 0.7), -20px -20px 90px rgba(255, 255, 255, 0.2), 0 0 60px rgba(140, 69, 255, 1.2)',
            opacity: '1',
          },
          '20%': {
            boxShadow: '20px -20px 50px rgba(255, 255, 255, 0.5), -20px -20px 80px rgba(255, 255, 255, 0.1), 0 0 50px rgba(140, 69, 255, 1)',
            opacity: '0.9',
          },
          '40%': {
            boxShadow: '20px -20px 75px rgba(255, 255, 255, 0.8), -20px -20px 100px rgba(255, 255, 255, 0.25), 0 0 75px rgba(140, 69, 255, 1.3)',
            opacity: '0.95',
          },
          '60%': {
            boxShadow: '20px -20px 55px rgba(255, 255, 255, 0.65), -20px -20px 85px rgba(255, 255, 255, 0.18), 0 0 55px rgba(140, 69, 255, 1.1)',
            opacity: '1',
          },
          '80%': {
            boxShadow: '20px -20px 50px rgba(255, 255, 255, 0.5), -20px -20px 80px rgba(255, 255, 255, 0.1), 0 0 50px rgba(140, 69, 255, 1)',
            opacity: '0.9',
          },
        },
      },
      animation: {
        smoothRandomGlow: 'smoothRandomGlow 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
