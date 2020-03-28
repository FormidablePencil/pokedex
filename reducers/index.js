import {combineReducers} from 'redux'
import pokemonRelatedReducer from './pokemonRelatedReducer' 
import fetchedSpecificPokemonReducer from './fetchedSpecificPokemonReducer'
import fetchedAllPokemonDataReducer from './fetchedAllPokemonDataReducer'

export default combineReducers({
  // pokemonRelated: pokemonRelatedReducer,
  fetchedAllPokemon: fetchedAllPokemonDataReducer,
  fetchedSpecificPokemon: fetchedSpecificPokemonReducer
})