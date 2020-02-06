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

export default Tab1 = ({ species, height, weight, abilities, gender, eggGroups, eggCycle }) => {
  const heightCm = height
  const weightKg = weight
  return (
    <View>
      <StatsContainer>
        <StatsText>Species</StatsText>
        <ResultForStats>{species}</ResultForStats>
      </StatsContainer>
      <StatsContainer>
        <StatsText>Height</StatsText>
        <ResultForStats>{height}</ResultForStats>
      </StatsContainer>
      <StatsContainer>
        <StatsText>Weight</StatsText>
        <ResultForStats>{weight}</ResultForStats>
      </StatsContainer>
      <StatsContainer>
        <StatsText>Abilities</StatsText>
        <ResultForStats>{abilities}</ResultForStats>
      </StatsContainer>

      <HeaderContainer>
        <BoldHeader>Breeding</BoldHeader>
      </HeaderContainer>

      <StatsContainer>
        <StatsText>Gender</StatsText>
        <ResultForStats>{gender}</ResultForStats>
      </StatsContainer>
      <StatsContainer>
        <StatsText>Egg Groups</StatsText>
        <ResultForStats>{eggGroups}</ResultForStats>
      </StatsContainer>
      <StatsContainer>
        <StatsText>Egg Cycle</StatsText>
        <ResultForStats>{eggCycle}</ResultForStats>
      </StatsContainer>

      <GlitchWithFramwork></GlitchWithFramwork>
    </View>
  )
}
