module.exports = {
  extends: ['eslint-config-airbnb'],
  env: {
    browser: true,
    node: true,
    jasmine: true,
    jest: true,
    es6: true
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true
    }
  },
  rules: {
    semi: ['error', 'never'],
    'arrow-body-style': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.md'] }],
    'no-unused-vars': ['warn'],
    'react/no-danger': 0,
    'comma-dangle': ['error', 'never'],
    'import/no-extraneous-dependencies': ['error', 'never']
  }
}
