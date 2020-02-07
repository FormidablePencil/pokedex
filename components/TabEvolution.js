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

const TabEvolution = ({ evolutions }) => {
  console.log('ppsssss')
  console.log(evolutions)
  return (
    <View>
      <StatsContainer>
        <StatsText>evolutions</StatsText>
        <ResultForStats>{evolutions.basic}</ResultForStats>
        <ResultForStats>{evolutions.stage1}</ResultForStats>
        <ResultForStats>{evolutions.stage2}</ResultForStats>
        <Text>get the type and id of pokemon evolutions</Text>
      </StatsContainer>
    </View>
  )
}

export default TabEvolution
