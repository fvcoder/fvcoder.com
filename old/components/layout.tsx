import { FC, PropsWithChildren } from 'react'
import ProgressBar from 'nextjs-progressbar'
import { Navbar } from './navbar'
import { Footer } from './footer'

export const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <>
      <ProgressBar />
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
