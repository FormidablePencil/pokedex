import React, { Component } from 'react'
// import * as Font from 'expo-font'
// import { Ionicons } from '@expo/vector-icons'
import AppLoading from '../components/AppLoading'
import Search from '../components/Search'
import RenderSuggestions from '../components/RenderSuggestions'
import { View } from 'react-native'

const PokeIndexScreen = ({ navigation }) => {
  return (
    <View>
      <RenderSuggestions navigation={navigation} />
    </View>
  )
}


export default PokeIndexScreen