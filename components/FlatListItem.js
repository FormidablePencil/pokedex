import React, { PureComponent } from 'react'
import { Text, Button, FlatList } from 'react-native'
import { SuggestionsContainer, ViewForText } from '../styles/containerStyles'
import { TextNum, TextName } from '../styles/textStyles'
import CachedImage from '../screens/CachedImage'

class FlatListItem extends PureComponent {
   render() {
      const fetchedAllPokemon = this.props.item
      const handleOnPressGoToStatsScreen = this.props.handleOnPressGoToStatsScreen
      return (
         <SuggestionsContainer key onPress={() => handleOnPressGoToStatsScreen(fetchedAllPokemon.pokemon_name)}>
            <CachedImage
               source={`https://pokeres.bastionbot.org/images/pokemon/${fetchedAllPokemon.pokemon_id}.png`} />
            <ViewForText>
               <TextNum>{fetchedAllPokemon.pokemon_id}</TextNum>
               {fetchedAllPokemon.type.map(type =>
                  <Text key={type}>{type}</Text>
               )}
               <TextName>{fetchedAllPokemon.pokemon_name}</TextName>
            </ViewForText>
         </SuggestionsContainer>
      )
   }
}

export default FlatListItem

//() => handleOnPressGoToStatsScreen(item)