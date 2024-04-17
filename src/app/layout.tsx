import './globals.css';

import { cn } from '@nextui-org/react';
import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { getServerSession } from 'next-auth/next';

import { Navbar } from '@/components/navbar';

import { Providers } from './providers';

const pageOnlyDarkMode = ['/', /\/about/];

export function generateMetadata(): Metadata {
  return {
    metadataBase: new URL('https://www.fvcoder.com'),
    title:
      'Fernando Ticona | Full-Stack Dev Junior | Programador freelance | fvcoder',
    description:
      'Soy Fernando Ticona, un Full-Stack Dev Junior apasionado por el desarrollo web. Explora mi experiencia, habilidades y proyectos destacados en fvcoder.com. ¡Contáctame para oportunidades emocionantes en el mundo del desarrollo frontend y backend!',
    alternates: {
      canonical: '/',
    },
    creator: 'Fernando Ticona (@fvcoder)',
    openGraph: {
      title: 'Fernando Ticona | Full-Stack Dev Junior',
      type: 'website',
      images: '/hi.png',
      url: '/',
    },
    twitter: {
      card: 'summary_large_image',
      images: '/hi.png',
      creator: '@fvcoder1',
      title: 'Fernando Ticona | Full-Stack Dev Junior',
      description:
        '¡Bienvenido a mi perfil! Soy Fernando Ticona, un Full-Stack Dev Junior apasionado por el desarrollo web. Explora mi experiencia, habilidades y proyectos destacados en fvcoder.com. ¡Contáctame para oportunidades emocionantes en el mundo del desarrollo frontend y backend!',
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  let isDark = false;
  const pathName = headers().get('X-Url') ?? '/';

  pageOnlyDarkMode.some((x) => {
    if (typeof x === 'string') {
      if (x === pathName) {
        isDark = true;

        return false;
      }
    } else if (x.test(pathName)) {
      isDark = true;

      return false;
    }

    return true;
  });

  return (
    <html lang="es" className={cn({ dark: isDark })}>
      <body className="relative">
        <Providers session={session}>
          <Navbar />

          <div
            className="hidden dark:block absolute top-0 bottom-0 z-[-2] min-h-screen w-full bg-neutral-100 dark:bg-neutral-950
      			bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(217,216,255,0.5),rgba(255,255,255,0.9))]
      			dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
          ></div>
          {children}
        </Providers>
      </body>
    </html>
  );
}
