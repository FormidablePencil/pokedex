import React from 'react'
import { View, Text, Image } from 'react-native'
import chart from '../assets/images/PokemonEffectivenessChart.jpg'
import styled from 'styled-components';

const PokemonEffectivenessChart = () => {
  return (
    <View style={{backgroundColor: 'black'}}>
      <ChartImage source={chart} />
      {/* <Text>123</Text>
      <Text>123</Text>
      <Text>123</Text> */}
    </View>
  )
}
export const ChartImage = styled.Image`
  resize-mode: contain;
  height: 100%;
  width: 100%;
`;

export default PokemonEffectivenessChart
