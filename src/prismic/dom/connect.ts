import type { Client } from '@prismicio/client';
import { createClient, getRepositoryEndpoint } from '@prismicio/client';

import type { AllDocumentTypes } from '../types/schema';

export const prismic: Client<AllDocumentTypes> = createClient(
  getRepositoryEndpoint(process.env.PRISMIC_REPO as string),
  {
    accessToken: process.env.PRISMIC_TOKEN,
  },
);
