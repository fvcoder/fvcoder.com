/** @type {import('eslint').Linter.Config} */
const config = {
	extends: ["eslint-config-codely/typescript"],
	overrides: [
		{
			files: ["*.ts", "*.tsx"],
			parserOptions: {
				ecmaVersion: "latest",
				project: ["./tsconfig.json"],
			},
		},
	],
	rules: {
		"import/no-unresolved": "off",
	},
};

module.exports = config;
