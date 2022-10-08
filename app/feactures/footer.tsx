import { Logo } from "~/components/logo";
import { socialNetwork } from "~/data/newtwork.data";

export function Footer(): JSX.Element {
  return (
    <footer className="flex flex-col items-center justify-between p-6 bg-white dark:bg-gray-900 sm:flex-row">
        <Logo />
        <p className="text-sm text-gray-600 dark:text-gray-300">© Copyright 2022. All Rights Reserved.</p>

        <div className="flex -mx-2">
            {socialNetwork.map((x, i) => (
              <a href={x.link} className="mx-2 text-gray-600 transition-colors duration-300 transform dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label={x.name} target="_blank" key={`navbar-social-network-${i}`} rel="noreferrer">
                <x.icon className="w-5 h-5 fill-current" title={x.name} />
              </a>
            ))}
        </div>
    </footer>
  )
}
