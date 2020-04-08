import React, { useState } from 'react'
import RenderPokemonList from '../components/RenderPokemonList'
import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components';
import { TextInput } from 'react-native-gesture-handler';
import { StatusBar, SafeAreaView } from 'react-native';

//* add a gesture cool water animation effect 
//* add swipe gestures to go to next tab
//* maybe disable tab bar and have the user simply swipe... and have a btn top screen for a model to pop up and allow user to go to anther screen
//* move custom header to this component and perhaps some state that mabe doesn't belong in renderPokemonList
const PokeIndexContainer = styled(LinearGradient)`
  height: 100%;
  padding-horizontal: 6px;
`;
//! replace FlatList with recyclableListView
const PokeIndexScreen = ({ navigation }) => {
  const [controlledInputValue, setControlledInputValue] = useState()
  const onChangeHandleSearch = async (text) => {
    setControlledInputValue(controlledInputValue)
    const filtered = searchSuggestionsFunc({ text, arrayToFilterThrough: fetchedAllPokemon, ObjKeyToCompare: 'pokemon_name' })
    setAllPokemonData(filtered)
  }

  return (
    <PokeIndexContainer colors={['#390148', '#27229F']} start={[1.5, .8]}>
      <TextInput style={{ backgroundColor: 'black', color: 'white', marginTop: 20, marginHorizontal: 10, height: 30, paddingHorizontal: 10 }}
        onChangeText={text => onChangeHandleSearch(text)}
        value={controlledInputValue}
        underlineColorAndroid="transparent"
        placeholder="Search Pokemon"
      />
      <RenderPokemonList navigation={navigation} />
    </PokeIndexContainer>
  )
}


export default PokeIndexScreen