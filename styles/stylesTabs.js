import styled from 'styled-components'

export const StatsContainer = styled.View`
  flex-direction: row;
  margin-horizontal: 30px;
`
export const HeaderContainer = styled(StatsContainer)`
  margin-bottom: 20px;
  margin-top: 25px;
`
export const StatsText = styled.Text`
  color: grey;
  width: 80px;
  margin-vertical: 6px;
`
export const ResultForStats = styled.Text`
  margin-left: 50px;
  margin-vertical: 6px;
`
import {TouchableOpacity} from 'react-native'
export const BoldHeader = styled.Text`
  font-weight: bold;
  font-size: 20px;
  margin-left: -10px;
`
export const GlitchWithFramwork = styled.View`
  height: 100px;
`
export const TextGreen = styled.Text`
  color: green;
`
export const TextWhite = styled.Text`
  color: white;
`

export const SuggestionsContainer = styled.TouchableOpacity`
  background-color: pink;
  border-radius: 10;
  elevation: 5;
` //now simply set up logic to render styles according to what theme is in global state.