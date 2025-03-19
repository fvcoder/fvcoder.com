import { Resend } from "resend";

export function getResend(RESEND_API_KEY: string): Resend {
  return new Resend(RESEND_API_KEY);
}
