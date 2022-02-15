export function Footer(): JSX.Element {
  return (
    <footer className="container mx-auto px-4 md:px-0 py-6 md:py-12 text-dark">
      <p className="text-base mb-2">
        Diseñado y desarrollado por Fernando Ticona
      </p>
      <p className="text-base">
        Diseñado en{" "}
        <a
          href="https://figma.com"
          className="text-red underline"
          target="_blank"
          rel="noreferrer"
        >
          Figma
        </a>
        , desarrollado con{" "}
        <a
          href="https://remix.run"
          className="text-yellow-500 underline"
          target="_blank"
          rel="noreferrer"
        >
          Remix js
        </a>{" "}
        y hosteado por{" "}
        <a
          href="https://vercel.com"
          className="text-blue-400 underline"
          target="_blank"
          rel="noreferrer"
        >
          Vercel
        </a>
      </p>
    </footer>
  );
}
