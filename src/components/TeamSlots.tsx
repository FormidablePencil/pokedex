import React from 'react'
import { View, FlatList } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import Slot from './Slot'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { GESTURE_OFF, GESTURE_ON } from '../actions/types';
import { globalStyles } from '../styles/globalStyles';

const TeamSlots = () => {
  const pokemonId = useSelector(state => state.pokemonTeam)
  const pokemonTeamGesture = useSelector((state: any) => state.pokemonTeamGesture)
  const dispatch = useDispatch()
  const navigation = useNavigation()

  const onLongPressHandler = () => {
    if (pokemonTeamGesture) {
      dispatch({ type: GESTURE_OFF })
    } else dispatch({ type: GESTURE_ON })
  }

  return (
    <View style={globalStyles.widthHeight100}>

      <TouchableWithoutFeedback style={globalStyles.widthHeight100} onLongPress={() => onLongPressHandler()}>
        <FlatList
          contentContainerStyle={{ flex: 1, justifyContent: 'center' }}
          numColumns={2}
          data={pokemonId}
          keyExtractor={(id) => id}
          renderItem={({ item, index }) => {
            return (
              <>
                {item ?
                  <>
                    <Slot id={item} navigation={navigation} draggingMode={pokemonTeamGesture} />
                  </>
                  : null
                }
              </>
            )
          }
          } />
      </TouchableWithoutFeedback>
    </View>
  )
}

export default TeamSlots