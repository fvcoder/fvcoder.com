'use client';
import { Icon } from '@iconify-icon/react';
import { Button, cn, Image } from '@nextui-org/react';
import { useState } from 'react';

import { GithubIconBrand } from '@/assets/icons/brand/github';
import { LinkedInIconBrand } from '@/assets/icons/brand/LinkedIn';
import { MailIcon } from '@/assets/icons/mail';
import { Container } from '@/features/core/components/container';

const skills = [
  {
    handle: 'husky',
    name: 'Husky',
    icon: 'file-icons:husky',
    color: '#a8b1ff',
    colorSelect: '#fff',
    border: '#a8b1ff',
    bgSelect: '#a8b1ff',
  },
  {
    handle: 'eslint',
    name: 'Eslint',
    icon: 'simple-icons:eslint',
    color: '#8080f2',
    colorSelect: '#fff',
    border: '#8080f2',
    bgSelect: '#8080f2',
  },
  {
    handle: 'tailwind-css',
    name: 'Tailwind',
    icon: 'simple-icons:tailwindcss',
    color: '#38bdf8',
    colorSelect: '#fff',
    border: '#38bdf8',
    bgSelect: '#38bdf8',
  },
  {
    handle: 'iconify',
    name: 'Iconify',
    icon: 'simple-icons:iconify',
    color: '#2d9cf4',
    colorSelect: '#fff',
    border: '#2d9cf4',
    bgSelect: '#2d9cf4',
  },
  {
    handle: 'commitlint',
    name: 'Commitlint',
    icon: 'simple-icons:commitlint',
    color: '#a8b1ff',
    colorSelect: '#fff',
    border: '#a8b1ff',
    bgSelect: '#a8b1ff',
  },
  {
    handle: 'next-auth',
    name: 'Next Auth    ',
    icon: 'clarity:shield-solid',
    color: '#19c3e3',
    colorSelect: '#fff',
    border: '#19c3e3',
    bgSelect: '#19c3e3',
  },
  {
    handle: 'framer-motion',
    name: 'Framer Motion',
    icon: 'tabler:brand-framer-motion',
    color: '#c44ca6',
    colorSelect: '#fff',
    border: '#c44ca6',
    bgSelect: '#c44ca6',
  },
  {
    handle: 'axios',
    name: 'Axios',
    icon: 'simple-icons:axios',
    color: '#5a29e4',
    colorSelect: '#fff',
    border: '#5a29e4',
    bgSelect: '#5a29e4',
  },
  {
    handle: 'react-query',
    name: 'React Query',
    icon: 'simple-icons:reactquery',
    color: '#ff4154',
    colorSelect: '#fff',
    border: '#ff4154',
    bgSelect: '#ff4154',
  },
  {
    handle: 'prismic-io',
    name: 'Prismic',
    icon: 'simple-icons:prismic',
    color: '#7b8fea',
    colorSelect: '#fff',
    border: '#7b8fea',
    bgSelect: '#7b8fea',
  },
  {
    handle: 'next-ui',
    name: 'Next Ui',
    icon: 'simple-icons:nextui',
    color: '#000',
    colorSelect: '#fff',
    border: '#000',
    bgSelect: '#000',
  },
  {
    handle: 'turso',
    name: 'turso',
    icon: 'simple-icons:turso',
    color: '#4ff7d1',
    colorSelect: '#000',
    border: '#4ff7d1',
    bgSelect: '#4ff7d1',
  },
  {
    handle: 'prisma',
    name: 'Prisma',
    icon: 'simple-icons:prisma',
    color: '#2d3748',
    colorSelect: '#fff',
    border: '#2d3748',
    bgSelect: '#2d3748',
  },
  {
    handle: 'vite',
    name: 'Vite',
    icon: 'devicon:vitejs',
    color: '#ffa800',
    colorSelect: '#fff',
    border: '#ffa800',
    bgSelect: '#ffa800',
  },
  {
    handle: 'typescript',
    name: 'TypeScript',
    icon: 'simple-icons:typescript',
    color: '#007acc',
    colorSelect: '#fff',
    border: '#007acc',
    bgSelect: '#007acc',
  },
  {
    handle: 'javascript',
    name: 'JavaScript',
    icon: 'simple-icons:javascript',
    color: '#f7df1e',
    colorSelect: '#000',
    border: '#f7df1e',
    bgSelect: '#f7df1e',
  },
  {
    handle: 'next-js',
    name: 'Next.js',
    icon: 'ri:nextjs-fill',
    color: '#000000',
    colorSelect: '#ffffff',
    border: '#000',
    bgSelect: '#000',
  },
  {
    handle: 'react-js',
    name: 'React.js',
    icon: 'simple-icons:react',
    color: '#61dafb',
    colorSelect: '#000',
    border: '#61dafb',
    bgSelect: '#61dafb',
  },
];

export default function ProjectHomePage() {
  const [selected, setSelected] = useState(true);

  return (
    <Container>
      <header className="py-10 text-center">
        <div className="mb-3">
          <a
            href="https://github.com/fvcoder"
            className="inline-flex pl-1 pr-3 py-1 transition rounded-full gap-1.5 items-center cursor-pointer border border-neutral-400 bg-neutral-100 text-neutral-500  hover:bg-neutral-200 active:bg-neutral-300 dark:border-neutral-700 dark:bg-neutral-950 dark:text-neutral-300  dark:hover:bg-neutral-800 dark:active:bg-neutral-700"
          >
            <Image
              src="https://github.com/fvcoder.png"
              alt="fvcoder"
              className="rounded-full w-8 h-8"
            />
            <span>fvcoder</span>
          </a>
        </div>
        <h1 className="text-balance font-semibold text-5xl leading-snug">
          Habilidades de
          <br />
          Fernando Ticona
        </h1>
        <div>
          <nav className="flex gap-4 mt-8 flex-wrap justify-center flex-none">
            <Button as="a" href="https://linkedin.com/in/fvcoder">
              <LinkedInIconBrand className="size-4 md:size-6" />
              LinkedIn
            </Button>
            <Button as="a" href="https://github.com/fvcoder">
              <GithubIconBrand className="size-4 md:size-6" />
              GitHub
            </Button>
            <Button as="a" href="mailto:fvcoder1@gmail.com">
              <MailIcon className="size-4 md:size-6" />
              contact@fvcoder.com
            </Button>
          </nav>
        </div>
      </header>
      <main>
        <section className="flex items-center gap-2 w-full">
          <div className="relative min-w-0 flex-1 flex gap-2 overflow-x-hidden flex-wrap justify-center">
            <div className="absolute [content:''] right-0 bottom-0 top-0 w-8 z-10 bg-gradient-to-l from-foreground-50 to-transparent pointer-events-none" />
            {skills.map((x, i) => (
              <Button
                size="sm"
                variant="bordered"
                className={cn('rounded-full pl-2', { 'pr-2': selected })}
                style={{
                  color: selected ? x.colorSelect : x.color,
                  borderColor: x.border,
                  background: selected ? x.bgSelect : 'transparent',
                }}
                startContent={<Icon icon={x.icon} width={18} height={18} />}
                endContent={
                  selected && (
                    <Icon
                      icon="solar:close-circle-bold"
                      width={18}
                      height={18}
                    />
                  )
                }
                key={`skill-${x.handle}-${i}`}
                onPress={() => setSelected(!selected)}
              >
                {x.name}
              </Button>
            ))}
          </div>
        </section>
      </main>
    </Container>
  );
}
