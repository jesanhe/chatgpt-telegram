module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  extends: [
    "eslint:recommended", "plugin:@typescript-eslint/recommended", "prettier"
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    "no-underscore-dangle": "off",
    "curly": "warn",
    "no-trailing-spaces": "warn",
    "quote-props": "off",
    "no-empty-function": "off",
    "@typescript-eslint/no-empty-function": "warn",
    // "prefer-arrow/prefer-arrow-functions": "warn",
    "@typescript-eslint/member-ordering": "off",
    "@typescript-eslint/no-empty-interface": "warn",
    "@typescript-eslint/naming-convention": "warn",
    "@typescript-eslint/no-inferrable-types": "off",
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
};


