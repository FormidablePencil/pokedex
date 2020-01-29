import React, { Component } from 'react'
import { View, Input, Button, Text, List, ListItem, Item, Header } from 'native-base'
import { FlatList, StyleSheet } from 'react-native'

export function Search(props) {
  const onChangeHandler = (inputedValue) => {
    const suggestions = regexTest(inputedValue, props.pokemonName)
    const regex2 = new RegExp('^[0-9]*$'); //check if integer
    if (inputedValue.length > 0 && regex2.test(inputedValue)) {
      props.updateSuggestions('', inputedValue)
    } else {
      props.updateSuggestions(suggestions, inputedValue)
    }
  }

  function regexTest(value, data) {
    const regex = new RegExp(`${value}`, 'ig')
    let suggestions = []
    suggestions = data.filter(item => regex.test(item)) //pokemonName is list of all pokemon. "[num][pokemon].png"
    suggestions = suggestions.map(item => (item.substr(3, item.indexOf('.png') - 3))).map(item => (item.replace('_', '')))
    return suggestions
  }

  return (
    <Input
      style={{ height: 20, color: 'white', backgroundColor: 'white', color: 'black' }}
      value={props.inputValue}
      onChangeText={inputedValue => onChangeHandler(inputedValue)}
      placeholder='search' />
  )
}

export default Search