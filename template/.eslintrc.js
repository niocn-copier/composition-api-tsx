module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/first-attribute-linebreak': 0,
    'vue/no-reserved-props': 0,
    'vue/multi-word-component-names': 0,
    'vue/no-deprecated-slot-attribute': 0,
    'max-lines': ['error', 500],
    'quotes': 0,
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'import/order': 0,
    'semi': 0,
    'eol-last': 0,
    '@typescript-eslint/no-var-requires': 0,
  }
};
