import { useState } from "react"
import { Link } from "@remix-run/react"
import classNames from 'classnames'
import { socialNetwork } from "~/data/newtwork.data"
import { Logo } from "~/components/logo"

export function Navbar(): JSX.Element {
  const [open, setOpen] = useState(false)
  return (
    <nav className="bg-white shadow dark:bg-gray-800">
    <div className="container px-6 py-4 mx-auto">
        <div className="lg:flex lg:items-center">
            <div className="flex items-center justify-between">
                <Logo />
                <div className="flex lg:hidden">
                    <button onClick={() => setOpen(!open)} type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                      {open ? (<svg x-show="isOpen" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>) : (<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                        </svg>)}



                    </button>
                </div>
            </div>

            <div className={classNames("absolute inset-x-0 z-20 flex-1 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center lg:justify-between", {
              'translate-x-0 opacity-100': open,
              'opacity-0 -translate-x-full': !open
            })}>
                <div className="flex flex-col text-gray-600 capitalize dark:text-gray-300 lg:flex lg:px-16 lg:-mx-4 lg:flex-row lg:items-center">
                    <Link to="/blog" className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200">Blog</Link>
                </div>

                <div className="flex justify-center mt-6 lg:flex lg:mt-0 lg:-mx-2">
                  {socialNetwork.map((x, i) => (
                    <a href={x.link} className="mx-2 text-gray-600 transition-colors duration-300 transform dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label={x.name} target="_blank" key={`navbar-social-network-${i}`} rel="noreferrer">
                        <x.icon className="w-5 h-5 fill-current" title={x.name} />
                    </a>
                  ))}
                </div>
            </div>
        </div>
    </div>
</nav>
  )
}
