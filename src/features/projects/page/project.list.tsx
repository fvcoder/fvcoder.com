'use client';
import { Icon } from '@iconify-icon/react/dist/iconify.mjs';
import {
  Button,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
} from '@nextui-org/react';
import { project } from '@prisma/client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';

import { Container } from '@/features/core/components/container';

import {
  createProjectAction,
  deleteProjectAction,
} from '../action/project.action';

const columns = [
  {
    key: 'name',
    label: 'Nombre',
  },
  {
    key: 'state',
    label: 'Estado',
  },
  {
    key: 'actions',
    label: 'Acciones',
  },
];

interface ProjectListPageProps {
  projects: project[];
}

export function ProjectListPage(props: ProjectListPageProps) {
  const [projects, setProjects] = useState(props.projects);
  const [createIsLoading, setCreateIsLoading] = useState(false);
  const router = useRouter();
  const renderCell = useCallback(
    (item: project, columnKey: number | string) => {
      const value = item[columnKey as keyof project];

      switch (columnKey) {
        case 'name':
          return (
            <div>
              <h3>{String(value)}</h3>
              <small className="text-neutral-500">/{item.handle}</small>
            </div>
          );
        case 'state':
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
                  href={`/project/preview?id=${item.id}`}
                  className="text-default-500"
                >
                  <Icon icon="solar:eye-linear" width={20}></Icon>
                </Link>
              </Tooltip>
              <Tooltip content="Editar">
                <Link
                  href={`/project/edit?id=${item.id}`}
                  className="text-default-500"
                >
                  <Icon icon="solar:pen-2-outline" width={20}></Icon>
                </Link>
              </Tooltip>
              <Tooltip content="Eliminar">
                <button
                  onClick={() => {
                    deleteProjectAction(item.id)
                      .then(() => {
                        setProjects(
                          props.projects.filter((x) => x.id !== item.id),
                        );
                      })
                      .catch(console.error);
                  }}
                  className="text-danger"
                >
                  <Icon
                    icon="solar:trash-bin-minimalistic-linear"
                    width={20}
                  ></Icon>
                </button>
              </Tooltip>
            </div>
          );
        default:
          return <span>hola</span>;
      }
    },
    [],
  );

  function handleCreateProject() {
    setCreateIsLoading(true);
    createProjectAction()
      .then((project) => {
        router.push(`/project/edit?id=${project.id}&handle=${project.handle}`);
      })
      .catch(console.error)
      .finally(() => setCreateIsLoading(false));
  }

  return (
    <Container>
      <header className="flex items-center justify-between py-5">
        <h1 className="text-2xl font-semibold">Proyectos</h1>
        <div>
          <Button
            size="sm"
            color="primary"
            onPress={handleCreateProject}
            isLoading={createIsLoading}
          >
            Crear Proyecto
          </Button>
        </div>
      </header>
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
    </Container>
  );
}
