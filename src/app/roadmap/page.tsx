import { Client } from '@notionhq/client';
import { PartialDatabaseObjectResponse } from '@notionhq/client/build/src/api-endpoints';

import { Footer } from '@/components/footer';
import { getMetadata } from '@/features/core/utils/metadata';

import { RoadmapList } from './list';

export function generateMetadata() {
  return getMetadata({
    title: 'Roadmap de Fernando Ticona @fvcoder',
    description:
      'Descubre la Roadmap de Fernando Ticona, reconocido como @fvcoder. Explora la Roadmap de este talentoso individuo en nuestra página web.',
  });
}

export default async function RoadmapPage() {
  const notion = new Client({
    auth: process.env.NOTION_API_KEY,
    fetch,
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
        <h1 className="text-3xl font-semibold mb-2">Roadmap</h1>
        <p>Aprendizajes, novedades, etc. En fin piensa en el futuro...</p>
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
