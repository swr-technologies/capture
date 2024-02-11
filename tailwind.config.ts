import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3D3D3D",
        secondary: "#E01A22",
        disable: "#B8C1CE",
        "text-disabled": "#798496",
        "button-hover": "#B60D14"
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
