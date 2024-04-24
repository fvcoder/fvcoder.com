import { Button } from '@nextui-org/react';
import Link from 'next/link';

import { Container } from '@/features/core/components/container';
import { ProjectListPage } from '@/features/projects/page/project.list';

export default function ProjectExplorerPageServer() {
  return (
    <Container>
      <header className="flex items-center justify-between py-5">
        <h1 className="text-2xl font-semibold">Proyectos</h1>
        <div>
          <Button as={Link} size="sm" color="primary" href="/project/new">
            Crear Proyecto
          </Button>
        </div>
      </header>
      <ProjectListPage />
    </Container>
  );
}
