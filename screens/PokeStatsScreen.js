import React, { Component } from 'react'
import { View, ImageBackground, Button, Text, ScrollView } from 'react-native'
import { SimpleView } from '../styles/globalStyles';
import PokemonFrame from '../components/PokemonFrame';

export const PokeStatsScreen = () => {
  return (
    <View style={{ position: 'relative' }}>
      <ScrollView>
        <Text>eee</Text>
        <View style={{ height: 400 }}>
          <ImageBackground
            resizeMethod={'auto'} style={{ height: 400, width: 400, position: 'absolute', top: 0 }}
          // source={theme.backgroundImage}
          >
            <PokemonFrame />
            <SimpleView></SimpleView>
          </ImageBackground>
        </View>
      </ScrollView>

    </View>
  )
}


export default PokeStatsScreen