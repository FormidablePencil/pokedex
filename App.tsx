import React, { createContext, useState, useEffect } from 'react'
import { Provider } from 'react-redux'
import store from './store'
import StackPokemon from './navigators/StackPokemon';
import ErrorBoundaries from './ErrorBoundaries';
import { UIManager, Text } from 'react-native';
import * as Font from 'expo-font'


export const PokemonContextProvider = createContext()

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false)

  if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'LemonadaLight': require('./assets/fonts/Lemonada/static/Lemonada-Light.ttf'),
        'LemonadaRegular': require('./assets/fonts/Lemonada/static/Lemonada-Regular.ttf'),
        'LemonadaMedium': require('./assets/fonts/Lemonada/static/Lemonada-Medium.ttf'),
        'LemonadaSemiBold': require('./assets/fonts/Lemonada/static/Lemonada-SemiBold.ttf'),
        'LemonadaBold': require('./assets/fonts/Lemonada/static/Lemonada-Bold.ttf'),
      })
      setFontsLoaded(true)
    }
    loadFonts()
  }, [])

  return (
    <PokemonContextProvider.Provider>
      {/* <ErrorBoundaries /> */}
      <Provider store={store}>
        {fontsLoaded ?
          <>
            <StackPokemon />
          </>
          : <Text>Loading...</Text>
        }
      </Provider>
    </PokemonContextProvider.Provider>
  )
}

export default App


//npx react-native start --reset-cache //* troubleshooting react navigation