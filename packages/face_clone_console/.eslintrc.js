module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["prettier", "@typescript-eslint"],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  rules: {
    "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "prettier/prettier": ["error", { semi: false }],
    semi: ["error", "never"],
  },
};
