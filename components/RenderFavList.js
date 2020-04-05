import React from 'react'
import { FlatList } from 'react-native-gesture-handler';
import FavCardComp from './FavCardComp';
import { useSelector } from 'react-redux';
import { View, Text } from 'react-native';
import styled from 'styled-components';
import { findNearestNumDivisibleByNum } from '../logic/logic';

export const FavListContainer = styled.View`
`;

const RenderFavList = () => {
  //in this screen you'll be able to do the same things as in poketeam screen
  const pokemonId = useSelector(state => state.favoritePokemon)
  //@ tilt the image
  return (
    <FavListContainer>
      <FlatList
        style={{ width: '100%', height: '100%', marginVertical: 10 }}
        numColumns={3}
        data={pokemonId}
        contentContainerStyle={{ paddingHorizontal: 5, paddingVertical: 5 }}
        keyExtractor={item => item}
        contentContainerStyle={{ justifyContent: 'center'}}
        // ItemSeparatorComponent
        renderItem={({ item }) => <FavCardComp id={item} />} />
    </FavListContainer>
  )
}
export default RenderFavList
// {/* <AddDeleteInReduxCompWithBtn /> */}
