import React, { useState } from 'react'
import { View, Text, Image, FlatList, Animated, PanResponder } from 'react-native'
import { useSelector } from 'react-redux'
import useCachedImage from './hooks/useCachedImage'
import styled from 'styled-components';
import CachedImage from '../screens/CachedImage';
import Slot from './Slot'



const TeamSlots = () => {
  const pokemonId = useSelector(state => state.pokemonTeam)
  const [pan] = useState(new Animated.ValueXY())
  //here give option to show pokemon effectiveness tordards whom... this should also be in stats screen somewhere
  return (
    <View>
      <FlatList
        numColumns={2}
        data={pokemonId}
        keyExtractor={(id) => id}
        renderItem={({ item, index }) =>
          // (index % 2 === 0 || index === 0) ?
          <Slot id={item} />
          // :
          // <Slot id={item} />
        } />
    </View>
  )
}

export default TeamSlots
      // {/* <AddDeleteInReduxCompWithBtn /> */}
