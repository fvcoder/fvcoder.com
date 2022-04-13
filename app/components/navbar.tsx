import { Link } from "remix";
import IconImg from "./../../public/android-icon-72x72.png";
import IconDarkImg from "./../../public/logo-dark/android-icon-72x72.png";

export function Navbar(): JSX.Element {
  return (
    <nav className="h-auto w-full flex items-center justify-between px-4 py-2 bg-white dark:bg-slate-900 dark:shadow-md">
      <Link to="/" className="select-none">
        <picture>
          <source
            srcSet={IconDarkImg}
            width={40}
            height={40}
            media="(prefers-color-scheme: dark)"
          />
          <img
            className="inline-block"
            src={IconImg}
            width={40}
            height={40}
            alt="Fernando Ticona`s Icon"
          />
        </picture>
        <span className="ml-2 hidden md:inline-block dark:text-slate-100">
          Fernando Ticona
        </span>
      </Link>
      <Link
        to="/about"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Acerca de
      </Link>
    </nav>
  );
}
