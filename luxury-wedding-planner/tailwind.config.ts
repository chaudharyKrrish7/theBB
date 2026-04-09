import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", 
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-playfair)'], 
        sans: ['var(--font-montserrat)'], 
      },
    },
  },
  plugins: [],
};
export default config;