import { useEffect, useState } from 'react'
import PokemonList from '@/components/PokemonList'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import { getRequest } from '@/utils/stripe-helpers'
import { GetStaticProps } from 'next'
import { PokemonIndexPageProps } from '@/interfaces/pokemon'
import { getPokemons } from '@/utils/pokemon-utils'
import getStripe from '@/utils/get-stripe'

const IndexPage = () => {
  const [currentPokemons, setCurrentPokemons] = useState([])
  console.log('pokemons in index: ', currentPokemons)

  const getData = async () => {
    const response = await getRequest('/api/sessions').then((data)=> data)
    // setCurrentPokemons(response)
    console.log('what is response ', response)
    return response
  }

  const result = getData()
  console.log('what is result', result)

  return (
    <Layout title="Home | Pokemon Charity Battle">
      <h1>Welcome</h1>
      <PokemonList pokemons={currentPokemons} />
    </Layout>
  )
}

export default IndexPage
