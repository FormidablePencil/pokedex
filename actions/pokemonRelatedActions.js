import {
  UPDATE_SUGGESTIONS,
  UPDATE_VALUE_TYPED,
  EXPER_REDUX,
  NEW_POKEMON,
  SELECTED_POKEMON,
  GENERATING_LOCAL_POKEMONLIST,
  POKETYPE_OF_SELECTED_POKEMON,
  IS_READY_POKESTATS,
  NOT_READY_POKESTATS
} from './types'
import gen1 from '../renderImagesDynamically/gen1'

export const reduxPokemonSelected = (selectedPokemon) => dispatch => {
  dispatch({
    type: SELECTED_POKEMON,
    payload: selectedPokemon
  })
}

export const generateLocalpokemonList = () => dispatch => {
  const name = gen1.map(item => (item.substr(3, item.indexOf('.png') - 3))).map(item => (item.replace('_', '')))
  const number = gen1.map(item => (item.substr(0, 3)))
  let pokemonList = []
  for (let i = 0; i < gen1.length; i++) {
    let obj = {}
    obj[number[i]] = name[i]
    pokemonList.push(obj)

  }
  dispatch({
    type: GENERATING_LOCAL_POKEMONLIST,
    payload: pokemonList
  })
}

export const updateSuggestions = (suggestions) => dispatch => {
  dispatch({
    type: UPDATE_SUGGESTIONS,
    payload: suggestions
  })
}

export const reduxUpdateValueTyped = (valueTyped) => dispatch => {
  dispatch({
    type: UPDATE_VALUE_TYPED,
    payload: valueTyped
  })
}

export const fetchPokemonResources = (pokemonSelected) => async dispatch => {
  //This is an extensive list of pokemon's information. It belongs here. 
  // const resPokemon = await fetch(`https://pokeapi.co/api/v2/po kemon/${pokemonSelected}/`)
  // const dataPokemon = await resPokemon.json()

  const resType = await fetch(`https://pogoapi.net/api/v1/pokemon_types.json`)
  const dataType = await resType.json()
  const pokemonTypes = await dataType.filter(item => item.pokemon_name === pokemonSelected)
  dispatch({
    type: POKETYPE_OF_SELECTED_POKEMON,
    payload: pokemonTypes[0].type,
  })
}

export const pokeStatsIsReadyNo = () => dispatch => {
  dispatch({
    type: NOT_READY_POKESTATS
  })
}

export const pokeStatsIsReadyYes = () => dispatch => {
  dispatch({
    type: IS_READY_POKESTATS
  })
}