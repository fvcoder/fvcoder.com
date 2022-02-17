import { LoaderFunction, redirect } from "remix";

export const loader: LoaderFunction = (r) => {
  return redirect(`/blog/${r.params.slug}`);
};
