import * as React from 'react'

import { Pokemon } from '@/interfaces/pokemon'
import Image from 'next/image'

type ListDetailProps = {
  item: Pokemon
}

const ListDetail = ({ item }: ListDetailProps) => {
  console.log('listdetail item ', item)
  return (
    <div>
      <Image src={item.sprites.front_default} alt={`Sprite of pokemon: ${item.name}.`} />
      <h1>Detail for {item.name}</h1>
      <p>ID: {item.id}</p>
    </div>
  )
}

export default ListDetail
