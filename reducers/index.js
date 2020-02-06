import {combineReducers} from 'redux'
import pokemonRelatedReducer from './pokemonRelatedReducer' 

export default combineReducers({
  pokemonRelated: pokemonRelatedReducer,
})