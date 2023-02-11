import Link from 'next/link'
import Image from 'next/image'
import { Pokemon } from '@/interfaces/pokemon'
import { SPRITE_IMAGES } from '@/constants'

interface PokemonListProps {
  pokemons: Pokemon[]
}

const PokemonList = ({ pokemons }: PokemonListProps) => {

  return (
    <ul className="gap-6 grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-6 2xl:grid-cols-9 justify-items-center m-4">
      {pokemons.map((pokemon) => (
        <li key={`pokemon-${pokemon.id}`} className="bg-gray-600 p-4 rounded w-3/4 md:w-3/4 lg:w-full">
          <Link href={`/pokemon/${pokemon.id}`} className="flex flex-col items-center text-center">
            <span>National Dex: {pokemon.id}</span>
            <Image src={`${SPRITE_IMAGES.defaultFront}/${pokemon.id}.png`} alt={pokemon.name} height={100} width={100} className="my-2" />
            <span className="capitalize">{pokemon.name}</span>
          </Link> 
        </li>
      ))}
    </ul>
  )
}

export default PokemonList
