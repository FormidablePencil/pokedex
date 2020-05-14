import { ADD_TO_TEAM, REMOVE_FROM_TEAM, SAVE_FROM_LOCALSTORAGE } from "../actions/types"

const initialState = []

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case ADD_TO_TEAM:
      if (state.length < 6) {
        return [...state, payload]
      } else return state

    case REMOVE_FROM_TEAM:
      return state.filter(pokemon => pokemon !== payload)

    case SAVE_FROM_LOCALSTORAGE:
      if (payload.favList === null) return initialState
      return payload.teamList

    default:
      return state
  }
}
