import React, { useState, useEffect } from 'react'
import { WrappingView } from '../styles/stylesTabs'
import { useSelector, useDispatch } from 'react-redux'
import { Text, Button, FlatList } from 'react-native'
import { SuggestionsContainer, ViewForText } from '../styles/containerStyles'
import { IndexPokemonImage } from '../styles/miscStyles'
import { TextNum, TextName } from '../styles/textStyles'
import { fetchSpecificPokemon } from '../actions/actions'
import CachedImage from '../screens/CachedImage'
import FlatListItem from './FlatListItem'
import Loading from './Loading'

export const RenderPokemonList = ({ navigation }) => {
  const fetchedAllPokemon = useSelector(state => state.fetchedAllPokemon)
  const [isReady, setIsReady] = useState(false)
  const [pokemonData, setPokemonData] = useState({ data: [] })
  const dispatch = useDispatch()

  useEffect(() => {
    setIsReady(true)
    setPokemonData({ data: fetchedAllPokemon })
    return () => {
      setIsReady(false)
    }
  }, [fetchedAllPokemon])

  console.log('renderPokemonList compomnent')
  const handleOnPressGoToStatsScreen = async (pokemon) => {
    navigation.navigate('PokeStatsScreen')
    dispatch(fetchSpecificPokemon(pokemon))
  }

  //I found that you have to create a pureComponent for solving horrible proformance issues


  return (
    <WrappingView>
      {isReady ?
        <FlatList
          enableMomentum
          removeClippedSubviews
          keyboardShouldPersistTaps={'handled'} //this fixed the onPress first tap failure
          numColumns={2}
          data={pokemonData.data} //@ it would be easy to add an array of pokemonTypes to suggestions. Come back to it later 
          onEndReachedThreshold={0.1}
          renderItem={({ item }) => <FlatListItem item={item} handleOnPressGoToStatsScreen={handleOnPressGoToStatsScreen} />}
          keyExtractor={item => Object.values(item.pokemon_id)}
        />
        : <Loading />
      }
    </WrappingView>
  )
}
//~ fire pokemmon fetch action that collects all pokemon data and then set it into the it's seperate store. From there pull it into this component
//@ fetch pokemon names, ids, types.

export default RenderPokemonList



// const autoSuggestionFunctionality = (valueTyped) => {
//   const localPokemonList = this.props.localPokemonList
//   const regexTestForMatch = new RegExp(`${valueTyped}`, 'ig') //check if matches anywhere
//   const regexTestForNum = new RegExp('^[0-9]*$') //check if integer
//   const autoSuggestionList = []
//   //Implement search by pokemon types. I already have the json file, all I have to do is compaure all pokemon by the type searched.
//   if (valueTyped.length > 0 && regexTestForNum.test(valueTyped)) {  //If number then test all pokemon that pass the RegEx test of being a number 
//   } else if (valueTyped.length > 0) { //else if letter 
//     for (let i = 0; i < Object.keys(localPokemonList).length; i++) {
//       const pokemon = Object.values(localPokemonList[i])[0]
//       if (regexTestForMatch.test(pokemon) == true) {
//         autoSuggestionList.push(pokemon)
//       }
//     }
//     if (autoSuggestionList) this.props.updateSuggestions(autoSuggestionList)
//     else this.props.updateSuggestions(this.props.localPokemonList)
//   }
// }