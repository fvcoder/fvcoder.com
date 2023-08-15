import { createClient, getRepositoryEndpoint } from "@prismicio/client"

export const prismic = createClient(getRepositoryEndpoint("thefersh"), {
    accessToken: import.meta.env.PRISMIC_TOKEN
})