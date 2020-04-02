import { FETCHED_SPECIFIC_POKEMON_DATA } from "../actions/types"

const initialState = {

}

export default (state = initialState, { type, payload }) => {
   switch (type) {

      case FETCHED_SPECIFIC_POKEMON_DATA:
         // if (payload.pokemonInfo.types.length === 2) {
         //    const randomNum = Math.floor(Math.random() * 2)
         //    return payload.pokemonInfo.types[randomNum]
         // } else return payload.pokemonInfo.types[0]
         if (payload.pokemonInfo.types.length >= 2) {
            const randomNum = Math.floor(Math.random() * 2)
            return payload.pokemonInfo.types[randomNum].type.name
         } else return payload.pokemonInfo.types[0].type.name
      default:
         return state
   }
}
