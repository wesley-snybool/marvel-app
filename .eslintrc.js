module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@next/next/recommended',
    'airbnb',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    indent: ['error', 2],
    quotes: ['error', 'single'],
    'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }],
    'react/jsx-no-useless-fragment': [2, { allowExpressions: true }],
    'no-use-before-define': ['error', { variables: false }],
    'linebreak-style': 0,
    'object-curly-newline': ['error', { ImportDeclaration: 'never' }],
    'react/react-in-jsx-scope': 0,
    'react/jsx-uses-react': 0,
    'react/function-component-definition': [2, { namedComponents: 'arrow-function', unnamedComponents: 'arrow-function' }],
    'react/prop-types': 0,
    'react/button-has-type': 0,
    'react/jsx-props-no-spreading': 0,
  },
};
