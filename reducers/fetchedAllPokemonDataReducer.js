import { SAVE_DATA_TO_ALL_POKEMON } from "../actions/types"

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
