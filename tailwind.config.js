/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    { pattern: /^(bg|text|border|ring)-primary-(50|100|200|300|400|500|600|700|800|900|950)$/ },
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
      },
      colors: {
        primary: {
          50: "#e8f5f1",
          100: "#d1ebe3",
          200: "#a3d7c7",
          300: "#75c3ab",
          400: "#68BCA0",
          500: "#68BCA0",
          600: "#5aa88f",
          700: "#4a8f7a",
          800: "#3b7564",
          900: "#2d5a4e",
          950: "#1e3f36",
        },
      },
    },
  },
  plugins: [],
};
