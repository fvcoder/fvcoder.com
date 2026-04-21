import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { ImageResponse } from '@vercel/og';
import { html } from 'satori-html';

export async function getStaticPaths() {
  const posts = await getCollection('blog');
  
  return posts.map((post) => ({
    params: { slug: post.id },
    props: { 
      title: post.data.title,
      dateText: post.data.pubDate.toLocaleDateString('es-MX', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
    },
  }));
}

export const GET: APIRoute = async ({ props }) => {
  const markup = html`
    <div tw="flex flex-col w-full h-full bg-white px-20 py-8">
      <div tw="flex items-center justify-between">
        <p tw="relative text-xl text-zinc-500 mb-0">Articulo</p>
        <p tw="relative text-xl text-zinc-500 mb-0">${props.dateText}</p>
      </div>
      <div tw="flex flex-1 flex-col items-start">
        <h1 tw="text-balance relative text-6xl font-bold text-left leading-tight">
          ${props.title}
        </h1>    
      </div>
      <div tw="flex items-center justify-between">
        <div tw="flex items-center">
            <p tw="relative text-2xl text-zinc-500">Fernando Ticona</p>
        </div>

        <p tw="relative text-2xl text-zinc-500 mt-10">
          Articulo
        </p>
      </div>
    </div>
  `;
  return new ImageResponse(markup as any, {
    width: 1200,
    height: 630,
  });

  
/*
  return new ImageResponse(
    (
      <div tw="flex flex-col w-full h-full items-center justify-center bg-gray-900 px-20">
        <div tw="absolute inset-0 flex bg-gradient-to-br from-gray-900 to-gray-700" />
        
        <h1 tw="relative text-6xl font-bold text-white text-center leading-tight">
          {title}
        </h1>
        
        <p tw="relative text-3xl text-gray-400 mt-10">
          fvcoder.com
        </p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
  */
};