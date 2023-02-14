import { PokemonDetailProps } from '@/interfaces/pokemon'
import Image from 'next/image'
import { POKE_API, SPRITE_IMAGES } from '@/utils/pokemon-constants'
import TypeBadge from './TypeBadge'
import { useState } from 'react'


const PokemonListDetail = ({ pokemon }: PokemonDetailProps) => {
  const { abilities, id, name, height, species, stats, types, weight } = pokemon;

  const [sprite, setSprite] = useState(`${SPRITE_IMAGES[4].url}/${id}.png`)

  const mappedCall = abilities.map((ability, index) => {
    try {
      POKE_API.getAbilityByName(ability.ability.name).then((data) =>
      console.log('mapped ability: ', ability)
      )
    } catch (error) {
      return { error }
    }
  })

  return (
    <div>
      <div className='mb-8 w-full mx-auto md:w-1/2 lg:w-1/3'>
      </div>
      <div className="capitalize container flex flex-col sm:flex-row gap-10 items-center justify-center">
        <div>
          <h1 className='font-bold text-4xl'>{name}</h1>
          <span className='font-bold'>National Dex ID: </span>{id}
          <Image src={sprite} alt={`Sprite of pokemon: ${name}.`} height={100} width={100} className='border border-gray-200 rounded my-4 p-4 w-full'/>
          <div className='grid grid-cols-2 gap-4'>
            {SPRITE_IMAGES.map((spriteImage, index) => {
              if (id <= 650) {
                return (
                  spriteImage.animated ?
                  <button className="text-sm border border-gray-300 px-2 rounded" key={`sprite-button-${index}`} onClick={() => {
                    setSprite(`${spriteImage.url}/${id}.gif`)}}>
                      {spriteImage.name}
                  </button>
                  : <button className="text-sm border border-gray-300 px-2 rounded" key={`sprite-button-${index}`} onClick={() => {
                    setSprite(`${spriteImage.url}/${id}.png`)}}>
                    {spriteImage.name}
                  </button>
                )
              } else {
                return (
                  spriteImage.animated ?
                  null :
                  <button className="text-sm border border-gray-300 px-2 rounded" key={`sprite-button-${index}`} onClick={() => {
                    setSprite(`${spriteImage.url}/${id}.png`)
                }}>
                  {spriteImage.name}
                </button>
                )
              }
            })}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4">
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
          <span className='font-bold'>Base Stats</span>
          {stats.map((stat, index)=> {
            if (stat.stat.name === 'hp') {
              return <span key={`stat-${index}`} className="uppercase">{stat.stat.name}: {stat.base_stat}</span>
            } else {
              return <span key={`stat-${index}`}>{stat.stat.name}: {stat.base_stat}</span>
            }
          })}
        </div>
      </div>
    </div>
  )
}

export default PokemonListDetail
