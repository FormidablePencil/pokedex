import React from 'react'
import { View, Text, Dimensions, Animated, PanResponder } from 'react-native'
import styled from 'styled-components';
import useCachedImage from './hooks/useCachedImage';
import AddDeleteInReduxCompWithBtn from './AddDeleteInReduxCompWithBtn'
import { PokeFavoriteBtn, PokeTeamBtn } from '../styles/btnStyles';
import { SAVE_FAVORITE, REMOVE_FAVORITE, ADD_TO_TEAM, REMOVE_FROM_TEAM } from '../actions/types'
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'

const Image123 = styled.Image`
  flex: 1;
  resize-mode: contain;
  position: relative;
  margin: 5px;
`;
export const FavCard = styled.View`
  /* flex: 1; */
  background-color: rgba(31,67,163,.5);
  border-radius: 10px;
  height: 150px;
  width: 100%;
  justify-content: flex-start;
  padding: 3px;
`;
export const IconsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-horizontal: 5px;
  margin-bottom: 5px;
`;
const FavCardComp = ({ id, cardStyle, imageStyle }) => {
  const cardPosition = new Animated.ValueXY()
  const cardSize = new Animated.Value(1)
  // const pokemonSize = new Animated.Value(1)


  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true, // config...
    onPanResponderMove: (event, gesture) => {
      cardPosition.setValue({ x: gesture.dx, y: gesture.dy }); //assigns the values of where your mouse is a varaible
    },
    onPanResponderGrant: (event, gesture) => {
      cardSize.setValue(1.1)
      // scaleOfBg.setValue(1.2)
    },
    onPanResponderEnd: (event, gesture) => {
      cardSize.setValue(1)
      // scaleOfBg.setValue(1)
    },
  })

  const cachedPokemonImage = useCachedImage(`https://pokeres.bastionbot.org/images/pokemon/${id}.png`)
  //@ tilt the image
  return ( //I want it to transition slwoly rather that spawn out of nowhere
    <Animated.View {...panResponder.panHandlers} style={[cardPosition.getLayout(), { width: '33%', paddingHorizontal: 6, paddingVertical: 6 }]}>
      <FavCard style={cardStyle}>
        <Image123 style={imageStyle} source={cachedPokemonImage.source} />
        <IconsContainer>
          <PokeFavoriteBtn style={{ bottom: 0 }}>
            <AddDeleteInReduxCompWithBtn
              payload={id}
              whatState={'favoritePokemon'}
              addType={SAVE_FAVORITE}
              deleteType={REMOVE_FAVORITE}
              child1={<FontAwesome name='star-o' size={30} />}
              child2={<FontAwesome name='star' size={30} color={'#ECDB1C'} />}
              btnStyle
            />
          </PokeFavoriteBtn>
          <PokeFavoriteBtn style={{ right: 0, bottom: 0 }}>
            <AddDeleteInReduxCompWithBtn
              payload={id}
              whatState={'pokemonTeam'}
              addType={ADD_TO_TEAM}
              deleteType={REMOVE_FROM_TEAM}
              child1={<MaterialCommunityIcons name='pokeball' size={30} />}
              child2={<MaterialCommunityIcons name='pokeball' size={30} color={'#FD7E7E'} />}
              btnStyle
            />
          </PokeFavoriteBtn>
        </IconsContainer>
      </FavCard>
    </Animated.View>
  )
}

export default FavCardComp