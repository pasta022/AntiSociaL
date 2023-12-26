/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customPrimary: "rgb(146, 239, 146)",
        textSecondary: "#f0f2f5",
        textTertiary: "rgb(202, 202, 202)",
        hoverColor: "rgb(246, 244, 244)",
        chatColor: "rgb(232, 232, 232)"
      },
      boxShadow: {
        custom: "0px 0px 18px -8px rgba(0, 0, 0, 0.37)",
      },
    },
  },
  plugins: [],
};
