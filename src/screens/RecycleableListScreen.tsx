import React, { useState, useEffect } from 'react'
import RecyclerListViewComponent from '../components/RecyclerListViewComponent'
import { useSelector, useDispatch } from 'react-redux'
import { fetchSpecificPokemon } from '../actions/actions'
import { PokeIndexContainer } from '../styles/containerStyles'
import useLocalStorage from '../components/hooks/useLocalStorage'
import { searchSuggestionsFunc, searchPokemonById } from '../logic/logic'
import { TextInputStyled } from '../styles/textStyles'
import { LayoutAnimation } from 'react-native'

const RecycleableListScreen = ({ navigation }) => {
  const fetchedAllPokemon = useSelector(state => state.fetchedAllPokemon)
  const dispatch = useDispatch()
  const [allPokemonData, setAllPokemonData] = useState(fetchedAllPokemon)
  const [loading, setLoading] = useState(false)
  const [controlledInputValue, setControlledInputValue] = useState()

  useLocalStorage()
  // console.log(allPokemonData);

  useEffect(() => {
    (async () => {
      await setLoading(true)
      setAllPokemonData(fetchedAllPokemon)
      await setLoading(false)
    })()
  }, [fetchedAllPokemon])

  // console.log(fetchedAllPokemon);
  const handleOnPressGoToStatsScreen = (pokemon_id) => {
    dispatch(fetchSpecificPokemon(pokemon_id))
    navigation.navigate('PokeStatsScreen')
  }
  const onChangeHandleSearch = async (text) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    await setLoading(true)
    setControlledInputValue(controlledInputValue)
    let containsNumbers = /^[0-9]+$/;
    if (text.match(containsNumbers) === null) {
      const filtered = searchSuggestionsFunc({ text, arrayToFilterThrough: fetchedAllPokemon, ObjKeyToCompare: 'pokemon_name' })
      setAllPokemonData(filtered)
    } else {
      const pokemonFound = searchPokemonById(text, fetchedAllPokemon)
      setAllPokemonData(pokemonFound)
    }
    await setLoading(false)
  }

  return (
    <PokeIndexContainer colors={['#2AC73F', '#EFF54C']} start={[1.8, .8]}>
      <TextInputStyled
        onChangeText={text => onChangeHandleSearch(text)}
        value={controlledInputValue}
        underlineColorAndroid="transparent"
        placeholder="Search pokemon by name"
      />
      {fetchedAllPokemon && !loading &&
        <RecyclerListViewComponent
          fetchedAllPokemon={allPokemonData}
          handleOnPressGoToStatsScreen={handleOnPressGoToStatsScreen} />
      }
    </PokeIndexContainer>
  )
}

export default RecycleableListScreen
