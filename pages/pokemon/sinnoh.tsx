import Link from 'next/link'

import Layout from '@/components/Layout'
import PokemonList from '@/components/PokemonList'
import { GetStaticProps } from 'next';
import { PokemonPageProps } from '@/interfaces/pokemon';
import { getPokemonID } from '@/utils/get-pokemon-id';
import { POKE_API, SPRITE_IMAGES } from '@/constants';

const WithStaticProps = ({pokemons}: PokemonPageProps) => {
  return (
    <Layout title="Sinnoh Pokemon">
      <h1 className="text-7xl my-7">Sinnoh Pokemon</h1>
      <p>You are currently on: /pokemon</p>
      <PokemonList pokemons={pokemons} />
      <p>
      <Link href="/">Go home</Link>
      </p>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
      const response = await POKE_API.listPokemons(251, 386)
      const results = await response.results
      const pokemons = results.map((pokemon: { name: string, url: string }) => {
          const pokemonID = getPokemonID(pokemon.url)
          const image = `${SPRITE_IMAGES.defaultFront}/${pokemonID}.png`

        return {...pokemon, image, id: pokemonID}
      })
      return {
        props: { pokemons }
    }
  } catch (error) {
    console.log(error)
    return {
      props: { notFound: true }
    }
  }
}

export default WithStaticProps
