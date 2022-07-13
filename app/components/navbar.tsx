import IconImg from './../../public/android-icon-72x72.png'
import classnames from 'classnames'
import { Link } from '@remix-run/react'

export function NavbarDefault(): JSX.Element {
  return (
    <nav className={classnames('p-2 bg-white dark:bg-gray-800')}>
      <div className="container mx-auto flex gap-4 items-center justify-between">
        <Link className="flex items-center" to="/">
          <picture>
            <img
              src={IconImg}
              width={30}
              height={30}
              alt="Fernando Ticona`s Icon"
            />
          </picture>
          <span className="ml-2 inline-block text-gray-500 dark:text-slate-100 text-sm">
            Fernando Ticona
          </span>
        </Link>
      </div>
    </nav>
  )
}
