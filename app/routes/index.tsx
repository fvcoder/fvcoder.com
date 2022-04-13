import { useLoaderData, LoaderFunction } from "remix";
import { Carrousel } from "~/components/carrousel";
import { BlogLoader, BlogLoaderReturn } from "~/services/prismic/blog";

export const loader: LoaderFunction = async () => {
  try {
    return await BlogLoader();
  } catch {
    throw new Response("Not Found", {
      status: 404,
    });
  }
};

export default function Index() {
  const { data } = useLoaderData<BlogLoaderReturn>();
  return (
    <>
      <header className="container mx-auto">
        <Carrousel data={data} />
      </header>
    </>
  );
}
