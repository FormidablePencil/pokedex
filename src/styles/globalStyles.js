import { StyleSheet } from 'react-native'
import styled from "styled-components"

export const CenterEverything = styled.View`
  flex: 1;
  justify-content: center;
  align-content: center;
  align-items: center;
`
export const CenterAbsolutelyEverything = styled(CenterEverything)`
  height: 300;
`
export const SimpleView = styled.View`
  background-color: white;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  width: 100%;
  height: 30px;
`
export const FlexContainer = styled.View`
  flex: 1;
`;

export const styles = StyleSheet.create({
  scrollViewContentContainer: {
    backgroundColor: 'white',
    paddingTop: 10,
  },
  starIcon: {
    color: 'lightgray',
  },
});
export const globalStyles = StyleSheet.create({
  flexCol: {
    flexDirection: 'row',
  },
  simpleView: {
  },
  pokemonTypePosition: {
    width: 150,
    height: 100,
    position: 'absolute',
    top: 10, flex: 1
  },
  pokemonEvolutionIndicators: {
    position: 'absolute', bottom: 3
  },
  pokemonEvolutionName: {
    position: 'absolute', bottom: 0, fontSize: 12, color: 'black', alignSelf: 'center',
    justifyContent: "flex-end", fontFamily: 'LemonadaLight', color: 'white'
  },
  goToPokemonEffectivenessIcon: {
    zIndex: 30, marginTop: 20
  },
  widthHeight100: {
    width: '100%',
    height: '100%'
  },
  AlignPokemonMovesContainer: {
    flexDirection: 'row', flexWrap: 'wrap', justifyContent: "space-evenly"
  }
})