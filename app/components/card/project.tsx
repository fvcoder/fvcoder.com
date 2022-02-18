import { Link } from "remix";
import { PrismicDocumentMeta } from "~/services/prismic";

export function CardProject({
  uid,
  title,
  image,
}: Omit<PrismicDocumentMeta, "lastPublicationDate">): JSX.Element {
  return (
    <Link
      to={`/project/${uid}`}
      className="block shadow hover:bg-slate-200 border border-slate-300 rounded-b-md mb-4"
    >
      <img src={image} className="w-full h-auto" alt={`Portada de ${title}`} />
      <p className="p-2 truncate">{title}</p>
    </Link>
  );
}
