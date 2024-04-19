/** @type {import('eslint').Linter.Config} */
const config = {
  extends: ['eslint-config-codely/typescript'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        ecmaVersion: 'latest',
        project: ['./tsconfig.json'],
      },
    },
  ],
  rules: {
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    'import/no-unresolved': 'off',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        endOfLine: 'auto',
      },
    ],
  },
};

module.exports = config;
