import React from 'react'
import { StyleSheet } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

export function Search({ reduxUpdateValueTyped }) {
  const onChangeHandler = (valueTyped) => {
    reduxUpdateValueTyped(valueTyped)
  }
  return (
    <TextInput
      style={styles.input}
      onChangeText={valueTyped => onChangeHandler(valueTyped)}
      placeholder='search' />
  )
}
const styles = StyleSheet.create({
  input: {
    height: 20,
    color: 'white',
    backgroundColor: 'white',
    color: 'black'
  }
})

export default Search