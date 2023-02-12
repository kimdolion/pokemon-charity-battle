import Layout from '@/components/Layout'
import PokemonList from '@/components/PokemonList'
import { GetStaticProps } from 'next';
import { Pokemon } from '@/interfaces/pokemon';
import { getPokemonID } from '@/utils/get-pokemon-id';
import { POKE_API, SPRITE_IMAGES } from '@/constants';
import LinkButton from '@/components/LinkButton';

type Props = {
  pokemons: Pokemon[]
}

const WithStaticProps = ({pokemons}: Props) => {
  return (
    <Layout title="All 1007 Pokemon">
      <h1 className="text-7xl mb-7">All 1007 Pokemon</h1>
      <PokemonList pokemons={pokemons} />
      <div className='mt-8 px-8 w-full mx-auto md:w-1/2 lg:w-1/3'>
        <LinkButton href="/">Go Home</LinkButton>
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
      const response = await POKE_API.listPokemons(0, 1007)
      const results = await response.results
      const pokemons = results.map((pokemon: {name: string, url: string}, index: number)=> {
        const pokemonID = getPokemonID(pokemon.url)
        const image = `${SPRITE_IMAGES.defaultFront}/${pokemonID}.png`

        return {...pokemon, image, id: pokemonID}
      })
      return {
        props: { pokemons },
    }
  } catch (error) {
    console.log(error)
    return {
      props: { notFound: true }
    }
  }
}

export default WithStaticProps
