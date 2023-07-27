/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        'violet': 'hsl(257, 40%, 49%)',
        'soft-magenta': 'hsl(300, 69%, 71%)',
      }
    },
    fontFamily: {
      'heading': ['Poppins', 'sans-serif'],
      'body': ['"Open Sans"', 'sans-serif']
    }
  },
  plugins: [],
}

