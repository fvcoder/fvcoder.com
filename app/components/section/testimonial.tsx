import { TitleSection } from "./titleSection";

export function TestimonialSection(): JSX.Element {
  return (
    <section className="relative flex overflow-hidden bg-white dark:bg-gray-900">

        <div className="w-full min-h-screen py-10">
          <div className="container mx-auto">
            <TitleSection title={"🤠 Testimonials"} subTitle={"Thanks to all"} />
            <div className="grid w-full grid-cols-1 gap-8 mt-8 2xl:grid-cols-4 lg:mt-16 md:grid-cols-2 lg:grid-cols-3">
                <div className="w-full p-8 bg-white rounded-md shadow-lg dark:bg-gray-700">
                    <p className="leading-loose text-gray-500 dark:text-gray-400">
                        “ Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ea tempora dolores qui eius pariatur
                        odit ad voluptas iste, cum accusantium beatae tempore quasi nesciunt distinctio. ”
                    </p>

                    <div className="flex items-center mt-6 -mx-2">
                        <img className="object-cover mx-2 rounded-full w-14 h-14" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />

                        <div className="mx-2">
                            <h1 className="font-semibold text-gray-800 dark:text-white">Robbert</h1>
                            <span className="text-sm text-gray-500 dark:text-gray-400">CTO, Robert Consultency</span>
                        </div>
                    </div>
                </div>

                <div className="w-full p-8 bg-white rounded-md shadow-lg dark:bg-gray-800">
                    <p className="leading-loose text-gray-500 dark:text-gray-400">
                        “ Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ea tempora dolores qui eius pariatur
                        odit ad voluptas iste, cum accusantium beatae tempore quasi nesciunt distinctio. ”
                    </p>

                    <div className="flex items-center mt-6 -mx-2">
                        <img className="object-cover mx-2 rounded-full w-14 h-14" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80" alt="" />

                        <div className="mx-2">
                            <h1 className="font-semibold text-gray-800 dark:text-white">Jeny Doe</h1>
                            <span className="text-sm text-gray-500 dark:text-gray-400">CEO, Jeny Consultency</span>
                        </div>
                    </div>
                </div>

                <div className="w-full p-8 bg-white rounded-md shadow-lg dark:bg-gray-800 md:hidden lg:block">
                    <p className="leading-loose text-gray-500 dark:text-gray-400">
                        “ Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ea tempora dolores qui eius pariatur
                        odit ad voluptas iste, cum accusantium beatae tempore quasi nesciunt distinctio. ”
                    </p>

                    <div className="flex items-center mt-6 -mx-2">
                        <img className="object-cover mx-2 rounded-full w-14 h-14" src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

                        <div className="mx-2">
                            <h1 className="font-semibold text-gray-800 dark:text-white">Mia Brown</h1>
                            <span className="text-sm text-gray-500 dark:text-gray-400">Marketing Manager at Stech</span>
                        </div>
                    </div>
                </div>

                <div className="w-full p-8 bg-white rounded-md shadow-lg dark:bg-gray-800 md:hidden 2xl:block">
                    <p className="leading-loose text-gray-500 dark:text-gray-400">
                        “ Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ea tempora dolores qui eius pariatur
                        odit ad voluptas iste, cum accusantium beatae tempore quasi nesciunt distinctio. ”
                    </p>

                    <div className="flex items-center mt-6 -mx-2">
                        <img className="object-cover mx-2 rounded-full w-14 h-14" src="https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

                        <div className="mx-2">
                            <h1 className="font-semibold text-gray-800 dark:text-white">Lead Designer</h1>
                            <span className="text-sm text-gray-500 dark:text-gray-400">Developer at Stech</span>
                        </div>
                    </div>
                </div>
            </div>

            <a href="#" className="text-sm text-gray-500 dark:text-gray-300 py-4 block w-fit ml-auto hover:underline">See All -&gt;</a>

          </div>
        </div>
    </section>
  )
}
