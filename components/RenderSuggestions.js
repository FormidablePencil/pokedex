import React, { Component } from 'react'
import { View, Text } from 'native-base'
import { FlatList, TouchableOpacity, Image } from 'react-native'
import { WrappingView, SuggestionsContainer, IndexPokemonImage, IndexContainer, TextNum, TextName, ViewForText } from '../styles/stylesTabs'
import { getSelectedPokemonType, sliceOffDigits } from '../logic/logic'

import { connect } from 'react-redux'
import {
  pokeStatsIsReadyYes,
  generateLocalpokemonList,
  updateSelectedPokemonAndType,
  updateSuggestions,
  fetchSpecificPokemonResources,
  setThemeByPokeType,
  getListOfPokemonTypes,
  getTypeOfSelectPokemon
} from '../actions/pokemonRelatedActions'
import { globalStyles } from '../styles/globalStyles'

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
    await this.props.getListOfPokemonTypes()
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
    updateSelectedPokemonAndType(pokemonSelected)
  }

  onPressHandler = async (selectedPokemon) => {
    const pokeType = await getSelectedPokemonType(Object.values(selectedPokemon.item)[0], this.props.pokemonTypeList)
    await this.props.updateSelectedPokemonAndType(selectedPokemon, pokeType)
    this.props.fetchSpecificPokemonResources(selectedPokemon)
    this.props.setThemeByPokeType(this.props.selectedPokemonNameAndType.type)
    this.props.goToPokeStatsScreen()
    this.props.pokeStatsIsReadyYes()
  }

  render() {
    // console.log(this.props.selectedPokemonNameAndType)
    return (
      <WrappingView>

        <FlatList
          numColumns={2}
          data={this.props.suggestions} //@ it would be easy to add an array of pokemonTypes to suggestions. Come back to it later 
          renderItem={({ item }) => {
            const pokemonNum = Object.keys(item)[0]
            const pokemonName = Object.values(item)[0]
            const searchByNum = sliceOffDigits(pokemonNum)

            return (
              <SuggestionsContainer onPress={() => this.onPressHandler({ item })}>
                <IndexPokemonImage source={{ uri: `https://pokeres.bastionbot.org/images/pokemon/${searchByNum}.png` }} />
                <ViewForText>
                  <TextNum>{pokemonNum}</TextNum>
                  <TextName>{pokemonName}</TextName>
                </ViewForText>
              </SuggestionsContainer>
            )
          }} keyExtractor={(item, index) => index.toString()} />
      </WrappingView>
    )
  }
}

const mapStateToProps = state => ({
  localPokemonList: state.pokemonRelated.localPokemonList,
  selectedPokemonNameAndType: state.pokemonRelated.selectedPokemonNameAndType,
  valueTyped: state.pokemonRelated.valueTyped,
  suggestions: state.pokemonRelated.suggestions,
  selectedPokemon: state.pokemonRelated.selectedPokemon,
  pokeTypes: state.pokemonRelated.pokeTypes,
  theme: state.pokemonTheme,
  specificPokeType: state.pokemonRelated.specificPokeType,
  pokemonTypeList: state.pokemonRelated.pokemonTypeList
})

export default connect(mapStateToProps, {
  pokeStatsIsReadyYes,
  generateLocalpokemonList,
  updateSelectedPokemonAndType,
  updateSuggestions,
  fetchSpecificPokemonResources,
  setThemeByPokeType,
  getListOfPokemonTypes,
  getTypeOfSelectPokemon
})(RenderSuggestions)
