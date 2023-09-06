/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        roboto: ["Roboto"],
        noto: ["Noto Serif"],
      },
      colors: {
        blue: {
          principal: "#1C508D",
          secondary: "#0076FF",
          terciary: "#0D2748",
          quaterny: "#06162F",
          fifth: "#DBE2F1",
          extra: "#39669C",
        },
        gray: {
          principal: "#F6F6F6",
          secondary: "#4F627B",
        },
      },
      fontSize: {
        "2xs": ["0.625rem", { lineHeight: "0.75rem" }],
        "3xs": ["0.5rem", { lineHeight: "0.5rem" }],
        "10xl": ["5rem", { lineHeight: "0.5rem" }],
        "12xl": ["5.5rem", { lineHeight: "0.5rem" }],
        "14xl": ["6rem", { lineHeight: "0.5rem" }],
      },
      height: {
        100: "26rem",
        114: "29rem",
        128: "32rem",
        130: "34rem",
      },
      width: {
        100: "26rem",
        114: "29rem",
        128: "32rem",
      },
    },
  },
  plugins: [require("tailwindcss"), require("tailwind-scrollbar")],
};
