import * as React from 'react'

import { AbilityProps, Pokemon } from '@/interfaces/pokemon'
import Image from 'next/image'
import { POKE_API, SPRITE_IMAGES } from '@/constants'

type ListDetailProps = {
  item: Pokemon
}

const ListDetail = ({ item }: ListDetailProps) => {
  const src = item.sprites.front_default ? item.sprites.front_default : `${SPRITE_IMAGES.defaultFront}/${item.id}.png`

  const { abilities, id, name, height, stats, types, weight } = item;

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
  
  const result =  getAbilities()
  console.log(result)
  
  return (
    <div className="container flex flex-col items-center justify-center">
      <h1 className='capitalize'>{name}</h1>
      <span>National Dex ID: {id}</span>
      <Image src={src} alt={`Sprite of pokemon: ${name}.`} height="200" width="200" />
      <div className="flex flex-col gap-2">
        Abilities: {abilities.map((ability, index)=> <p className="capitalize" key={`ability-${index}`}>{ability.ability.name}</p>)}
        Height: {height} Weight: {weight}
        <div className="flex flex-col gap-4">
          Base Stats
          {stats.map((stat, index)=> <span className="capitalize" key={`${stat.stat.name}-${index}`}>{stat.stat.name}: {stat.base_stat}</span>)}
        </div>
      </div>
    </div>
  )
}

export default ListDetail
