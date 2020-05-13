import React, { useState } from 'react'
import RecyclerListViewComponent from '../components/RecyclerListViewComponent'
import { useSelector, useDispatch } from 'react-redux'
import { fetchSpecificPokemon } from '../actions/actions'
import { PokeIndexContainer } from '../styles/containerStyles'

const RecycleableListScreen = ({ navigation }) => {
  const fetchedAllPokemon = useSelector(state => state.fetchedAllPokemon)
  const dispatch = useDispatch()
  const [allPokemonData, setAllPokemonData] = useState(fetchedAllPokemon)

  useState(() => {
    setAllPokemonData(fetchedAllPokemon)
  }, [fetchedAllPokemon])

  const handleOnPressGoToStatsScreen = (pokemon_id) => {
    dispatch(fetchSpecificPokemon(pokemon_id))
    navigation.navigate('PokeStatsScreen')
  }

  return (
    <PokeIndexContainer colors={['#390148', '#27229F']} start={[1.5, .8]}>
      <RecyclerListViewComponent
        fetchedAllPokemon={allPokemonData}
        handleOnPressGoToStatsScreen={handleOnPressGoToStatsScreen} />
    </PokeIndexContainer>
  )
}

export default RecycleableListScreen
