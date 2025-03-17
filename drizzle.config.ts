/* eslint-disable @typescript-eslint/no-non-null-assertion */
import "dotenv/config";

import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "turso",
  schema: "./src/lib/db.schema.ts",
  out: "./migrations",
  dbCredentials: {
    url: process.env.ASTRO_DB_APP_TOKEN!,
    authToken: process.env.ASTRO_DB_REMOTE_URL!,
  },
});
