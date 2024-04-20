import Link from 'next/link';

import { GithubIconBrand } from '@/assets/icons/brand/github';
import { LinkedInIconBrand } from '@/assets/icons/brand/linkedin';

export function Footer() {
  return (
    <footer className="w-full max-w-3xl mx-auto md:pb-5 lg:pb-10 not-prose">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm sm:text-center text-yellow-800/90 dark:text-yellow-200/90">
          Hecho con el &#x2764; por{' '}
          <Link href="/" className="hover:underline">
            Fernando Ticona
          </Link>
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium dark:text-white/90 sm:mt-0">
          <li>
            <a
              href="https://www.linkedin.com/in/fvcoder/"
              className="flex items-center me-4 md:me-6"
            >
              <LinkedInIconBrand width={18} height={18} />
            </a>
          </li>
          <li>
            <a href="https://github.com/fvcoder/" className="flex items-center">
              <GithubIconBrand width={18} height={18} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
