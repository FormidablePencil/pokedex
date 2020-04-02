import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Text, Button, FlatList, LayoutAnimation } from 'react-native'
import { SuggestionsContainer, ViewForText, PokeIndexContainer } from '../styles/containerStyles'
import { IndexPokemonImage } from '../styles/miscStyles'
import { TextNum, TextName } from '../styles/textStyles'
import { fetchSpecificPokemon } from '../actions/actions'
import CachedImage from '../screens/CachedImage'
import FlatListItem from './FlatListItem'
import Loading from './Loading'
import { TextInput } from 'react-native-gesture-handler'
import { searchFilterFunction } from '../logic/logic'

export const RenderPokemonList = ({ navigation }) => {
  const fetchedAllPokemon = useSelector(state => state.fetchedAllPokemon)
  const [allPokemonData, setAllPokemonData] = useState()
  const [isReady, setIsReady] = useState(false)
  const [dummyData, setDummyData] = useState([{ pokemon_name: 'Bulb', pokemon_id: 1, type: ['grass'] }])
  const [controlledInputValue, setControlledInputValue] = useState()
  const dispatch = useDispatch()

  navigation.setOptions({
    headerTitle: () => <TextInput
      onChangeText={text => onChangeHandleSearch(text)}
      value={controlledInputValue}
      underlineColorAndroid="transparent"
      placeholder="Search Here"
    />
  })

  useEffect(() => {
    setAllPokemonData(fetchedAllPokemon)
    setIsReady(true)
  }, [fetchedAllPokemon])


  const handleOnPressGoToStatsScreen = async (pokemon) => {
    dispatch(fetchSpecificPokemon(pokemon))
    navigation.navigate('PokeStatsScreen')
  }


  const onChangeHandleSearch = (text) => {
    const filtered = searchFilterFunction({ text, arrayToFilterThrough: fetchedAllPokemon, ObjKeyToCompare: 'pokemon_name' })
    setAllPokemonData(filtered)
  }


  //I found that you have to create a pureComponent for solving horrible proformance issues
  return (
    <PokeIndexContainer>
      {isReady ?
        <FlatList
          enableMomentum
          removeClippedSubviews
          keyboardShouldPersistTaps={'handled'} //this fixed the onPress first tap failure
          numColumns={2}
          data={Object.keys(allPokemonData).length === 0 ? dummyData : allPokemonData} //dummy data exists so that 'Tried to get frame for out of range index NaN' didn't appear whenever saving redux files
          // onEndReachedThreshold={0.1}
          renderItem={({ item }) => {
            return (
              <FlatListItem
                allPokemonData={item}
                handleOnPressGoToStatsScreen={handleOnPressGoToStatsScreen} />
            )
          }}
          keyExtractor={(item, index) => index.toString()}
        />
        : <Loading />
      }
    </PokeIndexContainer>
  )
}
//~ fire pokemmon fetch action that collects all pokemon data and then set it into the it's seperate store. From there pull it into this component
//@ fetch pokemon names, ids, types.

export default RenderPokemonList
