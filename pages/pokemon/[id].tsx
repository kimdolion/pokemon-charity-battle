import { GetStaticProps, GetStaticPaths } from 'next'

import { Pokemon } from '@/interfaces/pokemon'
import Layout from '@/components/Layout'
import ListDetail from '@/components/ListDetail'
import { getPokemonID } from '@/utils/get-pokemon-id';
import { POKE_API } from '@/constants';

type Props = {
  item?: Pokemon
  errors?: string
}

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

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await POKE_API.listPokemons(0, 1007)
  const results = await response.results
  const paths = results.map((pokemon: { name: string, url: string })=> ({
    params: {id: getPokemonID(pokemon.url)}
  }))

  return {
    paths,
    fallback: 'blocking'
  }
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const response = await POKE_API.getPokemonById(Number(params?.id))
    return {
        props: { response }
    }
  } catch(error) {
      console.log(error)
  }

  return {
      notFound: true
  }
}
