import { FETCHED_SPECIFIC_POKEMON_DATA } from "../actions/types"

const initialState = {

}

export default (state = initialState, { type, payload }) => {
   switch (type) {

   case FETCHED_SPECIFIC_POKEMON_DATA:
      console.log(payload.pokemonInfo.types)
      return state

   default:
      return state
   }
}
