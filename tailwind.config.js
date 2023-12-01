/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customPrimary: "rgb(146, 239, 146)",
        textSecondary: "#f0f2f5",
      },
    },
  },
  plugins: [],
};
