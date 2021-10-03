import React from 'react'
import Link from 'next/link'
import AppsIcon from './../../icons/grid_20_regular.svg'
import { Menu } from '@headlessui/react'
import Img from 'next/image'
import { appsList } from './../../services/core/apps'

export default function AppsDroptodown(): JSX.Element {
  return (
    <Menu as="div" className="md:relative py-2">
      <Menu.Button
        className="btn btn-outline--nv-item btn-center h-full"
        type="button"
      >
        <Img src={AppsIcon} alt="apps" />
        <span className="ml-2 hidden md:inline">Aplicaciones</span>
      </Menu.Button>
      <Menu.Items className="absolute origin-bottom-right left-0 md:-left-0 md:right-0 w-screen md:w-56 mt-2 shadow bg-win-100 rounded z-30">
        {appsList.map((x, i) => (
          <Menu.Item key={`AppsDroptodown${i}`}>
            <Link href="/loproda">
              <a className="justify-start btn w-full hover:bg-win-150 active:bg-win-200">
                <div className="mr-3">
                  <Img src={x.icon} alt="apps" />
                </div>
                <div className="my-2">
                  <p className="m-0">{x.name}</p>
                  <small>{x.description}</small>
                </div>
              </a>
            </Link>
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  )
}
