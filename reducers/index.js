import {combineReducers} from 'redux'
import pokemonRelatedReducer from './pokemonRelatedReducer' 
import pokemonTypesReducer from './pokeTypesReducer'

export default combineReducers({
  pokemonRelated: pokemonRelatedReducer,
  pokemonTheme: pokemonTypesReducer
})