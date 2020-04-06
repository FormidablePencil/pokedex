import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PokeIndexScreen from '../screens/PokeIndexScreen';
import PokeTeamScreen from '../screens/PokeTeamScreen';
import PokeFavScreen from '../screens/PokeFavScreen';
import PanResponderScreen from '../screens/PanResponderScreen'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { View } from 'react-native';
import RecycleableListScreen from '../screens/RecycleableListScreen';
import AttemptToImplementListScreen from '../screens/AttemptToImplementListScreen';

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={(route) => ({
        tabBarIcon: ({ focused, color, size }) => {
          return <MaterialCommunityIcons name="pokeball" color={color} size={size} />
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        style: {
          backgroundColor: '#2E2E1A' // TabBar background
        }
      }}
    >
      <Tab.Screen name="PanResponderScreen" component={PanResponderScreen} />
      <Tab.Screen
        options={{ headerTransparent: true, headerShown: false }}
        name="PokeTeamScreen" component={PokeTeamScreen} />
      <Tab.Screen
        options={{ headerTransparent: true }}
        name="PokeFavScreen" component={PokeFavScreen} />
      <Tab.Screen name="PokeIndexScreen" component={PokeIndexScreen} />
      <Tab.Screen name="RecycleableListScreen" component={RecycleableListScreen} />
      <Tab.Screen name="attemptRecycleList" component={AttemptToImplementListScreen} />
    </Tab.Navigator >
  )
}

export default TabNavigator
