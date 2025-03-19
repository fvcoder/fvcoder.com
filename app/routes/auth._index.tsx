import { LoaderFunction, redirect } from "@remix-run/cloudflare";

export const loader: LoaderFunction = () => {
  return redirect("/auth/signin?next=/");
};
