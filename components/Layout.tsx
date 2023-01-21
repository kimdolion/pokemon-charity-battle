import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/">Home</Link> | <Link href="/about">About</Link> |{' '}
        <Link href="/users">Users List</Link> |{' '}
        <Link href="/pokemon">Pokemons List</Link> |{' '}
        <Link href="/api/pokemon">Pokemons API</Link>
      </nav>
    </header>
    {children}
    <footer>
      <hr />
      <span>Made by <Link href="https://linkedin.com/in/kimberly-wilkes" target="_blank">Kimberly Wilkes</Link></span>
    </footer>
    </div>
)

export default Layout
