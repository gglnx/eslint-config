import js from '@eslint/js';
import stylisticPlugin from '@stylistic/eslint-plugin';
import importPlugin, { createNodeResolver } from 'eslint-plugin-import-x';
import { configs as tsConfigs, parser as tsParser, plugin as tsPlugin } from 'typescript-eslint';
import unicornPlugin from 'eslint-plugin-unicorn';
import globals from 'globals';
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript';

const jsExtensions = ['js', 'jsx', 'mjs', 'cjs'];
const tsExtensions = ['ts', 'tsx', 'mts', 'cts'];
const extensions = [...jsExtensions, ...tsExtensions];

export default [
  {
    name: '@gglnx/eslint-config:base',
    languageOptions: {
      globals: {
        ...globals.es2022,
        ...globals.browser,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: 'error',
      reportUnusedInlineConfigs: 'error',
    },
    plugins: {
      '@stylistic': stylisticPlugin,
      'unicorn': unicornPlugin,
      '@typescript-eslint': tsPlugin,
      'import-x': importPlugin,
    },
    files: [
      `**/*.{${extensions.join(',')}}`,
    ],
    settings: {
      'import-x/extensions': extensions,
      'import-x/parsers': {
        'espree': jsExtensions,
        '@typescript-eslint/parser': tsExtensions,
      },
      'import-x/resolver-next': [
        createNodeResolver(),
        createTypeScriptImportResolver(),
      ],
    },
    rules: {
      ...js.configs.recommended.rules,
      ...unicornPlugin.configs.recommended.rules,
      ...stylisticPlugin.configs.recommended.rules,
      ...importPlugin.configs.recommended.rules,

      'no-cond-assign': ['error', 'always'],
      'class-methods-use-this': ['off'],
      'max-classes-per-file': ['error', 1],
      'no-underscore-dangle': ['error'],
      'no-param-reassign': ['error', {
        props: true,
        ignorePropertyModificationsForRegex: [String.raw`^\$`],
      }],

      '@stylistic/arrow-parens': ['error', 'always'],
      '@stylistic/object-curly-spacing': ['error', 'always'],
      '@stylistic/function-paren-newline': ['error', 'multiline-arguments'],
      '@stylistic/brace-style': ['error', '1tbs', {
        allowSingleLine: false,
      }],
      '@stylistic/semi': ['error', 'always'],
      '@stylistic/max-len': ['error', {
        code: 120,
      }],
      '@stylistic/lines-between-class-members': ['error', 'always', {
        exceptAfterSingleLine: true,
      }],

      'unicorn/prefer-early-return': ['off'],
      'unicorn/no-null': ['off'],
      'unicorn/no-top-level-assignment-in-function': ['off'],
      'unicorn/name-replacements': ['off'],
      'unicorn/no-negated-condition': ['off'],
      'unicorn/prefer-query-selector': ['off'],
      'unicorn/no-non-function-verb-prefix': ['off'],
      'unicorn/filename-case': ['off'],
      'unicorn/prefer-global-this': ['off'],
      'unicorn/consistent-boolean-name': ['off'],
      'unicorn/import-style': ['error', {
        styles: {
          util: {
            named: true,
          },
          path: {
            named: true,
          },
        },
      }],
    },
  },
  {
    name: '@gglnx/eslint-config:ts',
    files: [`**/*.{${tsExtensions.join(',')}}`],
    plugins: {
      '@typescript-eslint': tsPlugin,
      '@stylistic': stylisticPlugin,
    },
    languageOptions: {
      sourceType: 'module',
      parser: tsParser,
      parserOptions: {
        projectService: true,
        warnOnUnsupportedTypeScriptVersion: false,
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      ...tsConfigs?.recommended?.rules,
      '@stylistic/member-delimiter-style': ['error', {
        multiline: {
          delimiter: 'semi',
          requireLast: true,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
        multilineDetection: 'brackets',
      }],
      'no-unused-vars': ['off'],
    },
  },
  {
    name: '@gglnx/eslint-config:config',
    files: [`*.config.{${extensions.join(',')}}`],
    languageOptions: {
      globals: {
        ...globals.es2022,
        ...globals.node,
      },
    },
  },
];
