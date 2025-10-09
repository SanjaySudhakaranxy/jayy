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
        licorice: {
          DEFAULT: '#130E11',
          100: '#040303',
          200: '#070506',
          300: '#0b0809',
          400: '#0e0a0d',
          500: '#130e11',
          600: '#493641',
          700: '#805f73',
          800: '#ae91a2',
          900: '#d6c8d0',
        },
        neon: "#FC0028",
        night: "#0D110F",
        fireRed: "#D00425",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
