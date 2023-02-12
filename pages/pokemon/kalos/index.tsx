import Layout from '@/components/Layout'
import PokemonList from '@/components/PokemonList'
import { GetStaticProps } from 'next';
import { getPokemons } from '@/utils/pokemon-utils';
import { PokemonIndexPageProps } from '@/interfaces/pokemon';
import LinkButton from '@/components/LinkButton';

const WithStaticProps = ({pokemons}: PokemonIndexPageProps) => {
  return (
    <Layout title="Kalos Pokemon">
      <h1 className="text-7xl mb-7">Kalos Pokemon</h1>
      <PokemonList pokemons={pokemons} />
      <div className='mt-8 px-8 w-full mx-auto md:w-1/2 lg:w-1/3'>
        <LinkButton href="/">Go Home</LinkButton>
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const result = getPokemons({limit: 71, offset: 650, generationPath: 'pokemon/kalos'})

    return result
  } catch (error) {
    console.log(error)
    return {
      props: { notFound: true }
    }
  }
}

export default WithStaticProps
