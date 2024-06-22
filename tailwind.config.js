/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      Inter: ["Urbanist"],
      Abril: ["Abril Fatface"],
      Merriweather: ["Noto Serif Display"], //Girassol Libre Caslon Text Instrument Serif Gloock Aguafina Script
    },
    extend: {
      colors: {
        background: "#fff9ef",
        button: "#ffc094",
        button_circ: "#8b5328",
        button_hover: "#ed965a",
        footer: "#201108",
      },
      lineHeight: {
        extra_close: "0.7",
      },
      keyframes: {
        slideUp: {
          "0%": { transform: "translateY(10%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-10%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
      animation: {
        slideUp: "slideUp 1.3s ease-out",
        slideInLeft: "slideInLeft 1.3s ease-out",
      },
      transitionDelay: {
        0: "0ms",
        500: "500ms",
        1000: "1000ms",
        1500: "1500ms",
      },
    },
  },
  plugins: [],
};
