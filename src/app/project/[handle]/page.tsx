import { Footer } from '@/components/footer';
import { Container } from '@/features/core/components/container';

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
        <p>
          Programar no es más que dar un montón de instrucciones detalladas a
          una máquina para que esta realice una función o resuelva un problema.
        </p>
      </article>
      <Footer />
    </Container>
  );
}
