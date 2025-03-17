import eslintConfigCodely from "eslint-config-codely";

export default [
  ...eslintConfigCodely.ts,
  {
    rules: {
      "import/no-unresolved": "off",
      "import/no-duplicates": "off",
      "prettier/prettier": ["error", { endOfLine: "auto" }],
    },
  },
];
