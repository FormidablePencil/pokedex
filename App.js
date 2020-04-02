import React, { createContext, useState, Component } from 'react'
import { Provider } from 'react-redux'
import store from './store'
import StackPokemon from './navigators/StackPokemon';
import ErrorBoundaries from './ErrorBoundaries';
import { UIManager } from 'react-native';

const App = () => {
  if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }
  return (
    <>
      <ErrorBoundaries />
      <Provider store={store}>
        <StackPokemon />
      </Provider>
    </>
  )
}


export default App