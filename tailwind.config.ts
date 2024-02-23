import type { Config } from "tailwindcss";

const config: Config = {
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
      fontFamily: {
        rebond: ['Rebond Grotesque', "Inter", "system-ui", "sans-serif"],
      },
      colors: {
        "lime-400": "#8efe49",
        "zinc-600": "#5f5f5f",
        "neutral-900": "#181818",

      },
    },
  },
  plugins: [],
};
export default config;
