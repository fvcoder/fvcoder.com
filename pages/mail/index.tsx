import React from 'react'
import { NextPage } from 'next'

import { useSession } from 'next-auth/client'
import { NavbarAuth } from '../../components/navbar'

function Layout(p: React.PropsWithChildren<unknown>): JSX.Element {
  const [session] = useSession()

  if (!session?.user) {
    return <main>{p.children}</main>
  }
  return (
    <div>
      <NavbarAuth />
      <main>{p.children}</main>
    </div>
  )
}

const MailPage: NextPage = () => {
  return (
    <Layout>
      <div>este va a ser el cliente mail</div>
    </Layout>
  )
}

export default MailPage
