module.exports = {
  extends: ['eslint-config-airbnb', 'prettier'],
  plugins: ['prettier'],
  env: {
    browser: true,
    node: true,
    jasmine: true,
    jest: true,
    es6: true
  },
  parser: 'babel-eslint',
  settings: {
    'import/resolver': {
      webpack: {
        config: 'build/webpack.config.base.js'
      }
    }
  },
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true
    }
  },
  rules: {
    semi: ['error', 'never'],
    'prettier/prettier': [
      'error',
      { semi: false, singleQuote: true, trailingComma: 'all' }
    ],
    'arrow-body-style': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'no-unused-vars': ['warn'],
    'react/no-danger': 0,
    'comma-dangle': ['error', 'never'],
    'import/no-extraneous-dependencies': ['error', 'never'],
    'no-underscore-dangle': 0,
    'react/require-default-props': 0,
    'react/forbid-prop-types': 0,
    'import/prefer-default-export': 0,
    'import/no-unresolved': 0
  }
}
