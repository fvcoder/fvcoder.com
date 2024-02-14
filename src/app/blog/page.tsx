import { CardPost } from '@/components/card/card.post';
import { Footer } from '@/components/footer';
import { getBlogList } from '@/prismic';

export default async function BlogPage() {
  const data = await getBlogList({ page: 1, pageSize: 12 });

  return (
    <div className="max-w-3xl px-4 mx-auto">
      <header className="px-5 py-10 md:py-20 min-h-40 bg-gradient-to-tr from-blue-500 to-sky-400 rounded-xl flex flex-col items-start md:items-center justify-center">
        <h1 className="text-white text-2xl md:text-3xl font-bold">
          Últimas Articulos de fvcoder
        </h1>
      </header>
      <main className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.results.map((x, i) => (
          <CardPost
            key={`blog-card-${i}`}
            slug={x.uid}
            image={x.data.image.url ?? ''}
            imageAlt={x.data.image.alt ?? ''}
            title={x.data.title[0]?.text}
            tag={(x.tags[0] ?? '').replace(/-/g, ' ')}
          />
        ))}
      </main>
      <Footer />
    </div>
  );
}
