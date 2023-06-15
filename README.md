# Installation

```bash
npm i --save-dev eslint @vosdux/eslint-config-csp eslint prettier typescript
# or if you're using yarn
yarn add -D eslint @vosdux/eslint-config-csp eslint prettier typescript
```

# Usage

In your `eslintrc` file you can extend like this

```js
module.exports = {
  extends: ['@vosdux/csp'],
}
```

# What we used here

```js
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:sonarjs/recommended",
    "plugin:prettier/recommended"
  ],
```