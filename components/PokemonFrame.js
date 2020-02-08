import React from 'react'
import styled from 'styled-components'

export const PokemonFrame = ({ pokemonNumber }) => {
  return (
    <PokemonImageContainer>
      <PokemonImage
        // source={{ uri: `https://pokeres.bastionbot.org/images/pokemon/${pokemonNumber}.png` }}
      />
    </PokemonImageContainer>
  )
}
const PokemonImageContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`
const PokemonImage = styled.Image`
  width: 200px;
  height: 200px;

`

export default PokemonFrame