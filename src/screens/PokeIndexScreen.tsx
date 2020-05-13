import React, { useState } from 'react'
import RenderPokemonList from '../components/RenderPokemonList'
import { searchSuggestionsFunc } from '../logic/logic';
import { useSelector } from 'react-redux'
import { PokeIndexContainer } from '../styles/containerStyles';
import { TextInputStyled } from '../styles/textStyles';
import useLocalStorage from '../components/hooks/useLocalStorage';

const PokeIndexScreen = ({ navigation }) => {
  const [controlledInputValue, setControlledInputValue] = useState()
  const [allPokemonData, setAllPokemonData] = useState(null)
  const fetchedAllPokemon = useSelector((state: any) => state.fetchedAllPokemon)
  useLocalStorage()

  const onChangeHandleSearch = async (text) => {
    setControlledInputValue(controlledInputValue)
    const filtered = searchSuggestionsFunc({ text, arrayToFilterThrough: fetchedAllPokemon, ObjKeyToCompare: 'pokemon_name' })
    setAllPokemonData(filtered)
  }

  return (
    <PokeIndexContainer colors={['#2AC73F', '#EFF54C']} start={[1.8, .8]}>
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

export default PokeIndexScreen