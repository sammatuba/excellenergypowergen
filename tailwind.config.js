module.exports = {
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'green': '#1b8b00', // '#59981A'
        'green-lime': '#a2d240', //'#81B622',
        'green-dark': '#002801', // '#3D550C',
        'green-yellow': '#ECF87F', //'#d4e690', 
        'gray': {
          darkest: '#1f2d3d',
          dark: '#3c4858',
          DEFAULT: '#c0ccda',
          light: '#e0e6ed',
          lightest: '#f9fafc',
        }
      },
      backgroundImage: theme => ({ 
        'hero-photo-sun': "url('~/assets/stock_photos/istock-sun-solarpv.jpg')",
        'hero-photo-sunrise': "url('~/assets/stock_photos/istock-sunrise-solarpv.jpg')",
        'hero-photo-sunset': "url('~/assets/stock_photos/istock-sunset-solarpv.jpg')"
      })
    },
  },
  variants: {
    extend: {
      translate: ['group-hover'],
      backgroundColor: ['active']
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}
