import { NewBlogPage } from '@/features/blog/page/blog.new';
import { getMetadata } from '@/features/core/utils/metadata';

// TODO: Agregar funcionalidad

export const metadata = getMetadata({
  title: 'Nuevo Articulo | Blog de Fernando Ticona | fvcoder',
  robots: 'noindex, nofollow',
});

export default function NewBlogPageServer() {
  return <NewBlogPage />;
}
