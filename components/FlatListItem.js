import React, { PureComponent } from 'react'
import { Text, Button, FlatList, Image } from 'react-native'
import { ViewForText, PokemonIndexContainer } from '../styles/containerStyles'
import { TextNum, TextName } from '../styles/textStyles'
import CachedImage from '../screens/CachedImage'
import { SuggestionsContainer } from '../styles/btnStyles'

class FlatListItem extends PureComponent {
   
   render() {
      const allPokemonData = this.props.allPokemonData
      const handleOnPressGoToStatsScreen = this.props.handleOnPressGoToStatsScreen
      return (
         <SuggestionsContainer onPress={() => handleOnPressGoToStatsScreen(allPokemonData.pokemon_name)}>
            <PokemonIndexContainer>
               <CachedImage source={`https://pokeres.bastionbot.org/images/pokemon/${allPokemonData.pokemon_id}.png`} />
            </PokemonIndexContainer>
            <ViewForText>
               <TextNum>{allPokemonData.pokemon_id}</TextNum>
               {allPokemonData.type.map(type =>
                  <Text key={type}>{type}</Text>)}
               <TextName>{allPokemonData.pokemon_name}</TextName>
            </ViewForText>
         </SuggestionsContainer>
      )
   }
}

export default FlatListItem

//() => handleOnPressGoToStatsScreen(item)