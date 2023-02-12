// 'https://pokeapi.co/api/v2/pokemon/16/ pidgey

import { POKE_API, SPRITE_IMAGES } from "@/constants"
import { GetPokemonProps } from "@/interfaces/pokemon"

/**
 * @param name
 * @returns the id of a pokemon based on the url
 */
export const capitalizeName = (pokemonName: string) => {
  const firstLetter = pokemonName.charAt(0).toUpperCase()
  const restOfName = pokemonName.slice(1)
  const name = firstLetter + restOfName
  return name
}

/**
 * @param url
 * @returns the id of a pokemon based on the url
 */
export const getPokemonID = (url: string) => {
    return url.split('/')[url.split('/').length - 2]
}

/**
 * @param limit number limit of pokemon to search for, @param offset number offset to start the search for pokemon based on national dex id number, @param generationPath string for a url path; already has a / where it will be passed
 * @returns an array of pokemon that were mapped with the pokemon id, image, and the path for linking
 */
export const getPokemons = async ({limit, offset, generationPath}: GetPokemonProps) => {
    const response = await POKE_API.listPokemons(offset, limit)
    const results = await response.results
    const pokemons = results.map((pokemon: {name: string, url: string}, index: number)=> {
      const pokemonID = getPokemonID(pokemon.url)
      const image = `${SPRITE_IMAGES.defaultFront}/${pokemonID}.png`
      const pokemonPath = `/${generationPath}/${pokemonID}`
      return {...pokemon, image, id: pokemonID, pokemonPath }
    })
    return {
      props: { pokemons },
    }
}