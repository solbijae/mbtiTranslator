/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        'white': '#fff',
        'cream': '#f7f9fc',
        'dark': '#25262b',
        'gray': '#ccc',
        'orange': '#ff7b3a',
        'light-orange': '#e59560',
        'blue': '#3498db',
        'black-10': 'rgba(0,0,0,0.1)'
      },
      width: {
        '40': '40px',
        '70': '70%',
        '80': '80%',
        '90': '90%',
      },
      height: {
        '40': '40px',
        '60': '60vh',
      },
      padding: {
        '8': '8px',
        '15': '15px',
        '60': '60px',
      },
      margin: {
        '10': '10px',
        '15': '15px',
        '25': '25px',
        '80': '80px',
      },
      gap: {
        '5': '5px',
        '10': '10px',
      },
      boxShadow: {
        'inset-cream': '0 0 0px 1000px #f7f9fc inset',
      },
      borderRadius: {
        'sm': '3px',
        'full': '50%',
      },
      borderWidth: {
        '5': '5px',
      },
      fontWeight: {
        'semibold': '600',
        'bold': '700',
      },
      transitionProperty: {
        'width': 'width',
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
}
