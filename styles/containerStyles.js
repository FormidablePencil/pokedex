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
  flex-direction: row;
`;
export const ImageContainer = styled.View`
  height: 150px;
  width: 100px;
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
  flex: 1;
  /* min-height: 1px;
  min-width: 1px; */
  /* background-color: yellow; */
  /* padding-horizontal: 6px; */
`;
export const SwitchToNextPokemonContainer = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: center;
  z-index: 400;
  position: absolute;
`;
export const LoadingContainer = styled(LinearGradient)`
  background-color: #3F3836;
  flex: 1;
  justify-content: center;
  align-items: center;
`;