import { useState } from 'react'
import { PokemonDetailProps } from '@/interfaces/pokemon'
import Image from 'next/image'
import { SPRITE_IMAGES } from '@/utils/pokemon-constants'
import TypeBadge from './TypeBadge'
import CheckoutForm from './CheckoutForm'
import { useRouter } from 'next/router'


const PokemonListDetail = ({ pokemon }: PokemonDetailProps) => {
  const { abilities, id, name, height,  stats, types, weight } = pokemon;
  const [sprite, setSprite] = useState(`${SPRITE_IMAGES[4].url}/${id}.png`)
  const router = useRouter()
  const query = router.query

  return (
    <div>

<div className='mb-8 w-full mx-auto md:w-1/2 lg:w-1/3'>
        {query.status === 'cancelled' &&
        <div className="bg-red-400 text-white rounded-lg shadow-lg p-3 max-w-sm mt-7 mx-auto flex items-center justify-center space-x-3">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
        </svg>
        <span>
          Cancelled by user
        </span>
      </div>
      }
      {query.status === 'success' &&
        <div className="bg-green-400 text-white rounded-lg shadow-lg p-3 max-w-sm mt-7 mx-auto flex items-center justify-center space-x-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span>
            Payment Successful. Please check your email for the receipt.
          </span>
        </div>
      }
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
            <div className='flex gap-4 px-4'>
              <span className='font-bold'>Types:</span>
              {types.map((pokemonType, index) => <TypeBadge key={`type-${index}`} type={pokemonType.type.name}/>
              )}
            </div>
            <div className='flex gap-4 px-4'>
              <span className='font-bold'>Abilities:</span>
              {abilities.map((ability, index)=> <p key={`ability-${index}`}>{ability.ability.name}</p>)}
            </div>
            <div className='flex gap-4 px-4'>
              <span className='font-bold'>Height:</span> {height} <span className='font-bold'>Weight:</span> {weight}
            </div>
          </div>
          <div className="border border-gray-200 p-4 rounded">
            <span className='font-bold'>Base Stats</span>
            <div className="grid grid-cols-2 gap-4 my-2">
              {stats.map((stat, index)=> {
                if (stat.stat.name === 'hp') {
                  return <span key={`stat-${index}`} className="uppercase">{stat.stat.name}: {stat.base_stat}</span>
                } else {
                  return <span key={`stat-${index}`}>{stat.stat.name}: {stat.base_stat}</span>
                }
              })}
            </div>
          </div>
          <div>
            <CheckoutForm pokemon={pokemon} image={sprite} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PokemonListDetail
