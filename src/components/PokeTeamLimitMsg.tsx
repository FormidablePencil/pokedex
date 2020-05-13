import React from 'react'
import { View, Text } from 'react-native'
import Modal, { ModalFooter, ModalButton, ModalContent } from 'react-native-modals';
import { HeaderText, ModalCloseText, ModalContentText } from '../styles/textStyles'
import { useDispatch, useSelector } from 'react-redux'
import { RESET_POKE_MSG_TEAM_LIST } from '../actions/types';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ModalContainer, ModalCard } from '../styles/containerStyles';
import { ModalCloseBtn } from '../styles/btnStyles';

const PokeTeamLimitMsg = () => {
  const dispatch = useDispatch()
  const pokeMessageOpen = useSelector(state => state.pokeMessageOpen)

  const onPresshandler = () => dispatch({ type: RESET_POKE_MSG_TEAM_LIST })

  return (
    <>
      {pokeMessageOpen &&
        <ModalContainer>
          <ModalCard>
            <ModalContentText>You may only have 6 members in your team.</ModalContentText>
            <ModalCloseBtn onPress={() => onPresshandler()}>
              <ModalCloseText>ok</ModalCloseText>
            </ModalCloseBtn>
          </ModalCard>
        </ModalContainer>
      }
    </>
  )
}

export default PokeTeamLimitMsg
