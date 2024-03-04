/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#7AAC83",
        secondary: "#EF3341",
        back:"#F6FDFE",
      },
    },
  },
  plugins: [require("daisyui")],
};