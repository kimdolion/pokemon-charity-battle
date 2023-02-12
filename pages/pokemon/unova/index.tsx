import Layout from '@/components/Layout'
import PokemonList from '@/components/PokemonList'
import { GetStaticProps } from 'next';
import { PokemonIndexPageProps } from '@/interfaces/pokemon';
import { getPokemonID } from '@/utils/pokemon-utils';
import { POKE_API, SPRITE_IMAGES } from '@/constants';
import LinkButton from '@/components/LinkButton';

const WithStaticProps = ({pokemons}: PokemonIndexPageProps) => {
  return (
    <Layout title="Unova Pokemon">
      <h1 className="text-7xl mb-7">Unova Pokemon</h1>
      <PokemonList pokemons={pokemons} />
      <div className='mt-8 px-8 w-full mx-auto md:w-1/2 lg:w-1/3'>
        <LinkButton href="/">Go Home</LinkButton>
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
      const response = await POKE_API.listPokemons(494, 155)
      const results = await response.results
      const pokemons = results.map((pokemon: { name: string, url: string }) => {
          const pokemonID = getPokemonID(pokemon.url)
          const image = `${SPRITE_IMAGES.defaultFront}/${pokemonID}.png`
          const pokemonPath = `/pokemon/unova/${pokemonID}`
        return {...pokemon, image, id: pokemonID, pokemonPath }
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
