import React from 'react'
import { useSession } from 'next-auth/client'

export default function tFalse() {
  const m = useSession()
  return <div>{JSON.stringify(m)}</div>
}
