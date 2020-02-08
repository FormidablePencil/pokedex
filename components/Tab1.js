import React from 'react'
import { Text, View } from 'react-native'
import {
  StatsContainer,
  StatsText,
  ResultForStats,
  HeaderContainer,
  BoldHeader,
  GlitchWithFramwork,
  TextGreen,
  AboutContainer,
  AboutText,
  AboutTextResults
} from '../styles/stylesTabs'

export default Tab1 = ({ description, abilitiesAndDescriptions, species, height, weight }) => {
  const heightCm = height
  const weightKg = weight
  return (
    <View>
      {abilitiesAndDescriptions ? abilitiesAndDescriptions.map(item => {
        return (
          <View>
            <AboutContainer>
              <AboutText>Pokemon description</AboutText>
              <AboutTextResults>{description}</AboutTextResults>
            </AboutContainer>
            <AboutContainer>
              <AboutText>ability</AboutText>
              <ResultForStats>{item.nameOfAbility}</ResultForStats>
            </AboutContainer>
            <AboutContainer>
              <AboutText>ability description</AboutText>
              <ResultForStats>{item.description}</ResultForStats>
            </AboutContainer>
          </View>
        )
      }) :
      <Text>Failed</Text>
      }
      <HeaderContainer>
        <BoldHeader>Title</BoldHeader>
      </HeaderContainer>
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


      <GlitchWithFramwork></GlitchWithFramwork>
    </View >
  )
}
