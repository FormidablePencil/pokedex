import React from 'react'
import TeamSlots from '../components/TeamSlots';
import { BackgroundBlack, PokeTeamContainer } from '../styles/containerStyles';

const PokeTeamScreen = ({ navigation }) =>
  <BackgroundBlack>
    <PokeTeamContainer colors={['#2AC73F', '#EFF54C']} start={[1.8, .8]}>
      <TeamSlots navigation={navigation} />
    </PokeTeamContainer>
  </BackgroundBlack>


export default PokeTeamScreen
