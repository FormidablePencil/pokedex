import React from 'react'
import { View, Text, Tabs, Tab, TabHeading, Icon } from 'native-base'
import { globalStyles } from '../styles/globalStyles'
import { StyleSheet } from 'react-native'
import Tab1 from './Tab1'
import {
  TextWhite,
} from '../styles/stylesTabs' //@ TextWhite is more of a tab component

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

const TabsComp = ({ tabColor, pokemonId, type }) => {
  return (
    <View style={styles.outerContainer}>
      <Tabs tabBarUnderlineStyle={styles.tabBarUnderlineStyle}>
        <Tab heading={
          <View style={styles.tabColor}>
            <TextWhite>About</TextWhite>
          </View>
        }>

          <Tab1 pokemonId={pokemonId} type={type} />

        </Tab>
        <Tab heading={
          <View style={styles.tabColor}>
            <TextWhite>Base Stats</TextWhite>
          </View>
        }>

          {/* <Tab2 /> */}

        </Tab>
        <Tab heading={
          <View style={styles.tabColor}>
            <TextWhite>Evolution</TextWhite>
          </View>
        }>

          {/* <Tab3 /> */}

        </Tab>
        <Tab heading={
          <View style={styles.tabColor}>
            <TextWhite>Moves</TextWhite>
          </View>
        }>

          {/* <Tab3 /> */}

        </Tab>
      </Tabs>
    </View>
  )
}


export default TabsComp

