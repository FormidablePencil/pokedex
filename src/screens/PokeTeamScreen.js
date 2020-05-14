import React from 'react'
import TeamSlots from '../components/TeamSlots';
import { BackgroundBlack, PokeTeamContainer, ListEmptyMsgContainer } from '../styles/containerStyles';
import { EmptyListMsgText } from '../styles/textStyles';
import { useSelector } from 'react-redux'

const PokeTeamScreen = ({ navigation }) => {
  const pokemonTeamMember = useSelector(state => state.pokemonTeam)

  return (
    <BackgroundBlack>
      <PokeTeamContainer colors={['#2AC73F', '#EFF54C']} start={[1.8, .8]}>
        {pokemonTeamMember.length === 0 ?
          <ListEmptyMsgContainer>
            <EmptyListMsgText>No team members at the moment</EmptyListMsgText>
          </ListEmptyMsgContainer>
          :
          <TeamSlots navigation={navigation} />
        }
      </PokeTeamContainer>
    </BackgroundBlack>
  )
}


export default PokeTeamScreen
