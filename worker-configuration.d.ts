declare namespace Cloudflare {
	interface Env {
		TURSO_URL: string;
		TURSO_SECRET: string;
		RESEND_API_KEY: string;
		BETTER_AUTH_SECRET: string;
		BETTER_AUTH_URL: string;
		TURNSTILE_SITE_ID: string;
		TURNSTILE_SECRET_KEY: string;
	}
}
interface Env extends Cloudflare.Env {}