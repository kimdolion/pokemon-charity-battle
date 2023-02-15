import Layout from '@/components/Layout'
import PokemonList from '@/components/PokemonList'
import { GetStaticProps } from 'next';
import { PokemonIndexPageProps } from '@/interfaces/pokemon';
import { getPokemons } from '@/utils/pokemon-utils';
import LinkButton from '@/components/LinkButton';
import { useState } from 'react';

const WithStaticProps = ({pokemons, error}: PokemonIndexPageProps) => {
  let groupOfPokemon = pokemons.slice(0, 21)
  const numberOfPokemons = pokemons.length
  const [currentEnd, setCurrentEnd] = useState(42)
  const [currentPokemons, setCurrentPokemons] = useState(groupOfPokemon)


  const handleMorePokemon = () => {
    if (currentEnd <= numberOfPokemons) {
      setCurrentEnd(prevEnd => prevEnd + 21)
    }
    setCurrentPokemons(pokemons.slice(0, currentEnd))
  }

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
      {numberOfPokemons > 0 ?
      <>
        <PokemonList pokemons={currentPokemons} />
        <div className='flex flex-col gap-8 mt-8 px-8 w-full mx-auto md:w-1/2 lg:w-1/3'>
          {currentEnd <= numberOfPokemons ?
          <button className="bg-red-500 px-4 py-2 rounded w-full hover:bg-gray-200 hover:underline text-black transition-all" onClick={handleMorePokemon}>More Pokemon</button> : null}
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
