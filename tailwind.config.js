/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#2CBCE9",
        blackOverlay: "rgba(0, 0 ,0 ,0.6)",
        darkBlue: "#122774",
        orange: "#fb962e",
        gray: "#333333",
        graysh: "#112140",
        grayshish: "#191919",
        blackTransparent: "rgba(0, 0, 0, 0.3)",
        blackLessTransparent: "rgba(0, 0, 0, 0.1)",
        green: "#00ffc8",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      content: {},
      keyframes: {
        BlinkCursor: {
          "0%,75%": {
            opacity: "1",
          },
          "76%,100%": {
            opacity: "0",
          },
        },
        typing: {
          "0%": {
            width: "0",
          },
          "30%": {
            width: "729px",
          },
        },
        headerAppears: {
          from: {
            opacity: "0",
            visibility: "visible",
          },
          to: {
            opacity: "1",
            visibility: "visible",
          },
        },
        arrowBounce: {
          "0%": {
            width: "10em",
          },
          "50%": {
            width: "13em",
          },
          "100%": {
            width: "10em",
          },
        },
      },
      animation: {
        BlinkCursor: "BlinkCursor 0.8s steps(3) infinite",
        typing: "typing 8s steps(22) forwards",
        headerAppears: "headerAppears 2s ease 2.5s forwards",
        arrowBounce: "arrowBounce 2s ease infinite",
      },
    },
  },
  plugins: [],
};
