module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['plugin:@typescript-eslint/recommended', 'prettier', 'prettier/@typescript-eslint'],
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  env: {
    node: true,
    mocha: true,
    es6: true,
  },
  // see https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin
  // for list of rules
  rules: {
    '@typescript-eslint/member-delimiter-style': {
      multiline: {
        delimiter: 'comma',
        requireLast: true,
      },
      singleline: {
        delimiter: 'comma',
        requireLast: true,
      },
      overrides: {
        interface: {
          multiline: {
            delimiter: 'none',
            requireLast: false,
          },
        },
      },
    },
    '@typescript-eslint/indent': ['warn', 2],
    '@typescript-eslint/interface-name-prefix': 'error',
    '@typescript-eslint/await-thenable': 'error',
    '@typescript-eslint/member-naming': 'error',
    '@typescript-eslint/no-extra-parens': 'error',
    '@typescript-eslint/no-for-in-array': 'error',
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-includes': 'error',
    '@typescript-eslint/prefer-string-starts-ends-with': 'error',
    '@typescript-eslint/promise-function-async': 'error',
    '@typescript-eslint/restrict-plus-operands': 'error',
    '@typescript-eslint/unified-signatures': 'error',

    semi: [
      'error',
      'never',
      {
        beforeStatementContinuationChars: 'always',
      },
    ],
    'member-ordering': 'always',
    'no-trailing-spaces': 'error',
    'no-irregular-whitespace': 'error',
    quotes: ['error', 'backtick'],
    'prefer-arrow-callback': 'error',
    'no-confusing-arrow': 'error',
    'arrow-spacing': 'error',
    'arrow-parens': [
      'warn',
      'always',
      {
        requireForBlockBody: true,
      },
    ],
    'arrow-body-style': 'error',
    'no-console': 'off',
    'max-len': [
      1,
      {
        code: 132,
        ignoreStrings: true,
      },
    ],
    'no-unexpected-multiline': 2,
    'no-new-object': 'error',
    'object-shorthand': 'error',
    'quote-props': ['error', 'as-needed'],
    'no-prototype-builtins': 'error',
    'no-array-constructor': 'error',
    'array-callback-return': 'error',
    'prefer-destructuring' :'off',
    'prefer-template': 'error',
    'template-curly-spacing': ['error', 'never'],
    'no-eval': 'error',
    'no-var': 'error',
    'prefer-const': 'error',
    'no-const-assign': 'error',
    'func-style': 'error',
    'wrap-iife': 'error',
    'no-loop-func': 'error',
    'prefer-rest-params': 'error',
    'spaced-comment': 'error',
    'space-before-blocks': 'error',
    'keyword-spacing': 'error',
    'space-infix-ops': 'error',
    'newline-per-chained-call': 'error',
    'no-whitespace-before-property': 'error',
    'padded-blocks': [
      'warn',
      'never',
      {
        classes: 'always',
      },
    ],
    'space-in-parens': 'error',
    'array-bracket-spacing': 'error',
    'block-spacing': ['error', 'never'],
    'comma-spacing': 'error',
    'func-call-spacing': 'error',
    'object-curly-spacing': 'error',
    'no-multiple-empty-lines': 'error',
    'comma-style': 'error',

    'no-new-wrappers': 'error',
    radix: 'error',
    'id-length': [
      'warn',
      {
        min: 1,
        max: 28,
      },
    ],
    camelcase: 'error',
    'new-cap': 'error',
    'no-restricted-globals': 'error',
    'eol-last': 'off',
  },
}
