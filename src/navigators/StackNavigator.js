import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PokeStatsScreen from '../screens/PokeStatsScreen'
import { useSelector } from 'react-redux';
import TabNavigator from './TabNavigator';
import PokemonEffectivenessChartScreen from '../screens/PokemonEffectivenessChartScreen';
import { themes } from '../theming/themingStyles';
import PokeTeamLimitMsg from '../components/PokeTeamLimitMsg';

const Stack = createStackNavigator();

const StackPokemon = () => {
   const [theme, setTheme] = useState({})
   const themeRedux = useSelector(state => state.theme)
   const fetchedAllPokemon = useSelector(state => state.fetchedAllPokemon)

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

   return (
      <>
         <NavigationContainer>
            <Stack.Navigator
               screenOptions={{
                  transitionSpec: {
                     open: config,
                     close: config,
                  },
                  headerTintColor: Object.keys(theme).length > 0 ? themes[theme].pokeBox.color : 'black'
               }}>
               <Stack.Screen options={{ headerShown: false }} name="TabNavigator" component={TabNavigator} />
               <Stack.Screen name="PokeStatsScreen" component={PokeStatsScreen} />
               <Stack.Screen
                  options={{
                     headerStyle: { backgroundColor: '#212121' },
                     title: 'Type Effectiveness',
                     headerTitleStyle: {
                        color: 'white'
                     }
                  }}
                  name="PokemonEffectivenessChart" component={PokemonEffectivenessChartScreen} />
            </Stack.Navigator>
         </NavigationContainer >
      </>
   )
}

export default StackPokemon
