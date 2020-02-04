import { UPDATE_SUGGESTIONS, UPDATE_VALUE_TYPED, GENERATING_LOCAL_POKEMONLIST, EXPER_REDUX, NEW_POKEMON, SELECTED_POKEMON, POKETYPE_OF_SELECTED_POKEMON, NOT_READY_POKESTATS, IS_READY_POKESTATS } from '../actions/types'

const initialState = {
  fetchedPokemonData: [],
  myPokemonThatIveCreated: [],
  selectedPokemon: '',
  localPokemonList: '',
  valueTyped: 'inital',
  suggestions: [],
  pokeTypes: [],
  isReady: 'false'
}

export default function (state = initialState, action) {
  switch (action.type) {
    case SELECTED_POKEMON:
      return {
        ...state,
        selectedPokemon: action.payload
      }
    case GENERATING_LOCAL_POKEMONLIST:
      return {
        ...state,
        localPokemonList: action.payload
      }
    case UPDATE_VALUE_TYPED:
      return {
        ...state,
        valueTyped: action.payload
      }
    case UPDATE_SUGGESTIONS:
      return {
        ...state,
        suggestions: action.payload
      }
    case POKETYPE_OF_SELECTED_POKEMON:
      return {
        ...state,
        pokeTypes: action.payload,
      }
    case NOT_READY_POKESTATS:
      return {
        ...state,
        isReady: false
      }
    case IS_READY_POKESTATS:
      return {
        ...state,
        isReady: true
      }
    default:
      return state;
  }
}