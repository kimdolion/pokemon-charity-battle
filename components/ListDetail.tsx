import * as React from 'react'

import { Pokemon } from '../interfaces'

type ListDetailProps = {
  item: Pokemon
}

const ListDetail = ({ item: pokemon }: ListDetailProps) => (
  <div>
    <h1>Detail for {pokemon.name}</h1>
    <p>ID: {pokemon.id}</p>
  </div>
)

export default ListDetail
