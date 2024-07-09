import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'nexa' : [ 'nexa' ],
        'nexaLight' : [ 'nexa-light' ],
      },
      colors: {
        brGold : '#DCB95F',
        brBlue: '#0B72B7',
      },
    },
  },
  plugins: [],
};
export default config;
