import { Metadata } from 'next';

export function getMetadata(metadata: Metadata): Metadata {
  return Object.assign<Metadata, Metadata>(
    {
      metadataBase: new URL('https://www.fvcoder.com'),
      title: 'Fernando Ticona | Full-Stack Developer | fvcoder',
      description:
        'Soy Fernando Ticona, un Full-Stack Dev Junior apasionado por el desarrollo web. Explora mi experiencia, habilidades y proyectos destacados en fvcoder.com. ¡Contácteme para oportunidades emocionantes en el mundo del desarrollo frontend y backend!',
      icons: [
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          url: 'https://cdn.fvcoder.com/icon/2024-04/apple-touch-icon.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          url: 'https://cdn.fvcoder.com/icon/2024-04/favicon-32x32.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          url: 'https://cdn.fvcoder.com/icon/2024-04/favicon-16x16.png',
        },
        {
          rel: 'mask-icon',
          url: 'https://cdn.fvcoder.com/icon/2024-04/safari-pinned-tab.svg',
          color: '#5bbad5',
        },
        {
          rel: 'shortcut icon',
          url: 'https://cdn.fvcoder.com/icon/2024-04/favicon.ico',
        },
      ],
      other: {
        'apple-mobile-web-app-title': 'fvcoder',
        'application-name': 'fvcoder',
        'msapplication-TileColor': '#ffffff',
        'msapplication-config':
          'https://cdn.fvcoder.com/icon/2024-04/browserconfig.xml',
        'theme-color': '#ffffff',
      },
    },
    metadata,
  );
}
