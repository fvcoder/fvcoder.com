import { db } from "astro:db";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { captcha } from "better-auth/plugins";
import { phoneNumber } from "better-auth/plugins";
import { username } from "better-auth/plugins";
import { openAPI } from "better-auth/plugins";
import { apiKey } from "better-auth/plugins";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "sqlite",
    usePlural: true,
  }),
  plugins: [
    captcha({
      provider: "cloudflare-turnstile",
      secretKey: "",
    }),
    phoneNumber({
      sendOTP: ({ phoneNumber, code }, request) => {
        // Implement sending OTP code via SMS
      },
    }),
    username(),
    openAPI(),
    apiKey(),
  ],
});
