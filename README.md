# @einride/prettier-config

[![license](https://img.shields.io/npm/l/@einride/prettier-config.svg)](https://github.com/einride/prettier-config/blob/master/LICENSE)
[![npm version](https://img.shields.io/npm/v/@einride/prettier-config.svg)](https://www.npmjs.com/package/@einride/prettier-config)
[![total npm downloads](https://img.shields.io/npm/dt/@einride/prettier-config.svg)](https://www.npmjs.com/package/@einride/prettier-config)

Einride's default Prettier config.

## Installation

Install `@einride/prettier-config` with NPM or Yarn:

```bash
# npm
npm install @einride/prettier-config --save-dev

# yarn
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

Add a `prettier` script to the `scripts` section of your `package.json`:

```json
{
  "scripts": {
    "prettier": "prettier --write ."
  }
}
```

Running `npm run prettier` or `yarn prettier` will format all your files
according to the config specified in `.prettierrc.js`.

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
