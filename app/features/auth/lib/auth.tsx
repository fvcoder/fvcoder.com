import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { magicLink, openAPI } from "better-auth/plugins";
import { apikeys, courses, lessons } from "src-old/lib/db.schema";

import { getDrizzleDb, getDrizzleDbReturn } from "~/features/core/lib/db";
import {
  accounts,
  sessions,
  users,
  verifications,
} from "~/features/core/lib/db.schema";
import MagicLinkEmail from "~/features/email/components/magicLink";
import { getResend } from "~/features/email/lib/resend";

export interface getAuthProps {
  TURSO_URL: string;
  TURSO_SECRET: string;
  RESEND_API_KEY: string;
  BETTER_AUTH_SECRET: string;
  BETTER_AUTH_URL: string;
  db?: getDrizzleDbReturn;
}

export function getAuth(props: getAuthProps) {
  return betterAuth({
    database: drizzleAdapter(props.db ?? getDrizzleDb(props), {
      provider: "sqlite",
      usePlural: true,
      schema: {
        users,
        sessions,
        accounts,
        verifications,
        apikeys,
        courses,
        lessons,
      },
    }),
    plugins: [
      magicLink({
        sendMagicLink: async (data) => {
          const resend = getResend(props.RESEND_API_KEY);

          await resend.emails.send({
            from: "account@fvcoder.com",
            to: data.email,
            react: (
              <MagicLinkEmail
                link={`https://fvcoder.com/api/auth-magic-link/${data.token}`}
                email={data.email}
              />
            ),
            subject: "Iniciar sesión en fvcoder.com con tu link mágico",
          });

          return;
        },
      }),
      openAPI(),
    ],
  });
}
