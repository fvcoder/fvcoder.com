import { createClient, getRepositoryEndpoint } from "@prismicio/client"
import type { AllDocumentTypes } from "../types/schema"
import type { Client } from "@prismicio/client"

export const prismic: Client<AllDocumentTypes> = createClient(getRepositoryEndpoint(import.meta.env.PRISMIC_REPO), {
    accessToken: import.meta.env.PRISMIC_TOKEN
})