import React, { Component } from 'react'
// import * as Font from 'expo-font'
// import { Ionicons } from '@expo/vector-icons'
import AppLoading from '../components/AppLoading'
import Search from '../components/Search'
import RenderPokemonList from '../components/RenderPokemonList'
import { View } from 'react-native'

const PokeIndexScreen = ({ navigation }) => {
  return (
    <View>
      <RenderPokemonList navigation={navigation} />
    </View>
  )
}


export default PokeIndexScreen