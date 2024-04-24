/* eslint-disable @typescript-eslint/no-misused-promises */
'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { Icon } from '@iconify-icon/react';
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from '@nextui-org/react';
import { skills } from '@prisma/client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { createSkillAction, editSkillAction } from '../action/skill.action';
import { CreateSkillSchema, createSkillSchema } from '../schema/skill.schema';
import style from './skill.edit.module.css';

export interface SkillEditProps {
  action: 'edit' | 'create';
  size?: 'sm' | 'md' | 'lg';
  onCreate?: (data: skills) => void;
  initialData?: {
    name: string;
    handle: string;
    color: string;
    icon: string;
  };
}

export function SkillEdit(props: SkillEditProps) {
  const [isLoading, setIsLoading] = useState(false);
  const { isOpen, onOpenChange, onOpen, onClose } = useDisclosure();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<CreateSkillSchema>({
    resolver: zodResolver(createSkillSchema),
    mode: 'all',
  });

  function handleOnSubmit(data: CreateSkillSchema) {
    setIsLoading(true);

    const action =
      props.action === 'create' ? createSkillAction : editSkillAction;

    action(data)
      .then((dataCreated) => {
        if (props.onCreate) {
          props.onCreate(dataCreated.data);
        }
        reset({
          name: 'Title',
          handle: 'Title',
          icon: 'solar:box-minimalistic-outline',
          color: '#38bdf8',
          colorSelect: '#ffffff',
        });
        onClose();
      })
      .catch((e) => {
        alert(e.msg);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <>
      <Button
        size={props.size}
        startContent={
          <Icon
            icon={
              props.action === 'create'
                ? 'material-symbols-light:add'
                : 'solar:pen-bold'
            }
            width={16}
          />
        }
        onPress={onOpen}
      >
        <span>{props.action === 'create' ? 'Crear' : 'Editar'} Habilidad</span>
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="2xl">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>
                {props.action === 'create' ? 'Crear' : 'Editar'} Habilidad
              </ModalHeader>
              <ModalBody>
                <form
                  className="grid grid-cols-2 gap-4"
                  onSubmit={handleSubmit(handleOnSubmit)}
                >
                  <Input
                    label="Nombre"
                    className="col-span-2"
                    defaultValue={
                      props.initialData ? props.initialData.name : 'Titulo'
                    }
                    isInvalid={!!errors.name}
                    errorMessage={errors.name?.message}
                    {...register('name')}
                  />
                  <Input
                    label="handle"
                    defaultValue="titulo"
                    isInvalid={!!errors.handle}
                    errorMessage={errors.handle?.message}
                    {...register('handle')}
                  />
                  <Input
                    label="Icono"
                    defaultValue={
                      props.initialData
                        ? props.initialData.icon
                        : 'solar:box-minimalistic-outline'
                    }
                    isInvalid={!!errors.icon}
                    errorMessage={errors.icon?.message}
                    {...register('icon')}
                  />
                  <Input
                    type="color"
                    label="Color"
                    defaultValue={
                      props.initialData ? props.initialData.color : '#38bdf8'
                    }
                    isInvalid={!!errors.color}
                    errorMessage={errors.color?.message}
                    {...register('color')}
                  />
                  <Input
                    type="color"
                    label="Color de Texto Seleccionado"
                    defaultValue={
                      props.initialData ? props.initialData.color : '#ffffff'
                    }
                    isInvalid={!!errors.colorSelect}
                    errorMessage={errors.colorSelect?.message}
                    {...register('colorSelect')}
                  />
                  <div className="col-span-2">
                    <div className={style.preview}>
                      <Button
                        size="sm"
                        variant="bordered"
                        className="flex rounded-full pl-2"
                        tabIndex={-1}
                        style={{
                          color: watch('color'),
                          borderColor: watch('color'),
                          background: 'transparent',
                        }}
                        startContent={
                          <Icon icon={watch('icon')} width={18} height={18} />
                        }
                      >
                        {watch('name')}
                      </Button>
                      <Button
                        size="sm"
                        variant="bordered"
                        className="flex rounded-full pl-2"
                        tabIndex={-1}
                        style={{
                          color: watch('colorSelect'),
                          borderColor: watch('color'),
                          background: watch('color'),
                        }}
                        startContent={
                          <Icon icon={watch('icon')} width={18} height={18} />
                        }
                      >
                        {watch('name')}
                      </Button>
                    </div>
                    <div className="py-2 flex justify-end">
                      <Button
                        type="button"
                        variant="light"
                        onPress={onClose}
                        isLoading={isLoading}
                      >
                        Cancelar
                      </Button>
                      <Button
                        type="submit"
                        color="primary"
                        isDisabled={isLoading}
                      >
                        Crear
                      </Button>
                    </div>
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
