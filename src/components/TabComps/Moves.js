import React, { useEffect } from 'react'
import { Text } from 'react-native'
import { useSelector } from 'react-redux'
import { Container, TabTextMoves } from '../../styles/TabContentStyles';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { View } from 'react-native-animatable';

const Tab = () => {
  const fetchedSpecificPokemon = useSelector(state => state.fetchedSpecificPokemon)
  return (
    <ScrollView
     style={{ height: '50%' }}>
      <Container>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: "space-evenly" }}>
          {Object.keys(fetchedSpecificPokemon).length > 0 && fetchedSpecificPokemon.pokemonInfo.moves.map((cluster, index) =>
            <TouchableOpacity style={{ width: 100, alignItems: 'center' }} key={index} onPress={() => console.log(cluster.move.url)}>
              <TabTextMoves>{cluster.move.name}</TabTextMoves>
            </TouchableOpacity>
          )}
        </View>
      </Container>
    </ScrollView>
  )
}

export default Tab
