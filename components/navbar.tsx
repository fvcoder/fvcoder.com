import Link from 'next/link'
import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/client'
import { Menu, Transition } from '@headlessui/react'
import UserIconOut from '@heroicons/react/outline/UserIcon'
import UserIconSol from '@heroicons/react/solid/UserIcon'
import CogIconOut from '@heroicons/react/outline/CogIcon'
import CogIconSol from '@heroicons/react/solid/CogIcon'
import LogoutIconOut from '@heroicons/react/outline/LogoutIcon'
import LogoutIconSol from '@heroicons/react/solid/LogoutIcon'

function ProfileBtn() {
  const [session, loading] = useSession()

  if (typeof window !== 'undefined' && loading) return null

  if (!session) {
    return (
      <button className="btn btn-primary inline-block" onClick={() => signIn()}>
        Iniciar Sesion
      </button>
    )
  }

  const options = [
    { name: 'Mi Perfil', path: '/me', Icon: UserIconSol, IconOut: UserIconOut },
    {
      name: 'Ajustes',
      path: '/me/settings',
      Icon: CogIconSol,
      IconOut: CogIconOut
    }
  ]

  return (
    <div className="relative pl-1 pt-1">
      <Menu>
        <Menu.Button className="p-1 select-none">
          <img
            src={session.user.image}
            alt="Imagen de perfil"
            className="rounded-full"
            width={29}
            height={29}
          />
        </Menu.Button>
        <Transition
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Menu.Items
            as="ul"
            className="absolute right-0 w-full md:w-56 mt-3 origin-top-right bg-white divide-y divide-gr-500 rounded-md shadow-md focus:outline-none border border-gr-500"
          >
            {options.map((x, i) => (
              <Menu.Item key={`DroptodownProfile${i}`}>
                {({ active }) => (
                  <Link href={x.path}>
                    <a
                      className={`${
                        active ? 'bg-gray-100' : 'bg-white'
                      } py-3 px-2.5 rounded-md font-inter text-sm leading-normal cursor-pointer flex items-center focus:bg-gray-100 hover:bg-gray-100`}
                    >
                      {active ? (
                        <x.Icon width={20} />
                      ) : (
                        <x.IconOut width={20} />
                      )}
                      <span className="ml-2">{x.name}</span>
                    </a>
                  </Link>
                )}
              </Menu.Item>
            ))}
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`${
                    active ? 'bg-red-100' : 'bg-white'
                  }  py-3 px-2.5 rounded-md text-red-500 font-inter text-sm leading-normal cursor-pointer flex items-center`}
                  onClick={() => signOut()}
                >
                  {active ? (
                    <LogoutIconSol width={20} />
                  ) : (
                    <LogoutIconOut width={20} />
                  )}
                  <span className="ml-2">Cerrar Sesion</span>
                </a>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}

export function Navbar(): JSX.Element {
  const links = [
    { name: 'Recompensas', path: '/' },
    { name: 'Proyectos', path: '/' }
  ]
  return (
    <>
      <nav className="py-5 border-b border-gr-500">
        <div className="container mx-auto flex justify-between px-4 md:px-0 items-center">
          <div>
            <Link href="/">
              <a
                role="img"
                aria-label="Thefersh.com logo"
                className="font-inter text-sm font-bold inline-block select-none"
              >
                Thefersh.com
              </a>
            </Link>
            <div className="hidden md:inline-grid ml-8 gap-8 grid-rows-1 grid-flow-col">
              {links.map((x, i) => (
                <Link href={x.path} key={`nvLinksBig${i}`}>
                  <a className="text-sm font-inter leading-5 cursor-pointer font-medium select-none">
                    {x.name}
                  </a>
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center">
            <button
              className="btn btn-primary inline-block"
              onClick={() => signIn()}
            >
              Iniciar Sesion
            </button>
          </div>
        </div>
      </nav>
    </>
  )
}

export function NavbarAuth() {
  return (
    <nav className="w-full h-16 border-b border-gr-500 flex justify-between items-center p-2">
      <Link href="/">
        <a
          role="img"
          aria-label="Thefersh.com logo"
          className="font-inter text-sm font-bold inline-block select-none"
        >
          Thefersh.com
        </a>
      </Link>
      <div>
        <ProfileBtn />
      </div>
    </nav>
  )
}
