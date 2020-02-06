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

const Tab2 = ({baseAttack, baseDefense, baseStamina, abilities, gender, eggGroups, eggCycle}) => {
  return (
    <View>
    <StatsContainer>
      <StatsText>baseAttack</StatsText>
      <ResultForStats>{baseAttack}</ResultForStats>
    </StatsContainer>
    <StatsContainer>
      <StatsText>baseDefense</StatsText>
      <ResultForStats>{baseDefense}</ResultForStats>
    </StatsContainer>
    <StatsContainer>
      <StatsText>baseStamina</StatsText>
      <ResultForStats>{baseStamina}</ResultForStats>
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

export default Tab2
