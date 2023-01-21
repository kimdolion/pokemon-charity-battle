import * as React from 'react'
import { Pokemon } from '../interfaces'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
  items: Pokemon[]
}

const List = ({ items }: Props) => (
  <ul>
    {items.map((item) => (
      <li key={item?.id}>
        <Image src={item?.sprites?.front_default} alt={item.name} height={200} width={200} />
          <Link href="/pokemon/[id]" as={`/pokemon/${item.id}`}>
            {item.name}
          </Link> 
      </li>
    ))}
  </ul>
)

export default List
