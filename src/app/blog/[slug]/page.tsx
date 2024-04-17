/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import { asText } from '@prismicio/helpers';
import Link from 'next/link';

import { ArrowLeftIcon } from '@/assets/icons/arrowLeft';
import { Footer } from '@/components/footer';
import { RenderRichText } from '@/components/richText';
import { getMetadata } from '@/features/core/utils/metadata';
import { getBlogBySlug } from '@/prismic';
import { PageProps } from '@/types/next.page';

export async function generateMetadata({ params }: PageProps) {
  const post = await getBlogBySlug({ slug: params.slug });

  return getMetadata({
    title: `${asText(post.data.title)} | Blog de Fernando Ticona | fvcoder`,
    description: asText(post.data.description),
    openGraph: {
      images: post.data.image.url ?? '',
    },
    twitter: {
      images: post.data.image.url ?? '',
    },
  });
}

export default async function BlogArticlePage({ params }: PageProps) {
  const post = await getBlogBySlug({ slug: params.slug });

  if (!post) {
    return new Response(null, {
      status: 404,
      statusText: 'Not found',
    });
  }
  const data = post.data;

  const formattedPublishDate = new Date(
    post.last_publication_date,
  ).toLocaleDateString('es-Bo', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="px-4 mx-auto prose dark:prose-invert py-10">
      <header className="text-center pb-4">
        <span className="block mb-4">
          <time dateTime={formattedPublishDate}>{formattedPublishDate}</time>
        </span>
        <RenderRichText key={`header`} content={data.title} />
      </header>
      <article>
        <RenderRichText key={`article`} content={data.body} />
      </article>
      <div className="mb-4">
        <Link
          href="/blog"
          className="flex gap-2 items-center no-underline hover:underline text-blue-500"
        >
          <ArrowLeftIcon width={16} height={16} />
          <span>Ver mas Artículos</span>
        </Link>
      </div>
      <Footer />
    </div>
  );
}
