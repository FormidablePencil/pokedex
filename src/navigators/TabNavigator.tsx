import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PokeIndexScreen from '../screens/PokeIndexScreen';
import PokeTeamScreen from '../screens/PokeTeamScreen';
import PokeFavScreen from '../screens/PokeFavScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux'
import { GESTURE_OFF } from '../actions/types';
import greatball from '../assets/images/greatball.png'
import ultraball from '../assets/images/ultraball.png'
import masterball from '../assets/images/masterball.png'
import { TabNavImage } from '../styles/imageStyles';
import PokeTeamLimitMsg from '../components/PokeTeamLimitMsg';

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  const dispatch = useDispatch()

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <PokeTeamLimitMsg />
      <Tab.Navigator
        initialRouteName='PokeIndexScreen'
        tabBarOptions={{
          activeTintColor: 'black',
          inactiveTintColor: 'gray',
          style: {
            backgroundColor: '#E5FFB0'
          }
        }}
      >
        <Tab.Screen
          options={(route) => ({
            tabBarIcon: ({ focused, color, size }) => {
              return <TabNavImage active={focused} source={greatball} />
            },
            title: 'pc'
          })}
          listeners={{
            tabPress: () => dispatch({ type: GESTURE_OFF })
          }}
          name="PokeFavScreen" component={PokeFavScreen} />
        <Tab.Screen
          options={(route) => ({
            tabBarIcon: ({ focused, color, size }) => {
              return <TabNavImage active={focused} source={ultraball} />
            },
            title: 'pokedex'
          })}
          listeners={{
            tabPress: () => dispatch({ type: GESTURE_OFF })
          }}
          name="PokeIndexScreen" component={PokeIndexScreen} />
        <Tab.Screen
          options={(route) => ({
            tabBarIcon: ({ focused, color, size }) => {
              return <TabNavImage active={focused} source={masterball} />
            },
            title: 'team'
          })}
          listeners={{
            tabPress: () => dispatch({ type: GESTURE_OFF })
          }}
          name="PokeTeamScreen" component={PokeTeamScreen} />
      </Tab.Navigator >
    </SafeAreaView>
  )
}

export default TabNavigator
