import React, { Component } from 'react'
import { View, ImageBackground } from 'react-native'
import { Content } from 'native-base';
import TabsComp from '../components/TabsComp';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { SimpleView, globalStyles } from '../styles/globalStyles';
import PokemonFrame from '../components/PokemonFrame';
import CustomHeader from '../components/CustomHeader'
import { typeBoxColorSwitch } from '../logic/themingLogic'
import styled, { ThemeProvider } from "styled-components";

import { connect } from 'react-redux'
import { pokeStatsIsReadyNo, setThemeByPokeType } from '../actions/pokemonRelatedActions' // this is the funciton that make the dominos of redux tumble down

export class PokeStats extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      headerTransparent: true,
      headerTitle: () =>
        <CustomHeader
          pokeNumber={navigation.getParam('pokeNumber')}
          title={navigation.getParam('pokemonSelected')}
          type={navigation.getParam('pokeTypes')}
          themeColor={navigation.getParam('themeColor')}
        />
    }
  }

  
  componentDidMount = () => {
    this.props.navigation.setParams({ pokeTypes: this.props.specificPokeType })
    this.props.navigation.setParams({ pokemonSelected: Object.values(this.props.selectedPokemon.item)[0] })
    this.props.navigation.setParams({ pokeNumber: Object.keys(this.props.selectedPokemon.item)[0] }) 

    const types = this.props.specificPokeType

    let themeCulor = [];
    for (let i = 0; i < types.length; i++) {
      const result = typeBoxColorSwitch(types[i])
      themeCulor.push(result)
    }

    this.props.navigation.setParams({ themeColor: this.props.theme.color }) //you must only pass props into setPrams one at a time. Objects don't see to load on time. 
  }

  render() {
    return (
      <Content>
        <View style={{ height: 400 }}>
          <ImageBackground
            resizeMethod={'auto'} style={{ position: 'absolute', height: '100%', width: '100%' }}
            source={this.props.theme.backgroundImage}>
            <PokemonFrame pokemonNumber={Object.keys(this.props.selectedPokemon.item)[0]} />
            <SimpleView></SimpleView>
          </ImageBackground>
        </View>
        <View>
          <TabsComp
            pokeData={{}}
          />
        </View>
      </Content>
    )
  }
}

const mapStateToProps = state => ({
  selectedPokemon: state.pokemonRelated.selectedPokemon,
  pokeTypes: state.pokemonRelated.pokeTypes,
  isReady: state.pokemonRelated.isReady,
  theme: state.pokemonRelated.theme,
  pokeData: state.pokemonRelated.pokeData,
  pokemonSelectedEvolution: state.pokemonRelated.pokemonSelectedEvolution,
  pokemonSelectedDescription: state.pokemonRelated.pokemonSelectedDescription,
  dataSpecificPokemon: state.pokemonRelated.dataSpecificPokemon,
  specificPokeType: state.pokemonRelated.specificPokeType
})

export default connect(mapStateToProps, { pokeStatsIsReadyNo, setThemeByPokeType })(PokeStats)