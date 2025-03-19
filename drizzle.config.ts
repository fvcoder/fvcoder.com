/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";

config({
  path: ".dev.vars",
});

export default defineConfig({
  dialect: "turso",
  schema: "./app/features/core/lib/db.schema.ts",
  out: "./migrations",
  dbCredentials: {
    url: process.env.TURSO_URL!,
    authToken: process.env.TURSO_SECRET!,
  },
});
