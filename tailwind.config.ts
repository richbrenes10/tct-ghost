import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#171717",
        paper: "#f7f2eb",
        sand: "#f3e8da",
        accent: "#b65f42",
        accentDark: "#7e3d2b"
      },
      boxShadow: {
        soft: "0 24px 80px rgba(30, 18, 12, 0.14)"
      }
    }
  },
  plugins: []
};

export default config;
