/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        icyBlue: "#A8DADC",
        deepOceanBlue: "#457B9D",
        snowWhite: "#F1FAEE",
        frostedGray: "#E0E5E8",
        evergreen: "#1D3557",
        warmStone: "#ADB5BD",
      },
    },
  },
  plugins: [daisyui],
};
