# @gglnx/eslint-config

This is my personal, opinionated ESLint configuration for JavaScript and TypeScript.

## Installation

Install the configuration:

```bash
npm install --save-dev @gglnx/eslint-config@beta
```

ESLint and all plugins will be automatically installed as this config defines them as peer dependencies.

## Usage

Create an `eslint.config.mjs` file in your project root:

```js
import { defineConfig, globalIgnores } from 'eslint/config';
import eslintConfig from '@gglnx/eslint-config';

export default defineConfig([
  globalIgnores([
    '**/node_modules/**',
  ]),
  ...eslintConfig,
]);
```

## Rules

tbd.

## Contributing

As this my personal configuration pull requests are for bug-fixes only open. If you like would to add, change or remove rules please open an issue first to discuss your submission.

## License

Distributed under the [MIT License](https://opensource.org/license/mit). See `LICENSE` for more information.
