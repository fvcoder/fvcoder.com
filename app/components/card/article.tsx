import { FC } from "react";
import { Link } from "remix";
import { PrismicDocumentMeta } from "~/services/prismic/loader/types";

export interface ArticleCardProps {
  data: PrismicDocumentMeta;
}

export const ArticleCard: FC<ArticleCardProps> = ({ data }) => {
  const {
    uid,
    image,
    imageAlt,
    lastPublicationDate,
    title,
    description,
    tags,
  } = data;

  const imgUrlSm = new URL(image);
  const imgUrlMd = new URL(image);
  const imgUrlLg = new URL(image);

  imgUrlSm.searchParams.set("w", "300");
  imgUrlMd.searchParams.set("w", "500");
  imgUrlLg.searchParams.set("w", "1000");
  return (
    <Link to={`/blog/${uid}`}>
      <img
        className=" rounded-lg"
        srcSet={`${imgUrlSm.href} 300w, ${imgUrlMd.href} 500w, ${imgUrlLg.href} 1000w`}
        src={image}
        alt={imageAlt}
      />
      <div className="mt-8 mb-4 dark:text-white text-black">
        <span className="text-base opacity-50">{lastPublicationDate}</span>
        <h3 className="text-4xl mt-4 font-openSans">{title}</h3>
        <p className="text-base my-4 opacity-50">{description}</p>
        <div>
          {tags.map((x, i) => {
            if (i <= 2) {
              return (
                <p
                  className="bg-gray-100 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300 inline-block"
                  key={`article-item-${i}-${x}`}
                >
                  {x}
                </p>
              );
            }
            return null;
          })}
        </div>
      </div>
    </Link>
  );
};
