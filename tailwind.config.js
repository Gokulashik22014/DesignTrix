/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#DD335C',
        secondary:'#1E67C6',
        background:'#020617',
      }
    },
  },
  plugins: [],
}

