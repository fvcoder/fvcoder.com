import type {
  ActionFunction,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/cloudflare";
import { Form, useActionData, useLoaderData } from "@remix-run/react";

import { getAuth, getAuthProps } from "~/features/auth/lib/auth";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader: LoaderFunction = async (c) => {
  const auth = getAuth(c.context.cloudflare.env as getAuthProps);
  const session = await auth.api.getSession({ headers: c.request.headers });

  return session;
};

export const action: ActionFunction = async (c) => {
  const auth = getAuth(c.context.cloudflare.env as getAuthProps);
  const url = new URL(c.request.url);

  const data = await auth.api.signInMagicLink({
    headers: c.request.headers,
    body: {
      email: "fvcoder1@gmail.com",
      callbackUrl: url.origin,
    },
  });

  return data;
};

export default function Index() {
  const loader = useLoaderData();
  const data = useActionData();

  return (
    <div>
      <div>{JSON.stringify(loader)}</div>
      <div>{JSON.stringify(data)}</div>
      <Form method="post">
        <button>asdasd</button>
      </Form>
    </div>
  );
}
