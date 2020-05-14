import { REMOVE_FAVORITE, SAVE_FAVORITE, SAVE_FROM_LOCALSTORAGE } from "../actions/types"

const initialState = []


export default (state = initialState, { type, payload }) => {
  switch (type) {

    case SAVE_FAVORITE:
      return [...state, payload]

    case REMOVE_FAVORITE:
      return state.filter(pokemon => pokemon !== payload)

    case SAVE_FROM_LOCALSTORAGE:
      if (payload.favList === null) return initialState
      return payload.favList
    default:
      return state
  }
}
