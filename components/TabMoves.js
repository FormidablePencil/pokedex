import React from 'react'
import { View, Text } from 'react-native'
import {
  StatsContainer,
  StatsText,
  ResultForStats,
  HeaderContainer,
  BoldHeader,
  GlitchWithFramwork,
  TextGreen
} from '../styles/stylesTabs'

const TabMoves = ({ moves }) => {
  return (
    <View>
      <StatsContainer>
        <StatsText>moves</StatsText>
        <ResultForStats>{moves}</ResultForStats>
      </StatsContainer>
    </View>
  )
}

export default TabMoves
