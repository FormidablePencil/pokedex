import React, { Component } from 'react'
import { Text, View, Image, StatusBar, ImageBackground } from 'react-native'
import { Container, Header, Body, Right, Left, Content } from 'native-base';
import TabsComp from '../components/TabsComp';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { globalStyles } from '../styles/globalStyles';
import PokemonFrame from '../components/PokemonFrame';


export default class PokeStats extends Component {
  static navigationOptions = ({ navigation }) => {
    // header: false,
    return {
      headerTransparent: true,
      title: navigation.getParam('pokemonName')
    }
  }
  //~ 1. to add the pokemon types I'd have to place it in the header then.
  //~ 2.  implement the pokemon static bar using the animated/Whatever else they have. Easy implementation.
  //~ 3. change font color of tab titles. 
  //~ 4. position pokemonImage futher down to the white view.
  //~ 5. find the pokemon images api (I should have it somewhere) 
  //~ 6. Set the background gif images
  //~ 7. implement rendering corresponding image to the pokemon type that was fetched for
  
  //~ 8. I must use figma to sketch the look for tabs Evlolution and Moves. Use the pokedex design image. Also design the pokemon team screen and liked screen.
  //~ 9. Then work on the last of the tabs.
  
  //~ 10. move onto pokemon index page and add the corresponing images (link to uri image).
  //~ 11. make it look like the design image with surounding boxes 
  //~ 12. implement the search by id functionaility (that'll take to learn RegEx)
  
  //~ 13. Lastly create a pokemon team screen
  //~ 14. implement liking functionality and rendering it into the 'liked' screen
  // {
  //   defaultNavigationOptions: {
  //     headerTintColor: '#fff',
  //     headerStyle: {
  //       backgroundColor: '#000',
  //     },
  //   },
  //   navigationOptions: {
  //     tabBarLabel: 'Home!',
  //   },
  // }

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



  //~ Let's style before rending the data. //How do you cashe data... meaning to store the data locally... how do you even store it locally.
  //~ We're going to need to retrieve an image corresponding to the pokemon we clicked on. These will be from the internet and later I'll try to implement an 'auto downloading' functionality where the images get downloaded from the databsae into local storage for use and the uri stays the same, the thing unlike require that you can't render images dynamically
  render() {
    return (
      <Container>
        <Content>
          <View style={globalStyles.pokemonTypePosition}>
            {this.state.type.map((item, index) => (<View style={globalStyles.pokemonTypes}><Text style={{ color: 'white' }} key={index}>{item}</Text></View>))}
          </View>
          <ImageBackground style={{ width: "100%", height: '100%' }} source={require('../assets/Pokémon/1stGeneration/005Charmeleon.png')}>

            <PokemonFrame />
            <View>
              <View style={globalStyles.simpleView}></View>
              <TabsComp
                tabColor={this.state.theme.nonChanging.tabColor}
                pokemonId={this.state.pokemonId}
                type={this.state.type}
              />
            </View>
          </ImageBackground>
        </Content>
      </Container>

    )
  }
}
