import { TitleSection } from "~/components/section/titleSection";

export function ProjectSection(): JSX.Element {
  return (
    <section className="bg-white dark:bg-gray-900 py-8 px-4">
        <div className="container mx-auto">
          <TitleSection title={"🙌 My Projects"} subTitle={"I believe there is much to create"} />
            <div className="py-6 mx-auto">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <div className="lg:flex">
                        <img className="object-cover w-full h-56 rounded-lg lg:w-64" src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

                        <div className="flex flex-col justify-between py-6 lg:mx-6">
                            <a href="#" className="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                                How to use sticky note for problem solving
                            </a>

                            <span className="text-sm text-gray-500 dark:text-gray-300">On: 20 October 2019</span>
                        </div>
                    </div>

                    <div className="lg:flex">
                        <img className="object-cover w-full h-56 rounded-lg lg:w-64" src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

                        <div className="flex flex-col justify-between py-6 lg:mx-6">
                            <a href="#" className="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                                How to use sticky note for problem solving
                            </a>

                            <span className="text-sm text-gray-500 dark:text-gray-300">On: 20 October 2019</span>
                        </div>
                    </div>

                    <div className="lg:flex">
                        <img className="object-cover w-full h-56 rounded-lg lg:w-64" src="https://images.unsplash.com/photo-1544654803-b69140b285a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

                        <div className="flex flex-col justify-between py-6 lg:mx-6">
                            <a href="#" className="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                                Morning routine to boost your mood
                            </a>

                            <span className="text-sm text-gray-500 dark:text-gray-300">On: 25 November 2020</span>
                        </div>
                    </div>

                    <div className="lg:flex">
                        <img className="object-cover w-full h-56 rounded-lg lg:w-64" src="https://images.unsplash.com/photo-1530099486328-e021101a494a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1547&q=80" alt="" />

                        <div className="flex flex-col justify-between py-6 lg:mx-6">
                            <a href="#" className="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                                All the features you want to know
                            </a>

                            <span className="text-sm text-gray-500 dark:text-gray-300">On: 30 September 2020</span>
                        </div>
                    </div>
                </div>
                <a href="#" className="text-sm text-gray-500 dark:text-gray-300 py-4 block w-fit ml-auto hover:underline">See All -&gt;</a>
            </div>
        </div>
      </section>
  )
}
