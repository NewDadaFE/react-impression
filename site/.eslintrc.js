module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "settings": {
        "react": {
            "pragma": "React",
            "version": "15.0"
        }
    },
    "parser": "babel-eslint",
    "extends": ["eslint:recommended", "plugin:react/recommended"],
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "strict": 0,
        "no-var": 2,
        "react/jsx-uses-react": 1,
        "react/jsx-no-undef": 2,
        "react/wrap-multilines": 2,
        "react/prop-types": 0,
        "arrow-parens": [2, "as-needed"],
        "indent": [
            "error",
            4,
            {"VariableDeclarator": 1}
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "warn",
            "single",
            {"avoidEscape": true, "allowTemplateLiterals": true}
        ],
        "semi": [
            "error",
            "always",
            { "omitLastInOneLineBlock": true}
        ],
        "comma-dangle": [
            "error",
            "only-multiline"
        ],
        "no-unused-vars": [
            2,
            {"vars": "local", "args": "none"}
        ],
        "no-undef": [
            "off"
        ],
        "no-mixed-spaces-and-tabs": [
            "off"
        ],
        "no-console": 2,
        "no-alert": 2,
        "no-array-constructor": 2,
        "no-cond-assign": 2,
        "no-const-assign": 2,
        "no-constant-condition": 2,
        "no-delete-var": 2,
        "eqeqeq": 1,
        "use-isnan": 2,
        "space-in-parens": 0,
        "space-before-function-paren": 0,
        "space-before-blocks": 0,
        "padded-blocks": 0,
        "one-var": 1,
        "newline-after-var": 2,
        "curly": [2, "all"],
        "camelcase": 2,
        "block-scoped-var": 0,
        "arrow-spacing": 0,
        "no-with": 2,
        "no-unused-expressions": 0,
        "no-unreachable": 2,
        "no-unneeded-ternary": 2,
        "no-trailing-spaces": 1,
        "no-sparse-arrays": 2,
        "no-spaced-func": 2,
        "no-multi-spaces": 1,
        "no-fallthrough": 1,
        "no-empty": 2,
        "no-else-return": 2,
        "no-duplicate-case": 2,
        "no-dupe-keys": 2,
        "no-dupe-args": 2,
        "no-delete-var": 2
    }
};
