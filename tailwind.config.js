/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        accent1: '#0B6477',
        accent2: '#0AD1C8'
      },
      fontFamily: {
        //to be discussed and be chatgpted for input thanks
      }
    },
  },
  plugins: [],
}