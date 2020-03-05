const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')
const withImages = require('next-images')
const path = require('path')

const withSourceMaps = require('@zeit/next-source-maps')();

module.exports = withCSS(withSass(withImages(withSourceMaps({
  env: {
    APP_STAGE: process.env.APP_STAGE,
  },
  webpack: (config, { isServer, buildId }) => {
    config.resolve.alias['@components'] = path.join(__dirname, 'src/components')
    config.resolve.alias['@containers'] = path.join(__dirname, 'src/containers')
    config.resolve.alias['@resources'] = path.join(__dirname, 'src/resources')
    config.resolve.alias['@images'] = path.join(__dirname, 'src/resources/images')
    config.resolve.alias['@strings'] = path.join(__dirname, 'src/resources/strings')
    config.resolve.alias['@styles'] = path.join(__dirname, 'src/resources/styles')
    config.resolve.alias['@data-access'] = path.join(__dirname, 'src/data-access')
    config.resolve.alias['@utils'] = path.join(__dirname, 'src/utils')
    config.resolve.alias['@redux-store'] = path.join(__dirname, 'src/redux-store')
    config.resolve.alias['@actions'] = path.join(__dirname, 'src/redux-store/actions')
    return config
  },
  exportPathMap: async function (defaultPathMap) {
    return {
      '/': { page: '/trang-chu' },
      // '/gioi-thieu': { page: '/intro' },
      '/tin-tuc/': { page: '/tin-tuc' },
      // '/tin-tuc/:alias': { page: '/news/[alias]' },
      // '/tin-tuc/:alias': { page: '/news', query: { alias: ':alias' } }//{ page: '/news', query: { id: 'alias' } },
      // '/tin-tuc/[alias]': { page: '/news/[alias]', query: { id: 'bar' } },
    }
  },
  transpileModules: [
    "node_modules"
  ]
}))));
