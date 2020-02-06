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

const TabEvolution = ({ evolution }) => {
  return (
    <View>
      <StatsContainer>
        <StatsText>evolution</StatsText>
        <ResultForStats>{evolution}</ResultForStats>
      </StatsContainer>
    </View>
  )
}

export default TabEvolution
