import styled from 'styled-components'

export const StatsContainer = styled.View`
  flex-direction: row
  margin-horizontal: 30px
`
export const HeaderContainer = styled(StatsContainer)`
  margin-bottom: 20px
  margin-top: 25px
`
export const StatsText = styled.Text`
  color: grey
  width: 80px
  margin-vertical: 6px
`
export const ResultForStats = styled.Text`
  margin-left: 50px
  margin-vertical: 6px
`
import { TouchableOpacity } from 'react-native'
export const BoldHeader = styled.Text`
  font-weight: bold
  font-size: 20px
  margin-left: -10px
`
export const GlitchWithFramwork = styled.View`
  height: 100px
`
export const TextGreen = styled.Text`
  color: green
`
export const TextWhite = styled.Text`
  color: white
`



export const WrappingView = styled.View`
  margin-horizontal: 6px
`
export const SuggestionsContainer = styled.TouchableOpacity`
  background-color: white
  border-radius: 10px
  elevation: 5
  justify-content: center
  align-content: center
  flex: 1
  flex-direction: row
  margin-horizontal: 10px
  margin-vertical: 15px
` //now simply set up logic to render styles according to what theme is in global state.
export const TextName = styled.Text`
  color: #606f76
  position: absolute
  bottom: 5px
  left: -27px
  width: 300px
  font-weight: bold
  `
  export const TextNum = styled.Text`
  font-size: 25px
  top: -10px
  `
  export const ViewForText = styled.View`
  flex: 1
  justifyContent: center
  `
  export const IndexPokemonImage = styled.Image`
  width: 100px
  height: 100px
  left: -10px
  top: -15px
`
export const IndexContainer = styled.View`

  height: 100%
  width: 100%
  align-content: center
  justify-content: center
  background-color: green
  
`
