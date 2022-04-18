import { FC, useState } from "react";
import { PrismicDocumentMeta } from "~/services/prismic";
import { Link } from "remix";

interface CarrouselProps {
  data: PrismicDocumentMeta[];
  slides?: number;
}

export const Carrousel: FC<CarrouselProps> = ({ data, slides }) => {
  const slide = (slides || 4) - 1;
  const [item, setItem] = useState(0);

  const activeClasses = "bg-blue-500";
  const inactiveClasses =
    "bg-black/50 dark:bg-gray-800/50 hover:bg-black dark:hover:bg-gray-800";

  function next() {
    if (item === 3) {
      setItem(0);
    } else {
      setItem(item + 1);
    }
  }

  function prev() {
    if (item === 0) {
      setItem(3);
    } else {
      setItem(item - 1);
    }
  }

  return (
    <div id="carousel-header" className="relative" data-carousel="static">
      <div className="overflow-hidden relative h-56 md:rounded-lg sm:h-64 xl:h-80 2xl:h-96">
        {data.map((x, i) => {
          if (i <= slide) {
            const imgUrlSm = new URL(x.image);
            const imgUrlMd = new URL(x.image);
            const imgUrlLg = new URL(x.image);

            imgUrlSm.searchParams.set("w", "300");
            imgUrlMd.searchParams.set("w", "500");
            imgUrlLg.searchParams.set("w", "1000");
            return (
              <div
                key={`carrousel-item-slide-${i}`}
                className={
                  "transition duration-700 ease-in-out absolute inset-0 transform " +
                  (item === i ? "translate-x-0 z-20" : "") +
                  (item > i ? "-translate-x-full z-20" : "") +
                  (item < i ? "translate-x-full z-20" : "")
                }
                aria-current={item === i ? "true" : "false"}
                data-carousel-item
              >
                <Link to={`/blog/${x.uid}`}>
                  <img
                    srcSet={`${imgUrlSm.href} 300w, ${imgUrlMd.href} 500w, ${imgUrlLg.href} 1000w`}
                    src={x.image}
                    className="block absolute top-1/2 left-1/2 w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 md:left-0 md:translate-x-0 md:w-2/4 md:rounded-lg"
                    alt={x.imageAlt}
                  />
                </Link>
                <div className="absolute left-5 bottom-7 z-10 text-black md:dark:text-white md:inset-0 md:w-2/4 md:ml-auto md:flex md:flex-col md:justify-center md:p-4">
                  <Link to={`/blog/${x.uid}`}>
                    <h3 className="text-2xl">{x.title}</h3>
                  </Link>
                  <p className="my-2 text-black/50 dark:text-white/50 hidden md:block">
                    {x.description}
                  </p>
                  <div className="mt-2">
                    {x.tags.map((y, z) => {
                      if (z <= 2) {
                        return (
                          <Link
                            to={`/tag/${y}`}
                            className="bg-gray-100 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300 inline-block"
                            key={`carrousel-item-${i}-tag-${z}`}
                          >
                            {y}
                          </Link>
                        );
                      }
                      return null;
                    })}
                  </div>
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
      <div className="flex absolute bottom-2.5 left-1/2 z-30 space-x-3 -translate-x-1/2">
        {data.map((x, i) => {
          if (i <= slide) {
            return (
              <button
                key={`carrousel-button-slide-${i}`}
                type="button"
                className={
                  "w-3 h-3 rounded-full " +
                  (item === i ? activeClasses : inactiveClasses)
                }
                aria-current={item === i ? "true" : "false"}
                aria-label={x.title}
                carousel-slide-to={i + 1}
                onClick={() => setItem(i)}
              ></button>
            );
          }
          return null;
        })}
      </div>
      <button
        type="button"
        className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
        onClick={prev}
        data-carousel-prev
      >
        <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-black/30 dark:bg-gray-800/30 group-hover:bg-black/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
          <span className="hidden">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
        onClick={next}
        data-carousel-next
      >
        <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-black/30 dark:bg-gray-800/30 group-hover:bg-black/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
          <span className="hidden">Next</span>
        </span>
      </button>
    </div>
  );
};
