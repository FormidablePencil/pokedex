import React, { Component } from 'react'
import * as Font from 'expo-font'
import { Ionicons } from '@expo/vector-icons'
import AppLoading from '../components/AppLoading'
import { Icon, View, Header, Container, Item } from 'native-base'
import Search from '../components/Search'
import RenderSuggestions from '../components/RenderSuggestions'
import { connect } from 'react-redux'
import { experimentingRedux } from '../actions/postActions'

export class PokeIndex extends Component {
  static navigationOptions = {
    header: false,
  };

  //most should be deleted and moved from state
  state = {
    isReady: false, //keep
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />
    }
    return (
      <Container>
        <View style={{ backgroundColor: 'gray' }} />
        <Header searchBar>
          <Item>
            <Icon active name='search' />
            <Search />
            <Icon active name='people' />
          </Item>
        </Header>
        <View>
          <RenderSuggestions />
        </View>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.pokemonRelated.items
})

export default connect(mapStateToProps, { experimentingRedux })(PokeIndex);