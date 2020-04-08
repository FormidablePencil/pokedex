import { REMOVE_FAVORITE, SAVE_FAVORITE, SAVE_FROM_LOCALSTORAGE } from "../actions/types"

const initialState = [3, 5, 2, 1]


export default (state = initialState, { type, payload }) => {
  switch (type) {

    case SAVE_FAVORITE:
      console.log('save fav')
      // return initialState
      // console.log(payload)
      return [...state, payload]

    case REMOVE_FAVORITE:
      console.log('remove fav')
      return state.filter(pokemon => pokemon !== payload)

      case SAVE_FROM_LOCALSTORAGE:
        return payload.favList
    default:
      return state
  }
}
