/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        primary: '#3B71FE'
      },
      colors: {
        primary: '#353945',
        'primary-2': '#3B71FE',
        secondary: '#777E90'
      },
      backgroundImage: {
        banner: 'url(/src/assets/img/banner.png)',
        'banner-mobile': 'url(/src/assets/img/banner-mobile.png)',
        circle: 'url(/src/assets/img/circle.png)',
        'trip-plan': 'url(/src/assets/img/trip-plan.png)'
      },
      backgroundPosition: {
        'ps-banner': '-110px center'
      },

      boxShadow: {
        custom: '-5px 6px 13px 0px rgba(59, 113, 254, 0.3)'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
