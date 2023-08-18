module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
    jsxPragma: null,
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['react-hooks', 'react', '@typescript-eslint', 'prefer-arrow'],
  rules: {
    'no-undef': 2,
    'react/jsx-no-useless-fragment': 0,
    'default-param-last': 0,
    'eol-last': 2,
    'padding-line-between-statements': [2, { blankLine: 'always', prev: 'block-like', next: '*' }],
    'prefer-arrow-callback': 2,
    'prefer-arrow/prefer-arrow-functions': [
      2,
      {
        disallowPrototype: true,
        singleReturnOnly: false,
        classPropertiesAllowed: false,
      },
    ],
    'react/function-component-definition': 0,
    'func-style': ['error', 'expression', { allowArrowFunctions: true }],
    'comma-dangle': [2, 'always-multiline'],
    'no-empty': 0,
    'no-useless-catch': 0,
    'no-return-await': 0,
    'no-unused-vars': 0,
    'import/prefer-default-export': 0,
    'no-shadow': 0,
    '@typescript-eslint/no-shadow': 2,
    'jsx-a11y/anchor-is-valid': 0,
    'arrow-body-style': 0,
    'function-paren-newline': [1, 'multiline-arguments'],
    'implicit-arrow-linebreak': 0,
    'operator-linebreak': [
      2,
      'before',
      {
        overrides: {
          ':': 'before',
          '?': 'before',
          '+': 'after',
          '=': 'after',
          '||': 'ignore',
          '&&': 'ignore',
        },
      },
    ],
    camelcase: 0,
    'max-len': [2, 120, 2],
    'linebreak-style': 0,
    'arrow-parens': [2, 'always'],
    'consistent-return': 0,
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'no-use-before-define': 'off', // for React,will turned on ,after fixing issue
    'no-bitwise': 0,
    'no-restricted-syntax': 0,
    'no-case-declarations': 0,
    'no-mixed-operators': 0,
    'no-prototype-builtins': 0,
    'no-restricted-properties': 0,
    'no-return-assign': 0,
    'no-nested-ternary': 0,
    'no-unused-expressions': 0,
    'object-curly-newline': 0,
    curly: [2, 'all'],
    'brace-style': [2, '1tbs'],
    // babel plugin
    'babel/no-unused-expressions': 0,
    // react plugin
    'react/jsx-indent': [2, 2],
    'react/prop-types': 0,
    'react/require-default-props': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx'] }],
    'react/button-has-type': 0,
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    'react-hooks/rules-of-hooks': 0,
    'react-hooks/exhaustive-deps': 2,
    // jsx-a11y
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/label-has-associated-control': 0,
    // typescript-eslint
    '@typescript-eslint/interface-name-prefix': 0,
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/no-unused-vars': [2, { ignoreRestSiblings: true }],
    '@typescript-eslint/member-delimiter-style': 2,
    'import/order': [
      2,
      {
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
      },
    ],
    'react/react-in-jsx-scope': 0,
  },
}
