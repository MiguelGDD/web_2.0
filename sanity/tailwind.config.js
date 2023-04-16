module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        1440: '1440px',
      },
      spacing: {
        '40': '45.7%',
      },
      width: {
        '1k': '1000px',
        '30': '30%',
        '70': '70%',
      },
      height: {
        '500': '500px',
      },
      margin: {
        '1/4': '4%',
        '1/5': '12%',
      },
      colors: {
        'principal': '#4C70EF',
        'description' : '#B0ADAD',
        'back': '#292C36',
      }
    },
  },
  
  plugins: [],
}
