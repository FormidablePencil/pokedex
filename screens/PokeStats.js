import React, { Component } from 'react'
import { View, ImageBackground } from 'react-native'
import { Content } from 'native-base';
import TabsComp from '../components/TabsComp';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { SimpleView, globalStyles } from '../styles/globalStyles';
import PokemonFrame from '../components/PokemonFrame';
import CustomHeader from '../components/CustomHeader'
import styled, { ThemeProvider } from "styled-components";
import { getSelectedPokemonType } from '../logic/logic'

import { connect } from 'react-redux'
import { pokeStatsIsReadyNo, setThemeByPokeType } from '../actions/pokemonRelatedActions' // this is the funciton that make the dominos of redux tumble down
import { sliceOffDigits } from '../logic/logic';

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
    this.props.navigation.setParams({ pokemonSelected: Object.values(this.props.selectedPokemonNameAndType.name.item)[0] })
    this.props.navigation.setParams({ pokeNumber: Object.keys(this.props.selectedPokemonNameAndType.name.item)[0] })
    this.props.navigation.setParams({ themeColor: this.props.theme.color }) //you must only pass props into setPrams one at a time. Objects don't see to load on time. 
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
    const combinedEvolutionIdType = {} //Filter in objects that match pokemon name 
    // console.log(this.props.pokemonTypeList)
    // const uppercasedBasic = evolutions.stage2[0].toUpperCase() + evolutions.stage2.substring(1)  //? I'm trying ot get the pokemonTypeList of all evolution pokemon.
    //  evolutions.basic.charAt(0).toUpperCase()
    // const resultz = getSelectedPokemonType(uppercasedBasic, this.props.pokemonTypeList)

    // console.log(uppercasedBasic)

    return (
      <Content>
        <View style={{ height: 400 }}>
          <ImageBackground
            resizeMethod={'auto'} style={{ position: 'absolute', height: '100%', width: '100%' }}
            source={this.props.theme.backgroundImage}>
            <PokemonFrame pokemonNumber={slicedPokemonNum} />
            <SimpleView></SimpleView>
          </ImageBackground>
        </View>
        <View>
          <TabsComp
            abilitiesAndDescriptions={abilitiesAndDescriptions}
            stats={stats}
            moves={moves}
            description={description}
            evolutions={evolutions}
          />
        </View>
      </Content>
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

export default connect(mapStateToProps, { pokeStatsIsReadyNo, setThemeByPokeType })(PokeStats)