import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'


const initalState = {}

const middleware = [thunk]

const store = createStore(
  rootReducer,
  initalState,
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

//compose from redux done this to store \/ \/ but Native React probably has some other method of making chrome extension devtools work for the project.
// const store = createStore(
//   rootReducer,
//   initalState,
//   compose(
//     applyMiddleware(...middleware),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   )
// )

export default store;