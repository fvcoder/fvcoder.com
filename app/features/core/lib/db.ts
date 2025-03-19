import { drizzle } from "drizzle-orm/libsql";

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
  });
}

export type getDrizzleDbReturn = ReturnType<typeof getDrizzleDb>;
