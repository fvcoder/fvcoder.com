import { Navbar} from 'flowbite-react'
import IconImg from "./../../public/android-icon-72x72.png";
import IconDarkImg from "./../../public/logo-dark/android-icon-72x72.png";

export function NavbarDefault(): JSX.Element {
  return (
    <Navbar
      fluid={true}
      rounded={true}
    >
      <Navbar.Brand href="/">
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
        <span className="ml-2 hidden md:inline-block dark:text-slate-100">Fernando Ticona</span>
      </Navbar.Brand>
    </Navbar>
  )
}
