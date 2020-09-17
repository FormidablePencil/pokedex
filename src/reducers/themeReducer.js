import { FETCHED_SPECIFIC_POKEMON_DATA, SAVE_FROM_LOCALSTORAGE, SET_POKEMON_THEME } from "../actions/types"

const initialState = 'bug'

export default (state = initialState, { type, payload }) => {
   switch (type) {

      case FETCHED_SPECIFIC_POKEMON_DATA:
         if (payload.pokemonInfo.types.length >= 2) {
            const randomNum = Math.floor(Math.random() * 2)
            return payload.pokemonInfo.types[randomNum].type.name
         } else return payload.pokemonInfo.types[0].type.name

      case SET_POKEMON_THEME:
         return payload

      case SAVE_FROM_LOCALSTORAGE:
         return payload.theme

      default:
         return state
   }
}
