'use client';
import { Icon } from '@iconify-icon/react/dist/iconify.mjs';
import {
  Chip,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
} from '@nextui-org/react';
import Link from 'next/link';
import { useCallback } from 'react';

interface ProjectItem {
  id: string;
  name: string;
  handle: string;
  status: string;
  actions: string;
}

const columns = [
  {
    key: 'name',
    label: 'Nombre',
  },
  {
    key: 'status',
    label: 'Estado',
  },
  {
    key: 'actions',
    label: 'Acciones',
  },
];

const projects: ProjectItem[] = [
  {
    id: 'project_uid_1',
    name: 'proyecto ficticio 1',
    handle: 'proyecto-ficticio-1',
    status: 'published',
    actions: 'actions',
  },
  {
    id: 'project_uid_2',
    name: 'proyecto ficticio 2',
    handle: 'proyecto-ficticio-2',
    status: 'draft',
    actions: 'actions',
  },
];

export function ProjectListPage() {
  const renderCell = useCallback(
    (item: ProjectItem, columnKey: number | string) => {
      const value = item[columnKey as keyof ProjectItem];

      switch (columnKey) {
        case 'name':
          return (
            <div>
              <h3>{value}</h3>
              <small className="text-neutral-500">/{item.handle}</small>
            </div>
          );
        case 'status':
          return (
            <Chip
              className="select-none"
              color={value === 'published' ? 'success' : 'warning'}
            >
              {value === 'published' ? 'Publicado' : 'Borrador'}
            </Chip>
          );
        case 'actions':
          return (
            <div className="flex items-center gap-1.5">
              <Tooltip content="Ver">
                <Link
                  href={`/project/${item.handle}`}
                  className="text-default-500"
                >
                  <Icon icon="solar:eye-linear" width={20}></Icon>
                </Link>
              </Tooltip>
              <Tooltip content="Editar">
                <Link
                  href={`/project/new?command=edit&handle=${item.handle}&id=${item.id}`}
                  className="text-default-500"
                >
                  <Icon icon="solar:pen-2-outline" width={20}></Icon>
                </Link>
              </Tooltip>
              <Tooltip content="Eliminar">
                <Link
                  href={`/project/new?command=edit&handle=${item.handle}&id=${item.id}`}
                  className="text-danger"
                >
                  <Icon
                    icon="solar:trash-bin-minimalistic-linear"
                    width={20}
                  ></Icon>
                </Link>
              </Tooltip>
            </div>
          );
        default:
          return <span>hola</span>;
      }
    },
    [],
  );

  return (
    <main>
      <Table
        aria-label="Projects explorer"
        removeWrapper
        shadow="none"
        fullWidth
      >
        <TableHeader columns={columns}>
          {(col) => <TableColumn key={col.key}>{col.label}</TableColumn>}
        </TableHeader>
        <TableBody items={projects}>
          {(item) => (
            <TableRow key={item.id}>
              {(columnKey) => (
                <TableCell>{renderCell(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </main>
  );
}
