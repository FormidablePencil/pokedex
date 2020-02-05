import { StyleSheet } from 'react-native';
import styled from "styled-components";

export const CenterEverything = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`
export const SimpleView = styled.View`
  background-color: white;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  width: 100%;
  height: 30px;
  `
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
})



