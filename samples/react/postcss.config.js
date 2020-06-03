module.exports = {
  plugins: [
    require('postcss-easy-import'),
    require('postcss-custom-properties'),
    require('postcss-custom-selectors'),
    require('postcss-custom-media'),
    require('postcss-nesting'),
    require('autoprefixer'),
    require('cssnano')
  ]
}