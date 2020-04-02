import React, { useEffect } from 'react'
import { View } from 'react-native'
import styled from 'styled-components';

const PokeStatsHeader = ({ pokemonName, pokemonTypes }) => {
   return (
      <HeaderContainer>
         <Text>{pokemonName}</Text>
         <JustifyContent>
            {Object.keys(pokemonTypes).length > 0 && pokemonTypes.map((cluster, index) =>
               <PokeTypesContainer key={index}>
                  <PokeTypesText>{cluster.type.name}</PokeTypesText>
               </PokeTypesContainer>
            )}
         </JustifyContent>
      </HeaderContainer>
   )
}

export const PokemonStatsHeaderRight = ({ pokemonId }) => {
   return (
      <Text>{pokemonId}</Text>
   )
}
export const Text = styled.Text`
  font-size: 30px;
  margin-horizontal: 10px;
  color: white;
`;
export const PokeTypesText = styled.Text`
   font-size: 20px;
`;
export const HeaderContainer = styled.View`
   flex-direction: column;
   bottom: -15px;
`;
export const PokeTypesContainer = styled.View`
  flex-direction: row;
  background-color: orange;
  border-radius: 5px;
  margin-horizontal: 5px;
  padding-horizontal: 5px;
`;
export const JustifyContent = styled.View`
   margin-vertical: 5px;
   flex-direction: row;
`;

export default PokeStatsHeader
