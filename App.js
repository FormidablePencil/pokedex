import React, { createContext, useState } from 'react'
import { Provider } from 'react-redux'
import store from './store'
import StackPokemon from './navigators/StackPokemon';
import ErrorBoundaries from './ErrorBoundaries';
import { UIManager } from 'react-native';

export const PokemonContextProvider = createContext()


const App = () => {
  
  if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }
  return (
    <PokemonContextProvider.Provider value={{}}>
    <>
      <ErrorBoundaries />
      <Provider store={store}>
        <StackPokemon />
      </Provider>
    </>
    </PokemonContextProvider.Provider>

  )
}


export default App