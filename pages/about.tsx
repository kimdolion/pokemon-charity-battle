import Link from 'next/link'
import Layout from '../components/Layout'

const AboutPage = () => (
  <Layout title="Pokemon Marketplace">
    <h1>About Pokemon Marketplace</h1>
    <p>This is the about page</p>
    <div>
      <Link href="https://pokeapi.co/">Go to the PokeAPI</Link>
      <Link href="/">Go home</Link>
    </div>
  </Layout>
)

export default AboutPage
