'use client';
import { OutputData } from '@editorjs/editorjs';
import { Icon } from '@iconify-icon/react';
import {
  Button,
  cn,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Navbar,
  NavbarContent,
  NavbarItem,
  Spinner,
  Textarea,
  useDisclosure,
} from '@nextui-org/react';
import dynamic from 'next/dynamic';
import { useState } from 'react';

import { ArrowLeftIcon } from '@/assets/icons/arrowLeft';
import { Footer } from '@/components/footer';
import { Container } from '@/features/core/components/container';
import { EditorRender } from '@/features/core/components/editor.render';

import { SkillEdit } from '../components/skill.edit';
import { SkillExplore, SkillExploreProps } from '../components/skill.explore';

const EditorDynamic = dynamic(() => import('@/features/core/lib/editor'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center py-4">
      <Spinner label="Cargando..." size="sm" />
    </div>
  ),
});

export interface ProjectEditProps extends SkillExploreProps {}

export function ProjectEditPage(props: ProjectEditProps) {
  const [isPreview, setIsPreview] = useState(true);
  const [content, setContent] = useState<OutputData>({ blocks: [] });
  const [skillList, setSkillList] = useState<SkillExploreProps['skillList']>(
    props.skillList,
  );
  const titleModal = useDisclosure();
  const formattedPublishDate = new Date().toLocaleDateString('es-Bo', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div>
      <header>
        <Navbar maxWidth="full">
          <NavbarContent justify="start">
            <NavbarItem>
              <Button
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
                    Proyecto X
                  </h1>
                  <div>
                    <small className="text-neutral-500">
                      https://fvcoder.com/project/slug-name
                    </small>
                  </div>
                </div>
                <Button
                  isIconOnly
                  size="sm"
                  variant="light"
                  onPress={titleModal.onOpen}
                  startContent={
                    <Icon
                      icon="solar:pen-bold"
                      className="text-neutral-500"
                      width={18}
                    />
                  }
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
              <SkillExplore skillList={skillList} />
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
              <Button>Save & publish</Button>
            </NavbarItem>
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
          <div>
            <div className="px-4 mx-auto prose dark:prose-invert py-10">
              <header className="text-center pb-4">
                <span className="block mb-4">
                  <time dateTime={formattedPublishDate}>
                    {formattedPublishDate}
                  </time>
                </span>
                <div>
                  <h1>
                    Así es como aprendí a programar, mi plan de estudios +
                    Cursos Gratis
                  </h1>
                </div>
              </header>
              <article>
                <EditorRender content={content} />
              </article>
              <div className="mb-4">
                <a
                  href="#"
                  className="flex gap-2 items-center no-underline hover:underline text-blue-500"
                >
                  <ArrowLeftIcon width={16} height={16} />
                  <span>Ver mas Artículos</span>
                </a>
              </div>
              <Footer />
            </div>
          </div>
        )}
      </Container>
      <Modal
        isOpen={titleModal.isOpen}
        onOpenChange={titleModal.onOpenChange}
        size="3xl"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>Configuración del Articulo</ModalHeader>
              <ModalBody>
                <form className="flex flex-col gap-4">
                  <Input label="Titulo del articulo" />
                  <Input
                    label="Url"
                    startContent={
                      <span className="text-sm ">
                        https://fvcoder.com/blog/
                      </span>
                    }
                  />
                  <Textarea label="Descripción" />
                  <div>
                    <input
                      type="file"
                      id="blog-upload-image"
                      accept="image/jpg, image/jpeg, image/png"
                      className="hidden"
                    />
                    <label htmlFor="blog-upload-image" className="relative">
                      <Image
                        src="https://placehold.co/1200x628"
                        className="w-full"
                      />
                      <div className="absolute flex items-center justify-center inset-0 rounded-medium z-10 cursor-pointer transition-all group hover:bg-black/25">
                        <div className="flex items-center gap-1 bg-white px-4 py-2 rounded-medium opacity-0 group-hover:opacity-100">
                          <Icon icon="solar:upload-bold" width={24} />
                          <span>Cambiar Imagen</span>
                        </div>
                      </div>
                    </label>
                  </div>
                </form>
              </ModalBody>
              <ModalFooter>
                <Button onPress={onClose}>Cancelar</Button>
                <Button onPress={onClose}>Guardar</Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
