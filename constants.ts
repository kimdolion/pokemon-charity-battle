import { PokemonClient } from "pokenode-ts"

export const NAV_LINKS = [
  { name: 'Home', url: "/", key: 'home-page' },
  { name: 'About', url: "/about", key: 'about-page' },
  { name: 'All Pokemon', url: "/pokemon", key: 'all-pokemon-page' },
  { name: 'Kanto Pokemon', url: "/pokemon/kanto", key: 'kanto-page' },
  { name: 'Johto Pokemon', url: "/pokemon/johto", key: 'johto-page' },
  { name: 'Sinnoh Pokemon', url: "/pokemon/sinnoh", key: 'sinnoh-page' },
  { name: 'Unova Pokemon', url: "/pokemon/unova", key: 'unova-page' },
  { name: 'Kalos Pokemon', url: "/pokemon/kalos", key: 'kalos-page' },
  { name: 'Alola Pokemon', url: "/pokemon/alola", key: 'alola-page' },
  { name: 'Galar Pokemon', url: "/pokemon/galar", key: 'galar-page' },
  { name: 'Paldea Pokemon', url: "/pokemon/paldea", key: 'paldea-page' },
]

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
export const SPRITE_IMAGES = [
  {
    name: 'Animated', url: `${SPRITE_URL}/versions/generation-v/black-white/animated`, animated: true
  },
  {
    name: 'Animated Back', url: `${SPRITE_URL}/versions/generation-v/black-white/animated/back`, animated: true
  },
  { name: 'Animated Shiny', url: `${SPRITE_URL}/versions/generation-v/black-white/animated/shiny`, animated: true
  },
  {
    name: 'Animated Shiny Back', url: `${SPRITE_URL}/versions/generation-v/black-white/animated/back/shiny`, animated: true
  },
  {
    name: 'Default Front', url: `${SPRITE_URL}`, animated: false
  },
  {
    name: 'Default Back', url: `${SPRITE_URL}/back`, animated: false
  },
  {
    name: 'Shiny Front', url: `${SPRITE_URL}/shiny`, animated: false
  },
  {
    name: 'Shiny Back', url: `${SPRITE_URL}/back/shiny`, animated: false
  },
]


export const SPRITE_OPTIONS = ['versions', 'dream_world', 'home', 'official-artwork', 'generation-i', 'generation-ii', 'generation-iii', 'generation-iv', 'generation-v', 'generation-vi', 'generation-vii', 'generation-viii',]
