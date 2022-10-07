import { Link } from "@remix-run/react";
import type { getTestimonialListRes } from "~/prismic/testimonial.list";
import { TitleSection } from "./titleSection";
import classNames from "classnames";

export interface TestimonialSectionProps {
  data: getTestimonialListRes['data']
  noSeeAll?: boolean
}


export function TestimonialSection({ data, noSeeAll }: TestimonialSectionProps): JSX.Element {
  return (
    <section className="relative flex overflow-hidden bg-white dark:bg-gray-900 px-4">

        <div className={classNames("w-full py-10", {"min-h-screen": !noSeeAll})}>
          <div className="container mx-auto">
            <TitleSection title={"🤠 Testimonials"} subTitle={"Thanks to all"} />
            <div className="grid w-full grid-cols-1 gap-8 mt-8 2xl:grid-cols-4 lg:mt-16 md:grid-cols-2 lg:grid-cols-3">
              {data.map((x, i) => {
                return (
                  <div className="w-full p-8 bg-white rounded-md shadow-lg dark:bg-gray-800 flex flex-col" key={`testimonial-item-${i}`}>
                    <p className="leading-loose text-gray-500 dark:text-gray-400 flex-1 flex items-center">
                        “ {x.testimonial} ”
                    </p>

                    <div className="flex items-center mt-6 -mx-2">
                        <img className="object-cover mx-2 rounded-full w-14 h-14" src={x.profile} alt={x.profileAlt} />

                        <div className="mx-2">
                            <h1 className="font-semibold text-gray-800 dark:text-white">{x.name}</h1>
                            <span className="text-sm text-gray-500 dark:text-gray-400">{x.relationship}</span>
                        </div>
                    </div>
                  </div>
                )
              })}

            </div>

            {!noSeeAll && <Link to="/testimonials" className="text-sm text-gray-500 dark:text-gray-300 py-4 block w-fit ml-auto hover:underline">See All -&gt;</Link>}

          </div>
        </div>
    </section>
  )
}
