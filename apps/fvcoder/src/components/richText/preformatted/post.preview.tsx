export function PreviewPost({ t }: { t: string }): JSX.Element | null {
  const re = "blog:preview";
  if (t.startsWith(re)) {
    return (
      <div>
        <h4>Anterior Articulo</h4>
        {t.replace(re, "")}
      </div>
    );
  }

  return null;
}
