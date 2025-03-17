// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import react from '@astrojs/react';

import icon from 'astro-icon';

import tailwind from '@astrojs/tailwind';

import cloudflare from '@astrojs/cloudflare';

import db from '@astrojs/db';

// https://astro.build/config
export default defineConfig({
  site: 'https://fvcoder.com',
  integrations: [mdx(), sitemap(), tailwind(), react(), icon(), db()],
  adapter: cloudflare(),
});