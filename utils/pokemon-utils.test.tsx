
import { describe, test } from '@jest/globals';
import { render } from '@testing-library/react';
import { capitalizeName, formatSpriteButtonName, getPokemonID, getPokemons } from './pokemon-utils';

describe('pokemon-utils', () => {
  test('capitalizeName capitalizes the first letter of a string', () => {
    const stringName = 'test'
    const result = capitalizeName(stringName)
    expect(result).toEqual('Test')
  })

  test('capitalizeName capitalizes the first word of a string', () => {
    const stringName = 'test string'
    const result = capitalizeName(stringName)
    expect(result).toEqual('Test string')
  })

  test('formatSpriteButtonName replaces underscores _ with spaces from a string', () => {
    const stringNames = ['test_string', "test_string_two", "_test_string_"]
    const result = stringNames.map((stringName) => formatSpriteButtonName(stringName))
    expect(result).toEqual(['test string', 'test string two', ' test string '])
  })

  test('getPokemonID returns a number string from a url', () => {
    const stringURLs = ['https://pokeapi.co/api/v2/pokemon/1/', "https://pokeapi.co/api/v2/pokemon/2/", "https://pokeapi.co/api/v2/pokemon/3/"]
    const result = stringURLs.map((stringURL) => getPokemonID(stringURL))
    expect(result).toEqual(["1", "2", "3"])
  })

  test('getPokemon returns a list of pokemon based off of a limit, offset, and generation name from PokeAPI', async () => {
    const result = await getPokemons({limit: 1, offset: 0, generationPath: 'pokemon'})

    expect(result).toEqual({
      props: {
        "pokemons": [{
          "id": "1",
          "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
          "name": "bulbasaur",  "pokemonPath": "/pokemon/1",
          "url": "https://pokeapi.co/api/v2/pokemon/1/",
        },]
      }
  })})
})