import React, { Component } from 'react'
import { Image, View, Text } from 'react-native'

export class Description extends Component {
  render() {
    let pokemon = "snorlax";
    let Image_Http_URL = { uri: 'http://play.pokemonshowdown.com/sprites/xyani/' + pokemon + '.gif' };
    return (
      <View>
        <Image source={Image_Http_URL} style={{ height: 150, width: 150, resizeMode: 'stretch', margin: 5 }} />
      </View>
    )
  }
}

export default Description
