/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      height: {
        '10p': '10%',
        '50p': '50%',
        '60p': '60%',
        '80p': '80%',
        // Más personalizados...
      },
      


      fontFamily: {
        generalsans: ['General Sans', 'sans-serif'],
      },
      colors: {

        

        Destacado:{
          DEFAULT: '#7DD3FC',

        },



        Aoscuro:{
          DEFAULT: '#15303A',
        },

        Red:{
          DEFAULT: '#FF0000',
        },

        Verde:{
          DEFAULT: '#008f39',
        },

    

        



        destacado: {
          DEFAULT: '#5EEAD4',
          50: '#F0FDFA',      // Muy claro (para fondos)
          100: '#CCFBF1',      // 
          200: '#99F6E4',      // 
          300: '#5EEAD4',      // Igual a DEFAULT (para consistencia)
          400: '#2DD4BF',      // Más saturado
          500: '#14B8A6',      // Balanceado
          600: '#0D9488',      // Oscuro
          700: '#0F766E',      // Más oscuro
          800: '#115E59',      // Profundo
          900: '#134E4A',      // Muy oscuro
        },
        black: {
          DEFAULT: '#000',
          100: '#010103',
          200: '#0E0E10',
          300: '#1C1C21',
          500: '#3A3A49',
          600: '#1A1A1A',
        },
        white: {
          DEFAULT: '#FFFFFF',
          800: '#E4E4E6',
          700: '#D6D9E9',
          600: '#AFB0B6',
          500: '#62646C',
        },
      },
      backgroundImage: {
        terminal: "url('/assets/terminal.png')",
      },
    },
  },
  plugins: [],
};