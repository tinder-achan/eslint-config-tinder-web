module.exports = {
  extends: [
    'airbnb'
  ],
  env: {
    browser: true,
    jest: true,
    node: true,
    es6: true,
    serviceworker: true
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true
    }
  },
  rules: {
    'arrow-parens': ['error', 'as-needed', { requireForBlockBody: false }],
    'class-methods-use-this': 'off',
    'comma-dangle': ['error', 'never'],
    'function-paren-newline': 'off',
    'global-require': 'off',
    'max-len': ['error', 120, 2, {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true
    }],
    // we are going to use strip-loader for removing console.logs from bundle
    'no-console': 'off',
    'no-restricted-globals': 'off',
    'no-underscore-dangle': 'off',
    'no-use-before-define': 'off',
    'object-curly-newline': ['error', { consistent: true }],
    'one-var-declaration-per-line': ['error', 'initializations'],
    'one-var': ['error', {
      uninitialized: 'always',
      initialized: 'never'
    }],
    'prefer-template': 'warn',
    semi: ['error', 'always'],
    strict: 'off',

    'import/no-extraneous-dependencies': ['off', { devDependencies: false }],

    'jsx-a11y/accessible-emoji': 'warn',
    'jsx-a11y/alt-text': 'warn',
    'jsx-a11y/click-events-have-key-events': 'warn',
    'jsx-a11y/mouse-events-have-key-events': 'warn',
    'jsx-a11y/no-autofocus': 'warn',
    'jsx-a11y/no-noninteractive-element-interactions': 'warn',
    'jsx-a11y/no-noninteractive-tabindex': 'consistentwarn',
    // should be addressed if accessibility is found crucial in this
    'jsx-a11y/label-has-for': 'warn',
    // TODO This need to be fixed in components!!!
    'jsx-a11y/no-static-element-interactions': 'warn',

    'react/default-props-match-prop-types': 'warn',
    'react/no-array-index-key': 'warn',
    'react/prefer-stateless-function': ['error', { ignorePureComponents: true }],
    'react/require-default-props': 'warn',
    // https://github.com/yannickcr/eslint-plugin-react/issues/1389
    'react/no-typos': 'off',
    'react/no-unused-state': 'off',
    'react/sort-comp': [1, {
      order: [
        'type-annotations',
        'static-methods',
        'lifecycle',
        'everything-else',
        'render'
      ]
    }]
  },
  plugins: [
    'react',
    'import'
  ],
  globals: {
    __DEVELOPMENT__: true,
    __TEST__: true,
    __CLIENT__: true,
    __SERVER__: true
  }
};
