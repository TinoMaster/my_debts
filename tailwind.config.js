/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E91E63",
        /* primary: "#4338CA", */
        secondary: "#047857",
        third: "#A16207",
        darkMode: "#171717",
        lightMode: "#F1F5F9",
      },
      fontFamily: {
        roboto: ["Roboto"],
      },
      spacing: {
        128: "32rem",
      },
      maxWidth: {
        "1080p": "1920px",
        "720p": "1100px",
      },
      minHeight: {
        movil: "850px",
      },
    },
  },
  plugins: [],
};
