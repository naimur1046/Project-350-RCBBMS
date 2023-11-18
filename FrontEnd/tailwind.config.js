/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
       colors:{
        'neutralSilver':'#F5F7FA',
        'neutralD_Grey': '#4D4D4D',
        'brandPrimary': '#4CAF4F',
        'neutralGrey' : '#717171',
        'text-gray-900': '#18191F',
        'deepRed':'#D4145A',
        'lightRed':' #FBB03B',
        'black-dark': '#00000050',
        'dull-white': '#FFFFFFB3',
        'white-light': '#FFFFFF30',
        'white-medium': '#FFFFFF40',
        'neon-blue': '#2FB8FF'
       }
    },
  },
  plugins: [require('flowbite/plugin')],
}

