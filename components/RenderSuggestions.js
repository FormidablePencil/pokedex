import React from 'react'
import {View, Text, ListItem, Button} from 'native-base'
import { FlatList, TouchableOpacity } from 'react-native'


export const RenderSuggestions = (props) => {

  const suggestionSelected = async (name) => {
    const pokemonName = name.item.toLowerCase()
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`)
    const data = await res.json()
    props.updateFetchedPokemonStatsApi(data)
  }

  if (props.suggestions.length === 0) {
    return null
  } else {
    return (
      <View>
        <FlatList
          data={props.suggestions}
          renderItem={({ item }) => (
            <View>
              <TouchableOpacity onPress={() => suggestionSelected({item})}><Text>{item}</Text></TouchableOpacity>
            </View>
          )} keyExtractor={(item, index) => index.toString()}/>
      </View>
    )
  }
}

  export default RenderSuggestions
