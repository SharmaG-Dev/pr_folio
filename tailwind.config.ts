import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "banner-image":"url('/assets/banner.jpg')"
      },
      colors: {
        primary: "#A7D129",
        "primary-light":"#a7d1201a",
        "light-gray": "#D1D5DB",
        "custom-gray": "#808080",
        "deep-gray": "#0A0A0F",
        "light-dark": "#313131",
        "dark": "#101017",
        "deep-dark": "#050507"
      },
      height:{
        banner :"35vh",
        main:"70vh",
        'sub-main':"60vh"
      }
    },
  },
  plugins: [],
};
export default config;
