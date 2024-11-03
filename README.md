# Installation

```bash
npm i --save-dev @vosdux/eslint-config-csp eslint prettier typescript
# or if you're using yarn
yarn add -D @vosdux/eslint-config-csp eslint prettier typescript
```

# Legacy .eslintrc

For use legacy eslint config
https://www.npmjs.com/package/@vosdux/eslint-config-csp/v/2.1.1

# Usage

Example of `eslint.config.mjs`

```js
import config from "@vosdux/eslint-config-csp";

/** @type {import('eslint').Linter.Config[]} */
export default [...config];
```

or use command

```bash
npm init @eslint/config@latest -- --config @vosdux/eslint-config-csp
```

# Usage of prettier config

Example of `.prettierrc.mjs`

```js
import cspConfig from "@vosdux/eslint-config-csp/prettier-config/index.js";

/**
 * @type {import("prettier").Config}
 */
const config = {
  ...cspConfig,
};

export default config;
```

# What plugins we used here

eslint-config-prettier,
eslint-import-resolver-typescript,
eslint-plugin-import,
eslint-plugin-prettier,
eslint-plugin-react,
eslint-plugin-react-hooks,
eslint-plugin-sonarjs,
typescript-eslint
