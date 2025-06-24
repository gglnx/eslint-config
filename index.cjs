module.exports = {
  extends: 'eslint-config-airbnb-base',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'max-len': ['error', {
      code: 120,
    }],
    'lines-between-class-members': ['error', 'always', {
      exceptAfterSingleLine: true,
    }],
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsForRegex: ['^\\$'],
    }],
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
      },
      {
        selector: 'LabeledStatement',
      },
      {
        selector: 'WithStatement',
      },
    ],
    'class-methods-use-this': ['off'],
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: [
        '**/__tests__/**',
        '**/__mocks__/**',
        '**/*.config.{js,mjs,cjs,ts}',
        '**/*.config.*.{js,mjs,cjs,ts}',
      ],
      optionalDependencies: false,
    }],
  },
  overrides: [
    {
      files: '**/*.{js,cjs,mjs}',
    },
    {
      files: ['**/*.ts'],
      extends: [
        'plugin:@typescript-eslint/recommended',
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
      },
      plugins: [
        '@typescript-eslint',
      ],
      rules: {
        'import/extensions': ['error', 'ignorePackages', {
          js: 'never',
          mjs: 'never',
          cjs: 'never',
          ts: 'never',
        }],
      },
    },
  ],
  ignorePatterns: [
    'node_modules',
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
};
