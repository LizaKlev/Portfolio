import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        black: '#110F10',
        green: '#319B56',
        blue: '#31A8FF',
        purple: '#6D569A',
        pink: '#EA8698',
        orange: '#F3702A',
        yellow: '#F7B335',
        coral: '#F5956C',
        bluish: '#91A8EB',

      },
      
    },
  },
  plugins: [],
};
export default config;
