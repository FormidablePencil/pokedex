import React, { useEffect } from 'react'
import { Text } from 'react-native'
import { useSelector } from 'react-redux'
import { Container, TabTextMoves } from '../../styles/TabContentStyles';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { View } from 'react-native-animatable';
import { globalStyles } from '../../styles/globalStyles';
import { themes } from '../../theming/themingStyles';

const Tab = () => {
  const fetchedSpecificPokemon = useSelector(state => state.fetchedSpecificPokemon)
  const theme = useSelector(state => state.theme)
  const txtColor = themes[theme].pokeBox.contentTxtColor

  return (
    <ScrollView
      style={{ height: '50%' }}>
      <Container>
        <View style={{ ...globalStyles.AlignPokemonMovesContainer }}>
          {Object.keys(fetchedSpecificPokemon).length > 0 && fetchedSpecificPokemon.pokemonInfo.moves.map((cluster, index) =>
            <TouchableOpacity disabled style={{ width: 100, alignItems: 'center' }} key={index} onPress={() => console.log(cluster.move.url)}>
              <TabTextMoves
                color={txtColor}
              >{cluster.move.name}</TabTextMoves>
            </TouchableOpacity>
          )}
        </View>
      </Container>
    </ScrollView>
  )
}

export default Tab
