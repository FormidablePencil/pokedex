import React from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components'
import { themes } from '../theming/themingStyles'

const RenderTypes = ({ type }) => {
  return (
    <TypesContainer style={{ top: -70, zIndex: 15, justifyContent: 'center', width: 40 }}>
      {type.map(specificType => {
        const adjustedMissalignedTypeImg = specificType === 'Bug' ? { top: -1 } : { top: 0 }
        return (
          <View key={specificType} style={{ height: 40, width: 40, borderRadius: 4, marginVertical: 2, overflow: 'hidden' }}>
            <PokeTypeImage style={adjustedMissalignedTypeImg} source={themes[specificType.toLowerCase()].typeImage} />
          </View>
        )
      })}
    </TypesContainer>
  )
}
export const PokeTypeImage = styled.Image`
  /* flex: 1; */
  height: 53px;
  width: 40px;
  bottom: 0px;
  /* resize-mode: contain; */
`;
export const TypesContainer = styled.View` 
  z-index: 15;
  flex-direction: row;
`;

export default RenderTypes
