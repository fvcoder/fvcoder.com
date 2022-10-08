import { Link } from "@remix-run/react"
import LogoImg from "./../../public/android-icon-48x48.png"

export function Logo(): JSX.Element {
  return (
    <div>
      <Link to="/" className="flex items-center gap-2 font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300 select-none">
        <img src={LogoImg} alt="thefersh logo" width={35} height={35} />
        <span className="text-base">Fernando Ticona</span>
      </Link>
    </div>
  )
}
