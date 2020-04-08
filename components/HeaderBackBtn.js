import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const HeaderBackBtn = ({ navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Text>back</Text>
    </TouchableOpacity >
  )
}

export default HeaderBackBtn
