import { useState } from 'react'
import PokemonList from '@/components/PokemonList'
import Layout from '../components/Layout'
import { getRequest } from '@/utils/stripe-utils'


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
