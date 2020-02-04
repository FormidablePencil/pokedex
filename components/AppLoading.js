import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { CenterEverything } from './../styles/globalStyles'

export default class AppLoading extends Component {
  render() {
    return (
      <CenterEverything>
        <Text> Loading... </Text>
      </CenterEverything>
    )
  }
}
