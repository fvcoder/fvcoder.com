import { socialNetwork } from "~/data/newtwork.data";
import ProfileImg from "public/46249834.png"
/*
      <main className="bg-white w-full px-4 flex flex-col gap-4">
      </main>
      */

export default function LinkPage(): JSX.Element {
  return (
    <div className="max-w-sm mx-auto min-h-screen flex items-center">
      <section className="bg-white dark:bg-gray-900 w-full py-4 rounded-md shadow dark:shadow-none">
        <div className="flex flex-col items-center px-4 mx-auto text-center">
           <img src={ProfileImg} alt="Fernando Ticona" className=" rounded-full border-2 mb-2" width={100} height={100} />
            <h2 className="text-3xl font-bold tracking-tight text-gray-600 dark:text-white">
                Fernando Ticona
            </h2>

            <p className="block max-w-2xl text-xl text-gray-500 dark:text-gray-300">Front End Developer</p>

            <div className="mt-6 flex flex-col gap-4 items-center">
              {socialNetwork.map((x, i) => (
                <div className="inline-flex w-full mt-4 overflow-hidden rounded-lg shadow sm:w-auto sm:mx-3 sm:mt-0" key={`link-${i}`}>
                    <a href={x.link} className="inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white transition-colors duration-150 transform sm:w-auto bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-600 hover:to-blue-600">
                        <x.icon className="w-6 h-6 mx-2 fill-current" />
                        <span className="mx-2">
                            {x.name}
                        </span>
                    </a>
                </div>
              ))}
            </div>
        </div>
      </section>
    </div>
  )
}
