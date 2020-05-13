import React from 'react'
import RenderFavList from '../components/RenderFavList';
import { PokeFavContainer } from '../styles/containerStyles';
import PokeTeamLimitMsg from '../components/PokeTeamLimitMsg';

const PokeFavScreen = () => {
  return (
    <PokeFavContainer colors={['#2AC73F', '#EFF54C']} start={[1.8, .8]}>
      <RenderFavList />
    </PokeFavContainer>
  )
}

export default PokeFavScreen
