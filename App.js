import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './store'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PokeIndexScreen from './screens/PokeIndexScreen';
import PokeStatsScreen from './screens/PokeStatsScreen'
const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="PokeIndexScreen" component={PokeIndexScreen} />
          <Stack.Screen name="PokeStatsScreen" component={PokeStatsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

  export default App