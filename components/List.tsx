import Link from 'next/link'
import Image from 'next/image'

type Props = {
  items: any[]
}

const List = ({ items }: Props) => (
  <ul className="gap-6 grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-6 2xl:grid-cols-9 justify-items-center m-4">
    {items.map((item) => (
      <li key={`pokemon-${item.id}`} className="bg-gray-600 p-4 rounded w-3/4 md:w-3/4 lg:w-full">
        <Link href={`/pokemon/${item.id}`} className="flex flex-col items-center text-center">
          <span>National Dex: {item.id}</span>
          <Image src={item?.image} alt={item.name} height={100} width={100} className="my-2" />
          <span className="capitalize">{item.name}</span>
        </Link> 
      </li>
    ))}
  </ul>
)

export default List
