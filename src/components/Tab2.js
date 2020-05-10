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

const Tab2 = ({ stats }) => {
  // const speed = stats.filter(item => item.stat.name === 'speed')
  // const specialDefense = stats.filter(item => item.stat.name === 'special-defense')
  // const specialAttack = stats.filter(item => item.stat.name === 'special-attack')
  // const defense = stats.filter(item => item.stat.name === 'defense')
  // const attack = stats.filter(item => item.stat.name === 'attack')
  // const hp = stats.filter(item => item.stat.name === 'hp')
  return (
    <View>
      {/* <StatsContainer>
        <StatsText>speed</StatsText>
        <ResultForStats>{speed[0].base_stat}</ResultForStats>
      </StatsContainer>
     <StatsContainer>
        <StatsText>specialDefense</StatsText>
        <ResultForStats>{specialDefense[0].base_stat}</ResultForStats>
      </StatsContainer>
      <StatsContainer>
        <StatsText>specialAttack</StatsText>
        <ResultForStats>{specialAttack[0].base_stat}</ResultForStats>
      </StatsContainer>
      <StatsContainer>
        <StatsText>defense</StatsText>
        <ResultForStats>{defense[0].base_stat}</ResultForStats>
      </StatsContainer>
      <StatsContainer>
        <StatsText>attack</StatsText>
        <ResultForStats>{attack[0].base_stat}</ResultForStats>
      </StatsContainer>
      <StatsContainer>
        <StatsText>hp</StatsText>
        <ResultForStats>{hp[0].base_stat}</ResultForStats>
      </StatsContainer>

      <GlitchWithFramwork></GlitchWithFramwork> */}
    </View>
  )
}

export default Tab2
