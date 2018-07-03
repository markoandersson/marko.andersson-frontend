module.exports = {
  root: true,
  env: {
    node: true,
    mocha: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "indent": "off",
    'vue/script-indent': ['error', 2, {
      'baseIndent': 1
    }],
    'semi': ['error', 'always'],
    'space-before-function-paren': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
};
