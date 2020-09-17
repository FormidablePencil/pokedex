import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { capitalizeFirstCharFunc, testObjEmptyFunc } from '../logic/logic';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SET_POKEMON_THEME } from '../actions/types';
import { themes } from '../theming/themingStyles';
import { HeaderText, PokeTypesText } from '../styles/textStyles';
import { HeaderContainer } from '../styles/stylesTabs';
import { JustifyContent } from '../styles/containerStyles';

const PokeStatsHeader = () => {
   const types = useSelector(state => testObjEmptyFunc(state.fetchedSpecificPokemon) ? state.fetchedSpecificPokemon.pokemonInfo.types : {})
   const pokeName = useSelector(state =>
      testObjEmptyFunc(state.fetchedSpecificPokemon) > 0 ?
         state.fetchedSpecificPokemon.pokemonInfo.name : {}
   )
   const dispatch = useDispatch()
   const theme = useSelector(state => state.theme)

   const onPressHandler = (type) => dispatch({ type: SET_POKEMON_THEME, payload: type })

   return (
      <HeaderContainer>
         {testObjEmptyFunc(pokeName) && testObjEmptyFunc(types) &&
            <>
               <HeaderText color={themes[theme].pokeBox.color}>{capitalizeFirstCharFunc(pokeName)}</HeaderText>
               <JustifyContent>
                  {Object.keys(types).length > 0 && types.map((cluster, index) =>
                     <TouchableOpacity
                        key={index}
                        onPress={() => onPressHandler(cluster.type.name)}>
                        <PokeTypesText pokeStats
                           typeTxtColor={themes[cluster.type.name].pokeBox.typeTxtColor}
                           bgColor={themes[cluster.type.name].pokeBox.typeColor}
                           key={index}
                        >{cluster.type.name}</PokeTypesText>

                     </TouchableOpacity>
                  )}
               </JustifyContent>
            </>
         }
      </HeaderContainer>
   )
}



export default PokeStatsHeader
