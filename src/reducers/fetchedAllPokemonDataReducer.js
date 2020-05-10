import { SAVE_DATA_TO_ALL_POKEMON, SAVE_FROM_LOCALSTORAGE } from "../actions/types"

const initialState = {

}

export default (state = initialState, { type, payload }) => {
   switch (type) {

      case SAVE_DATA_TO_ALL_POKEMON:
         return payload
         
      default:
         return state
   }
}
