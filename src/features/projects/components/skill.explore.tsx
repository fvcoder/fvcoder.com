'use client';
import {
  Button,
  Chip,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Select,
  SelectItem,
  useDisclosure,
} from '@nextui-org/react';
import { skills } from '@prisma/client';
import { useState } from 'react';

import { editProjectAction } from '../action/project.action';

export interface SkillExploreProps {
  projectId: string;
  selected: Pick<skills, 'id' | 'handle' | 'name' | 'icon' | 'color'>[];
  skillList: Pick<skills, 'id' | 'handle' | 'name' | 'icon' | 'color'>[];
  onChange: (
    data: Pick<skills, 'id' | 'handle' | 'name' | 'icon' | 'color'>[],
  ) => void;
}

export function SkillExplore(props: SkillExploreProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState<SkillExploreProps['skillList']>([]);
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  function onChange(data: SkillExploreProps['skillList']) {
    setIsLoading(true);
    editProjectAction(props.projectId, {
      skills: {
        connect: data.map((x) => ({ id: x.id })),
      },
    })
      .then(() => {
        props.onChange(value);
        onClose();
      })
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }

  return (
    <>
      <Button onPress={onOpen}>Explorar Habilidades</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>Explorar Habilidades</ModalHeader>
              <ModalBody>
                <Select
                  isMultiline
                  items={props.skillList}
                  selectionMode="multiple"
                  label="Selecciona Habilidades"
                  defaultSelectedKeys={props.selected.map((x) => x.id)}
                  onSelectionChange={(key) => {
                    setValue(
                      Array.from(key)
                        .map((key) => props.skillList.find((x) => x.id === key))
                        .filter((x) => !!x) as SkillExploreProps['skillList'],
                    );
                  }}
                  renderValue={(items) => {
                    return (
                      <div className="flex flex-wrap gap-2">
                        {items.map((item) => (
                          <Chip key={item.key}>{item.data?.name}</Chip>
                        ))}
                      </div>
                    );
                  }}
                >
                  {(item) => <SelectItem key={item.id}>{item.name}</SelectItem>}
                </Select>
              </ModalBody>
              <ModalFooter>
                <Button variant="light" onPress={onClose} disabled={isLoading}>
                  Cerrar
                </Button>
                <Button
                  color="primary"
                  onPress={() => !isLoading && onChange(value)}
                  disabled={isLoading}
                  isLoading={isLoading}
                >
                  Guardar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
