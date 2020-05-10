import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { PokemonIdText } from '../styles/textStyles'
import { useSelector } from 'react-redux'
import { testObjEmptyFunc } from '../logic/logic'
import AddDeleteItemFromReduxBtn from './AddDeleteInReduxCompWithBtn'
import { ADD_TO_TEAM, REMOVE_FROM_TEAM, REMOVE_FAVORITE, SAVE_FAVORITE } from '../actions/types'
import { PokeFavoriteBtn } from '../styles/btnStyles'
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'
import styled from 'styled-components'

const HeaderRightPokeStats = ({ isReady, navigation, pokemonId }) => {
  const pokeId = useSelector(state =>
    testObjEmptyFunc(state.fetchedSpecificPokemon) > 0 ?
      state.fetchedSpecificPokemon.pokemonInfo.id : {}
  )

  if (isReady) {
    return (
      <PokeBtnsContainer style={{ alignItems: 'center', top: 85, marginRight: 10 }}>
        <PokemonIdText color={'white'}>{typeof pokeId === 'number' ? pokeId : ''}</PokemonIdText>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('PokemonEffectivenessChart')}>
          <MaterialCommunityIcons style={{ zIndex: 30, marginTop: 20 }} name='poker-chip' size={30} color='white' />
        </TouchableWithoutFeedback>
        <PokeFavoriteBtn style={{ marginVertical: 30 }}>
          <AddDeleteItemFromReduxBtn
            payload={pokemonId}
            whatState={'favoritePokemon'}
            addType={SAVE_FAVORITE}
            deleteType={REMOVE_FAVORITE}
            child1={<FontAwesome name='star-o' size={25} />}
            child2={<FontAwesome name='star' size={25} color={'#ECDB1C'} />}
            btnStyle
          />
        </PokeFavoriteBtn>
        <PokeFavoriteBtn style={{ marginVertical: 10 }}>
          <AddDeleteItemFromReduxBtn
            payload={pokemonId}
            whatState={'pokemonTeam'}
            addType={ADD_TO_TEAM}
            deleteType={REMOVE_FROM_TEAM}
            child1={<MaterialCommunityIcons name='pokeball' size={25} />}
            child2={<MaterialCommunityIcons name='pokeball' size={25} color={'#FD7E7E'} />}
            btnStyle
          />
        </PokeFavoriteBtn>
      </PokeBtnsContainer>
    )
  } else return null
}
export const PokeBtnsContainer = styled.View`
  /* position: absolute; */
  top: 20px;
  right: 0
`;
export default HeaderRightPokeStats
