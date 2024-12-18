/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '640px',

      'md': '1024px',

      'lg': '1440px',
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        gilroybold: ['Gilroy-Bold', 'sans-serif'], // Custom font path in resources
        gilroysemibold: ['Gilroy-SemiBold', 'sans-serif'],
        gilroyregular: ['Gilroy-Regular', 'sans-serif'],
        gilroymedium: ['Gilroy-Medium', 'sans-serif'],
        gilroybolditalic: ['Gilroy-BoldItalic', 'sans-serif']
      },
    },
  },
  plugins: [],
};
