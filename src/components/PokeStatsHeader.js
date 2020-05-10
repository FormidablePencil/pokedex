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
               <HeaderText>{capitalizeFirstCharFunc(pokeName)}</HeaderText>
               <JustifyContent>
                  {Object.keys(types).length > 0 && types.map((cluster, index) =>
                     <PokeTypesText key={index}>{cluster.type.name}</PokeTypesText>
                  )}
               </JustifyContent>
            </>
         }
      </HeaderContainer>
   )
}

const HeaderText = styled.Text`
   font-size: 30px;
   margin: 0px 10px;
   color: white;
   font-family: LemonadaMedium;
   font-size: 25px;
`;
const PokeTypesText = styled.Text`
   font-family: LemonadaRegular;
   color: white;
   padding: 0px 15px;
   margin: 0px 5px;
   border-radius: 20px;
   background-color: orange;
   font-size: 10px;
`;
const HeaderContainer = styled.View`
   flex-direction: column;
   bottom: -15px;
`;
const JustifyContent = styled.View`
   top: -10px;
   margin: 5px 0px;
   flex-direction: row;
`;

export default PokeStatsHeader
