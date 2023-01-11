/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";

import { client } from "~/integrations/prismic";
import { res404 } from "~/util/http.status";

interface prismicWebhook {
	type: string;
	masterRef: string;
	documents: string[];
	domain: string;
	apiUrl: string;
	secret: string;
}

export const blogWebhookLoader: LoaderFunction = () => {
	res404();
};

export const blogWebhookAction: ActionFunction = async ({ request }) => {
	const url = new URL(request.url);
	const d: prismicWebhook = (await request.json()) as prismicWebhook;
	if (!d.secret || d.secret !== process.env.PRISMIC_WEBHOOK_SECRET) {
		return json({});
	}

	const doc = await client.getByID(d.documents[0]);
	if (!doc) {
		return json({});
	}
	if (doc.type !== "blog") {
		return json({});
	}

	await fetch(
		`https://maker.ifttt.com/trigger/${process.env.IFTTT_WEBHOOK_EVENT}/with/key/${process.env.IFTTT_WEBHOOK_KEY}?value1=${url.origin}/blog/${doc.uid}`
	);

	return json({});
};
