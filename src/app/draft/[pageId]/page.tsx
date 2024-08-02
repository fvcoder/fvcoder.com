/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Client } from '@notionhq/client';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { Footer } from '@/components/footer';
import { getMetadata } from '@/features/core/utils/metadata';
import { Render } from '@/features/notion/component/render';

import { PropertiesList } from './propertiesList';

export async function generateMetadata(props: any) {
  try {
    const notion = new Client({
      auth: process.env.NOTION_API_KEY,
      fetch,
    });
    const page: any = await notion.pages.retrieve({
      page_id: props.params.pageId,
    });

    const name = page.properties['Nombre'].title
      .map((x: any) => x.plain_text)
      .join('');

    return getMetadata({
      title: name,
    });
  } catch {
    return getMetadata({
      title: 'Ups algo salio mal',
    });
  }
}

export default async function RoadmapPage(props: any) {
  try {
    const notion = new Client({
      auth: process.env.NOTION_API_KEY,
      fetch,
    });
    const page: any = await notion.pages.retrieve({
      page_id: props.params.pageId,
    });

    const lastEditedTime = new Date(
      page.last_edited_time as string,
    ).toLocaleString('es-BO', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    const block = await notion.blocks.children.list({
      block_id: page.id,
    });

    const body = await Promise.all(
      block.results.map(async (x: any) => {
        if (x.type === 'table' && x.has_children) {
          const tableBlock = await notion.blocks.children.list({
            block_id: x.id,
          });

          return {
            ...x,
            tableChildren: tableBlock.results,
          };
        }

        return x;
      }),
    );

    const name = page.properties['Nombre'];

    const properties = page.properties;

    delete properties['Subítem'];
    delete properties['Última edición'];
    delete properties['Fecha de Publicacion'];
    delete properties['Nombre'];
    delete properties['Blog'];
    delete properties['📅 Calendario'];

    const publicProperties = Object.keys(properties as Record<string, any>).map(
      (key) => ({
        name: key,
        value: properties[key],
      }),
    );

    return (
      <div className="max-w-3xl w-full mx-auto px-6">
        <header className="py-4">
          <p></p>
          <small>
            <Link href="/draft" className="hover:underline">
              Roadmap
            </Link>{' '}
            · Actualizado el {lastEditedTime}
          </small>
          <h1 className="text-3xl font-semibold mb-2">
            <Render data={name} />
          </h1>
          <p>Aprendizajes, novedades, etc. En fin piensa en el futuro...</p>
          <div className="py-4">
            <PropertiesList data={publicProperties} />
          </div>
        </header>
        <main className="prose dark:prose-invert py-10 w-full max-w-full">
          {body.map((bl) => (
            <Render key={bl.id} data={bl} />
          ))}
        </main>
        <Footer />
      </div>
    );
  } catch {
    return notFound();
  }
}
