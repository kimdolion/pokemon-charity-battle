import { GetStaticProps, GetStaticPaths } from 'next'

import { PokemonIDPageProps } from '@/interfaces/pokemon'
import Layout from '@/components/Layout'
import PokemonListDetail from '@/components/PokemonListDetail'
import { capitalizeName, getPokemonID } from '@/utils/pokemon-utils';
import { POKE_API } from '@/utils/pokemon-constants';

const StaticPropsDetail = ({ pokemon, error, name }: PokemonIDPageProps) => {

  if (error) {
    return (
      <Layout title="Error for a Johto Pokemon">
        <p>
          <span style={{ color: 'red' }}>Error:</span> {error}
        </p>
      </Layout>
    )
  }

  return (
    <Layout
      title={`${name} #${pokemon.id}`}
    >
      <PokemonListDetail pokemon={pokemon} />
    </Layout>
  )
}

export default StaticPropsDetail

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await POKE_API.listPokemons(151, 100)
  const results = await response.results
  const paths = results.map((pokemon: { name: string, url: string })=> ({
    params: {id: getPokemonID(pokemon.url)}
  }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const pokemon = await POKE_API.getPokemonById(Number(params?.id))
    const name = capitalizeName(pokemon.name)

    return {
      props: { pokemon, name }
    }
  } catch(error) {
    return {
      props: { error }
    }
  }
}
