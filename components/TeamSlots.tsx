import React, { useState, useEffect } from 'react'
import { View, Text, Image, FlatList, Animated, PanResponder, SafeAreaView } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import useCachedImage from './hooks/useCachedImage'
import styled from 'styled-components';
import CachedImage from '../screens/CachedImage';
import Slot from './Slot'
import { TouchableOpacity, TouchableWithoutFeedback, NativeViewGestureHandler } from 'react-native-gesture-handler';
import { useRoute, useNavigation } from '@react-navigation/native';
import { GESTURE_OFF, GESTURE_ON } from '../actions/types';
import useRenderImgsDynamically from './hooks/useRenderImgsDynamically';

const TeamSlots = () => {
  const pokemonId = useSelector(state => state.pokemonTeam)
  const pokemonTeamGesture = useSelector((state: any) => state.pokemonTeamGesture)
  // const [daraggingMode, setDraggingMode] = useState(false) //a workaround I could create are trigger zones for each slot though I'm good 
  const [renderPokemonImg, setRenderPokemonImg] = useState()
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const route = useRoute()

  useEffect(() => {
    useRenderImgsDynamically({ pokemon_id: pokemonId, setRenderPokemonImg })
  }, [pokemonId])

  const onLongPressHandler = () => {
    if (pokemonTeamGesture) {
      dispatch({ type: GESTURE_OFF })
    } else dispatch({ type: GESTURE_ON })
  }

  return (
    <View style={{ height: '100%', width: '100%' }}>

      <TouchableWithoutFeedback style={{ height: '100%', width: '100%' }} onLongPress={() => onLongPressHandler()}>
        <FlatList
          contentContainerStyle={{ flex: 1, justifyContent: 'center' }}
          numColumns={2}
          data={pokemonId}
          keyExtractor={(id) => id}
          renderItem={({ item, index }) => {
            return (
              // (index % 2 === 0 || index === 0) ?
              <>
                {item ?
                  <>
                    <Slot id={item} navigation={navigation} draggingMode={pokemonTeamGesture} />
                  </>
                  : null
                }
              </>
            )
            // :
          }
            // <Slot id={item} />
          } />
      </TouchableWithoutFeedback>
    </View>
  )
}

export default TeamSlots
      // {/* <AddDeleteItemFromReduxBtn /> */}
