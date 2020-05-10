import { combineReducers } from 'redux'
import pokemonRelatedReducer from './pokemonRelatedReducer'
import fetchedSpecificPokemonReducer from './fetchedSpecificPokemonReducer'
import fetchedAllPokemonDataReducer from './fetchedAllPokemonDataReducer'
import themeReducer from './themeReducer'
import favoritePokemonReducer from './favoritePokemonReducer'
import pokemonTeamReducer from './pokemonTeamReducer'
import pokemonTeamGestureReducer from './pokemonTeamGestureReducer'

export default combineReducers({
  // pokemonRelated: pokemonRelatedReducer,
  fetchedAllPokemon: fetchedAllPokemonDataReducer,
  fetchedSpecificPokemon: fetchedSpecificPokemonReducer,
  theme: themeReducer,
  favoritePokemon: favoritePokemonReducer,
  pokemonTeam: pokemonTeamReducer,
  pokemonTeamGesture: pokemonTeamGestureReducer
})