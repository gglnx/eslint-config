import { defineConfig, globalIgnores } from 'eslint/config';
import config from './index.mjs';

export default defineConfig([
  globalIgnores([
    '**/node_modules/**',
  ]),
  ...config,
]);
