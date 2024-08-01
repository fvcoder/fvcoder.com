/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@nextui-org/react';

import { Render } from '@/features/notion/component/render';

const columns = [
  {
    key: 'name',
    label: 'Nombre',
  },
  {
    key: 'value',
    label: 'Valor',
  },
];

function renderCell(item: any, key: string | number) {
  if (key === 'name') {
    return <strong className="capitalize">{item.name}</strong>;
  }
  if (key === 'value') {
    return <Render data={item.value} />;
  }

  return null;
}

export function PropertiesList(props: any) {
  return (
    <Table
      aria-label="Lista de propiedades"
      radius="none"
      shadow="none"
      hideHeader
      fullWidth
      removeWrapper
    >
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={props.data}>
        {(item: any) => (
          <TableRow key={item.name}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
