import React, { Component } from 'react'
import { View, Text, ListItem, Button } from 'native-base'
import { FlatList, TouchableOpacity } from 'react-native'
import gen1 from '../renderImagesDynamically/gen1'
import { reduxPokemonSelected } from '../actions/postActions'

export class RenderSuggestions extends Component {
  state = {
    pokemonList: []
  }

  spacificPokemonSelected = (selected) => {
    const pokemonSelected = selected.item.toLowerCase()
    reduxPokemonSelected(pokemonSelected)
  }

  componentDidMount = () => {
    const pokemonList = gen1.map(item => (item.substr(3, item.indexOf('.png') - 3))).map(item => (item.replace('_', '')))
    this.setState({ pokemonList: pokemonList })
  }

  render() {
    if ('green' === 0) {
      return null
    } else {
      return (
        <View>
          <FlatList
            data={this.state.pokemonList}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => this.spacificPokemonSelected({ item })}
              >
                <Text>{item}</Text>
              </TouchableOpacity>
            )} keyExtractor={(item, index) => index.toString()} />
        </View>
      )
    }
  }
}

export default RenderSuggestions
