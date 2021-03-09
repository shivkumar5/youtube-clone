module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    semi: ['error', 'always'],
    indent: 'error',
    'space-before-function-paren': [
      'error',
      'always'
    ],
    'comma-spacing': [
      'error',
      {
        before: false,
        after: true
      }
    ],
    'keyword-spacing': 'error',
    'padded-blocks': [
      'error',
      {
        blocks: 'never'
      }
    ],
    'space-before-blocks': [
      'error'
    ],
    'react/jsx-max-props-per-line': [
      1,
      {
        maximum: 1,
        when: 'always'
      }
    ]
  }
};
