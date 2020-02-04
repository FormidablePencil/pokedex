import React from 'react'
import { Input } from 'native-base'
import { StyleSheet } from 'react-native'

export function Search({ reduxUpdateValueTyped }) {
  const onChangeHandler = (valueTyped) => {
    reduxUpdateValueTyped(valueTyped)
  }
  return (
    <Input
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