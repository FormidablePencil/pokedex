import { FETCH_POST, NEW_POKEMON, SELECTED_POKEMON } from './types'

export const experimentingRedux = () => async dispatch => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon')
  const pokemonData = await response.json()
  // const resType = await fetch(`https://pogoapi.net/api/v1/pokemon_types.json`)
  dispatch({
    type: FETCH_POST,
    payload: pokemonData
  })
}

export const createPokemon = (newPokemon) => dispatch => {
  console.log('damn yeah!')
  dispatch({
    type: NEW_POKEMON,
    payload: newPokemon
  })
}

export const reduxPokemonSelected = (selectedPokemon) => dispatch => {
  dispatch({
    type: SELECTED_POKEMON,
    payload: selectedPokemon
  })
}