/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import Link from 'next/link';

import { ArrowLeftIcon } from '@/assets/icons/arrowLeft';
import { Footer } from '@/components/footer';
import { RenderRichText } from '@/components/richText';
import { getBlogBySlug } from '@/prismic';
import { PageProps } from '@/types/next.page';

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
    <div className="px-4 mx-auto prose py-10">
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
          <span>Ver mas Articulos</span>
        </Link>
      </div>
      <Footer />
    </div>
  );
}
