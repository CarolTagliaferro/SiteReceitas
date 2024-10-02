/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bgLight: '#E6ABA3',
        bgDark: '#CA7B77',
        bgWhite: '#F4F4F4',
        title: '#77080A',
        font: '#F0B8A7',
        
      },

      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}

