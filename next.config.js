module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'assets.pokemon.com',
          port: '',
          pathname: '/assets/cms2/img/pokedex/**',
        },
        {
          protocol: 'https',
          hostname: 'raw.githubusercontent.com',
          port: '',
          // https://raw.githubusercontent.com/PokeAPI/sprites/master/pokemon/
          pathname: '/PokeAPI/sprites/master/sprites/pokemon/**',
        },
        {
          protocol: 'https',
          hostname: 'images.dog.ceo',
          port: '', 
          pathname: '/breeds/**'
        }
      ],
    },
  }