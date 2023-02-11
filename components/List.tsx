import Link from 'next/link'
import Image from 'next/image'

type Props = {
  items: any[]
}

const List = ({ items }: Props) => (
  <ul>
    {items.map((item) => (
      <li key={`pokemon-${item.id}`}>
        <Image src={item?.image} alt={item.name} height={200} width={200} />
          <Link href={`/pokemon/${item.id}`}>
            {item.name}
          </Link> 
      </li>
    ))}
  </ul>
)

export default List
