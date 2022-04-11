import { Link, useLoaderData, LoaderFunction } from "remix";
import { CardPost } from "~/components/card/post";
import { CardProject } from "~/components/card/project";
import { Footer } from "~/components/footer";
import { Navbar } from "~/components/navbar";
import { Pagination } from "~/components/pagination";
import { IndexLoader, IndexLoaderI } from "~/services/prismic";

export const loader: LoaderFunction = async () => {
  try {
    return await IndexLoader();
  } catch {
    throw new Response("Not Found", {
      status: 404,
    });
  }
};

export default function Index() {
  const data = useLoaderData<IndexLoaderI>();
  return <>hola </>;
}
