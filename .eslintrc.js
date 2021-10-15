module.exports = {
    "env": {
        "es6": true,
        "jest": true
    },
    "extends": [
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "airbnb"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
      },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 13,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "react-hooks",
        "@typescript-eslint"
    ],
    "rules": {
        "prettier/prettier": "error",
        "react/jsx-one-expression-per-line": "off",
        "@typescript-eslint/camelcase": "off",
        "import/no-duplicates": "off",
        "react/jsx-props-no-spreading": "off",
        "react/prop-types": "off",
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "no-unused-expressions": "off",
        "react/jsx-filename-extension": [1, { "extensions": [".tsx"] }],
        "import/prefer-default-export": "off",
        "@typescript-eslint/explicit-function-return-type": [
          "error",
          {
            "allowExpressions": true
          }
        ],
        "import/extensions": [
          "error",
          "ignorePackages",
          {
            "ts": "never",
            "tsx": "never"
          }
        ]
      },
      "settings": {
        "import/resolver": {
          "typescript": {}
        }
      }
};
