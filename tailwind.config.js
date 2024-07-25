const { nextui } = require("@nextui-org/react");

const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|snippet|code|input).js",
  ],
  theme: {
    extend: {
      keyframes: {
        expandWidth: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        fadeInUp: {
          "0%": { transform: "translateY(50px)" },
          "100%": { transform: "translateY(0)" },
        },
        scroll: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        slideLeft: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-25%)" },
        },
        slideUp: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0%)" },
        },
        draw: {
          "0%": {
            strokeDasharray: "0, var(--path-length)",
          },
          "100%": {
            strokeDasharray: "var(--path-length), var(--path-length)",
          },
        },
      },
      animation: {
        expandWidth: "expandWidth 1s ease-in-out forwards",
        fadeInUp: "fadeInUp 0.7s ease-out forwards",
        scroll: "scroll 4s linear infinite",
        slideLeft: "slideLeft 1s ease-in-out forwards",
        slideUp: "slideUp 1s ease-out forwards",
        draw: 'draw 2s ease-in-out forwards',
      },
      fontFamily: {
        nexa: ["nexa"],
        nexaLight: ["nexa-light"],
      },
      colors: {
        brGold: "#DCB95F",
        brBlue: "#0B72B7",
      },
    },
    darkMode: "class",
    plugins: [
      nextui({
        addCommonColors: true,
        defaultTheme: "dark",
        themes: {
          light: {
            colors: {
              primary: "#0B72B7",
              default: "#0B72B7",
            },
          },
          dark: {
            colors: {
              primary: "#0B72B7",
              default: "#0B72B7",
            },
          },
        },
      }),
    ],
  },
};
export default config;
