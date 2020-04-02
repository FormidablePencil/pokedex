import React, { useEffect, createContext, useState } from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators, TransitionPresets } from '@react-navigation/stack';
import PokeIndexScreen from '../screens/PokeIndexScreen';
import PokeStatsScreen from '../screens/PokeStatsScreen'
import { useDispatch } from 'react-redux';
import { fetchDataToAllPokemon } from '../actions/actions';

const Stack = createStackNavigator();
const PokemonContextProvider = createContext()

const StackPokemon = () => {
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(fetchDataToAllPokemon())
   }, [])

   const config = {
      animation: 'spring',
      config: {
        stiffness: 1000,
        damping: 500,
        mass: 3,
        overshootClamping: true,
        restDisplacementThreshold: 0.01,
        restSpeedThreshold: 0.01,
      },
    };

   return (
      <PokemonContextProvider.Provider>
         <NavigationContainer>
            <Stack.Navigator
               screenOptions={{
                  /* transitionSpec: {
                     open: config,
                     close: config,
                   }, */
                   ...TransitionPresets.SlideFromRightIOS
               }}
            >
               <Stack.Screen name="PokeIndexScreen" component={PokeIndexScreen} />
               <Stack.Screen name="PokeStatsScreen" component={PokeStatsScreen} />
            </Stack.Navigator>
         </NavigationContainer>
      </PokemonContextProvider.Provider>

   )
}

export default StackPokemon
