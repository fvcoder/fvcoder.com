import { Link } from "remix";
import { PrismicDocumentMeta } from "~/services/prismic";

export function CardPost({
  uid,
  title,
  image,
  lastPublicationDate,
}: PrismicDocumentMeta): JSX.Element {
  return (
    <Link
      to={`/blog/${uid}`}
      className="flex items-start md:items-center flex-col md:flex-row gap-4 py-2 hover:bg-slate-200"
    >
      <img
        src={image}
        className="w-full h-auto md:h-28 md:w-auto"
        alt={`Portada de ${title}`}
      />
      <div className="md:flex-1 text-left">
        <h3 className="mb-2 text-base">{title}</h3>
        <p className="text-sm">{lastPublicationDate}</p>
      </div>
    </Link>
  );
}
