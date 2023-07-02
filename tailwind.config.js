/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#262626",
        primaryLight: "#404040",
        secondary: "#B4BF02",
        darkMode: "#171717",
        lightMode: "#F1F5F9",
      },
      spacing: {
        128: "32rem",
      },
      maxWidth: {
        "1080p": "1920px",
        "720p": "1000px",
      },
      minHeight: {
        movil: "850px",
      },
    },
  },
  plugins: [],
};
