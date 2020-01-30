import React, { Component } from 'react'
import StackNav from './routes/StackNav'
import { Provider } from 'react-redux'
import store from './store'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <StackNav updatingSelectedPokemon={this.updatingSelectedPokemon} />
      </Provider>
    )
  }
}