import Layout from '../components/Layout'
import Link from 'next/link'

const AboutPage = () => (
  <Layout title="Pokemon Charity Battle">
    <h1 className='text-2xl font-bold'>About Pokemon Charity Battle</h1>
    <p>This project was created as a show of skill with Nextjs, Typescript, Stripe, and TailwindCSS.</p>
    <p>Goal is to create a web app that allows you to donate to your favorite pokemon. Eventually will display the pokemon in a ranking list with who has the most donations as made via Stripe Checkout using a test card from Stripe.
    </p>
    <div className='flex flex-col gap-4 my-4 '>
      <Link className="hover:underline" href="https://stripe.com/docs/testing" target="_blank">Stripe Test Cards</Link>
      <Link className="hover:underline" href="https://vercel.com/guides/getting-started-with-nextjs-typescript-stripe">Tutorial for NextJS, TS, and Stripe</Link>
      <Link className="hover:underline" href="https://pokeapi.co/">Learn more about PokeAPI</Link>
      <Link className="hover:underline" href="/">Go home</Link>
    </div>
  </Layout>
)

export default AboutPage
