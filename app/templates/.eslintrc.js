module.exports = {
  extends: ['impression', 'prettier'],
  settings: {
    'import/resolver': {
      webpack: {
        config: 'webpack.dev.config.js',
      },
    },
  },
  globals: {
    __DEV__: false,
    AMap: false,
  },
  rules: {
    indent: [
      'error',
      2,
      { SwitchCase: 1, VariableDeclarator: 1, outerIIFEBody: 1 },
    ],
    'react/jsx-indent': ['error', 2],
    'react/jsx-indent-props': ['error', 2],
    'newline-after-var': 'off',
    'import/imports-first': 'off',
  },
};
