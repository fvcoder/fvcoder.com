import './globals.css';

import { cn } from '@nextui-org/react';
import type { Metadata } from 'next';
import { headers } from 'next/headers';

import { Providers } from './providers';

const pageOnlyDarkMode = [/\//, /\/about/];

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let isDark = false;
  const pathName = headers().get('X-Url') ?? '/';

  pageOnlyDarkMode.some((x) => {
    if (x.test(pathName)) {
      isDark = true;

      return false;
    }

    return true;
  });

  return (
    <html lang="es" className={cn({ dark: isDark })}>
      <body className="relative">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
