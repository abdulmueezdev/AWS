import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Light Mode extensions
        brand: '#FF9900', // AWS Orange
        'brand-dark': '#252F3E', // AWS Dark Slate (Primary Text)
        'section-gray': '#F2F3F5',
        
        // Dark Mode extensions
        'navy-purple': '#1E202C', // Community Theme Background
        'card-dark': '#252632',
        'royal-purple': '#60519B', // Primary Accent
        'text-light': '#F4F5F7',
      },
    },
  },
  plugins: [],
};
export default config;
