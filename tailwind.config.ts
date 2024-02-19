import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "dark-grey": "#333333",
        "light-grey": "#808080",
        yellow: "#FFB612",
        red: "#dc0a17",
        green: "#2FC022",
      },
      backgroundColor: {
        yellow: "#FFB612",
      },
      width: {
        button: "300px",
      },
    },
  },
  plugins: [],
};
export default config;
