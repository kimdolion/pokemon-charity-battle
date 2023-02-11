import { PokemonClient } from "pokenode-ts"

export const POKEMON_TYPE_COLORS = {
  bug: "#bddd6e",
  dark: "#4f4f4f",
  dragon: "#8a55fd",
  electric: "#fffa24",
  fairy: "#ff9fc2",
  fighting: "#d36063",
  fire: "#f67f0b",
  flying: "#5eb9b2",
  ghost: "#8e55a4",
  grass: "#3e9709",
  ground: "#e1d158",
  ice: "#1995a1",
  normal: "#ccc9aa",
  poison: "#a719d7",
  psychic: "#f55792",
  rock: "#776a3e",
  steel: "#7b8e8a",
  water: "#0a7abc",
}

export const POKE_API = new PokemonClient()

// export const officialURL = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemonID}.png`
export const SPRITE_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon'

/**
 * Sprite images require the pokemon id and .png unless using animated .gif
 */
export const SPRITE_IMAGES = {
  animated: `${SPRITE_URL}/versions/generation-v/black-white/animated`,
  animatedBack: `${SPRITE_URL}/versions/generation-v/black-white/animated/back`,
  animatedShiny: `${SPRITE_URL}/versions/generation-v/black-white/animated/shiny`,
  animatedShinyBack: `${SPRITE_URL}/versions/generation-v/black-white/animated/back/shiny`,
  defaultBack: `${SPRITE_URL}/back`,
  defaultFront: `${SPRITE_URL}`,
  shinyBack: `${SPRITE_URL}/back/shiny`,
  shinyFront: `${SPRITE_URL}/shiny`,
}
