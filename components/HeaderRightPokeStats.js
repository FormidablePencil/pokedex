import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { PokemonIdText } from '../styles/textStyles'
import { useSelector } from 'react-redux'
import { testObjEmptyFunc } from '../logic/logic'
import AddDeleteInReduxCompWithBtn from './AddDeleteInReduxCompWithBtn'
import { ADD_TO_TEAM, REMOVE_FROM_TEAM, REMOVE_FAVORITE, SAVE_FAVORITE } from '../actions/types'
import { PokeFavoriteBtn } from '../styles/btnStyles'
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'
import styled from 'styled-components'

const HeaderRightPokeStats = ({ navigation, pokemonId }) => {
  const pokeId = useSelector(state =>
    testObjEmptyFunc(state.fetchedSpecificPokemon) > 0 ?
      state.fetchedSpecificPokemon.pokemonInfo.id : {}
  )

  return (
  <PokeBtnsContainer style={{  alignItems: 'center', top: 110, marginRight: 10 }}>
      <PokemonIdText color={'white'}>{typeof pokeId === 'number' ? pokeId : ''}</PokemonIdText>
      <MaterialCommunityIcons style={{marginTop: 30}} onPress={() => navigation.navigate('PokemonEffectivenessChart')} name='poker-chip' size={55} color='white' />
      <PokeFavoriteBtn style={{ marginVertical: 30 }}>
        <AddDeleteInReduxCompWithBtn
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
        <AddDeleteInReduxCompWithBtn
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
}
export const PokeBtnsContainer = styled.View`
  /* position: absolute; */
  top: 20px;
  right: 0
`;
export default HeaderRightPokeStats
