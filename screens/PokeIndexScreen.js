import React, { Component } from 'react'
// import * as Font from 'expo-font'
// import { Ionicons } from '@expo/vector-icons'
import AppLoading from '../components/AppLoading'
import { Icon, View, Header, Container, Item } from 'native-base'
import Search from '../components/Search'
import RenderSuggestions from '../components/RenderSuggestions'
import { connect } from 'react-redux'
import { experimentingRedux, reduxUpdateValueTyped, actiontest123 } from '../actions/pokemonRelatedActions'
import { Text, Button } from 'react-native'

export class PokeIndexScreen extends Component {

  goToPokeStatsScreen = () => {
    // this.props.navigation.navigate('PokeStats')
  }
  render() {
    return (
      <Container>
        <Header searchBar>
          <Item>
            <Icon active name='search' />
            <Search
              localPokemonList={this.props.localPokemonList}
              reduxUpdateValueTyped={this.props.reduxUpdateValueTyped}
            />
            <Icon active name='people' />
          </Item>
        </Header>
        <View>
          {/* <Button title="click herre erer" onPress={reduxUpdateValueTyped()} /> */}
          <RenderSuggestions goToPokeStatsScreen={this.goToPokeStatsScreen} />
        </View>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  localPokemonList: state.pokemonRelated.localPokemonList,
})

export default connect(mapStateToProps, { experimentingRedux, reduxUpdateValueTyped, actiontest123 })(PokeIndexScreen)