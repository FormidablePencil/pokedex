import React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components';
import { LinearGradient } from 'expo-linear-gradient';
import RenderFavList from '../components/RenderFavList';

//* save list sorting by dragging for another day... or week XD
//* [0.1, 0.2] means that the gradient will start 10% from the left and 20% from the top
export const PokeFavContainer = styled(LinearGradient)`
  height: 100%;
`;
const PokeFavScreen = () => {
  return ( //long holg will activate gesture to move pokemon, single press to view poke types and double press to see pokemon about page
    <PokeFavContainer colors={['#390148', '#27229F']} start={[1.5, .8]}>
      <RenderFavList />
    </PokeFavContainer>
  )
}

export default PokeFavScreen
