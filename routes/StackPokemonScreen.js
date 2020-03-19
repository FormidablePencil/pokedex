import React, { useState, useEffect } from 'react'
import { View, Text } from 'native-base'
import { PokeIndexScreen } from '../screens/PokeIndexScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

export default function StackPokemonScreen() {
  const [fontLoaded, setFontLoaded] = useState(false)

  useEffect(() => { 
    async function loadFonts() {
      await Font.loadAsync({
        Roboto: require('native-base/Fonts/Roboto.ttf'),
        Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
        ...Ionicons.font,
      })
      setFontLoaded(true)
    }
    loadFonts()
  }, [])


  return (
    <NavigationContainer>
      <Stack.Navigator>
        {fontLoaded === true ?
          <Stack.Screen name="PokeIndexScreen" component={PokeIndexScreen} />
          : <Stack.Screen name="PokeIndexScreen" component={PokeIndexScreen} />
        }
      </Stack.Navigator>
    </NavigationContainer>
  )
}
