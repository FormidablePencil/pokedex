import React, { Component } from 'react'
import { View, ImageBackground, Button, Text, ScrollView } from 'react-native'
import { Content } from 'native-base';
import TabsComp from '../components/TabsComp';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { SimpleView, globalStyles, CenterAbsolutelyEverything } from '../styles/globalStyles';
import PokemonFrame from '../components/PokemonFrame';
import CustomHeader from '../components/CustomHeader'
import styled, { ThemeProvider } from "styled-components";
import { getSelectedPokemonType, getEvolutionsTypes } from '../logic/logic'

import { connect } from 'react-redux'
import { pokeStatsIsReadyNo, pokeStatsIsReadyYes, setThemeByPokeType } from '../actions/pokemonRelatedActions' // this is the funciton that make the dominos of redux tumble down

import { sliceOffDigits } from '../logic/logic';
import CustomBackButton from '../components/CustomBackButton';

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
        />,
      headerLeft: () =>
        <CustomBackButton backButton={navigation.getParam('backButton')} />

    }
  }

  backButton = () => {
    console.log('worked')
    this.props.navigation.navigate('Home')
    this.props.pokeStatsIsReadyNo()
  }

  componentDidMount = () => {
    const navigation = this.props.navigation
    navigation.setParams({ backButton: this.backButton })
    navigation.setParams({ pokeTypes: this.props.specificPokeType })
    navigation.setParams({ pokemonSelected: Object.values(this.props.selectedPokemonNameAndType.name.item)[0] })
    navigation.setParams({ pokeNumber: Object.keys(this.props.selectedPokemonNameAndType.name.item)[0] })
    navigation.setParams({ themeColor: this.props.theme.color }) //you must only pass props into setPrams one at a time. Objects don't see to load on time. 
    this.props.pokeStatsIsReadyYes()
  }

  render() {
    const pokemonNum = Object.keys(this.props.selectedPokemonNameAndType.name.item)[0]
    let slicedPokemonNum = sliceOffDigits(pokemonNum)

    // console.log(this.props.dataSpecificPokemon.description)

    const abilitiesAndDescriptions = this.props.dataSpecificPokemon.abilitiesAndDescriptions
    const stats = this.props.dataSpecificPokemon.stats
    const moves = this.props.dataSpecificPokemon.moves
    const description = this.props.dataSpecificPokemon.description

    const evolutions = this.props.dataSpecificPokemon.evolutions
    let evolutionsAndInfo
    if (evolutions) {
      evolutionsAndInfo = getEvolutionsTypes(evolutions, this.props.pokemonTypeList)
    }

    return (
      <View style={{ position: 'relative' }}>
        <ScrollView>
          <View style={{ height: 400 }}>
            <ImageBackground
              resizeMethod={'auto'} style={{ height: 400, width: 400, position: 'absolute', top: 0 }}
              source={this.props.theme.backgroundImage}>
              <PokemonFrame pokemonNumber={slicedPokemonNum} />
              <SimpleView></SimpleView>
            </ImageBackground>
          </View>

          {this.props.isReady ? 
            <TabsComp
              abilitiesAndDescriptions={abilitiesAndDescriptions}
              stats={stats}
              moves={moves}
              description={description}
              evolutions={evolutionsAndInfo}
            /> :
            <CenterAbsolutelyEverything>
              <Text>Loading...</Text>
            </CenterAbsolutelyEverything>
          }
        </ScrollView>

      </View>
    )
  }
}

const mapStateToProps = state => ({
  selectedPokemonNameAndType: state.pokemonRelated.selectedPokemonNameAndType,
  pokeTypes: state.pokemonRelated.pokeTypes,
  isReady: state.pokemonRelated.isReady,
  theme: state.pokemonRelated.theme,
  pokeData: state.pokemonRelated.pokeData,
  pokemonSelectedEvolution: state.pokemonRelated.pokemonSelectedEvolution,
  pokemonSelectedDescription: state.pokemonRelated.pokemonSelectedDescription,
  dataSpecificPokemon: state.pokemonRelated.dataSpecificPokemon,
  specificPokeType: state.pokemonRelated.specificPokeType,
  pokemonTypeList: state.pokemonRelated.pokemonTypeList
})

export default connect(mapStateToProps, { pokeStatsIsReadyNo, pokeStatsIsReadyYes, setThemeByPokeType })(PokeStats)