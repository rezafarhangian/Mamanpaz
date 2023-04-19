/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "mamanpaz" : "#ff5851",
      }
    },
    container: {
      center: true,
    },

    fontFamily: {
      vazir: ["VazirFont"],
    },
  

    
  },
  plugins: [
  ],
}

