import styled from 'styled-components';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export const ViewForText = styled.View`
  flex: 1;
  justifyContent: center;
`

export const PokemonIndexContainer = styled.View`
  flex: 1.4;
  justify-content: center;
  align-items: center;
`;

export const PokeStatsContainer = styled.View`
  height: 100%;
  width: 100%;
`;

export const StatsSection = styled.View`
  z-index: 40;
  /* height: 50%; */
  flex: 1;
  width: auto;
`;
export const EvolutionContainer = styled.View`
  justify-content: space-evenly;
  flex-direction: row;
`;
export const ImageContainer = styled.View`
  height: 200px;
`;

export const CoverDisplay = styled.View`
  z-index: 20;
  background-color: #97FFBD;
  position:  absolute;
  height: 100%;
  width: 100%;
`;
export const CenterText = styled.View`
  width: 100%;
  height: 100%;
  position: absolute;
  justify-content: flex-end;
  align-items: center;
`;
export const PokeTypesContainer = styled.View`
  background-color: indigo;
  margin: 1px;
  font-size: 13px;
  text-align: right;
  width: 100%;
`;
export const PokeTeamContainer = styled.View`
  background-color: #4818FD;
  height: 100%;
`;
export const SlotContainer = styled.View`
  width: 100%;
  height: 100%;
`;
export const PokeIndexContainer = styled(LinearGradient)`
  height: 100%;
  width: 100%;
  /* background-color: yellow; */
  flex: 1;
  /* backgroundColor: '#FFF'; */
  min-height: 1px;
  min-width: 1px;
  /* padding-horizontal: 6px; */
`;
