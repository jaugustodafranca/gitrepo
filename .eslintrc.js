const prettierConfiguration = require('./.prettierrc');

module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true,
    },
  },
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  settings: {
    'import/resolver': {
      'babel-module': {
        extensions: ['.js', '.jsx', '.tsx'],
      },
    },
  },
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['react-native', 'prettier', 'react-hooks'],
  rules: {
    'arrow-parens': ['error', 'as-needed'],
    'class-methods-use-this': 'error',
    'no-console': [
      'error',
      {
        allow: ['warn', 'info', 'error'],
      },
    ],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxEOF: 1,
        maxBOF: 0,
      },
    ],
    semi: ['error', 'never'],
    'import/named': 'error',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
      },
    ],
    'import/prefer-default-export': 'off',
    'prettier/prettier': ['error', prettierConfiguration],
    'react/destructuring-assignment': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-no-bind': [
      1,
      {
        ignoreRefs: false,
        allowArrowFunctions: false,
        allowBind: true,
      },
    ],
    'react/prefer-stateless-function': [
      2,
      {
        ignorePureComponents: false,
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};
