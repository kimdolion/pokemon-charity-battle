import * as React from 'react'

import { Pokemon } from '@/interfaces/pokemon'

type ListDetailProps = {
  item: Pokemon
}

const ListDetail = ({ item }: ListDetailProps) => {
  console.log('listdetail item ', item)
  return (
    <div>
      <h1>Detail for {item.name}</h1>
      <p>ID: {item.id}</p>
    </div>
  )
}

export default ListDetail
