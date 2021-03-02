const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    extend: {
      colors: {
        limegreen: {
          '50': '#f7fbf7',
          '100': '#f0fae8',
          '200': '#dbf5bc',
          '300': '#b7eb83',
          '400': '#67d73e',
          '500': '#2ec019',
          '600': '#20a20f',
          '700': '#218212',
          '800': '#1e6216',
          '900': '#194c16',
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}