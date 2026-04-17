import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", 
  ],
  theme: {
    extend: {
      colors: {
        blush: '#C59B99', // The signature luxury pink
      },
      fontFamily: {
        serif: ['var(--font-playfair)'], 
        sans: ['var(--font-montserrat)'], 
        script: ['var(--font-script)'], 
      },
    },
  },
  plugins: [],
};
export default config;