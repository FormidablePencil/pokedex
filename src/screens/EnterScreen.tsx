import React from 'react'
import { View, Text, AsyncStorage } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { EnterBtn, ThemeBtn } from '../styles/btnStyles'
import { TextWhite } from '../styles/textStyles'

const EnterScreen = ({ navigation }) => {
  
  const displayData = async () => {
    try {
      let allOfReduxStatesString = await AsyncStorage.getItem('allOfReduxStates')
      let allOfReduxStates = JSON.parse(allOfReduxStatesString)
      console.log(Object.keys(allOfReduxStates))
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <View style={{ justifyContent: 'space-evenly', alignItems: 'center', flex: 1 }}>
      <EnterBtn onPress={() => navigation.navigate('TabNavigator', { screen: 'RecycleableListScreen' })}>
        <TextWhite>Enter</TextWhite>
      </EnterBtn>
      <TouchableOpacity onPress={() => displayData()}>
        <Text>displayData</Text>
      </TouchableOpacity>

      <ThemeBtn onPress={() => console.log('ok')}>
        <TextWhite>Choose your theme</TextWhite>
        <Text>Theming options here: dark, light, retro</Text>
      </ThemeBtn>
      <Text>implement lotti animation for loading</Text>
      <Text>this is going to be the the gooie slide gesture animation... maybe</Text>
    </View >
  )
}

export default EnterScreen
