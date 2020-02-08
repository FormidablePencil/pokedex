import React from 'react'
import { View, Text, Tabs, Tab, TabHeading, Icon } from 'native-base'
import { globalStyles } from '../styles/globalStyles'
import { StyleSheet, ScrollView } from 'react-native'
import Tab1 from './Tab1'
import TabEvolution from './TabEvolution'
import TabMoves from './TabMoves'
import {
  TextWhite,
} from '../styles/stylesTabs' //@ TextWhite is more of a tab component
import Tab2 from './Tab2'

const styles = StyleSheet.create({
  tabBarUnderlineStyle: {
    backgroundColor: "#ffd4b4"
  },
  outerContainer: {
    backgroundColor: 'white'
  },
  tabColor: {
    backgroundColor: '#fda802'
  }
})

const TabsComp = ({ abilitiesAndDescriptions, stats, moves, description, evolutions }) => {
  return (
    <View>
      <Tab1
        description={description}
        abilitiesAndDescriptions={abilitiesAndDescriptions}
      />
      <Tab2
        stats={stats}
      />
      <TabEvolution
        evolutions={evolutions}
      />
      <TabMoves />
    </View>
  )
}


export default TabsComp

