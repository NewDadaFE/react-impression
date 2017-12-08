module.exports = {
  parser: 'babel-eslint',
  extends: ['standard', 'standard-react'],
  rules: {
    'space-before-function-paren': [
      'error',
      { anonymous: 'always', named: 'never', asyncArrow: 'always' }
    ],
    'comma-dangle': ['error', 'always-multiline']
  }
}
