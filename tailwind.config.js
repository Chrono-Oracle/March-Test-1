/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  
  theme: {
    extend: {

      screens: {
        lg: '1024px', // Modify lg to include exactly 1024px
      },

      fontFamily: {
        'logoFont': ['"Space Grotesk"'],
        
      },

      colors: {
        'PrimaryBlue': ["#007BFF"],
        
      },

      backgroundImage: {
        'headerBg': "url('/src/assets/images/daenerys-targaryen.jpg')",
        
      },

    },
  },
  plugins: [],
}

