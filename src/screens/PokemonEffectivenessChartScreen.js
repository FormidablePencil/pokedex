import React from 'react'
import { View } from 'react-native'
import chart from '../assets/images/PokemonEffectivenessChart.jpg'
import { ChartImage } from '../styles/imageStyles';

const PokemonEffectivenessChart = () => {
  return (
    <View style={{backgroundColor: 'black'}}>
      <ChartImage source={chart} />
    </View>
  )
}

export default PokemonEffectivenessChart
