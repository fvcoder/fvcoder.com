export function NextPost({ t }: { t: string }): JSX.Element | null {
  const re = "blog:next";
  if (t.startsWith(re)) {
    return (
      <div>
        <h4>Siguiente Articulo</h4>
        {t.replace(re, "")}
      </div>
    );
  }

  return null;
}
