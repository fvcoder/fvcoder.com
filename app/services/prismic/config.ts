import * as prismic from "@prismicio/client";

const endpoint = prismic.getEndpoint("thefersh");
export const client = prismic.createClient(endpoint, {
  accessToken: process.env.NEXT_PUBLIC_PRISMIC_TOKEN,
});
