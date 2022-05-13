# @einride/prettier-config

[![license](https://img.shields.io/npm/l/@einride/prettier-config.svg)](https://github.com/einride/prettier-config/blob/master/LICENSE)
[![npm version](https://img.shields.io/npm/v/@einride/prettier-config.svg)](https://www.npmjs.com/package/@einride/prettier-config)
[![total npm downloads](https://img.shields.io/npm/dt/@einride/prettier-config.svg)](https://www.npmjs.com/package/@einride/prettier-config)

Einride's default Prettier config

## Installation

Install `@einride/prettier-config` as a dev dependency:

```bash
yarn add @einride/prettier-config --dev
```

Make sure Prettier is installed in your project as well.

## Usage

Add `@einride/prettier-config` to your `.prettierrc.js` file:

```js
module.exports = {
  ...require("@einride/prettier-config"),
}
```

Specific settings can be overridden by adding them after
`@einride/prettier-config`:

```js
module.exports = {
  ...require("@einride/prettier-config"),
  semi: true,
}
```

Add a formatting scripts to the `scripts` section of your `package.json`:

```json
{
  "scripts": {
    "format": "prettier --write .",
    "format-check": "prettier --check ."
  }
}
```

Running `yarn format` will format all your files according to the config
specified in `.prettierrc.js`.

Running `yarn format-check` will return exit code 1 when there are formatting
issues, which makes it a good fit for CI.

Add a `.prettierignore` file to ignore files from being formatted:

```ignore
src/gen # ignores files in src/gen directory from being formatted
```

`node_modules` is ignored by default.

## Contribute

See
[Contributing Guide](https://github.com/einride/prettier-config/blob/main/CONTRIBUTING.md).

## License

MIT
