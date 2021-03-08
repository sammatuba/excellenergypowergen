module.exports = {
  theme: {
    extend: {
      colors: {
      },
      backgroundImage: theme => ({
        'hero-image': "url('/assets/stock photos/unsplash-science-in-hd.jpg')"
       })
    },
    variants: {
      fill: ['hover', 'focus'], // this line does the trick
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}
