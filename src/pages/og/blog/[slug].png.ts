import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { ImageResponse } from '@vercel/og';
import { html } from 'satori-html';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

export async function getStaticPaths() {
  const posts = await getCollection('blog');
  
  return posts.map((post) => ({
    params: { slug: post.id },
    props: {
      title: post.data.title,
      slug: post.id,
      dateText: post.data.pubDate.toLocaleDateString('es-MX', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
    },
  }));
}

export const GET: APIRoute = async ({ props }) => {
  const fontMonoData = readFileSync(resolve(process.cwd(), 'src/assets/fonts/JetBrainsMono-Regular.ttf')).buffer;
  const fontInterData = readFileSync(resolve(process.cwd(), 'src/assets/fonts/Inter_24pt-Regular.ttf')).buffer;


  const markup = html`
    <div tw="flex flex-col w-full h-full sbg-[#030542]"
    style="background-image: linear-gradient(to top, #eac8ff, #be9fd8, #9378b3, #6a538f, #41316c, #2f235d, #1b154f, #040641, #040641, #040641, #040641, #040641);"
    >
      <div tw="flex flex-1 flex-col px-12 pt-28">
        <div tw="flex text-white/50 mx-auto text-2xl">Blog de Fernando Ticona</div>
        <div tw="flex flex-1 flex-col items-start">
          <h1 tw="relative text-5xl font-bold leading-tight text-white text-center w-3/4 mx-auto">
            ${props.title}
          </h1>    
          <div tw="flex text-white/50 mx-auto text-xl">${props.dateText}</div>
        </div>
      </div>
      <div tw="flex items-center justify-center">
        <div
          tw="h-48 bg-[#ffffff26] border-t-[.0625rem] border-r-[.0625rem] border-l-[.0625rem] border-[#8c93fb] flex w-4/5 rounded-t-3xl pt-6 px-6"
        >
          <div tw="h-full bg-[#151c23] flex rounded-t-xl w-full">
            <div tw="font-mono text-lg flex text-[#84a6ce] p-6" style="font-family: 'mono';">
              https://fvcoder.com/blog/${props.slug}
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  return new ImageResponse(markup as any, {
    width: 1200,
    height: 630,
    fonts: [
      {
        name: 'MiFuenteInter',
        data: fontInterData,
        weight: 400,
        style: 'normal',
      },
      {
        name: 'mono',
        data: fontMonoData,
        weight: 400,
        style: 'normal',
      },
    ],
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