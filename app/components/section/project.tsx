import { Link } from "@remix-run/react";
import { TitleSection } from "~/components/section/titleSection";
import type { getProjectListRes } from "~/prismic/project.list";

export interface ProjectSectionProps {
  data: getProjectListRes['data']
}

export function ProjectSection({ data }: ProjectSectionProps): JSX.Element {
  return (
    <section className="bg-white dark:bg-gray-900 py-8 px-4">
        <div className="container mx-auto">
          <TitleSection title={"🙌 My Projects"} subTitle={"I believe there is much to create"} />
            <div className="py-6 mx-auto">
              {data.map((x, i) => {
                return (
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2" key={`project-index-${i}`}>
                      <div className="lg:flex">
                          <img className="object-cover w-full h-56 rounded-lg lg:w-64" src={x.logo} alt={x.logoAlt ?? x.title} />

                          <div className="flex flex-col justify-between py-6 lg:mx-6">
                              <Link to={`/project/${x.uid}`} className="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                                  {x.title}
                              </Link>

                              <span className="text-sm text-gray-500 dark:text-gray-300">{x.lastPublicationDate}</span>
                          </div>
                      </div>
                  </div>
                )
              })}
              <Link to="/project" className="text-sm text-gray-500 dark:text-gray-300 py-4 block w-fit ml-auto hover:underline">See All -&gt;</Link>
            </div>
        </div>
      </section>
  )
}
