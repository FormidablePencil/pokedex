import React, { Component } from 'react'
import StackNav from './routes/StackNav'
import { Provider } from 'react-redux'
import store from './store'
import StackPokemonScreen from './routes/StackPokemonScreen'
import { PokeIndexScreen } from './screens/PokeIndexScreen'


export default function App () {
    return (
      <Provider store={store}>
        <StackPokemonScreen />
      </Provider>
    )
}
