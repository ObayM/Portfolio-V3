/** @type {import('tailwindcss').Config} */
export const content = [
  './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
  './components/**/*.{js,ts,jsx,tsx,mdx}',
  './pages/**/*.{js,ts,jsx,tsx,mdx}',
];
export const theme = {
  extend: {
    // Add your custom colors, fonts, and other styles here
    colors: {
      'primary': '#FF6347', // Tomato
      'secondary': '#4B0082', // Indigo
      'accent': '#00FFFF', // Cyan
    },
  },
};
export const plugins = [];