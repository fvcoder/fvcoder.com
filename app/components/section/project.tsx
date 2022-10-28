import { Link } from "@remix-run/react";
import { TitleSection } from "~/components/section/titleSection";
import type { getProjectListRes } from "~/prismic/project.list";

export interface ProjectSectionProps {
  data: getProjectListRes['data']
  notSeeALl?: boolean
}

export function ProjectSection({ data, notSeeALl }: ProjectSectionProps): JSX.Element {
  return (
    <section className="bg-white dark:bg-gray-900 py-8 px-4">
        <div className="container mx-auto">
          <TitleSection title={"🙌 My Projects"} subTitle={"I believe there is much to create"} />
            <div className="py-6 mx-auto">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {data.map((x, i) => {
                  return (
                    <Link to={`/project/${x.uid}`} className="flex items-center gap-4" key={`project-index-${i}`}>
                        <img className="object-cover rounded-lg w-12 h-12 lg:w-1/4 lg:h-auto aspect-square" src={x.logo} alt={x.logoAlt ?? x.title} />
                        <div className="flex flex-col justify-between py-2 lg:mx-4">
                            <Link to={`/project/${x.uid}`} className="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                                {x.title}
                            </Link>
                            <span className="text-sm text-gray-500 dark:text-gray-300">{x.lastPublicationDate}</span>
                        </div>
                    </Link>
                  )
                })}
              </div>
              {!notSeeALl && <Link to="/project" className="text-sm text-gray-500 dark:text-gray-300 py-4 block w-fit ml-auto hover:underline">See All -&gt;</Link>}
            </div>
        </div>
      </section>
  )
}
