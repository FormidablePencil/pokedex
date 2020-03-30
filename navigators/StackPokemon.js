import React, { useEffect, createContext, useState } from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
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
      console.log('once @@')
   }, [])

   return (
      <PokemonContextProvider.Provider>
         <NavigationContainer>
            <Stack.Navigator>
               <Stack.Screen name="PokeIndexScreen" component={PokeIndexScreen} />
               <Stack.Screen name="PokeStatsScreen" component={PokeStatsScreen} />
            </Stack.Navigator>
         </NavigationContainer>
      </PokemonContextProvider.Provider>

   )
}

export default StackPokemon
