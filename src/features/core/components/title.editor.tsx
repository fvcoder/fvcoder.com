/* eslint-disable @typescript-eslint/no-misused-promises */
'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { Icon } from '@iconify-icon/react';
import {
  Button,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  Textarea,
  useDisclosure,
} from '@nextui-org/react';
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import z from 'zod';

import { editProjectAction } from '@/features/projects/action/project.action';

import { fileKey, fileMutation } from '../mutations/file.mutation';

const titleSchema = z.object({
  name: z.string().min(5),
  handle: z.string().min(3),
  description: z.string().min(10),
});

type TitleSchema = z.infer<typeof titleSchema>;

export interface articleTitle extends TitleSchema {
  id: string;
  thumbnail: string;
}

interface TitleEditorProps extends articleTitle {
  type: 'blog' | 'project';
  onChange: (data: Partial<Omit<articleTitle, 'id'>>) => void;
}

export function TitleArticleEditor(props: TitleEditorProps) {
  const imgMutation = useMutation({
    mutationKey: [fileKey],
    mutationFn: fileMutation,
  });
  const [isLoading, setIsLoading] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const form = useForm<TitleSchema>({
    resolver: zodResolver(titleSchema),
    defaultValues: {
      name: props.name,
      handle: props.handle,
      description: props.description,
    },
  });

  function onSubmit(data: TitleSchema) {
    setIsLoading(true);
    editProjectAction(props.id, {
      name: data.name,
      handle: data.handle,
      description: data.description,
    })
      .then((p) => {
        props.onChange(p);
        form.reset({
          name: p.name,
          handle: p.handle,
          description: p.description,
        });
      })
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }

  function onImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];

      imgMutation.mutate(file, {
        onSuccess: (data) => {
          if (data) {
            editProjectAction(props.id, {
              thumbnail: data,
            })
              .then((p) => props.onChange(p))
              .catch(console.error);
          } else {
            alert('No se pudo subir la imagen');
          }
        },
      });
      e.target.value = '';
    }
  }

  return (
    <>
      <Button
        isIconOnly
        size="sm"
        variant="light"
        onPress={onOpen}
        startContent={
          <Icon icon="solar:pen-bold" className="text-neutral-500" width={18} />
        }
      />
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        scrollBehavior="outside"
        size="3xl"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>Configuración del Articulo</ModalHeader>
              <ModalBody>
                <form
                  className="flex flex-col gap-4"
                  onSubmit={form.handleSubmit(onSubmit)}
                >
                  <Input
                    label="Titulo del articulo"
                    defaultValue={props.name}
                    isInvalid={!!form.formState.errors.name}
                    errorMessage={form.formState.errors.name?.message}
                    {...form.register('name')}
                  />
                  <Input
                    label="Url"
                    defaultValue={props.handle}
                    isInvalid={!!form.formState.errors.handle}
                    errorMessage={form.formState.errors.handle?.message}
                    startContent={
                      <span className="text-sm -mr-1.5 text-neutral-500">
                        https://fvcoder.com/{props.type}/
                      </span>
                    }
                    {...form.register('handle')}
                  />
                  <Textarea
                    label="Descripción"
                    defaultValue={props.description}
                    isInvalid={!!form.formState.errors.description}
                    errorMessage={form.formState.errors.description?.message}
                    {...form.register('description')}
                  />
                  <div>
                    <input
                      type="file"
                      id="blog-upload-image"
                      accept="image/jpg, image/jpeg, image/png"
                      className="hidden"
                      onChange={onImageChange}
                    />
                    <label htmlFor="blog-upload-image" className="relative">
                      <Image src={props.thumbnail} className="w-full" />
                      <div className="absolute flex items-center justify-center inset-0 rounded-medium z-10 cursor-pointer transition-all group hover:bg-black/25">
                        <div className="flex items-center gap-1 bg-white px-4 py-2 rounded-medium opacity-0 group-hover:opacity-100">
                          <Icon icon="solar:upload-bold" width={24} />
                          <span>Cambiar Imagen</span>
                        </div>
                      </div>
                    </label>
                  </div>
                  <div className="flex gap-2 items-center justify-end pb-2">
                    <Button
                      onPress={onClose}
                      variant="light"
                      isDisabled={isLoading || imgMutation.isPending}
                    >
                      Cancelar
                    </Button>
                    <Button
                      type="submit"
                      color="primary"
                      isLoading={isLoading || imgMutation.isPending}
                    >
                      Guardar
                    </Button>
                  </div>
                </form>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
