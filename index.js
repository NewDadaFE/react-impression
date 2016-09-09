module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es6: true
    },
    parser: 'babel-eslint',
    plugins: [
        'react'
    ],
    extends: [
        'eslint-config-airbnb'
    ].map(require.resolve),
    rules: {
        "indent": [
            2,
            4,
            {"VariableDeclarator": 1}
        ],
        "import/prefer-default-export": 0,
        "keyword-spacing": 2,
        "no-unused-expressions": 0,
        "react/no-string-refs": 0,
        "react/jsx-filename-extension": [2, { extensions: ['.js'] }],
        "react/jsx-closing-bracket-location": 0,
        "react/sort-comp": 0,
        "react/no-find-dom-node": 0,
        "jsx-a11y/img-has-alt": 0,
        "jsx-a11y/label-has-for": 0,
        "arrow-body-style": 0,
        "space-before-function-paren": 0,
        "keyword-spacing": 0,
        "no-mixed-operators": 0,
        "no-underscore-dangle": 0,
        "one-var": [
            1,
            "always"
        ],
        "no-shadow": 0,
        "no-param-reassign": 0,
        "prefer-const": 0,
        "no-prototype-builtins": 0,
        "no-script-url": 0,
        "global-require": 0,
        "max-len": [2, {"code" : 120}]
    }
};
