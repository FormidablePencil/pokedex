import { combineReducers } from 'redux'
import pokemonRelatedReducer from './pokemonRelatedReducer'
import fetchedSpecificPokemonReducer from './fetchedSpecificPokemonReducer'
import fetchedAllPokemonDataReducer from './fetchedAllPokemonDataReducer'
import themeReducer from './themeReducer'

export default combineReducers({
  // pokemonRelated: pokemonRelatedReducer,
  fetchedAllPokemon: fetchedAllPokemonDataReducer,
  fetchedSpecificPokemon: fetchedSpecificPokemonReducer,
  theme: themeReducer
})