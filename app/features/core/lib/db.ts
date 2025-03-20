import { drizzle } from "drizzle-orm/libsql";

import * as schema from "./db.schema";

interface getDrizzleDbProps {
  TURSO_URL: string;
  TURSO_SECRET: string;
}

export function getDrizzleDb(
  props: getDrizzleDbProps,
): ReturnType<typeof drizzle> {
  return drizzle({
    connection: {
      url: props.TURSO_URL,
      authToken: props.TURSO_SECRET,
    },
    schema,
  });
}

export type getDrizzleDbReturn = ReturnType<typeof getDrizzleDb>;
