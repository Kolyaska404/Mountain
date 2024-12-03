/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': '"Inter", sans-serif',
        'poppins': '"Poppins", sans-serif'
      },
      fontSize: {
        '1': '18px',
        '2': '20px',
        '3': '24px',
        '4': '32px',
        '5': '40px',
        '6': '72px',
        '7': '56px',
        '8': '120px',
        '9': '156px'
      },
      lineHeight: {
        '1': '32px',
        '2': '28px',
        '3': '30px',
        '4': '38px',
        '5': '56px',
        '6': '84px',
        '7': '64px',
        '8': '150px',
        '9': '156px'
      },
      backgroundColor: {
        'btn': 'rgba(0, 0, 0, 0.4)',
        'blur': 'rgba(0, 0, 0, 0.2)',
        'wh_5': 'rgba(255, 255, 255, 0.5)'
      },
      borderColor: {
        'wh_5': 'rgba(255, 255, 255, 0.5)'
      },
      colors: {
        'wh': 'rgba(255, 255, 255, 0.5);',
        'wh2': 'rgba(255, 255, 255, 0.7);'
      },
      backgroundImage: {
        'video': 'url("src/assets/imgs/car.png")',
        'arrow': 'url("src/assets/icons/header_arrow.svg")',
        'mouse': 'url("/src/assets/icons/scroll.svg")'
      }
    },
  },
  plugins: [],
}

