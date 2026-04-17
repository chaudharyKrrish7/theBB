import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", 
  ],
  theme: {
    extend: {
      colors: {
        blush: '#C59B99', // Your signature luxury pink
        linen: '#F5E6E0', // The secondary premium background color
        charcoal: '#2D2926', // Your deep readable text color
      },
      fontFamily: {
        // Brand Identity Fonts
        amsterdam: ['var(--font-amsterdam)', 'cursive'],
        preistacy: ['var(--font-preistacy)', 'serif'],
        zaslia: ['var(--font-zaslia)', 'serif'],
        raleway: ['var(--font-raleway)', 'sans-serif'],
        alexbrush: ['var(--font-alexbrush)', 'cursive'],
        // General UI Fonts
        sans: ['var(--font-montserrat)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;