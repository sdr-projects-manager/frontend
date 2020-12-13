const withLess = require('@zeit/next-less')
const withCSS = require('@zeit/next-css')

module.exports = withCSS(
  withLess({
    lessLoaderOptions: {
      modifyVars: {
        'primary-color': '#3CEAB8',
        'link-color': '#3CEAB8',
        'layout-header-background': '#17191D',
        'text-color-secondary': '#3CEAB8'
      },
      javascriptEnabled: true
    },
    webpack(config, options) {
      return config
    }
  })
)
