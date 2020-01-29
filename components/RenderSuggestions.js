import React from 'react'
import { View, Text, ListItem, Button } from 'native-base'
import { FlatList, TouchableOpacity } from 'react-native'


export const RenderSuggestions = (props) => {

  const suggestionSelected = async (name) => {
    const pokemonName = name.item.toLowerCase()
    props.selectedPokemon(pokemonName)
  }

  if (props.suggestions.length === 0) {
    return null
  } else {
    return (
      <View>
        <FlatList
          data={props.suggestions}
          renderItem={({ item }) => (
            <TouchableOpacity
            onPress={() => suggestionSelected({ item })}
            >
              <Text>{item}</Text>
            </TouchableOpacity>
          )} keyExtractor={(item, index) => index.toString()} />
      </View>
    )
  }
}

export default RenderSuggestions
