import React, { Suspense, useState } from 'react'

import PokemonInfo from './PokemonInfo'

interface IPokemonElements extends HTMLFormControlsCollection {
  pokemonName: {
    value: string
  }
}

const Pokemon: React.FunctionComponent = () => {
  const [pokemonName, setPokemonName] = useState('')
  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault()

    const eventTargetElements = (e.target as HTMLFormElement)
      .elements as IPokemonElements

    setPokemonName(eventTargetElements.pokemonName.value)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="pokemonName-input">Pokemon Name (ie Pikachu)</label>
        <input id="pokemonName-input" name="pokemonName" />
        <button type="submit">Submit</button>
      </form>
      <div>
        {pokemonName ? (
          <Suspense fallback={<div>loading...</div>}>
            <PokemonInfo pokemonName={pokemonName} />
          </Suspense>
        ) : null}
      </div>
    </div>
  )
}

export default Pokemon
