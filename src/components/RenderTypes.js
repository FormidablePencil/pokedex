import React from 'react'
import { themes } from '../theming/themingStyles'
import { TypesContainer, PokeStatsBgImgContainer } from '../styles/containerStyles'
import { PokeTypeImage } from '../styles/imageStyles'
import { Image } from 'react-native'

const RenderTypes = ({ type }) => {

  return (
    <TypesContainer>
      {type.map(specificType => {
        const adjustedMissalignedTypeImg = specificType === 'Bug' ? { top: -1 } : { top: 0 }
        return (
          <PokeStatsBgImgContainer key={specificType}>
            <PokeTypeImage style={adjustedMissalignedTypeImg} source={themes[specificType.toLowerCase()].typeImage} />
          </PokeStatsBgImgContainer>
        )
      })}
    </TypesContainer>
  )
}



export default RenderTypes
