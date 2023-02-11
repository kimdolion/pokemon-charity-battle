import Link from 'next/link'

import { Pokemon } from '@/interfaces/pokemon'

type Props = {
  data: Pokemon
}

const ListItem = ({ data }: Props) => (
  <Link href={`/pokemon/${data.id}`}>
    {data.id}: {data.name}
  </Link> 
)

export default ListItem
