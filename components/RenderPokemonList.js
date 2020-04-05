import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FlatList } from 'react-native'
import { fetchSpecificPokemon } from '../actions/actions'
import IndexCardComp from './IndexCardComp'
import Loading from './Loading'
import { testObjEmptyFuc } from '../logic/logic'

export const RenderPokemonList = ({ navigation }) => {
  const fetchedAllPokemon = useSelector(state => state.fetchedAllPokemon)
  const [allPokemonData, setAllPokemonData] = useState()
  const [isReady, setIsReady] = useState(false)
  const [dummyData] = useState([{ pokemon_name: 'Bulb', pokemon_id: 1, type: ['grass'] }])
  const dispatch = useDispatch()

  useEffect(() => {
    setAllPokemonData(fetchedAllPokemon)
    setIsReady(true)
  }, [fetchedAllPokemon])

  const handleOnPressGoToStatsScreen = (pokemon) => {
    navigation.navigate('PokeStatsScreen')
    dispatch(fetchSpecificPokemon(pokemon))
  }

  return (
    <>
      {isReady ?
        <>
          <FlatList
            enableMomentum
            removeClippedSubviews
            keyboardShouldPersistTaps={'handled'} //this fixed the onPress first tap failure
            numColumns={2}
            data={testObjEmptyFuc(allPokemonData) ? allPokemonData : null} //dummy data exists so that 'Tried to get frame for out of range index NaN' didn't appear whenever saving redux files
            // onEndReachedThreshold={0.1}
            renderItem={({ item }) => {
              return (
                <IndexCardComp
                  specificPokemon={item}
                  handleOnPressGoToStatsScreen={handleOnPressGoToStatsScreen} />
              )
            }}
            keyExtractor={(item, index) => index.toString()}
          />
        </>
        : <Loading />
      }
    </>
  )
}
//~ fire pokemmon fetch action that collects all pokemon data and then set it into the it's seperate store. From there pull it into this component
//@ fetch pokemon names, ids, types.

export default RenderPokemonList
