import styled from 'styled-components';
import { LinearGradient } from 'expo-linear-gradient';
import { Animated } from 'react-native';

export const ViewForText = styled.View`
  flex: 1;
  justify-content: center;
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
  margin: 1px 0px;
  font-size: 13px;
  text-align: right;
  width: 100%;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  background-color: red;
  overflow: hidden;
`;
export const SlotContainer = styled.View`
  height: 100%;
  width: 200px;
  align-items: center;
  justify-content: center;
`;
export const SwitchToNextPokemonContainer = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: center;
  z-index: 400;
  position: absolute;
`;
export const LoadingContainer = styled(LinearGradient)`
  /* background-color: #3F3836; */
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const FavListContainer = styled.View`
  flex: 1;
`;
export const PokeBtnsContainer = styled.View`
  align-items: center;
  top: 85px;
  margin-right: 15px;
  top: 20px;
  right: 0px;
`;
export const FavCard = styled.View`
  background-color: #E5FFB0;
  border-radius: 10px;
  height: 150px;
  width: 100%;
  justify-content: flex-start;
  padding: 3px;
  elevation: 3;
`;
export const IconsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 0px 5px;
  margin-bottom: 5px;
`;
export const JustifyContent = styled.View`
   top: -10px;
   margin: 5px 0px;
   flex-direction: row;
`;
export const LoadingText = styled.Text`
   font-style: italic;
   font-size: 25px;
   color: white;
   font-weight: bold;
`;
export const PokeFavContainer = styled(LinearGradient)`
  height: 100%;
`;
export const PokeIndexContainer = styled(LinearGradient)`
  height: 100%;
  padding: 0px 6px;
`;
export const PokeTeamContainer = styled(LinearGradient)`
  height: 100%;
  width: 100%;
`;
export const BackgroundBlack = styled.View`
  background-color: black;
`;
export const QuestionMarkContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
export const AlignPokemonMovesContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
export const PokemonEvolutionChainContainer = styled.View`
  background-color: transparent;
  height: 900px;
  align-items: flex-start;
`;
export const PokeEvolutionContainerAdjusting = styled.View`
  width: 100%;
  height: 500px;
  align-items: flex-end;
`
export const PokemonEvolutionMainContainer = styled.View`
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-evenly;
  background-color: transparent;
`;
const FavCardCompContainer = styled.View`
  width: 33%;
  padding: 6px;
`;
export const FavCardCompContainerAnimated = Animated.createAnimatedComponent(FavCardCompContainer);

export const TypesContainer = styled.View` 
/* background-color: pink; */
  z-index: 15; flex-direction: row; top: -50px; z-index: 15; justify-content: center; width: 40px;
`;
export const PokeStatsBgImgContainer = styled.View`
  height: 40px;
  width: 40px;
  border-radius: 4px;
  margin: 2px 0px;
  overflow: hidden;
`;
export const CenterEverything = styled.View`
  justify-content: space-evenly;
  align-items: center;
  flex: 1;
`;
export const ModalContainer = styled.View`
  position: absolute;
  z-index: 30;
  background-color: rgba(22,22,22,.3);
  height: 110%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
export const ModalCard = styled.View`
  background-color: white;
  border-radius: 10px;
  width: 70%;
  /* padding: 20px; */
  overflow: hidden;
`;
export const ListEmptyMsgContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;