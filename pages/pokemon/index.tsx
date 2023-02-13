import Layout from '@/components/Layout'
import PokemonList from '@/components/PokemonList'
import { GetStaticProps } from 'next';
import { PokemonIndexPageProps } from '@/interfaces/pokemon';
import { getPokemons } from '@/utils/pokemon-utils';
import LinkButton from '@/components/LinkButton';

const WithStaticProps = ({pokemons, error}: PokemonIndexPageProps) => {
  if (error) {
    return (
      <Layout title="Error for All Pokemon">
        <p>
          <span style={{ color: 'red' }}>Error:</span> {error}
        </p>
      </Layout>
    )
  }

  return (
    <Layout title="All 1008 Pokemon">
      <h1 className="text-7xl mb-7">All 1008 Pokemon</h1>
      {pokemons.length > 0 ?
      <>
        <PokemonList pokemons={pokemons} />
        <div className='mt-8 px-8 w-full mx-auto md:w-1/2 lg:w-1/3'>
          <LinkButton href="/">Go Home</LinkButton>
        </div>
      </>
      : <div>Loading...</div>}
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const result = getPokemons({ offset: 0, limit: 1008, generationPath: 'pokemon' })

    return result
  } catch (error) {
    return {
      props: { error }
    }
  }
}

export default WithStaticProps
