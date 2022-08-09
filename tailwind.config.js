/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    colors:{
      primary: "#6A983C",
      secondary: "#151515",
      tertairy: "#EBEBEB",
      fourth: "#A9A9A9",
      fifth: "#D1D1D1",
      sixth: "#F9F9F9",
      seventh: "#E5704B",
      eight: "#F4F8EC",
      ninth: "#F5F5F5",
      tenth: "#46760A",
      elventh: "#575757",
      back: "#FFFFFF"
    },
    container: {
      center:true,
      padding: {
        md: "2rem",
        lg: "2rem",
        xl: "4rem", //8rem before
        xxl: "6rem",
        default: "1rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1440px",
      },
    },
    fontFamily:{
       "open": ["Open Sans, sans-serif"],
       "poppins": ["Poppins, sans-serif"],
    },
    extend: {},
  },
  plugins: [],
}
