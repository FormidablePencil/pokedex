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

const PokeTeamScreen = ({navigation}) =>
  <PokeTeamContainer colors={['#0583D9', '#03339F']} start={[1, .3]}>
    <TeamSlots navigation={navigation} />
  </PokeTeamContainer>

export default PokeTeamScreen
