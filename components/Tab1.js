import React from 'react'
import { Text, View } from 'react-native'
import {
  StatsContainer,
  StatsText,
  ResultForStats,
  HeaderContainer,
  BoldHeader,
  GlitchWithFramwork,
  TextGreen
} from '../styles/stylesTabs'

export default Tab1 = ({ pokemonId, type }) => {
  return (
    <View>
      <TextGreen>{pokemonId}</TextGreen>
      <StatsContainer>
        <StatsText>Species</StatsText>
        <ResultForStats>ghjf</ResultForStats>
      </StatsContainer>
      <StatsContainer>
        <StatsText>Height</StatsText>
        <ResultForStats>dfvb</ResultForStats>
      </StatsContainer>
      <StatsContainer>
        <StatsText>Weight</StatsText>
        <ResultForStats>Sed</ResultForStats>
      </StatsContainer>
      <StatsContainer>
        <StatsText>Abilities</StatsText>
        <ResultForStats>sesd</ResultForStats>
      </StatsContainer>

      <HeaderContainer>
        <BoldHeader>Breeding</BoldHeader>
      </HeaderContainer>

      <StatsContainer>
        <StatsText>gender</StatsText>
        <ResultForStats>boy girl 10%</ResultForStats>
      </StatsContainer>
      <StatsContainer>
        <StatsText>Egg Groups</StatsText>
        <ResultForStats>MonsteR</ResultForStats>
      </StatsContainer>
      <StatsContainer>
        <StatsText>Egg Cycle</StatsText>
        <ResultForStats>Grasz</ResultForStats>
      </StatsContainer>

      <GlitchWithFramwork></GlitchWithFramwork>
    </View>
  )
}
