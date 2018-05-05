const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

exports.resolve = function (dir) {
  return path.join(__dirname, '..', dir)
}

const getLoader = (options) => {
  const {
    type, sourceMap, extract, cssModules
  } = options || {}
  const _type = type === 'scss' ? 'sass' : type
  const cssLoader = {
    loader: 'css-loader',
    options: {
      minimize: process.env.NODE_ENV === 'production',
      sourceMap
    }
  }
  const postCssLoader = Object.assign({}, cssLoader, {
    loader: 'postcss-loader'
  })

  if (cssModules) {
    cssLoader.options = Object.assign({}, cssLoader.options, {
      modules: true,
      importLoaders: 1,
      localIdentName: '[name]__[local]___[hash:base64:5]'
    })
  }

  const loaders = [cssLoader, postCssLoader]
  if (_type && _type !== 'css') {
    loaders.push(Object.assign({}, cssLoader, {
      loader: `${_type}-loader`
    }))
  }

  if (extract) {
    return [MiniCssExtractPlugin.loader].concat(loaders)
  }

  return ['style-loader'].concat(loaders)
}

exports.getStyleLoader = (options) => {
  const { type, include, exclude } = options
  const useLoader = getLoader(options)
  const rule = {
    test: new RegExp(`\\.${type}$`),
    use: useLoader
  }
  if (include) rule.include = include
  if (exclude) rule.exclude = exclude

  return rule
}
