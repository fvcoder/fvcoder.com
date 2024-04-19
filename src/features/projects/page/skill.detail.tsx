'use client';
import { Icon } from '@iconify-icon/react';
import { Button, Card, CardBody, Image, Pagination } from '@nextui-org/react';
import { skills } from '@prisma/client';
import Link from 'next/link';

import { Footer } from '@/components/footer';
import { ContactButtons } from '@/features/core/components/contact.buttons';
import { Container } from '@/features/core/components/container';

interface SkillDetailProps {
  skill: Pick<skills, 'handle' | 'name' | 'icon' | 'color' | 'colorSelect'>;
}

export function SkillDetail(props: SkillDetailProps) {
  return (
    <Container>
      <header className="py-10">
        <div className="text-center mb-4">
          <div>
            <Button
              as={Link}
              href="/project"
              size="sm"
              variant="bordered"
              className="rounded-full pl-2 pr-2"
              style={{
                color: props.skill.colorSelect,
                borderColor: props.skill.color,
                background: props.skill.color,
              }}
              startContent={
                <Icon icon={props.skill.icon} width={18} height={18} />
              }
              endContent={
                <Icon icon="solar:close-circle-bold" width={18} height={18} />
              }
            >
              {props.skill.name}
            </Button>
          </div>
          <h1 className="text-balance font-semibold text-5xl leading-snug">
            Proyectos realizados con {props.skill.name} por Fernando Ticona
          </h1>
          <div>
            <ContactButtons />
          </div>
        </div>
      </header>
      <main>
        <section className="mb-5 grid grid-cols-1 md:grid-cols-2 gap-4">
          {Array.from({ length: 12 }).map((_, i) => (
            <Card shadow="sm" key={`project-${i}`} isPressable>
              <Image src="https://cdn.pixabay.com/photo/2022/09/02/19/55/crystal-7428278_1280.jpg" />
              <CardBody>
                <h3>project name ${i}</h3>
              </CardBody>
            </Card>
          ))}
        </section>
        <div className="flex justify-center mb-10">
          <Pagination total={10} initialPage={1} />
        </div>
      </main>
      <Footer />
    </Container>
  );
}
