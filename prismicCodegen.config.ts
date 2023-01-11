import dotenv from "dotenv";
import type { Config } from "prismic-ts-codegen";

dotenv.config({ path: ".env" });

const config: Config = {
	output: "./app/integrations/prismic/types.ts",
	repositoryName: process.env.PRISMIC_REPOSITORY,
	customTypesAPIToken: process.env.PRISMIC_CUSTOM_TYPES_API_TOKEN,
	models: {
		fetchFromRepository: true,
	},
};

export default config;
