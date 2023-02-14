import { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import LinkedInIcon from './LinkedInIcon'
import GithubIcon from './GithubIcon'
import { NAV_LINKS } from '@/utils/pokemon-constants'

type LayoutProps = {
  children: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: LayoutProps) => (
  <div className="flex flex-col h-screen justify-between">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="language" lang='en'/>
    </Head>
    <header className='border-b-2 border-stone-400'>
      <nav className='p-2'>
        {NAV_LINKS.map((link)=>
          <div key={link.key} className="align-middle inline-flex justify-center gap-2 hover:underline">
            <Link href={link.url}>{link.name}</Link>
            <span className='mx-2'>|</span>
          </div>
        )}
      </nav>
    </header>
    <main className="container mx-auto mt-4 mb-8">
      {children}
    </main>
    <footer className="flex flex-col border-t-2 border-stone-400 gap-4 items-center py-4">
      <div className="flex flex-row gap-4">
        <Link className='inline-flex gap-2' href="https://github.com/kimdolion/pokemon-charity-battle" target="_blank" title="Github Repo"><GithubIcon height={30} width={30} fill={'white'} /> </Link>
        <Link href="https://linkedin.com/in/kimberly-wilkes" target="_blank" title="Connect on LinkedIn"><LinkedInIcon height={30} width={30} fill={'white'} /></Link>
      </div>
      <span>Images are the property of Nintendo/Pokemon</span>
    </footer>
    </div>
)

export default Layout
