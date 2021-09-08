# @einride/prettier-config

[![license](https://img.shields.io/npm/l/@einride/prettier-config.svg)](https://github.com/einride/prettier-config/blob/master/LICENSE) [![npm version](https://img.shields.io/npm/v/@einride/prettier-config.svg)](https://www.npmjs.com/package/@einride/prettier-config) [![total npm downloads](https://img.shields.io/npm/dt/@einride/prettier-config.svg)](https://www.npmjs.com/package/@einride/prettier-config)

Einride's default Prettier config.

## Installation

Install this Prettier config together with its peer dependencies:

```bash
# npm
npm install @einride/prettier-config prettier --save-dev

# yarn
yarn add @einride/prettier-config prettier --dev
```

## Usage

Add the config to your `.prettierrc.js` file:

```js
module.exports = {
  ...require("@einride/prettier-config"),
}
```

Specific settings can be overridden by adding them after `@einride/prettier-config`:

```diff
module.exports = {
  ...require("@einride/prettier-config"),
+ semi: true,
}
```

## License

MIT
