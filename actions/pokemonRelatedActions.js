import {
  UPDATE_SUGGESTIONS,
  UPDATE_VALUE_TYPED,
  SELECTED_POKEMON,
  GENERATING_LOCAL_POKEMONLIST,
  IS_READY_POKESTATS,
  NOT_READY_POKESTATS,
  UPDATE_THEME_POKE_TYPE,
  DATA_SPECIFIC_POKEMON,
  FETCH_POKEMON_STATS,
  COUNTER_POKEMON_TYPES,
  GET_SPECIFIC_POKEMON_TYPE,
  GET_LIST_POKEMON_TYPE
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
export const getListOfPokemonTypes = () => async dispatch => {
  const resType = await fetch(`https://pogoapi.net/api/v1/pokemon_types.json`)
  const pokemonTypeList = await resType.json()
  dispatch({
    type: GET_LIST_POKEMON_TYPE,
    payload: pokemonTypeList
  })
}
export const getTypeOfSelectPokemon = (pokemonSelected, pokemonTypeList) => async dispatch => {
  console.log(pokemonSelected)
  console.log(pokemonTypeList)
  const pokemonType = await pokemonTypeList.filter(item =>
    item.pokemon_name === Object.values(pokemonSelected.item)[0] &&
    item.form !== 'Alola' &&
    item.form !== 'Fall_2019' &&
    item.form !== 'Purified' &&
    item.form !== 'Shadow'
  )
  dispatch({
    type: GET_SPECIFIC_POKEMON_TYPE,
    payload: pokemonType[0].type
  })
}

//? We still need to add pokemon moves, types, retro sprites, stats.
//@ rename to tell that it's fetching data for the spacific pokemon fetched apposed to retreiving a list of data for all the pokemon.
export const fetchSpecificPokemonResources = (pokemonSelected, retroMode) => async dispatch => {
  const dataSpecificPokemon = {}
  const lowerCasedPokemonSelected = Object.values(pokemonSelected.item)[0].toLowerCase()

  const resPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${lowerCasedPokemonSelected}/`)
  const dataPokemon = await resPokemon.json()


  const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${lowerCasedPokemonSelected}/`) //~ get evolution chain when onPress (RenderSuggesions.js) and fetch that evolution chain
  const result = await response.json()
  const pokemonSelectedDescription = result.flavor_text_entries.filter(item => item.language.name === 'en')

  const reponseEvolution = await fetch(result.evolution_chain.url)
  const resultEvolution = await reponseEvolution.json()

  //Getting pokemon's abilities and thier descriptions
  for (let i = 0; i < dataPokemon.abilities.length; i++) {
    const resData = await fetch(dataPokemon.abilities[i].ability.url)
    const abilityData = await resData.json()

    const abilityDescription = []
    abilityDescription.push(abilityData.effect_entries[0].effect)
    const key = dataPokemon.abilities[i].ability.name
    dataSpecificPokemon[key] = abilityDescription
  }
  //Gettting pokemon's moves
  let moves = []
  for (let i = 0; i < dataPokemon.moves.length; i++) {
    moves.push(dataPokemon.moves[i].move.name)
  }
  //if retro mode = true
  if (retroMode) {
    const retroImage = dataPokemon.sprites.front_default
  }
  dataSpecificPokemon.stats = dataPokemon.stats
  dataSpecificPokemon.moves = moves
  dataSpecificPokemon.description = pokemonSelectedDescription[0].flavor_text
  dispatch({
    type: DATA_SPECIFIC_POKEMON,
    payload: dataSpecificPokemon
  })
}

export const counterPokemonTypes = (type) => async dispatch => {
  const response = await fetch(`https://pokeapi.co/api/v2/type/${type}/`)
  const result = await response.json()
  dispatch({
    type: COUNTER_POKEMON_TYPES,
    payload: result
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

export const setThemeByPokeType = (type) => dispatch => {
  let randomNum = 0
  if (type) {
    if (type.length >= 2) {
      randomNum = Math.floor(Math.random() * 2) + 0;
    }
  }
  const theme = determineThemeByType(type[randomNum])
  dispatch({
    type: UPDATE_THEME_POKE_TYPE,
    payload: theme
  })
}