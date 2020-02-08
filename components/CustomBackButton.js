import React from 'react'
import { View, Text, Button } from 'react-native'

const CustomBackButton = ({backButton}) => {
  return (
    <Button onPress={() => backButton()} title="back" /> 
  )
}

export default CustomBackButton
