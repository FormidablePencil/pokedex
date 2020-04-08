import React, { useState } from 'react'
import { View, Text, StatusBar } from 'react-native'
import RecyclerListViewComponent from '../screens/RecyclerListViewComponent'
import { useSelector, useDispatch } from 'react-redux'
import { fetchSpecificPokemon } from '../actions/actions'
import { PokeIndexContainer } from '../styles/containerStyles'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TextInput } from 'react-native-gesture-handler'
import { searchSuggestionsFunc } from '../logic/logic'

const RecycleableListScreen = ({ navigation }) => {
  const fetchedAllPokemon = useSelector(state => state.fetchedAllPokemon)
  const dispatch = useDispatch()
  const [controlledInputValue, setControlledInputValue] = useState()
  const [allPokemonData, setAllPokemonData] = useState(fetchedAllPokemon)

  useState(() => {
    setAllPokemonData(fetchedAllPokemon)
  }, [fetchedAllPokemon])

  

  const onChangeHandleSearch = async (text) => {
    setControlledInputValue(controlledInputValue)
    const filtered = searchSuggestionsFunc({ text, arrayToFilterThrough: fetchedAllPokemon, ObjKeyToCompare: 'pokemon_name' })
    setAllPokemonData()
    console.log(allPokemonData, 'filtered')
  }

  const handleOnPressGoToStatsScreen = (pokemon_id) => {
    dispatch(fetchSpecificPokemon(pokemon_id))
    navigation.navigate('PokeStatsScreen')
  }

  return (
    <PokeIndexContainer colors={['#390148', '#27229F']} start={[1.5, .8]}>
      {/* <TextInput style={{ backgroundColor: 'black', color: 'white', marginTop: 20, marginHorizontal: 10, height: 30, paddingHorizontal: 10 }}
        onChangeText={text => onChangeHandleSearch(text)}
        value={controlledInputValue}
        underlineColorAndroid="transparent"
        placeholder="Search Pokemon"
      /> */}
      <RecyclerListViewComponent
        fetchedAllPokemon={allPokemonData}
        handleOnPressGoToStatsScreen={handleOnPressGoToStatsScreen} />
    </PokeIndexContainer>

  )
}

export default RecycleableListScreen
