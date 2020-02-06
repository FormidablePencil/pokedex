import React, { Component } from 'react'
import { View, Text } from 'native-base'
import { FlatList, TouchableOpacity } from 'react-native'
import { SuggestionsContainer } from '../styles/stylesTabs'

import { connect } from 'react-redux'
import {
  generateLocalpokemonList,
  reduxPokemonSelected,
  updateSuggestions,
  fetchPokemonResources,
  setThemeByPokeType,
} from '../actions/pokemonRelatedActions'

export class RenderSuggestions extends Component {
  autoSuggestionFunctionality = (valueTyped) => {
    const localPokemonList = this.props.localPokemonList
    const regexTestForMatch = new RegExp(`${valueTyped}`, 'ig') //check if matches anywhere
    const regexTestForNum = new RegExp('^[0-9]*$') //check if integer
    const autoSuggestionList = []

    //Implement search by pokemon types. I already have the json file, all I have to do is compaure all pokemon by the type searched.
    if (valueTyped.length > 0 && regexTestForNum.test(valueTyped)) { //If number
      //If number then test all pokemon that pass the RegEx test of being a number 

    } else if (valueTyped.length > 0) { //else if letter 

      for (let i = 0; i < Object.keys(localPokemonList).length; i++) {
        const pokemon = Object.values(localPokemonList[i])[0]

        if (regexTestForMatch.test(pokemon) == true) {
          autoSuggestionList.push(pokemon)
        }
      }
      if (autoSuggestionList) {
        this.props.updateSuggestions(autoSuggestionList)
      }
    } else {
      this.props.updateSuggestions(this.props.localPokemonList)
    }
  }

  componentDidMount = async () => {
    await this.props.generateLocalpokemonList()
    this.props.updateSuggestions(this.props.localPokemonList)
  }

  componentDidUpdate(prevProps) {
    const valueTyped = this.props.valueTyped
    if (prevProps.valueTyped !== valueTyped) {
      this.autoSuggestionFunctionality(valueTyped)
    }
  }

  spacificPokemonSelected = (selected) => {
    const pokemonSelected = selected.item.toLowerCase()
    reduxPokemonSelected(pokemonSelected)
  }

  onPressHandler = async (selectedPokemon) => {
    this.props.reduxPokemonSelected(selectedPokemon)
    await this.props.fetchPokemonResources(selectedPokemon) //Learn to cache this this to local storage.
    this.props.setThemeByPokeType(this.props.pokeTypes)
    this.props.goToPokeStatsScreen()
  }

  render() {
    return (
      <View>
        <FlatList
          numColumns={2}
          data={this.props.suggestions}
          renderItem={({ item }) => (
            <SuggestionsContainer
              onPress={() => this.onPressHandler({ item })}
            >
              <Text>{Object.values(item)}</Text>
            </SuggestionsContainer>
          )} keyExtractor={(item, index) => index.toString()} />
      </View>
    )
  }
}

const mapStateToProps = state => ({
  localPokemonList: state.pokemonRelated.localPokemonList,
  valueTyped: state.pokemonRelated.valueTyped,
  suggestions: state.pokemonRelated.suggestions,
  selectedPokemon: state.pokemonRelated.selectedPokemon,
  pokeTypes: state.pokemonRelated.pokeTypes,
  theme: state.pokemonTheme,
})

export default connect(mapStateToProps, {
  generateLocalpokemonList,
  reduxPokemonSelected,
  updateSuggestions,
  fetchPokemonResources,
  setThemeByPokeType,
})(RenderSuggestions)
