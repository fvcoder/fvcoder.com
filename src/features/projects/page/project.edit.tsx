/* eslint-disable @typescript-eslint/no-misused-promises */
'use client';
import { OutputData } from '@editorjs/editorjs';
import { Icon } from '@iconify-icon/react';
import {
  Button,
  cn,
  Navbar,
  NavbarContent,
  NavbarItem,
  Spinner,
} from '@nextui-org/react';
import { project, skills } from '@prisma/client';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { Container } from '@/features/core/components/container';
import { TitleArticleEditor } from '@/features/core/components/title.editor';
import { JsonParse } from '@/features/core/utils/json';

import { editProjectAction } from '../action/project.action';
import { SkillEdit } from '../components/skill.edit';
import { SkillExplore, SkillExploreProps } from '../components/skill.explore';
import { ProjectViewPage, ProjectViewPageProps } from './project.view';

const EditorDynamic = dynamic(() => import('@/features/core/lib/editor'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center py-4">
      <Spinner label="Cargando..." size="sm" />
    </div>
  ),
});

export interface ProjectEditProps extends SkillExploreProps {
  project: project & {
    skills: Pick<skills, 'id' | 'handle' | 'name' | 'icon' | 'color'>[];
  };
}

export function ProjectEditPage(props: ProjectEditProps) {
  const router = useRouter();
  const [isPreview, setIsPreview] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [project, setProject] = useState<ProjectEditProps['project']>(
    props.project,
  );
  const [content, setContent] = useState<OutputData>(() => {
    if (props.project.body) {
      return JsonParse<OutputData>(props.project.body);
    }

    return { blocks: [] };
  });
  const [skillList, setSkillList] = useState<SkillExploreProps['skillList']>(
    props.skillList,
  );

  function saveContentHandler() {
    setIsLoading(true);
    editProjectAction(project.id, {
      body: JSON.stringify(content),
    })
      .then((p) => {
        setProject({
          ...project,
          ...p,
        });
      })
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }

  function publishArticle() {
    setIsLoading(true);
    editProjectAction(project.id, {
      state: 'published',
    })
      .then((p) => {
        setProject({
          ...project,
          ...p,
        });
      })
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }

  return (
    <div>
      <header>
        <Navbar maxWidth="full">
          <NavbarContent justify="start">
            <NavbarItem>
              <Button
                onPress={() => router.back()}
                isIconOnly
                variant="light"
                startContent={
                  <Icon icon="solar:round-arrow-left-linear" width={20} />
                }
              />
            </NavbarItem>
            <NavbarItem>
              <div className="flex-1 flex items-center gap-2">
                <div>
                  <h1 className="text-base font-semibold line-clamp-1 leading-none">
                    {project.name}
                  </h1>
                  <div>
                    <small className="text-neutral-500">
                      https://fvcoder.com/project/{project.handle}
                    </small>
                  </div>
                </div>
                <TitleArticleEditor
                  type="project"
                  onChange={(data) => setProject({ ...project, ...data })}
                  id={project.id}
                  thumbnail={project.thumbnail}
                  handle={project.handle}
                  name={project.name}
                  description={project.description}
                />
              </div>
            </NavbarItem>
          </NavbarContent>
          <NavbarContent justify="end">
            <NavbarItem>
              <SkillEdit
                action="create"
                onCreate={(data) => setSkillList([...skillList, data])}
              />
            </NavbarItem>
            <NavbarItem>
              <SkillExplore
                projectId={project.id}
                selected={project.skills}
                skillList={skillList}
                onChange={(data) => {
                  setProject({ ...project, skills: data });
                }}
              />
            </NavbarItem>
            <NavbarItem>
              <Button
                isIconOnly
                startContent={
                  <Icon
                    icon={
                      isPreview
                        ? 'solar:eye-closed-outline'
                        : 'solar:eye-linear'
                    }
                    width={20}
                  />
                }
                onPress={() => setIsPreview(!isPreview)}
              />
            </NavbarItem>
            <NavbarItem>
              <Button
                onPress={saveContentHandler}
                isLoading={isLoading}
                color="primary"
              >
                Guardar
              </Button>
            </NavbarItem>
            {project.state === 'draft' && (
              <NavbarItem>
                <Button
                  color="success"
                  onPress={publishArticle}
                  isLoading={isLoading}
                >
                  Publicar
                </Button>
              </NavbarItem>
            )}
          </NavbarContent>
        </Navbar>
      </header>
      <Container
        className={cn('py-4 grid gap-4', {
          'grid-cols-2': isPreview,
          'grid-cols-1': !isPreview,
        })}
        fullWidth
      >
        <div>
          <EditorDynamic
            onChange={(e) => setContent(e)}
            initialData={content}
          />
        </div>
        {isPreview && (
          <ProjectViewPage {...(project as ProjectViewPageProps)} />
        )}
      </Container>
    </div>
  );
}
