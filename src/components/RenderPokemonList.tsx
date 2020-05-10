import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FlatList } from 'react-native'
import { fetchSpecificPokemon } from '../actions/actions'
import IndexCardComp from './IndexCardComp'
import Loading from './Loading'
import { testObjEmptyFunc } from '../logic/logic'

export const RenderPokemonList = ({ navigation, allPokemonData, setAllPokemonData }) => {
  const fetchedAllPokemon = useSelector(state => state.fetchedAllPokemon)
  const [isReady, setIsReady] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    setAllPokemonData(fetchedAllPokemon)
    setIsReady(true)
  }, [fetchedAllPokemon])

  const handleOnPressGoToStatsScreen = (pokemon_id) => {
    navigation.navigate('PokeStatsScreen')
    dispatch(fetchSpecificPokemon(pokemon_id))
  }

  return (
    <>
      {isReady ?
        <>
          <FlatList
            removeClippedSubviews
            keyboardShouldPersistTaps={'handled'}
            numColumns={2}
            data={testObjEmptyFunc(allPokemonData) ? allPokemonData : null}
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

export default RenderPokemonList
