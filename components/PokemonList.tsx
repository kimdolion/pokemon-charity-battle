import Link from 'next/link'
import Image from 'next/image'
import { PokemonListProps } from '@/interfaces/pokemon'

const PokemonList = ({ pokemons }: PokemonListProps) => {

  if (!pokemons || pokemons.length < 0) {
    return <p>Loading...</p>
  }

  return (
    <ul className="gap-4 md:gap-8 grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-6 2xl:grid-cols-9 justify-items-center">
      {pokemons.map((pokemon) => (
      <li key={`pokemon-${pokemon.id}`} className="bg-gray-600 p-4 rounded w-3/4 md:w-3/4 lg:w-full">
        <Link href={`${pokemon.pokemonPath}`} className="flex flex-col items-center text-center hover:underline hover:underline-offset-4">
          <span>National Dex: {pokemon.id}</span>
          <Image src={pokemon.image} alt={pokemon.name} height={100} width={100} className="my-2" />
          <span className="capitalize">{pokemon.name}</span>
        </Link>
      </li>
      ))}
    </ul>
  )
}

export default PokemonList
