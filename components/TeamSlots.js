import React, { useState } from 'react'
import { View, Text, Image, FlatList, Animated, PanResponder, SafeAreaView } from 'react-native'
import { useSelector } from 'react-redux'
import useCachedImage from './hooks/useCachedImage'
import styled from 'styled-components';
import CachedImage from '../screens/CachedImage';
import Slot from './Slot'
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';



const TeamSlots = ({navigation}) => {
  const pokemonId = useSelector(state => state.pokemonTeam)
  const [draggingMode, setDraggingMode] = useState(false) //a workaround I could create are trigger zones for each slot though I'm good 
  return (
    <View style={{ height: '100%', width: '100%' }}>
    <TouchableWithoutFeedback style={{height: '100%', width: '100%'}} onLongPress={() => {setDraggingMode(!draggingMode)}}>
        <FlatList
          contentContainerStyle={{ flex: 1, justifyContent: 'center' }}
          numColumns={2}
          data={pokemonId}
          keyExtractor={(id) => id}
          renderItem={({ item, index }) =>
            // (index % 2 === 0 || index === 0) ?
            <Slot id={item} navigation={navigation} draggingMode={draggingMode} />
            // :
            // <Slot id={item} />
          } />
      </TouchableWithoutFeedback>
    </View>
  )
}

export default TeamSlots
      // {/* <AddDeleteInReduxCompWithBtn /> */}
