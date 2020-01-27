import React, { Component } from 'react'
import * as Font from 'expo-font'
import { Ionicons } from '@expo/vector-icons'
import AppLoading from './components/AppLoading'
import { View, Text, Header, Left, Right, Body, Container, Button } from 'native-base'
import { globalStyles } from './styles/globalStyles'
import gen1 from './renderImagesDynamically/gen1'
import { Dimensions } from 'react-native'
import Search from './components/Search'
import RenderSuggestions from './components/RenderSuggestions'

const deviceWidth = Dimensions.get("window").width;

//~ we need to create a new screen to display the pokemon

export default class App extends Component {
  state = {
    isReady: false,
    pokemonData: [],
    pokemonName: [],
    suggestions: '',
    inputValue: '',
    btnSearchById: false,
    updateFetchedPokemonStatsApi: []
  }

  async componentDidMount() {
    // const searchPokemonByName = gen1.map(item => (item.substr(3, item.indexOf('.png') - 3))).map(item => (item.replace('_', '')))
    const searchPokemonByName = gen1
    //@ We are going tp covert /\ to regex and it'll test for either number or name. We'll just truncate() the .png Learn RegExp
    this.setState({ pokemonName: searchPokemonByName })

    const searchPokemonByName2 = gen1.map(item => (item.substr(3, item.indexOf('.png') - 3))).map(item => (item.replace('_', '')))
    this.setState({ suggestions: searchPokemonByName2 })

    const response = await fetch('https://pokeapi.co/api/v2/pokemon')
    const pokemonData = await response.json()
    this.setState({ pokemonData })

    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  updateSuggestions = (suggestions, inputValue) => {
    this.setState({ suggestions: suggestions, inputValue: inputValue })
  }

  updateBtnSearchById = (value) => {
    const regex2 = new RegExp('^[0-9]*$'); //passed if text is an integer
    if(regex2.test(value)) {
      this.setState({ btnSearchById: true })
    }
    this.setState({ btnSearchById: true })
  }

  updateFetchedPokemonStatsApi = (data) => {
    this.setState({ fetchedPokemonStatsApi: data })
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />
    }
    return (
      <Container>
        <Header style={{ marginTop: 30 }} searchBar>
          <Left />
          <Body>
            <Search
              inputValue={this.state.inputValue}
              pokemonName={this.state.pokemonName}
              updateSuggestions={this.updateSuggestions}
              updatePokemonName={this.updatePokemonName}
              updateBtnSearchById={this.updateBtnSearchById}
              updateFetchedPokemonStatsApi={this.updateFetchedPokemonStatsApi}
            />
          </Body>
          <Right />
        </Header>
        <View>
          <RenderSuggestions
            suggestions={this.state.suggestions}
            updateFetchedPokemonStatsApi={this.updateFetchedPokemonStatsApi}
          />
          {this.state.btnSearchById ? (

            <Button warning>
              <Text>
                Find
              </Text>
            </Button>
          ) : (
            null
            )}

        </View>
      </Container>
    )
  }
}
//https://pokeapi.co/api/v2/pokemon/${search}/`