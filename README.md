# @gglnx/eslint-config

This is my personal ESLint shared configuration. It's based on the [`eslint-config-airbnb-base`](https://www.npmjs.com/package/eslint-config-airbnb-base) and [`@typescript-eslint/recommended`](https://typescript-eslint.io/users/configs) rules.

## Installation

Install the configuration and all peer dependencies:

```bash
npm install --save-dev @gglnx/eslint-config
```

## Usage

Create an `.eslintrc` file in your project root:

```json
{
  "root": true,
  "extends": [
    "@gglnx/eslint-config"
  ]
}
```

## Deviations

* `max-len`: Allowing up to 120 chars in a line
* `lines-between-class-members`: Don't require an empty line between single line class members
* `no-param-reassign`: Allowing parameters starting with `$` to be reassigned (use this only referenced parameters like DOM elements)
* `import/extensions`: Don't require file extensions for importing of JavaScript files
* `import/no-extraneous-dependencies`: Don't report `devDependencies` in config files (`*.config.js`)
* `no-restricted-syntax`: Allows the usages of `for of` loops
* `class-methods-use-this`: Remove requirement for using a `this` in class methods

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

Distributed under the [MIT License](https://opensource.org/license/mit). See `LICENSE` for more information.
