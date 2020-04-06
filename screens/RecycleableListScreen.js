import React from 'react'
import { View, Text } from 'react-native'
import RecyclerListViewComponent from '../screens/RecyclerListViewComponent'
import { useSelector, useDispatch } from 'react-redux'
import { fetchSpecificPokemon } from '../actions/actions'
import { PokeIndexContainer } from '../styles/containerStyles'

const RecycleableListScreen = ({ navigation }) => {
  const fetchedAllPokemon = useSelector(state => state.fetchedAllPokemon)
  const dispatch = useDispatch()
  // console.log(Object.keys(fetchedAllPokemon))

  const handleOnPressGoToStatsScreen = (pokemon) => {
    dispatch(fetchSpecificPokemon(pokemon))
    navigation.navigate('PokeStatsScreen')
  }

  return (
    <PokeIndexContainer colors={['#390148', '#27229F']} start={[1.5, .8]}>
      <RecyclerListViewComponent fetchedAllPokemon={fetchedAllPokemon} handleOnPressGoToStatsScreen={handleOnPressGoToStatsScreen} />
    </PokeIndexContainer>

  )
}

export default RecycleableListScreen
