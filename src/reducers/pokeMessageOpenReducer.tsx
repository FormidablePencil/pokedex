import { TOGGLE_POKE_MSG_TEAM_LIST, RESET_POKE_MSG_TEAM_LIST, ADD_TO_TEAM } from "../actions/types"

const initialState = false

export default (state = initialState, { type, payload }) => {
  switch (type) {

    // case TOGGLE_POKE_MSG_TEAM_LIST:
    //   return !state

    case ADD_TO_TEAM:
      return true

    case RESET_POKE_MSG_TEAM_LIST:
      return false

    default:
      return state
  }
}
