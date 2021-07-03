module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
     gradientColorStops: theme => ({
      ...theme('colors'),
      'primary': '#fa5e52',
      'secondary': '#fa8050',
     })
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

