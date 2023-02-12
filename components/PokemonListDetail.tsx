import { AbilityProps, Pokemon } from '@/interfaces/pokemon'
import Image from 'next/image'
import { POKE_API, SPRITE_IMAGES } from '@/constants'
import TypeBadge from './TypeBadge'

type ListDetailProps = {
  item: Pokemon
}

const PokemonSpriteButton = (sprite, id) => {
  let spriteUrl = ''

  switch (sprite) {
    case 'defaultFront': {
      spriteUrl = `${SPRITE_IMAGES.defaultFront}/${id}.png`
      break;
    }
    case 'defaultBack': {
      spriteUrl =`${SPRITE_IMAGES.defaultBack}/${id}.png`
      break;
    }
    case 'shinyFront': {
      spriteUrl = `${SPRITE_IMAGES.shinyFront}/${id}.png`
    }
    case 'shinyBack': {
      spriteUrl = `${SPRITE_IMAGES.shinyBack}/${id}.png`
    }
    default: {
      spriteUrl = `${SPRITE_IMAGES.defaultFront}/${id}.png`
      break;
    }
  }

  return (
    <button>{}</button>
  )
}

const PokemonListDetail = ({ item }: ListDetailProps) => {

  const { abilities, id, name, height, stats, types, weight } = item;

  let spriteSource: string = `${SPRITE_IMAGES.defaultFront}/${id}.png`

  if (id <= 650) {
    spriteSource = `${SPRITE_IMAGES.animated}/${id}.gif`
  } else {
    spriteSource = `${SPRITE_IMAGES.defaultFront}/${id}.png`
  }

  const getAbilities = async () => {
    return Promise.all(
      abilities.map(async (ability: AbilityProps) => {
        await POKE_API.getAbilityByName(ability.ability.name).then((data)=> {
          const { id, effect_entries, flavor_text_entries, name } = data
          return { ability: { id, name, effect: effect_entries[0].effect[0], flavorText: flavor_text_entries[0].flavor_text}}
        }).catch((error)=> console.log(error))
      }
    )
  )}

  return (
    <div>
      <div className='mb-8 w-full mx-auto md:w-1/2 lg:w-1/3'>
      </div>
      <div className="capitalize container flex flex-col sm:flex-row gap-10 items-center justify-center">
        <div>
          <h1 className='capitalize font-bold text-4xl'>{name}</h1>
          <span className='font-bold'>National Dex ID: </span>{id}
          <Image src={spriteSource} alt={`Sprite of pokemon: ${name}.`} height="200" width="200" className='border border-gray-200 rounded my-4 p-4'/>
          <div className="flex flex-col gap-4 capitalize">
            <div className='flex gap-4'>
              <span className='font-bold'>Types:</span>
              {types.map((pokemonType, index) => <TypeBadge key={`type-${index}`} type={pokemonType.type.name}/>
              )}
            </div>
            <div className='flex gap-4'>
              <span className='font-bold'>Abilities:</span>
              {abilities.map((ability, index)=> <p key={`ability-${index}`}>{ability.ability.name}</p>)}
            </div>
            <div className='flex gap-4'>
              <span className='font-bold'>Height:</span> {height} <span className='font-bold'>Weight:</span> {weight}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <span className='font-bold'>Base Stats</span>
          {stats.map((stat, index)=> <span key={`stat-${index}`}>{stat.stat.name}: {stat.base_stat}</span>)}
        </div>
      </div>
    </div>
  )
}

export default PokemonListDetail
