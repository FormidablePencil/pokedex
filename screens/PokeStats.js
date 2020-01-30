import React, { Component } from 'react'
import { Text, View, Image, StatusBar, ImageBackground } from 'react-native'
import { Container, Header, Body, Right, Left, Content, Input } from 'native-base';
import TabsComp from '../components/TabsComp';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { globalStyles } from '../styles/globalStyles';
import PokemonFrame from '../components/PokemonFrame';
import CustomHeader from '../components/CustomHeader'

import { connect } from 'react-redux'
import { createPokemon } from '../actions/postActions' // this is the funciton that make the dominos of redux tumble down

export class PokeStats extends Component {
  
  static navigationOptions = ({ navigation }) => {
    return {
      headerTransparent: true,
      headerTitle: () =>
        <CustomHeader
          title={navigation.getParam('pokemonName')}
          type={navigation.getParam('type')}
        />
    }
  }

  state = {
    dataPokemon: '',
    dataType: '',
    type: [],
    pokemonId: '',
    name: '',
    theme: {
      nonChanging: {
        tabColor: 'white'
      }
    }
  }

  componentDidMount = async () => {
    const { navigation } = this.props;
    const name = JSON.stringify(navigation.getParam('pokemonName'))
    const pokemonName = name.slice(1, name.length - 1)
    const resPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`)
    const resType = await fetch(`https://pogoapi.net/api/v1/pokemon_types.json`)
    const dataPokemon = await resPokemon.json()
    const dataType = await resType.json()
    this.setState({ dataPokemon })
    this.setState({ dataType })
    const uppercasedPokemonName = pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)
    const type = dataType.filter(item => item.pokemon_name === uppercasedPokemonName)
    this.setState({ type: type[0].type, pokemonId: type[0].pokemon_id, name: type[0].pokemon_name })
    this.updateTheme()
    navigation.setParams({ type: this.state.type })
    


    //~ this is the redux function: 
    this.props.createPokemon('fuckMister')
    console.log(this.props.myAwesomePokemon)
  }

  updateTheme = () => {
    switch (this.state.type[0]) {
      case 'Fire':
        this.setState({
          theme: {
            nonChanging: {
              tabColor: ''
            }
          }
        })
        break
      case 'Grass':
        this.setState({
          theme: {
            nonChanging: {
              tabColor: 'green'
            }
          }
        })
        break
      case 'Water':
        this.setState({
          theme: {
            nonChanging: {
              tabColor: 'blue'
            }
          }
        })
        break
    }
  }

  render() {
    return (
      <Container>
        <Content>
          <ImageBackground resizeMethod={'auto'} style={{ position: 'absolute', height: '100%', width: '100%' }} source={require('../assets/images/itl.cat_gri-wallpaper_1396871.png')}>
          </ImageBackground>
          <PokemonFrame number={this.state.number} />
          <View>
            <View style={{ ...globalStyles.simpleView, marginTop: 20 }}></View>
            <TabsComp
              tabColor={this.state.theme.nonChanging.tabColor}
              pokemonId={this.state.pokemonId}
              type={this.state.type}
            />
          </View>
        </Content>
      </Container>

    )
  }
}

const mapStateToProps = state => ({
  myAwesomePokemon: state.posts.myPokemonThatIveCreated
})

export default connect(mapStateToProps, { createPokemon })(PokeStats)