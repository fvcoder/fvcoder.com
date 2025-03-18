import { loadEnv } from "vite";

export const env = loadEnv(
  process.env.NODE_ENV ?? "development",
  process.cwd(),
  "",
);
