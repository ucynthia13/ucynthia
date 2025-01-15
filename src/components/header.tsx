import React from 'react'
import Navbar from './navbar'
import { createClient } from '@/prismicio'

export default async function Header() {
  const client = createClient()
  const settings = await client.getSingle("settings")
  return (
    <div>
      <Navbar settings={settings}/>
    </div>
  )
}
