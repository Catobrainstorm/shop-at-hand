/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
        colors: {
      brandRed: "#F63600",
      brandOrange: "#FF7300",
      brandOlive: "#A58800",
      brandAmber: "#E18704",
      brandNeutral: "#E2CFC8",
      },
      fontFamily: {
        syne: ['var(--font-syne)'],
        lexend: ['var(--font-lexend)'],
      },
    },
  },
  plugins: [],
}