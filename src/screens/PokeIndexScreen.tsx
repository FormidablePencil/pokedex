import React, { useState } from 'react'
import RenderPokemonList from '../components/RenderPokemonList'
import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components';
import { TextInput } from 'react-native-gesture-handler';
import { searchSuggestionsFunc } from '../logic/logic';
import { useSelector } from 'react-redux'

const PokeIndexScreen = ({ navigation }) => {
  const [controlledInputValue, setControlledInputValue] = useState()
  const [allPokemonData, setAllPokemonData] = useState(null)
  const fetchedAllPokemon = useSelector((state: any) => state.fetchedAllPokemon)

  const onChangeHandleSearch = async (text) => {
    setControlledInputValue(controlledInputValue)
    const filtered = searchSuggestionsFunc({ text, arrayToFilterThrough: fetchedAllPokemon, ObjKeyToCompare: 'pokemon_name' })
    setAllPokemonData(filtered)
  }

  return (
    <PokeIndexContainer colors={['#390148', '#27229F']} start={[1.5, .8]}>
      <TextInputStyled
        onChangeText={text => onChangeHandleSearch(text)}
        value={controlledInputValue}
        underlineColorAndroid="transparent"
        placeholder="Search Pokemon"
      />
      <RenderPokemonList
        allPokemonData={allPokemonData}
        setAllPokemonData={setAllPokemonData}
        navigation={navigation}
      />
    </PokeIndexContainer>
  )
}

const TextInputStyled = styled.TextInput`
  background-color: black;
  color: white;
  margin-top: 20px;
  height: 50px;
  padding: 0px 10px;
`;
const PokeIndexContainer = styled(LinearGradient)`
  height: 100%;
  padding: 0px 6px;
`;


export default PokeIndexScreen