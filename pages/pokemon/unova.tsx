import Link from 'next/link'

import { PokemonClient } from "pokenode-ts";

import Layout from '@/components/Layout'
import List from '@/components/List'
import { GetStaticProps } from 'next';
import { Pokemon } from '@/interfaces';
import { getPokemonID } from '@/utils/get-pokemon-id';

type Props = {
  pokemons: Pokemon[]
}

const pokeAPI = new PokemonClient()

const WithStaticProps = ({pokemons}: Props) => {
    return (
        <Layout title="Pokemon List | Next.js + TypeScript Example">
            <h1 className="text-7xl my-7">Unova Pokemon List</h1>
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
        const response = await pokeAPI.listPokemons(494, 155)
        const results = await response.results
        const pokemons = results.map((pokemon: { name: string, url: string }) => {
            const pokemonID = getPokemonID(pokemon.url)
            const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemonID}.png`
  
          return {...pokemon, image, id: pokemonID}
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
