module.exports = {
  theme: {
    extend: {
      colors: {
      },
      backgroundImage: theme => ({
        'hero-image': "url('/assets/stock photos/unsplash-science-in-hd.jpg')"
       })
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}
