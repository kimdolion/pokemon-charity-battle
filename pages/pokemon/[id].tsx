import { GetStaticProps, GetStaticPaths } from 'next'

import { PokemonClient } from "pokenode-ts";

import { Pokemon } from '@/interfaces'
import Layout from '@/components/Layout'
import ListDetail from '@/components/ListDetail'

type Props = {
  item?: Pokemon
  errors?: string
}
const pokeAPI = new PokemonClient()

const StaticPropsDetail = ({ item, errors }: Props) => {
  if (errors) {
    return (
      <Layout title="Error | Next.js + TypeScript Example">
        <p>
          <span style={{ color: 'red' }}>Error:</span> {errors}
        </p>
      </Layout>
    )
  }

  return (
    <Layout
      title={`${
        item ? item.name : 'pokemon Detail'
      } | Next.js + TypeScript Example`}
    >
      {item && <ListDetail item={item} />}
    </Layout>
  )
}

export default StaticPropsDetail

// export const getStaticPaths: GetStaticPaths = async () => {
//   // Get the paths we want to pre-render based on pokemons
//   const paths = pokemons.map((pokemon) => ({
//     params: { name: pokemon.name },
//   }))

//   // We'll pre-render only these paths at build time.
//   // { fallback: false } means other routes should 404.
//   return { paths, fallback: false }
// }

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export const getStaticProps: GetStaticProps = async ({ params }) => {
  console.log(params)
  const id = params?.id
  try {
      const response = await pokeAPI.getPokemonByName(params.name)
      console.log('individual pokemon, ', response)
      const pokemon = response
      return {
          props: { pokemon }
      }
  } catch(error) {
      console.log(error)
  }

  return {
      notFound: true
  }
}
