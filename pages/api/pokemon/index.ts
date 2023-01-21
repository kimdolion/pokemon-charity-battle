// REST: https://pokeapi.co/api/v2/pokemon/
// GraphQL: beta.pokeapi.co/graphql/v1beta
import { PokemonClient } from "pokenode-ts";

import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  const pokeAPI = new PokemonClient()
  await pokeAPI.listPokemons()
  .then((data)=> {
    if (data) {
      console.log("pokeAPI data yay: ", data) 
      return res.status(200).json(data)
    } 
    return res.status(400).json({message: "Error getting pokeAPI data"})
  })
  .catch((error)=> res.status(400).json(error))
}

export default handler
