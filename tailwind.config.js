/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  plugins: [
    function ({ addBase, config }) {
      addBase({
        html: { fontSize: "50%" },
      });
    },
  ],
  theme: {
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
      mob: { max: "479px" },
    },
    extend: {
      backgroundImage: (theme) => ({
        "gradient-green":
          "linear-gradient(to left, rgba(0, 255, 200, 0), #00ffc8, rgba(0, 255, 200, 0)), linear-gradient(to right, rgba(0, 255, 200, 0), #00ffc8, rgba(0, 255, 200, 0))",
        "gradient-rainbow":
          "linear-gradient(81.66deg, #00B5EE 7.21%, #FF45A4 45.05%, #FFBA00 78.07%)",
        "gradient-blue":
          "linear-gradient(90.5deg, rgb(35, 210, 255) 0.3%, rgb(74, 104, 247) 18.2%, rgb(133, 80, 255) 36.4%, rgb(198, 59, 243) 52.5%, rgb(250, 84, 118) 68.8%, rgb(255, 223, 67) 99.9%)",
      }),
      colors: {
        blue: "#2CBCE9",
        blackOverlay: "rgba(0, 0 ,0 ,0.6)",
        darkBlue: "#122774",
        orange: "#fb962e",
        gray: "#333333",
        graysh: "rgb(34, 38, 41,0.6)",
        graybg: "#222629",
        graybgDarker: " #1b1e21",
        grayshish: "#191919",
        blackTransparent: "rgba(0, 0, 0, 0.3)",
        blackLessTransparent: "rgba(0, 0, 0, 0.1)",
        green: "#00ffc8",
        white: "#fff",
        black: "#000000",
        darkestblue: "#10213f",
        textgray: "#8891b0",
        slideBlue: "#082037",
        inputGray: "#2C3E50",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
      },
      content: {
        profile: "url('./assets/profile.png')",
        brush: "url('./assets/brush.png')",
      },
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
            width: "574px",
          },
        },
        typingForMdScreen: {
          "0%": {
            width: "0",
          },
          "30%": {
            width: "342px",
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
        typingForSmScreen: {
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
            width: "5em",
          },
          "50%": {
            width: "7em",
          },
          "100%": {
            width: "5em",
          },
        },
        navBarOpen: {
          "0%": {
            left: "100%",
          },
          "100%": {
            left: "60%",
          },
        },
        navBarClose: {
          "0%": {
            left: "60%",
          },
          "100%": {
            left: "100%",
          },
        },
        navBarOpenForMob: {
          "0%": {
            left: "100%",
          },
          "100%": {
            left: "20%",
          },
        },
        navBarCloseForMob: {
          "0%": {
            left: "20%",
          },
          "100%": {
            left: "100%",
          },
        },
      },
      animation: {
        BlinkCursor: "BlinkCursor 0.8s steps(3) infinite",
        typing: "typing 8s steps(22) forwards",
        typingForSmScreen: "typingForSmScreen 3s steps(22) forwards",
        typingForMdScreen: "typingForMdScreen 8s steps(22) forwards",
        headerAppears: "headerAppears 2s ease 2.5s forwards",
        arrowBounce: "arrowBounce 2s ease infinite",
        navBarClose: "navBarClose 0.5s ease forwards",
        navBarCloseForMob: "navBarCloseForMob 0.5s ease forwards",
        navBarOpen: "navBarOpen 0.5s ease forwards",
        navBarOpenForMob: "navBarOpenForMob 0.5s ease forwards",
      },
      boxShadow: {
        "3xl": "0 1px 4px rgb(146 161 176 / 15%)",
        "4xl": "0 0 10px",
      },
    },
  },
  plugins: [],
};
