/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        opay: { green: '#19a46a', dark: '#147a50', light: '#e6f7f0' }
      }
    }
  },
  plugins: []
}