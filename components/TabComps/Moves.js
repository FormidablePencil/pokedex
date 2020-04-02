import React, { useEffect } from 'react'
import { Text } from 'react-native'
import { useSelector } from 'react-redux'
import { Container } from '../../styles/TabContentStyles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Tab = () => {
  const fetchedSpecificPokemon = useSelector(state => state.fetchedSpecificPokemon)
  return (
    <Container>
      {Object.keys(fetchedSpecificPokemon).length > 0 && fetchedSpecificPokemon.pokemonInfo.moves.map((cluster, index) =>
        <TouchableOpacity key={index} onPress={() => console.log(cluster.move.url)}>
          <Text>{cluster.move.name}</Text>
        </TouchableOpacity>
      )}
      <Text>moves</Text>
    </Container>
  )
}

export default Tab
