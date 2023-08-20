/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}", "./public/mycss.css"],
  theme: {
    //colors: {
    //kopi: {
    //light: '#67e8f9',
    //DEFAULT: "#b6895b",
    //dark: "#010101",
    //},
    //},
    extend: {
      opcaity: {
        80: ".8",
      },
      fontFamily: {
        scp: ["Source Code Pro", "monospace"],
      },
      colors: {
        kopi: {
          DEFAULT: "#b6895b",
          dark: "#010101",
        },
      },
    },
  },
  plugins: [],
};
