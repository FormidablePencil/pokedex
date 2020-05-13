import React from 'react'
import { FlatList } from 'react-native-gesture-handler';
import FavCardComp from './FavCardComp';
import { useSelector } from 'react-redux';
import { FavListContainer } from '../styles/containerStyles'

const RenderFavList = () => {
  const pokemonId = useSelector(state => state.favoritePokemon)

  return (
    <FavListContainer>
      <FlatList
        style={{ width: '100%', height: '100%', marginVertical: 10 }}
        numColumns={3}
        data={pokemonId}
        contentContainerStyle={{ paddingHorizontal: 5, paddingVertical: 5 }}
        keyExtractor={item => item}
        contentContainerStyle={{ justifyContent: 'center' }}
        renderItem={({ item }) => <FavCardComp id={item} />} />
    </FavListContainer>
  )
}

export default RenderFavList