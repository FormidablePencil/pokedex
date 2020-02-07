import React from 'react'
import { Text, View } from 'react-native'
import { HeaderTitleContainer, NameId, HeaderTitle, HeaderPokeNumber, PokeTypesContainer } from '../styles/stylesCustomHeader';
import { PokemonTypes, TextPokemonTypes } from '../styles/stylesContainersByPokeTypes'
import { StyleSheet } from 'react-native'


export default CustomHeader = ({ type, title, pokeNumber, themeColor }) => {
  return (
    <View>{
      (type) ? (
        <HeaderTitleContainer>
          <NameId>
            <HeaderTitle>{title}</HeaderTitle>
            <HeaderPokeNumber>{pokeNumber}</HeaderPokeNumber>
          </NameId>
          <PokeTypesContainer>
            {type.map((item, index) =>
              <PokemonTypes theme={item}>
                <TextPokemonTypes key={index}>
                  {item}
                </TextPokemonTypes>
              </PokemonTypes>
            )
            }
          </PokeTypesContainer>
        </HeaderTitleContainer>
      ) : (
          <PokeTypesContainer>
            <Text>{title}</Text>
          </PokeTypesContainer>
        )
    }
    </View >

  )
}
