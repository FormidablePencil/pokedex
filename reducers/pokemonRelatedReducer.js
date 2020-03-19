import {
  UPDATE_SUGGESTIONS,
  UPDATE_VALUE_TYPED,
  GENERATING_LOCAL_POKEMONLIST,
  SELECTED_POKEMON_NAME_AND_TYPE,
  NOT_READY_POKESTATS,
  IS_READY_POKESTATS,
  UPDATE_THEME_POKE_TYPE,
  DATA_SPECIFIC_POKEMON,
  COUNTER_POKEMON_TYPES,
  GET_LIST_POKEMON_TYPE,
  TEST123
} from '../actions/types'

const initialState = {
  selectedPokemonNameAndType: '',
  pokemonTypeList: '',
  specificPokeType: [],
  dataSpecificPokemon: [],
  localPokemonList: '',
  valueTyped: 'inital',
  suggestions: [],
  isReady: 'false',
  theme: [],
}

export default function (state = initialState, action) {
  switch (action.type) {
    case SELECTED_POKEMON_NAME_AND_TYPE:
      return {
        ...state,
        selectedPokemonNameAndType: action.payload
      }
    case GET_LIST_POKEMON_TYPE:
      return {
        ...state,
        pokemonTypeList: action.payload
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
    case DATA_SPECIFIC_POKEMON:
      return {
        ...state,
        dataSpecificPokemon: action.payload,
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
    case UPDATE_THEME_POKE_TYPE:
      return {
        ...state,
        theme: action.payload
      }
    case COUNTER_POKEMON_TYPES:
      return {
        theme: action.payload
      }
    case TEST123:
      console.log(action.payload)
      return state
    default:
      return state;
  }
}