import { useLoaderData, LoaderFunction } from "remix";
import { Carrousel } from "~/components/carrousel";
import { IndexLoader, IndexLoaderI } from "~/services/prismic";

interface HomeHeaderProps {
  data: IndexLoaderI;
}

function HomeHeader({ data }: HomeHeaderProps): JSX.Element {
  return (
    <header className="container mx-auto">
      <Carrousel data={data.articles} />
    </header>
  );
}

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
  return (
    <>
      <HomeHeader data={data} />
    </>
  );
}
