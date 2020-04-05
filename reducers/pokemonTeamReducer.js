import { ADD_TO_TEAM, REMOVE_FROM_TEAM } from "../actions/types"

const initialState = [3, 5, 2, 1]

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case ADD_TO_TEAM:
    return [ ...state, payload ]
    
    case REMOVE_FROM_TEAM: 
    return state.filter(pokemon => pokemon !== payload)

  default:
    return state
  }
}
