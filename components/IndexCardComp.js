import React, { PureComponent } from 'react'
import { Text, Button, FlatList, Image, View } from 'react-native'
import { ViewForText, CenterText, PokemonIndexContainer, PokeTypesContainer } from '../styles/containerStyles'
import { TextNum, TextName, PokeTypeText } from '../styles/textStyles'
import CachedImage from '../screens/CachedImage'
import { PokemonCard, PokeTeamBtn, PokeFavoriteBtn } from '../styles/btnStyles'
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'
import { styles } from '../styles/globalStyles'
import AddDeleteInReduxCompWithBtn from './AddDeleteInReduxCompWithBtn'
import { capitalizeFirstCharFunc } from '../logic/logic'
import { SAVE_FAVORITE, REMOVE_FAVORITE, ADD_TO_TEAM, REMOVE_FROM_TEAM } from '../actions/types'
//I found that you have to create a pureComponent for solving horrible proformance issues
class IndexCardComp extends PureComponent {

   render() {
      const specificPokemon = this.props.specificPokemon
      const handleOnPressGoToStatsScreen = this.props.handleOnPressGoToStatsScreen
      return (
         <PokemonCard onPress={() => handleOnPressGoToStatsScreen(specificPokemon.pokemon_name)}>
            <PokemonIndexContainer>
               <CachedImage source={`https://pokeres.bastionbot.org/images/pokemon/${specificPokemon.pokemon_id}.png`} />
            </PokemonIndexContainer>
            <TextNum>{specificPokemon.pokemon_id}</TextNum>
            <CenterText>
               <TextName>{specificPokemon.pokemon_name}</TextName>
            </CenterText>
            <PokeFavoriteBtn style={{ position: 'absolute', right: 0, top: 0, padding: 6 }}>
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
            <PokeTeamBtn style={{ position: 'absolute', right: 0, bottom: 0, padding: 6 }}>
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
               {specificPokemon.type.map((type, index) =>
                  <PokeTypesContainer key={index} >
                     <PokeTypeText key={type}>{type}</PokeTypeText>
                  </PokeTypesContainer>
               )}
            </ViewForText>
         </PokemonCard>
      )
   }
}

export default IndexCardComp

//() => handleOnPressGoToStatsScreen(item)