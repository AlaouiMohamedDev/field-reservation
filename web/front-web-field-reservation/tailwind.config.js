/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      zIndex: {
        '100': '100',
        '90':'90'
      },
      colors:{
        'main':'#03C988',
        'dashBlack':'#212529',
        'custGreen':'#0ab39c'
      },
      fontFamily:{
        'roboto':['Roboto', 'sans-serif'],
        'poppins':['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
