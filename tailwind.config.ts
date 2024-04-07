import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  variants: {
    extend: {
      backgroundcolor: ['dark'],
      textcolor: ['dark']
    },
  },
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          'light': "#36ccc3",
          DEFAULT: '#077a8f',
          'dark': '#021F24'
        },
        cinder: {
          'light': "#202029",
          DEFAULT: "#14141f",
          'dark': '#000000',
        },
        gray: {
          'e8': '#e8e8e8',
          'd1':'#d1d1d1',
          'light': '#bababa',
          '8b': '#8b8b8b',
          DEFAULT: '#5e5e5e',
          '47': '#474747',
          'dark': '#191919'
        },
        'off_white': "#f7f8f9",
      }
    },
  },
  plugins: [],
};
export default config;
