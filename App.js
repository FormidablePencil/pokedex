import React, { createContext, useState } from 'react'
import { Provider } from 'react-redux'
import store from './store'
import StackPokemon from './navigators/StackPokemon';

const App = () => {
  return (
    <Provider store={store}>
      <StackPokemon />
    </Provider>
  )
}

export default App