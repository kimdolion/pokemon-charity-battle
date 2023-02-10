import Link from 'next/link'

import { PokemonClient } from "pokenode-ts";

import Layout from '@/components/Layout'
import List from '@/components/List'
import { GetStaticProps } from 'next';
import { Pokemon } from '@/interfaces';

type Props = {
  pokemons: Pokemon[]
}

const GENERATIONS = [
  "generation-1",
  "generation-2",
  "generation-3",
  "generation-4",
  "generation-5",
  "generation-6",
  "generation-7",
  "generation-8",
  "generation-9"
];

const pokeAPI = new PokemonClient()

const WithStaticProps = ({pokemons}: Props) => {
    return (
        <Layout title="Pokemon List | Next.js + TypeScript Example">
            <h1 className="text-7xl my-7">All 1007 Pokemon List</h1>
            <p>You are currently on: /pokemon</p>
            <List items={pokemons} />
            <p>
            <Link href="/">Go home</Link>
            </p>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
      const response = await pokeAPI.listPokemons(0, 1007)
      const results = await response.results
      const pokemons = results.map((pokemon: {name: string, url: string}, index: number)=> {
        const paddedIndex = index >= 999 ? ("000" + (index + 1)).slice(-4) : ("00" + (index + 1)).slice(-3)
        const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedIndex}.png`

        return {...pokemon, image, id: paddedIndex}
      })
      return {
        props: { pokemons }
    }
  } catch (error) {
    console.log(error)
    return {
      props: { notFound: true }
    }
  }
}

export default WithStaticProps
