module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: [
    "react",
    "eslint-plugin-my-custom-rules",
  ],
  rules: {
    semi: ["error", "never"],
    quotes: ["error", "double"],
    "react/jsx-filename-extension": 0,
    "react/prefer-stateless-function": 0,

    // custom rule
    "my-custom-rules/componentNaming": ["error", {"minNoOfWords": 2}]
  },
};
