import * as React from 'react'

import { Pokemon } from '../interfaces'

type ListDetailProps = {
  item: Pokemon
}

const ListDetail = ({ item }: ListDetailProps) => (
  <div>
    <h1>Detail for {item.name}</h1>
    <p>ID: {item.id}</p>
  </div>
)

export default ListDetail
