import React, { useState } from 'react'
import { View, Text, Image, FlatList, Animated, PanResponder, SafeAreaView } from 'react-native'
import { useSelector } from 'react-redux'
import useCachedImage from './hooks/useCachedImage'
import styled from 'styled-components';
import CachedImage from '../screens/CachedImage';
import Slot from './Slot'
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';



const TeamSlots = () => {
  const pokemonId = useSelector(state => state.pokemonTeam)
  const [pan] = useState(new Animated.ValueXY())
  const [selectorMode, setSelectorMode] = useState(false) //a workaround I could create are trigger zones for each slot though I'm good 
  //here give option to show pokemon effectiveness tordards whom... this should also be in stats screen somewhere
  return (
    <View style={{ height: '100%', width: '100%' }}>
    <TouchableWithoutFeedback style={{height: '100%', width: '100%'}} onLongPress={() => {setSelectorMode(!selectorMode); console.log('ii')}}>
        <FlatList
          contentContainerStyle={{ flex: 1, justifyContent: 'space-evenly' }}
          numColumns={2}
          data={pokemonId}
          keyExtractor={(id) => id}
          renderItem={({ item, index }) =>
            // (index % 2 === 0 || index === 0) ?
            <Slot id={item} selectorMode={selectorMode} />
            // :
            // <Slot id={item} />
          } />
      </TouchableWithoutFeedback>
    </View>
  )
}

export default TeamSlots
      // {/* <AddDeleteInReduxCompWithBtn /> */}
