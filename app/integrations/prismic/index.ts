import * as prismic from "@prismicio/client";

import type { AllDocumentTypes } from "./types";

const endpoint: string = prismic.getRepositoryEndpoint("thefersh");

const client = prismic.createClient<AllDocumentTypes>(endpoint, {
	accessToken: String(process.env.PRISMIC_TOKEN),
});

export { client };
