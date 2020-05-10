import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PokeIndexScreen from '../screens/PokeIndexScreen';
import PokeTeamScreen from '../screens/PokeTeamScreen';
import PokeFavScreen from '../screens/PokeFavScreen';
import PanResponderScreen from '../screens/PanResponderScreen'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { View, StatusBar } from 'react-native';
import RecycleableListScreen from '../screens/RecycleableListScreen';
import AttemptToImplementListScreen from '../screens/AttemptToImplementListScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux'
import { GESTURE_OFF } from '../actions/types';

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  const dispatch = useDispatch()

  return (
    <SafeAreaView style={{ flex: 1 }}>
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
        <Tab.Screen
          listeners={{
            tabPress: () => dispatch({ type: GESTURE_OFF })
          }}
          name="PokeTeamScreen" component={PokeTeamScreen} />
        <Tab.Screen
          listeners={{
            tabPress: () => dispatch({ type: GESTURE_OFF })
          }}
          name="PokeFavScreen" component={PokeFavScreen} />
        <Tab.Screen name="PokeIndexScreen" component={PokeIndexScreen}
          listeners={{
            tabPress: () => dispatch({ type: GESTURE_OFF })
          }}
        />
        {/* <Tab.Screen name="PanResponderScreen" component={PanResponderScreen} /> */}
        {/* <Tab.Screen name="RecycleableListScreen" component={RecycleableListScreen} /> */}
        {/* <Tab.Screen name="attemptRecycleList" component={AttemptToImplementListScreen} /> */}
      </Tab.Navigator >
    </SafeAreaView>
  )
}

export default TabNavigator
