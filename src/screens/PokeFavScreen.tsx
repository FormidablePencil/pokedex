import React from 'react'
import RenderFavList from '../components/RenderFavList';
import { PokeFavContainer, ListEmptyMsgContainer } from '../styles/containerStyles';
import { EmptyListMsgText } from '../styles/textStyles';
import { useSelector } from 'react-redux'

const PokeFavScreen = () => {
  const pokemonTeamMember = useSelector(state => state.favoritePokemon)

  return (
    <PokeFavContainer colors={['#2AC73F', '#EFF54C']} start={[1.8, .8]}>
      {pokemonTeamMember.length === 0 ?
        <ListEmptyMsgContainer>
          <EmptyListMsgText>No pokemon in pc at the moment</EmptyListMsgText>
        </ListEmptyMsgContainer>
        :
        <RenderFavList />
      }
    </PokeFavContainer>
  )
}

export default PokeFavScreen
