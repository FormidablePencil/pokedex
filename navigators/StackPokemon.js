import React, { useEffect, createContext, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import PokeIndexScreen from '../screens/PokeIndexScreen';
import PokeStatsScreen from '../screens/PokeStatsScreen'
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataToAllPokemon } from '../actions/actions';
import { Text, StatusBar, View, SafeAreaView, AsyncStorage, Button } from 'react-native';
import PokeFavScreen from '../screens/PokeFavScreen';
import PokeTeamScreen from '../screens/PokeTeamScreen';
import TabNavigator from './TabNavigator';
import EnterScreen from '../screens/EnterScreen';
import PokemonEffectivenessChartScreen from '../screens/PokemonEffectivenessChartScreen';
import useLocalStorage from '../components/hooks/useLocalStorage'
import HeaderBackBtn from '../components/HeaderBackBtn';
import { themes } from '../theming/themingStyles';

const Stack = createStackNavigator();

const StackPokemon = () => {
   const [theme, setTheme] = useState({})
   const themeRedux = useSelector(state => state.theme)
   useLocalStorage()

   useEffect(() => {
      if (themeRedux !== null) setTheme(themeRedux)
   }, [theme])

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
   // console.log(theme)
   return (
      <NavigationContainer>
         <Stack.Navigator
            screenOptions={{
               transitionSpec: {
                  open: config,
                  close: config,
               },
               headerTintColor: Object.keys(theme).length > 0 ? themes[theme].pokeBox.color : 'black'
               // headerLeft: (navigation) => <HeaderBackBtn navigation={navigation} title='btn' />,
            }}>
            <Stack.Screen name='EnterScreen' component={EnterScreen} />
            <Stack.Screen options={{ headerShown: false }} name="TabNavigator" component={TabNavigator} />
            <Stack.Screen name="PokeStatsScreen" component={PokeStatsScreen} />
            <Stack.Screen name="PokemonEffectivenessChart" component={PokemonEffectivenessChartScreen} />
         </Stack.Navigator>
      </NavigationContainer >
   )
}

export default StackPokemon
