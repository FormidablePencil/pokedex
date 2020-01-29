import React, { Component } from 'react'
import StackNav from './routes/StackNav'

export default class App extends Component {
  render() {
    return (
      <StackNav updatingSelectedPokemon={this.updatingSelectedPokemon} />
    )
  }
}