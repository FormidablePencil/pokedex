import React, { Component } from 'react'
import { globalStyle, globalStyles } from './styles/globalStyles'
import { CheckBox, Text, View } from 'native-base'

export default class App extends Component {
  state = {
    checkbox1: true,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
    checkbox5: false,
    checkbox6: false,
    checkbox7: false,
  }
  
  render() {
    return (
      <View style={globalStyles.centerEverything}>
        <Text>Learn the navigation</Text>
        <Text>Watch those CS50 videos</Text>
        <Text>The goal is to learn the differences between React and React-Native</Text>
        <Text>Learn what I can and cannot do with Native so I know it wasn't actually me, react or libraries doing wrong but aactually it's just done differently</Text>
        <Text>I hope to get the videos done my today</Text>
        <Text>12hrs 6-12 vids left</Text>
        <View style={globalStyles.flexCol}>
          <CheckBox checked={this.state.checkbox1} />
          <Text style={globalStyles.textColor}>12 left | 6th vid</Text>
        </View>
        <View style={globalStyles.flexCol}>
          <CheckBox checked={this.state.checkbox2} />
          <Text style={globalStyles.textColor}>10:25 left | 7th vid</Text>
        </View>
        <View style={globalStyles.flexCol}>
          <CheckBox checked={this.state.checkbox3} />
          <Text style={globalStyles.textColor}>8:45 left | 8th vid</Text>
        </View>
        <View style={globalStyles.flexCol}>
          <CheckBox checked={this.state.checkbox4} />
          <Text style={globalStyles.textColor}>7:00 left | 9th vid</Text>
        </View>
        <View style={globalStyles.flexCol}>
          <CheckBox checked={this.state.checkbox5} />
          <Text style={globalStyles.textColor}>5:00 left | 10th vid</Text>
        </View>
        <View style={globalStyles.flexCol}>
          <CheckBox checked={this.state.checkbox6} />
          <Text style={globalStyles.textColor}>3:20 left | 11th vid</Text>
        </View>
        <View style={globalStyles.flexCol}>
          <CheckBox checked={this.state.checkbox7} />
          <Text style={globalStyles.textColor}>1:40 left | 12th vid</Text>
        </View>
       
      </View>
    )
  }
}
