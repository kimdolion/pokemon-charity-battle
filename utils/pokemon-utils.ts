// 'https://pokeapi.co/api/v2/pokemon/16/ pidgey

export const getPokemonID = (url: string) => {
    return url.split('/')[url.split('/').length - 2]
}