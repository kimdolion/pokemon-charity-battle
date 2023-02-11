import { PokemonClient } from "pokenode-ts"

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
