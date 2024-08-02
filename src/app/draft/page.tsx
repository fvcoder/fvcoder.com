import { Client } from '@notionhq/client';
import { PartialDatabaseObjectResponse } from '@notionhq/client/build/src/api-endpoints';

import { Footer } from '@/components/footer';
import { getMetadata } from '@/features/core/utils/metadata';

import { RoadmapList } from './list';

export function generateMetadata() {
  return getMetadata({
    title: 'Mi borrador | Fernando Ticona | @fvcoder',
    description: 'Descubre la mi borrador o basurero mental, tu decide.',
  });
}

export default async function RoadmapPage() {
  const notion = new Client({
    auth: process.env.NOTION_API_KEY,
  });

  const data = await notion.databases.query({
    database_id: process.env.NOTION_PAGE_ID as string,
    page_size: 12,
    sorts: [
      {
        property: 'Última edición',
        direction: 'descending',
      },
    ],
  });

  return (
    <div className="max-w-3xl w-full mx-auto px-6">
      <header className="py-4">
        <h1 className="text-3xl font-semibold mb-2">
          Mi borrador por Fernando Ticona
        </h1>
        <p>
          Aprendizajes, novedades, etc. Descubre la mi borrador o basurero
          mental, tu decide....
        </p>
      </header>
      <main>
        <RoadmapList
          results={data.results as PartialDatabaseObjectResponse[]}
        />
      </main>
      <Footer />
    </div>
  );
}
