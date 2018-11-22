// TODO: use correct type
function fetchPokemon(name: string): Promise<object> {
  const pokemonQuery = `
      query ($name: String) {
        pokemon(name: $name) {
          id
          number
          name
          attacks {
            special {
              name
              type
              damage
            }
          }
        }
      }
    `
  return window
    .fetch('https://graphql-pokemon.now.sh', {
      // learn more about this API here: https://graphql-pokemon.now.sh/
      body: JSON.stringify({
        query: pokemonQuery,
        variables: { name },
      }),
      headers: {
        'content-type': 'application/json;charset=UTF-8',
      },
      method: 'POST',
    })
    .then(r => r.json())
    .then(response => response.data.pokemon)
}

export default fetchPokemon
