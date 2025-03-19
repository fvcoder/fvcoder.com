import { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/cloudflare";

import { getAuth, getAuthProps } from "~/features/auth/lib/auth";

export async function loader({
  request,
  context,
}: LoaderFunctionArgs): Promise<Response> {
  const auth = getAuth(context.cloudflare.env as getAuthProps);

  return auth.handler(request);
}

export async function action({
  request,
  context,
}: ActionFunctionArgs): Promise<Response> {
  const auth = getAuth(context.cloudflare.env as getAuthProps);

  return auth.handler(request);
}
