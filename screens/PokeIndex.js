import React, { Component } from 'react'
import * as Font from 'expo-font'
import { Ionicons } from '@expo/vector-icons'
import AppLoading from '../components/AppLoading'
import { Icon, View, Header, Container, Item } from 'native-base'
import Search from '../components/Search'
import RenderSuggestions from '../components/RenderSuggestions'
import { connect } from 'react-redux'
import { experimentingRedux, reduxUpdateValueTyped } from '../actions/pokemonRelatedActions'

export class PokeIndex extends Component {
  static navigationOptions = {
    header: false,
  };

  state = {
    isReady: false,
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    })
    this.setState({ isReady: true });
  }

  goToPokeStatsScreen = () => {
    this.props.navigation.navigate('PokeStats')
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />
    }
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
          <RenderSuggestions goToPokeStatsScreen={this.goToPokeStatsScreen} />
        </View>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  localPokemonList: state.pokemonRelated.localPokemonList,
})

export default connect(mapStateToProps, { experimentingRedux, reduxUpdateValueTyped })(PokeIndex);