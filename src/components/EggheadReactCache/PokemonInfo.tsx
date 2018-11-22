import React from 'react'
import { unstable_createResource as createResource } from 'react-cache'

import fetchPokemon from './fetch-pokemon'

interface IPokemonInfoProps {
  pokemonName: string
}

const myPokemon = createResource(fetchPokemon)

const PokemonInfo: React.FunctionComponent<IPokemonInfoProps> = ({
  pokemonName,
}) => {
  const pokemon = myPokemon.read(pokemonName)
  return <pre>{JSON.stringify(pokemon || 'Unknown', null, 2)}</pre>
}

export default PokemonInfo
