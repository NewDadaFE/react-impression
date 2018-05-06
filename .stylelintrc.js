module.exports = {
  plugins: [
    'stylelint-scss'
  ],
  rules: {
    'selector-max-empty-lines': 0,
    'color-hex-case': 'lower',
    'number-leading-zero': 'never',
    'string-quotes': 'single',
    'number-no-trailing-zeros': true,
    'value-list-comma-space-after': 'always-single-line',
    'value-list-max-empty-lines': 0,
    'declaration-colon-newline-after': 'always-multi-line',
    'declaration-bang-space-after': 'never',
    'declaration-block-semicolon-newline-after': 'always',
    'block-closing-brace-empty-line-before': 'never'
  }
}
