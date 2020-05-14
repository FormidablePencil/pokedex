import React, { useEffect, useState } from 'react'
import { Image } from 'react-native'
import { ViewForText, CenterText, PokemonIndexContainer, PokeTypesContainer } from '../styles/containerStyles'
import { TextNum, TextName } from '../styles/textStyles'
import { PokemonCard, PokeTeamBtn, PokeFavoriteBtn } from '../styles/btnStyles'
import { PokeTypesText } from '../styles/textStyles';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'
import AddDeleteInReduxCompWithBtn from './AddDeleteInReduxCompWithBtn'
import { SAVE_FAVORITE, REMOVE_FAVORITE, ADD_TO_TEAM, REMOVE_FROM_TEAM } from '../actions/types'
import useRenderImgsDynamically from './hooks/useRenderImgsDynamically'
import { themes } from '../theming/themingStyles'
import { LightenDarkenColor } from 'lighten-darken-color';
import Color from 'color'
import pokemonRetroImgs from '../allGenPokeName/retroImgs'

const IndexCardComp = ({ specificPokemon, handleOnPressGoToStatsScreen }) => {
   const [renderPokemonImg, setRenderPokemonImg] = useState(null)

   // useEffect(() => {
   //    useRenderImgsDynamically({ pokemon_id: specificPokemon.pokemon_id, setRenderPokemonImg })
   // }, [specificPokemon])

   return (
      <PokemonCard onPress={() => handleOnPressGoToStatsScreen(specificPokemon.pokemon_id)}>
         <PokemonIndexContainer>
            {/* <Image source={renderPokemonImg} style={{ height: 80, width: 80 }} /> */}
            {pokemonRetroImgs[specificPokemon.pokemon_id - 1] &&
               <Image source={pokemonRetroImgs[specificPokemon.pokemon_id - 1].src} />
            }
         </PokemonIndexContainer>
         <TextNum>{specificPokemon.pokemon_id}</TextNum>
         <CenterText>
            <TextName>{specificPokemon.pokemon_name}</TextName>
         </CenterText>
         <PokeFavoriteBtn style={{ position: 'absolute', top: 0, right: 0, margin: 5 }}>
            <AddDeleteInReduxCompWithBtn
               payload={specificPokemon.pokemon_id}
               whatState={'favoritePokemon'}
               addType={SAVE_FAVORITE}
               deleteType={REMOVE_FAVORITE}
               child1={<FontAwesome name='star-o' size={20} />}
               child2={<FontAwesome name='star' size={20} color={'#ECDB1C'} />}
               btnStyle
            />
         </PokeFavoriteBtn>
         <PokeTeamBtn style={{ bottom: 0 }}>
            <AddDeleteInReduxCompWithBtn
               payload={specificPokemon.pokemon_id}
               whatState={'pokemonTeam'}
               addType={ADD_TO_TEAM}
               deleteType={REMOVE_FROM_TEAM}
               child1={<MaterialCommunityIcons name='pokeball' size={20} />}
               child2={<MaterialCommunityIcons name='pokeball' size={20} color={'#FD7E7E'} />}
               btnStyle
            />
         </PokeTeamBtn>
         <ViewForText>
            {specificPokemon.type.map((type, index) => {
               return (
                  <PokeTypesContainer key={index}>
                     <PokeTypesText
                        typeTxtColor={themes[type.toLowerCase()].pokeBox.typeTxtColor}
                        style={{
                           backgroundColor: themes[type.toLowerCase()].pokeBox.typeColor,
                           paddingLeft: 5,
                        }}
                        key={type}>
                        {type}
                     </PokeTypesText>
                  </PokeTypesContainer>
               )
            }
            )}
         </ViewForText>
      </PokemonCard>
   )
}

export default IndexCardComp