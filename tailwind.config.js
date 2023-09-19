/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-brand": {
          50: "#FFEFD7",
          100: "#FFE0B0",
          200: "#FFBE75",
          300: "#FF9543",
          400: "#F36A1D",
          500: "#BD5724",
          600: "#8B4527",
          700: "#5F3424",
        },
        "neutral-gray": {
          50: "#F9F8F7",
          100: "#F4F3F1",
          200: "#E2E1DF",
          300: "#C3C3BF",
          400: "#B4B2AF",
          500: "#777574",
          600: "#8B4527",
          700: "#353432",
          800: "#232221",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
