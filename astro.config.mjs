// @ts-check
import "dotenv/config";

import cloudflare from "@astrojs/cloudflare";
import db from "@astrojs/db";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://fvcoder.com",
  integrations: [mdx(), sitemap(), tailwind(), react(), icon(), db()],
  adapter: cloudflare(),
});
