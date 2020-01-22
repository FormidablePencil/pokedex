import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'

export default class notes extends Component {
  render() {
    if (this.state.showContacts) {
      return (
        <View>
          <Text>Something</Text>
        </View>
      )
    } else {
      return (
        <View>
          <Text>Something else</Text>
        </View>
      )
    }
  }
}

//or

export class notes2 extends Component {
  render() {
    return (
      <View>
        {this.state.showContants ? (
          <ScrollView>
            {Contacts.map(contact => <Row {...contact} />)}
          </ScrollView>
        ) : null
        }
      </View>
    )
  }
}

export class notes3 extends Component {
  render() {
    return (
      <View>
        {this.state.showContants && (
          <ScrollView>
            {Contacts.map(contact => <Row {...contact} />)}
          </ScrollView>
        )
        }
      </View>
    )
  }
}

//~ FlatList os ScrollView but renders 10 or so at a time vs ScrollView that renders all at the same time and may take a long time before it displays on screen. Though avoid using component state in FlatList.