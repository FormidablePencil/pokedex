import React from 'react'
import { WrappingView } from '../styles/stylesTabs'
import { useSelector, useDispatch } from 'react-redux'
import { FlatList } from 'react-native-gesture-handler'
import { Text, Button } from 'react-native'
import { SuggestionsContainer, ViewForText } from '../styles/containerStyles'
import { IndexPokemonImage } from '../styles/miscStyles'
import { TextNum, TextName } from '../styles/textStyles'
import { fetchDataToAllPokemon, fetchSpecificPokemon } from '../actions/actions'

export const RenderPokemonList = ({ navigation }) => {
  const fetchedAllPokemon = useSelector(state => state.fetchedAllPokemon)
  const dispatch = useDispatch()

  const handleOnPressGoToStatsScreen = (dataOfSpecificPokemon) => {
    dispatch(fetchSpecificPokemon(dataOfSpecificPokemon))
    navigation.navigate('PokeStatsScreen')
  }

  return (
    <WrappingView>
      <FlatList
        numColumns={2}
        data={fetchedAllPokemon} //@ it would be easy to add an array of pokemonTypes to suggestions. Come back to it later 
        renderItem={({ item }) =>
          <SuggestionsContainer onPress={() => handleOnPressGoToStatsScreen(item)}>
            <IndexPokemonImage source={{ uri: `https://pokeres.bastionbot.org/images/pokemon/${item.pokemon_id}.png` }} />
            <ViewForText>
              <TextNum>{item.pokemon_id}</TextNum>
              {item.type.map(type =>
                <Text key={type}>{type}</Text>
              )}
              <TextName>{item.pokemon_name}</TextName>
            </ViewForText>
          </SuggestionsContainer>
        } keyExtractor={(item, index) => index.toString()} />
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