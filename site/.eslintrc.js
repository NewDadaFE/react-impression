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
        ]
    }
};