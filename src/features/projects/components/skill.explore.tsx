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

export interface SkillExploreProps {
  skillList: Pick<skills, 'id' | 'handle' | 'name' | 'icon' | 'color'>[];
}

export function SkillExplore(props: SkillExploreProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

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
                <Button variant="light" onPress={onClose}>
                  Cerrar
                </Button>
                <Button color="primary">Guardar</Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
