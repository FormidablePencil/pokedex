import { FETCHED_SPECIFIC_POKEMON_DATA, CLEAR_SPECIFIC_POKEMON_DATA } from "../actions/types"

const initialState = {

}

export default (state = initialState, { type, payload }) => {
   switch (type) {

      case FETCHED_SPECIFIC_POKEMON_DATA:
         return payload

      case CLEAR_SPECIFIC_POKEMON_DATA:
         return initialState

      default:
         return state
   }
}
