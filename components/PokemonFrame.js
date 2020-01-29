import React, { Component } from 'react'
import { globalStyles } from '../styles/globalStyles'
import { Text, View } from 'native-base'
import { Image, ImageBackground } from 'react-native'

export const PokemonFrame = () => {
  return (
    <View style={{ ...globalStyles.pokemonContainer }}>
      <Image source={require('../assets/Pokémon/1stGeneration/001Bulbasaur.png')} style={{ width: 200, height: 200 }} />
    </View>
  )
}

export default PokemonFrame