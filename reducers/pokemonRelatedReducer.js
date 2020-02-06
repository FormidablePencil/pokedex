import {
  UPDATE_SUGGESTIONS,
  UPDATE_VALUE_TYPED,
  GENERATING_LOCAL_POKEMONLIST,
  SELECTED_POKEMON,
  POKETYPE_OF_SELECTED_POKEMON,
  NOT_READY_POKESTATS,
  IS_READY_POKESTATS,
  UPDATE_THEME_POKE_TYPE,
  EXTENSIVE_INFO_POKEMON_SELECTED,
  POKEMON_SELECTED_EVOLUTION,
  POKEMON_SELECTED_DESCRIPTION,
  COUNTER_POKEMON_TYPES
} from '../actions/types'

const initialState = {
  selectedPokemon: '',
  pokeData: [],
  localPokemonList: '',
  valueTyped: 'inital',
  suggestions: [],
  pokeTypes: [],
  isReady: 'false',
  theme: [],
  pokemonSelectedEvolution: [],
  pokemonSelectedDescription: []

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
    case POKEMON_SELECTED_EVOLUTION:
      return {
        ...state,
        pokemonSelectedEvolution: action.payload,
      }
    case POKEMON_SELECTED_DESCRIPTION:
      return {
        ...state,
        pokemonSelectedDescription: action.payload,
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
    case EXTENSIVE_INFO_POKEMON_SELECTED:
      return {
        ...state,
        pokeData: action.payload 
      }
      case COUNTER_POKEMON_TYPES:
        return {
          theme: action.payload
        }
    default:
      return state;
  }
}