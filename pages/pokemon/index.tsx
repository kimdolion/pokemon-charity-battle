import Link from 'next/link'
import { useEffect, useState } from 'react'

import Layout from '@/components/Layout'
import List from '@/components/List'

// type Props = {
//   items: User[]
// }

const WithStaticProps = async () => {
    const [pokemons, setPokemons] = useState([])

    const response = await fetch('/api/pokemon')
    if (response) {
        setPokemons(response)
    }

    return (
    <Layout title="Pokemon List | Next.js + TypeScript Example">
        <h1>Pokemon List</h1>
        <p>You are currently on: /pokemon</p>
        <List items={pokemons} />
        <p>
        <Link href="/">Go home</Link>
        </p>
    </Layout>
    )
}

export default WithStaticProps
