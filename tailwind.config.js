/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/slices/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-dm-sans)']
      }
    },
  },
  plugins: [
    function ( { addUtilities }){
      addUtilities({
        '.border-color':{
          '@apply border-slate-300/90': {},
        },
        '.bottom-border':{
          '@apply border-b border-slate-300/40':{},
        }
      })
    }
  ],
}

