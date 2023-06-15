module.exports = {
  settings: {
    react: {
      version: "detect"
    },
    "import/resolver": {
      typescript: {
        paths: "./tsconfig.json",
        alwaysTryTypes: true
      }
    }
  },
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
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: ".",
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ["@typescript-eslint", "sonarjs", "prettier"],
  ignorePatterns: ["**/.eslintrc.js"],
  rules: {
    "import/order": "warn",
    "react/prop-types": "off",
    "no-restricted-globals": "off"
  }
};
