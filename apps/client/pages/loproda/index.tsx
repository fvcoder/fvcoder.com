import React from 'react'
import { NextPage } from 'next'
import { NavbarPublic } from '../../components/navbar'

const IndexLoproda: NextPage = () => {
  return (
    <>
      <NavbarPublic app="Loproda" />
      <div className="container mx-auto py-10">
        <p className="text-center">En Construccion</p>
      </div>
    </>
  )
}

export default IndexLoproda
