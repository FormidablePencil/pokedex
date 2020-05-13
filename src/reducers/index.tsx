import { combineReducers } from 'redux'
import fetchedSpecificPokemonReducer from './fetchedSpecificPokemonReducer'
import fetchedAllPokemonDataReducer from './fetchedAllPokemonDataReducer'
import themeReducer from './themeReducer'
import favoritePokemonReducer from './favoritePokemonReducer'
import pokemonTeamReducer from './pokemonTeamReducer'
import pokemonTeamGestureReducer from './pokemonTeamGestureReducer'
import pokeMessageOpenReducer from './pokeMessageOpenReducer'

export default combineReducers({
  fetchedAllPokemon: fetchedAllPokemonDataReducer,
  fetchedSpecificPokemon: fetchedSpecificPokemonReducer,
  theme: themeReducer,
  favoritePokemon: favoritePokemonReducer,
  pokemonTeam: pokemonTeamReducer,
  pokemonTeamGesture: pokemonTeamGestureReducer,
  pokeMessageOpen: pokeMessageOpenReducer
})