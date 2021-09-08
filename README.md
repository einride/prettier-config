# @einride/prettier-config

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

```js
module.exports = {
  ...require("@einride/prettier-config"),
  semi: true,
}
```

## License

MIT
