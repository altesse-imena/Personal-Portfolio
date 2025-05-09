/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        colors: {
          background: "#0f172a",
          primary: "#e2e8f0",
          secondary: "#94a3b8",
          accent: "#60a5fa",
          border: "#1e293b", // Add this line to define a border color
        },
        fontFamily: {
          sans: ["var(--font-inter)"],
        },
      },
    },
    plugins: [],
  }
  
  