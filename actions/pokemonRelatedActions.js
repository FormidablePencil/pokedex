import {
  UPDATE_SUGGESTIONS,
  UPDATE_VALUE_TYPED,
  SELECTED_POKEMON,
  GENERATING_LOCAL_POKEMONLIST,
  POKETYPE_OF_SELECTED_POKEMON,
  IS_READY_POKESTATS,
  NOT_READY_POKESTATS,
  UPDATE_THEME_POKE_TYPE,
  EXTENSIVE_INFO_POKEMON_SELECTED,
  FETCH_POKEMON_STATS,
} from './types'
import gen1 from '../renderImagesDynamically/gen1'
import { determineThemeByType } from '../theming/themingLogic' //! as you can see, I've been experementing with various ways of fetching data. Fetching when onPress and fetching in component did mount. I;ve found that in most cases it's best to fetch the json data when the user first comes into the the app and perhaps caching it wouldn't be a bad idea. To be frank, this was my first time working with apis. I could have avoided alot of unneccesserry code and logic but I've left it anyway cause it's a good reference point to comeback to and see the various methods/logic I've done to acheive certain results. Also this is meerely a playground for trying out new web development technologies I've learned. So do understand I didn't refractor my code and left it speggetti code for a reason. 

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
  const lowerCasedPokemonSelected = Object.values(pokemonSelected.item)[0].toLowerCase()
  console.log(lowerCasedPokemonSelected)
  const resPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${lowerCasedPokemonSelected}/`)
  const dataPokemon = await resPokemon.json()
  dispatch({
    type: EXTENSIVE_INFO_POKEMON_SELECTED,
    payload: dataPokemon
  })
  const resType = await fetch(`https://pogoapi.net/api/v1/pokemon_types.json`)
  const dataType = await resType.json()
  const pokemonTypes = await dataType.filter(item => item.pokemon_name === Object.values(pokemonSelected.item)[0])
  dispatch({
    type: POKETYPE_OF_SELECTED_POKEMON,
    payload: pokemonTypes[0].type,
  })
  //~ Put all the fetched from api here.
  const species = fetch(`https://pokeapi.co/api/v2/pokemon-species/${nameOrId}/`) //~ get evolution chain when onPress (RenderSuggesions.js) and fetch that evolution chain
  const IAlreadyDidThisOne = fetch(`https://pokeapi.co/api/v2/pokemon/${nameOrId}/`)
  const effectiveTypes = fetch(`https://pokeapi.co/api/v2/type/${nameOrId}/`) //! move to getGo componentDidMount. We need to store these... so later we may search by pokemon type.

  const response = await fetch('')
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

export const setThemeByPokeType = (type) => dispatch => {
  const randomNum = Math.floor(Math.random() * 2) + 0;
  const theme = determineThemeByType(type[randomNum])
  console.log(theme)
  dispatch({
    type: UPDATE_THEME_POKE_TYPE,
    payload: theme
  })
}