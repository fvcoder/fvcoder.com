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
    </nav>
  );
}
