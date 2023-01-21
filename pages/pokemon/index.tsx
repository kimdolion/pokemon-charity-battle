import Link from 'next/link'

import { PokemonClient } from "pokenode-ts";

import Layout from '@/components/Layout'
import List from '@/components/List'
import { GetStaticProps } from 'next';
import { Pokemon } from '@/interfaces';

type Props = {
  results: Pokemon[]
}

const pokeAPI = new PokemonClient()

const WithStaticProps = ({results}: Props) => {
    return (
        <Layout title="Pokemon List | Next.js + TypeScript Example">
            <h1>Pokemon List</h1>
            <p>You are currently on: /pokemon</p>
            <List items={results} />
            <p>
            <Link href="/">Go home</Link>
            </p>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const {results} = await pokeAPI.listPokemons();
    return { props: { results } }
  }
  

export default WithStaticProps
