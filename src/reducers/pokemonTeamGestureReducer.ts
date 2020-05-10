import { GESTURE_ON, GESTURE_OFF } from "../actions/types"

const initialState = false

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case GESTURE_ON:
      return true

    case GESTURE_OFF:
      return false

    default:
      return state
  }
}
