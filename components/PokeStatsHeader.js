import React from 'react'
import { View } from 'react-native'
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { capitalizeFirstCharFunc, testObjEmptyFunc } from '../logic/logic';

const PokeStatsHeader = () => {
   const types = useSelector(state => testObjEmptyFunc(state.fetchedSpecificPokemon) ? state.fetchedSpecificPokemon.pokemonInfo.types : {})
   const pokeName = useSelector(state =>
      testObjEmptyFunc(state.fetchedSpecificPokemon) > 0 ?
         state.fetchedSpecificPokemon.pokemonInfo.name : {}
   )

   return (
         <HeaderContainer>
            {testObjEmptyFunc(pokeName) && testObjEmptyFunc(types) &&
               <>
                  <Text>{capitalizeFirstCharFunc(pokeName)}</Text>
                  <JustifyContent>
                     {Object.keys(types).length > 0 && types.map((cluster, index) =>
                        <PokeTypesContainer key={index}>
                           <PokeTypesText>{cluster.type.name}</PokeTypesText>
                        </PokeTypesContainer>
                     )}
                  </JustifyContent>
               </>
            }
         </HeaderContainer>
   )
}

const Text = styled.Text`
  font-size: 30px;
  margin-horizontal: 10px;
  color: white;
`;
const PokeTypesText = styled.Text`
   font-size: 20px;
`;
const HeaderContainer = styled.View`
   flex-direction: column;
   bottom: -25px;
`;
const PokeTypesContainer = styled.View`
  flex-direction: row;
  background-color: orange;
  border-radius: 5px;
  margin-horizontal: 5px;
  padding-horizontal: 5px;
`;
const JustifyContent = styled.View`
   margin-vertical: 5px;
   flex-direction: row;
`;

export default PokeStatsHeader
