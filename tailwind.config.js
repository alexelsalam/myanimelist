import{nextui}from "@nextui-org/react"
/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}", "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
],
  theme: {
    extend: {
      colors:{
        primary:'#14b8a6',
      },
      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0 2px 4px var(--tw-shadow-color)",
        lg: "0 8px 16px var(--tw-shadow-color)",
      },
      keyframes: {
        fadeInRight: {
          from: {
            opacity: 0,
            transform: "translateX(100px)",
          },
          to: {
            opacity: 1,
          },
        },
        fadeInLeft: {
          from: {
            opacity: 1,
          },
          to: {
            opacity: 0,
            transform: "translateX(100px)",
          },
        },
        fadeInTop: {
          from: {
            opacity: 0,
            transform: "translateY(-100px)",
          },
          to: {
            opacity: 1,
            transform: "translateY(0px)",
            
          },
        },
      },
      animation: {
        fadeInRight: "fadeInRight 0.5s ease",
        fadeInLeft: "fadeInLeft 0.5s ease",
        fadeInTop: "fadeInTop 0.5s ease",
      },
    },
  },
  darkmode:"class",
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  nextui()],
};
