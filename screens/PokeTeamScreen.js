import React from 'react'
import { Text } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components';
import TeamSlots from '../components/TeamSlots';
//* [0.1, 0.2] means that the gradient will start 10% from the left and 20% from the top
export const PokeTeamContainer = styled(LinearGradient)`
  height: 100%;
  width: 100%;
`;

const PokeTeamScreen = () =>
  <PokeTeamContainer colors={['#C80505', '#0424AB']} start={[1, 1]}>
    <TeamSlots />
  </PokeTeamContainer>

export default PokeTeamScreen
