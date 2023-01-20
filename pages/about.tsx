import Layout from '../components/Layout'
import Link from 'next/link'

const AboutPage = () => (
  <Layout title="Pokemon Marketplace">
    <h1>About Pokemon Marketplace</h1>
    <p>This is the about page</p>
    <p>This project was created as a show of skill with Nextjs, Typescript, Stripe, and TailwindCSS.</p>
    <div>
      <Link href="https://vercel.com/guides/getting-started-with-nextjs-typescript-stripe">Tutorial for NextJS, TS, and Stripe</Link>
      <Link href="https://pokeapi.co/">Learn more about PokeAPI</Link>
      <Link href="/">Go home</Link>
    </div>
  </Layout>
)

export default AboutPage
