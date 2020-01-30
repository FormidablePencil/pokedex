import React, { Component } from 'react'
import { globalStyles } from '../styles/globalStyles'
import { Text, View } from 'native-base'
import { Image, ImageBackground } from 'react-native'

//~ test to see if redxu works for fucntional components

export const PokemonFrame = ({number}) => {
  return (
    <View style={{ ...globalStyles.pokemonContainer, }}>
      <Image source={{uri: `https://pokeres.bastionbot.org/images/pokemon/${number}.png`}} style={{ width: 200, height: 200 }} />
    </View>
  )
}

export default PokemonFrame