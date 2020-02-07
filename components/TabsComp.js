import React from 'react'
import { View, Text, Tabs, Tab, TabHeading, Icon } from 'native-base'
import { globalStyles } from '../styles/globalStyles'
import { StyleSheet } from 'react-native'
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

const TabsComp = ({ tabColor, pokemonStats }) => {
  return (
    <View style={styles.outerContainer}>
      <Tabs tabBarUnderlineStyle={styles.tabBarUnderlineStyle}>
        <Tab heading={
          <View style={styles.tabColor}>
            <TextWhite>About</TextWhite>
          </View>
        }>

          <Tab1
            // height={}
            // weight={}
          // species={}
          // abilities={}
          // gender={}~
          // eggGroups={}
          // eggCycle={}
          // hp={}
          />

        </Tab>
        <Tab heading={
          <View style={styles.tabColor}>
            <TextWhite>Base Stats</TextWhite>
          </View>
        }>
          {pokemonStats ?

            <Tab2
              baseAttack={pokemonStats.base_attack}
              baseDefense={pokemonStats.base_defense}
              baseStamina={pokemonStats.base_stamina}
            /> :
            <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>

              <Text style={{ textAlign: 'center' }}>Base stats are not availiable for this pokemon</Text>
            </View>
          }

        </Tab>
        <Tab heading={
          <View style={styles.tabColor}>
            <TextWhite>Evolution</TextWhite>
          </View>
        }>

          <TabEvolution
            evolution={'we want the pokemons evolutions. Evolution-chain api endpoint'}
          />

        </Tab>
        <Tab heading={
          <View style={styles.tabColor}>
            <TextWhite>Moves</TextWhite>
          </View>
        }>

          <TabMoves />

        </Tab>
      </Tabs>
    </View>
  )
}


export default TabsComp

