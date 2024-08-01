/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { Listbox, ListboxItem } from '@nextui-org/react';
import { PartialDatabaseObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import { useRouter } from 'next/navigation';
import React from 'react';

import { Render, RenderData } from '@/features/notion/component/render';

function getPlainText(props: RenderData) {
  let textPlain = [];
  if (props.data.type === 'title') {
    textPlain = props.data.title.map((x: any) => x.plain_text as string);
  }

  return textPlain.join(' ') as string;
}

interface RoadmapListProps {
  results: PartialDatabaseObjectResponse[];
}

export function RoadmapList(data: RoadmapListProps) {
  const router = useRouter();

  function onAction(key: number | string) {
    router.push(`/roadmap/${key}`);
  }

  return (
    <Listbox items={data.results} aria-label="Roadmap list" onAction={onAction}>
      {(data) => (
        <ListboxItem
          key={data.id}
          textValue={getPlainText({ data: data.properties.Nombre })}
          endContent={<Render data={data.properties['Estado']} />}
        >
          <h3>
            <Render data={data.properties.Nombre} />
          </h3>
        </ListboxItem>
      )}
    </Listbox>
  );
}
