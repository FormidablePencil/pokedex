import React, { useEffect, createContext, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import PokeIndexScreen from '../screens/PokeIndexScreen';
import PokeStatsScreen from '../screens/PokeStatsScreen'
import { useDispatch } from 'react-redux';
import { fetchDataToAllPokemon } from '../actions/actions';
import { Text } from 'react-native';
import PokeFavScreen from '../screens/PokeFavScreen';
import PokeTeamScreen from '../screens/PokeTeamScreen';
import TabNavigator from './TabNavigator';

const Stack = createStackNavigator();

const StackPokemon = () => {
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(fetchDataToAllPokemon())
   }, [])

   const config = {
      animation: 'spring',
      config: {
         stiffness: 10000,
         damping: 500,
         mass: 3,
         overshootClamping: true,
         restDisplacementThreshold: 0.01,
         restSpeedThreshold: 0.01,
      },
   };

   return (
      <NavigationContainer>
         <Stack.Navigator
            screenOptions={{
               transitionSpec: {
                  open: config,
                  close: config,
               },
            }}>
            <Stack.Screen options={{headerShown: false}}
             name="TabNavigator" component={TabNavigator} />
            <Stack.Screen name="PokeStatsScreen" component={PokeStatsScreen} />
         </Stack.Navigator>
      </NavigationContainer>
   )
}

export default StackPokemon
