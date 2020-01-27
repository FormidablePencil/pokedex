import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {globalStyles} from './../styles/globalStyles'

export default class AppLoading extends Component {
  render() {
    return (
      <View style={globalStyles.centerEverything}>
        <Text> Loading... </Text>
      </View>
    )
  }
}
