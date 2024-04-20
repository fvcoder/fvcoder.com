import { Footer } from '@/components/footer';
import { Container } from '@/features/core/components/container';
import { EditorRender } from '@/features/core/components/editor.render';

const content = {
  time: 1713540105005,
  blocks: [],
};

export default function ProjectDetailPage() {
  return (
    <Container className="prose dark:prose-invert py-10" fullWidth>
      <header className="text-center pb-4">
        <span className="block mb-4">
          <time>17 de abril de 2024</time>
        </span>
        <div>
          <h1>
            Así es como aprendí a programar, mi plan de estudios + Cursos Gratis
          </h1>
          <div className="aspect-video bg-black rounded-md"></div>
        </div>
      </header>
      <article>
        <EditorRender content={{}} />
      </article>
      <Footer />
    </Container>
  );
}
