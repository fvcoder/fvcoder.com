import { LibsqlDialect } from "@libsql/kysely-libsql";
import { betterAuth } from "better-auth";
import { magicLink } from "better-auth/plugins";

import MagicLinkEmail from "../../emails/magicLink";
import { env } from "./env";
import { resend } from "./resend";

const dialect = new LibsqlDialect({
  url: env.ASTRO_DB_APP_TOKEN || "",
  authToken: env.ASTRO_DB_REMOTE_URL || "",
});

export const auth = betterAuth({
  database: {
    dialect,
    type: "sqlite",
  },
  plugins: [
    magicLink({
      sendMagicLink: async (props) => {
        await resend.emails.send({
          from: "account@fvcoder.com",
          to: props.email,
          react: (
            <MagicLinkEmail
              link={`https://fvcoder.com/api/auth-magic-link/${props.token}`}
              email={props.email}
            />
          ),
          subject: "Iniciar sesión en fvcoder.com con tu link mágico",
        });

        return;
      },
    }),
    /*
    captcha({
      provider: "cloudflare-turnstile",
      secretKey: "",
    }),
    phoneNumber(),
    username(),
    openAPI(),
    apiKey(),
    */
  ],
});
