import { Link } from "@remix-run/react";
import { Fragment } from "react";
import { TitleSection } from "~/components/section/titleSection";
import type { PrismicDocumentMeta } from "~/types/blog";

export interface BlogSectionProps {
  data: PrismicDocumentMeta[]
}
export function BlogSection({ data }: BlogSectionProps): JSX.Element {
  return (
    <section className="bg-white dark:bg-gray-800 py-8 px-4">
        <div className="container mx-auto">
          <TitleSection title={"📒 Blog"} subTitle={"Simply evaluated my knowledge by teaching what I learn (Spanish only)"} />
            <div className="py-6 mx-auto">
                <div className="lg:flex lg:-mx-6">
                    <div className="lg:w-3/4 lg:px-6">
                        <Link to={`/blog/${data[0].uid}`}>
                          <img className="object-cover object-center w-full h-auto rounded-xl aspect-[2/1]" src={data[0].image} alt={data[0].imageAlt ?? data[0].title}/>
                        </Link>
                        <div>
                            <p className="mt-6 text-sm text-blue-500 uppercase">{data[0].tags[0] ?? "Desconocido"}</p>
                            <Link to={`/blog/${data[0].uid}`}>
                              <h1 className="max-w-lg mt-4 text-4xl font-semibold leading-tight text-gray-800 dark:text-white hover:underline hover:opacity-80">
                                  {data[0].title}
                              </h1>
                            </Link>
                        </div>
                    </div>

                    <div className="mt-8 lg:w-1/4 lg:mt-0 lg:px-6">
                      {data.map((x, i) => {
                        if (i === 0) return null
                        if (i >= 5) return null
                        return (
                          <Fragment key={`index-blog-item-${i}`}>
                            <div>
                                <h3 className="text-blue-500 capitalize">{x.tags[0] ?? "Desconocido"}</h3>

                                <Link to={`/blog/${x.uid}`} className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 ">
                                    {x.title}
                                </Link>
                            </div>

                            <hr className="my-6 border-gray-200 dark:border-gray-700" />
                          </Fragment>
                        )
                      })}

                    </div>
                </div>
                <Link to="/blog" className="text-sm text-gray-500 dark:text-gray-300 py-4 block w-fit ml-auto hover:underline">See All -&gt;</Link>
            </div>
        </div>
      </section>
  )
}
