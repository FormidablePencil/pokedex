import styled from 'styled-components';

export const GoToPokemonBtn = styled.TouchableHighlight`
  background-color: hotpink;
`;
export const PokemonCard = styled.TouchableOpacity`
   background-color: white;
   border-radius: 10px;
   elevation: 5;
   justify-content: center;
   align-content: center;
   flex: 1;
   flex-direction: row;
   margin-horizontal: 10px;
   margin-vertical: 15px;
   height: 120px;
`
export const PokeballBtn = styled.TouchableOpacity`
  z-index: 50;
  position: absolute;
  bottom: 10px;
  right: 10px;
`
export const PokeFavoriteBtn = styled.TouchableOpacity`
`;

export const PokeTeamBtn = styled.TouchableOpacity`
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 6px;
`;