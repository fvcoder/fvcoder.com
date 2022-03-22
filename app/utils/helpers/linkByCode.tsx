import { LinkExternal } from "../link";

export function LinkByCodeHelper({ t }: { t: string }): JSX.Element | null {
  if (t.startsWith("document:linkcard")) {
    const links = t.replace(/document:linkcard\n/, "").split(/\n/);
    return (
      <div className="grid gap-4 grid-cols-1">
        {links.map((x, i) => (
          <LinkExternal key={`link-external-${i + 1}`} href={x} />
        ))}
      </div>
    );
  }
  return null;
}
