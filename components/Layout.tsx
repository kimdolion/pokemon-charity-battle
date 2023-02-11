import { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import LinkedInIcon from './LinkedInIcon'
import GithubIcon from './GithubIcon'

type Props = {
  children: ReactNode
  title?: string
}

const linkList = [
  { name: 'Home', url: "/", key: 'home-page' }, 
  { name: 'About', url: "/about", key: 'about-page' }, 
  { name: 'All Pokemon', url: "/pokemon", key: 'all-pokemon-page' }, 
  { name: 'Kanto Pokemon', url: "/pokemon/kanto", key: 'kanto-page' }, 
  { name: 'Johto Pokemon', url: "/pokemon/johto", key: 'johto-page' }, 
  { name: 'Sinnoh Pokemon', url: "/pokemon/sinnoh", key: 'sinnoh-page' }, 
  { name: 'Unova Pokemon', url: "/pokemon/unova", key: 'unova-page' }, 
  { name: 'Kalos Pokemon', url: "/pokemon/kalos", key: 'kalos-page' }, 
  { name: 'Alola Pokemon', url: "/pokemon/alola", key: 'alola-page' }, 
  { name: 'Galar Pokemon', url: "/pokemon/galar", key: 'galar-page' }, 
  { name: 'Paldea Pokemon', url: "/pokemon/paldea", key: 'paldea-page' }, 
]

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div className="flex flex-col h-screen justify-between">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header className='border-b-2 border-stone-400'>
      <nav className='p-2'>
        {linkList.map((link)=> 
          <div key={link.key} className="align-middle inline-flex justify-center gap-2">
            <Link href={link.url}>{link.name}</Link>
            <span className='mx-2'>|</span>
          </div>
        )}
      </nav>
    </header>
    <main className="container mx-auto">
      {children}
    </main>
    <footer className="flex flex-col border-t-2 border-stone-400 gap-4 justify-center items-center py-4">
      <div className="flex flex-row gap-4">
        <Link href="https://linkedin.com/in/kimberly-wilkes" target="_blank" title="Connect on LinkedIn"><LinkedInIcon height={30} width={30} fill={'white'} /></Link>
        <Link className='inline-flex gap-2' href="https://linkedin.com/in/kimberly-wilkes" target="_blank" title="Github Repo"><GithubIcon height={30} width={30} fill={'white'} /> </Link>
      </div>
      <span>Images are the property of Nintendo/Pokemon</span>
    </footer>
    </div>
)

export default Layout
