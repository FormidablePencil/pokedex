import { FETCH_POST, NEW_POKEMON, SELECTED_POKEMON } from '../actions/types'

const initialState = {
  items: [],
  myPokemonThatIveCreated: [],
  selectedPokemon: ''
}

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_POST:
      return {
        ...state,
        items: action.payload
      }
    case NEW_POKEMON:
      return {
        ...state,
        myPokemonThatIveCreated: action.payload
      }
    case SELECTED_POKEMON:
      return {
        ...state,
        selectedPokemon: action.selectedPokemon
      }
    default:
      return state;
  }
}