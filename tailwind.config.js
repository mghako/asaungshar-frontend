module.exports = {
  purge: {
  },
  theme: {
    extend: {},
  },
  variants: {
    width: ['responsive', 'hover', 'focus'],
    height: ['responsive', 'hover', 'focus'],
    backgroundColor: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    tableLayout: ['responsive', 'hover', 'focus'],
    flex: ['responsive', 'hover', 'focus'],
  },
  plugins: [],
}
//purge: {
  // enabled: process.env.NODE_ENV === 'production',
  // content: [
  //   './public/**/*.html',
  //   './src/**/*.vue'
  // ]
// },