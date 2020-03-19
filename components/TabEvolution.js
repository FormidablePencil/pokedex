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
import { Button } from 'native-base'
import { PokemonTypes, TextPokemonTypes } from '../styles/stylesContainersByPokeTypes'

const TabEvolution = ({ evolutions }) => {
  console.log('ppsssss')
  const basic = evolutions.basic[0]
  console.log(basic)
  const stage1 = evolutions.stage1[0]
  console.log(stage1)
  const stage2 = evolutions.stage2[0]
  console.log(stage2)
  return (
    <View>
      <StatsContainer>
        <StatsText>evolutions</StatsText>
        <ResultForStats>{basic.pokemon_name}</ResultForStats>
        <ResultForStats>{stage1.pokemon_name}</ResultForStats>
        <Text>get the type and id of pokemon evolutions</Text>
      </StatsContainer>
      <ResultForStats>{stage2.pokemon_name}</ResultForStats>
      <ResultForStats>{stage2.pokemon_id}</ResultForStats>
      {stage2.type.map((item, index) => {
        console.log(item)
        return (
          <PokemonTypes theme={item}>
            <TextPokemonTypes key={index}>
              {item}
            </TextPokemonTypes>
          </PokemonTypes>
        )
      })
      }
    </View>
  )
}

export default TabEvolution
